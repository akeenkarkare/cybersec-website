'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'
import GlowCard from '@/components/GlowCard'
import ScrollReveal from '@/components/ScrollReveal'

const gbmTopics = [
  { topic: "How the Internet Works",
    subtopics: ["Client-server architecture", "What happens when you type google.com", "HTTP/HTTPS protocols", "DNS routing", "Firewalls"] },
  { topic: "Routers and Switches",
    subtopics: ["OSI Model", "Network protocols", "MAC addresses, IP addresses, and spoofing them", "ARP, Telnet, SSH, FTP, SFTP, HTTP"],
    files: ["cybersec gbm #2.pdf"] },
  { topic: "Passwords and Authentication",
    subtopics: ["Hashing, Hash-cracking with Collisions", "Salts and Peppers", "Hashing Algorithms: SHA-1,2,3,4,256,512, MD5, Argon2Id, Bcrypt, Scrypt", "How to secure your password!"],
    files: ["cybersec gbm #3.pdf"] },
  { topic: "Cyber-investigation with Guest Speaker Yalkin Demirkaya!"},
  { topic: "AI 💔 Cybersecurity", subtopics: ["Neural Networks", "Machine Learning", "LLM's", "Prompt Injection"]}
]

export const meetingData = {
  gbm: {
    day: "Tuesday",
    time: "12pm - 1pm",
    room: "SAC 302"
  },
  hacker_hours: {
    day: "Friday",
    time: "2pm - 4pm",
    room: "TBD"
  }
}

export default function Events() {
  const [selectedWeek, setSelectedWeek] = useState(0)

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
                <p style={{ color: '#00ffff' }}>📅 Every {meetingData.gbm.day}</p>
                <p style={{ color: '#ff00ff' }}>⏰ {meetingData.gbm.time}</p>
                <p style={{ color: '#00ff00' }}>📍 Location: Check Discord, but usually {meetingData.gbm.room}!</p>
                <p className="text-sm mt-3" style={{ color: '#ff6600' }}>
                  broad coverage of security issues, methods, and tools. <br></br>
                  breaking things (legally), and the right protections for prevalent threats
                </p>
              </div>
            </div>
            
            <div className="rounded-lg relative overflow-hidden transition-all hover:brightness-110" style={{
              padding: '1.5rem',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #ffff00, #00ff00) 1',
              boxShadow: '0 0 20px rgba(255, 255, 0, 0.4), 0 0 40px rgba(0, 255, 0, 0.2)'
            }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#ffff00' }}>
                💻 Hacker Hours
              </h3>
              <div className="space-y-2">
                <p style={{ color: '#00ffff' }}>📅 Every other {meetingData.hacker_hours.day}</p>
                <p style={{ color: '#ff00ff' }}>⏰ {meetingData.hacker_hours.time}</p>
                <p style={{ color: '#00ff00' }}>📍 {meetingData.hacker_hours.room}</p>
                <p className="text-sm mt-3" style={{ color: '#ff6600' }}>
                  deep dives on the current topic. <br></br>
                  come to work on projects, CTFs, or just vibe with fellow hackers
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ff00ff' }}>
            FALL 2025 GBM TOPICS
          </h2>
          <p className="mb-6" style={{ color: '#00ffff' }}>
            click on any week to see what we're cooking up 👀
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gbmTopics.map((gbm, week) => (
              <div
                key={(week + 1)}
                onClick={() => setSelectedWeek(selectedWeek === (week + 1) ? 0 : (week + 1))}
                className="cursor-pointer transition-all duration-300 rounded-lg relative overflow-hidden"
                style={{
                  padding: '1.5rem',
                  background: selectedWeek === (week + 1) 
                    ? 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))'
                    : 'rgba(0,0,0,0.5)',
                  border: '2px solid',
                  borderColor: selectedWeek === (week + 1) ? '#ff00ff' : 'rgba(0,255,255,0.3)',
                  boxShadow: selectedWeek === (week + 1)
                    ? '0 0 20px rgba(255, 0, 255, 0.4)' 
                    : '0 0 10px rgba(0, 0, 0, 0.5)',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedWeek !== (week + 1)) {
                    e.currentTarget.style.borderColor = 'rgba(255, 0, 255, 0.6)'
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedWeek !== (week + 1)) {
                    e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
                  }
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: '#ffff00' }}>Week {(week + 1)}</span>
                  {gbm.subtopics ? <span style={{ color: '#00ffff' }}>{selectedWeek === (week + 1) ? '▼' : '▶'}</span> : <></>}
                </div>
                <h4 className="font-bold" style={{ 
                  color: selectedWeek === (week + 1) ? '#ff00ff' : '#00ffff' 
                }}>
                  {gbm.topic}
                </h4>
                
                {selectedWeek === (week + 1) && (
                  <div className="mt-3 space-y-1">
                    {gbm.subtopics?.map((subtopic: String, idx) => (
                      <div key={idx} className="text-sm flex items-start">
                        <span style={{ color: '#00ff00' }}>→</span>
                        <span className="ml-2" style={{ color: '#00ffff' }}>{subtopic}</span>
                      </div>
                    ))}
                    <div>
                      {gbm.files?.map((file, index) =>
                          <a key={index} href={`/${file}`} style={{ color: '#00ffff' }}>{file} </a>
                      )}
                    </div>
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