import { useState, useRef, useCallback } from 'react';

interface TerminalInputProps {
  onSubmit: (cmd: string) => void;
  history: string[];
}

export function TerminalInput({ onSubmit, history }: TerminalInputProps) {
  const [value, setValue] = useState('');
  const [histIndex, setHistIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const SUGGESTIONS = [
    'help', 'whoami', 'ls projects', 'cat project webscanner', 'skills',
    'ctf', 'certs', 'contact', 'social', 'topics', 'learn owasp',
    'learn xss', 'learn sqli', 'learn recon', 'learn crypto',
    'learn netpentesting', 'matrix', 'banner', 'clear',
  ];

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(value);
      setValue('');
      setHistIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(histIndex + 1, history.length - 1);
      setHistIndex(newIndex);
      setValue(history[history.length - 1 - newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(histIndex - 1, -1);
      setHistIndex(newIndex);
      setValue(newIndex === -1 ? '' : history[history.length - 1 - newIndex] || '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = SUGGESTIONS.find(s => s.startsWith(value) && s !== value);
      if (match) setValue(match);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      onSubmit('clear');
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      setValue('');
      setHistIndex(-1);
    }
  }, [value, histIndex, history, onSubmit]);

  return (
    <div
      className="flex items-center gap-2 mt-1"
      onClick={() => inputRef.current?.focus()}
    >
      <span className="text-terminal-green terminal-glow select-none shrink-0">
        <span className="text-terminal-cyan">bd-mutant7</span>
        <span className="text-terminal-white">@</span>
        <span className="text-terminal-yellow">portfolio</span>
        <span className="text-terminal-white">:</span>
        <span className="text-terminal-cyan">~</span>
        <span className="text-terminal-white">$ </span>
      </span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => { setValue(e.target.value); setHistIndex(-1); }}
        onKeyDown={handleKeyDown}
        autoFocus
        autoComplete="off"
        autoCapitalize="none"
        spellCheck={false}
        className="flex-1 bg-transparent border-none outline-none text-terminal-green font-mono text-sm caret-terminal-green terminal-glow"
        aria-label="Terminal input"
        placeholder=""
      />
    </div>
  );
}
