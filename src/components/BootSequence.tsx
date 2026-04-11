import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: 'BIOS v2.4.1 — CyberOS Security Edition', delay: 0, type: 'dim' },
  { text: 'Initializing secure boot environment...', delay: 300, type: 'dim' },
  { text: '[  OK  ] TPM 2.0 integrity check passed', delay: 600, type: 'success' },
  { text: '[  OK  ] Kernel modules loaded', delay: 900, type: 'success' },
  { text: '[  OK  ] Firewall rules applied (247 rules)', delay: 1100, type: 'success' },
  { text: '[ WARN ] No VPN tunnel detected — proceed with caution', delay: 1300, type: 'warning' },
  { text: '[  OK  ] Portfolio filesystem mounted (ext4)', delay: 1500, type: 'success' },
  { text: '[  OK  ] SSH hardening: PermitRootLogin no', delay: 1700, type: 'success' },
  { text: 'Loading cybersecurity portfolio...', delay: 2000, type: 'info' },
  { text: '', delay: 2200, type: 'dim' },
  { text: '████████████████████████████████ 100%', delay: 2800, type: 'progress' },
  { text: '', delay: 3000, type: 'dim' },
  { text: 'Welcome, operator. Clearance level: UNRESTRICTED', delay: 3200, type: 'success' },
];

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines(i + 1);
        if (line.type === 'progress') {
          // Animate progress bar
          let w = 0;
          const interval = setInterval(() => {
            w += 3;
            setProgressWidth(w);
            if (w >= 100) clearInterval(interval);
          }, 15);
          timers.push(interval as ReturnType<typeof setTimeout>);
        }
      }, line.delay);
      timers.push(t);
    });

    const completeTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 400);
    }, 3800);
    timers.push(completeTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const colorClass = (type: string) => {
    switch (type) {
      case 'success': return 'text-terminal-green terminal-glow';
      case 'warning': return 'text-terminal-yellow yellow-glow';
      case 'error': return 'text-terminal-red';
      case 'info': return 'text-terminal-cyan cyan-glow';
      case 'progress': return 'text-terminal-green terminal-glow';
      default: return 'text-terminal-dim';
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-terminal-bg flex items-center justify-center z-50 transition-opacity duration-400 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="w-full max-w-2xl px-8 py-12 font-mono">
        <div className="space-y-1">
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={`text-sm fade-in-up ${colorClass(line.type)}`}>
              {line.type === 'progress' ? (
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-terminal-muted h-4 relative overflow-hidden">
                    <div
                      className="h-full bg-terminal-green transition-all duration-100"
                      style={{ width: `${progressWidth}%` }}
                    />
                  </div>
                  <span>{progressWidth}%</span>
                </div>
              ) : (
                line.text
              )}
            </div>
          ))}
        </div>
        {visibleLines >= BOOT_LINES.length && (
          <div className="mt-6 text-terminal-dim text-xs animate-pulse">
            Press any key or wait...
          </div>
        )}
      </div>
    </div>
  );
}
