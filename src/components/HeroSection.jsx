import { GOLD_HEX } from '../constants/colors';
import { smoothScrollToId } from '../utils/scroll';
const HeroSection = () => (
  <section
    id="main"
    className="relative flex h-screen items-center justify-center overflow-hidden md:justify-start"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 z-0 h-full w-full object-cover"
    >
      <source src="https://9gx9om0v1baibg67.public.blob.vercel-storage.com/orchestra.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div className="relative z-20 flex h-full w-full max-w-6xl flex-col items-center justify-end px-6 pb-12 text-center transition-all duration-700 md:items-start md:justify-end md:px-12 md:text-left lg:px-20 lg:pb-20">
      <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        The New Season is Here
      </h1>

      <button
        type="button"
        onClick={() => smoothScrollToId('concerts')}
        className="group relative overflow-hidden rounded-full px-8 py-4 font-display text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
        style={{ backgroundColor: GOLD_HEX }}
      >
        <span className="relative z-10">Get Tickets</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-[1200ms] ease-out group-hover:translate-x-full" />
      </button>
    </div>
  </section>
);

export default HeroSection;
