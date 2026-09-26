import Square from './Square';
export default function Board({ onChangePlayer, squaresStatus }) {

  return (
    <>
        <div className="board"> 
            <Square onClick={() => onChangePlayer(0)} value={squaresStatus[0]} />
            <Square onClick={() => onChangePlayer(1)} value={squaresStatus[1]} />
            <Square onClick={() => onChangePlayer(2)} value={squaresStatus[2]} />
            <Square onClick={() => onChangePlayer(3)} value={squaresStatus[3]} />
            <Square onClick={() => onChangePlayer(4)} value={squaresStatus[4]} />
            <Square onClick={() => onChangePlayer(5)} value={squaresStatus[5]} />
            <Square onClick={() => onChangePlayer(6)} value={squaresStatus[6]} />
            <Square onClick={() => onChangePlayer(7)} value={squaresStatus[7]} />
            <Square onClick={() => onChangePlayer(8)} value={squaresStatus[8]} />
        </div>    
    </>
  );
}