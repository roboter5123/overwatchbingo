import {characterSetList} from "./CharacterSets/CharacterSetList";
import "./header.css"

export function Header(props) {
    return (
        <header>
            {Object.keys(characterSetList).map((set)=><img key={set} className={"gameLogo"} alt={set+" game logo"} src={require("./img/"+set+".png")} onClick={()=>props.onClick(set)}/>)}
        </header>
    );
}