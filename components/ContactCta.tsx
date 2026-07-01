export default function ContactCta() {
  return (
    <div className="py-12 px-6 text-center">
      <a
        href="mailto:mat@burtcherway.com"
        title="mat@burtcherway.com"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accentMaroon text-cream font-semibold tracking-wide hover:bg-accentTeal transition-colors duration-200"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        Get In Touch
      </a>
    </div>
  )
}
