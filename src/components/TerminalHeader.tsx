interface TerminalHeaderProps {
  matrixActive: boolean;
  onToggleMatrix: () => void;
}

export function TerminalHeader({ matrixActive, onToggleMatrix }: TerminalHeaderProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-terminal-border bg-terminal-surface select-none">
      {/* Traffic light dots */}
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
      </div>

      {/* Title */}
      <div className="flex-1 text-center">
        <span className="text-xs text-terminal-dim font-mono">
          bd-mutant7@portfolio: ~/cybersec
        </span>
      </div>

      {/* Matrix toggle */}
      <button
        onClick={onToggleMatrix}
        className={`text-xs font-mono px-2 py-0.5 border rounded-sm transition-colors ${
          matrixActive
            ? 'border-terminal-green text-terminal-green'
            : 'border-terminal-border text-terminal-dim'
        }`}
        title="Toggle matrix rain"
      >
        {matrixActive ? '[M]' : '[ ]'}
      </button>
    </div>
  );
}
