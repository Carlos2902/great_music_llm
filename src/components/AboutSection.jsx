import { GOLD_HEX } from '../constants/colors';

const AboutSection = () => (
  <section id="about" className="bg-black text-white">
    <div className="container mx-auto">
      <div className="grid gap-0 lg:grid-cols-3">
        <div className="grid gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-20 lg:col-span-2 lg:px-16 lg:py-24">
          <div>
            <h2 className="mb-4 font-display text-4xl uppercase tracking-tight md:text-5xl lg:text-6xl">
              About
            </h2>
            <h3
              className="mb-8 font-display text-4xl font-bold uppercase tracking-tight md:mb-12 md:text-5xl lg:text-6xl"
              style={{ color: GOLD_HEX }}
            >
              Great Music LLM
            </h3>
            <p className="mb-6 font-body text-sm leading-relaxed text-gray-300 md:text-base">
              For over a century, Great Music LLM has stood as a beacon of artistic excellence,
              bringing the world&apos;s finest orchestral performances to audiences across the globe.
            </p>
            <p className="mb-6 font-body text-sm leading-relaxed text-gray-300 md:text-base">
              Our ensemble comprises the most distinguished musicians, each a virtuoso in their own
              right, united by an unwavering commitment to musical perfection.
            </p>
          </div>

          <div className="md:hidden">
            <img src="/clarinet.png" alt="Clarinet player" className="h-auto w-full" />
          </div>

          <div className="flex flex-col justify-end">
            <p className="mb-6 font-body text-sm leading-relaxed text-gray-300 md:text-base">
              From intimate chamber concerts to grand symphonic spectacles, we continue to push the
              boundaries of what orchestral music can achieve, honoring tradition while embracing
              innovation.
            </p>
            <p className="font-body text-sm leading-relaxed text-gray-300 md:text-base">
              Founded in London, Great Music LLM merges the precision of traditional craftsmanship
              with a fearless, contemporary approach. Known for its striking performances and bold
              interpretations, our music is a mark of individuality, a testament to heritage, and a
              challenge to convention.
            </p>
          </div>
        </div>

        <div className="hidden md:block lg:col-span-1">
          <img
            src="/clarinet.png"
            alt="Clarinet player"
            className="w-full md:h-96 lg:h-full md:object-contain lg:object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
