export interface CommandOutput {
  type: 'text' | 'html' | 'error' | 'success' | 'warning' | 'info' | 'table' | 'ascii';
  content: string;
  delay?: number;
}

export interface TerminalLine {
  id: string;
  input?: string;
  outputs: CommandOutput[];
  timestamp: Date;
}

export const ASCII_BANNER = `
 ██████╗ ██████╗       ███╗   ███╗██╗   ██╗████████╗ █████╗ ███╗   ██╗████████╗███████╗
 ██╔══██╗██╔══██╗      ████╗ ████║██║   ██║╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝╚════██║
 ██████╔╝██║  ██║█████╗██╔████╔██║██║   ██║   ██║   ███████║██╔██╗ ██║   ██║       ██╔╝
 ██╔══██╗██║  ██║╚════╝██║╚██╔╝██║██║   ██║   ██║   ██╔══██║██║╚██╗██║   ██║      ██╔╝ 
 ██████╔╝██████╔╝      ██║ ╚═╝ ██║╚██████╔╝   ██║   ██║  ██║██║ ╚████║   ██║      ██║  
 ╚═════╝ ╚═════╝       ╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝      ╚═╝  
`;

export const MINI_BANNER = `
  ██████╗ ██████╗       ███╗   ███╗ ██╗   ██╗████████╗ █████╗ ███╗   ██╗████████╗███████╗
  ██╔══██╗██╔══██╗      ████╗ ████║██║   ██║╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝╚════██║
  ██████╔╝██║  ██║      ██╔████╔██║██║   ██║   ██║   ███████║██╔██╗ ██║   ██║       ██╔╝
  ██╔══██╗██║  ██║      ██║╚██╔╝██║██║   ██║   ██║   ██╔══██║██║╚██╗██║   ██║      ██╔╝ 
  ██████╔╝██████╔╝      ██║ ╚═╝ ██║╚██████╔╝   ██║   ██║  ██║██║ ╚████║   ██║      ██║  
`;

export const PROFILE = {
  username: 'Bd-Mutant7',
  github: 'https://github.com/Bd-Mutant7',
  role: 'Cybersecurity Student & CTF Player',
  location: 'Nairobi, Kenya 🌍',
  focus: ['Penetration Testing', 'Web Security', 'Network Analysis', 'CTF Challenges'],
  bio: `Security researcher in training. I break things to understand how to fix them.
Passionate about ethical hacking, CTF competitions, and building secure systems.
Currently leveling up through hands-on labs, bug bounties, and open-source contributions.`,
  stats: {
    ctfSolves: 47,
    githubRepos: 12,
    vulnerabilities: 8,
    certifications: 3,
  },
};

export const PROJECTS = [
  {
    id: 'webscanner',
    name: 'WebVulnScanner',
    lang: 'Python',
    status: 'active',
    stars: 24,
    tags: ['OWASP', 'XSS', 'SQLi', 'Automation'],
    description: 'Automated web vulnerability scanner targeting OWASP Top 10. Detects XSS, SQL injection, CSRF, insecure headers, and open redirects with detailed remediation reports.',
    highlights: [
      '✓ Detects 15+ vulnerability classes',
      '✓ Generates JSON/HTML reports',
      '✓ Integrates with Burp Suite',
      '✓ CI/CD pipeline support',
    ],
    link: 'https://github.com/Bd-Mutant7',
  },
  {
    id: 'netmon',
    name: 'NetMonitor',
    lang: 'Go',
    status: 'active',
    stars: 18,
    tags: ['Network', 'Packet Analysis', 'Monitoring'],
    description: 'Real-time network traffic analyzer with anomaly detection. Captures packets, identifies suspicious patterns, and alerts on potential intrusion attempts.',
    highlights: [
      '✓ Live packet capture & analysis',
      '✓ Anomaly detection via ML heuristics',
      '✓ Protocol dissection (HTTP, DNS, TLS)',
      '✓ Exportable PCAP files',
    ],
    link: 'https://github.com/Bd-Mutant7',
  },
  {
    id: 'ctftoolkit',
    name: 'CTF-Toolkit',
    lang: 'Python/Bash',
    status: 'active',
    stars: 31,
    tags: ['CTF', 'Forensics', 'Crypto', 'Reverse Engineering'],
    description: 'Collection of scripts and tools for CTF competitions. Covers cryptography, steganography, binary exploitation, and forensics challenges.',
    highlights: [
      '✓ 30+ utility scripts',
      '✓ Crypto solver (Caesar, Vigenère, RSA)',
      '✓ Stego tools (LSB, metadata extraction)',
      '✓ Binary analysis helpers',
    ],
    link: 'https://github.com/Bd-Mutant7',
  },
  {
    id: 'phishdetect',
    name: 'PhishDetect',
    lang: 'JavaScript',
    status: 'completed',
    stars: 15,
    tags: ['Phishing', 'Browser Extension', 'ML'],
    description: 'Browser extension that analyzes URLs and page content in real-time to detect phishing attempts using heuristic and ML-based classification.',
    highlights: [
      '✓ Real-time URL analysis',
      '✓ DOM-based phishing detection',
      '✓ 94.7% detection accuracy',
      '✓ Privacy-first (no data collection)',
    ],
    link: 'https://github.com/Bd-Mutant7',
  },
  {
    id: 'hashcracker',
    name: 'HashLab',
    lang: 'Rust',
    status: 'in-progress',
    stars: 9,
    tags: ['Cryptography', 'Hash Functions', 'Security Research'],
    description: 'High-performance hash analysis tool. Identifies hash types, performs dictionary attacks, generates rainbow tables, and benchmarks hashing algorithms.',
    highlights: [
      '✓ Identifies 40+ hash formats',
      '✓ Multi-threaded dictionary attacks',
      '✓ GPU acceleration (CUDA)',
      '✓ 10x faster than hashcat on CPU',
    ],
    link: 'https://github.com/Bd-Mutant7',
  },
];

export const CTF_CHALLENGES = [
  { name: 'PicoCTF 2024', result: 'Top 15%', category: 'General', points: 4200 },
  { name: 'HackTheBox - Easy Machines', result: '12 Pwned', category: 'Pentesting', points: null },
  { name: 'TryHackMe Paths', result: 'Top 8%', category: 'Learning', points: null },
  { name: 'CryptoCTF 2023', result: 'Participant', category: 'Cryptography', points: 750 },
  { name: 'OWASP WebGoat', result: 'Completed', category: 'Web Security', points: null },
  { name: 'OverTheWire Bandit', result: 'Level 26', category: 'Linux/CLI', points: null },
];

export const SKILLS = {
  'Languages': [
    { name: 'Python', level: 90 },
    { name: 'Bash/Shell', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Go', level: 65 },
    { name: 'Rust', level: 50 },
    { name: 'C/C++', level: 55 },
  ],
  'Security Tools': [
    { name: 'Nmap', level: 95 },
    { name: 'Burp Suite', level: 88 },
    { name: 'Metasploit', level: 80 },
    { name: 'Wireshark', level: 85 },
    { name: 'OWASP ZAP', level: 78 },
    { name: 'Ghidra', level: 60 },
  ],
  'Domains': [
    { name: 'Web Application Security', level: 85 },
    { name: 'Network Penetration Testing', level: 78 },
    { name: 'Cryptography', level: 72 },
    { name: 'Digital Forensics', level: 68 },
    { name: 'Malware Analysis', level: 60 },
    { name: 'Social Engineering', level: 70 },
  ],
};

export const CYBER_TOPICS: Record<string, { title: string; content: string[] }> = {
  'owasp': {
    title: 'OWASP Top 10 (2021)',
    content: [
      '01. Broken Access Control ─ Restrictions on authenticated users not properly enforced',
      '02. Cryptographic Failures ─ Failures related to cryptography exposing sensitive data',
      '03. Injection ─ SQL, NoSQL, OS, LDAP injection via hostile data',
      '04. Insecure Design ─ Missing or ineffective control design',
      '05. Security Misconfiguration ─ Improper security settings across the stack',
      '06. Vulnerable Components ─ Using components with known vulnerabilities',
      '07. Auth Failures ─ Broken authentication and session management',
      '08. Software/Data Integrity ─ Assumptions about integrity without verification',
      '09. Security Logging Failures ─ Insufficient logging and monitoring',
      '10. Server-Side Request Forgery ─ SSRF flaws in web applications',
    ],
  },
  'xss': {
    title: 'Cross-Site Scripting (XSS) — Attack Vector',
    content: [
      'TYPE         DESCRIPTION                          PERSISTENCE',
      '─────────────────────────────────────────────────────────────',
      'Reflected    Payload in HTTP request/response      None',
      'Stored       Payload saved in database              Permanent',
      'DOM-Based    Payload executed via DOM manipulation  None',
      '',
      'IMPACT: Session hijacking, credential theft, defacement,',
      '        malware distribution, keylogging, phishing',
      '',
      'MITIGATION:',
      '  → Content Security Policy (CSP) headers',
      '  → Input validation & output encoding',
      '  → HttpOnly & Secure cookie flags',
      '  → Use modern frameworks (auto-escape by default)',
      '',
      'TEST PAYLOAD: <script>alert(document.domain)</script>',
      '              "><img src=x onerror=alert(1)>',
      '              javascript:/*--></title></style></textarea>',
    ],
  },
  'sqli': {
    title: 'SQL Injection — Attack Vector',
    content: [
      'TYPES: Classic, Blind, Time-based, Out-of-band',
      '',
      'EXAMPLE VULNERABLE QUERY:',
      '  SELECT * FROM users WHERE user=\'' + "' + username + '" + '\'',
      '',
      'EXPLOIT PAYLOAD:',
      '  \' OR \'1\'=\'1          ─ Always true condition',
      '  \' UNION SELECT null,null-- ─ Union-based extraction',
      '  \'; DROP TABLE users-- ─ Destructive (Bobby Tables)',
      '',
      'DETECTION (sqlmap):',
      '  sqlmap -u "http://target/page?id=1" --dbs',
      '  sqlmap -u "http://target/page?id=1" -D dbname --tables',
      '',
      'MITIGATION:',
      '  → Parameterized queries / Prepared statements',
      '  → ORM with proper escaping',
      '  → Input validation (whitelist approach)',
      '  → Least privilege database accounts',
      '  → WAF as additional layer',
    ],
  },
  'recon': {
    title: 'Reconnaissance Techniques',
    content: [
      'PASSIVE RECON (no direct contact):',
      '  OSINT      ─ Google dorking, Shodan, Censys',
      '  DNS        ─ Zone transfers, subdomain enum',
      '  WHOIS      ─ Registration & ownership data',
      '  Social     ─ LinkedIn, GitHub, job postings',
      '',
      'ACTIVE RECON (direct interaction):',
      '  Port Scan  ─ nmap -sV -sC -p- target.com',
      '  Web Enum   ─ gobuster, ffuf, dirbuster',
      '  Tech Stack ─ Wappalyzer, whatweb',
      '  Vuln Scan  ─ Nikto, Nuclei',
      '',
      'USEFUL COMMANDS:',
      '  nmap -sn 192.168.1.0/24              # Host discovery',
      '  subfinder -d target.com              # Subdomain enum',
      '  shodan host <IP>                     # Shodan lookup',
      '  theHarvester -d target.com -b all    # Email harvest',
    ],
  },
  'crypto': {
    title: 'Cryptography Fundamentals',
    content: [
      'SYMMETRIC ENCRYPTION:',
      '  AES-256   ─ Current gold standard (block cipher)',
      '  ChaCha20  ─ Stream cipher, faster on mobile',
      '  3DES      ─ Legacy, avoid in new systems',
      '',
      'ASYMMETRIC ENCRYPTION:',
      '  RSA-2048+ ─ Key exchange, signatures',
      '  ECC       ─ Smaller keys, same security',
      '  DSA/ECDSA ─ Digital signatures',
      '',
      'HASH FUNCTIONS:',
      '  SHA-256   ─ Secure (use this)',
      '  SHA-3     ─ Keccak-based, very secure',
      '  MD5       ─ BROKEN - collision attacks exist',
      '  SHA-1     ─ DEPRECATED - do not use',
      '',
      'COMMON PITFALLS:',
      '  ✗ Rolling your own crypto',
      '  ✗ Using ECB mode for AES',
      '  ✗ Weak IV / nonce reuse',
      '  ✗ Improper key storage',
    ],
  },
  'netpentesting': {
    title: 'Network Penetration Testing',
    content: [
      'PHASE 1 — DISCOVERY:',
      '  nmap -sn <range>       # Ping sweep',
      '  arp-scan -l            # ARP discovery',
      '',
      'PHASE 2 — PORT SCANNING:',
      '  nmap -sV -sC -O target # Service/OS detection',
      '  masscan -p1-65535      # Fast full port scan',
      '',
      'PHASE 3 — VULNERABILITY ASSESSMENT:',
      '  nmap --script vuln     # NSE vuln scripts',
      '  openvas / nessus       # Comprehensive scanners',
      '',
      'PHASE 4 — EXPLOITATION:',
      '  msfconsole             # Metasploit Framework',
      '  searchsploit <service> # ExploitDB search',
      '',
      'PHASE 5 — POST-EXPLOITATION:',
      '  mimikatz               # Windows cred dump',
      '  linpeas / winpeas      # Privilege escalation',
      '  Cobalt Strike          # Enterprise C2',
      '',
      '⚠  LEGAL: Only test systems you own or have explicit',
      '   written permission to test.',
    ],
  },
};

export const CERTIFICATIONS = [
  { name: 'CompTIA Security+', status: 'studying', vendor: 'CompTIA', progress: 65 },
  { name: 'CEH (Certified Ethical Hacker)', status: 'planned', vendor: 'EC-Council', progress: 30 },
  { name: 'OSCP', status: 'planned', vendor: 'Offensive Security', progress: 15 },
  { name: 'TryHackMe Jr. Penetration Tester', status: 'completed', vendor: 'TryHackMe', progress: 100 },
];

export const COMMANDS_HELP = [
  { cmd: 'whoami', desc: 'Display profile & identity' },
  { cmd: 'ls projects', desc: 'List all projects' },
  { cmd: 'cat project <id>', desc: 'View project details (e.g. cat project webscanner)' },
  { cmd: 'skills', desc: 'View technical skill matrix' },
  { cmd: 'ctf', desc: 'CTF competition history' },
  { cmd: 'certs', desc: 'Certifications & learning path' },
  { cmd: 'learn <topic>', desc: 'Study a cybersecurity topic' },
  { cmd: 'topics', desc: 'List available topics to study' },
  { cmd: 'contact', desc: 'Get contact information' },
  { cmd: 'social', desc: 'Social media & links' },
  { cmd: 'matrix', desc: 'Toggle matrix rain effect' },
  { cmd: 'banner', desc: 'Redisplay ASCII banner' },
  { cmd: 'clear', desc: 'Clear terminal' },
  { cmd: 'help', desc: 'Show this help menu' },
  { cmd: 'sudo rm -rf /', desc: 'Just... don\'t.' },
];
