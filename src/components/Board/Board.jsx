import { useState } from 'react';
import {getMoves} from '../../helper'
import './Board.css';
const Board = () => {
  const colTiles = Array(8).fill().map((x,i) => 8-i)
  const rowTiles = Array(8).fill().map((x,i) => i+1)
  const [Path, setPaths] = useState([]);
  const [Clicked, setClicked] = useState([-1,-1]);
  const getClass=(col,row)=>{
    return (col+row)%2==0?'--black-tile': '--white-tile'
  }
  const GetPath=(col,row)=>{
    const paths=getMoves(col,row);
    setClicked([col,row])
    setPaths(paths)
  }
  return (
    <div className="board">
      <div className="tiles">
        {
          colTiles.map((col,i)=>(
            rowTiles.map((row,j)=>{
              const isHighlighted = Path.some(([highlightedCol, highlightedRow]) => row === highlightedRow && col === highlightedCol);
              return(
              <div 
              key={row+col} 
              className={`${isHighlighted ? row===Clicked[1] && col===Clicked[0] ? "--clicked-color":"--path-color" : getClass(i,j)} cursor-pointer` } 
              onMouseEnter={()=>GetPath(col,row)} style={{color:'red'}}
              onMouseOut={()=>setPaths([])}
              ></div>
            )})
          ))
        }
      </div>
    </div>
  )
}

export default Board