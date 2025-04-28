"use client";

import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <main>
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="grid grid-cols-6 gap-6 p-9">
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i} className="relative">
              <img
                src={`/IMG_59${69 + i}.JPG`}
                alt={`IMG_59${69 + i}`}
                className={`w-full h-auto object-cover cursor-pointer ${
                  i === 0 ? "animate-slide" : ""
                }`}
                onClick={() => openModal(`/IMG_59${69 + i}.JPG`)}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white flex items-center justify-center">
        <div className="flex justify-center space-x-8 py-4">
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Home
          </button>
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Pictures
          </button>
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Clips
          </button>
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Store
          </button>
        </div>
      </section>
        <section className="h-screen bg-white flex">
        {/* 左側の文章 */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">About me</h2>
            <p className="text-lg text-gray-700">
              Welcome to our portfolio! We are passionate about creativity and innovation.
              Explore our work and discover how we can help bring your ideas to life.
            </p>
          </div>
        </div>

        {/* 右側の写真 */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <img
            src="/photo2.jpg"
            alt="Photo"
            className="max-h-full max-w-full object-contain cursor-pointer"
            onClick={() => openModal("/photo2.jpg")}
          />
        </div>
      </section>
      <section className="h-screen bg-white flex">

        {/* 右側の写真 */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <img
            src="/photo3.jpg"
            alt="Photo"
            className="max-h-full max-w-full object-contain cursor-pointer"
            onClick={() => openModal("/photo3.jpg")}
          />
        </div>

        {/* 左側の文章 */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">About me</h2>
            <p className="text-lg text-gray-700">
              Welcome to our portfolio! We are passionate about creativity and innovation.
              Explore our work and discover how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* モーダル */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="p-4 bg-transparent">
          <img
            src={modalImage}
            alt="Modal"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          </div>
        </div>
      )}
    </main>
  );
}
