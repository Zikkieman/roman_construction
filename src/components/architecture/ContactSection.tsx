import { IconArrow } from '../common/icons'
import { SectionEyebrow } from '../common/SectionEyebrow'

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#17120d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="reveal" data-reveal="true">
            <SectionEyebrow>Contact, Let&apos;s Talk</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              Let&apos;s bring your project to life.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              Let us know how we can best help you. We are a leading architecture
              firm dedicated to creating designs.
            </p>

            <form className="mt-10 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.28em] text-white/52">
                  Your Name*
                </span>
                <input
                  className="h-14 w-full rounded-full border border-white/12 bg-white/6 px-6 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d6a26c]"
                  defaultValue="Jonathon Ronan"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.28em] text-white/52">
                  Email Address*
                </span>
                <input
                  className="h-14 w-full rounded-full border border-white/12 bg-white/6 px-6 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d6a26c]"
                  defaultValue="jonathonronana63@gmail.com"
                  type="email"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.28em] text-white/52">
                  Phone No*
                </span>
                <input
                  className="h-14 w-full rounded-full border border-white/12 bg-white/6 px-6 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d6a26c]"
                  defaultValue="+0 321 546 2345"
                  type="tel"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.28em] text-white/52">
                  Your Message Here*
                </span>
                <textarea
                  className="min-h-40 w-full rounded-[28px] border border-white/12 bg-white/6 px-6 py-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d6a26c]"
                  defaultValue=""
                  placeholder="Tell us about your architectural vision..."
                />
              </label>
              <button
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d6a26c] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#17120d] transition hover:-translate-y-1 hover:bg-[#e4b27f] sm:col-span-2 sm:w-fit"
                type="button"
              >
                Send Message Now
                <IconArrow />
              </button>
            </form>
          </div>

          <div className="reveal flex flex-col gap-6" data-reveal="true">
            <div className="overflow-hidden rounded-[34px] bg-white/5 p-4 backdrop-blur">
              <img
                alt="Contact architecture"
                className="h-[420px] w-full rounded-[26px] object-cover"
                src="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6a26c]">
                  Address
                </p>
                <p className="mt-4 text-base leading-8 text-white/78">
                  123 Maple Street Toronto, Ontario M1A 1A1 Canada
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6a26c]">
                  Contact
                </p>
                <p className="mt-4 text-base leading-8 text-white/78">
                  [email protected]
                  <br />
                  +1 555-123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
