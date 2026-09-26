export default function GameStatus({ currentPlayer, turn }) {
    return (
        <div className="game-status">
            <p>Turno de: {currentPlayer}</p>
            <p>Movimiento nº: {turn}</p>
        </div>
    );
}