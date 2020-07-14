import React, {useState} from 'react';

const PuzzleSettings = ({onNewGame}) => {
    const [cols, setCols] = useState(4);
    const [rows, setRows] = useState(4);

    const onColsChange = (evt) => {
        setCols(Number(evt.target.value));
    }
    const onRowsChange = (evt) => {
        setRows(Number(evt.target.value));
    }

    const onNewGameButtonClick = () => {
        onNewGame({rows, cols});
    }
    return (
        <div className='puzzle-settings-form'>
            <input type='number' min='0' value={rows} placeholder='rows' onChange={onRowsChange} />
            <input type='number' min='0' value={cols} placeholder='cols' onChange={onColsChange} />
            <button onClick={onNewGameButtonClick}>New Game</button>
        </div>
    );
};

export default PuzzleSettings;