import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  COMPANY,
  COMPANY_OVERVIEW,
  COMPANY_OVERVIEW_EXTENDED,
} from '../../data/company'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  message: string
  website: string
}

type ContactSectionProps = {
  variant?: 'home' | 'page'
}

type ContactFieldProps = {
  label: string
  name: keyof ContactFormValues
  value: string
  placeholder?: string
  type?: string
  multiline?: boolean
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  labelClassName: string
  fieldClassName: string
}

const INITIAL_FORM_VALUES: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  website: '',
}

function ContactField({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  multiline = false,
  onChange,
  labelClassName,
  fieldClassName,
}: ContactFieldProps) {
  return (
    <label className="block">
      <span className={`block text-[14px] font-semibold uppercase tracking-[0.12em] ${labelClassName}`}>
        {label}
      </span>
      {multiline ? (
        <textarea
          className={`mt-7 h-[98px] w-full resize-none border-b bg-transparent pb-4 text-[16px] leading-[1.8] outline-none ${fieldClassName}`}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required
          value={value}
        />
      ) : (
        <input
          className={`mt-7 h-10 w-full border-b bg-transparent pb-4 text-[16px] outline-none ${fieldClassName}`}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required
          type={type}
          value={value}
        />
      )}
    </label>
  )
}

function IconFacebook() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.5 21v-8.2H16l.4-3h-2.9V7.9c0-.9.3-1.5 1.6-1.5h1.5V3.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H8v3h2.5V21h3Z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconTwitter() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M22 6.1c-.7.4-1.5.6-2.4.7a4.1 4.1 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1A4.1 4.1 0 0 0 11.7 9a11.5 11.5 0 0 1-8.4-4.3 4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.7 3.3 4.1-.3.1-.7.2-1.1.2-.3 0-.6 0-.8-.1.6 1.7 2.2 2.9 4 3A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.3 20c7.5 0 11.6-6.4 11.6-11.9v-.5c.8-.6 1.5-1.3 2.1-2.1Z" />
    </svg>
  )
}

export function ContactSection({ variant = 'home' }: ContactSectionProps) {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(INITIAL_FORM_VALUES)
  const [submitState, setSubmitState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const isPage = variant === 'page'
  const sectionClassName = isPage
    ? 'overflow-hidden bg-[#f7f4ef] text-[#17120d]'
    : 'overflow-hidden bg-[#17120d] text-white'
  const containerClassName = isPage
    ? 'mx-auto max-w-[1520px] px-8 py-24 sm:px-12 lg:px-20 lg:py-28 xl:px-24'
    : 'mx-auto max-w-[1460px] px-8 py-24 sm:px-12 lg:px-20 lg:py-32 xl:px-24'
  const labelClassName = isPage ? 'text-[#17120d]' : 'text-[#f2ede7]'
  const fieldClassName = isPage
    ? 'border-[#ddd6cb] text-[#8a847d] placeholder:text-[#a29a92] focus:border-[var(--color-brand-accent)]'
    : 'border-white/14 text-[#d4ccc3] placeholder:text-[#8f867d] focus:border-[var(--color-brand-accent)]'
  const infoTextClassName = isPage ? 'text-[#6c655e]' : 'text-[#968d84]'
  const titleClassName = isPage ? 'text-[#17120d]' : 'text-[#dfd8d1]'
  const descriptionClassName = isPage ? 'text-[#6f685f]' : 'text-[#8f867d]'

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }))

    if (submitState !== 'idle') {
      setSubmitState('idle')
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (formValues.website) {
      return
    }

    setSubmitState('sending')

    const payload = new FormData()

    payload.append('name', formValues.name)
    payload.append('email', formValues.email)
    payload.append('phone', formValues.phone)
    payload.append('message', formValues.message)
    payload.append('_subject', 'New Roman Contractors contact message')
    payload.append('_replyto', formValues.email)
    payload.append('_template', 'table')
    payload.append('_captcha', 'false')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${COMPANY.email}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: payload,
        },
      )

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean | string }
        | null

      if (
        !response.ok ||
        data?.success === false ||
        data?.success === 'false'
      ) {
        throw new Error('Unable to send message')
      }

      setFormValues(INITIAL_FORM_VALUES)
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <section id="contact" className={sectionClassName}>
      <div className={containerClassName}>
        <div className="grid gap-16 lg:grid-cols-[494px_minmax(0,1fr)] lg:items-stretch lg:gap-20 xl:grid-cols-[520px_minmax(0,1fr)] xl:gap-24">
          <div
            className="reveal relative mx-auto w-full max-w-[494px] lg:mx-0 lg:h-full lg:max-w-none"
            data-reveal="true"
          >
            <div
              className={`absolute bottom-[-56px] right-[-52px] hidden h-[52%] w-[44%] overflow-hidden lg:block ${
                isPage ? 'bg-[#ece7df]' : 'bg-[var(--color-brand-dark)]'
              }`}
            >
              <div
                className={`absolute inset-0 bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.08)_1.4px,transparent_0)] bg-[length:20px_20px] ${
                  isPage ? 'opacity-60' : ''
                }`}
              />
              <div
                className={`absolute left-0 top-0 h-[42%] w-full ${
                  isPage
                    ? 'bg-[linear-gradient(145deg,#f0ece6_0%,#e6e0d7_52%,transparent_52%)]'
                    : 'bg-[linear-gradient(145deg,#3b3834_0%,#2b2a28_52%,transparent_52%)]'
                }`}
              />
              <div
                className={`absolute bottom-[18%] left-0 h-[18px] w-full ${
                  isPage
                    ? 'bg-[var(--color-brand-accent)]/18'
                    : 'bg-[var(--color-brand-accent)]/25'
                }`}
              />
            </div>
            <img
              alt="Dark modern building facade"
              className={`relative z-10 h-[500px] w-full object-cover object-center grayscale contrast-[1.05] sm:h-[620px] ${
                isPage
                  ? 'lg:h-full lg:min-h-[620px] xl:min-h-[640px]'
                  : 'lg:h-full lg:min-h-[700px] xl:min-h-[724px]'
              }`}
              src="https://images.pexels.com/photos/29459590/pexels-photo-29459590.jpeg?cs=srgb&dl=pexels-blackstoneray-29459590.jpg&fm=jpg"
            />
          </div>

          <div
            className={`reveal relative lg:flex lg:flex-col ${
              isPage
                ? 'lg:min-h-[620px] xl:min-h-[640px]'
                : 'lg:min-h-[700px] xl:min-h-[724px]'
            }`}
            data-reveal="true"
          >
            <div
              className={`pointer-events-none absolute right-[3%] top-[8px] hidden h-[64px] w-[108px] border-r border-t border-dashed xl:block ${
                isPage ? 'border-black/12' : 'border-white/14'
              }`}
            />

            <div className="relative">
              {isPage ? (
                <div className="absolute left-[-44px] top-[12px] hidden lg:block">
                  <span className="block origin-top-left rotate-90 text-[18px] font-medium uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                    Contact
                  </span>
                </div>
              ) : null}

              <h2
                className={`max-w-[720px] font-sans font-extrabold leading-[1.12] tracking-[-0.05em] ${titleClassName} ${
                  isPage
                    ? 'text-[32px] sm:text-[38px] lg:text-[46px]'
                    : 'text-[32px] sm:text-[38px] lg:text-[46px]'
                }`}
              >
                {isPage ? (
                  <>
                    Contact Us Anytime, We Are
                    <br />
                    Always There For You
                  </>
                ) : (
                  <>
                    <span className="contact-outline-text">Contact,</span>
                    <span className={titleClassName}> Let&apos;s Talk</span>
                  </>
                )}
              </h2>
            </div>

            {isPage ? null : (
              <p
                className={`mt-8 max-w-[720px] text-[17px] leading-[1.9] ${descriptionClassName}`}
              />
            )}

            <div className="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-[minmax(0,1fr)_220px] xl:grid-cols-[minmax(0,1fr)_246px] xl:gap-x-14">
              <form className="space-y-10" onSubmit={handleSubmit}>
                <input
                  autoComplete="off"
                  className="hidden"
                  name="website"
                  onChange={handleChange}
                  tabIndex={-1}
                  value={formValues.website}
                />

                <ContactField
                  fieldClassName={fieldClassName}
                  label="Your Name*"
                  labelClassName={labelClassName}
                  name="name"
                  onChange={handleChange}
                  placeholder="Your full name"
                  value={formValues.name}
                />
                <ContactField
                  fieldClassName={fieldClassName}
                  label="Email Address*"
                  labelClassName={labelClassName}
                  name="email"
                  onChange={handleChange}
                  placeholder={COMPANY.email}
                  type="email"
                  value={formValues.email}
                />
                <ContactField
                  fieldClassName={fieldClassName}
                  label="Phone No*"
                  labelClassName={labelClassName}
                  name="phone"
                  onChange={handleChange}
                  placeholder={COMPANY.phone}
                  type="tel"
                  value={formValues.phone}
                />
                <ContactField
                  fieldClassName={fieldClassName}
                  label="Your Message Here*"
                  labelClassName={labelClassName}
                  multiline
                  name="message"
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  value={formValues.message}
                />

                <div className="flex flex-col items-start gap-4">
                  <button
                    className="inline-flex h-[58px] items-center justify-center bg-[var(--color-brand-accent)] px-10 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-80"
                    disabled={submitState === 'sending'}
                    type="submit"
                  >
                    {submitState === 'sending'
                      ? 'Sending...'
                      : 'Send Message Now'}
                  </button>

                  <p
                    aria-live="polite"
                    className={`text-[14px] leading-[1.7] ${
                      submitState === 'success'
                        ? 'text-[var(--color-brand-accent)]'
                        : submitState === 'error'
                          ? 'text-[#e0b19a]'
                          : 'text-transparent'
                    }`}
                  >
                    {submitState === 'success'
                      ? 'Message sent successfully.'
                      : submitState === 'error'
                        ? 'Unable to send right now. Please try again.'
                        : 'Status'}
                  </p>
                </div>
              </form>

              <div className={`space-y-12 lg:pt-[134px] xl:pt-[136px]`}>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-accent)]">
                    Address
                  </h3>
                  <p className={`mt-6 text-[16px] leading-[1.9] ${infoTextClassName}`}>
                    {COMPANY.address}
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-accent)]">
                    Contact
                  </h3>
                  <p
                    className={`mt-6 break-words text-[16px] leading-[2] ${infoTextClassName}`}
                  >
                    {COMPANY.email}
                    <br />
                    {COMPANY.phone}
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-accent)]">
                    Social Media
                  </h3>
                  <div
                    className={`mt-6 flex items-center gap-7 ${
                      isPage ? 'text-[#17120d]' : 'text-white'
                    }`}
                  >
                    {/* <a
                      className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                      href="#contact"
                    >
                      <IconFacebook />
                    </a> */}
                    <a
                      className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                      href="#contact"
                    >
                      <IconInstagram />
                    </a>
                    {/* <a
                      className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                      href="#contact"
                    >
                      <IconTwitter />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
