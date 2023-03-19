import {useState} from "react";
import "./Tab.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Hero(props) {

    if (!props.bingo)
        return (<div className={"hero"}
                     style={{backgroundImage: `url(${require("./img/" + props.name + ".png")})`}}
                     onClick={()=>props.onClick(props.name)}/>);

    return (<div className={props.name}
                 style={{backgroundImage: `url(${require("./img/" + props.name + ".png")})`}}
                 onClick={()=>props.onClick(props.name)}><img className={"bingoChip"} src={require("./img/bingoChip.png")} alt={"bingoChip"} onClick={()=>props.onClick(props.name)}/></div>);
}

export function Tab(props) {

    function emptyBingos(heroes) {

        let object = {}
        for (const element of heroes) {

            object[element] = false
        }

        return object;
    }

    const [bingos, setBingos] = useState(emptyBingos(props.heroes));

    if (!props.isExpanded) {

        return (
            <div>
                <div className={"tab"} id={props.role} onClick={props.onClick}>{props.role}<FontAwesomeIcon icon={faBars} /></div>
            </div>
        )
    }

    return (
        <div>
            <div className={"tab active"} id={props.role} onClick={props.onClick}>
                {props.role}<FontAwesomeIcon icon={faBars} /></div>
            <div className={"heroes"}>
                {props.heroes.map((hero) =>
                    <Hero key={hero} name={hero} onClick={(event) => bingoHero(event)} bingo={bingos[hero]}
                    />)}
            </div>
        </div>

    )

    function bingoHero(hero) {

        setBingos({...bingos, [hero]: !bingos[hero]})
    }
}

