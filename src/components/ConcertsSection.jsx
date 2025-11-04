import { useInView } from 'react-intersection-observer'; 

const ConcertsSection = ({ concerts }) => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  const [listRef, listInView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  // Helper function to build classes dynamically
  const getAnimationClasses = (isInView, baseDelay) =>
    `transition-all duration-700 ease-out transform ${
      isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-[20px]' 
    }` + ` delay-[${baseDelay}ms]`; 

  return (
    <section id="concerts" className="relative overflow-hidden bg-[#F5F5F0] pb-20 pt-24">
      <div className="container mx-auto px-6">
        <h2 
          ref={headerRef}
          className={`mb-12 text-center font-display text-3xl font-bold text-gray-800 sm:text-5xl 
            ${getAnimationClasses(headerInView, 0)}`}
        >
          Concerts
        </h2>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div
              ref={listRef} 
              className={`lg:sticky lg:top-24 ${getAnimationClasses(listInView, 100)}`}
            >
              <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-3xl lg:hidden">
                <img
                  src="/CD.jpg"
                  alt="Orchestra performance"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative hidden h-[950px] overflow-hidden lg:-ml-6 lg:block">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="h-[950px] w-[950px] -translate-x-1/2 overflow-hidden rounded-full">
                    <img
                      src="/CD.jpg"
                      alt="Orchestra performance"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 lg:col-span-7 lg:mt-0">
            <p 
              className={`mb-16 max-w-2xl font-body text-lg leading-relaxed text-gray-600 ${getAnimationClasses(listInView, 200)}`}
            >
              This year, December is recognized as the month of street music, so we send our skills and
              our talented musicians for open-air concerts in the parks of our city. After all, music
              has no borders.
            </p>

            <div className="divide-y divide-gray-300">
              {concerts.map(({ location, date, name }, index) => (
                <div
                  key={name}
                  className={`group flex items-center justify-between gap-6 py-10 transition-colors duration-300 hover:bg-white/60 
                    ${getAnimationClasses(listInView, 300 + index * 100)}`}
                >
                  <div className="flex-1">
                    <p className="mb-2 font-body text-xs uppercase tracking-widest text-gray-500">
                      {location}
                    </p>
                    <p className="mb-3 font-body text-sm font-semibold text-gray-800">{date}</p>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-[#A38138] lg:text-4xl">
                      {name}
                    </h3>
                  </div>

                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 text-gray-900 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#A38138]"
                  >
                    <path
                      d="M16 12L24 20L16 28"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeOpacity="0.1" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcertsSection;