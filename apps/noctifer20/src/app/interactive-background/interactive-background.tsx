import './interactive-background.module.css';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';
import { Cell, Universe } from '@noctifer20/game_of_life';
import { memory } from '@noctifer20/game_of_life/game_of_life_bg.wasm';

/* eslint-disable-next-line */
export interface InteractiveBackgroundProps {}

const CELL_SIZE = 5;
const DEAD_COLOR = '#000000';
const ALIVE_COLOR = '#FFFFFF';

const universe = Universe.new(
  Math.ceil(window.innerWidth / CELL_SIZE),
  Math.ceil(window.innerHeight / CELL_SIZE)
);
const width = universe.width();
const height = universe.height();

export function InteractiveBackground(props: InteractiveBackgroundProps) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    const ctx = canvas.current.getContext('2d')!;

    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const getIndex = (row: number, column: number) => {
      return row * width + column;
    };

    const drawCells = () => {
      const cellsPtr = universe.cells();
      const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

      ctx.beginPath();

      for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
          const idx = getIndex(row, col);

          ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

          ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }

      ctx.stroke();
    };

    const renderLoop = () => {
      universe.tick();

      drawCells();

      requestAnimationFrame(renderLoop);
    };
    drawCells();
    requestAnimationFrame(renderLoop);
  }, [canvas]);

  useEffect(() => {
    const mousemove = (evt: any) => {
      const rect = canvas.current!.getBoundingClientRect();
      const row = Math.floor((evt.clientY - rect.top) / CELL_SIZE);
      const column = Math.floor((evt.clientX - rect.left) / CELL_SIZE);

      universe.spawn(row, column);
    };
    window.addEventListener<'mousemove'>('mousemove', mousemove);
    return () => {
      window.removeEventListener<'mousemove'>('mousemove', mousemove);
    };
  }, []);
  return <canvas ref={canvas} />;
}

export default InteractiveBackground;
