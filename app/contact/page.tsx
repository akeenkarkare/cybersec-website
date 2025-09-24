'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

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
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center relative">
        <span className="absolute inset-0 blur-3xl" style={{
          background: 'linear-gradient(90deg, #00ffff, #ffff00)',
          opacity: 0.4
        }}></span>
        <span className="relative">
          <GlitchText text="[CONTACT_US]" />
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <ScrollReveal delay={100}>
            <GlowCard glowColor="0, 255, 0">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>GET IN TOUCH</h2>
              <div className="space-y-3" style={{ color: '#00ff00' }}>
                <div className="flex items-start space-x-3">
                  <span style={{ color: '#00ffff' }}>📧</span>
                  <div>
                    <div className="font-bold">email (preferred form of official contact)</div>
                    <a href="mailto:sbucybersecclub@gmail.com" className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
						sbucybersecclub@gmail.com
					</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span style={{ color: '#00ffff' }}>💬</span>
                  <div>
                    <div className="font-bold">discord (preferred form of unofficial contact)</div>
                    <a className="text-sm" href="discord.gg/8W9NKMe" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>discord.gg/8W9NKMe</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span style={{ color: '#00ffff' }}>📍</span>
                  <div>
                    <div className="font-bold">our lair</div>
                    <div className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                      Melville Library N3063<br />
                      knock first, we might be hacking the pentagon
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <GlowCard glowColor="255, 0, 255">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>SOCIAL MEDIA</h2>
              <div className="space-y-2" style={{ color: '#00ff00' }}>
                <div className="flex items-center space-x-2 transition-all hover:translate-x-2" style={{ color: '#00ff00' }}>
                  📸
                  <a href="https://www.instagram.com/sbucybersec" style={{color: '#00ff00'}}>
                    <span className="hover:text-terminal-cyan">Instagram: @sbucybersec</span>
                  </a>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </section>

        <ScrollReveal delay={200}>
          <GlowCard glowColor="0, 255, 255">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>SEND MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm" style={{ color: '#00ff00' }}>NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    color: '#00ff00',
                    outline: 'none'
                  }}
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm" style={{ color: '#00ff00' }}>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    color: '#00ff00',
                    outline: 'none'
                  }}
                  placeholder="your.email@stonybrook.edu"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm" style={{ color: '#00ff00' }}>SUBJECT</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    color: '#00ff00',
                    outline: 'none'
                  }}
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
                <label className="block mb-2 text-sm" style={{ color: '#00ff00' }}>MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    color: '#00ff00',
                    outline: 'none',
                    resize: 'none'
                  }}
                  placeholder="Type your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full font-bold transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(0, 255, 0, 0.2)',
                  border: '1px solid #00ff00',
                  color: '#00ff00',
                  padding: '8px 16px',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'
                  e.currentTarget.style.borderColor = '#00ffff'
                  e.currentTarget.style.color = '#00ffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
                  e.currentTarget.style.borderColor = '#00ff00'
                  e.currentTarget.style.color = '#00ff00'
                }}
              >
                [SEND_MESSAGE]
              </button>
            </form>
          </GlowCard>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={250}>
        <GlowCard glowColor="255, 255, 0">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffff00' }}>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            <div className="border-l-2 transition-all hover:translate-x-2" style={{ borderColor: '#00ff00', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="font-bold mb-1" style={{ color: '#00ffff' }}>do i need to be a l33t hacker to join?</h3>
              <p className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                not at all! we all started as noobs who thought "hacking" meant typing really fast. <br />
                you'll fit right in.
              </p>
            </div>
            <div className="border-l-2 transition-all hover:translate-x-2" style={{ borderColor: '#00ff00', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="font-bold mb-1" style={{ color: '#00ffff' }}>how do i join this chaos?</h3>
              <p className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                literally just show up. <br />
                join the discord, come to a meeting, and bring snacks if you want us to love you forever.
              </p>
            </div>
            <div className="border-l-2 transition-all hover:translate-x-2" style={{ borderColor: '#00ff00', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="font-bold mb-1" style={{ color: '#00ffff' }}>what gear do i need?</h3>
              <p className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                a laptop that can run chrome without catching fire. that's it. <br />
                we'll help you install kali and pretend you're mr. robot.
              </p>
            </div>
            <div className="border-l-2 transition-all hover:translate-x-2" style={{ borderColor: '#00ff00', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h3 className="font-bold mb-1" style={{ color: '#00ffff' }}>does this count for credit?</h3>
              <p className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
                nah, but it's a great learning and networkinng opportunity!
              </p>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>
    </div>
  )
}