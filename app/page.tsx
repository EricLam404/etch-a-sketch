'use client'

import Draggable from 'react-draggable';
import Canvas from "./components/canvas"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
        <h1>Etch a sketch</h1>
        <Draggable>
            <div>
                <Canvas/>
            </div>
        </Draggable>
    </main>
  )
}