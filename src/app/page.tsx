"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";

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
      {/* 画像をクリックするとモーダルが開く */}
      <section className="h-[89vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="relative w-full">
        <img
        src="/IMG/IMG_home.JPG"
        alt="Home Image"
        className="w-full h-screen object-cover mix-blend-normal"
        onClick={() => openModal("/IMG/IMG_home.JPG")}
        />
      </div>
      </section>
      <section className="bg-white flex items-center justify-center">
        <div className="flex justify-center space-x-8 py-4">
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Home
          </button>
            <Link href="/other/pictures">
            <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
              Pictures
            </button>
            </Link>
          <Link href="/other/clips">
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Clips
          </button>
          </Link>
          <Link href="/other/stores">
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Store
          </button>
          </Link>
          <Link href="/other/vlog">
          <button className="px-6 py-4 text-xl font-bold text-black hover:underline">
            Vlog
          </button>
          </Link>
        </div>
      </section>
      <section className="h-screen bg-white flex">
        {/* 左側の文章 */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Hello World,Welacome to my site</h2>
            <p className="text-lg text-gray-700">
            This is my portfolio and selling some picture preset,footage lut and ebook
            </p>
          </div>
        </div>

        {/* 右側の写真 */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <img
            src="/IMG/photo2.jpg"
            alt="Photo"
            className="max-h-full max-w-full object-contain cursor-pointer"
            onClick={() => openModal("/IMG/photo2.jpg")}
          />
        </div>
      </section>
      <section className="h-screen bg-white flex">
        {/* 右側の写真 */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <img
            src="/IMG/photo3.jpg"
            alt="Photo"
            className="max-h-full max-w-full object-contain cursor-pointer"
            onClick={() => openModal("/IMG/photo3.jpg")}
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
