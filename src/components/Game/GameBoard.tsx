import React, { useState, useEffect } from 'react';
import {
  startGame,
  requestCellReveal,
  listenToEvents,
} from '../../utils/contracts';
import './GameBoard.css';

interface GameBoardProps {
  account: string;
  provider: any;
}

const GRID_SIZE = 8;

const GameBoard: React.FC<GameBoardProps> = ({ account, provider }) => {
  const [grid, setGrid] = useState<(number | null)[][]>(
    Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null)),
  );
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<
    'playing' | 'won' | 'lost' | null
  >(null);

  useEffect(() => {
    if (account && provider) {
      listenToEvents(updateGameState, handleGameEnd);
    }
  }, [account, provider]);

  // Update cell state
  const updateGameState = (x: number, y: number, value: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      newGrid[x][y] = value;
      return newGrid;
    });
  };

  // Handle game end
  const handleGameEnd = (win: boolean) => {
    setGameStatus(win ? 'won' : 'lost');
    setGameActive(false);
  };

  // Start game
  const handleStartGame = async () => {
    if (!account) return alert('Connect your wallet!');
    await startGame(account, provider);
    setGameActive(true);
    setGameStatus(null);
    setGrid(
      Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null)),
    );
  };

  // Cell click
  const handleCellClick = async (x: number, y: number) => {
    if (!gameActive) return alert('Start the game!');
    await requestCellReveal(account, provider, x, y);
  };

  return (
    <div className="game-container">
      <h2>Minesweeper</h2>
      {!gameActive && gameStatus === null && (
        <button className="start-button" onClick={handleStartGame}>
          Start Game
        </button>
      )}
      {gameStatus === 'won' && (
        <h2 className="game-status" style={{ color: 'green' }}>
          🎉 You won!
        </h2>
      )}
      {gameStatus === 'lost' && (
        <h2 className="game-status" style={{ color: 'red' }}>
          💥 You hit a mine!
        </h2>
      )}

      <div className="game-board">
        {grid.map((row, x) =>
          row.map((cell, y) => (
            <button
              key={`${x}-${y}`}
              className={`cell ${cell !== null ? 'revealed' : ''} ${cell === 1 ? 'mine' : cell === 0 ? 'safe' : ''}`}
              onClick={() => gameActive && handleCellClick(x, y)}
            >
              {cell === null ? '' : cell === 1 ? '💣' : '✔'}
            </button>
          )),
        )}
      </div>
    </div>
  );
};

export default GameBoard;
