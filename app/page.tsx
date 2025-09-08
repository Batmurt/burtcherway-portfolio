export default function Home() {
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
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-glow">Current Projects</h2>
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
                    Video not supported
                  </div>
                </video>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-16">
                    <h3 className="text-8xl md:text-9xl font-bold text-white mb-6">
                      The Chalice of the Dread King
                    </h3>
                    <p className="text-white text-xl leading-relaxed">
                      A faithful recreation of lost 90s text adventure The Chalice of the Dread King, the third and final game in the Dread King series from Black Lizard Software. Originally ported in a limited run, we're working with Black Lizard to bring this cult classic to a new generation of players in 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                  <source src="https://strgdsysburtcher.blob.core.windows.net/bway/video/painball-teaser.mp4" type="video/mp4" />
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                    Video not supported
                  </div>
                </video>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-16">
                    <h3 className="text-8xl md:text-9xl font-bold text-white mb-6">
                      PAINBALL
                    </h3>
                    <p className="text-white text-xl leading-relaxed">
                      Big hits, big egos, and big ethical questions plague a society in thrall to brutal bloodsport spectacle in this tactical roguelike 
  deckbuilder. Manage your team of Painballers, build your deck, and fight to the death in a pleasingly familiar dystopian vision where entertainment is the only escape. Coming 2026.
                    </p>
                  </div>
                </div>
              </div>
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
            <p className="text-xl font-medium">We offer bespoke creative & digital services for individual, charity and corporate clients who are looking to engage with the world in a different way.</p>
            <p>We like challenges. We don't think challenges have to mean stress. We like to solve problems, be helpful, and have some fun.
            </p>
            <p>Past projects include unique live experiences and events, combining adventure, games, technology and performances. We've worked with a broad range of talented people on everything from big festival productions to one-to-one encounters.
            </p>
            <p>We also make creative purely digital experiences - games, puzzles and online stories - which are better for you than doomscrolling.</p>
            <p>We especially love projects which combine the two.</p>
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