import { useEffect } from 'react';
import '../styles/gameboard.css';

function generateGrid(className) {
    let grid = [];
    for (let y = 0; y < 8; y++) {
        grid.push([]);
        for (let x = 0; x < 8; x++) {
            let classNames = 'cell';
            if (className === 'base') {
                // console.log(classNames);
                if (y === 0 || y % 2 === 0) {
                    // light-dark row
                    if (x === 0 || x % 2 === 0) {
                        classNames = classNames + ' light';
                    } else {
                        classNames = classNames + ' dark';
                    }
                } else {
                    // dark-light row
                    if (x === 0 || x % 2 === 0) {
                        classNames = classNames + ' dark';
                    } else {
                        classNames = classNames + ' light';
                    }
                }
            }
            grid[y].push({id: `${x}${y}`, classNames: classNames});
        }
    }

    // console.log(grid);
    return (
        <div className={className}>
            {grid.map((row, i) => (
                <div key={i} className={'row'}>
                    {row.map(cell => (
                        <div key={cell.id} data-id={cell.id} className={cell.classNames}></div>
                        ))}
                </div>
            ))}
        </div>
    )
}

// NOTE: try to work with a single grid and knight image rather than the original 2 grids and 1 tray

const Gameboard = () => {
    console.log('render: Gameboard');
    useEffect(() => {
        console.log('mount: Gameboard');
    });

    return (
        <section id='board' aria-label='game board'>
            {generateGrid('base')}
        </section>
    )
};

export default Gameboard;
