function buildGameboard(size = 0) { // used to verify legal moves
    let gameboard = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let cell = [i, j];
            row.push(cell);
        }
        gameboard.push(row);
    }
    return gameboard;
}

function buildKnight() {    // holds path of moves (path === root)
    class Knight {
        constructor() {
            this.steps = null;
            this.path = null;
        }
    }

    let knight = new Knight();
    return knight;
}

function generateMove(coord, previous = null, step = 0) {   // creates links between moves (nodeList)
    class Move {
        constructor(coord, previous, step) {
            this.coord = coord;
            this.previous = previous;
            this.step = step;
        }
    }

    let move = new Move(coord, previous, step);
    return move;
}

function getNextMoves(coord, gameboard) {
    let x = coord[0];
    let y = coord[1];
    let moves = [];
    let moveOperations = [[x + 1, y - 2],
                          [x + 2, y - 1],
                          [x + 2, y + 1],
                          [x + 1, y + 2],
                          [x - 1, y + 2],
                          [x - 2, y + 1],
                          [x - 2, y - 1],
                          [x - 1, y - 2],
                         ]
    for (let i = 0; i < (moveOperations.length); i++) {
        let possibleX = moveOperations[i][0];
        let possibleY = moveOperations[i][1];
        gameboard.forEach(row => {
            row.forEach(cell => {
                if (possibleX === cell[0] && possibleY === cell[1]) {
                    moves.push(cell);
                }
            });
        });
    }
    return moves;
}

function formatPath(pathList) {
    let coordArray = [];
    let step = pathList.step;
    while (step >= 0) {
        coordArray.splice(0, 0, pathList.coord);
        pathList = pathList.previous;
        step--;
    }
    let path = '[' + coordArray.join('], [') + ']';
    return path;
}

function findShortestPath(startCoord, endCoord) {
    let _Gameboard = buildGameboard(8);
    let _Knight = buildKnight();

    // instantiate queue
    let queue = [];
    queue.push(generateMove(startCoord));

    // traverse queue
    while (queue.length !== 0) {
        let currentMove = queue.shift();
        // check current move
        if (currentMove.coord[0] === endCoord[0] && currentMove.coord[1] === endCoord[1]) {
            _Knight.path = currentMove; // redundant, maybe needed when implementing UI?
            _Knight.steps = currentMove.step; // redundant, maybe needed when implementing UI?
            let path = formatPath(_Knight.path);
            console.log(`*** You reached the end in ${_Knight.steps} steps. Here is your path:`)
            console.log(path);
            queue = [];
            return;
        // go to next moves
        } else {
            let nextMoves = getNextMoves(currentMove.coord, _Gameboard);
            nextMoves.forEach(move => {
                queue.push(generateMove(move, currentMove, currentMove.step + 1));
            });
        }
    }
}

findShortestPath([0, 0], [3, 4]);