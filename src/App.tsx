import { useEffect, useState } from 'react';
import { init } from './fhevmjs';
import './App.css';
import { Connect } from './components/Connect';
import GameBoard from './components/Game/GameBoard';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (window.fhevmjsInitialized) return;
    window.fhevmjsInitialized = true;
    init()
      .then(() => {
        setIsInitialized(true);
      })
      .catch((e) => {
        console.log(e);
        setIsInitialized(false);
      });
  }, []);

  if (!isInitialized) return null;

  return (
    <>
      <h1>FHEVM Minesweeper</h1>
      <Connect>
        {(account, provider) => (
          <>
            <GameBoard account={account} provider={provider} />
          </>
        )}
      </Connect>
      <p className="read-the-docs">
        <a href="https://docs.zama.ai/fhevm">
          See the documentation for more information
        </a>
      </p>
    </>
  );
}

export default App;
