import { useState, useRef, useEffect, useCallback } from 'react';
import { TerminalInput } from './TerminalInput';
import { OutputLine } from './OutputLine';
import { TerminalHeader } from './TerminalHeader';
import { MobileCommands } from './MobileCommands';
import { processCommand } from '../utils/commandProcessor';
import { ASCII_BANNER, PROFILE } from '../data/terminalData';
import type { CommandOutput, TerminalLine } from '../data/terminalData';
import { useMatrixRain } from '../hooks/useMatrixRain';

function makeId() {
  return Math.random().toString(36).slice(2);
}

const WELCOME_LINES: CommandOutput[] = [
  { type: 'ascii', content: ASCII_BANNER },
  { type: 'info', content: `  ${PROFILE.username} | ${PROFILE.role}` },
  { type: 'text', content: `  ${PROFILE.location} | ${new Date().toLocaleString()}` },
  { type: 'text', content: '' },
  { type: 'text', content: '  ─────────────────────────────────────────────────────────' },
  { type: 'success', content: '  System: CyberOS 2.4.1 — Secure Shell Portfolio Interface' },
  { type: 'warning', content: '  Status: ONLINE — All systems operational' },
  { type: 'text', content: '  ─────────────────────────────────────────────────────────' },
  { type: 'text', content: '' },
  { type: 'info', content: '  Type "help" to see available commands.' },
  { type: 'text', content: '  Try: whoami | ls projects | learn owasp | skills | ctf' },
  { type: 'text', content: '' },
  { type: 'warning', content: '  ⚠ Tip: Use Tab for autocomplete, ↑↓ for history, Ctrl+L to clear.' },
  { type: 'text', content: '' },
];

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: makeId(), outputs: WELCOME_LINES, timestamp: new Date() },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { canvasRef, active: matrixActive, toggle: toggleMatrix } = useMatrixRain();

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }, 50);
  }, []);

  useEffect(() => { scrollToBottom(); }, [lines, scrollToBottom]);

  const handleCommand = useCallback((input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add to history
    setCmdHistory(prev => [...prev, trimmed]);

    const outputs = processCommand(trimmed);

    // Handle special signals
    if (outputs.some(o => o.content === 'CLEAR_TERMINAL')) {
      setLines([{ id: makeId(), outputs: WELCOME_LINES, timestamp: new Date() }]);
      return;
    }
    if (outputs.some(o => (o as CommandOutput & { content2?: string }).content2 === 'MATRIX_TOGGLE')) {
      toggleMatrix();
    }

    const newLine: TerminalLine = {
      id: makeId(),
      input: trimmed,
      outputs,
      timestamp: new Date(),
    };

    setLines(prev => [...prev, newLine]);
    scrollToBottom();
  }, [toggleMatrix, scrollToBottom]);

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden">
      {/* Matrix background */}
      <canvas ref={canvasRef} id="matrix-canvas" className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: matrixActive ? 0.06 : 0 }} />

      {/* CRT overlay */}
      <div className="crt fixed inset-0 z-10 pointer-events-none" />

      {/* Terminal window */}
      <div className="relative z-20 flex flex-col h-full border border-terminal-border bg-terminal-bg box-glow">
        <TerminalHeader matrixActive={matrixActive} onToggleMatrix={toggleMatrix} />

        {/* Mobile quick commands */}
        <div className="sm:hidden py-2 border-b border-terminal-border bg-terminal-surface">
          <MobileCommands onCommand={handleCommand} />
        </div>

        {/* Output area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-1 font-mono text-sm"
          onClick={() => document.querySelector<HTMLInputElement>('input[type="text"]')?.focus()}
        >
          {lines.map((line) => (
            <div key={line.id} className="fade-in-up">
              {/* Command echo */}
              {line.input && (
                <div className="flex items-center gap-2 mt-2 mb-1">
                  <span className="text-terminal-cyan shrink-0 text-xs sm:text-sm">bd-mutant7</span>
                  <span className="text-terminal-white text-xs sm:text-sm">@</span>
                  <span className="text-terminal-yellow text-xs sm:text-sm">portfolio</span>
                  <span className="text-terminal-white text-xs sm:text-sm">:~$</span>
                  <span className="text-terminal-green terminal-glow text-xs sm:text-sm">{line.input}</span>
                </div>
              )}
              {/* Outputs */}
              <div className="space-y-0.5 ml-0 sm:ml-2">
                {line.outputs.map((output, i) => (
                  <OutputLine key={i} output={output} />
                ))}
              </div>
            </div>
          ))}

          {/* Live input */}
          <div className="mt-2">
            <TerminalInput onSubmit={handleCommand} history={cmdHistory} />
          </div>
        </div>

        {/* Footer status bar */}
        <div className="shrink-0 flex items-center justify-between px-4 py-1.5 border-t border-terminal-border bg-terminal-surface text-xs font-mono text-terminal-dim">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span>SECURE</span>
            </span>
            <span>TLS 1.3</span>
          </span>
          <span className="hidden sm:block">
            Tab=autocomplete  ↑↓=history  Ctrl+L=clear  Ctrl+C=cancel
          </span>
          <span className="text-terminal-dim">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}
