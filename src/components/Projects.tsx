"use client";

import { useState } from 'react';
import Modal from './Modal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Projects Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 cursor-pointer">
        <div 
          className="project-item relative rounded-lg overflow-hidden shadow-lg" 
          onClick={() => handleImageClick('/images/projects/Laravel-and-Socket-io-Music-Sharing-and-Chat-app.png')}
        >
          <img 
            src="/images/projects/Laravel-and-Socket-io-Music-Sharing-and-Chat-app.png" 
            alt="Laravel and Socket-io Music Sharing and Chat app" 
            className="w-full h-64 object-cover" 
          />
          <h3 className="text-lg font-semibold text-center mt-4">Laravel and Socket-io Music Sharing and Chat app</h3>
        </div>

        <div 
          className="project-item relative rounded-lg overflow-hidden shadow-lg" 
          onClick={() => handleImageClick('/images/projects/react-app-with-data-visualization.png')}
        >
          <img 
            src="/images/projects/react-app-with-data-visualization.png" 
            alt="React App with Charts" 
            className="w-full h-64 object-cover" 
          />
          <h3 className="text-lg font-semibold text-center mt-4">React App with Charts</h3>
        </div>

        <div 
          className="project-item relative rounded-lg overflow-hidden shadow-lg" 
          onClick={() => handleImageClick('/images/projects/react-charts.jpg')}
        >
          <img 
            src="/images/projects/react-charts.jpg" 
            alt="React Charts - ChartsJs" 
            className="w-full h-64 object-cover" 
          />
          <h3 className="text-lg font-semibold text-center mt-4">React Charts - ChartsJs</h3>
        </div>

        <div 
          className="project-item relative rounded-lg overflow-hidden shadow-lg" 
          onClick={() => handleImageClick('/images/projects/candlestick-chart-and-bubble-charts-in-react-d3js.png')}
        >
          <img 
            src="/images/projects/candlestick-chart-and-bubble-charts-in-react-d3js.png" 
            alt="Candlestick chart and bubble charts in react d3js" 
            className="w-full h-64 object-cover" 
          />
          <h3 className="text-lg font-semibold text-center mt-4">Candlestick chart and bubble charts in react d3js</h3>
        </div>

        <div 
          className="project-item relative rounded-lg overflow-hidden shadow-lg" 
          onClick={() => handleImageClick('/images/projects/voicrunch-in-Laravel-AI-speech-recognition.png')}
        >
          <img 
            src="/images/projects/voicrunch-in-Laravel-AI-speech-recognition.png" 
            alt="Voicrunch in Laravel, AI, speech recognition" 
            className="w-full h-64 object-cover" 
          />
          <h3 className="text-lg font-semibold text-center mt-4">Voicrunch in Laravel, AI, speech recognition</h3>
        </div>
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
