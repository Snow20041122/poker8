// Function to generate a valid Sudoku puzzle
function generateSudoku() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillBoard(board);
    removeNumbers(board);
    return board;
}

// Function to fill the Sudoku board with a valid solution
function fillBoard(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                let numbers = [...Array(9).keys()].map(n => n + 1);
                while (numbers.length > 0) {
                    let num = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (fillBoard(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Function to remove some numbers from the board to create the puzzle
function removeNumbers(board) {
    let numCellsToRemove = 40; // Number of cells to remove for the puzzle
    while (numCellsToRemove > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            numCellsToRemove--;
        }
    }
}

// Function to check if placing num in board[row][col] is valid
function isValid(board, row, col, num) {
    return !board[row].includes(num) &&
        !board.map(r => r[col]).includes(num) &&
        !getBox(board, row, col).includes(num);
}

// Function to get the 3x3 box that a cell belongs to
function getBox(board, row, col) {
    let box = [];
    let startRow = row - row % 3;
    let startCol = col - col % 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            box.push(board[r][c]);
        }
    }
    return box;
}

// Function to create the Sudoku board on the page
function createSudoku() {
    let board = generateSudoku();
    const table = document.getElementById('sudoku');
    table.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '1';
            input.max = '9';
            if (board[i][j] !== 0) {
                input.value = board[i][j];
                input.disabled = true;
            }
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Function to check the solution
function checkSolution() {
    const inputs = document.querySelectorAll('input');
    const solution = Array.from(inputs).map(input => parseInt(input.value) || 0);
    const grid = [];
    for (let i = 0; i < 9; i++) {
        grid.push(solution.slice(i * 9, (i + 1) * 9));
    }
    if (isValidSudoku(grid)) {
        alert('解答正確！父親節快樂！');
    } else {
        alert('解答錯誤。');
    }
}

// Function to validate the entire Sudoku grid
function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
        if (!isValidRow(board, i) || !isValidCol(board, i) || !isValidBox(board, i)) {
            return false;
        }
    }
    return true;
}

// Function to validate a row
function isValidRow(board, row) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
        const num = board[row][col];
        if (num !== 0 && seen.has(num)) {
            return false;
        }
        seen.add(num);
    }
    return true;
}

// Function to validate a column
function isValidCol(board, col) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
        const num = board[row][col];
        if (num !== 0 && seen.has(num)) {
            return false;
        }
        seen.add(num);
    }
    return true;
}

// Function to validate a 3x3 box
function isValidBox(board, box) {
    const seen = new Set();
    const startRow = 3 * Math.floor(box / 3);
    const startCol = 3 * (box % 3);
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            const num = board[row][col];
            if (num !== 0 && seen.has(num)) {
                return false;
            }
            seen.add(num);
        }
    }
    return true;
}

// Initialize the Sudoku game
createSudoku();
