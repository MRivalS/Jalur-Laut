"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

const news = [
  {
    id: 1,
    title: "Kepadatan Terkini dan Antisipasi Nataru 2025/2026",
    description:
      "Antisipasi dan manajemen lonjakan penumpang selama periode libur Natal dan Tahun Baru.",
    date: "21 Apr 2025",
    image: "/image/news1.jpg",
  },
  {
    id: 2,
    title: "Tips Efektif Menghadapi Kemacetan di Pelabuhan",
    description: "Tips efektif agar perjalanan tetap nyaman dan tepat waktu.",
    date: "4 Apr 2025",
    image: "/image/news2.jpeg",
  },
  {
    id: 3,
    title: "Panduan Lengkap Perjalanan dengan Ferry",
    description: "Panduan lengkap sebelum melakukan perjalanan laut.",
    date: "28 Mar 2025",
    image: "/image/news3.jpg",
  },
  {
    id: 4,
    title: "Tips Nyaman Menyeberang dengan Anak",
    description: "Persiapan penting agar perjalanan bersama anak lebih nyaman.",
    date: "15 Mar 2025",
    image: "/image/news4.jpeg",
  },
];

// DUPLIKASI DATA UNTUK INFINITE LOOP
const extendedNews = [...news, ...news, ...news];

export default function NewsSection() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const visibleDesktop = 3;
  const totalOriginal = news.length;

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // RESET SEAMLESS
  useEffect(() => {
    if (index === totalOriginal) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }
        setIndex(0);
      }, 700);
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 0.7s ease-in-out";
      }
    }
  }, [index, totalOriginal]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Berita</h2>
          <Button variant="link" className="text-blue-600">
            Lihat Semua
          </Button>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${index * (100 / visibleDesktop)}%)`,
            }}
          >
            {extendedNews.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="w-full px-3 md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <Card className="h-full overflow-hidden transition hover:shadow-lg">
                  {/* IMAGE */}
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={i < 3}
                    />
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-5">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                      <span className="ml-auto font-medium text-blue-600">
                        Selengkapnya →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
