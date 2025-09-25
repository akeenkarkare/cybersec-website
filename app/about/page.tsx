import Image from 'next/image';
import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center relative">
        <span className="absolute inset-0 blur-3xl" style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          opacity: 0.4
        }}></span>
        <span className="relative">
          <GlitchText text="[ABOUT_US]" />
        </span>
      </h1>

      <ScrollReveal delay={100}>
        <GlowCard glowColor="255, 0, 255" className="space-y-4">
          <h2 className="text-2xl font-bold" style={{
            background: 'linear-gradient(90deg, #ffff00, #ff6600)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>WHO ARE WE?</h2>
          <p className="leading-relaxed" style={{ color: '#00ffff' }}>
            we're a group of Stony Brook students passionate about cybersecurity. <br />
			      we believe that understanding how systems can be broken is the first step to making them secure. <br />
			      this club was founded to bring together students interested in ethical hacking and digital defense.
          </p>
          <p className="leading-relaxed" style={{ color: '#00ff00' }}>
            from complete beginners just learning about the command line to those with experience in
            security, everyone is welcome. <br />
			      we're building a community where we can learn from each other and grow together in the field of cybersecurity.
          </p>
        </GlowCard>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <GlowCard glowColor="255, 255, 0">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ff00ff' }}>OUR VALUES</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#000000' }}>
              <h3 className="font-bold" style={{ color: '#00ffff' }}>ETHICAL HACKING ONLY</h3>
              <p className="text-sm mt-1" style={{ color: '#ffff00' }}>
                we hack to learn and protect, not to cause damage
              </p>
            </div>
            <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#000000' }}>
              <h3 className="font-bold" style={{ color: '#ff00ff' }}>INCLUSIVE COMMUNITY</h3>
              <p className="text-sm mt-1" style={{ color: '#00ff00' }}>
                all skill levels welcome, we all start somewhere
              </p>
            </div>
            <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#000000' }}>
              <h3 className="font-bold" style={{ color: '#ff6600' }}>LEARN BY DOING</h3>
              <p className="text-sm mt-1" style={{ color: '#00ffff' }}>
                hands-on practice beats theory every time
              </p>
            </div>
            <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#000000' }}>
              <h3 className="font-bold" style={{ color: '#ffff00' }}>CAREER FOCUSED</h3>
              <p className="text-sm mt-1" style={{ color: '#ff00ff' }}>
                building skills for real-world security careers
              </p>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <GlowCard glowColor="0, 255, 255">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#00ffff' }}>EXECUTIVE BOARD</h2>
          <div className="flex sm:grid-cols-2 sm:gap-6">
            <div className="space-y-2 flex-1 rounded-lg transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(255,0,255,0.1), transparent)',
              border: '1px solid rgba(255,0,255,0.3)'
            }}>
              <h3 className="font-bold" style={{ color: '#ff00ff' }}>President</h3>
              <p style={{ color: '#ff00ff' }}>Aanasa Karkare</p>
              <Image src="/aanasa.jpg" alt="aanasa!" width={200} height={250} className='rounded-[25%]' />
              <p className="text-sm" style={{ color: '#ff00ff' }}>Computer Engineering and Applied Math, Senior</p>
            </div>
            <div className="space-y-2 flex-1 rounded-lg transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(0,255,255,0.1), transparent)',
              border: '1px solid rgba(0,255,255,0.3)'
            }}>
              <h3 className="font-bold" style={{ color: '#00ffff' }}>Vice President</h3>
              <p style={{ color: '#00ffff' }}>Dakota Levermann</p>
              <Image src="/dakota.jpg" alt="dakota!" width={200} height={133} className='rounded-[25%]' />
              <p className="text-sm" style={{ color: '#00ffff' }}>Computer Science, Senior</p>
            </div>
            <div className="space-y-2 flex-1 rounded-lg transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(255,255,0,0.1), transparent)',
              border: '1px solid rgba(255,255,0,0.3)'
            }}>
              <h3 className="font-bold" style={{ color: '#ffff00' }}>Secretary</h3>
              <p style={{ color: '#ffff00' }}>Kalyani Thayil</p>
              <Image src="/kalyani.png" alt={"kalyani!"} width={200} height={266} className='rounded-[25%]' />
              <p className="text-sm" style={{ color: '#ffff00' }}>Computer Science, Senior</p>
            </div>
            <div className="space-y-2 flex-1 rounded-lg transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(0,255,0,0.1), transparent)',
              border: '1px solid rgba(0,255,0,0.3)'
            }}>
              <h3 className="font-bold" style={{ color: '#00ff00' }}>Treasurer</h3>
              <p style={{ color: '#00ff00' }}>Felix Gerzon</p>
              <Image src="/felix.jpg" alt={"felix!"} width={200} height={266} className='rounded-[25%]' />
              <p className="text-sm" style={{ color: '#00ff00' }}>Computer Science, Sophomore</p>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>
    </div>
  )
}