import "../Card.css"


function Card (props) {

    return(
        <button type="button" onClick={() => props.handleClick(props.dataID)} className="singleCard">
            <h2>{props.title}</h2>
            <img src={props.photoUrl} alt={props.title} />
        </button>
    )
}

export default Card;