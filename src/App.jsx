import './App.css'
import Board from './components/Board'
import Title from './components/Title'
import GameControls from './components/GameControls'
import GameStatus from './components/GameStatus'
import { useState } from 'react'
function App() {
  let [turn, setTurn] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function changePlayer() {
    const MAX_TURN = 9

    if(turn < 9) {
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
      <GameStatus currentPlayer={currentPlayer} turn={turn}/>
      <Board onChangePlayer={changePlayer}/>
      <GameControls />
    </div>
  )
}

export default App
