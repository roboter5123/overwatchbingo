import './App.css';
import {MobileBingo} from "./MobileBingo";
import {characterSetList} from "./CharacterSets/CharacterSetList";
import {Header} from "./Header";
import {useState} from "react";

function App() {

    const [gameName, setGameName] = useState("overwatch");
    const [currentCharacterSet, setCurrentCharacterSet] = useState(characterSetList["overwatch"]);
    return (
        <div className="App">
            <Header onClick={switchSet}/>
            {<MobileBingo game={gameName} characters={currentCharacterSet} onClick={setGameName}></MobileBingo> }
        </div>
    );

    function switchSet(set){

        setGameName(set)
        setCurrentCharacterSet(characterSetList[set])
    }
}

export default App;
