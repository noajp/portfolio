export default function HomePage() {
  return (
    <main>
      <section
        className="h-screen bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/your-photo.jpg')" }}
      >
        <div className="text-center">
          <div className="border-4 border-white p-4 inline-block">
            <h1 className="text-4xl font-bold">Inspiring Creativity, Expanding Horizons</h1>
          </div>
        </div>
      </section>
  {/* セクション内容 */}
  <div className="flex-1 flex items-center justify-center">
    <h2 className="text-2xl text-black font-semibold">
      Next Section - Your Menu or Content Here
    </h2>
  </div>
      <section className="h-screen bg-white flex">
        {/* 左側の文章 */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              Welcome to our portfolio! We are passionate about creativity and innovation.
              Explore our work and discover how we can help bring your ideas to life.
            </p>
          </div>
        </div>
        {/* 右側の写真ギャラリー */}
        <div className="w-1/2 p-4">
          <div className="grid grid-cols-3 gap-2">
            <div
              className="bg-cover bg-center h-32"
              style={{ backgroundImage: "url('/photo1.jpg')" }}
            ></div>
            <div
              className="bg-cover bg-center h-32"
              style={{ backgroundImage: "url('/photo2.jpg')" }}
            ></div>
            <div
              className="bg-cover bg-center h-32"
              style={{ backgroundImage: "url('/photo3.jpg')" }}
            ></div>
            <div
              className="bg-cover bg-center h-32"
              style={{ backgroundImage: "url('/photo4.jpg')" }}
            ></div>
            <div
              className="bg-cover bg-center h-32"
              style={{ backgroundImage: "url('/photo5.jpg')" }}
            ></div>
            <div
              className="bg-cover bg-center h-32"
              style={{ backgroundImage: "url('/photo6.jpg')" }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}