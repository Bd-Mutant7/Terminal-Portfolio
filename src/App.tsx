import { useState, useEffect } from 'react';
import { Terminal } from './components/Terminal';
import { BootSequence } from './components/BootSequence';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Allow skipping boot with any keypress
    const skip = () => {
      if (booting) {
        setBooting(false);
        setReady(true);
      }
    };
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('click', skip, { once: true });
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('click', skip);
    };
  }, [booting]);

  const handleBootComplete = () => {
    setBooting(false);
    setReady(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-terminal-bg">
      {booting && <BootSequence onComplete={handleBootComplete} />}
      {ready && <Terminal />}
    </div>
  );
}
