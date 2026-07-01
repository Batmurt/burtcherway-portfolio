import Image from 'next/image'
import CaseStudies from '@/components/CaseStudies'
import StickyHeader from '@/components/StickyHeader'
import FaqBoxout from '@/components/FaqBoxout'
import ContactCta from '@/components/ContactCta'

export default function Home() {
  const services = [
    'experience design.',
    'event scripts.',
    'copywriting.',
    'showcalling.',
    'performance direction.',
    'digital production.',
    'game design.',
    'web development.',
    'seo & analytics.',
    'digital marketing.',
    'puzzles & ARGs.',
    'strategy.',
    'interactive stories.',
    'community projects.',
    'workshops.',
    'live moments.',
    'installation concepts.',
    'creative direction.',
    'playtests.',

  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div
          aria-label="lets have fun, in morse code"
          className="text-center text-[0.65rem] md:text-lg tracking-[0.1em] font-mono select-none blur-ultra-soft mb-5 "
        >
          <span className="text-accent-teal">.-.. . - ...</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent-yellow">.... .- ...- .</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent-maroon">..-. ..- -.</span>
        </div>
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute mb-6 inset-0 flex items-center justify-center text-6xl md:text-8xl font-bold text-primary blur-soft opacity-70 select-none pointer-events-none "
          >
            BurtcherWay
          </span>
          <h1 className="relative text-6xl md:text-8xl font-bold text-center mb-6 text-primary ">
            BurtcherWay
          </h1>
          
        </div>
        
        <StickyHeader />
        <p className="text-xl md:text-2xl text-accent-brown text-center max-w-2xl mt-6">
          This Could Be A Most Unusual Day
        </p>
        <div className="mt-8 w-full max-w-3xl">
          <p className="text-center text-sm md:text-base tracking-[0.2em] uppercase text-accent-brown mb-4">
            Experiential and Digital Creative Services
          </p>
          <div className="services-wall" aria-label="Creative services list">
            <div className="services-track">
              {services.concat(services).map((service, idx) => (
                <span key={`${service}-${idx}`} className="services-word">
                  {service}
                </span>
              ))}
            </div>
          </div>
      <ContactCta />

        </div>
      </section>


      {/* Clients Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-accentMaroon">
            Brands & Collaborators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: 'PepsiCo', slug: 'PepsiCo-logo' },
              { name: 'Oslo2026', slug: 'Oslo2026-logo' },
              { name: 'FUSE', slug: 'FUSE-logo' },
              { name: 'Chambord', slug: 'chambord' },
              { name: 'Disney', slug: 'disney' },
              { name: 'Ferrero', slug: 'ferrero' },
              { name: 'Heineken', slug: 'heineken' },
              { name: 'Jura', slug: 'jura' },
              { name: 'Haygarth', slug: 'Haygarth-logo' },
              { name: 'Pimms', slug: 'pimms' },
              { name: 'Schweppes', slug: 'schweppes' },
              { name: 'Secret Cinema', slug: 'secretcinema' },
              { name: 'Standon', slug: 'standon' },
              { name: 'Vault Festival', slug: 'vault' },
              { name: 'Vodafone', slug: 'vodafone' },
              { name: 'Wilderness', slug: 'wilderness' }
            ].map((client) => (
              <div
                key={client.slug}
                className="bg-black rounded-lg h-24 p-4 flex items-center justify-center shadow-sm"
              >
                <Image
                  src={`https://strgdsysburtcher.blob.core.windows.net/bway/images/logos/${client.slug}.webp`}
                  alt={`${client.name} logo`}
                  width={160}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-20 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-accentMaroon">About The Company</h2>
          <div className="space-y-6 text-foreground/70 text-base leading-relaxed">
          <p className="text-4xl"></p>
            <p className="text-xl font-medium">We offer <span className="accent-teal">bespoke creative</span> &amp; <span className="accent-maroon">digital services</span> for individual, charity and corporate clients who are looking to engage with the world in a different way.</p>
            <p>We like <span className="accent-teal">challenges</span>. We don&apos;t think challenges have to mean stress. We like to <span className="accent-maroon">solve problems</span>, be helpful, and have some fun.</p>
            <p> <span className="accent-maroon">Breadth of experience is our strength</span>, from live events to digital experiences. </p>
            <p>We can deliver bread and butter digital needs like getting your website built and armed with essential <span className="accent-teal">SEO, analytics</span> and content suggestions to help you do whatever it is you're trying to do: run a business, advertise your brand or engage your audience.</p>
            <p>We offer <span className="accent-maroon">creative services</span> like <span className="accent-teal">writing, direction, ideation</span> and <span className="accent-maroon">production</span> for live events, immersive experiences, interactive stories and games.</p>
            <p>We are well suited to help you with more complex (or weirder) projects that require a blend of <span className="accent-maroon">creativity</span> and <span className="accent-teal">technical expertise</span>, like delivering the front- and back-ends of your cloud-based immersive adventure game festival app, <em>and</em> helping you script and direct the live actor encounter you&apos;ve planned for midnight on the final day.</p>
            <p>We work with talented people from a variety of disciplines to handle both the creative stuff - <span className="accent-maroon">writing, direction, ideation</span> - and the technical stuff - <span className="accent-teal">development, design, production</span>.</p>
            <p>Past projects include <span className="accent-maroon">unique live experiences</span> and events combining adventure, games, technology and performances, from big festival productions to <span className="accent-teal">one-to-one encounters</span>.</p>
            <p>We also make creative purely digital experiences like <span className="accent-teal">games, puzzles and online stories</span> (which are better for you than doomscrolling).</p>
            <p>We especially love projects which <span className="accent-maroon">combine lots of these things at once.</span>.</p>
          </div>
        </div>
      </section>

      <ContactCta />

      {/* Boxout Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <FaqBoxout />
        </div>
      </section>


      {/* Case Studies Section */}
      <CaseStudies />

      <ContactCta />

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-accentMaroon">In The Pipeline</h2>
          <div className="space-y-32">
            
            {/* The Chalice of the Dread King */}
            <div className="group relative cursor-pointer">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://strgdsysburtcher.blob.core.windows.net/bway/video/cotd-teaser.mp4" type="video/mp4" />
                  <div className="w-full h-full bg-foreground/10 flex items-center justify-center text-foreground/50">
                    Sorry - video not supported
                  </div>
                </video>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4 md:px-8 lg:px-16">
                    <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold text-cream mb-6">
                      The Chalice of the Dread King
                    </h3>
                    <p className="md:hidden text-sm text-cream leading-relaxed">
                      A faithful recreation of the lost 90s text adventure by Black Lizard Software. Coming 2026.
                    </p>
                    <p className="hidden md:block text-base lg:text-lg text-cream leading-relaxed">
                      A faithful recreation of lost 90s text adventure The Chalice of the Dread King, the third and final game in the Dread King series from Black Lizard Software. Originally ported in a limited run, we&apos;re working with Black Lizard to bring this cult classic to a new generation of players in 2026.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Painball */}
            <div className="group relative cursor-pointer">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://strgdsysburtcher.blob.core.windows.net/bway/video/painball-teaser.mp4" type="video/mp4" />
                  <div className="w-full h-full bg-foreground/10 flex items-center justify-center text-foreground/50">
                    Video not supported
                  </div>
                </video>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4 md:px-8 lg:px-16">
                    <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold text-cream mb-6">
                      PAINBALL
                    </h3>
                    <p className="md:hidden text-sm text-cream leading-relaxed">
                      A tactical roguelike deckbuilder in the pleasingly familiar world of brutal bloodsport. Coming 2026.
                    </p>
                    <p className="hidden md:block text-base lg:text-lg text-cream leading-relaxed">
                      Big hits, big egos, and big ethical questions plague a society in thrall to brutal bloodsport spectacle in this tactical roguelike 
  deckbuilder. Manage your team of Painballers, build your deck, and fight to the death in a pleasingly familiar dystopian vision where entertainment is the only escape. Coming 2027.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <ContactCta />

      {/* Copyright Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-accent-brown">
            © Burtcher Way Ltd.<br />
            Registered in England and Wales, Company No. 13488053
          </p>
        </div>
      </section>
    </main>
  )
}