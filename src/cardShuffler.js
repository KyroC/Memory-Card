import React, {useState, useEffect} from "react";

const CardShuffler = () => {
    const [selected, setSelected] = useState([]);
    const [cards, setCards] = useState([0,1,2,3,4,5,6,7,8,9,10,11])

    useEffect(() => {
        console.log(selected);
      })

    useEffect(() => {
        console.log(cards)
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
    let dealCards = cards.map(item => <button onClick={(e) => {shuffleCards(); addSelected(e) }} value={item}>{item}</button>)
    return (
        <div id="cardShuffler">
            {dealCards}
        </div>
    );
}

export default CardShuffler;