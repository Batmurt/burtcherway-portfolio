'use client'

import { useEffect, useRef, useState } from 'react'
import ContactCta from './ContactCta'

export default function FaqBoxout() {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new ResizeObserver(() => setHeight(el.scrollHeight))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-accentBrown text-cream rounded-lg p-8 md:p-12">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-left">
        Hang On: That&apos;s A Lot Of Things
      </h3>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="faq-area"
        className="flex items-center gap-3 text-left w-full"
      >
        <span
          aria-hidden="true"
          className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 border-background text-lg leading-none transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
        <span className="text-background/80 text-base leading-relaxed">
          Yes - it is. Click here to read a short dramatic dialogue which attempts to explain how we got here.
        </span>
      </button>

      <div
        id="faq-area"
        style={{ maxHeight: open ? height : 0 }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div ref={contentRef} className="faq-area space-y-4 text-background/80 text-base leading-relaxed pt-6">
          <p className="faq-question">WHAT DO YOU MEAN YOU DO CLOUD INFRASTRUCTURE, AND DIRECT THEATRE, AND DO BRAND EXPERIENCES ETC?</p>
          <p>We mean: we do all those things. And more. It is amazing what you can learn to do in a busy lifetime - even more so if you work with good people.</p>
          <p className="faq-question">WHICH ONE IS THE SIDE HUSTLE?</p>
          <p>None of them. They are all equal-hustles.</p>
          <p className="faq-question">DOES THAT MEAN YOU ARE RUBBISH AT THEM THOUGH?</p>
          <p>No. We work really hard and do things properly. It&apos;s gone well so far, though there&apos;s always more to learn.</p>
          <p className="faq-question">THIS SEEMS RIDICULOUS.</p>
          <p>Just imagine what it&apos;s like trying to make ourselves SEO and LinkedIn friendly.</p>
          <p className="faq-question">MAYBE REDUCING OURSELVES TO JUST ONE SKILLSET OR IDENTITY TO DRIVE CLICKS IS A BIT SAD, CULTURALLY SPEAKING.</p>

          <p>You know, you might be on to something.</p>

          <p className="faq-question">WHAT&apos;S WITH THE NAME?</p>

          <p>That&apos;s my name. I&apos;m Mat Burtcher and I started the company as a way of centralising all my projects. I picked the name to help me remember not to do things in the cynical and mean ways that are often promoted as &apos;normal&apos; by business people. Doing things the Burtcher Way means aiming to do them incredibly well, with integrity, and making amends where you fall short of either. It is something I work at. So now you know.</p>

          <p className="faq-question">SO YOU <em>REALLY</em> DO ALL THOSE THINGS?</p>
          <p>Yes - though of course I work with lots of great people. Personally speaking: I cannot sit still, I want to do everything, and as I have gotten older I have tried to stop torturing myself into pretending otherwise. Life is unimaginably short, so I like to keep busy.</p>

          <p>As a result, I have extensive experience producing, marketing & managing big events (like London&apos;s <a href="https://www.vaultfestival.com" target="_blank" rel="noopener noreferrer">VAULT Festival</a>). I&apos;ve done a lot of recruitment and leading of teams and casts. I have worked on many promotional activities for big brands, from writing copy and designing experiences in advance to directing hosts, performers and brand ambassadors on the day. I am also a software engineer (predominantly .NET though I also have to work in JavaScript, PHP & Python from time to time like everybody else) and a cloud solutions architect at DSys Plus Ltd, where I design and implement solutions for clients as diverse as art galleries, charities, ocean fleet operators and tea importers. I have variously produced, written and directed plays and immersive shows, designed escape rooms, and delivered big weird narrative escapades for Festivals where we combine live performance with app-based storytelling and treasure hunts (though I haven&apos;t come up with a pithy description for that sort of thing yet).</p>

          <p>It does sound like a lot - but I truly believe that each one of those things informs the others, and they all help me understand the needs of others a little better. I don&apos;t pretend to know everything, or even most things in each of those areas and I am suspicious of anyone who does. Instead, I love hearing other people&apos;s challenges, asking questions and helping them find solutions, whether those solutions are strange and exciting or just neat, clean and simple. That approach works for delivering big events, building web apps and everything in between.</p>

          <p>Has that helped?</p>

          <p className="faq-question">I&apos;ll let you know.</p>
          <ContactCta />
    
        </div>
      </div>
    </div>
  )
}
