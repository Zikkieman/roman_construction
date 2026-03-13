import type { Dispatch, SetStateAction } from 'react'
import type { Testimonial } from '../../types/architecture'
import { SectionEyebrow } from '../common/SectionEyebrow'

interface TestimonialsSectionProps {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  testimonials: Testimonial[]
}

export function TestimonialsSection({
  activeIndex,
  setActiveIndex,
  testimonials,
}: TestimonialsSectionProps) {
  const activeReview = testimonials[activeIndex]

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="reveal" data-reveal="true">
            <SectionEyebrow>Our Clients Talk For Us</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1b140e] sm:text-5xl">
              People remember how a space makes them feel.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#65584c]">
              The original template uses a Swiper slider here. This build mirrors
              that behavior with a timed testimonial rotation, manual controls, and
              a smooth content transition.
            </p>
            <div className="mt-10 flex gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={`${item.name}-${index}`}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index ? 'w-12 bg-[#d6a26c]' : 'w-6 bg-[#d8c7b4]'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div
            className="reveal rounded-[34px] bg-[#17120d] p-8 text-white shadow-[0_40px_90px_rgba(25,17,10,0.24)] sm:p-10"
            data-reveal="true"
          >
            <div className="min-h-[340px] transition duration-500">
              <p className="text-7xl leading-none text-[#d6a26c]">“</p>
              <p className="mt-6 text-lg leading-8 text-white/82">{activeReview.quote}</p>
              <div className="mt-10 flex items-center gap-4">
                <img
                  alt={activeReview.name}
                  className="size-16 rounded-full object-cover"
                  src={activeReview.image}
                />
                <div>
                  <h3 className="font-serif text-2xl">{activeReview.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-white/55">
                    {activeReview.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
