import PlayerPanel from "./PlayerPanel";

function Dashboard(props) {

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
            </div>
        )
    }

}

export default Dashboard;