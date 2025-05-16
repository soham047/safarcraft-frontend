// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a1a] to-[#0f0f23] py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* About Section */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            सफरCraft
          </h3>
          <p className="text-sm leading-relaxed">
            SafarCraft is an AI-powered travel companion designed to uncover India's hidden gems, heritage sites, mystical landscapes, and vibrant cultures.
            <br /><br />
            Explore smarter. Travel deeper. ✨
          </p>
        </div>

        {/* Technology Section */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">🚀 How It Works</h4>
          <ul className="space-y-2 text-sm">
            <li>🔎 AI-based Itinerary Planning</li>
            <li>💰 Realistic Travel Budget Estimator</li>
            <li>🎒 Personalized Packing Assistance</li>
            <li>🧭 Smart Place Recommendation Engine</li>
            <li>📸 Visual Gallery Powered by Pexels API</li>
          </ul>
        </div>

        {/* Creator Credit Section */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">👨‍💻 Crafted With ❤️</h4>
          <p className="text-sm leading-relaxed">
            Designed, developed, and passionately built by <span className="text-amber-400 font-semibold">Soham</span> as a tribute to the spirit of Indian exploration. 
            <br /><br />
            Powered by modern AI to make travel dreams more accessible and magical.
          </p>

          <div className="mt-4 flex gap-4">
            {/* Optional: Future social links if you want */}
            {/* <a href="#" className="hover:text-white transition">
              LinkedIn
            </a> */}
            {/* <a href="#" className="hover:text-white transition">
              GitHub
            </a> */}
          </div>
        </div>

      </div>

      <div className="text-center text-xs mt-10 text-gray-600">
        © {new Date().getFullYear()} सफरCraft. All rights reserved.
      </div>
    </footer>
  );
}
