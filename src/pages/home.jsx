// src/pages/home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const testimonials = [
    ["“Saved us hours of planning. We discovered hidden waterfalls in Coorg!”", "Priya S.", "Backpacker"],
    ["“Cost estimate was perfect for our Rajasthan trip.”", "Aditya M.", "Solo Traveler"],
    ["“Packing list included everything we needed for Kerala's monsoon.”", "Rhea & Kabir", "Couple"],
    ["“Our Shimla itinerary had perfect pacing with great local spots.”", "Neha P.", "Family Traveler"],
    ["“Found amazing hill stations similar to Munnar!”", "Rahul K.", "Adventure Seeker"]
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <div className="text-white bg-gradient-to-br from-[#0a0a1a] via-[#0f0f23] to-[#121212] font-sans overflow-x-hidden">

      {/* ------------------ HERO ------------------ */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.4]"
        >
          <source src="/hero-bg-0.webm" type="video/webm" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <img 
            src="/logo.png"
            alt="Safar Craft Logo" 
            className='transition-all duration-300 animate__animated animate__fadeIn'
          />
          <h1 className="text-5xl md:text-7xl font-extrabold animate__animated animate__fadeInDown drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
              सफर craft
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate__animated animate__fadeInUp mt-6 max-w-2xl">
            Discover the soul of India with AI-powered travel assistance
          </p>
          
          <div className="mt-12 animate__animated animate__fadeInUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["🏔️ Himalayan Treks", "from-blue-500 to-cyan-500", "himalayas"],
              ["🏖️ Coastal Getaways", "from-emerald-500 to-teal-500", "beaches"],
              ["🏰 Heritage Trails", "from-amber-500 to-orange-500", "heritage"],
              ["🌿 Wildlife Safaris", "from-green-500 to-lime-500", "wildlife"]
            ].map(([text, gradient, sectionId], idx) => (
              <Link
                key={idx}
                to={`/gallery#${sectionId}`} 
                className={`bg-gradient-to-r ${gradient} px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-all`}
              >
                {text}
              </Link>
              
            ))}
          </div>
        </div>
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 animate-pulse cursor-pointer">
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="p-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 hover:border-amber-400/50 transition-all cursor-pointer"
              aria-label="Scroll down"
            >
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------ WHAT WE OFFER ------------------ */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-[#0d0d1a] via-[#101022] to-[#121212]">
        <h2 className="text-4xl font-extrabold text-center mb-16" data-aos="fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            ✨ India Travel Specialists
          </span>
        </h2>
        <div className="max-w-6xl mx-auto space-y-28">
          <FeatureRow img="/cost.mp4" title="India-Specific Cost Calculator"
            desc="Get accurate budgets accounting for local prices across 100+ Indian cities - from luxury palaces to backpacker hostels."
          />
          <FeatureRow img="/packing.mp4" title="Regional Packing Assistant" reverse
            desc="Monsoon in Kerala? Winter in Ladakh? Our AI knows exactly what you'll need for every Indian season and region."
          />
          <FeatureRow img="/itinerary.mp4" title="Cultural Itinerary Planner"
            desc="Authentic experiences beyond tourist spots - local festivals, hidden eateries, and cultural insights."
          />
          <FeatureRow img="/place.mp4" title="Discover Similar Indian Destinations" reverse
            desc="Loved Goa's beaches? Find similar coastal gems across India's 7500km coastline."
          />
        </div>
      </section>

      {/* ------------------ INDIAN TRAVEL STATS ------------------ */}
      <section className="py-16 bg-gradient-to-br from-[#0c0c1a] to-[#0f0f2a] text-center text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
          <Stat number="28+" label="States Covered" />
          <Stat number="100+" label="Indian Cities" />
          <Stat number="50+" label="Heritage Sites" />
          <Stat number="1 AI" label="Made for India" />
        </div>
      </section>

      {/* ------------------ WHY CHOOSE US ------------------ */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            Why India Travelers Love Us
          </span>
        </h2>
        <p className="text-gray-400 mb-10" data-aos="fade-up">
          We understand India's diversity like no other travel planner
        </p>
        <div className="flex flex-wrap justify-center gap-4" data-aos="zoom-in-up">
          {["Local transport costs", "Festival calendars", "Regional cuisine tips", "Language phrases", "Cultural etiquette"].map((tag, i) => (
            <span 
              key={i} 
              className="tag bg-gradient-to-r from-amber-900/50 to-orange-900/50 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:scale-105 px-4 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ------------------ HOW IT WORKS ------------------ */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#12121f] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              🛠️ Plan Your Indian Adventure
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              ["Choose Your Destination", "From Kashmir to Kanyakumari, pick your dream Indian location."],
              ["Tell Us Your Travel Style", "Backpacker? Luxury? Family trip? Pilgrimage? We adapt."],
              ["Get Authentic Recommendations", "Curated by AI trained on Indian travel patterns."]
            ].map(([title, desc], idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 p-8 rounded-xl shadow-lg border border-amber-500/10 hover:border-amber-500/30 transition-all hover:-translate-y-1" 
                data-aos="fade-up" 
                data-aos-delay={idx * 200}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ TESTIMONIALS ------------------ */}
      <section className="py-20 bg-gradient-to-b from-[#0d0d1a] to-[#12121f] text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              ❤️ Indian Traveler Stories
            </span>
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Carousel Content */}
            <div className="relative overflow-hidden">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map(([quote, name, role], idx) => (
                    <div 
                      key={idx}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div 
                        className={`bg-gradient-to-br from-[#1e1e2e]/80 to-[#1a1a3e]/80 p-8 rounded-lg shadow-lg border border-amber-500/10 transition-all ${activeTestimonial === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}
                      >
                        <p className="text-sm italic mb-4">“{quote}”</p>
                        <h4 className="font-semibold">{name}</h4>
                        <p className="text-gray-500 text-xs">{role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-amber-600/80 to-orange-600/80 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-amber-600/80 to-orange-600/80 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === idx ? 'bg-gradient-to-r from-amber-400 to-orange-400 w-6' : 'bg-gray-600'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ FAQ ------------------ */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a1a] to-[#0f0f23] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              ❓ India Travel FAQs
            </span>
          </h2>
          {[
            ["Is this free to use?", "Yes! All features are completely free and tailored for Indian travel. P.S. : This is a student-level project, so obviously everything is free."],
            ["Do you include offbeat destinations?", "Absolutely! This covers all the popular spots and hidden gems across 28 states included within the free dataset I could find in Kaggle."],
            ["Can I get vegetarian/vegan food recommendations?", "Yes! My AI knows the best local eateries for every dietary need."],
            ["Does it support any regional language for non english-speakers?", "Yes, it does but sadly only for one service. The itinerary maker suports all regional/foreign languages, can be enabled through the 'Special Requests' section."],
            ["Is train/bus travel included in cost estimates?", "Yes, with accurate estimates for all classes of Indian transport."]
          ].map(([q, a], idx) => (
            <div 
              key={idx} 
              className="mb-4 bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 rounded-lg overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all"
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <button 
                className="w-full p-5 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(idx)}
              >
                <h4 className="font-semibold text-lg">{q}</h4>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${activeFAQ === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFAQ === idx && (
                <div className="px-5 pb-5 text-sm text-gray-400 animate__animated animate__fadeIn">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ CTA ------------------ */}
      <section className="py-20 text-white bg-gradient-to-br from-amber-900 via-orange-900 to-[#121212] text-center">
        <div className="max-w-xl mx-auto" data-aos="zoom-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore India?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's plan your perfect Indian journey</p>
          <button
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Start Your Exploration of the Mystical Land of India
          </button>
        </div>
      </section>
    </div>
  );
}

// ------------------ COMPONENTS ------------------
function FeatureRow({ img, title, desc, reverse }) {
  // Mapping titles to their respective routes
  const routeMap = {
    "India-Specific Cost Calculator": "/cost",
    "Regional Packing Assistant": "/packing",
    "Cultural Itinerary Planner": "/itinerary",
    "Discover Similar Indian Destinations": "/similar"
  };
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}>
      <div className="w-full md:w-1/2" data-aos={reverse ? "fade-left" : "fade-right"}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="rounded-xl w-full max-h-[300px] object-cover border border-white/10 shadow-lg hover:shadow-amber-500/20 transition-all hover:scale-[1.01]"
        >
          <source src={img} type="video/mp4" />
        </video>
      </div>

      <div className="md:w-1/2 space-y-4" data-aos={reverse ? "fade-right" : "fade-left"}>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
        
        {/* Dynamic Link based on title */}
        <Link 
          to={routeMap[title] || "/home"} 
          className="inline-block px-5 py-2.5 text-sm bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all hover:scale-105"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="hover:scale-105 transition-transform p-4">
      <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

export default Home;