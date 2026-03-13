import { processSteps } from '../../data/architectureHome'

function ProcessArtwork({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative h-[162px] overflow-hidden bg-[#0f0d0d]">
        <div className="absolute left-[-6%] top-[27%] h-16 w-16 rounded-full bg-[#5c7279]" />
        <div className="absolute bottom-[13%] left-0 h-14 w-[66%] bg-[#efe5d1]" />
        <div className="absolute bottom-[13%] left-[43%] h-[86px] w-[86px] rounded-full border-[20px] border-[#0f0d0d] bg-transparent" />
        <div className="absolute right-[-4%] top-[12%] h-36 w-36 rounded-full bg-[#d78504]" />
        <div className="absolute left-0 top-[52%] h-[3px] w-[98%] bg-[#aeb3b3]" />
        <div className="absolute right-[8%] top-[53%] h-[3px] w-[28%] bg-[#0f0d0d]" />
        <div className="absolute right-[8%] top-[47%] h-[3px] w-[28%] bg-[#0f0d0d]" />
        <div className="absolute right-[8%] top-[59%] h-[3px] w-[28%] bg-[#0f0d0d]" />
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="relative h-[162px] overflow-hidden bg-[#11100e]">
        <div className="absolute -left-[6%] top-[24%] h-[140px] w-[140px] rounded-full border-[28px] border-[#f0b474]" />
        <div className="absolute left-[28%] top-[-18%] h-[220px] w-[220px] rounded-full border-[34px] border-[#efe6d7]" />
        <div className="absolute right-[-8%] top-[8%] h-[180px] w-[180px] rounded-full border-[34px] border-[#f0b474]" />
      </div>
    )
  }

  if (index === 2) {
    return (
      <div className="relative h-[162px] overflow-hidden bg-[#0f0d0d]">
        <div className="absolute left-0 top-[23%] h-[4px] w-[34%] bg-[#3f8792]" />
        <div className="absolute left-[12%] top-[6%] h-[74px] w-[74px] rounded-full bg-[repeating-linear-gradient(180deg,#efe5d1_0_6px,transparent_6px_11px)]" />
        <div className="absolute right-[8%] top-[16%] h-[170px] w-[170px] rounded-[999px_999px_0_0] bg-[#efe5d1]" />
        <div className="absolute right-[2%] bottom-[-16%] h-[108px] w-[108px] rounded-full bg-[#d88b05]" />
      </div>
    )
  }

  return (
    <div className="relative h-[162px] overflow-hidden bg-[#f0e6d8]">
      <div className="absolute bottom-[-24%] right-[-6%] h-[120px] w-[170px] rounded-full bg-[#d97818]" />
      <div className="absolute left-[-2%] top-[-8%] h-[138px] w-[78px] rounded-full bg-[#4f4547] rotate-[20deg]" />
      <div className="absolute left-[22%] top-[-10%] h-[180px] w-[70px] rounded-full bg-[#f4efe7] rotate-[14deg]" />
      <div className="absolute right-[20%] top-[-8%] h-[178px] w-[28px] rounded-full bg-black rotate-[22deg]" />
      <div className="absolute right-[-5%] top-[-6%] h-[108px] w-[64px] rounded-full border-[12px] border-[#c5870c] bg-transparent" />
    </div>
  )
}

export function ProcessSection() {
  return (
    <section id="process" className="overflow-hidden bg-[#24231D] text-[#ece7e2]">
      <div className="mx-auto max-w-[1500px] px-8 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="reveal text-center" data-reveal="true">
          <h2 className="font-sans text-[34px] font-extrabold leading-[1.16] tracking-[-0.05em] text-[#ece7e2] sm:text-[42px] lg:text-[52px]">
            <span className="process-outline-text">Process</span>
            <span className="text-[#ece7e2]"> That We Follow</span>
          </h2>
        </div>

        <div className="relative mt-16 lg:mt-18">
          <div className="pointer-events-none absolute left-0 top-[-28px] hidden h-px w-[31%] border-t border-dashed border-white/14 lg:block" />
          <div className="pointer-events-none absolute left-[31%] top-[-36px] hidden text-white/18 lg:block">
            →
          </div>
          <div className="pointer-events-none absolute left-[49%] top-[-28px] hidden h-px w-[30%] border-t border-dashed border-white/14 lg:block" />
          <div className="pointer-events-none absolute left-[79%] top-[-36px] hidden text-white/18 lg:block">
            →
          </div>
          <div className="pointer-events-none absolute right-0 bottom-[14px] hidden h-px w-[34%] border-t border-dashed border-white/14 lg:block" />
          <div className="pointer-events-none absolute right-[34%] bottom-[6px] hidden text-white/18 lg:block">
            →
          </div>

          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="reveal min-h-[336px] border border-dashed border-white/14 bg-[#24231D] px-6 pb-6 pt-4 lg:min-h-[362px] lg:px-6"
                data-reveal="true"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="relative">
                  <div className="absolute left-3 top-2 z-10 text-[16px] font-semibold text-[#C39B7B]">
                    {String(index + 1)}
                  </div>
                  <ProcessArtwork index={index} />
                </div>

                <div className="pt-6">
                  <h3 className="font-sans text-[22px] font-extrabold leading-[1.22] text-[#d8d3cd]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[260px] text-[16px] leading-[1.65] text-[#a79d93]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
