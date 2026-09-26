import Square from './Square';
export default function Board({ onChangePlayer }) {

  return (
    <>
        <div className="board"> 
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
            <Square onClick={onChangePlayer}/>
        </div>    
    </>
  );
}