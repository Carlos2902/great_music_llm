const ServicesSection = ({ services }) => (
  <section id="services" className="bg-[#F5F5F1] py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-center font-display text-3xl font-bold text-gray-800 sm:text-5xl">
        Our Services
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ image, title, description, cta }) => (
          <article
            key={title}
            className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

            <div className="relative flex h-[420px] flex-col items-center justify-end gap-4 px-8 pb-12 text-center text-white">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{title}</h3>
              <p className="font-body text-sm leading-relaxed sm:text-base">{description}</p>
              <button
                type="button"
                className="group/button relative overflow-hidden rounded-full bg-white px-6 py-2.5 font-body text-sm font-semibold text-gray-900 transition-transform duration-300 group-hover/button:scale-105"
              >
                <span className="relative z-10">{cta}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#A38138]/40 to-transparent skew-x-12 transition-transform duration-700 ease-out group-hover/button:translate-x-full" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
