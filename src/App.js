import './App.css';
import {MobileBingo} from "./MobileBingo";
import {heroes} from "./heroes";

function App() {

    return (
        <div className="App">
            {<MobileBingo game={"Overwatch"} characters={heroes}></MobileBingo> }
        </div>
    );
}

export default App;
