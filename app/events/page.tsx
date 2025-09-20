'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

const gbmTopics = [
  { week: 1, topic: "How the Internet Works", subtopics: ["Client-server architecture", "What happens when you type google.com", "HTTP/HTTPS protocols", "DNS routing", "Packet sniffing basics"] },
  { week: 2, topic: "TCP/UDP & Networks", subtopics: ["Web sockets and ports", "WiFi vs wired networks", "Open WiFi security risks", "MAC addresses & spoofing", "Telnet, FTP, SFTP"] },
  { week: 3, topic: "Defense Systems", subtopics: ["Firewalls & antivirus", "Device management & BYOD", "Load balancing", "Wire tapping concerns", "AI in cybersecurity"] },
  { week: 4, topic: "Privacy & Anonymity", subtopics: ["Digital privacy fundamentals", "Data protection", "Anonymous browsing", "Privacy tools"] },
  { week: 5, topic: "Physical Security", subtopics: ["Physical ramifications of cybersec", "Cybersecurity in humanoids", "IoT vulnerabilities"] },
  { week: 6, topic: "Case Studies", subtopics: ["Real-world breaches", "Notable hacks", "Lessons learned"] },
  { week: 7, topic: "Resources & News", subtopics: ["Hacker News", "Krebs on Security", "404 Media", "Bug bounty platforms"] },
  { week: 8, topic: "Dark Web & Crypto", subtopics: ["Ransomware tactics", "Blockchain security", "P2P networks", "Cryptocurrency risks"] },
  { week: 9, topic: "Hands-on Workshops", subtopics: ["XSS attacks", "Pentesting basics", "Cloud security", "SQL injection", "Memory forensics"] },
]

export default function Events() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null)

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center relative">
        <span className="absolute inset-0 blur-3xl" style={{
          background: 'linear-gradient(90deg, #ffff00, #ff00ff)',
          opacity: 0.3
        }}></span>
        <span className="relative">
          <GlitchText text="[EVENTS]" />
        </span>
      </h1>

      <ScrollReveal delay={100}>
        <GlowCard glowColor="255, 0, 255">
          <h2 className="text-2xl font-bold mb-6" style={{
            background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>WEEKLY SCHEDULE</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg relative overflow-hidden transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #ff00ff, #00ffff) 1',
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)'
            }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#ffff00' }}>
                📅 General Body Meetings (GBMs)
              </h3>
              <div className="space-y-2">
                <p style={{ color: '#00ffff' }}>📅 Every Wednesday</p>
                <p style={{ color: '#ff00ff' }}>⏰ 5:00 PM - 6:00 PM</p>
                <p style={{ color: '#00ff00' }}>📍 Location: Check Discord!</p>
                <p className="text-sm mt-3" style={{ color: '#ff6600' }}>
                  deep dives into hacking, security, and breaking things (legally)
                </p>
              </div>
            </div>
            
            <div className="rounded-lg relative overflow-hidden transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #ffff00, #00ff00) 1',
              boxShadow: '0 0 20px rgba(255, 255, 0, 0.4), 0 0 40px rgba(0, 255, 0, 0.2)'
            }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#00ffff' }}>
                💻 Hacker Hours
              </h3>
              <div className="space-y-2">
                <p style={{ color: '#ff00ff' }}>📅 Every Friday</p>
                <p style={{ color: '#ffff00' }}>⏰ 3:00 PM - 5:00 PM</p>
                <p style={{ color: '#00ff00' }}>📍 SAC 309</p>
                <p className="text-sm mt-3" style={{ color: '#00ffff' }}>
                  work on projects, CTFs, or just vibe with fellow hackers
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ff00ff' }}>
            FALL 2025 GBM TOPICS
          </h2>
          <p className="mb-6" style={{ color: '#00ffff' }}>
            click on any week to see what chaos we're cooking up 👀
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gbmTopics.map((gbm) => (
              <div
                key={gbm.week}
                onClick={() => setSelectedWeek(selectedWeek === gbm.week ? null : gbm.week)}
                className="cursor-pointer transition-all duration-300 rounded-lg relative overflow-hidden"
                style={{
                  padding: '1.5rem',
                  background: selectedWeek === gbm.week 
                    ? 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))'
                    : 'rgba(0,0,0,0.5)',
                  border: '2px solid',
                  borderColor: selectedWeek === gbm.week ? '#ff00ff' : 'rgba(0,255,255,0.3)',
                  boxShadow: selectedWeek === gbm.week 
                    ? '0 0 20px rgba(255, 0, 255, 0.4)' 
                    : '0 0 10px rgba(0, 0, 0, 0.5)',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedWeek !== gbm.week) {
                    e.currentTarget.style.borderColor = 'rgba(255, 0, 255, 0.6)'
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedWeek !== gbm.week) {
                    e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
                  }
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: '#ffff00' }}>Week {gbm.week}</span>
                  <span style={{ color: '#00ffff' }}>{selectedWeek === gbm.week ? '▼' : '▶'}</span>
                </div>
                <h4 className="font-bold" style={{ 
                  color: selectedWeek === gbm.week ? '#ff00ff' : '#00ffff' 
                }}>
                  {gbm.topic}
                </h4>
                
                {selectedWeek === gbm.week && (
                  <div className="mt-3 space-y-1">
                    {gbm.subtopics.map((subtopic, idx) => (
                      <div key={idx} className="text-sm flex items-start">
                        <span style={{ color: '#00ff00' }}>→</span>
                        <span className="ml-2" style={{ color: '#00ffff' }}>{subtopic}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlowCard>
      </ScrollReveal>
    </div>
  )
}