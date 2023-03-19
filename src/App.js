import './App.css';
import {MobileBingo} from "./MobileBingo";
import {characterSet_Overwatch} from "./CharacterSet_Overwatch.js";

function App() {

    return (
        <div className="App">
            {<MobileBingo game={"Overwatch"} characters={characterSet_Overwatch}></MobileBingo> }
        </div>
    );
}

export default App;
