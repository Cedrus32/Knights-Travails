import { useEffect } from 'react';

function generateGrid(className) {
    let grid = [];
    for (let y = 0; y < 8; y++) {
        grid.push([]);
        for (let x = 0; x < 8; x++) {
            let color = '';
            if (className === 'base') {
                color = '';
                if (y === 0 || y % 2 === 0) {
                    // light-dark row
                    if (x === 0 || x % 2 === 0) {
                        color = 'light';
                    } else {
                        color = 'dark';
                    }
                } else {
                    // dark-light row
                    if (x === 0 || x % 2 === 0) {
                        color = 'dark';
                    } else {
                        color = 'light';
                    }
                }
            }
            grid[y].push({id: `${x}${y}`, color: color});
        }
    }
    console.log(grid);
    return (
        <div className={className}>
            {grid.map((row, i) => (
                <div key={i} className={'row'}>
                    {row.map(cell => (
                        <div key={cell.id} data-id={cell.id} className={cell.color}></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

const Gameboard = () => {
    console.log('render: Gameboard');
    useEffect(() => {
        console.log('mount: Gameboard');
    });

    return (
        <section aria-label='game board'>
            {generateGrid('base')}
            <div className='tray'></div>
            {generateGrid('ui')}
        </section>
    )
};

export default Gameboard;
