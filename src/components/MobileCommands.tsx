interface MobileCommandsProps {
  onCommand: (cmd: string) => void;
}

const QUICK_CMDS = [
  { label: 'help', cmd: 'help' },
  { label: 'whoami', cmd: 'whoami' },
  { label: 'projects', cmd: 'ls projects' },
  { label: 'skills', cmd: 'skills' },
  { label: 'ctf', cmd: 'ctf' },
  { label: 'learn xss', cmd: 'learn xss' },
  { label: 'contact', cmd: 'contact' },
  { label: 'clear', cmd: 'clear' },
];

export function MobileCommands({ onCommand }: MobileCommandsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-4 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
      {QUICK_CMDS.map(({ label, cmd }) => (
        <button
          key={cmd}
          onClick={() => onCommand(cmd)}
          className="shrink-0 text-xs px-3 py-1.5 border border-terminal-border text-terminal-dim hover:border-terminal-green hover:text-terminal-green transition-colors duration-200 rounded-sm font-mono"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
