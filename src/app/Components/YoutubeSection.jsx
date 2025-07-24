// components/WhoWeAre.jsx
export default function YoutubeSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            <span className="text-black">WHO </span>
            <span className="text-purple-600">WE ARE</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto my-3"></div>
          <p className="text-lg font-medium text-gray-800">
            SEO Tech Experts - Award Winning Agency
          </p>
        </div>

        {/* Video Embed */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yDt2ivKK_JI?si=O-CtwZBYhdMCWXIx"
            title="Who We Are"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
