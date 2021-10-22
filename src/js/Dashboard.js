import PlayerPanel from "./PlayerPanel";

function Dashboard(props) {

    let JSX;

    if(props.numPlayers < 2){
        JSX =
        <>
            <div>Time</div>
            <div>Moves</div>
        </>
    } else {
        let panels = [];
        for(let x = 0; x < props.numPlayers; x++){
            panels.push(<PlayerPanel />);
        }
        JSX = 
        <>
            {panels}
        </>
    }
    
    return(
            <div className="Dashboard">
                {JSX}
            </div>
        )
}

export default Dashboard;