import React, {useState} from 'react';

import utils from '../../utils';
import PuzzleGridOptions from './puzzleGridOptions';
import PuzzleRenderer from './puzzleRenderer';

const { getRandomNumberList } = utils;

const PuzzleSlider = () => {
    const [puzzleSettings, setPuzzleSettings] = useState({rows: 4, cols: 4});
  
    const onNewGameCreation = (puzzleOptions) => {
        setPuzzleSettings({...puzzleOptions});
    };

    return (
        <>
            <PuzzleGridOptions onNewGame={onNewGameCreation} />
            <PuzzleRenderer
                items={getRandomNumberList(puzzleSettings.rows, puzzleSettings.cols)}
                rows={puzzleSettings.rows} columns={puzzleSettings.cols}
            />
        </>
    );
};

export default PuzzleSlider;
