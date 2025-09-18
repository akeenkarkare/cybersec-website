import GlitchText from '@/components/GlitchText'

export default function Resources() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-terminal-cyan mb-8">
        <GlitchText text="[RESOURCES]" />
      </h1>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">LEARNING PATHS</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-terminal-green pl-4">
            <h3 className="text-xl font-bold text-terminal-cyan mb-2">🌱 BEGINNER PATH</h3>
            <ul className="space-y-2 text-terminal-green/90">
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">linux basics</a> - learn what sudo rm -rf / does (don't)</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">networking</a> - packets go brrrr</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">python</a> - print("i'm in")</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">overthewire</a> - where everyone starts</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">picoCTF</a> - CTF with training wheels</li>
            </ul>
          </div>

          <div className="border-l-4 border-terminal-yellow pl-4">
            <h3 className="text-xl font-bold text-terminal-cyan mb-2">⚡ INTERMEDIATE PATH</h3>
            <ul className="space-y-2 text-terminal-green/90">
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">web hacking</a> - SQL injection go brrr</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">pwn</a> - segfault is your new bestie</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">crypto</a> - it's just math bro (pain)</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">hackthebox</a> - prepare to cry</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">tryhackme</a> - HTB's friendly cousin</li>
            </ul>
          </div>

          <div className="border-l-4 border-terminal-red pl-4">
            <h3 className="text-xl font-bold text-terminal-cyan mb-2">🔥 ADVANCED PATH</h3>
            <ul className="space-y-2 text-terminal-green/90">
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">kernel pwn</a> - when userland is too easy</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">mobile</a> - hack the thing in your pocket</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">cloud</a> - someone else's computer</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">malware</a> - spicy software analysis</li>
              <li>• <a href="#" className="hover:text-terminal-cyan transition-colors">bug bounties</a> - hack legally, get paid</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">PRACTICE PLATFORMS</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-terminal-green/30 rounded p-6 hover:bg-black/40 transition-colors">
            <h3 className="text-terminal-cyan font-bold mb-2">CTF Platforms</h3>
            <ul className="text-terminal-green/80 text-sm space-y-1">
              <li>• CTFtime.org - Global CTF calendar</li>
              <li>• PicoCTF - Beginner challenges</li>
              <li>• RingZer0 - Various challenge types</li>
              <li>• Root-Me - Progressive challenges</li>
            </ul>
          </div>
          <div className="border border-terminal-green/30 rounded p-6 hover:bg-black/40 transition-colors">
            <h3 className="text-terminal-cyan font-bold mb-2">Vulnerable Apps</h3>
            <ul className="text-terminal-green/80 text-sm space-y-1">
              <li>• DVWA - Damn Vulnerable Web App</li>
              <li>• WebGoat - OWASP training</li>
              <li>• Metasploitable - Vulnerable Linux</li>
              <li>• VulnHub - Boot2root VMs</li>
            </ul>
          </div>
          <div className="border border-terminal-green/30 rounded p-6 hover:bg-black/40 transition-colors">
            <h3 className="text-terminal-cyan font-bold mb-2">Online Labs</h3>
            <ul className="text-terminal-green/80 text-sm space-y-1">
              <li>• HackTheBox Academy</li>
              <li>• PentesterLab</li>
              <li>• Cybrary</li>
              <li>• SANS Cyber Aces</li>
            </ul>
          </div>
          <div className="border border-terminal-green/30 rounded p-6 hover:bg-black/40 transition-colors">
            <h3 className="text-terminal-cyan font-bold mb-2">Coding Challenges</h3>
            <ul className="text-terminal-green/80 text-sm space-y-1">
              <li>• Cryptopals - Crypto challenges</li>
              <li>• Exploit Education - Binary exploitation</li>
              <li>• W3Challs - Various security challenges</li>
              <li>• SmashTheStack - Wargaming</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">ESSENTIAL TOOLS</h2>
        <div className="font-mono text-sm">
          <pre className="text-terminal-green overflow-x-auto">
{`┌─────────────────┬──────────────────────────────────┐
│ Tool            │ Description                      │
├─────────────────┼──────────────────────────────────┤
│ Nmap            │ Network discovery and scanning   │
│ Burp Suite      │ Web application testing          │
│ Metasploit      │ Exploitation framework           │
│ Wireshark       │ Network protocol analyzer        │
│ John the Ripper │ Password cracking                │
│ Hashcat         │ Advanced password recovery       │
│ Ghidra          │ Reverse engineering              │
│ GDB/PEDA        │ Debugging and exploitation       │
│ SQLMap          │ SQL injection automation         │
│ Gobuster        │ Directory/file enumeration       │
└─────────────────┴──────────────────────────────────┘`}
          </pre>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">RECOMMENDED BOOKS</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-terminal-cyan font-bold">Technical Books</h3>
            <ul className="text-terminal-green/80 text-sm space-y-1">
              <li>📚 The Web Application Hacker's Handbook</li>
              <li>📚 Hacking: The Art of Exploitation</li>
              <li>📚 The Shellcoder's Handbook</li>
              <li>📚 Practical Malware Analysis</li>
              <li>📚 Applied Cryptography</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-terminal-cyan font-bold">Theory & Concepts</h3>
            <ul className="text-terminal-green/80 text-sm space-y-1">
              <li>📚 Computer Security: Art and Science</li>
              <li>📚 Security Engineering by Ross Anderson</li>
              <li>📚 The Tangled Web</li>
              <li>📚 Silence on the Wire</li>
              <li>📚 Cult of the Dead Cow</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">CERTIFICATIONS</h2>
        <div className="space-y-3 text-terminal-green/90">
          <div className="flex justify-between items-center border-b border-terminal-green/20 pb-2">
            <span className="font-bold">CompTIA Security+</span>
            <span className="text-terminal-cyan text-sm">Entry Level</span>
          </div>
          <div className="flex justify-between items-center border-b border-terminal-green/20 pb-2">
            <span className="font-bold">CompTIA PenTest+</span>
            <span className="text-terminal-cyan text-sm">Intermediate</span>
          </div>
          <div className="flex justify-between items-center border-b border-terminal-green/20 pb-2">
            <span className="font-bold">CEH (Certified Ethical Hacker)</span>
            <span className="text-terminal-yellow text-sm">Intermediate</span>
          </div>
          <div className="flex justify-between items-center border-b border-terminal-green/20 pb-2">
            <span className="font-bold">OSCP (Offensive Security)</span>
            <span className="text-terminal-red text-sm">Advanced</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">CISSP</span>
            <span className="text-terminal-red text-sm">Professional</span>
          </div>
        </div>
      </section>
    </div>
  )
}