import { useEffect } from "react";
import "../Card.css"


function Card (props) {
    useEffect(() => console.log("card rerendered"));
    return(
        <button type="button" onClick={(e) => {props.handleClick(props.dataID)}} className="singleCard">
            <h2>{props.title}</h2>
            <img src={props.photoUrl} alt={props.title} />
        </button>
    )
}

export default Card;