import { useEffect } from "react";
import PlayerPanel from "./PlayerPanel";

function Dashboard(props) {

    
        
    /* useEffect(() => {
        let date = new Date();
        let interval = setInterval(function(){
            props.setMinutes(date.getMinutes() - props.startTime.getMinutes());
            props.setSeconds(date.getSeconds() - props.startTime.getSeconds());
        }, 1000)
        return () => clearInterval(interval);
    }, []) */
        


    function dynamicJSX(){
        if(props.numPlayers < 2){
            /* let start = new Date();
            props.setStartTime(start); */
            return(
                <>
                    {/* <div>{props.minutes}:{props.seconds}</div> */}
                    <div>Time</div>
                    <div>Moves</div>
                </>
            )
        } else {
            let panels = [];
            for(let x = 0; x < props.numPlayers; x++){
                panels.push(<PlayerPanel player={props.players[x]} score={props.playerScores[x]} />);
            }
            return (
                <>
                    {panels}
                </>
            )
        }
    }

    
    return(
            <div className="Dashboard">
                {dynamicJSX()}
            </div>
        )
}

export default Dashboard;