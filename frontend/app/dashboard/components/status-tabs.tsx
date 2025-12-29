"use client";

import { useState } from "react";

const tabs = ["Aktif", "Menunggu", "Gagal", "Refund"];

type Props = {
  onChange: (status: string) => void;
};

export default function StatusTabs({ onChange }: Props) {
  const [activeTab, setActiveTab] = useState("Aktif");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onChange(tab);
  };

  return (
    <div className="mb-8 border-b">
      <div className="flex gap-6 text-sm font-medium">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className={`pb-3 transition ${
                isActive
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-400 hover:text-slate-600"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
