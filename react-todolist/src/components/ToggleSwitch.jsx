import React from "react"

function ToggleSwitch(props) {
    const handleClick = (e) => {
        e.target.value = (e.target.checked)?1:0;
        props.onChange(e);
    }
    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={props.name}
                value={props.value}
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