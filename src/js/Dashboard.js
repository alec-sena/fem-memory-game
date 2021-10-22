import PlayerPanel from "./PlayerPanel";

function Dashboard(props) {
    const numPlayers = props.numPlayers;
    const players = props.players;

    if(numPlayers === 1){
        return(
            <div className="Dashboard">
                <div>Time</div>
                <div>Moves</div>
            </div>
        )
    } else {
        return(
            <div className="Dashboard">
                {players.map(player => 
                    <PlayerPanel player={player} />
                )}
            </div>
        )
    }

}

export default Dashboard;