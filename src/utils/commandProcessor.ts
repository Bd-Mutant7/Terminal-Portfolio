import type { CommandOutput } from '../data/terminalData';
import {
  PROFILE,
  PROJECTS,
  CTF_CHALLENGES,
  SKILLS,
  CYBER_TOPICS,
  CERTIFICATIONS,
  COMMANDS_HELP,
  ASCII_BANNER,
} from '../data/terminalData';

export function processCommand(input: string): CommandOutput[] {
  const trimmed = input.trim().toLowerCase();
  const parts = trimmed.split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);

  // Special cases
  if (trimmed === '' ) return [];
  if (trimmed === 'sudo rm -rf /' || trimmed === 'sudo rm -rf /*') {
    return [
      { type: 'error', content: 'rm: it is dangerous to operate recursively on \'/\'' },
      { type: 'error', content: 'rm: use --no-preserve-root to override this failsafe' },
      { type: 'warning', content: '... Nice try though 😏' },
      { type: 'success', content: 'System integrity: ████████████ 100% — No harm done.' },
    ];
  }
  if (trimmed === 'exit' || trimmed === 'quit') {
    return [{ type: 'warning', content: 'You can\'t escape the terminal. The terminal is everywhere. 👁️' }];
  }
  if (trimmed.startsWith('ssh ')) {
    return [
      { type: 'info', content: `ssh: connect to host ${args.join(' ')} port 22: Connection refused` },
      { type: 'text', content: '(You don\'t have access to my servers, nice try 😄)' },
    ];
  }
  if (trimmed === 'ls' || trimmed === 'ls -la' || trimmed === 'ls -l') {
    return [
      { type: 'text', content: 'total 48' },
      { type: 'text', content: 'drwxr-xr-x  2 bd-mutant7 hackers  4096 Jan 15 09:32 .' },
      { type: 'text', content: 'drwxr-xr-x 18 bd-mutant7 hackers  4096 Jan 15 09:30 ..' },
      { type: 'info', content: '-rw-r--r--  1 bd-mutant7 hackers  2048 Jan 15 09:32 README.md' },
      { type: 'success', content: 'drwxr-xr-x  5 bd-mutant7 hackers  4096 Jan 14 22:10 projects/' },
      { type: 'info', content: 'drwxr-xr-x  3 bd-mutant7 hackers  4096 Jan 13 18:44 ctf-writeups/' },
      { type: 'warning', content: '-rwxr-xr-x  1 bd-mutant7 hackers  8192 Jan 10 14:20 [REDACTED]' },
      { type: 'text', content: '' },
      { type: 'text', content: 'Type "ls projects" for project list or "help" for all commands.' },
    ];
  }

  switch (cmd) {
    case 'help':
    case '?':
      return [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║            AVAILABLE COMMANDS                        ║\n╚══════════════════════════════════════════════════════╝' },
        ...COMMANDS_HELP.map(({ cmd: c, desc }) => ({
          type: 'text' as const,
          content: `  ${c.padEnd(28)} ${desc}`,
        })),
        { type: 'info', content: '\nTip: Try "learn owasp" or "cat project webscanner"' },
      ];

    case 'whoami':
      return [
        { type: 'ascii', content: `╔══════════════════════════════════════════════╗\n║  IDENTITY CARD — ${PROFILE.username.padEnd(26)}║\n╚══════════════════════════════════════════════╝` },
        { type: 'success', content: `  Username  : ${PROFILE.username}` },
        { type: 'info', content: `  Role      : ${PROFILE.role}` },
        { type: 'text', content: `  Location  : ${PROFILE.location}` },
        { type: 'text', content: `  GitHub    : ${PROFILE.github}` },
        { type: 'text', content: '' },
        { type: 'text', content: '  FOCUS AREAS:' },
        ...PROFILE.focus.map(f => ({ type: 'text' as const, content: `    → ${f}` })),
        { type: 'text', content: '' },
        { type: 'text', content: '  BIO:' },
        ...PROFILE.bio.split('\n').map(l => ({ type: 'text' as const, content: `    ${l}` })),
        { type: 'text', content: '' },
        { type: 'text', content: '  STATS:' },
        { type: 'success', content: `    CTF Solves      : ${PROFILE.stats.ctfSolves}` },
        { type: 'success', content: `    GitHub Repos    : ${PROFILE.stats.githubRepos}` },
        { type: 'warning', content: `    Vulnerabilities : ${PROFILE.stats.vulnerabilities} disclosed` },
        { type: 'info', content: `    Certifications  : ${PROFILE.stats.certifications}` },
      ];

    case 'banner':
      return [
        { type: 'ascii', content: ASCII_BANNER },
        { type: 'info', content: `  ${PROFILE.username} | ${PROFILE.role}` },
        { type: 'text', content: '  Type "help" to see all available commands.' },
      ];

    case 'ls':
      if (args[0] === 'projects') {
        return [
          { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║                  PROJECTS                            ║\n╚══════════════════════════════════════════════════════╝' },
          { type: 'text', content: '  ID             NAME                LANG        STATUS     ★' },
          { type: 'text', content: '  ─────────────────────────────────────────────────────────' },
          ...PROJECTS.map(p => ({
            type: (p.status === 'active' ? 'success' : p.status === 'completed' ? 'info' : 'warning') as CommandOutput['type'],
            content: `  ${p.id.padEnd(15)} ${p.name.padEnd(20)} ${p.lang.padEnd(12)} ${p.status.padEnd(10)} ${p.stars}`,
          })),
          { type: 'text', content: '' },
          { type: 'text', content: '  Use: cat project <id>   (e.g. cat project webscanner)' },
        ];
      }
      return [{ type: 'error', content: `Unknown directory. Try "ls projects"` }];

    case 'cat':
      if (args[0] === 'project' && args[1]) {
        const proj = PROJECTS.find(p => p.id === args[1]);
        if (!proj) {
          const ids = PROJECTS.map(p => p.id).join(', ');
          return [{ type: 'error', content: `cat: project '${args[1]}': No such project\nAvailable: ${ids}` }];
        }
        return [
          { type: 'ascii', content: `╔══════════════════════════════════════════════╗\n║  PROJECT: ${proj.name.padEnd(33)}║\n╚══════════════════════════════════════════════╝` },
          { type: 'success', content: `  Name     : ${proj.name}` },
          { type: 'info', content: `  Language : ${proj.lang}` },
          { type: proj.status === 'active' ? 'success' : 'info', content: `  Status   : ${proj.status.toUpperCase()}` },
          { type: 'warning', content: `  Stars    : ${'★'.repeat(Math.min(proj.stars, 30))} (${proj.stars})` },
          { type: 'text', content: `  Tags     : [${proj.tags.join('] [')}]` },
          { type: 'text', content: '' },
          { type: 'text', content: '  DESCRIPTION:' },
          { type: 'text', content: `    ${proj.description}` },
          { type: 'text', content: '' },
          { type: 'text', content: '  HIGHLIGHTS:' },
          ...proj.highlights.map(h => ({ type: 'success' as const, content: `    ${h}` })),
          { type: 'text', content: '' },
          { type: 'info', content: `  GitHub: ${proj.link}` },
        ];
      }
      if (args[0] === 'readme' || args[0] === 'readme.md') {
        return [
          { type: 'text', content: '# Bd-Mutant7 — Cybersecurity Portfolio' },
          { type: 'text', content: '' },
          { type: 'text', content: 'Welcome to my interactive terminal portfolio.' },
          { type: 'text', content: 'This interface simulates a Unix terminal environment.' },
          { type: 'text', content: '' },
          { type: 'text', content: 'Type "help" for available commands.' },
        ];
      }
      return [{ type: 'error', content: `cat: '${args.join(' ')}': No such file or directory\nTry: cat project <id>, cat readme` }];

    case 'skills':
    case 'skill': {
      const outputs: CommandOutput[] = [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║                 SKILL MATRIX                         ║\n╚══════════════════════════════════════════════════════╝' },
      ];
      for (const [category, items] of Object.entries(SKILLS)) {
        outputs.push({ type: 'info', content: `\n  ${category.toUpperCase()}:` });
        for (const { name, level } of items) {
          const filled = Math.round(level / 5);
          const empty = 20 - filled;
          const bar = '█'.repeat(filled) + '░'.repeat(empty);
          const label = name.padEnd(30);
          outputs.push({
            type: level >= 80 ? 'success' : level >= 60 ? 'info' : 'warning',
            content: `  ${label} [${bar}] ${level}%`,
          });
        }
      }
      return outputs;
    }

    case 'ctf': {
      const outputs: CommandOutput[] = [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║             CTF COMPETITION HISTORY                  ║\n╚══════════════════════════════════════════════════════╝' },
        { type: 'text', content: '  COMPETITION                    RESULT        CATEGORY' },
        { type: 'text', content: '  ─────────────────────────────────────────────────────' },
      ];
      CTF_CHALLENGES.forEach(c => {
        outputs.push({
          type: 'success',
          content: `  ${c.name.padEnd(32)} ${c.result.padEnd(14)} ${c.category}`,
        });
      });
      outputs.push({ type: 'text', content: '' });
      outputs.push({ type: 'info', content: '  Platform profiles:' });
      outputs.push({ type: 'text', content: '    HackTheBox   : https://app.hackthebox.com' });
      outputs.push({ type: 'text', content: '    TryHackMe    : https://tryhackme.com' });
      outputs.push({ type: 'text', content: '    CTFtime       : https://ctftime.org' });
      return outputs;
    }

    case 'certs':
    case 'certifications': {
      const outputs: CommandOutput[] = [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║           CERTIFICATIONS & LEARNING PATH             ║\n╚══════════════════════════════════════════════════════╝' },
      ];
      CERTIFICATIONS.forEach(cert => {
        const filled = Math.round(cert.progress / 5);
        const empty = 20 - filled;
        const bar = '█'.repeat(filled) + '░'.repeat(empty);
        const type = cert.status === 'completed' ? 'success' : cert.status === 'studying' ? 'warning' : 'text';
        outputs.push({
          type: type as CommandOutput['type'],
          content: `  ${cert.name.padEnd(35)} [${bar}] ${cert.progress}% — ${cert.status.toUpperCase()}`,
        });
      });
      outputs.push({ type: 'text', content: '' });
      outputs.push({ type: 'info', content: '  LEARNING ROADMAP:' });
      outputs.push({ type: 'text', content: '  Security+ → CEH → OSCP → CRTE → OSED' });
      return outputs;
    }

    case 'topics':
    case 'topic':
      return [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║          CYBERSECURITY KNOWLEDGE BASE                ║\n╚══════════════════════════════════════════════════════╝' },
        { type: 'text', content: '  Available topics (use: learn <topic>):' },
        { type: 'text', content: '' },
        { type: 'success', content: '  owasp          ─ OWASP Top 10 vulnerabilities' },
        { type: 'warning', content: '  xss            ─ Cross-Site Scripting deep dive' },
        { type: 'warning', content: '  sqli           ─ SQL Injection techniques' },
        { type: 'info', content: '  recon          ─ Reconnaissance techniques' },
        { type: 'info', content: '  crypto         ─ Cryptography fundamentals' },
        { type: 'info', content: '  netpentesting  ─ Network penetration testing' },
      ];

    case 'learn': {
      if (!args[0]) {
        return [
          { type: 'error', content: 'Usage: learn <topic>' },
          { type: 'text', content: 'Type "topics" to see available topics.' },
        ];
      }
      const topic = CYBER_TOPICS[args[0]];
      if (!topic) {
        return [
          { type: 'error', content: `learn: '${args[0]}': Topic not found` },
          { type: 'text', content: 'Type "topics" to see available topics.' },
        ];
      }
      return [
        { type: 'ascii', content: `╔══════════════════════════════════════════════════════╗\n║  ${topic.title.toUpperCase().substring(0, 50).padEnd(50)}  ║\n╚══════════════════════════════════════════════════════╝` },
        ...topic.content.map(line => ({
          type: (line.startsWith('✓') ? 'success' : line.startsWith('✗') ? 'error' : line.startsWith('⚠') ? 'warning' : 'text') as CommandOutput['type'],
          content: `  ${line}`,
        })),
      ];
    }

    case 'contact':
      return [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║                 CONTACT INTERFACE                    ║\n╚══════════════════════════════════════════════════════╝' },
        { type: 'text', content: '' },
        { type: 'success', content: '  GitHub     : https://github.com/Bd-Mutant7' },
        { type: 'info', content: '  Email      : [use GitHub for contact]' },
        { type: 'text', content: '' },
        { type: 'text', content: '  ─────────────────────────────────────────────' },
        { type: 'text', content: '  Open for:' },
        { type: 'success', content: '    ✓ Collaboration on security projects' },
        { type: 'success', content: '    ✓ CTF team formation' },
        { type: 'success', content: '    ✓ Bug bounty partnerships' },
        { type: 'success', content: '    ✓ Mentorship & learning exchanges' },
        { type: 'text', content: '' },
        { type: 'warning', content: '  ⚠ Bug reports: Responsible disclosure only.' },
        { type: 'warning', content: '    Do NOT test without authorization.' },
      ];

    case 'social':
      return [
        { type: 'ascii', content: '╔══════════════════════════════════════════════════════╗\n║                   SOCIAL LINKS                       ║\n╚══════════════════════════════════════════════════════╝' },
        { type: 'success', content: '  GitHub     : https://github.com/Bd-Mutant7' },
        { type: 'info', content: '  HackTheBox  : https://app.hackthebox.com' },
        { type: 'info', content: '  TryHackMe   : https://tryhackme.com' },
        { type: 'text', content: '  CTFtime     : https://ctftime.org' },
      ];

    case 'matrix':
      return [{ type: 'success', content: '[MATRIX] Toggle matrix rain effect — click anywhere to toggle', content2: 'MATRIX_TOGGLE' } as CommandOutput & { content2: string }];

    case 'clear':
      return [{ type: 'text', content: 'CLEAR_TERMINAL' }];

    case 'uname':
      return [{ type: 'text', content: 'Linux bd-mutant7 5.15.0-security #1 SMP PREEMPT CyberOS GNU/Linux x86_64' }];

    case 'date':
      return [{ type: 'text', content: new Date().toString() }];

    case 'pwd':
      return [{ type: 'text', content: '/home/bd-mutant7/portfolio' }];

    case 'echo':
      return [{ type: 'text', content: args.join(' ') || '' }];

    case 'man':
      return [
        { type: 'info', content: `No manual entry for ${args[0] || 'this command'}` },
        { type: 'text', content: 'Try "help" for available commands.' },
      ];

    case 'nmap':
      return [
        { type: 'warning', content: 'Starting Nmap 7.94 — https://nmap.org' },
        { type: 'text', content: 'Note: This is a portfolio, not an actual scanner 😄' },
        { type: 'text', content: 'Use: learn recon — for real nmap techniques' },
      ];

    case 'ping':
      return [
        { type: 'success', content: `PING ${args[0] || 'localhost'} 56(84) bytes of data.` },
        { type: 'text', content: '64 bytes from bd-mutant7.sh: icmp_seq=1 ttl=64 time=0.1 ms' },
        { type: 'text', content: '64 bytes from bd-mutant7.sh: icmp_seq=2 ttl=64 time=0.1 ms' },
        { type: 'info', content: '2 packets transmitted, 2 received, 0% packet loss' },
      ];

    case 'ifconfig':
    case 'ip':
      return [
        { type: 'text', content: 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500' },
        { type: 'info', content: '        inet 10.10.x.x  netmask 255.255.0.0  broadcast 10.10.255.255' },
        { type: 'text', content: '        inet6 fe80::1  prefixlen 64  scopeid 0x20<link>' },
        { type: 'warning', content: '        [IP redacted for security]' },
      ];

    case 'history':
      return [
        { type: 'text', content: '    1  whoami' },
        { type: 'text', content: '    2  ls projects' },
        { type: 'text', content: '    3  cat project webscanner' },
        { type: 'text', content: '    4  learn owasp' },
        { type: 'text', content: '    5  skills' },
        { type: 'text', content: '    6  ctf' },
        { type: 'text', content: '    7  contact' },
      ];

    default:
      return [
        { type: 'error', content: `bash: ${cmd}: command not found` },
        { type: 'text', content: 'Type "help" to see available commands.' },
      ];
  }
}
