"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Password tidak sama");
      return;
    }

    setLoading(true);

    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      setError(err.message || "Gagal daftar");
      setLoading(false);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />

      <main className="flex-1 flex justify-center items-center px-4">
        <Card className="w-full max-w-md rounded-3xl shadow-xl">
          <CardHeader className="text-center">
            <Image
              src="/image/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="mx-auto"
            />
            <CardTitle>Buat Akun</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Nama Lengkap</Label>
                <Input name="name" onChange={handleChange} required />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Nomor HP</Label>
                <Input name="phone" onChange={handleChange} />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Konfirmasi Password</Label>
                <Input
                  type="password"
                  name="confirm"
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full"
              >
                {loading ? "Memproses..." : "DAFTAR"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-blue-600">
                Masuk
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
