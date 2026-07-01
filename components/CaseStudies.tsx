import Image from 'next/image'

type AccentColor = 'none' | 'white' | 'cream' | 'teal' | 'maroon' | 'yellow' | 'brown'

interface CaseStudy {
  id: string
  title: string
  body: string
  date?: string
  collaborators?: string
  leadImage?: string
  video?: string
  gallery?: string[]
  galleryType?: 'grid' | 'small-grid' | 'carousel'
  backgroundColor?: AccentColor
  textColor?: AccentColor
}

const BG_CLASSES: Record<AccentColor, string> = {
  none: '',
  white: 'bg-white',
  cream: 'bg-background',
  teal: 'bg-accentTeal',
  maroon: 'bg-accentMaroon',
  yellow: 'bg-accentYellow',
  brown: 'bg-accentBrown',
}

const TEXT_CLASSES: Record<AccentColor, { heading: string; meta: string; body: string }> = {
  none: { heading: 'text-foreground', meta: 'text-foreground/60', body: 'text-foreground/70' },
  white: { heading: 'text-white', meta: 'text-white/70', body: 'text-white/80' },
  cream: { heading: 'text-background', meta: 'text-background/70', body: 'text-background/80' },
  teal: { heading: 'text-accentTeal', meta: 'text-accentTeal/70', body: 'text-accentTeal/80' },
  maroon: { heading: 'text-accentMaroon', meta: 'text-accentMaroon/70', body: 'text-accentMaroon/80' },
  yellow: { heading: 'text-accentYellow', meta: 'text-accentYellow/70', body: 'text-accentYellow/80' },
  brown: { heading: 'text-accentBrown', meta: 'text-accentBrown/70', body: 'text-accentBrown/80' },
}

const caseStudies: CaseStudy[] = [

  {
    id: 'sports-activation',
    title: 'Game Changers Live: UEFA Women&apos;s Champions League Final',
    body: 'A weekend long celebration of the UWCLF Final in Oslo, bringing together fans, creatives, athletes and leading voices on behalf of PepsiCo, with guest contributors VERSUS. Featuring a panel with Ian Wright and Sarina Wiegman, a special appearance from Steph Houghton and a full fashion show and concert from leading Norwegian popstar Julie Bergan. Burtcher Way provided event scripts, experience design for audience activities, directed the event hosts James Threlfall and Kristine Arntzen and ran the main stage&apos;s showcaller duties throughout the weekend.',
    date: '2026',
    collaborators: 'FUSE, PepsiCo, VERSUS',
    backgroundColor: 'teal',
    textColor: 'cream',
    gallery: [
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/gcl-00.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/gcl-09.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/gcl-01.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/gcl-03.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/gcl-02.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/gcl-06.webp',
    ],
    galleryType: 'small-grid'
  }, 
  {
    id: 'brand-experience',
    title: 'Disney: The Wonder Of Friendship',
    body: 'A multi-sensorial pop-up event produced by Haygarth which enchanted 40,000 ticket buyers across London, Berlin, Paris, and Madrid. We provided scripting, narrative design and performer direction for this immersive experience that celebrated the magic of Disney\'s iconic friendships. The event featured a series of interactive rooms, featuring 360 projection, sensory experience and collaborative activities, each themed around some of Disney\'s most beloved characters.',
    date: '2024',
    collaborators: 'Haygarth, Disney',
    backgroundColor: 'maroon',
    textColor: 'cream',
    galleryType: 'grid',
    gallery: [
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wof-1.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wof-2.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wof-3.webp'
    ],
  },
  {
    id: 'immersive-adventure',
    title: 'Who Let The Toys Out?',
    body: 'A four-day interactive collaboration with 6FootStories for Standon Calling that seamlessly blended high-energy live activations, immersive storytelling, and game app tech with a prize in mind: golden tickets to the next year\'s festival. Audiences drove the narrative forward and earned points all weekend through physical challenges like laser tag and rc racing, unlockable one-on-one experiences, and roaming characters who recruited them as double agents, and a massive site-wide Lost Toy treasure hunt driven by a bespoke web application. The app featured QR-triggered riddles, "ToyDar" real-world geolocation proximity tracking, and badges, as well as awarding points dynamically for innovative and creative players.',
    date: '2022',
    backgroundColor: 'yellow',
    textColor: 'teal',
    collaborators: '6FootStories, Standon Calling',
    galleryType: 'grid',
    gallery: [
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-main.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-collage-notext.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-scrn1.png',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-photo1.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-scrn2.png',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-scrn3.png'
    ],
  },
  
  // {
  //   id: 'digital-puzzle-game',
  //   title: 'Across the Veil: Web Puzzle Experience',
  //   body: 'A narrative-driven web puzzle game combining cryptography, image analysis, and community collaboration. Players progressed through increasingly complex challenges that revealed an overarching mystery. The experience built a dedicated community with participants solving puzzles together across forums and social media.',
  //   date: '2022',
  //   collaborators: 'Independent Production',
  //   leadImage: 'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto.webp',
  //   video: 'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/wltto-vid.mp4',
    
  // },
]

export default function CaseStudies() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-accentMaroon">
          Case Studies
        </h2>

        <div>
          {caseStudies.map((study) => {
            const bg = BG_CLASSES[study.backgroundColor ?? 'none']
            const text = TEXT_CLASSES[study.textColor ?? 'none']

            return (
              <div key={study.id} className="group">
                <div className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen py-16 ${bg}`}>
                  <div className="max-w-7xl mx-auto px-6">
                    {/* Lead Image */}
                    {study.leadImage && (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
                        <Image
                          src={study.leadImage}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Video */}
                    {study.video && !study.leadImage && (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={study.video} type="video/mp4" />
                          <div className="w-full h-full bg-foreground/10 flex items-center justify-center text-foreground/50">
                            Video not supported
                          </div>
                        </video>
                      </div>
                    )}

                    {/* Gallery */}
                    {study.gallery && study.galleryType === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {study.gallery.map((image, idx) => (
                          <div key={idx} className="relative w-full aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`${study.title} gallery image ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {study.gallery && study.galleryType === 'small-grid' && (
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
                        {study.gallery.map((image, idx) => (
                          <div key={idx} className="relative w-full aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`${study.title} gallery image ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Content */}
                    <div className="max-w-3xl">
                      <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${text.heading}`}>
                        {study.title}
                      </h3>

                      {/* Date and Collaborators */}
                      <div className={`flex flex-col md:flex-row md:items-center gap-4 mb-8 text-sm ${text.meta}`}>
                        {study.date && (
                          <span className="tracking-[0.1em] uppercase">{study.date}</span>
                        )}
                        {study.date && study.collaborators && (
                          <span className="hidden md:inline">·</span>
                        )}
                        {study.collaborators && (
                          <span className="tracking-[0.05em]">{study.collaborators}</span>
                        )}
                      </div>

                      {/* Body */}
                      <div className="prose max-w-none">
                        <p className={`text-base md:text-lg leading-relaxed ${text.body}`}>
                          {study.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
