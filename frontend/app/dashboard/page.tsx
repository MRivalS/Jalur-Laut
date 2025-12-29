"use client";

import { useState } from "react";
import StatusTabs from "./components/status-tabs";

import TabAktif from "./components/tabs/aktif";
import TabMenunggu from "./components/tabs/menunggu";
import TabGagal from "./components/tabs/gagal";
import TabRefund from "./components/tabs/refund";

export default function DashboardPage() {
  const [status, setStatus] = useState("Aktif");

  const renderContent = () => {
    switch (status) {
      case "Aktif":
        return <TabAktif />;
      case "Menunggu":
        return <TabMenunggu />;
      case "Gagal":
        return <TabGagal />;
      case "Refund":
        return <TabRefund />;
      default:
        return null;
    }
  };

  return (
    <div>
      <StatusTabs onChange={setStatus} />
      {renderContent()}
    </div>
  );
}
