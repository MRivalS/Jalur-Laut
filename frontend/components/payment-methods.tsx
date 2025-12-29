import Image from "next/image";

const paymentMethods = [
  { name: "BRI", logo: "/image/BRI.jpg" },
  { name: "Mandiri", logo: "/image/MANDIRI.jpg" },
  { name: "BNI", logo: "/image/BNI.png" },
  { name: "BCA", logo: "/image/BCA.jpg" },
];

export default function PaymentMethods() {
  return (
    <section className="">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Metode Pembayaran
          </h2>
          <p className="mt-2 text-gray-500">
            Bayar tiket ferry semakin mudah dengan berbagai pilihan
          </p>
        </div>

        {/* Payment Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {paymentMethods.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={100}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
