import { Ticket } from "../types/ticket";
import { Button } from "@/components/ui/button";

type Props = {
  ticket: Ticket;
  onSelect?: (ticket: Ticket) => void;
};

export default function TicketCard({ ticket, onSelect }: Props) {
  return (
    <div className="rounded-xl border bg-white px-6 py-4 shadow-sm">
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm">
          <p className="text-slate-500">Pelabuhan Asal</p>
          <p className="font-semibold text-slate-900">{ticket.asal}</p>
        </div>

        <span className="text-xl font-bold">→</span>

        <div className="text-sm text-right">
          <p className="text-slate-500">Pelabuhan Tujuan</p>
          <p className="font-semibold text-slate-900">{ticket.tujuan}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="grid grid-cols-6 gap-4 text-sm">
          {/* Kapal */}
          <div className="col-span-1">
            <p className="font-semibold text-slate-900">({ticket.kapalKode})</p>
            <p>{ticket.kapalNama}</p>
            <p className="text-xs text-slate-500">KELAS {ticket.kelas}</p>
          </div>

          {/* Berangkat */}
          <div>
            <p className="text-slate-500">Berangkat</p>
            <p className="font-semibold">{ticket.berangkatJam}</p>
            <p className="text-xs">{ticket.berangkatTanggal}</p>
            <p className="text-xs text-red-500">Rute Perjalanan</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center text-lg font-bold">
            →
          </div>

          {/* Sampai */}
          <div>
            <p className="text-slate-500">Sampai</p>
            <p className="font-semibold">{ticket.sampaiJam}</p>
            <p className="text-xs">{ticket.sampaiTanggal}</p>
          </div>

          {/* Durasi */}
          <div>
            <p className="text-slate-500">Lama Perjalanan</p>
            <p className="font-semibold">{ticket.durasi}</p>
            <p className="text-xs">{ticket.transit}</p>
          </div>

          {/* Harga */}
          <div className="flex flex-col items-end justify-between">
            <p className="font-bold text-slate-900">
              Rp{ticket.harga.toLocaleString("id-ID")}
            </p>

            <Button
              size="sm"
              className="rounded-full bg-sky-600 px-6 hover:bg-sky-700"
              onClick={() => onSelect?.(ticket)}
            >
              Pilih
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
