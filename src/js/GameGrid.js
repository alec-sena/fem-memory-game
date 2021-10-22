import PauseMenu from "./PauseMenu";
import GameOverMenu from "./GameOverMenu";
import Tile from "./Tile";

function GameGrid(props) {
    return (
      <div className="GameGrid">
        {props.tiles.map(tile => <Tile value={tile} />)}
      </div>
    );
  }
  
  export default GameGrid;