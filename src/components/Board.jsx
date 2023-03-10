import React from 'react'
import Square from './Square'

const Board = (props) => {

    function makeSquare(i)
    {
        return <Square value={props.squares[i]} onClick={()=>props.onClick(i)}/>
    }

  return (
    <main className="background">
        <section className="title">
            <h1>Tic Tac Toe</h1>
        </section>
        <section className="display">
            <span className="display-player playerX">{props.status}</span>
        </section>
        <section className="container">
            <div className="tile">{makeSquare(0)}</div>
            <div className="tile">{makeSquare(1)}</div>
            <div className="tile">{makeSquare(2)}</div>
            <div className="tile">{makeSquare(3)}</div>
            <div className="tile">{makeSquare(4)}</div>
            <div className="tile">{makeSquare(5)}</div>
            <div className="tile">{makeSquare(6)}</div>
            <div className="tile">{makeSquare(7)}</div>
            <div className="tile">{makeSquare(8)}</div>
        </section>
        <section className="controls">
            <button onClick={props.reset} id="reset">Reset</button>
        </section>
    </main>
  )
}

export default Board