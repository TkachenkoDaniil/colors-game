import React, { useEffect, useState } from 'react';

import ColorLegend from './components/ColorLegend'
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
  width: 10,
  height: 4,
  maxMoves: 8,
  target: [0, 255, 255],
};

const App = () => {
  const [gameSettings, setGameSettings] = useState<GameSettings>();

  useEffect(() => {
    setGameSettings(mockedLegend);
  }, []);

  return (
    <div className="App">
      <ColorLegend
          userId={gameSettings?.userId}
          maxMoves={gameSettings?.maxMoves}
          target={gameSettings?.target}
      ></ColorLegend>
    </div>
  );
}

export default App;
