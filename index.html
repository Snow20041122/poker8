<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>數獨遊戲</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 20px;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            border: 1px solid black;
        }
        input {
            width: 100%;
            height: 100%;
            text-align: center;
            border: none;
        }
    </style>
</head>
<body>
    <h1>數獨遊戲</h1>
    <table id="sudoku">
        <!-- 表格內容將由 JavaScript 填充 -->
    </table>
    <button onclick="checkSolution()">檢查解答</button>
    <script>
        const sudoku = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];

        function createSudoku() {
            const table = document.getElementById('sudoku');
            for (let i = 0; i < 9; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 9; j++) {
                    const cell = document.createElement('td');
                    const input = document.createElement('input');
                    input.type = 'number';
                    input.min = '1';
                    input.max = '9';
                    if (sudoku[i][j] !== 0) {
                        input.value = sudoku[i][j];
                        input.disabled = true;
                    }
                    cell.appendChild(input);
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
        }

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

        function isValidSudoku(board) {
            for (let i = 0; i < 9; i++) {
                if (!isValidRow(board, i) || !isValidCol(board, i) || !isValidBox(board, i)) {
                    return false;
                }
            }
            return true;
        }

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

        createSudoku();
    </script>
</body>
</html>
