import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "Intro to Piano Tuning",
      url: "https://www.youtube.com/embed/a40W5YoKF94",
      description: "An overview of tools, process, and fundamentals.",
    },
    {
      title: "How to Tune a Piano (by Ear)",
      url: "https://www.youtube.com/watch?v=acttLIgCO-s",
      description: "A practical ear-based piano tuning demonstration.",
    },
    {
      title: "How a Grand Piano Action Works",
      url: "https://www.youtube.com/embed/SPI9pzWyBxI",
      description: "See what happens under the hood of a grand piano.",
    },
  ];

  const openModal = (video) => {
    setActiveVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveVideo(null);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Find Piano Technicians. Learn the Craft.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Connect with certified technicians or start your journey to becoming one.
        </p>
        <div className="space-x-4">
          <a
            href="#directory"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full"
          >
            Browse Directory
          </a>
          <a
            href="#learn"
            className="border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full"
          >
            Start Learning
          </a>
        </div>
      </section>

      {/* Directory */}
      <section id="directory" className="py-16 bg-white text-gray-900">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-2">Certified Technician Directory</h2>
          <p className="text-gray-600">Search and connect with qualified piano technicians near you.</p>
        </div>
        <div className="max-w-3xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search by name, city, or state..."
            className="w-full border rounded-full px-5 py-3 shadow-sm"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-5 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://via.placeholder.com/64"
              className="rounded-full w-16 h-16 mb-3"
              alt="Technician"
            />
            <h3 className="text-xl font-bold">Alex Rivera</h3>
            <p className="text-sm text-gray-600">Boston, MA</p>
            <span className="inline-block mt-2 text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Certified
            </span>
            <a href="#" className="block mt-4 text-indigo-600 hover:underline">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learn" className="py-20 bg-gray-50 text-gray-900">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-2">Learn to Become a Piano Technician</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our free resources, watch expert-led videos, and understand the path to certification.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 px-6 max-w-6xl mx-auto">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => openModal(video)}
              >
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mt-10">
          <h4 className="font-bold text-lg mb-4">Your Technician Journey:</h4>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Learn the basics of piano mechanics</li>
            <li>Practice tuning and regulation techniques</li>
            <li>Shadow a certified technician</li>
            <li>Join professional organizations (e.g., PTG)</li>
            <li>Get certified and start offering services</li>
          </ol>
        </div>
      </section>

      {/* Modal Popup */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
            {activeVideo && (
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`${activeVideo.url}?autoplay=1`}
                  title={activeVideo.title}
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="flex justify-end p-4">
              <button
                onClick={closeModal}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="text-center">
          <h3 className="text-xl font-serif mb-2">Ready to tune into your future?</h3>
          <p className="mb-6">
            Whether you're looking for help or want to start a new career, we’re here for you.
          </p>
          <a
            href="#learn"
            className="bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-500"
          >
            Get Started
          </a>
        </div>
        <div className="text-center text-sm mt-8 text-gray-400">
          © 2025 PianoTech Connect | Built with ❤️ for piano lovers
        </div>
      </footer>
    </div>
  );
}

export default App;

