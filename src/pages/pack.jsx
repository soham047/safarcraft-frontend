import { useState, useEffect } from "react";

const destinations = ['Manali', 'Leh', 'Coorg', 'Andaman', 'Lakshadweep', 'Goa', 'Udaipur', 'Srinagar', 'Gangtok', 'Munnar', 'Varkala', 'Mcleodganj', 'Rishikesh', 'Alleppey', 'Darjeeling', 'Nainital', 'Shimla', 'Ooty', 'Jaipur', 'Lonavala', 'Mussoorie', 'Kodaikanal', 'Dalhousie', 'Pachmarhi', 'Varanasi', 'Mumbai', 'Agra', 'Kolkata', 'Jodhpur', 'Bangalore', 'Amritsar', 'Delhi', 'Jaisalmer', 'Mount Abu', 'Wayanad', 'Hyderabad', 'Pondicherry', 'Khajuraho', 'Chennai', 'Vaishno Devi', 'Ajanta and Ellora Caves', 'Haridwar', 'Kanyakumari', 'Pune', 'Kochi', 'Ahmedabad', 'Kanha National Park', 'Mysore', 'Chandigarh', 'Hampi', 'Gulmarg', 'Almora', 'Shirdi', 'Auli', 'Madurai', 'Amarnath', 'Bodh Gaya', 'Mahabaleshwar', 'Visakhapatnam', 'Kasol', 'Nashik', 'Tirupati', 'Ujjain', 'Jim Corbett National Park', 'Gwalior', 'Mathura', 'Jog Falls', 'Alibaug', 'Rameshwaram', 'Vrindavan', 'Coimbatore', 'Lucknow', 'Digha', 'Dharamshala', 'Kovalam', 'Kaziranga National Park', 'Madikeri', 'Matheran', 'Ranthambore', 'Agartala', 'Khandala', 'Kalimpong', 'Thanjavur', 'Bhubaneswar', 'Ajmer', 'Aurangabad', 'Jammu', 'Dehradun', 'Puri', 'Cherrapunji', 'Bikaner', 'Shimoga (Shivamogga)', 'Hogenakkal', 'Gir National Park', 'Kasauli', 'Pushkar', 'Chittorgarh', 'Nahan', 'Lavasa', 'Poovar'];
const travelTypes = ['Business', 'Family', 'Couple', 'Solo'];
const activityTypes = ['Relaxation', 'Business', 'Adventure', 'Pilgrimage', 'Sightseeing'];
const weathers = ['Cold', 'Hot', 'Mild', 'Rainy'];
const genders = ["Male", "Female", "Other"];

export default function PackingList() {
  const [formData, setFormData] = useState({
    destination: "", duration: 3, weather: "", activity: "", travelType: "", gender: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult([]);
    const payload = {
      destination: formData.destination,
      duration: formData.duration,
      weather: formData.weather,
      activity: formData.activity,
      type: formData.travelType,
      gender: formData.gender,
    };

    try {
      const res = await fetch("https://safarcraft-backend.onrender.com/api/packing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      data.error ? setError(data.error) : setResult(data.list);
    } catch {
      setError("Error connecting to the server.");
    }
    setLoading(false);
  };

  return (
    <div className="text-white bg-gradient-to-br from-[#0a0a1a] via-[#0f0f23] to-[#121212] min-h-screen pb-16">
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">🎒 Packing List Generator</h2>
        <p className="text-center text-gray-400 mb-8">Plan smart, pack lighter. Let AI pack your bags based on your journey!</p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <select className="w-full bg-gray-900 border border-gray-700 rounded p-3" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })}>
            <option value="">Select Destination</option>
            {destinations.map((place, i) => <option key={i} value={place}>{place}</option>)}
          </select>

          <div>
            <label className="text-sm text-gray-300">Trip Duration: {formData.duration} days</label>
            <input type="range" min={1} max={15} value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })} className="w-full accent-yellow-500" />
          </div>

          {[["weather", weathers], ["activity", activityTypes], ["travelType", travelTypes], ["gender", genders]].map(([field, list]) => (
            <select key={field} className="w-full bg-gray-900 border border-gray-700 rounded p-3" value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}>
              <option value="">{field[0].toUpperCase() + field.slice(1)}</option>
              {list.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
          ))}

          <button onClick={handleSubmit} className="w-full bg-yellow-500 hover:bg-yellow-600 p-3 rounded shadow font-bold transition">
            {loading ? "Generating..." : "Generate Packing List"}
          </button>
        </form>

        {error && <p className="text-center mt-6 text-red-400">{error}</p>}
        {result.length > 0 && (
          <div className="mt-10 p-6 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">🧳 Suggested Packing List</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">{result.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-16 px-6 max-w-5xl mx-auto text-white">
        <h2 className="text-2xl font-bold text-center mb-8">🛠️ How This Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["🌍 Destination + Duration", "We take your chosen destination and trip length..."],
            ["🌦️ Real Weather + Activity Logic", "Our AI knows how travel type + weather impacts what you carry..."],
            ["🧠 Model Trained on Indian Trips", "Trained on 1000s of real Indian traveler data."]
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-yellow-400/10 hover:border-yellow-400/30 transition-all">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-yellow-400">❓ Packing List FAQs</h2>
        {[
          ["Is this tool free?", "Yes! It's completely free and privacy-friendly."],
          ["Does it work for all genders?", "Yes, including gender-specific essentials."],
          ["Can I use it for treks or business trips?", "Definitely, just select the travel + activity type."],
          ["Does it update based on seasons?", "Yes! We consider monsoons, winter gear, etc."],
        ].map(([q, a], i) => (
          <div key={i} className="mb-4 rounded border border-yellow-500/10 hover:border-yellow-500/30 transition-all bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60">
            <button className="w-full text-left px-5 py-4 flex justify-between items-center" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
              <h3 className="font-semibold">{q}</h3>
              <span className="text-yellow-300">{faqOpen === i ? "−" : "+"}</span>
            </button>
            {faqOpen === i && <div className="px-5 pb-4 text-sm text-gray-300">{a}</div>}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-900 to-yellow-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore ?</h2>
        <p className="text-lg text-white/80 mb-6">Let us pick your next destination, within no time.</p>
        <a href="/similar" className="bg-white text-yellow-800 font-bold px-6 py-3 rounded-full hover:bg-yellow-200 transition-all">
          🎒 Generate Your Packing List
        </a>
      </section>
    </div>
  );
}
