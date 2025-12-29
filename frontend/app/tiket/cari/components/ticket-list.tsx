type Props = {
  tickets: any[];
};

export default function TicketList({ tickets }: Props) {
  return (
    <div className="space-y-4">
      {tickets.map((ticket, index) => (
        <div key={index} className="rounded-xl bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">
            Kapal Ferry Express
          </h3>

          <p className="mt-1 text-sm text-slate-600">08:00 - 10:00</p>

          <p className="mt-1 text-sm font-medium text-blue-600">Rp 150.000</p>
        </div>
      ))}
    </div>
  );
}
