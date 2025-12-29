import Navbar from "@/components/navbar";
import DashboardSidebar from "./components/dashboard-sidebar";
import Footer from "@/components/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sky-600">
      <Navbar />

      <div className="flex gap-6 px-6 py-6">
        <DashboardSidebar />

        <main className="flex-1 rounded-2xl bg-white p-6">{children}</main>
      </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}
