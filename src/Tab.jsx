import {useState} from "react";
import "./Tab.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Character(props) {

    if (!props.bingo)
        return (<div className={"character"}
                     style={{backgroundImage: `url(${require("./img/" + props.name + ".png")})`}}
                     onClick={()=>props.onClick(props.name)}/>);

    return (<div className={"character"}
                 style={{backgroundImage: `url(${require("./img/" + props.name + ".png")})`}}
                 onClick={()=>props.onClick(props.name)}><img className={"bingoChip"} src={require("./img/bingoChip.png")} alt={"bingoChip"} onClick={()=>props.onClick(props.name)}/></div>);
}

export function Tab(props) {

    const [bingos, setBingos] = useState(emptyBingos(props.characters));

    if (!props.isExpanded) {

        return (
            <div>
                <div className={"tab"} id={props.role} onClick={props.onClick}>{props.role.charAt(0).toUpperCase()+props.role.slice(1)}<FontAwesomeIcon icon={faBars} /></div>
            </div>
        )
    }

    return (
        <div>
            <div className={"tab active"} id={props.role} onClick={props.onClick}>
                {props.role.charAt(0).toUpperCase()+props.role.slice(1)}<FontAwesomeIcon icon={faBars} /></div>
            <div className={"characters"}>
                {Object.keys(props.characters).map((character) =>
                    <Character key={character} name={character} onClick={(event) => bingoHero(event)} bingo={bingos[character]}
                    />)}
            </div>
        </div>

    )

    function emptyBingos(characters) {

        let object = {}
        for (const element of Object.keys(characters)) {

            object[element] = false
        }

        return object;
    }

    function bingoHero(hero) {

        setBingos({...bingos, [hero]: !bingos[hero]})
    }
}

