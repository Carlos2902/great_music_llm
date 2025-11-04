const footerLinks = [
  {
    title: 'Company',
    items: ['Contact', 'Press', 'Careers', 'Newsletter'],
  },
  {
    title: 'Legal',
    items: ['Legal Notice', 'Terms of Use', 'Privacy', 'Cookie Settings'],
  },
  {
    title: 'Social',
    items: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
  },
  {
    title: 'Streaming',
    items: ['Apple Music', 'Spotify'],
  },
];

const Footer = () => (
  <footer className="bg-black py-16 text-white">
    <div className="container mx-auto px-6">
      <div className="mb-16 flex flex-col items-start justify-between md:flex-row">
        <div className="mb-8 md:mb-0">
          <img src="/logo_gmllm.svg" alt="Great Music LLM logo" className="h-14 w-auto" />
        </div>

        <div className="grid w-full grid-cols-2 gap-8 text-right md:w-auto md:grid-cols-4">
          {footerLinks.map(({ title, items }) => (
            <div key={title}>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-gray-400 transition-colors duration-200 hover:text-[#A38138]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-900 pt-8 text-right">
        <p className="font-body text-sm text-gray-500">© 2025 Great Music LLM</p>
      </div>
    </div>
  </footer>
);

export default Footer;
