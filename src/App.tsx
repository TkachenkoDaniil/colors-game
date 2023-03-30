import { useEffect, useState, memo } from 'react';

import ColorLegend from './components/ColorLegend';
import GameMatrix from './components/GameMatrix';
import './App.css';

interface GameSettings {
  userId: string,
  width: number,
  height: number,
  maxMoves: number,
  target: Array<number>
}

const mockedLegend: GameSettings = {
  userId: '2afb13',
  width: 3,
  height: 2,  
  maxMoves: 8,
  target: [0, 0, 255],
};

const App = () => {
  const [gameSettings, setGameSettings] = useState<GameSettings>();

  useEffect(() => {
    setGameSettings(mockedLegend);
  }, []);

  return (
    <div className="App">
      {
        gameSettings != null && (
          <>
            <ColorLegend
              userId={gameSettings.userId}
              maxMoves={gameSettings.maxMoves}
              target={gameSettings.target}
            ></ColorLegend>
            <GameMatrix
              height={gameSettings.height}
              width={gameSettings.width}
            />
          </>
        )
      }
    </div>
  );
}

export default memo(App);
