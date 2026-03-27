import { projectCards } from "../../data/architectureHome";
import { Link } from "react-router-dom";
import type { ProjectCard } from "../../types/architecture";
import { IconArrow } from "../common/icons";

const projectColumns: Array<1 | 2 | 3> = [1, 2, 3];

function ProjectCardItem({
  item,
  delay,
}: {
  item: ProjectCard;
  delay: number;
}) {
  return (
    <article
      className="reveal group relative"
      data-reveal="true"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a className="block" href="#contact">
        <div className="relative overflow-hidden bg-[#201913]">
          <img
            alt={item.title}
            className={`${item.imageClassName} w-full object-cover transition duration-700 group-hover:scale-110`}
            src={item.image}
          />
          <div className="absolute bottom-0 right-0 z-10 flex h-[78px] w-[78px] translate-y-3 items-center justify-center bg-[#C39B7B] text-[#17120d] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white">
            <IconArrow />
          </div>
        </div>
      </a>

      <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
        <h3 className="font-sans text-[22px] font-extrabold leading-none text-[#ece7e2] sm:text-[24px] lg:text-[26px]">
          {item.title}
        </h3>
        <p className="pb-0.5 text-[15px] text-[#a59b92]">{item.category}</p>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#17130f] text-[#ece7e2]"
    >
      <div className="mx-auto max-w-[1460px] px-8 py-24 sm:px-12 lg:px-20 lg:py-32 xl:px-24">
        <div className="reveal text-center" data-reveal="true">
          <h2 className="font-sans text-[38px] font-extrabold leading-[1.12] tracking-[-0.05em] text-[#ece7e2] sm:text-[44px] lg:text-[50px]">
            <span className="text-[#ece7e2]">Recent </span>
            <span className="projects-outline-text">Projects</span>
          </h2>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute inset-y-0 left-1/3 hidden -translate-x-1/2 border-l border-dashed border-white/14 lg:block" />
          <div className="absolute inset-y-0 left-2/3 hidden -translate-x-1/2 border-l border-dashed border-white/14 lg:block" />

          <div className="grid gap-14 lg:grid-cols-3 lg:gap-x-[5.5rem]">
            {projectColumns.map((column, columnIndex) => (
              <div key={column} className="flex flex-col gap-14">
                {projectCards
                  .filter((item) => item.column === column)
                  .map((item, itemIndex) => (
                    <ProjectCardItem
                      key={item.title}
                      delay={columnIndex * 120 + itemIndex * 90}
                      item={item}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-[4.5rem] text-center" data-reveal="true">
          <Link className="group inline-block" to="/gallery">
            <span className="relative inline-block text-[13px] font-bold uppercase tracking-[0.16em] text-[#a59b92] transition-colors duration-300 group-hover:text-[#C39B7B]">
              View All Projects
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C39B7B] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </div>

      </div>

      <div className="mx-auto max-w-[1910px] px-8 pb-24 sm:px-10 lg:px-14 lg:pb-32">
        <div className="projects-marquee mt-16 overflow-hidden py-4">
          <div className="projects-marquee-track">
            {[
              "Residential Fit-Out Specialists",
              "Reliable Construction Delivery",
              "Interior Finishing Experts",
              "Residential Fit-Out Specialists",
              "Reliable Construction Delivery",
              "Interior Finishing Experts",
            ].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className={`mx-6 whitespace-nowrap font-sans text-[54px] font-extrabold leading-[1.18] tracking-[-0.05em] sm:text-[68px] lg:text-[78px] ${
                  index % 2 === 0
                    ? "text-[#d9d4cf]"
                    : "projects-marquee-outline"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
