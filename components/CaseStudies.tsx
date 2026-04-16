import Image from 'next/image'

interface CaseStudy {
  id: string
  title: string
  body: string
  date?: string
  collaborators?: string
  leadImage?: string
  video?: string
  gallery?: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'brand-experience',
    title: 'Disney: The Wonder Of Friendship',
    body: 'A multi-sensorial pop-up event produced by Haygarth which enchanted 40,000 ticket buyers across London, Berlin, Paris, and Madrid. We provided scripting, narrative design and performer direction for this immersive experience that celebrated the magic of Disney\'s iconic friendships. The event featured a series of interactive rooms, featuring 360 projection, sensory experience and collaborative activities, each themed around some of Disney\'s most beloved characters.',
    date: '2024',
    collaborators: 'Haygarth, Disney',
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
    collaborators: '6FootStories, Standon Calling',
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
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-glow">
          Case Studies
        </h2>

        <div className="space-y-32">
          {caseStudies.map((study) => (
            <div key={study.id} className="group">
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
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                      Video not supported
                    </div>
                  </video>
                </div>
              )}

              {/* Gallery */}
              {study.gallery && (
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

              {/* Content */}
              <div className="max-w-3xl">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {study.title}
                </h3>

                {/* Date and Collaborators */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
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
                <div className="prose prose-invert max-w-none">
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {study.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
