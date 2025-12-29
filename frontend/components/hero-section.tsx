export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blue-600">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container mx-auto px-4 pt-24 pb-40 text-center">
        {/* Promo Badge */}
        <div className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-blue-900 shadow">
          POTONGAN 50% – PROMO TERBATAS!
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          PESAN TIKET KAPAL <br className="hidden md:block" />
          LAUT ONLINE!
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
          Booking tiket kapal laut cepat, mudah, dan aman.
        </p>
      </div>
    </section>
  );
}
