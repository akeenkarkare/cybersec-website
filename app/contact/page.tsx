'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-terminal-cyan mb-8">
        <GlitchText text="[CONTACT_US]" />
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-terminal-yellow mb-4">GET IN TOUCH</h2>
            <div className="space-y-3 text-terminal-green">
              <div className="flex items-start space-x-3">
                <span className="text-terminal-cyan">📧</span>
                <div>
                  <div className="font-bold">email (we check it sometimes)</div>
                  <div className="text-sm text-terminal-green/80">cybersec@stonybrook.edu</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-terminal-cyan">💬</span>
                <div>
                  <div className="font-bold">discord (we live here)</div>
                  <div className="text-sm text-terminal-green/80">discord.gg/sbucybersec</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-terminal-cyan">📍</span>
                <div>
                  <div className="font-bold">our lair</div>
                  <div className="text-sm text-terminal-green/80">
                    CS Building Room 2314<br />
                    (the room that always smells like redbull)<br />
                    knock first, we might be hacking the pentagon
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-terminal-cyan">🕐</span>
                <div>
                  <div className="font-bold">when we're around</div>
                  <div className="text-sm text-terminal-green/80">
                    officially: mon-fri 3-5PM<br />
                    actually: whenever we're not in class or asleep
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-terminal-yellow mb-4">SOCIAL MEDIA</h2>
            <div className="space-y-2 text-terminal-green">
              <a href="#" className="flex items-center space-x-2 hover:text-terminal-cyan transition-colors">
                <span>🐦</span>
                <span>Twitter: @SBUCyberSec</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-terminal-cyan transition-colors">
                <span>📸</span>
                <span>Instagram: @sbu_cybersec</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-terminal-cyan transition-colors">
                <span>💼</span>
                <span>LinkedIn: SBU Cybersecurity Club</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-terminal-cyan transition-colors">
                <span>🐙</span>
                <span>GitHub: sbu-cybersec</span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
          <h2 className="text-2xl font-bold text-terminal-yellow mb-4">SEND MESSAGE</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-terminal-green mb-2 text-sm">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:outline-none focus:border-terminal-cyan transition-colors"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-terminal-green mb-2 text-sm">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:outline-none focus:border-terminal-cyan transition-colors"
                placeholder="your.email@stonybrook.edu"
              />
            </div>
            
            <div>
              <label className="block text-terminal-green mb-2 text-sm">SUBJECT</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:outline-none focus:border-terminal-cyan transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="workshop">Workshop Question</option>
                <option value="ctf">CTF Team</option>
                <option value="partnership">Partnership/Sponsorship</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-terminal-green mb-2 text-sm">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-black/60 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:outline-none focus:border-terminal-cyan transition-colors resize-none"
                placeholder="Type your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-terminal-green/20 border border-terminal-green text-terminal-green py-2 px-4 rounded hover:bg-terminal-green/30 hover:border-terminal-cyan hover:text-terminal-cyan transition-all duration-300 font-bold"
            >
              [SEND_MESSAGE]
            </button>
          </form>
        </section>
      </div>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-cyan font-bold mb-1">do i need to be a l33t hacker to join?</h3>
            <p className="text-terminal-green/80 text-sm">
              lmao no. we all started as noobs who thought "hacking" meant typing really fast. you'll fit right in.
            </p>
          </div>
          <div className="border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-cyan font-bold mb-1">how do i join this chaos?</h3>
            <p className="text-terminal-green/80 text-sm">
              literally just show up. join the discord, come to a meeting, bring snacks if you want us to love you forever.
            </p>
          </div>
          <div className="border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-cyan font-bold mb-1">what gear do i need?</h3>
            <p className="text-terminal-green/80 text-sm">
              a laptop that can run chrome without catching fire. that's it. we'll help you install kali and pretend you're mr. robot.
            </p>
          </div>
          <div className="border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-cyan font-bold mb-1">does this count for credit?</h3>
            <p className="text-terminal-green/80 text-sm">
              nah but it counts for clout. also employers love this stuff. "president of cybersec club" hits different on a resume.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}