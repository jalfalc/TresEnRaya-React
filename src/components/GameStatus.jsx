export default function GameStatus({ currentPlayer }) {
    return (
        <div className="game-status">
            <p>Turno de: {currentPlayer}</p>
        </div>
    );
}