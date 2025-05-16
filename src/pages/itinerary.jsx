import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cityOptions = ['Manali', 'Leh Ladakh', 'Coorg', 'Andaman', 'Lakshadweep', 'Goa', 'Udaipur', 'Srinagar', 'Gangtok', 'Munnar', 'Varkala', 'Mcleodganj', 'Rishikesh', 'Alleppey', 'Darjeeling', 'Nainital', 'Shimla', 'Ooty', 'Jaipur', 'Lonavala', 'Mussoorie', 'Kodaikanal', 'Dalhousie', 'Pachmarhi', 'Varanasi', 'Mumbai', 'Agra', 'Kolkata', 'Jodhpur', 'Bangalore', 'Amritsar', 'Delhi', 'Jaisalmer', 'Mount Abu', 'Wayanad', 'Hyderabad', 'Pondicherry', 'Khajuraho', 'Chennai', 'Vaishno Devi', 'Ajanta and Ellora Caves', 'Haridwar', 'Kanyakumari', 'Pune', 'Kochi', 'Ahmedabad', 'Kanha National Park', 'Mysore', 'Chandigarh', 'Hampi', 'Gulmarg', 'Almora', 'Shirdi', 'Auli', 'Madurai', 'Amarnath', 'Bodh Gaya', 'Mahabaleshwar', 'Visakhapatnam', 'Kasol', 'Nashik', 'Tirupati', 'Ujjain', 'Jim Corbett National Park', 'Gwalior', 'Mathura', 'Jog Falls', 'Alibaug', 'Rameshwaram', 'Vrindavan', 'Coimbatore', 'Lucknow', 'Digha', 'Dharamshala', 'Kovalam', 'Kaziranga National Park', 'Madikeri', 'Matheran', 'Ranthambore', 'Agartala', 'Khandala', 'Kalimpong', 'Thanjavur', 'Bhubaneswar', 'Ajmer', 'Aurangabad', 'Jammu', 'Dehradun', 'Puri', 'Cherrapunji', 'Bikaner', 'Shimoga (Shivamogga)', 'Hogenakkal', 'Gir National Park', 'Kasauli', 'Pushkar', 'Chittorgarh', 'Nahan', 'Lavasa', 'Poovar'];

const interestOptions = [
  "Nature", "Adventure", "Food", "History", "Relaxation", "Nightlife", "Temples", "Shopping"
];
export default function Itinerary() {
  const [formData, setFormData] = useState({ city: "", days: 3, budget: "", interests: [], special_reqs: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [pageVisible, setPageVisible] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    setTimeout(() => setPageVisible(true), 300);
    AOS.init({ duration: 1000 });
  }, []);

  const handleCheckbox = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async () => {
    setLoading(true); setError(""); setResult("");
    try {
      const res = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      data.error ? setError(data.error) : setResult(data.itinerary);
    } catch {
      setError("Error connecting to the server.");
    }
    setLoading(false);
  };

  const toggleFAQ = (i) => setActiveFAQ(activeFAQ === i ? null : i);

  return (
    <div className={`transition-opacity duration-700 ${pageVisible ? "opacity-100" : "opacity-0"} bg-gradient-to-br from-[#0a0a1a] via-[#101025] to-[#121212] text-white min-h-screen`}>
      {/* ------------------ HEADER ------------------ */}
      <section className="text-center pt-20 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
          🧭 Personalized Itinerary Builder
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">Craft your multi-day trip using AI trained on Indian travel behavior and local knowledge.</p>
      </section>

      {/* ------------------ FORM ------------------ */}
      <section className="max-w-4xl mx-auto p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md" data-aos="fade-up">
        <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-2">📍 Destination</label>
            <select value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full p-3 bg-gray-900 rounded border border-gray-700">
              <option value="">-- Select a city --</option>
              {cityOptions.map((city, i) => <option key={i}>{city}</option>)}
            </select>
          </div>

          <div>
            <label className="block mb-2">🕒 Trip Duration: {formData.days} days</label>
            <input type="range" min={1} max={10} value={formData.days} onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) })} className="w-full accent-pink-500" />
          </div>

          <div>
            <label className="block mb-2">💸 Budget (₹)</label>
            <input type="number" placeholder="e.g., 15000" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full p-3 bg-gray-900 rounded border border-gray-700" />
          </div>

          <div>
            <label className="block mb-2">🎯 Interests</label>
            <div className="flex flex-wrap gap-3">
              {interestOptions.map((int) => (
                <label key={int} className="bg-gray-800 px-4 py-2 rounded cursor-pointer hover:bg-gray-700 flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={formData.interests.includes(int)} onChange={() => handleCheckbox(int)} />
                  {int}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2">⚙️ Special Requests</label>
            <textarea rows={3} value={formData.special_reqs} onChange={(e) => setFormData({ ...formData, special_reqs: e.target.value })} placeholder="E.g. Vegan meals, wheelchair support, Regional Language..." className="w-full p-3 bg-gray-900 rounded border border-gray-700" />
          </div>

          <button onClick={handleSubmit} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 p-3 rounded-lg w-full font-semibold transition hover:scale-105">
            ✨ Generate Itinerary
          </button>
        </form>

        {loading && (
          <div className="flex justify-center mt-6">
            <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="ml-4 text-sm text-pink-300">Planning your dream trip...</p>
          </div>
        )}
        {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        {result && (
          <div className="mt-10 bg-gray-900 p-6 rounded-lg border border-purple-600/20 shadow-lg whitespace-pre-wrap">
            <h3 className="text-xl font-bold mb-2 text-pink-400">📑 Your AI Travel Plan</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{result}</p>
          </div>
        )}
      </section>

      {/* ------------------ HOW IT WORKS ------------------ */}
      <section className="py-20 text-center bg-gradient-to-br from-[#12122a] to-[#1c1c3a]">
        <h2 className="text-3xl font-bold mb-10 text-white">🧠 How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto text-left">
          {[
            ["🗺️ Location Specific", "This application matches activities to your selected city’s culture, terrain, and weather."],
            ["⚙️ Special Requirements ?", "This application can all your special requirements - even provide all planning in your specified regional language."],
            ["💡 Local Insights", "Festivals, food, local hacks — all factored into the AI-generated plan."]
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 bg-gradient-to-br from-[#1f1f2e]/70 to-[#22223e]/70 rounded-xl border border-purple-500/10 hover:border-pink-500/30 shadow transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ FAQ ------------------ */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f20] to-[#1a1a30] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">❓ Itinerary FAQs</h2>
          {[
            ["Does the itinerary include travel time?", "Yes! It accounts for realistic travel between attractions."],
            ["Is it suitable for solo/family/group?", "Totally. Just tailor the interests and days to your group vibe."],
            ["Do I get suggestions for food or local stays?", "Yes. The AI often suggests experiences beyond sightseeing too."],
            ["Can I regenerate with different interests?", "Absolutely. Try as many variations as you like."]
          ].map(([q, a], idx) => (
            <div key={idx} className="mb-4 bg-gray-900/40 border border-pink-600/20 rounded-lg" data-aos="fade-up" data-aos-delay={idx * 100}>
              <button onClick={() => toggleFAQ(idx)} className="w-full p-4 flex justify-between items-center text-left">
                <h3 className="font-semibold text-lg">{q}</h3>
                <span className={`transition-transform ${activeFAQ === idx ? "rotate-180" : ""}`}>▼</span>
              </button>
              {activeFAQ === idx && <div className="px-5 pb-4 text-sm text-gray-400">{a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ CTA ------------------ */}
      <section className="py-20 text-center bg-gradient-to-br from-pink-900 via-purple-900 to-[#121212] text-white">
        <h2 className="text-3xl font-bold mb-4">Explore India With a Plan</h2>
        <p className="text-gray-300 mb-6">Let AI help you travel smart and local ✨</p>
        <a href="/cost" className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
          Plan My Budget Too →
        </a>
      </section>

    </div>
  );
}
