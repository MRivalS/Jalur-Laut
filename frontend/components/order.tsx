import { Search, CreditCard, Ship, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Cari Tiket",
    description:
      "Pilih rute, tanggal, dan jumlah penumpang sesuai kebutuhan Anda",
    icon: Search,
  },
  {
    id: 2,
    title: "Bayar Online",
    description: "Lakukan pembayaran dengan berbagai metode yang tersedia",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Naik Kapal",
    description: "Tunjukkan e-ticket di pelabuhan dan nikmati perjalanan Anda",
    icon: Ship,
  },
  {
    id: 4,
    title: "Selesai",
    description: "Sampai di tujuan dengan aman dan nyaman",
    icon: CheckCircle,
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Cara Pemesanan</h2>
          <p className="mt-2 text-gray-500">
            Pesan tiket kapal ferry Anda dalam 4 langkah mudah
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Number */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-yellow-400 text-sm font-bold flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
