import './App.css'
import Board from './components/Board'
import Title from './components/Title'
import GameControls from './components/GameControls'
import GameStatus from './components/GameStatus'
function App() {

  return (
    <div className="app">
      <Title type="h1" value="TRES EN RAYA" />
      <GameStatus />
      <Board />
      <GameControls />
    </div>
  )
}

export default App
