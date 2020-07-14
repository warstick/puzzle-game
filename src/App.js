import React, {useState} from 'react';
import './App.css';
import utils from './utils';
import PuzzleSettings from './components/settings';
import PuzzleRenderer from './components/puzzleRenderer';

const { getRandomNumberList } = utils;

function App() {
  const [puzzleSettings, setPuzzleSettings] = useState({rows: 4, cols: 4});
  
  const onNewGameCreation = (puzzleOptions) => {
    setPuzzleSettings({...puzzleOptions});
  };

  return (
    <div className="App">
      <h2>Welcome to Puzzle Game</h2>
      <PuzzleSettings onNewGame={onNewGameCreation} />
      <PuzzleRenderer
        items={getRandomNumberList(puzzleSettings.rows, puzzleSettings.cols)}
        rows={puzzleSettings.rows} columns={puzzleSettings.cols}
      />
    </div>
  );
}

export default App;
