import type { CommandOutput } from '../data/terminalData';

interface OutputLineProps {
  output: CommandOutput;
}

const colorMap: Record<string, string> = {
  text: 'text-terminal-white',
  success: 'text-terminal-green terminal-glow',
  error: 'text-terminal-red red-glow',
  warning: 'text-terminal-yellow yellow-glow',
  info: 'text-terminal-cyan cyan-glow',
  ascii: 'text-terminal-green terminal-glow',
  html: 'text-terminal-white',
  table: 'text-terminal-white',
};

export function OutputLine({ output }: OutputLineProps) {
  const color = colorMap[output.type] || 'text-terminal-white';

  if (output.type === 'ascii') {
    return (
      <pre className={`text-terminal-green terminal-glow text-xs leading-tight overflow-x-auto`}>
        {output.content}
      </pre>
    );
  }

  return (
    <div className={`text-sm leading-relaxed whitespace-pre-wrap break-all ${color}`}>
      {output.content}
    </div>
  );
}
