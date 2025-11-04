import { smoothScrollToId } from '../utils/scroll';

const ContactSection = () => (
  <section id="contact" className="bg-[#F5F5F1] py-24">
    <div className="container mx-auto max-w-4xl px-6">
      <h2 className="mb-8 text-center font-display text-4xl font-bold text-gray-800 md:text-5xl">
        Contact Form
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-gray-600">
        Please indicate who should receive your message. For questions about concerts or general
        ticket information, please see the{' '}
        <button
          type="button"
          onClick={() => smoothScrollToId('concerts')}
          className="font-semibold text-[#A38138] underline underline-offset-2 transition-opacity duration-200 hover:opacity-80"
        >
          concert information
        </button>{' '}
        section.
      </p>

      <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
        <form className="space-y-6">
          <div className="grid items-center gap-4 md:grid-cols-[200px_1fr]">
            <label className="font-body text-base font-medium text-gray-700 md:text-right">
              First Name*:
            </label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 font-body focus:border-[#A38138] focus:outline-none focus:ring-1 focus:ring-[#A38138]"
            />
          </div>

          <div className="grid items-center gap-4 md:grid-cols-[200px_1fr]">
            <label className="font-body text-base font-medium text-gray-700 md:text-right">
              Last Name*:
            </label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 font-body focus:border-[#A38138] focus:outline-none focus:ring-1 focus:ring-[#A38138]"
            />
          </div>

          <div className="grid items-center gap-4 md:grid-cols-[200px_1fr]">
            <label className="font-body text-base font-medium text-gray-700 md:text-right">
              E-mail address*:
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 font-body focus:border-[#A38138] focus:outline-none focus:ring-1 focus:ring-[#A38138]"
            />
          </div>

          <div className="grid items-center gap-4 md:grid-cols-[200px_1fr]">
            <label className="font-body text-base font-medium text-gray-700 md:text-right">
              Send to*:
            </label>
            <select
              required
              className="w-full appearance-none rounded-md border border-gray-300 px-4 py-3 font-body focus:border-[#A38138] focus:outline-none focus:ring-1 focus:ring-[#A38138] bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23A38138%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3e%3cpolyline points=%226 9 12 15 18 9%22/%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[center_right_0.75rem] bg-no-repeat"
            >
              <option value="">Select</option>
              <option>Ticket Office</option>
              <option>Press Inquiries</option>
              <option>General Information</option>
              <option>Artist Management</option>
            </select>
          </div>

          <div className="grid items-center gap-4 md:grid-cols-[200px_1fr]">
            <label className="font-body text-base font-medium text-gray-700 md:text-right">
              Subject*:
            </label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 font-body focus:border-[#A38138] focus:outline-none focus:ring-1 focus:ring-[#A38138]"
            />
          </div>

          <div className="grid items-start gap-4 md:grid-cols-[200px_1fr]">
            <label className="pt-2 font-body text-base font-medium text-gray-700 md:text-right">
              Your Message*:
            </label>
            <textarea
              rows={8}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 font-body focus:border-[#A38138] focus:outline-none focus:ring-1 focus:ring-[#A38138]"
            />
          </div>

          <div className="grid items-start gap-4 md:grid-cols-[200px_1fr]">
            <span className="hidden md:block" />
            <label className="flex items-start gap-3 font-body text-sm text-gray-600">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#A38138] focus:ring-[#A38138]"
              />
              <span>
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => smoothScrollToId('contact')}
                  className="font-semibold text-[#A38138] underline underline-offset-2 transition-opacity duration-200 hover:opacity-80"
                >
                  data protection declaration
                </button>
                .
              </span>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-[200px_1fr]">
            <span className="hidden md:block" />
            <button
              type="submit"
              className="rounded-full bg-[#A38138] px-12 py-3 font-display text-base font-semibold text-white transition-all duration-200 hover:opacity-90"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
