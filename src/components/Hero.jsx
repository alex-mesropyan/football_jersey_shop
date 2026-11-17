function Hero({ onShopClick }) {
  return (
    <section className="bg-black px-6 py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <h2 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">
          The Ultimate Football Jersey Destination
        </h2>

        <p className="max-w-2xl text-lg text-gray-300 mb-8">
          Find your team's jersey and wear your badge with pride.
        </p>

        <button 
          onClick={onShopClick}
          className="rounded-xl bg-emerald-500 px-8 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;