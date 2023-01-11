function buildTree(startCoord) {    // ! old
    class Tree {
        constructor(node = null) {
            this.root = node;
        }
    }
    class Node {
        constructor(coord = null, level = null) {
            this.coord = coord;
            this.level = level;
            this.nextMoves = [];
        }
    }

    function makeNodeList(coord, level = 0) {   // ! remove level limit... create node list after each move
        let root = new Node(coord, level);
        level++;
        if (level === 10) {
            return root;
        } else {
            let nextMoves = getNextMoves(coord);
            for (let i = 0; i < (nextMoves.length); i++) {
                let childNode = makeNodeList(nextMoves[i], level);
                root.nextMoves.push(childNode);
            }
        }
        return root;
    }
    function getNextMoves(coord) {
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

        // ! use gameboard to determine valid moves
        for (let i = 0; i < (moveOperations.length); i++) {
            let possibleX = moveOperations[i][0];
            let possibleY = moveOperations[i][1];
            if (possibleX > 0 && possibleX < 7 && possibleY > 0 && possibleY < 7) {
                moves.push([possibleX, possibleY]);
            }
        }

        return moves;
    }

    let list = makeNodeList(startCoord);
    let tree = new Tree(list);
    return tree;
}

function _findShortestPath(startCoord, endCoord) {  // ! old
    let tree = buildTree(startCoord);
    console.log(tree);
    let shortestPath;

    function traverse(node, endCoord) {
        // ^ make queue, push startMove to queue
        // ^ while there are items in the queue...
            // ^ shift currentMove from queue
            // ^ if currentMove === endMove...
                // ^ save as shortestPath
                // ^ clear queue
                // ^ return
            // ^ else... (move to next level)
                // ^ increase steps
                // ^ calculate nextMoves
                // ^ push nextMoves to queue

        // add current move to path
        path[1].push(`[${node.coord}]`);

        // if current move === end move, save if shortest
        if (node.coord[0] === endCoord[0] && node.coord[1] === endCoord[1]) {
            saveIfShortest(path);
            path = [];
            return;

        // else if no next moves (end of moves), reset path
        } else if (node.nextMoves.length === 0) {
            console.log('*** reach end of moves ***')
            path = [];
            return;

        // else, traverse to next moves
        } else {
            for (let i = 0; i < (node.nextMoves.length); i++) {
                path[0]++;
                traverse(node.nextMoves[i], endCoord, path)
            }
        }
    }
    function saveIfShortest(path) {
        if (shortestPath === undefined || path[0] < shortestPath[0]) {
            console.log('** update shortestPath **')
            shortestPath = path;
            console.log(`${shortestPath[0]} [${shortestPath[1]}]`)
        }
        return;
    }

    traverse(tree.root, endCoord);
    // display shortest path
};

// TODO write script that makes gameboard and knight
// TODO consider all possible moves the knight could make as children in a tree
// TODO use breadth-first search to find shortest path
// TODO write script to traverse moves to find shortest path

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
    // for (let i = 0; i < (moveOperations.length); i++) {
    //     let possibleX = moveOperations[i][0];
    //     let possibleY = moveOperations[i][1];
    //     if (possibleX > 0 && possibleX < 7 && possibleY > 0 && possibleY < 7) {
    //         moves.push([possibleX, possibleY]);
    //     }
    // }
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