'use client'

import { useEffect, useRef, useState } from 'react'

function StripeBands({ count, transformString }: { count: number; transformString?: string }) {
  return (
    <>
      <div className={`site-stripe-bands site-stripe-bands--soft`} style={{ transform: transformString }}>
        {Array.from({ length: count }).map((_, idx) => (
          <span key={idx} />
        ))}
      </div>
      {/* <div className="site-stripe-bands">
        <span />
        <span />
        <span />
      </div> */}
    </>
  )
}

export default function StickyHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [docked, setDocked] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    // The sentinel has zero height and sits exactly where the stripe rests in
    // normal flow. The instant it scrolls above the viewport, hand off to the
    // fixed, docked bar so the transition happens at the right pixel.
    const observer = new IntersectionObserver(([entry]) => {
      setDocked(!entry.isIntersecting)
    })
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} />

      {/* Stripe in its natural resting place, right below the logotype */}
      <div className="site-stripe" aria-hidden="true">
        <StripeBands count={3} />
      </div>

      {/* Docked bar: fixed to the viewport top, slides/fades in once the
          natural stripe above has scrolled out of view */}
      <div
        className={`site-stripe-docked ${docked ? 'site-stripe-docked--visible' : ''}`}
        aria-hidden={!docked}
      >
        <span className="site-stripe-logo blur-ultra-soft text-cream">BurtcherWay</span>

        <StripeBands count={3} />
      </div>
    </>
  )
}
