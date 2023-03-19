import './App.css';
import {useState} from "react";
import {MobileView} from "./MobileView";

const mobileWidth = 500;

function DesktopView() {
    return null;
}

function App() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileWidth);

    window.addEventListener("resize", checkMobile)


    return (
        <div className="App">
            {isMobile ? <MobileView></MobileView> : <DesktopView></DesktopView>}
        </div>
    );

    function checkMobile() {

        setIsMobile(window.innerWidth <= mobileWidth)
    }
}

export default App;
