import './App.css'
import Board from './components/Board'
import Title from './components/Title'
import GameControls from './components/GameControls'
import GameStatus from './components/GameStatus'
import { useState } from 'react'
function App() {

  const [squares, setSquares] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  const [turn, setTurn] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function handleClick( squareIndex ) {
    const MAX_TURN = 9

    if (squares[squareIndex]) return


    if(turn < 10) {
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares[squareIndex] = currentPlayer;
        return newSquares;
      })

      currentPlayer === "X"
      ? setCurrentPlayer("O")
      : setCurrentPlayer("X")
    }


    

    if(turn < MAX_TURN) {
      setTurn(turn + 1)
    }
    
  }

  return (
    <div className="app">
      <Title type="h1" value="TRES EN RAYA" />
      <GameStatus currentPlayer={currentPlayer} winner={winner} />
      <Board onChangePlayer={handleClick} currentPlayer={currentPlayer} squaresStatus={squares} />
      <GameControls />
    </div>
  )
}

export default App
