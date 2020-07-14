/**
 * 
 * Fisher-Yates Algorithm (Modern way)
 * TimeComplexity - O(n)
 * Space Complexity - O(1)
 * 
 * Algorithm:
 * Shuffels the Array by picking the random index of the Array and 
 * swap the current index element with random index element.
 * And it iterate from the right to left of the array.
 * 
 * 
 * @param {*} numArray - Array of sorted numbers
 * @returns shuffledArray
 * 
 */
const shuffleAnArray = (numArray) => {
    for (let i = numArray.length - 1; i > 0; i--) {
        // generate random index pick
        const randomIndexToBePick = Math.floor(Math.random() * (i + 1));

        // swap the items
        /**
         * ES6 Swapping [i, j] = [j, i];
         */
        [numArray[i], numArray[randomIndexToBePick]] = [numArray[randomIndexToBePick], numArray[i]];
    }

    return numArray;
};

/**
 * 
 * @param {number} rows 
 * @param {number} cols 
 *
 */
const getRandomNumberList = (rows, cols) => {
    const totalRandomArraySize = rows * cols - 1; // leaving one entry for empty space
    const randomNumbersArray = [];

    for (let i = 0; i < totalRandomArraySize; i++) {
        randomNumbersArray.push(i+1);
    }

    return [...shuffleAnArray(randomNumbersArray), ''];
};

const isListInOrder = (orderedList) => {
    const updatedOrderedList = [...orderedList];
    updatedOrderedList.splice(orderedList.length - 1, 1); // after removing empty space from the array
    console.log(updatedOrderedList);
    for (let i = 0; i < updatedOrderedList.length - 1; i++) {
        
        if (updatedOrderedList[i] === '' || updatedOrderedList[i] >= updatedOrderedList[i+1]) {
            return false;
        }
    }

    return true;
};

export default {
    getRandomNumberList,
    isListInOrder
};