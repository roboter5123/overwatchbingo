import {Tab} from "./Tab";
import {heroes} from "./heroes";
import {useState} from "react";

export function MobileView() {

    const [tankExpanded, setTankExpanded] = useState(false);
    const [damageExpanded, setDamageExpanded] = useState(false);
    const [supportExpanded, setSupportExpanded] = useState(false);

    return (
        <div className={"view"}>
            <Tab role={"Tank"}
                 heroes={heroes["tank"]}
                 isExpanded={tankExpanded}
                 onClick={() => expand(tankExpanded, setTankExpanded)}></Tab>
            <Tab role={"Damage"}
                 heroes={heroes["damage"]}
                 isExpanded={damageExpanded}
                 onClick={() => expand(damageExpanded, setDamageExpanded)}></Tab>
            <Tab role={"Support"}
                 heroes={heroes["support"]}
                 isExpanded={supportExpanded}
                 onClick={() => expand(supportExpanded, setSupportExpanded)}></Tab>
        </div>
    );

    function expand(state, setState) {

        setState(!state)
    }
}