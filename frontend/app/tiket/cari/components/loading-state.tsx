export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600" />

      <p className="mt-4 text-sm text-slate-600">
        Sedang mencari tiket terbaik untuk Anda...
      </p>
    </div>
  );
}
