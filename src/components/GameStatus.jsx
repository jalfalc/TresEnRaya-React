export default function GameStatus({ currentPlayer, turn, winner}) {
    return (
        <div className="game-status">
            <p>Turno de: {currentPlayer}</p>
            {winner && <p>Ganador: {winner}</p>}
        </div>
    );
}