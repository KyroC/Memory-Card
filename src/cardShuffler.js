import React, {useState, useEffect} from "react";

const CardShuffler = () => {
    const [selected, setSelected] = useState([]);
    const [cards, setCards] = useState([0,1,2,3,4,5,6,7,8,9,10,11])
    const [score, setScore] = useState(0)
    const [highScore,setHighScore] = useState(0)

    useEffect(() => {
        console.log(selected);
        console.log(cards);
        scoreCount() ;
        console.log(finalHighScore)
        highScoreCount() ;
      })

    const addSelected = (e) => {
        //if card has not been selected before
        if (selected.includes(e.target.value) === false){
          setSelected(oldSelected => [...oldSelected, e.target.value]);
        }
        //if card has been selected
        else {
          setSelected([])
        }
      }

    const shuffleCards = () => {
        let oldCards = cards
        let newCards = []
        let i = cards.length;
        let j = 0

        while (i--){
            j = Math.floor(Math.random() * (i+1));
            newCards.push(cards[j]);
            oldCards.splice(j,1);
        }
        setCards(newCards)
    }
    let currentHighScore = 0
    let currentScore = 0
    let finalHighScore = 0
    const scoreCount = () => {
        currentScore = selected.length
        setScore(currentScore)
    }
    const highScoreCount = () => {
        finalHighScore = currentScore
        if (highScore < finalHighScore) {
            setHighScore(finalHighScore);
        }
    }
    let dealCards = cards.map(item => <button onClick={(e) => {shuffleCards(); addSelected(e)}} value={item}>{item}</button>)
    return (
        <div>
            <div id="currentScore">Current Score: {score}</div>
            <div id="highScore">High Score: {highScore}</div>
            <div id="cardShuffler">
                {dealCards}
            </div>
        </div>
    );
}

export default CardShuffler;