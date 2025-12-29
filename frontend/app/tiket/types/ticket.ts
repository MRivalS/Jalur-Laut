// app/tiket/cari/types/ticket.ts
export type Ticket = {
  id: string;
  kapalKode: string;
  kapalNama: string;
  kelas: string;

  asal: string;
  tujuan: string;

  berangkatJam: string;
  berangkatTanggal: string;

  sampaiJam: string;
  sampaiTanggal: string;

  durasi: string;
  transit: string;

  harga: number;
};
