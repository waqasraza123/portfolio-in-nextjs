"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <h2 className="text-5xl font-bold text-center mb-16">Projects Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-6">
        {[
          {
            title: "Laravel and Socket-io Music Sharing and Chat app",
            src: "/images/projects/Laravel-and-Socket-io-Music-Sharing-and-Chat-app.png",
            alt: "Laravel and Socket-io Music Sharing and Chat app",
          },
          {
            title: "React App with Charts",
            src: "/images/projects/react-app-with-data-visualization.png",
            alt: "React App with Charts",
          },
          {
            title: "React Charts - ChartsJs",
            src: "/images/projects/react-charts.jpg",
            alt: "React Charts - ChartsJs",
          },
          {
            title: "Candlestick chart and bubble charts in React D3.js",
            src: "/images/projects/candlestick-chart-and-bubble-charts-in-react-d3js.png",
            alt: "Candlestick chart and bubble charts in React D3.js",
          },
          {
            title: "Voicrunch in Laravel, AI, speech recognition",
            src: "/images/projects/voicrunch-in-Laravel-AI-speech-recognition.png",
            alt: "Voicrunch in Laravel, AI, speech recognition",
          },
          {
            title: "React Auth Page",
            src: "/images/projects/sign-in-react-page.png",
            alt: "React Auth Page",
          },
          {
            title: "Laravel Livewire Social App",
            src: "/images/projects/laravel-livewire-social-app.png",
            alt: "Laravel Livewire Social App",
          },
          {
            title: "Laravel Admin Dashboard for Travel Ecommerce",
            src: "/images/projects/laravel-admin-panel-for-travel-ecommerce.png",
            alt: "Laravel Admin Dashboard for Travel Ecommerce",
          },
          {
            title: "Laravel Admin Panel for eCommerce Store",
            src: "/images/projects/laravel-admin-panel-for-eCommerce-store.png",
            alt: "Laravel Admin Panel for eCommerce Store",
          },
          {
            title: "React App",
            src: "/images/projects/react-app.png",
            alt: "React App",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 mb-8 cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
            onClick={() => handleImageClick(project.src)}
          >
            <div className="relative rounded-lg bg-white overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
              <Image
                src={project.src}
                alt={project.alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
              <h3 className="text-xl font-semibold text-center mt-6 transition-opacity duration-500 group-hover:opacity-90">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
      />
    </section>
  );
}
