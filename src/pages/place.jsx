// src/pages/place.jsx
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const popularPlaces = ['Manali', 'Leh Ladakh', 'Coorg', 'Andaman', 'Lakshadweep', 'Goa', 'Udaipur', 'Srinagar', 'Gangtok', 'Munnar', 'Varkala', 'Mcleodganj', 'Rishikesh', 'Alleppey', 'Darjeeling', 'Nainital', 'Shimla', 'Ooty', 'Jaipur', 'Lonavala', 'Mussoorie', 'Kodaikanal', 'Dalhousie', 'Pachmarhi', 'Varanasi', 'Mumbai', 'Agra', 'Kolkata', 'Jodhpur', 'Bangalore', 'Amritsar', 'Delhi', 'Jaisalmer', 'Mount Abu', 'Wayanad', 'Hyderabad', 'Pondicherry', 'Khajuraho', 'Chennai', 'Vaishno Devi', 'Ajanta and Ellora Caves', 'Haridwar', 'Kanyakumari', 'Pune', 'Kochi', 'Ahmedabad', 'Kanha National Park', 'Mysore', 'Chandigarh', 'Hampi', 'Gulmarg', 'Almora', 'Shirdi', 'Auli', 'Madurai', 'Amarnath', 'Bodh Gaya', 'Mahabaleshwar', 'Visakhapatnam', 'Kasol', 'Nashik', 'Tirupati', 'Ujjain', 'Jim Corbett National Park', 'Gwalior', 'Mathura', 'Jog Falls', 'Alibaug', 'Rameshwaram', 'Vrindavan', 'Coimbatore', 'Lucknow', 'Digha', 'Dharamshala', 'Kovalam', 'Kaziranga National Park', 'Madikeri', 'Matheran', 'Ranthambore', 'Agartala', 'Khandala', 'Kalimpong', 'Thanjavur', 'Bhubaneswar', 'Ajmer', 'Aurangabad', 'Jammu', 'Dehradun', 'Puri', 'Cherrapunji', 'Bikaner', 'Shimoga (Shivamogga)', 'Hogenakkal', 'Gir National Park', 'Kasauli', 'Pushkar', 'Chittorgarh', 'Nahan', 'Lavasa', 'Poovar'];

const interestOptions = [
  "beach", "beaches", "architecture", "temples", "hill", "mountains", "wildlife", "heritage",
  "cultural", "ancient", "buddhist", "colonial", "spiritual", "cafes", "caves", "adventure",
  "trekking", "shopping", "city", "island", "historical", "lake", "valley", "desert"
];

const seasons = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function SimilarPlaces() {
  const [activeTab, setActiveTab] = useState("basic");
  const [basicForm, setBasicForm] = useState({ place: "" });
  const [hybridForm, setHybridForm] = useState({ rating: 4, durationFrom: 2, durationTo: 5, keywords: [], season: "" });
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {};
  }, []);
  
  const toggleFAQ = (i) => setActiveFAQ(activeFAQ === i ? null : i);

  const handleCheckboxChange = (keyword) => {
    setHybridForm((prev) => ({
      ...prev,
      keywords: prev.keywords.includes(keyword)
        ? prev.keywords.filter((k) => k !== keyword)
        : [...prev.keywords, keyword],
    }));
  };

  const handleBasicSubmit = async () => {
    setLoading(true); setError(""); setResults([]);
    try {
      const res = await fetch("/api/similar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ place: basicForm.place }),
      });
      const data = await res.json();
      data.error ? setError(data.error) : setResults(data);
    } catch {
      setError("Server error.");
    }
    setLoading(false);
  };

  const handleHybridSubmit = async () => {
    setLoading(true); setError(""); setResults([]);
    try {
      const res = await fetch("/api/hybrid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          desired_rating: hybridForm.rating,
          duration_range: [hybridForm.durationFrom, hybridForm.durationTo],
          keywords: hybridForm.keywords,
          preferred_time: hybridForm.season,
        }),
      });
      const data = await res.json();
      data.error ? setError(data.error) : setResults(data);
    } catch {
      setError("Server error.");
    }
    setLoading(false);
  };

  return (
    <div className="text-white bg-gradient-to-br from-[#0a0a1a] via-[#121222] to-[#0f0f23] min-h-screen px-4 py-12">

      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
        🌍 Discover Similar Indian Destinations
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-10 gap-4">
        {["basic", "hybrid"].map((mode) => (
          <button
            key={mode}
            onClick={() => { setActiveTab(mode); setResults([]); setError(""); }}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === mode ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
          >
            {mode === "basic" ? "🔍 Basic Mode" : "🤖 AI Mode"}
          </button>
        ))}
      </div>

      {/* Forms */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-2xl">
        {activeTab === "basic" ? (
          <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
            <select value={basicForm.place} onChange={(e) => setBasicForm({ place: e.target.value })} className="p-3 rounded bg-gray-900 border border-gray-700">
              <option value="">Select a place you love</option>
              {popularPlaces.map((place, i) => <option key={i} value={place}>{place}</option>)}
            </select>
            <button type="submit" onClick={handleBasicSubmit} className="bg-green-600 hover:bg-green-700 p-3 rounded shadow">
              Recommend Similar Places
            </button>
          </form>
        ) : (
          <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
            <label className="text-sm text-gray-300">Minimum Rating: {hybridForm.rating.toFixed(1)}</label>
            <input type="range" min={3} max={5} step={0.1} value={hybridForm.rating} onChange={(e) => setHybridForm({ ...hybridForm, rating: parseFloat(e.target.value) })} className="w-full accent-purple-500" />

            {/* Duration Range */}
            <div>
              <label className="text-sm text-gray-300">Ideal Duration: From {hybridForm.durationFrom} to {hybridForm.durationTo} days</label>
              <div className="flex gap-4 items-center mt-2">
                <div className="flex-1">
                  <label className="text-xs text-gray-400">From</label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={hybridForm.durationFrom}
                    onChange={(e) =>
                      setHybridForm((prev) => ({
                        ...prev,
                        durationFrom: Math.min(parseInt(e.target.value), prev.durationTo),
                      }))
                    }
                    className="w-full accent-purple-500"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-xs text-gray-400">To</label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={hybridForm.durationTo}
                    onChange={(e) =>
                      setHybridForm((prev) => ({
                        ...prev,
                        durationTo: Math.max(parseInt(e.target.value), prev.durationFrom),
                      }))
                    }
                    className="w-full accent-purple-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-300 mb-2">🧭 Travel Interests</p>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((k) => (
                  <label key={k} className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm cursor-pointer flex items-center gap-2">
                    <input type="checkbox" checked={hybridForm.keywords.includes(k)} onChange={() => handleCheckboxChange(k)} />
                    {k}
                  </label>
                ))}
              </div>
            </div>

            <select value={hybridForm.season} onChange={(e) => setHybridForm({ ...hybridForm, season: e.target.value })} className="p-3 rounded bg-gray-900 border border-gray-700">
              <option value="">Preferred Season</option>
              {seasons.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>

            <button onClick={handleHybridSubmit} className="bg-purple-600 hover:bg-purple-700 p-3 rounded shadow">Get AI Recommendations</button>
          </form>
        )}

        {loading && <p className="text-yellow-400 text-center mt-6">⏳ Finding perfect matches...</p>}
        {error && <p className="text-red-400 text-center mt-6">{error}</p>}
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-gradient">🌟 Recommendations</h3>
          <ul className="space-y-4">
            {results.map((place, idx) => (
              <li key={idx} className="bg-gradient-to-br from-[#1f1f2e] to-[#1b1b2d] p-5 rounded-lg border border-white/10 shadow-lg">
                <p className="text-lg font-semibold text-white">{place.City}</p>
                <p className="text-sm text-gray-400">Rating: {place.Ratings} | Duration: {place.Ideal_duration} | Best Time: {place.Best_time_to_visit}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* How it Works */}
      <section className="mt-24 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">🔍 How Recommendations Work</h2>
        <p className="text-gray-400 mb-6">This system uses <span className="text-amber-400">TF-IDF cosine similarity</span> to find places similar in vibe, culture, and best season to your selected place.</p>
        <p className="text-gray-400 mb-4">In AI mode, this application matches your desired rating, duration, travel keywords, and season preference with our city database using smart filtering + keyword overlap scoring.</p>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center text-white">❓ FAQs</h3>
        {[
          ["How is similarity calculated?", "We use AI with TF-IDF (text vectorization) to find similar vibes, climates, and descriptions of destinations."],
          ["Can I use this for lesser-known places?", "Yes! It works for 100+ Indian destinations including hidden gems."],
          ["What if I don’t know what I want?", "Use the AI mode – just tell us your vibe, we’ll find the rest."],
          ["Do you use real data?", "Yes, we trained our model on actual Indian travel data."],
        ].map(([q, a], i) => (
          <div key={i} className="mb-4 border border-white/10 rounded">
            <button onClick={() => toggleFAQ(i)} className="w-full p-4 flex justify-between items-center bg-[#181828] hover:bg-[#1f1f2e] text-left">
              <span className="font-semibold">{q}</span>
              <span className={`transition-transform ${activeFAQ === i ? "rotate-180" : ""}`}>▼</span>
            </button>
            {activeFAQ === i && (
              <div className="p-4 text-sm text-gray-400 bg-[#1b1b2d]">{a}</div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 mt-24 bg-gradient-to-br from-green-900 via-cyan-900 to-[#121212] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready for your Destination ?</h2>
        <p className="text-gray-300 mb-6">Let’s help you carry just what you need – nothing more, nothing less.</p>
        <a href="/packing" className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 hover:scale-105 rounded-full font-semibold transition-all shadow-xl">Explore Packing Items →</a>
      </section>
    </div>
  );
}
