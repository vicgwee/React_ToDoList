import React from "react"
import {Checkbox} from "@mui/material"

function ToggleSwitch(props) {
    const handleClick = (e) => {
        e.target.value = (e.target.checked)?1:0;
        props.onChange(e);
    }
    return (
        <div className="toggle-switch">
            <Checkbox
                name={props.name}
                checked={props.checked}
                onChange={handleClick}
            />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
      </div>
    );
}

export default ToggleSwitch;