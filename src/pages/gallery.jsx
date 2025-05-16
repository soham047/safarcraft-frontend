
// src/pages/Gallery.jsx

import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const PEXELS_API_KEY = 'Mm0i3cMDpmXz4FwJDOgelhaPHELNaIq08MRkkjBAe1HikRfDxNUwy3hB'; // Replace with your actual API key

const fetchImages = async (query) => {
const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
headers: {
    Authorization: PEXELS_API_KEY,
},
});
const data = await response.json();
return data.photos || [];
};

const sections = [
{ title: '🏔️ Himalayan Treks', query: 'Himalayas', id:'himalayas' },
{ title: '🌊 Coastal Getaways', query: 'Indian Coasts and Beaches', id : 'beaches' },
{ title: '🏜️ Desert Dunes', query: 'Indian Thar desert without people', id:'desert' },
{ title: '🌿 Lush Forests', query: 'Indian forests wildlife without people', id:'wildlife' },
{ title: '🕌 Heritage Trails', query: 'Indian Historical Sites', id:'heritage' }
];

const responsive = {
desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Gallery = () => {
const [imagesBySection, setImagesBySection] = useState({});

useEffect(() => {
AOS.init({ duration: 1000 });
sections.forEach(async (section) => {
    const imgs = await fetchImages(section.query);
    setImagesBySection(prev => ({ ...prev, [section.title]: imgs }));
});
}, []);

return (
<div className="text-white bg-gradient-to-br from-[#0a0a1a] via-[#0f0f23] to-[#121212] min-h-screen px-6 py-12 font-sans">
    <h1 className="text-4xl md:text-5xl text-center font-bold mb-10 animate__animated animate__fadeInDown bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
    📸 Incredible India – Visual Gallery
    </h1>

    {sections.map(({ title, id }, idx) => (
    <section id={id} key={title} className="mb-16" data-aos="fade-up" data-aos-delay={idx * 100}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} arrows={true}>
        {(imagesBySection[title] || []).map((img) => (
            <div key={img.id} className="p-2">
            <img
                src={img.src.medium}
                alt={img.photographer}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            </div>
        ))}
        </Carousel>
    </section>
    ))}

    {/* HOW IT WORKS */}
    <section className="bg-gradient-to-br from-[#10101b] to-[#121222] rounded-xl p-8 mt-20 shadow-xl" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-center mb-6">🛠️ How It Works</h2>
    <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto">
        We fetch curated images for each destination using the <a href="https://www.pexels.com/api" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Pexels API</a>. Our intelligent search system matches keywords like "beaches", "deserts", and "Himalayas" to deliver stunning visuals of real Indian locations.
    </p>
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 text-center">
        <div className="bg-white/5 p-4 rounded-md w-64 shadow border border-gray-700">📡 Real-time image fetch</div>
        <div className="bg-white/5 p-4 rounded-md w-64 shadow border border-gray-700">✨ High-res travel photos</div>
        <div className="bg-white/5 p-4 rounded-md w-64 shadow border border-gray-700">🎯 Optimized keywords</div>
    </div>
    </section>

    {/* FAQ */}
    <section className="mt-20" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-6 text-center">❓ FAQs</h2>
    <div className="max-w-4xl mx-auto space-y-6">
        {[
        ["Is this gallery live?", "Yes! Images are fetched in real-time from Pexels API based on curated topics."],
        ["Can I use these images?", "All images come from Pexels and are free to use even for commercial purposes."],
        ["How many images per section?", "Currently we fetch 10 per section. You can increase the count via API settings."]
        ].map(([q, a], i) => (
        <div key={i} className="border border-gray-700 rounded-md p-5 bg-white/5 hover:scale-[1.01] transition-all">
            <h3 className="font-semibold text-lg mb-2">{q}</h3>
            <p className="text-sm text-gray-400">{a}</p>
        </div>
        ))}
    </div>
    </section>

    {/* CTA */}
    <section className="text-center mt-20 py-16 bg-gradient-to-r from-cyan-800 to-blue-800 rounded-xl shadow-lg" data-aos="zoom-in">
    <h2 className="text-4xl font-bold mb-4">🌟 Get Inspired for Your Next सफर</h2>
    <p className="text-gray-300 mb-8">Explore visuals. Pick a place. Plan with AI.</p>
    <a
        href="/itinerary"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full text-white font-semibold transition-all"
    >
        Create Your Itinerary
    </a>
    </section>
</div>
);
};

export default Gallery;
