/**
 * Responsible for Moving number around the grid
 */
import React, { useState, useEffect } from 'react';
import utils from '../../../utils';
import './puzzleRenderer.css';

const { isListInOrder } = utils;

const PuzzleRenderer = ({ items, rows, columns }) => {
    const [currentItems, setCurrentItems] = useState(items);
    let [moves, setMoves] = useState(0);

    useEffect(()=> {
        // when there is complete new game, we need to reset the state of the component
        setCurrentItems([...items]);
        setMoves(0);
    }, [items]);

    // Divide the items by rows x Columns for arrnaging the data into Grid.
    const getItemsByRowsByColumns = () => {
        const data = [];
        const clonedCurrentItems = [...currentItems];
        for (let i = 0; i < rows; i++) {
            data.push(clonedCurrentItems.splice(0, columns));
        }

        return data;
    };

    /**
     * Click Handler for puzzle number. Based on Params it will move the boxes
     * @param {Object} param0
     */
    const onPuzzleNumberClick = ({ item, colIndex, rowIndex }) => {
        // finding surrounding elements of the clicked element
        const topElement = currentItems[(rowIndex - 1) * columns + colIndex];
        const bottomElement = currentItems[(rowIndex + 1) * columns + colIndex];
        const leftElement = currentItems[rowIndex * columns + (colIndex - 1)];
        const rightElement = currentItems[rowIndex * columns + (colIndex + 1)];

        // swap the empty location with the clicked event based on the elemnt position
        if (topElement === '') {
            [currentItems[(rowIndex - 1) * columns + colIndex], currentItems[rowIndex * columns + colIndex]] = [item, ''];
        }

        if (bottomElement === '') {
            [currentItems[(rowIndex + 1) * columns + colIndex], currentItems[rowIndex * columns + colIndex]] = [item, ''];
        }

        if (leftElement === '') {
            [currentItems[rowIndex * columns + (colIndex - 1)], currentItems[rowIndex * columns + colIndex]] = [item, ''];
        }

        if (rightElement === '') {
            [currentItems[rowIndex * columns + (colIndex + 1)], currentItems[rowIndex * columns + colIndex]] = [item, ''];
        }

        // update state only when there is a change
        if ([topElement, bottomElement, leftElement, rightElement].indexOf('') >= 0) {
            setMoves(++moves); // increasing the move
            setCurrentItems([...currentItems]);
        }
    };

    return (
        <div>
            No of Moves: {moves}

            <div className='puzzle-render-container'>
                {isListInOrder(currentItems) && 
                    <div className='success-message' style={{height: rows*60, width: columns*60 }}>
                        Hurray.!! You got the puzzle in {moves} moves.
                    </div>
                }
                {
                    getItemsByRowsByColumns().map((columns, rowIndex) => {
                        return (
                            <div key={`puzzle-number-${rowIndex}`} className='puzzle-row'>
                                {
                                    columns.map((item, colIndex) => (
                                        <div
                                            key={`puzzle-number-${rowIndex}-${colIndex}`}
                                            onClick={!!item && !isListInOrder(currentItems) ? () => onPuzzleNumberClick({ item, rowIndex, colIndex }) : null}
                                            className={`puzzle-col ${!!item ? item % 2 === 0 ? 'even' : 'odd' : 'no-content'}`}
                                        >
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PuzzleRenderer;