export default function Home() {
  const services = [
    'experience design.',
    'event scripts.',
    'copywriting.',
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
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 text-glow">
          BurtcherWay
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center max-w-2xl">
          This Could Be A Most Unusual Day
        </p>
        <div className="mt-8 w-full max-w-3xl">
          <p className="text-center text-sm md:text-base tracking-[0.2em] uppercase text-gray-500 dark:text-gray-500 mb-4">
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
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-glow">
            Past Clients & Collaborators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: 'Chambord', slug: 'chambord' },
              { name: 'Disney', slug: 'disney' },
              { name: 'Ferrero', slug: 'ferrero' },
              { name: 'Heineken', slug: 'heineken' },
              { name: 'Jura', slug: 'jura' },
              { name: 'Pimms', slug: 'pimms' },
              { name: 'Schweppes', slug: 'schweppes' },
              { name: 'Secret Cinema', slug: 'secretcinema' },
              { name: 'Standon', slug: 'standon' },
              { name: 'Vault', slug: 'vault' },
              { name: 'Vodafone', slug: 'vodafone' },
              { name: 'Wilderness', slug: 'wilderness' }
            ].map((client) => (
              <div
                key={client.slug}
                className="bg-background rounded-lg h-24 p-4 flex items-center justify-center shadow-sm"
              >
                <img
                  src={`https://strgdsysburtcher.blob.core.windows.net/bway/images/logos/${client.slug}.webp`}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-glow">About Us</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            <p className="text-xl font-medium">We offer <span className="accent-blue">bespoke creative</span> &amp; <span className="accent-pink">digital services</span> for individual, charity and corporate clients who are looking to engage with the world in a different way.</p>
            <p>We like <span className="accent-blue">challenges</span>. We don&apos;t think challenges have to mean stress. We like to <span className="accent-pink">solve problems</span>, be helpful, and have some fun.</p>
            <p> <span className="accent-pink">Breadth of experience is our strength</span>. We can deliver bread and butter needs like getting your website up and running with essential <span className="accent-blue">SEO and analytics</span>, performance tweaks and content suggestions to accelerate your reach.</p>
            <p>We can also help you with more complex (or weirder) projects that require a blend of <span className="accent-pink">creativity</span> and <span className="accent-blue">technical expertise</span>, like delivering the front- and back-ends of your cloud-based immersive adventure game festival app, <em>and</em> helping you script and direct the live actor encounter you've planned for midnight on the final day.</p>
            <p>We work with talented people from a variety of disciplines to handle both the creative stuff - <span className="accent-pink">writing, direction, ideation</span> - and the technical stuff - <span className="accent-blue">development, design, production</span>.</p>
            <p>Past projects include <span className="accent-pink">unique live experiences</span> and events combining adventure, games, technology and performances, from big festival productions to <span className="accent-blue">one-to-one encounters</span>.</p>
            <p>We also make creative purely digital experiences like <span className="accent-blue">games, puzzles and online stories</span> (which are better for you than doomscrolling).</p>
            <p>We especially love projects which <span className="accent-pink">combine the two</span>.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-glow">In The Pipeline</h2>
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
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                    Sorry - video not supported
                  </div>
                </video>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4 md:px-8 lg:px-16">
                    <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
                      The Chalice of the Dread King
                    </h3>
                    <p className="md:hidden text-sm text-white leading-relaxed">
                      A faithful recreation of the lost 90s text adventure by Black Lizard Software. Coming 2026.
                    </p>
                    <p className="hidden md:block text-base lg:text-lg text-white leading-relaxed">
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
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                    Video not supported
                  </div>
                </video>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4 md:px-8 lg:px-16">
                    <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
                      PAINBALL
                    </h3>
                    <p className="md:hidden text-sm text-white leading-relaxed">
                      A tactical roguelike deckbuilder in the pleasingly familiar world of brutal bloodsport. Coming 2026.
                    </p>
                    <p className="hidden md:block text-base lg:text-lg text-white leading-relaxed">
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

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-glow">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <a 
            href="mailto:mat@burtcherway.com" 
            className="inline-block hover:scale-110 transition-transform duration-200"
            title="mat@burtcherway.com"
          >
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="drop-shadow-lg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © Burtcher Way Ltd.<br />
            Registered in England and Wales, Company No. 13488053
          </p>
        </div>
      </section>
    </main>
  )
}