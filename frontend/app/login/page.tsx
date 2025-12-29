"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, RefreshCw } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("TJWC M2");
  const [captchaInput, setCaptchaInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const refreshCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(newCaptcha);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (captchaInput.toUpperCase() !== captcha) {
      setError("Captcha tidak sesuai");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login gagal");
        return;
      }

      // simpan token (opsional)
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirect ke dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Gagal terhubung ke server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md rounded-3xl border-0 bg-white shadow-xl">
          <CardHeader className="text-center space-y-3">
            <div className="flex justify-center">
              <Image
                src="/image/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            <CardTitle className="text-2xl font-bold">Masuk</CardTitle>
            <CardDescription>Silakan login untuk melanjutkan</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <div className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Captcha */}
              <div className="space-y-2">
                <Label>Captcha</Label>
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Masukkan captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                  />
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-mono">
                    {captcha}
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={refreshCaptcha}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "MASUK"}
              </Button>
            </form>

            <p className="text-center text-sm">
              Belum punya akun?{" "}
              <Link href="/register" className="text-blue-600 font-medium">
                Daftar
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
