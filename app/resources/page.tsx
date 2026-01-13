import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

export default function Resources() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center relative">
        <span className="absolute inset-0 blur-3xl" style={{
          background: 'linear-gradient(90deg, #00ff00, #00ffff)',
          opacity: 0.4
        }}></span>
        <span className="relative">
          <GlitchText text="[RESOURCES]" />
        </span>
      </h1>

      <ScrollReveal delay={50}>
        <GlowCard glowColor='255, 0, 255'>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ff00ff' }}>
            ONGOING OPPORTUNITIES
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded transition-all hover:brightness-110 hover:translate-y-[-2px]" style={{
              padding: '1.5rem',
              borderColor: 'rgba(0, 255, 0, 0.3)',
              background: 'rgba(0, 0, 0, 0.4)'
            }}>
              <h3 className="font-bold mb-2" style={{ color: '#00ffff' }}>
                CompTIA Certification Training
              </h3>
              <ul className="text-sm space-y-1" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                <li>Our previous president, Anna, is offering an official CompTIA certification course for the Network+ and Security+ exams.</li>
                <li>It is virtual and self-guided, with 'office hours' meetings on most Fridays at 6pm.</li>
                <li>For more details, contact Anna at qandanna[at]riseup[dot]net or join the discord and give yourself the certification role.</li>
              </ul>
              <h3 className="font-bold mb-2" style={{ color: '#00ffff' }}>
                Shadowing the SBU DoIT Cybersecurity Team
              </h3>
              <ul className="text-sm space-y-1" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                <li>The Stony Brook University Operations Technology Security Team has graciously allowed some students to have a tour of their workplace.</li>
                <li>You may get to meet the core team members and see everything from the responsibilities of the other branches to the tools they use!</li>
                <li>For more details, contact Aanasa via discord.</li>
              </ul>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <GlowCard glowColor="0, 255, 255">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>PRACTICE PLATFORMS</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded transition-all hover:brightness-110 hover:translate-y-[-2px]" style={{
              padding: '1.5rem',
              borderColor: 'rgba(0, 255, 0, 0.3)',
              background: 'rgba(0, 0, 0, 0.4)'
            }}>
              <h3 className="font-bold mb-2" style={{ color: '#00ffff' }}>Learning Platforms (in order from least to most advanced)</h3>
              <ul className="text-sm space-y-1" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                <li>TryHackMe - hands-on walkthroughs of how to exploit vulnerabilities and introductions to relevant tools</li>
                <li>overthewire - security puzzles that involve using the command line</li>
                <li>PicoCTF - Beginner Capture The Flag challenges</li>
                <li>HackTheBox - like TryHackMe, but harder :)</li>
                <li>DWVA (Damn Vulnerable Web App) - an intentionally vulnerable web app that you can run locally and try to break</li>
                <li>NoStarchPress&gt;Security - high-quality security textbooks
                  <ul> Anna's Picks:
                    <li>Cracking Codes with Python - a great intro to Python and basic cryptography</li>
                    <li>Silence on the Wire - intermediate network security</li>
                  </ul>
                </li>
                <li>CryptoPals - programming-focused cryptography challenges</li>
                <li>challenges.re - reverse engineering challenges that mostly involve understanding assembly code</li>
              </ul>
            </div>
          </div>
          <h3>list compiled by anna</h3>
        </GlowCard>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <GlowCard glowColor="255, 255, 0">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>USEFUL TOOLS</h2>
		  <h4>**<b>ONLY</b> use on systems if you have been given <b>CONSENT</b> by the system admin**</h4>
          <div className="font-mono text-sm overflow-x-auto">
            <pre style={{ color: '#00ff00' }}>
{`┌─────────────────┬──────────────────────────────────┐
│ Tool            │ Description                      │
├─────────────────┼──────────────────────────────────┤
│ Nmap            │ Network discovery and scanning   │
│ Burp Suite      │ Web application testing          │
│ Wireshark       │ Network protocol analyzer        │
│ Ghidra          │ Reverse engineering              │
│ GDB/PEDA        │ Debugging                        │
│ Gobuster        │ Directory/file enumeration       │
└─────────────────┴──────────────────────────────────┘`}
            </pre>
          </div>
        </GlowCard>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <GlowCard glowColor="0, 255, 0">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>CERTIFICATIONS</h2>
          <div className="space-y-3" style={{ color: 'rgba(0, 255, 0, 0.9)' }}>
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(0, 255, 0, 0.2)' }}>
              <span className="font-bold">CompTIA Security+</span>
              <span className="text-sm" style={{ color: '#33e41b' }}>Entry Level</span>
            </div>
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(0, 255, 0, 0.2)' }}>
              <span className="font-bold">CompTIA PenTest+</span>
              <span className="text-sm" style={{ color: '#d3e41b' }}>Intermediate</span>
            </div>
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(0, 255, 0, 0.2)' }}>
              <span className="font-bold">CEH (Certified Ethical Hacker)</span>
              <span className="text-sm" style={{ color: '#d3e41b' }}>Intermediate</span>
            </div>
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(0, 255, 0, 0.2)' }}>
              <span className="font-bold">OSCP (Offensive Security)</span>
              <span className="text-sm" style={{ color: '#e48a1b' }}>Advanced</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">CISSP</span>
              <span className="text-sm" style={{ color: '#e4361b' }}>Professional</span>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>

	  <ScrollReveal delay={250}>
        <GlowCard glowColor="0, 255, 0">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>LEARNING PATHS</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 transition-all hover:translate-x-2" style={{ borderColor: '#00ff00', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#00ffff' }}>🌱 BEGINNER PATH</h3>
              <ul className="space-y-2" style={{ color: 'rgba(0, 255, 0, 0.9)' }}>
                <li>linux basics - learn the command line tools, command line file syntax, file structure, and confront the dreaded vim</li>
                <li>networking - packets go brrrr</li>
                <li>python - print("i'm in")</li>
                <li>overthewire - where everyone starts</li>
                <li>picoCTF - Capture The Flag challenges with training wheels</li>
              </ul>
            </div>

            <div className="border-l-4 transition-all hover:translate-x-2" style={{ borderColor: '#ffff00', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#00ffff' }}>⚡ INTERMEDIATE PATH</h3>
              <ul className="space-y-2" style={{ color: 'rgba(0, 255, 0, 0.9)' }}>
                <li>web security - SQL injection, Cross Site Scripting, and Phishing are only the tip of the iceberg</li>
                <li>cryptography - some really, really, really hard (but interesting!) math</li>
                <li>hackthebox - for if you are ready for the next level</li>
                <li>tryhackme - Hack The Box's friendly cousin</li>
              </ul>
            </div>

            <div className="border-l-4 transition-all hover:translate-x-2" style={{ borderColor: '#ff0000', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#00ffff' }}>🔥 ADVANCED PATH</h3>
              <ul className="space-y-2" style={{ color: 'rgba(0, 255, 0, 0.9)' }}>
                <li>kernel pwn - when userland is too easy</li>
                <li>mobile security - hack the thing in your pocket</li>
                <li>cloud infiltration and exfiltration - learn about vulnerabilities in cloud systems</li>
                <li>malware - spicy software analysis</li>
                <li>bug bounties - hack legally, get paid</li>
              </ul>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>
    </div>
  )
}