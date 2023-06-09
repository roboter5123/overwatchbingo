import {Tab} from "./Tab";
import {useState} from "react";

export function MobileBingo(props) {

    const [expandedTabs, setExpandedTabs] = useState(generateExpandedTabs(props.characters));

    return (
        <div className={"view"}>
            <h1> {props.game.charAt(0).toUpperCase()+props.game.slice(1) + " Bingo!"}</h1>
            {Object.keys(props.characters).map((characterRole)=>
                <Tab key={characterRole} set={props.game} role={characterRole} characters={props.characters[characterRole]} isExpanded={expandedTabs[characterRole]} onClick={()=> expand(characterRole)}/>)}
        </div>
    );

    function generateExpandedTabs(characters) {

        let object = {}

        for (const charactersKey in characters) {

            object[charactersKey] = false
        }

        return object
    }

    function expand(role) {

        setExpandedTabs({...expandedTabs,[role] : !expandedTabs[role]})
    }
}