import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import "./dropDownMenu.css";

export default function DropDownMenu({ 
    datas, 
    title, 
    name, 
    state,
    setState,
    listStyle = {}
}) {

    const [isListOpen, setIsListOpen] = useState(false);


    return (

        <div className="dropdown-ctnr">

            <div className="dropdown-title" onClick={() => {setIsListOpen(!isListOpen)}}> 

                <p className="dropdown-title-content">{state ?? title}</p>
                
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={isListOpen ? "chevron down" : "chevron up" }
                />
            </div>
          
          
            <ul name={name} className={isListOpen ? "dropdown-list open" : "dropdown-list close" } style={listStyle} > 
            {datas.map((el, index) =>

                <li 
                className="dropdown-element"
                key={index} 
                onClick={() => { 
                    setIsListOpen(false); 
                    setState(el.name);
                }}
                >
                    {el.name}
                </li>

            )}
            </ul>
        </div>
    )
}