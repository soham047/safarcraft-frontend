// src/pages/about.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="text-white bg-gradient-to-br from-[#0a0a1a] via-[#0f0f23] to-[#121212] font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-amber-900 via-orange-900 to-[#121212]">
        <div className="max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            About सफर craft
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            An AI-powered journey into the heart of India – where cutting-edge technology meets timeless traditions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img src="/logo.png" alt="Indian Culture" className="rounded-xl shadow-xl" />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4 text-amber-400">Who We Are</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              सफर craft is an innovative AI-powered travel assistant designed specifically for exploring India's diverse landscapes and cultures. Born from a student's passion for both technology and Indian heritage, this project represents months of research, data collection, and model training.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our platform serves as a bridge between traditional travel planning and modern AI capabilities, offering four specialized services that leverage machine learning, deep learning, and data analysis to simplify your Indian travel experience.
            </p>
            <p className="mt-4 text-sm text-orange-300">"India is not a place, it's an emotion. We simply gave that emotion an intelligent guide."</p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#12121f]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            Our AI-Powered Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#1c1c2e] p-8 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">1. Intelligent Itinerary Planner</h3>
              <p className="text-gray-400 mb-4">
                Our flagship service powered by GROQ's LLM with LangChain implementation. The system uses Retrieval-Augmented Generation (RAG) with a comprehensive knowledge base of:
              </p>
              <ul className="text-gray-400 text-sm list-disc pl-5 mb-4 space-y-2">
                <li>Detailed city profiles (climate, attractions, culture)</li>
                <li>Transportation networks and timings</li>
                <li>Local customs and etiquette guidelines</li>
                <li>Regional festival calendars</li>
              </ul>
              <p className="text-gray-400">
                The model handles complex queries like "3-day wheelchair accessible itinerary for Jaipur in summer with Marwari language tips" by combining its general knowledge with our curated India-specific data.
              </p>
            </div>
            
            <div className="bg-[#1c1c2e] p-8 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">2. Accurate Cost Calculator</h3>
              <p className="text-gray-400 mb-4">
                Built using a Random Forest Regression model trained on:
              </p>
              <ul className="text-gray-400 text-sm list-disc pl-5 mb-4 space-y-2">
                <li>10,000+ data points from Indian travel expenses</li>
                <li>Seasonal price variations across 50+ cities</li>
                <li>Transportation modes (trains, flights, buses)</li>
                <li>Accommodation types (hotels, homestays, hostels)</li>
                <li>Food preferences (street food to fine dining)</li>
              </ul>
              <p className="text-gray-400">
                The model considers your travel style (budget/mid-range/luxury) and provides cost breakdowns with 89% accuracy based on our test data.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1c2e] p-8 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">3. Smart Packing List Generator</h3>
              <p className="text-gray-400 mb-4">
                Utilizes a custom-trained classification model that analyzes:
              </p>
              <ul className="text-gray-400 text-sm list-disc pl-5 mb-4 space-y-2">
                <li>Destination climate data (temperature, rainfall)</li>
                <li>Seasonal variations (monsoon, winter, summer)</li>
                <li>Travel duration and purpose (business/leisure/adventure)</li>
                <li>Special requirements (religious sites, trekking, etc.)</li>
              </ul>
              <p className="text-gray-400">
                The system classifies items into essential, recommended, and optional categories, with cultural considerations like modest clothing for temple visits.
              </p>
            </div>
            
            <div className="bg-[#1c1c2e] p-8 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">4. Similar Place Finder</h3>
              <p className="text-gray-400 mb-4">
                Employs cosine similarity on a feature matrix of:
              </p>
              <ul className="text-gray-400 text-sm list-disc pl-5 mb-4 space-y-2">
                <li>Geographical features (beaches, mountains, deserts)</li>
                <li>Cultural characteristics (festivals, architecture)</li>
                <li>Climate patterns and best visiting seasons</li>
                <li>Tourist density and activity types</li>
              </ul>
              <p className="text-gray-400">
                When you love a destination, our algorithm finds hidden gems with similar vibes across India - like finding "Goa-like beaches" in Gokarna or "Shimla-like hill stations" in Coonoor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
          Our Powerful Technology Stack
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI/ML Core */}
          <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">AI/ML Foundation</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="tech-pill">GROQ LLM</div>
              <div className="tech-pill">LangChain</div>
              <div className="tech-pill">RAG</div>
              <div className="tech-pill">NLP</div>
              <div className="tech-pill">Scikit-learn</div>
              <div className="tech-pill">TensorFlow</div>
              <div className="tech-pill">PyTorch</div>
              <div className="tech-pill">Transformers</div>
              <div className="tech-pill">Cosine Similarity</div>
              <div className="tech-pill">Sentence-BERT</div>
              <div className="tech-pill">NLTK</div>
            </div>
          </div>
          
          {/* Development Stack */}
          <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">Development Stack</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="tech-pill">React.js</div>
              <div className="tech-pill">Vite</div>
              <div className="tech-pill">Tailwind CSS</div>
              <div className="tech-pill">Framer Motion</div>
              <div className="tech-pill">Flask</div>
              <div className="tech-pill">FastAPI</div>
              <div className="tech-pill">Python</div>
              <div className="tech-pill">JavaScript</div>
              <div className="tech-pill">HTML5</div>
              <div className="tech-pill">CSS3</div>
              <div className="tech-pill">AOS</div>
            </div>
          </div>
          
          {/* Data & Infrastructure */}
          <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">Data & Infrastructure</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="tech-pill">Pandas</div>
              <div className="tech-pill">NumPy</div>
              <div className="tech-pill">Pexels API</div>
              <div className="tech-pill">Vercel</div>
              <div className="tech-pill">Render</div>
              <div className="tech-pill">GitHub</div>
            </div>
          </div>
        </div>

        {/* Specialized Techniques */}
        <div className="mt-8 bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-3 text-amber-400">Specialized Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <div className="tech-pill">Random Forest</div>
            <div className="tech-pill">XGBoost</div>
            <div className="tech-pill">Feature Engineering</div>
            <div className="tech-pill">Hyperparameter Tuning</div>
            <div className="tech-pill">Prompt Engineering</div>
            <div className="tech-pill">Vector Embeddings</div>
            <div className="tech-pill">Semantic Search</div>
            <div className="tech-pill">Knowledge Graphs</div>
            <div className="tech-pill">Transfer Learning</div>
            <div className="tech-pill">Data Augmentation</div>
            <div className="tech-pill">CI/CD Pipelines</div>
            <div className="tech-pill">Microservices</div>
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f23] to-[#121212]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            The Development Journey
          </h2>
          
          <div className="space-y-8">
            <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">Research Phase</h3>
              <p className="text-gray-400 text-sm">
                Spent 2 months collecting and cleaning data from various sources including government tourism portals, travel blogs, and expense reports. Created a comprehensive dataset covering all major Indian tourist destinations with parameters like climate, costs, attractions, and cultural notes.
              </p>
            </div>
            
            <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">Model Training</h3>
              <p className="text-gray-400 text-sm">
                Experimented with various algorithms before settling on Random Forest for cost prediction (best balance of accuracy and interpretability). For the packing list, implemented a custom classification model trained on climate data and travel scenarios. The similarity engine went through multiple iterations to find the optimal feature weighting.
              </p>
            </div>
            
            <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">LLM Integration</h3>
              <p className="text-gray-400 text-sm">
                The biggest challenge was making the itinerary planner both comprehensive and specific. Implemented RAG to combine GROQ's general knowledge with our curated India data. Created prompt templates to ensure consistent formatting and included special handling for Indian-specific queries (regional languages, accessibility needs, festival dates).
              </p>
            </div>
            
            <div className="bg-[#1c1c2e] p-6 rounded-lg border border-amber-500/20" data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">Future Roadmap</h3>
              <p className="text-gray-400 text-sm">
                Planning to add real-time price tracking, user preference learning, regional language support expansion, and AR-based cultural guides. Also working on a collaborative filtering system to recommend destinations based on similar users' preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Creator */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
          Behind the Code
        </h2>
        <div className="bg-[#1c1c2e] p-8 rounded-lg border border-amber-500/20 text-left" data-aos="zoom-in">
          <p className="text-gray-400 mb-6">
            Hi, I'm <span className="text-amber-400 font-semibold">Soham Dutta</span>, a pre-final year Computer Science student passionate about AI and its applications in solving real-world problems. सफर craft represents my journey of combining academic knowledge with cultural heritage.
          </p>
          <p className="text-gray-400 mb-6">
            This project was born during my exploration of India's diverse landscapes. I realized traditional travel planning often misses the nuances that make Indian travel unique - the regional variations, the unspoken customs, the seasonal transformations. सफर craft is my attempt to bridge that gap using technology.
          </p>
          <p className="text-gray-400 mb-6">
            Built entirely as a solo project, it challenged me to wear multiple hats - from data collection and model training to API design and frontend development. The most rewarding part was seeing how machine learning could capture and represent India's incredible diversity.
          </p>
          <div className="inline-block bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30 px-6 py-3 rounded-lg text-sm text-orange-300">
            💻 4 ML Models | 🏛️ 100+ Indian Destinations | 📊 10,000+ Data Points | 🧠 1 Passionate Developer
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-800 to-orange-800 text-white text-center">
        <div data-aos="zoom-in">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore India Like Never Before?</h2>
          <p className="text-lg text-orange-100 mb-8">Experience the future of travel planning with AI-powered precision and local insights.</p>
          <a 
            href="/" 
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-lg text-white font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            Start Your AI-Powered सफर →
          </a>
        </div>
      </section>
    </div>
  );
}
