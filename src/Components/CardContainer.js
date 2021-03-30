import { useState } from "react";
import Card from "./Card"
import data from "../assets/data";

function CardContainer() {
    const [cardsData, setCardsData] = useState(data);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const cardsList = Object.entries(cardsData).map((entry) => {
        const [key, valueObj] = entry;
        return <Card
            key={key}
            handleClick={handleClick}
            title={valueObj.title}
            isClicked={valueObj.isClicked}
            photoUrl={valueObj.photoUrl}
            dataID={key} />
    })


    const shuffleArray = (array) => {
        const tempArray = [...array]
        const newArray = [];
        for (let i = tempArray.length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            newArray.push(tempArray.splice(randomIndex, 1));
        }

        return newArray;
    }

    function handleClick(id) {
        setCardsData(prevState => {
            if (!prevState[id].isClicked) {
                addPoint();
                return {
                    ...prevState,
                    [id]: {
                        ...prevState[id],
                        isClicked: true
                    }
                };
            }
            else {
                return ({ ...prevState })
            }
        });
    }

    function addPoint() {
        console.log(score);
        setScore(prevState => prevState + 1);
    }

    return (
        <div>
            <h3>
                Score: {score}
            </h3>
            <h3>
                High Score: {highScore}
            </h3>
            {shuffleArray(cardsList)}
        </div>
    )
}

export default CardContainer;