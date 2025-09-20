import TypewriterText from '@/components/TypewriterText'
import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      <section className="text-center py-8 md:py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{
          color: '#00ff00',
          textShadow: '0 0 20px rgba(0, 255, 0, 0.5)'
        }}>
          <GlitchText text="STONY BROOK" />
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{
          color: '#00ffff',
          textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
        }}>
          <TypewriterText text="CYBERSECURITY CLUB" />
        </h2>
        <p className="text-xl max-w-2xl mx-auto" style={{ 
          color: '#00ff00',
          opacity: 0.8 
        }}>
          <TypewriterText 
            text="join us and learn to hack (legally)" 
            delay={50}
          />
        </p>
      </section>

      <ScrollReveal delay={100}>
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <GlowCard>
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ 
              color: '#00ff00',
              textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' 
            }}>
              [MISSION]
            </h3>
            <p className="text-terminal-green/90 leading-relaxed">
              we're the cybersecurity club at stony brook, focused on learning 
              ethical hacking and digital defense together. whether you're a complete 
              beginner or already know your way around a terminal, you'll fit right in. 
              no gatekeeping, just learning and growing together.
            </p>
          </GlowCard>

          <GlowCard glowColor="0, 255, 255">
            <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ 
              color: '#00ff00',
              textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' 
            }}>
              [WEEKLY MEETUPS]
            </h3>
            <div className="space-y-6">
              <div className="py-2">
                <div className="flex items-start mb-2">
                  <div>
                    <div style={{ color: '#00ffff', fontSize: '16px', fontWeight: 'bold' }}>GBMs: Wednesdays 5-6 PM</div>
                    <div style={{ color: '#00ff00', fontSize: '14px', marginTop: '4px', opacity: 0.8 }}>Location: TBA (check Discord!)</div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex items-start">
                  <div>
                    <div style={{ color: '#00ffff', fontSize: '16px', fontWeight: 'bold' }}>Hacker Hours: Fridays 3-5 PM</div>
                    <div style={{ color: '#00ff00', fontSize: '14px', marginTop: '4px', opacity: 0.8 }}>Location: SAC 309</div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <GlowCard glowColor="0, 255, 255" className="w-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{
          color: '#00ffff',
          textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
        }}>
          [JOIN THE REVOLUTION]
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center relative">
            <div className="text-4xl mb-3 animate-bounce">🛡️</div>
            <h4 className="font-bold mb-2" style={{ color: '#00ffff' }}>Learn Security</h4>
            <p className="text-sm" style={{ color: '#00ff00', opacity: 0.8 }}>
              start from the basics and work your way up to advanced techniques
            </p>
          </div>
          <div className="text-center relative">
            <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '0.2s' }}>🏆</div>
            <h4 className="font-bold mb-2" style={{ color: '#00ffff' }}>Compete in CTFs</h4>
            <p className="text-sm" style={{ color: '#00ff00', opacity: 0.8 }}>
              team up for capture the flag competitions and learn by doing
            </p>
          </div>
          <div className="text-center relative">
            <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '0.4s' }}>🤝</div>
            <h4 className="font-bold mb-2" style={{ color: '#00ffff' }}>Network & Grow</h4>
            <p className="text-sm" style={{ color: '#00ff00', opacity: 0.8 }}>
              connect with fellow security enthusiasts and build your career
            </p>
          </div>
        </div>
        </GlowCard>
      </ScrollReveal>
    </div>
  )
}