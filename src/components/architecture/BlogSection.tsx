import { blogPosts } from '../../data/architectureHome'
import { IconArrow } from '../common/icons'
import { SectionEyebrow } from '../common/SectionEyebrow'

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#f5f0ea]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div
          className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          data-reveal="true"
        >
          <div>
            <SectionEyebrow>Blog &amp; Articles Of Roman</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1b140e] sm:text-5xl">
              Latest insights on architecture, interiors, and design culture.
            </h2>
          </div>
          <a
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b140e]"
            href="#contact"
          >
            Visit Blog Page
            <IconArrow />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post, index) => (
            <article
              key={`${post.title}-${post.date}`}
              className="reveal group overflow-hidden rounded-[28px] border border-[#e1d5c8] bg-white shadow-[0_22px_50px_rgba(44,31,18,0.05)] transition duration-500 hover:-translate-y-2"
              data-reveal="true"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  alt={post.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  src={post.image}
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8f7d6c]">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#d6a26c]" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-5 font-serif text-[28px] leading-9 text-[#1b140e]">
                  {post.title}
                </h3>
                <a
                  className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b88f63]"
                  href="#contact"
                >
                  Read More
                  <IconArrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
