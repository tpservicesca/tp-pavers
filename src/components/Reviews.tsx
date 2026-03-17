export default function Reviews() {
  return (
    <div className="flex items-center gap-[15px] bg-white rounded-xl p-5 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
      {/* Prev button */}
      <button
        className="shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-sm text-slate-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200 cursor-pointer"
        aria-label="Previous review"
      >
        &#10094;
      </button>

      {/* Review Card */}
      <div className="flex-1 text-center">
        <div className="flex justify-center items-center mb-2.5 relative">
          {/* Placeholder avatar */}
          <div className="w-[50px] h-[50px] rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xl font-bold">
            C
          </div>
          <div className="absolute -bottom-0.5 right-[calc(50%-35px)] bg-white rounded-full p-0.5">
            {/* Google icon placeholder */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <div className="mb-2">
          <strong className="block font-semibold text-brand-black text-[0.95rem]">Caning Repair</strong>
          <span className="text-slate-500 text-[0.8rem]">hace 8 meses</span>
        </div>
        <div className="text-amber-400 text-xl">
          <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
          <span className="text-blue-500 text-sm ml-1">&#10004;</span>
        </div>
      </div>

      {/* Next button */}
      <button
        className="shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-sm text-slate-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200 cursor-pointer"
        aria-label="Next review"
      >
        &#10095;
      </button>
    </div>
  );
}
