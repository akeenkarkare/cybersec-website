import GlitchText from '@/components/GlitchText'

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

      <section className="bg-black/70 backdrop-blur-sm rounded-lg space-y-4 relative overflow-hidden" style={{ 
        padding: '2.5rem',
        border: '2px solid',
        borderImage: 'linear-gradient(135deg, #ff00ff, #00ffff) 1',
        boxShadow: '0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)'
      }}>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10" style={{
          background: 'radial-gradient(circle, #ff00ff, transparent)',
          filter: 'blur(60px)'
        }}></div>
        <h2 className="text-2xl font-bold" style={{
          background: 'linear-gradient(90deg, #ffff00, #ff6600)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>WHO TF ARE WE?</h2>
        <p className="leading-relaxed" style={{ color: '#00ffff' }}>
          we're a new group of students passionate about cybersecurity. we believe that understanding
          how systems can be broken is the first step to making them secure. founded in 2024 to bring
          together students interested in ethical hacking and digital defense.
        </p>
        <p className="leading-relaxed" style={{ color: '#00ff00' }}>
          from complete beginners just learning the command line to those already familiar with
          security concepts, everyone is welcome. we're building a community where we can learn
          from each other and grow together in the field of cybersecurity.
        </p>
      </section>

      <section className="bg-black/70 backdrop-blur-sm rounded-lg relative overflow-hidden" style={{ 
        padding: '2.5rem',
        border: '2px solid',
        borderImage: 'linear-gradient(45deg, #ffff00, #00ff00) 1',
        boxShadow: '0 0 30px rgba(255, 255, 0, 0.5), 0 0 60px rgba(0, 255, 0, 0.3)'
      }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#ff00ff' }}>OUR VALUES</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#ff00ff' }}>
            <h3 className="font-bold" style={{ color: '#00ffff' }}>ethical hacking only</h3>
            <p className="text-sm mt-1" style={{ color: '#ffff00' }}>
              we hack to learn and protect, not to harm
            </p>
          </div>
          <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#00ffff' }}>
            <h3 className="font-bold" style={{ color: '#ff00ff' }}>inclusive community</h3>
            <p className="text-sm mt-1" style={{ color: '#00ff00' }}>
              all skill levels welcome, we all start somewhere
            </p>
          </div>
          <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#ffff00' }}>
            <h3 className="font-bold" style={{ color: '#ff6600' }}>learn by doing</h3>
            <p className="text-sm mt-1" style={{ color: '#00ffff' }}>
              hands-on practice beats theory every time
            </p>
          </div>
          <div className="border-l-4 pl-4 transition-all hover:translate-x-2" style={{ borderColor: '#00ff00' }}>
            <h3 className="font-bold" style={{ color: '#ffff00' }}>career focused</h3>
            <p className="text-sm mt-1" style={{ color: '#ff00ff' }}>
              building skills for real-world security careers
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black/70 backdrop-blur-sm rounded-lg relative" style={{ 
        padding: '2.5rem',
        border: '2px solid',
        borderImage: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff) 1',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)'
      }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#00ffff' }}>EXECUTIVE BOARD</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2 p-4 rounded-lg transition-all hover:brightness-125" style={{
            background: 'linear-gradient(135deg, rgba(255,0,255,0.1), transparent)',
            border: '1px solid rgba(255,0,255,0.3)'
          }}>
            <h3 className="font-bold" style={{ color: '#ff00ff' }}>President</h3>
            <p style={{ color: '#00ffff' }}>Alex Chen</p>
            <p className="text-sm" style={{ color: '#ffff00' }}>Computer Science, Senior</p>
          </div>
          <div className="space-y-2 p-4 rounded-lg transition-all hover:brightness-125" style={{
            background: 'linear-gradient(135deg, rgba(0,255,255,0.1), transparent)',
            border: '1px solid rgba(0,255,255,0.3)'
          }}>
            <h3 className="font-bold" style={{ color: '#00ffff' }}>Vice President</h3>
            <p style={{ color: '#ff00ff' }}>Sarah Martinez</p>
            <p className="text-sm" style={{ color: '#00ff00' }}>Information Systems, Junior</p>
          </div>
          <div className="space-y-2 p-4 rounded-lg transition-all hover:brightness-125" style={{
            background: 'linear-gradient(135deg, rgba(255,255,0,0.1), transparent)',
            border: '1px solid rgba(255,255,0,0.3)'
          }}>
            <h3 className="font-bold" style={{ color: '#ffff00' }}>CTF Team Lead</h3>
            <p style={{ color: '#ff6600' }}>Mike Johnson</p>
            <p className="text-sm" style={{ color: '#00ffff' }}>Computer Engineering, Senior</p>
          </div>
          <div className="space-y-2 p-4 rounded-lg transition-all hover:brightness-125" style={{
            background: 'linear-gradient(135deg, rgba(0,255,0,0.1), transparent)',
            border: '1px solid rgba(0,255,0,0.3)'
          }}>
            <h3 className="font-bold" style={{ color: '#00ff00' }}>Workshop Coordinator</h3>
            <p style={{ color: '#ffff00' }}>Emily Zhang</p>
            <p className="text-sm" style={{ color: '#ff00ff' }}>Computer Science, Junior</p>
          </div>
        </div>
      </section>
    </div>
  )
}