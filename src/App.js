import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

function App() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      {/* Header / Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#191919]">PianoCare</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#learning" className="hover:underline">Learn</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-gray-100 to-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111827]">
          Keep Your Piano In Tune With Expert Help
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Discover professional piano technicians, maintenance tips, and step-by-step training videos all in one place.
        </p>
        <div className="space-x-4">
          <a href="#services" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800">
            Find a Technician
          </a>
          <a href="#learning" className="border border-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Start Learning
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Tuning</h4>
            <p className="text-gray-600">Professional tuning for upright and grand pianos to keep them concert-ready.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Repair</h4>
            <p className="text-gray-600">Experienced technicians to fix action parts, pedals, and keys with precision.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Maintenance</h4>
            <p className="text-gray-600">Regular maintenance plans to ensure your piano performs its best for years.</p>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="px-6 py-16 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8">Learn Piano Maintenance</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/a40W5YoKF94"
              title="Intro to Piano Tuning"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-1">Intro to Piano Tuning</h4>
              <p className="text-gray-600 text-sm">Learn the fundamentals of tuning your own piano at home or professionally.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/Tq9bHFs5rAI"
              title="Tuning a Piano by Ear"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-1">Tuning a Piano by Ear</h4>
              <p className="text-gray-600 text-sm">Step-by-step demonstration of ear-based tuning by an experienced technician.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-12 text-center bg-black text-white">
        <h4 className="text-xl font-semibold mb-2">Get in Touch</h4>
        <p className="text-gray-400 mb-4">
          Email us at <a href="mailto:info@pianocare.com" className="underline">info@pianocare.com</a>
        </p>
        <p className="text-sm text-gray-500">© 2025 PianoCare. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;


