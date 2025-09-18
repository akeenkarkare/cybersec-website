'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Command {
  command: string
  output: string | React.ReactElement
}

const Terminal = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Command[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isRoot, setIsRoot] = useState(false)
  const [puzzleStage, setPuzzleStage] = useState(0)
  const [foundPassword, setFoundPassword] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const commands: Record<string, () => string | React.ReactElement> = {
    help: () => (
      <div className="space-y-1">
        <div className="text-terminal-cyan">Available commands:</div>
        <div className="ml-4 space-y-1">
          <div><span className="text-terminal-yellow">help</span> - Show available commands</div>
          <div><span className="text-terminal-yellow">about</span> - Learn about SBU CyberSec Club</div>
          <div><span className="text-terminal-yellow">events</span> - View upcoming events</div>
          <div><span className="text-terminal-yellow">ctf</span> - CTF competition information</div>
          <div><span className="text-terminal-yellow">resources</span> - Learning resources</div>
          <div><span className="text-terminal-yellow">contact</span> - Get in touch</div>
          <div><span className="text-terminal-yellow">clear</span> - Clear terminal</div>
          <div><span className="text-terminal-yellow">ls</span> - List files</div>
          <div><span className="text-terminal-yellow">cat [file]</span> - Open file (redirects to page)</div>
          <div><span className="text-terminal-yellow">cd [dir]</span> - Change directory (redirects to page)</div>
          <div><span className="text-terminal-yellow">whoami</span> - Display user info</div>
          <div><span className="text-terminal-yellow">date</span> - Show current date</div>
          <div><span className="text-terminal-yellow">sudo</span> - Nice try...</div>
          <div><span className="text-terminal-yellow">hack</span> - Become CEO instantly</div>
        </div>
        <div className="mt-3 text-terminal-cyan">💡 Pro tip: Use TAB for autocomplete!</div>
      </div>
    ),
    about: () => (
      <div className="space-y-2">
        <div className="text-terminal-cyan text-lg font-bold">SBU Cybersec - where we learn to break things (legally)</div>
        <div>we're a new club of aspiring hackers ready to learn together</div>
        <div className="mt-2">
          <span className="text-terminal-yellow">what we do:</span>
          <ul className="ml-4 mt-1">
            <li>• learn cybersecurity fundamentals</li>
            <li>• practice CTF challenges together</li>
            <li>• workshops on hacking & defense</li>
            <li>• build a community of security enthusiasts</li>
            <li>• prepare for careers in cybersecurity</li>
          </ul>
        </div>
      </div>
    ),
    events: () => (
      <div className="space-y-2">
        <div className="text-terminal-cyan text-lg font-bold">upcoming events</div>
        <div className="space-y-3">
          <div className="border-l-2 border-terminal-green pl-3">
            <div className="text-terminal-yellow">General Body Meetings</div>
            <div className="text-sm">Date: Wednesdays 5-6PM</div>
            <div className="text-sm">Location: Check Discord for room</div>
            <div className="text-sm text-terminal-cyan">weekly workshops & hacking demos</div>
          </div>
          <div className="border-l-2 border-terminal-green pl-3">
            <div className="text-terminal-yellow">Hacker Hours</div>
            <div className="text-sm">Date: Fridays 3-5PM</div>
            <div className="text-sm">Location: SAC 309</div>
            <div className="text-sm text-terminal-cyan">work on CTFs and projects together</div>
          </div>
        </div>
      </div>
    ),
    ctf: () => (
      <div className="space-y-2">
        <div className="text-terminal-cyan text-lg font-bold">CTF Team - join us, we're just getting started</div>
        <div>team name: <span className="text-terminal-yellow">SBU_Seawolves</span></div>
        <div className="mt-2">
          <div className="text-terminal-green">what we're working on:</div>
          <ul className="ml-4 mt-1">
            <li>• building our skills together</li>
            <li>• competing in upcoming CTFs</li>
            <li>• learning from each other</li>
          </ul>
        </div>
        <div className="mt-2">
          <div>join us fridays @ 6pm - all skill levels welcome!</div>
        </div>
      </div>
    ),
    resources: () => (
      <div className="space-y-2">
        <div className="text-terminal-cyan text-lg font-bold">resources to go from script kiddie to élite</div>
        <div className="space-y-2">
          <div className="text-terminal-yellow">baby's first hack:</div>
          <ul className="ml-4">
            <li>• OverTheWire (start here or get bullied)</li>
            <li>• PicoCTF (literally made for high schoolers)</li>
            <li>• TryHackMe (hand-holding included)</li>
          </ul>
          <div className="text-terminal-yellow">okay you know some stuff:</div>
          <ul className="ml-4">
            <li>• HackTheBox (prepare to cry)</li>
            <li>• VulnHub (vintage suffering)</li>
            <li>• PortSwigger labs (web go brrr)</li>
          </ul>
          <div className="text-terminal-yellow">touch grass? never heard of her:</div>
          <ul className="ml-4">
            <li>• OSCP (pain but worth)</li>
            <li>• bug bounties (get that bread)</li>
            <li>• 0days (jk... unless? 👀)</li>
          </ul>
        </div>
      </div>
    ),
    contact: () => (
      <div className="space-y-2">
        <div className="text-terminal-cyan text-lg font-bold">slide into our DMs</div>
        <div>📧 email: cybersec@stonybrook.edu (we check it sometimes)</div>
        <div>💬 discord: discord.gg/sbucybersec (we're always here)</div>
        <div>🐦 twitter: @SBUCyberSec (for the memes)</div>
        <div>📍 irl: CS building 2314 (knock first, we might be hacking)</div>
        <div>🕐 office hours: whenever we're not in class lol</div>
      </div>
    ),
    clear: () => {
      setHistory([])
      return ''
    },
    whoami: () => isRoot ? 
      <span className="text-terminal-red font-bold">root@sbu-cybersec 🔥</span> : 
      'just another script kiddie (for now)',
    date: () => new Date().toString(),
    ls: () => (
      <div className="grid grid-cols-3 gap-4">
        <span className="text-terminal-cyan">about.txt</span>
        <span className="text-terminal-cyan">events.txt</span>
        <span className="text-terminal-cyan">resources.txt</span>
        <span className="text-terminal-yellow">workshops/</span>
        <span className="text-terminal-purple">secret.enc</span>
        {puzzleStage >= 1 && <span className="text-gray-600">.hidden</span>}
      </div>
    ),
    pwd: () => '/home/guest/sbu-cybersec',
    echo: () => 'Usage: echo [text]',
    sudo: () => isRoot ? (
      <div className="space-y-1">
        <div className="text-terminal-green">Already running as root!</div>
        <div className="text-terminal-yellow">With great power comes great responsibility... use it wisely 🔥</div>
      </div>
    ) : (
      <span className="text-terminal-red">
        nice try fed. you're not getting root that easy 😂
      </span>
    ),
    hack: () => (
      <div className="space-y-1">
        <div className="text-terminal-green">initiating hack sequence...</div>
        <div className="text-terminal-yellow">[████████████████████] 100% COMPLETE</div>
        <div className="text-terminal-cyan">ACCESS GRANTED: you are now CEO of Google</div>
        <div className="text-terminal-purple">jk you just got rickrolled lmao</div>
      </div>
    ),
    matrix: () => {
      setTimeout(() => {
        const matrixRain = document.querySelector('.matrix-rain')
        if (matrixRain) {
          (matrixRain as HTMLElement).style.opacity = '1'
          setTimeout(() => {
            (matrixRain as HTMLElement).style.opacity = '0.1'
          }, 3000)
        }
      }, 100)
      return (
        <div className="text-terminal-green">
          <div>Wake up, Neo...</div>
          <div>The Matrix has you...</div>
          <div>Follow the white rabbit.</div>
        </div>
      )
    },
    coffee: () => (
      <pre className="text-terminal-cyan" style={{ fontSize: '12px' }}>
{`    ( (
     ) )
   ........
   |      |]
   \\      /
    \`----'`}
      <div className="mt-2">*brewing some Java for you*</div>
      </pre>
    ),
    vim: () => (
      <div className="text-terminal-red">
        Error: Unable to exit vim. You're trapped forever.
        <div className="text-terminal-yellow mt-2">hint: press ESC :q! (jk this isn't real vim)</div>
      </div>
    ),
    emacs: () => (
      <div className="text-terminal-purple">
        EMACS: Eight Megabytes And Constantly Swapping
        <div className="text-terminal-cyan mt-2">*angry vim noises*</div>
      </div>
    ),
  }

  useEffect(() => {
    // Don't auto-focus on initial page load to prevent scrolling
    const timer = setTimeout(() => {
      if (history.length > 0) {
        inputRef.current?.focus()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [history.length])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    const lowerCmd = trimmedCmd.toLowerCase()
    const parts = lowerCmd.split(' ')
    const command = parts[0]
    
    let output: string | React.ReactElement = ''
    
    // Hidden commands for puzzle
    if (lowerCmd === 'ls -la' || lowerCmd === 'ls -a') {
      output = (
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-600">.</span>
          <span className="text-gray-600">..</span>
          <span className="text-terminal-cyan">about.txt</span>
          <span className="text-terminal-cyan">events.txt</span>
          <span className="text-terminal-cyan">resources.txt</span>
          <span className="text-terminal-yellow">workshops/</span>
          <span className="text-terminal-purple">secret.enc</span>
          <span className="text-gray-600">.hidden</span>
          <span className="text-gray-500">.config</span>
        </div>
      )
      if (puzzleStage === 0) {
        setPuzzleStage(1)
        output = (
          <div>
            {output}
          </div>
        )
      }
    } else if (command === 'cat' && parts[1] === '.config') {
      output = (
        <div className="space-y-2 font-mono text-sm">
          <div className="text-terminal-green"># SYSTEM CONFIGURATION FILE</div>
          <div># Last modified by: admin</div>
          <div># Debug mode: enabled</div>
          <div className="text-gray-600"># TODO: remove before production</div>
          <div># Backdoor: /usr/bin/pwn --exploit=buffer_overflow</div>
        </div>
      )
      setPuzzleStage(2)
    } else if (lowerCmd === '/usr/bin/pwn --exploit=buffer_overflow') {
      output = (
        <div className="space-y-2">
          <div className="text-terminal-green">Exploiting buffer overflow...</div>
          <div className="text-terminal-yellow">[■■■■■■■■□□] 80%</div>
          <div className="text-terminal-cyan">Memory dump found:</div>
          <div className="font-mono text-xs">
            0x7fff5fc3d000: 70 61 73 73 77 6f 72 64 3a 20 73 33 63 75 72 33
          </div>
          <div className="font-mono text-xs">
            0x7fff5fc3d010: 5f 70 34 73 73 77 30 72 64 5f 6c 30 6c 00 00 00
          </div>
        </div>
      )
      setPuzzleStage(3)
    } else if (lowerCmd === 'cat .hidden') {
      output = (
        <div className="space-y-2">
          <div className="text-terminal-cyan">Contents of .hidden:</div>
          <div className="font-mono">username: root</div>
          <div className="font-mono">password: s3cur3_p4ssw0rd_l0l</div>
          <div className="text-terminal-yellow mt-2">
            bruh who stores passwords in plaintext? anyway, try 'su root' then enter the password
          </div>
        </div>
      )
      setFoundPassword(true)
      setPuzzleStage(4)
    } else if ((lowerCmd === 'su root' || lowerCmd === 'su') && puzzleStage >= 2) {
      output = (
        <div>
          <div className="text-terminal-cyan">Password: </div>
          <div className="text-gray-600">(type the password you found)</div>
        </div>
      )
      setPuzzleStage(5) // Mark that we're waiting for password
    } else if (lowerCmd === 's3cur3_p4ssw0rd_l0l' && puzzleStage >= 5) {
      setIsRoot(true)
      output = (
        <div className="space-y-2">
          <div className="text-terminal-green font-bold text-lg">ACCESS GRANTED</div>
          <div className="text-terminal-red">Welcome to root! 🔥</div>
          <div className="text-terminal-purple">
            You've successfully pwned the system. Real hackers find their own way in.
          </div>
          <div className="text-terminal-yellow mt-3">
            🏆 Achievement Unlocked: "Elite Hacker Status"
          </div>
          <div className="text-terminal-cyan">
            Try 'whoami' or 'cat secret.enc' now that you're root!
          </div>
        </div>
      )
    } else if (command === 'cat' && parts.length > 1) {
      const filename = parts[1]
      switch(filename) {
        case 'about.txt':
          output = <div className="text-terminal-green">redirecting to /about...</div>
          setTimeout(() => router.push('/about'), 500)
          break
        case 'events.txt':
          output = <div className="text-terminal-green">redirecting to /events...</div>
          setTimeout(() => router.push('/events'), 500)
          break
        case 'resources.txt':
          output = <div className="text-terminal-green">redirecting to /resources...</div>
          setTimeout(() => router.push('/resources'), 500)
          break
        case 'secret.enc':
          if (isRoot) {
            output = (
              <div className="space-y-2">
                <div className="text-terminal-green font-bold">DECRYPTING FILE...</div>
                <div className="text-terminal-cyan">
                  -----BEGIN ULTRA SECRET MESSAGE-----
                </div>
                <div className="text-terminal-yellow">
                  Congratulations, you absolute unit! 🎉
                </div>
                <div>
                  You've proven you're not just another script kiddie.
                  Welcome to the elite ranks of SBU CyberSec Club.
                </div>
                <div className="text-terminal-purple mt-2">
                  🏴‍☠️ Real Flag: {`SBU{r00t_4cc3ss_gr4nt3d_w3lc0m3_h4ck3r}`}
                </div>
                <div className="text-terminal-green">
                  Show this flag at our next meeting for clout!
                </div>
                <div className="text-terminal-cyan">
                  -----END ULTRA SECRET MESSAGE-----
                </div>
              </div>
            )
          } else {
            output = <div className="text-terminal-red">Permission denied: nice try fed, but you need root access 😂</div>
          }
          break
        default:
          output = <span className="text-terminal-red">cat: {filename}: No such file or directory</span>
      }
    } else if (command === 'cd' && parts.length > 1) {
      const dir = parts[1]
      switch(dir) {
        case 'workshops':
        case 'workshops/':
          output = <div className="text-terminal-green">entering workshops directory... redirecting to /events</div>
          setTimeout(() => router.push('/events'), 500)
          break
        case '..':
          output = <div className="text-terminal-green">going back to home...</div>
          setTimeout(() => router.push('/'), 500)
          break
        default:
          output = <span className="text-terminal-red">cd: {dir}: No such directory</span>
      }
    } else if (command === 'cat' || command === 'cd') {
      output = <span className="text-terminal-yellow">Usage: {command} [filename/directory]</span>
    } else if (lowerCmd === 'rm -rf /' || lowerCmd === 'rm -rf /*') {
      output = (
        <div className="space-y-2">
          <div className="text-terminal-red font-bold">DESTROYING SYSTEM...</div>
          <div className="text-terminal-yellow">[████████████████████] 100%</div>
          <div className="text-terminal-purple">jk we're not actually doing that 😂</div>
          <div className="text-terminal-cyan">{isRoot ? "but you have the power to... use it wisely" : "good thing you don't have root access"}</div>
        </div>
      )
    } else if (lowerCmd === 'passwd' && isRoot) {
      output = (
        <div className="text-terminal-green">
          New password: hunter2<br/>
          Retype password: *******<br/>
          passwd: password updated successfully (not really tho)
        </div>
      )
    } else if (lowerCmd.includes('ping') && lowerCmd.includes('8.8.8.8')) {
      output = (
        <div className="font-mono text-sm">
          <div>PING 8.8.8.8: 56 data bytes</div>
          <div>64 bytes from 8.8.8.8: icmp_seq=0 ttl=119 time=13.37 ms</div>
          <div>64 bytes from 8.8.8.8: icmp_seq=1 ttl=119 time=13.37 ms</div>
          <div>64 bytes from 8.8.8.8: icmp_seq=2 ttl=119 time=13.37 ms</div>
          <div className="text-terminal-yellow mt-2">nice latency bro 😎</div>
        </div>
      )
    } else if (lowerCmd === 'neofetch' || lowerCmd === 'screenfetch') {
      output = (
        <div className="flex gap-4">
          <pre className="text-terminal-green" style={{ fontSize: '10px' }}>
{`    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'|_   _/'\\
\\___)=(___/`}
          </pre>
          <div className="text-sm">
            <div className="text-terminal-cyan">OS: SBU Linux 4.20.69</div>
            <div className="text-terminal-yellow">Host: Stony Brook University</div>
            <div className="text-terminal-purple">Kernel: 5.15.0-hacker</div>
            <div className="text-terminal-green">Uptime: 69 days, 4:20</div>
            <div className="text-terminal-red">Shell: /bin/hack</div>
            <div className="text-terminal-cyan">CPU: Intel Core i9-13337K</div>
            <div className="text-terminal-yellow">Memory: 42069 MB</div>
          </div>
        </div>
      )
    } else if (lowerCmd === 'konami' || lowerCmd === '↑↑↓↓←→←→ba') {
      output = (
        <div className="text-terminal-purple text-lg">
          🎮 30 LIVES REMAINING 🎮
          <div className="text-sm mt-2">You've unlocked god mode!</div>
        </div>
      )
    } else if (lowerCmd === 'nmap' || lowerCmd.startsWith('nmap ')) {
      output = (
        <div className="font-mono text-xs">
          <div className="text-terminal-green">Starting Nmap 7.94...</div>
          <div>Nmap scan report for target</div>
          <div>PORT     STATE SERVICE</div>
          <div>22/tcp   open  ssh</div>
          <div>80/tcp   open  http</div>
          <div>443/tcp  open  https</div>
          <div>1337/tcp open  elite</div>
          <div>31337/tcp open super-elite</div>
          <div className="text-terminal-yellow mt-2">FBI has entered the chat 👀</div>
        </div>
      )
    } else if (lowerCmd === 'exit' || lowerCmd === 'quit' || lowerCmd === 'logout') {
      output = (
        <div className="text-terminal-red">
          There is no escape. You're here forever.
          <div className="text-terminal-purple mt-2">*evil laughter*</div>
        </div>
      )
    } else if (lowerCmd === 'history') {
      output = (
        <div className="font-mono text-sm">
          {commandHistory.slice(-10).map((cmd, i) => (
            <div key={i}>{commandHistory.length - 10 + i + 1}  {cmd}</div>
          ))}
          <div className="text-terminal-yellow mt-2">your secrets are safe with us (probably)</div>
        </div>
      )
    } else if (lowerCmd === 'top' || lowerCmd === 'htop') {
      output = (
        <div className="font-mono text-xs">
          <div>PID   USER  %CPU  %MEM  COMMAND</div>
          <div>1337  root  99.9  66.6  /usr/bin/hack</div>
          <div>420   user  42.0  13.37 chrome --incognito</div>
          <div>69    user  6.9   4.20  discord</div>
          <div>31337 root  133.7 99.9  bitcoin-miner</div>
          <div className="text-terminal-red mt-2">wait, who's mining bitcoin?? 🤔</div>
        </div>
      )
    } else if (lowerCmd === 'fortune' || lowerCmd === 'fortune-cookie') {
      const fortunes = [
        "Your code will compile on the first try (it won't)",
        "Today you will find the missing semicolon",
        "A segfault is in your near future",
        "You will soon discover a 10-year-old Stack Overflow answer that solves everything",
        "The bug is not in your code, it's in production",
        "Your pull request will be approved without changes (lmao good luck)"
      ]
      const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]
      output = (
        <div className="text-terminal-purple">
          🔮 {fortune}
        </div>
      )
    } else if (lowerCmd === 'sl') {
      output = (
        <pre className="text-terminal-green" style={{ fontSize: '10px' }}>
{`    ====        ________                ___________
 _D _|  |_______/        \\__I_I_____===__|_________|
  |(_)---  |   H\\________/ |   |        =|___ ___|
  /     |  |   H  |  |     |   |         ||_| |_||
 |      |  |   H  |__--------------------| [___] |
 | ________|___H__/__|_____/[][]~\\_______|       |
 |/ |   |-----------I_____I [][] []  D   |=======|
`}
          <div className="mt-2">choo choo! 🚂 (you meant 'ls', right?)</div>
        </pre>
      )
    } else if (lowerCmd.includes(':(){ :|:& };:')) {
      output = (
        <div className="text-terminal-red font-bold">
          FORK BOMB DETECTED! 💣
          <div className="text-terminal-yellow">nice try, but we have protection against that</div>
        </div>
      )
    } else if (command === 'echo' && parts.length > 1) {
      output = parts.slice(1).join(' ')
    } else if (command in commands) {
      output = commands[command]()
    } else if (trimmedCmd === '') {
      return
    } else {
      output = <span className="text-terminal-red">Command not found: {command}. Type 'help' for available commands.</span>
    }
    
    setHistory(prev => [...prev, { command: cmd, output }])
    setCommandHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const allCommands = [
        'help', 'about', 'events', 'resources', 'contact', 'clear', 
        'ls', 'cat', 'cd', 'whoami', 'date', 'pwd', 'echo', 'sudo', 'hack',
        'matrix', 'coffee', 'vim', 'emacs', 'neofetch', 'screenfetch',
        'ping', 'nmap', 'exit', 'quit', 'logout', 'history', 'top', 'htop',
        'fortune', 'sl', 'rm', 'passwd', 'su', 'konami', 'ctf'
      ]
      const allFiles = ['about.txt', 'events.txt', 'resources.txt', 'workshops/', 'secret.enc', '.hidden', '.config']
      
      const parts = input.trim().split(' ')
      const currentWord = parts[parts.length - 1]
      
      if (parts.length === 1) {
        // Complete commands
        const matches = allCommands.filter(cmd => cmd.startsWith(currentWord))
        if (matches.length === 1) {
          setInput(matches[0])
        } else if (matches.length > 1 && currentWord.length > 0) {
          // Find common prefix
          const commonPrefix = matches.reduce((prefix, cmd) => {
            let i = 0
            while (i < prefix.length && i < cmd.length && prefix[i] === cmd[i]) i++
            return prefix.slice(0, i)
          })
          setInput(commonPrefix)
        }
      } else if (parts[0] === 'cat' || parts[0] === 'cd') {
        // Complete filenames
        const matches = allFiles.filter(file => file.startsWith(currentWord))
        if (matches.length === 1) {
          parts[parts.length - 1] = matches[0]
          setInput(parts.join(' '))
        } else if (matches.length > 1 && currentWord.length > 0) {
          const commonPrefix = matches.reduce((prefix, file) => {
            let i = 0
            while (i < prefix.length && i < file.length && prefix[i] === file[i]) i++
            return prefix.slice(0, i)
          })
          parts[parts.length - 1] = commonPrefix
          setInput(parts.join(' '))
        }
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <div 
      ref={terminalRef}
      className="bg-black/90 backdrop-blur-sm rounded-lg h-full overflow-y-auto border-0"
      style={{ padding: '1.5rem' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="mb-2">
        <pre className="text-xs" style={{
          background: 'linear-gradient(180deg, #ff00ff, #00ffff, #00ff00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
{`   ____  ____  _   _    ____      _               ____            
  / ___|| __ )| | | |  / ___|   _| |__   ___ _ __/ ___|  ___  ___ 
  \\___ \\|  _ \\| | | | | |  | | | | '_ \\ / _ \\ '__\\___ \\ / _ \\/ __|
   ___) | |_) | |_| | | |__| |_| | |_) |  __/ |   ___) |  __/ (__ 
  |____/|____/ \\___/   \\____\\__, |_.__/ \\___|_|  |____/ \\___|\\___|
                             |___/                                 `}
        </pre>
      </div>
      <div className="mb-4">
        <span style={{ color: '#00ff00' }}>yo welcome to SBU cybersec terminal v4.20.69</span>
        <br />
        type <span style={{ color: '#00ffff' }}>'help'</span> for commands | use <span style={{ color: '#00ffff' }}>TAB</span> to autocomplete
      </div>
      
      <div className="space-y-2">
        {history.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-2">
              <span style={{ color: isRoot ? '#ff0000' : '#00ffff' }}>{isRoot ? 'root@' : 'guest@'}</span>
              <span style={{ color: '#ff00ff' }}>sbu-cybersec</span>
              <span className="text-white">:</span>
              <span style={{ color: '#ffff00' }}>~</span>
              <span style={{ color: isRoot ? '#ff0000' : '#00ff00' }}>{isRoot ? '#' : '$'}</span>
              <span className="ml-2" style={{ color: '#00ff00' }}>{item.command}</span>
            </div>
            {item.output && (
              <div className="mt-1 ml-4">
                {typeof item.output === 'string' ? (
                  <span>{item.output}</span>
                ) : (
                  item.output
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center space-x-2">
          <span style={{ color: isRoot ? '#ff0000' : '#00ffff' }}>{isRoot ? 'root@' : 'guest@'}</span>
          <span style={{ color: '#ff00ff' }}>sbu-cybersec</span>
          <span className="text-white">:</span>
          <span style={{ color: '#ffff00' }}>~</span>
          <span style={{ color: isRoot ? '#ff0000' : '#00ff00' }}>{isRoot ? '#' : '$'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none ml-2 font-mono text-base"
            spellCheck={false}
            autoComplete="off"
            style={{ 
              caretColor: '#00ff00',
              color: '#00ff00',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace"
            }}
          />
          <span className="animate-cursor-blink">▊</span>
        </div>
      </form>
    </div>
  )
}

export default Terminal