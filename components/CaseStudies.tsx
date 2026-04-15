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
    id: 'immersive-adventure',
    title: 'The Midnight Encounter',
    body: 'A large-scale immersive adventure combining live performances, interactive technology, and participant choice. We designed the narrative structure, developed the companion app for real-time gameplay updates, and directed the live actor encounters that brought the story to life.',
    date: '2024',
    collaborators: 'Secret Cinema, Sandbox Productions',
    video: 'https://strgdsysburtcher.blob.core.windows.net/bway/video/placeholder-case-study.mp4',
  },
  {
    id: 'brand-experience',
    title: 'Festival Activation: The Distillery',
    body: 'A multi-day experiential marketing campaign for a premium spirits brand at a major UK festival. We created the concept, designed the physical installation, built the interactive elements, and managed live performances throughout the event. The activation reached over 5,000 participants and generated significant brand engagement.',
    date: '2023',
    collaborators: 'Heineken, Festival Organizers',
    leadImage: 'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/distillery-hero.webp',
  },
  {
    id: 'digital-puzzle-game',
    title: 'Across the Veil: Web Puzzle Experience',
    body: 'A narrative-driven web puzzle game combining cryptography, image analysis, and community collaboration. Players progressed through increasingly complex challenges that revealed an overarching mystery. The experience built a dedicated community with participants solving puzzles together across forums and social media.',
    date: '2022',
    collaborators: 'Independent Production',
    gallery: [
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/veil-1.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/veil-2.webp',
      'https://strgdsysburtcher.blob.core.windows.net/bway/images/case-study/veil-3.webp',
    ],
  },
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
