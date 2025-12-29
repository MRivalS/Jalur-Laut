"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - FORM */}
          <Card className="w-full max-w-md mx-auto border-0 shadow-2xl rounded-3xl bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-gray-800">
                Cek Pesanan
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label className="text-gray-700">Alamat e-mail</Label>
                <Input
                  type="email"
                  placeholder="contoh@email.com"
                  className="rounded-lg"
                />
              </div>

              {/* Booking Code */}
              <div className="space-y-2">
                <Label className="text-gray-700">Kode Booking</Label>
                <Input
                  type="text"
                  placeholder="Masukkan kode booking"
                  className="rounded-lg"
                />
              </div>

              {/* Captcha */}
              <div className="space-y-2">
                <Label className="text-gray-700">Captcha</Label>
                <div className="flex items-center gap-3">
                  <Input
                    type="text"
                    placeholder="Masukkan captcha"
                    className="rounded-lg"
                  />
                  <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900 text-white font-mono tracking-widest">
                    n7rdj
                  </div>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-800 transition"
                    title="Refresh captcha"
                  >
                    ⟳
                  </button>
                </div>
              </div>

              {/* Button */}
              <Button
                size="lg"
                className="w-full mt-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
              >
                CARI PESANAN
              </Button>
            </CardContent>
          </Card>

          {/* RIGHT - INFO */}
          <div className="hidden lg:flex flex-col items-center text-center gap-6">
            <Image
              src="/image/boking.png"
              alt="Cek Booking"
              width={420}
              height={320}
              className="object-contain"
            />

            <p className="text-lg text-gray-700 max-w-md leading-relaxed">
              Silahkan masukan <span className="font-semibold">e-mail</span> dan{" "}
              <span className="font-semibold">kode booking</span> anda, untuk
              mendapatkan detail pesanan
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
