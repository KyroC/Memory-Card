import React, {useState, useEffect} from "react";
const CardShuffler = () => {
    const [selected, setSelected] = useState([]);
    const [cards, setCards] = useState([0,1,2,3,4,5,6,7,8,9,10,11])
    const [score, setScore] = useState(0)
    const [highScore,setHighScore] = useState(0)
    const images = ["./images/avalanche-avax-logo.png", 
                    "./images/bitcoin-btc-logo.png",
                    "./images/bnb-bnb-logo.png",
                    "./images/cardano-ada-logo.png",
                    "./images/dogecoin-doge-logo.png",
                    "./images/ethereum-eth-logo.png",
                    "./images/polkadot-new-dot-logo.png",
                    "./images/solana-sol-logo.png",
                    "./images/terra-luna-luna-logo.png",
                    "./images/tether-usdt-logo.png",
                    "./images/usd-coin-usdc-logo.png",
                    "./images/xrp-xrp-logo.png"]
    const alts = ["avax","btc","bnb","ada","doge","eth","dot","sol","luna","usdt","usdc","xrp"]

    useEffect(() => {
        console.log(selected);
        console.log(cards);
        scoreCount() ;
        highScoreCount() ;
      })

    const addSelected = (e) => {
        //if card has not been selected before
        if (selected.includes(e.target.id) === false){
          setSelected(oldSelected => [...oldSelected, e.target.id]);
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
    let dealCards = cards.map(item => <div class = "card" onClick={(e) => {shuffleCards(); addSelected(e)}} id={item}>
        <img src = {images[item]} alt={alts[item] }/><br></br>
        {alts[item]}
        </div>) 
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