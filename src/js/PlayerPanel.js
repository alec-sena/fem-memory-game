function PlayerPanel(props){
    return (
        <div className="PlayerPanel">
            <p>{props.player}</p>
            <p>{props.score}</p>
        </div>
    )
}

export default PlayerPanel;