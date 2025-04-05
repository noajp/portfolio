export default function HomePage() {
  return (
    <div
      className="h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/your-photo.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I'm a creator based in Japan 🇯🇵</p>
      </div>
    </div>
  );
}