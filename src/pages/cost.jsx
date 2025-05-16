import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cities = ['Manali', 'Leh Ladakh', 'Coorg', 'Andaman', 'Lakshadweep', 'Goa', 'Udaipur', 'Srinagar', 'Gangtok', 'Munnar', 'Varkala', 'Mcleodganj', 'Rishikesh', 'Alleppey', 'Darjeeling', 'Nainital', 'Shimla', 'Ooty', 'Jaipur', 'Lonavala', 'Mussoorie', 'Kodaikanal', 'Dalhousie', 'Pachmarhi', 'Varanasi', 'Mumbai', 'Agra', 'Kolkata', 'Jodhpur', 'Bangalore', 'Amritsar', 'Delhi', 'Jaisalmer', 'Mount Abu', 'Wayanad', 'Hyderabad', 'Pondicherry', 'Khajuraho', 'Chennai', 'Vaishno Devi', 'Ajanta and Ellora Caves', 'Haridwar', 'Kanyakumari', 'Pune', 'Kochi', 'Ahmedabad', 'Kanha National Park', 'Mysore', 'Chandigarh', 'Hampi', 'Gulmarg', 'Almora', 'Shirdi', 'Auli', 'Madurai', 'Amarnath', 'Bodh Gaya', 'Mahabaleshwar', 'Visakhapatnam', 'Kasol', 'Nashik', 'Tirupati', 'Ujjain', 'Jim Corbett National Park', 'Gwalior', 'Mathura', 'Jog Falls', 'Alibaug', 'Rameshwaram', 'Vrindavan', 'Coimbatore', 'Lucknow', 'Digha', 'Dharamshala', 'Kovalam', 'Kaziranga National Park', 'Madikeri', 'Matheran', 'Ranthambore', 'Agartala', 'Khandala', 'Kalimpong', 'Thanjavur', 'Bhubaneswar', 'Ajmer', 'Aurangabad', 'Jammu', 'Dehradun', 'Puri', 'Cherrapunji', 'Bikaner', 'Shimoga (Shivamogga)', 'Hogenakkal', 'Gir National Park', 'Kasauli', 'Pushkar', 'Chittorgarh', 'Nahan', 'Lavasa', 'Poovar'];
const accommodations = ['Hotel', 'GuestHouse', 'Homestay', 'Luxury Camps', 'Boutique Hotel'];
const transports = ['Bus', 'Train', 'Flight'];
const foods = ['Standard', 'Budget', 'Premium'];
const activityLevels = ['High', 'Medium', 'Low'];

export default function CostEstimator() {
  const [formData, setFormData] = useState({
    city: "", days: 3, average_cost: 3000,
    accommodation: "", transport: "", food: "", activity: ""
  });
  const [estimated, setEstimated] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);
  const toggleFAQ = (idx) => setActiveFAQ(activeFAQ === idx ? null : idx);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    setLoading(true); setError(""); setEstimated(null);
    try {
      const res = await fetch("/api/cost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setEstimated(data.estimated_cost);
    } catch (err) {
      setError("Error connecting to server.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a1a] via-[#0f0f23] to-[#121212] text-white min-h-screen overflow-x-hidden">
      {/* ------------------ HERO ------------------ */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          💰 Plan Your Budget Smartly
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Realistic cost prediction using local travel patterns across India 🌍
        </p>
      </section>

      {/* ------------------ FORM ------------------ */}
      <section className="max-w-4xl mx-auto p-8 bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-white/10 mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-6">Trip Details</h2>
        <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm mb-1">City:</label>
            <select name="city" onChange={handleChange} value={formData.city} className="w-full bg-gray-900 p-3 rounded border border-gray-700">
              <option value="">Select a City</option>
              {cities.map((c, i) => <option key={i}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Trip Duration: {formData.days} days</label>
            <input type="range" name="days" min={1} max={20} value={formData.days} onChange={(e) => setFormData({ ...formData, days: +e.target.value })} className="w-full accent-teal-400" />
          </div>

          <div>
            <label className="block text-sm mb-1">Avg Cost / Day (₹)</label>
            <input type="number" name="average_cost" value={formData.average_cost} onChange={handleChange} className="w-full p-3 bg-gray-900 rounded border border-gray-700" />
          </div>

          {[
            ["accommodation", accommodations],
            ["transport", transports],
            ["food", foods],
            ["activity", activityLevels]
          ].map(([name, options], idx) => (
            <div key={idx}>
              <p className="capitalize text-sm mb-1">{name.replace("_", " ")}:</p>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <label key={opt} className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
                    <input type="radio" name={name} value={opt} checked={formData[name] === opt} onChange={handleChange} className="mr-2" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button onClick={handleSubmit} className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-600 p-3 rounded-lg font-semibold mt-4 transition hover:scale-105">
            {loading ? "Estimating..." : "Estimate Cost"}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-400">{error}</p>}
        {estimated && <div className="mt-6 text-center text-xl text-green-400 font-bold">Estimated Trip Cost: ₹{estimated}</div>}
      </section>

      {/* ------------------ HOW IT WORKS ------------------ */}
      <section className="py-20 text-center bg-gradient-to-br from-[#11112a] to-[#0a0a1a]">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-left">
          {[
            ["🧠 Machine Learning", "Trained on travel cost data from 100+ Indian cities."],
            ["📍 Personal Preferences", "We include transport, food, stay, and travel style."],
            ["📊 Realistic Outputs", "No fluff — only region-specific predictions based on past travelers."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gradient-to-br from-[#1a1a2e]/70 to-[#0f0f2a]/70 p-6 rounded-xl border border-cyan-400/10 hover:border-cyan-300/30 transition-all hover:-translate-y-1 shadow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ FAQ ------------------ */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a1a] to-[#0f0f23] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">FAQs</h2>
          {[
            ["Is this free?", "Yes, we are 100% free for all users."],
            ["How accurate is the estimate?", "We use real travel data and AI for close-to-real estimates."],
            ["Does it cover transportation?", "Yes, including intercity and local transport."],
            ["What if I’m not sure about my food/accommodation?", "Just pick what's closest — the model still works well!"]
          ].map(([q, a], idx) => (
            <div key={idx} className="mb-4 bg-gray-900/40 border border-teal-600/20 rounded-lg">
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
      <section className="text-center py-20 bg-gradient-to-r from-teal-900 via-cyan-900 to-[#121212]">
        <h2 className="text-3xl font-bold mb-4">Plan Smarter. Travel Better.</h2>
        <p className="text-gray-300 mb-6">Use our full AI suite to build your Indian journey.</p>
        <a href="/itinerary" className="bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-cyan-500 hover:to-teal-500 px-8 py-3 rounded-lg font-semibold shadow-lg transition hover:scale-105">
          Build My Itinerary
        </a>
      </section>

    </div>
  );
}
