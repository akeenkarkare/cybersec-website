'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

export default function Contact() {
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
                    <a href="mailto:stonybrookcybersecurityclub@stonybrook.edu" className="text-sm" style={{ color: 'rgba(0, 255, 0, 0.8)' }}>
						stonybrookcybersecurityclub@stonybrook.edu
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