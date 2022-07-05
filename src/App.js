import './App.css';
import React, {useState, useEffect} from "react";
import CardShuffler from "./cardShuffler.js";


const App = () => {
  return (
    <div className="App">
      <div className="title">Crypto logo's memory game</div>
      <CardShuffler />
    </div>
  );
}

export default App;
