'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'

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

      <section className="bg-black/70 backdrop-blur-sm rounded-lg relative overflow-hidden" style={{ 
        padding: '2.5rem',
        border: '2px solid',
        borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1',
        boxShadow: '0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3), 0 0 90px rgba(255, 255, 0, 0.2)'
      }}>
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20" style={{
          background: 'radial-gradient(circle, #ffff00, transparent)',
          filter: 'blur(40px)'
        }}></div>
        
        <h2 className="text-2xl font-bold mb-6" style={{
          background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>WEEKLY SCHEDULE</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded-lg relative overflow-hidden" style={{
            border: '2px solid',
            borderImage: 'linear-gradient(135deg, #ff00ff, #00ffff) 1',
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)'
          }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#ffff00' }}>
              General Body Meetings (GBMs)
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
          
          <div className="p-4 rounded-lg relative overflow-hidden" style={{
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
              className="cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg p-4 relative overflow-hidden"
              style={{
                background: selectedWeek === gbm.week 
                  ? 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))'
                  : 'rgba(0,0,0,0.5)',
                border: '2px solid',
                borderColor: selectedWeek === gbm.week ? '#ff00ff' : 'rgba(0,255,255,0.3)'
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
      </section>

      <section className="bg-black/70 backdrop-blur-sm rounded-lg" style={{ 
        padding: '2.5rem',
        border: '2px solid',
        borderImage: 'linear-gradient(90deg, #ff0066, #00ffff, #ffff00) 1',
        boxShadow: '0 0 30px rgba(255, 0, 102, 0.5), 0 0 60px rgba(0, 255, 255, 0.3), 0 0 90px rgba(255, 255, 0, 0.2)'
      }}>
        <h2 className="text-2xl font-bold mb-6" style={{
          background: 'linear-gradient(90deg, #ffff00, #ff6600)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>SPECIAL EVENTS</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 pl-4" style={{ borderColor: '#ff00ff' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#00ffff' }}>
              🏆 CSAW CTF Qualifiers
            </h3>
            <p style={{ color: '#ffff00' }}>September 2025</p>
            <p className="text-sm mt-1" style={{ color: '#00ff00' }}>
              time to make other universities cry again. bring your A-game and red bull
            </p>
          </div>
          
          <div className="border-l-4 pl-4" style={{ borderColor: '#00ffff' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#ff00ff' }}>
              🔥 24-Hour Hackathon
            </h3>
            <p style={{ color: '#ff6600' }}>October 2025</p>
            <p className="text-sm mt-1" style={{ color: '#ffff00' }}>
              build something cool, break something cooler. pizza and energy drinks provided
            </p>
          </div>
          
          <div className="border-l-4 pl-4" style={{ borderColor: '#ffff00' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#00ff00' }}>
              🛡️ Industry Speaker Series
            </h3>
            <p style={{ color: '#00ffff' }}>Throughout semester</p>
            <p className="text-sm mt-1" style={{ color: '#ff00ff' }}>
              hackers from companies we can't name doing things we can't talk about
            </p>
          </div>
          
          <div className="border-l-4 pl-4" style={{ borderColor: '#00ff00' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#ffff00' }}>
              🎮 Capture The Flag Practice
            </h3>
            <p style={{ color: '#ff00ff' }}>Every Friday @ Hacker Hours</p>
            <p className="text-sm mt-1" style={{ color: '#00ffff' }}>
              get good or get pwned. we practice on real challenges from past CTFs
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black/70 backdrop-blur-sm rounded-lg text-center" style={{ 
        padding: '2.5rem',
        border: '2px solid',
        borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1',
        animation: 'borderRotate 4s linear infinite',
        boxShadow: '0 0 40px rgba(255, 0, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(255, 255, 0, 0.2)'
      }}>
        <h2 className="text-2xl font-bold mb-4" style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff, #ffff00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>WANT TO PRESENT?</h2>
        <p className="mb-4" style={{ color: '#00ffff' }}>
          got mad skills? found a cool vulnerability? built something sick?
        </p>
        <p style={{ color: '#ffff00' }}>
          slide into our DMs on Discord and show us what you got 🚀
        </p>
      </section>
    </div>
  )
}