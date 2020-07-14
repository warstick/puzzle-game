/**
 * Responsible for taking dynamic values for rows and cols for the puzzle grid
 */
import React, {useState} from 'react';
import './puzzleGridOptions.css';

const defaultValue = {value: 4, isValid: true};

const PuzzleGridOptions = ({onNewGame}) => {
    const [puzzleGridOptions, setPuzzleGridOptions] = useState({rows: {...defaultValue}, cols: {...defaultValue}});

    // On number input change
    const onSettingsChange = (type, evt) => {
        setPuzzleGridOptions({
            ...puzzleGridOptions,
            [type]: {value: Number(evt.target.value), isValid: evt.target.validity.valid}
        })
    };

    // Creating new puzzle grid based on user grid options
    const onNewGameButtonClick = () => {
        const {rows, cols} = puzzleGridOptions;

        onNewGame({rows: rows.value, cols: cols.value});
    }

    // check for form validation
    const isValidForm = () => puzzleGridOptions.rows.isValid && puzzleGridOptions.cols.isValid;

    return (
        <div className='puzzle-settings-form'>
            <input type='number' min='3' value={puzzleGridOptions.rows.value} placeholder='rows' onChange={(evt) => onSettingsChange('rows', evt)} />
            <input type='number' min='3' value={puzzleGridOptions.cols.value} placeholder='cols' onChange={(evt) => onSettingsChange('cols', evt)} />
            <button disabled={!isValidForm()} onClick={isValidForm() ? onNewGameButtonClick : null}>New Game</button>
            {!isValidForm() && <p className='error-msg'>colums and rows values ust be greater than 3</p>}
        </div>
    );
};

export default PuzzleGridOptions;