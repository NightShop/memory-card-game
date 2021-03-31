import { useEffect, useState } from "react";
import Card from "./Card"
import data from "../assets/data";
import "../Container.css"

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

    useEffect(() => { console.log("inside default effect") });
    useEffect(() => {
        if (highScore < score) {
            setHighScore(score);
        }
        console.log("inside high score effect", cardsData);

    }, [highScore, score, cardsData]);

    function handleClick(id) {
        if (!cardsData[id].isClicked) {
            setScore(score => score + 1);
            setCardsData(prevState => {
                return {
                    ...prevState,
                    [id]: {
                        ...prevState[id],
                        isClicked: true
                    }
                }
            })
        }
        else {
            setScore(0);
            setCardsData(data);
        }
    }

    return (
        <div>
            <h3>
                Score: {score}
            </h3>
            <h3>
                High Score: {highScore}
            </h3>
            <div className="container">
                {shuffleArray(cardsList)}
            </div>
        </div>
    )
}

export default CardContainer;