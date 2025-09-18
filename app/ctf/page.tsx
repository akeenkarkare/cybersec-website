'use client'

import { useState } from 'react'
import GlitchText from '@/components/GlitchText'

export default function CTF() {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null)

  const challenges = [
    { id: 1, name: 'Web Exploitation', difficulty: 'Easy', points: 100, solved: true },
    { id: 2, name: 'Cryptography', difficulty: 'Medium', points: 200, solved: true },
    { id: 3, name: 'Binary Exploitation', difficulty: 'Hard', points: 300, solved: false },
    { id: 4, name: 'Forensics', difficulty: 'Easy', points: 100, solved: true },
    { id: 5, name: 'Reverse Engineering', difficulty: 'Hard', points: 400, solved: false },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-terminal-green'
      case 'Medium': return 'text-terminal-yellow'
      case 'Hard': return 'text-terminal-red'
      default: return 'text-terminal-green'
    }
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-terminal-cyan mb-8">
        <GlitchText text="[CAPTURE_THE_FLAG]" />
      </h1>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">TEAM STATISTICS</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-cyan">69</div>
            <div className="text-sm text-terminal-green">schools destroyed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-yellow">420</div>
            <div className="text-sm text-terminal-green">flags captured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green">∞</div>
            <div className="text-sm text-terminal-green">energy drinks consumed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-purple">25</div>
            <div className="text-sm text-terminal-green">sleep-deprived hackers</div>
          </div>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">PRACTICE CHALLENGES</h2>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`border border-terminal-green/30 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-black/40 ${
                activeChallenge === challenge.id ? 'bg-black/60 border-terminal-cyan' : ''
              }`}
              onClick={() => setActiveChallenge(activeChallenge === challenge.id ? null : challenge.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className={challenge.solved ? 'text-terminal-green' : 'text-terminal-red/50'}>
                    {challenge.solved ? '✓' : '○'}
                  </span>
                  <span className="text-terminal-green font-bold">{challenge.name}</span>
                  <span className={`text-sm ${getDifficultyColor(challenge.difficulty)}`}>
                    [{challenge.difficulty}]
                  </span>
                </div>
                <span className="text-terminal-cyan">{challenge.points} pts</span>
              </div>
              
              {activeChallenge === challenge.id && (
                <div className="mt-4 pt-4 border-t border-terminal-green/30">
                  <p className="text-terminal-green/80 mb-3">
                    Challenge description would go here. This is where participants would see the problem statement and any hints.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter flag: SBU{...}"
                    className="w-full bg-black/60 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green focus:outline-none focus:border-terminal-cyan"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">UPCOMING COMPETITIONS</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-terminal-cyan pl-4">
            <h3 className="text-terminal-green font-bold">CSAW CTF 2024</h3>
            <p className="text-terminal-green/80 text-sm">sept 6-8 (no sleep weekend)</p>
            <p className="text-terminal-green/60 text-sm">time to make NYU cry again</p>
          </div>
          <div className="border-l-4 border-terminal-yellow pl-4">
            <h3 className="text-terminal-green font-bold">PicoCTF 2024</h3>
            <p className="text-terminal-green/80 text-sm">march 12-26</p>
            <p className="text-terminal-green/60 text-sm">baby's first CTF (but we still tryhard)</p>
          </div>
          <div className="border-l-4 border-terminal-purple pl-4">
            <h3 className="text-terminal-green font-bold">DEF CON CTF Quals</h3>
            <p className="text-terminal-green/80 text-sm">may 2024</p>
            <p className="text-terminal-green/60 text-sm">the final boss of CTFs (we're not ready but yolo)</p>
          </div>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">LEADERBOARD</h2>
        <div className="font-mono text-sm">
          <div className="grid grid-cols-4 gap-2 mb-2 text-terminal-cyan font-bold">
            <div>RANK</div>
            <div>HANDLE</div>
            <div>POINTS</div>
            <div>CHALLENGES</div>
          </div>
          <div className="space-y-1">
            <div className="grid grid-cols-4 gap-2 text-terminal-green">
              <div>1</div>
              <div>pwn_master</div>
              <div>2450</div>
              <div>28/30</div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-terminal-green">
              <div>2</div>
              <div>crypto_wolf</div>
              <div>2100</div>
              <div>24/30</div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-terminal-green">
              <div>3</div>
              <div>web_ninja</div>
              <div>1850</div>
              <div>22/30</div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-terminal-green/80">
              <div>4</div>
              <div>binary_ace</div>
              <div>1600</div>
              <div>18/30</div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-terminal-green/80">
              <div>5</div>
              <div>forensic_fox</div>
              <div>1400</div>
              <div>15/30</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/60 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 md:p-10">
        <h2 className="text-2xl font-bold text-terminal-yellow mb-4">JOIN OUR CTF TEAM</h2>
        <div className="space-y-4 text-terminal-green">
          <p>
            doesn't matter if you're a script kiddie or an actual wizard, we need bodies for the grind.
            team name: <span className="text-terminal-cyan font-bold">SBU_Seawolves</span> (fear us).
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-terminal-green/30 rounded p-4 md:p-5">
              <h3 className="text-terminal-cyan font-bold mb-2">practice (suffering together)</h3>
              <p className="text-sm">fridays 6PM on discord (bring caffeine)</p>
            </div>
            <div className="border border-terminal-green/30 rounded p-4 md:p-5">
              <h3 className="text-terminal-cyan font-bold mb-2">team chat</h3>
              <p className="text-sm">discord #ctf-team (where dreams go to die)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}