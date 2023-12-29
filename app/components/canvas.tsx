'use client'

import { useState } from 'react';

export default function Canvas() {
    const [grid, setGrid] = useState<string[][]>(Array.from({ length: 16 }, () => Array(16).fill('')));

    const handleCellClick = (row: number, col: number) => {
        const newGrid = [...grid];
        newGrid[row][col] = 'X';
        setGrid(newGrid);
    };

    return (
        <div>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-5 h-5 border border-black ${cell === 'X' ? 'bg-black' : 'bg-white'}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                />
              ))}
            </div>
          ))}
        </div>
    );
  }