import React from "react"
import {Checkbox} from "@mui/material"
import FormControlLabel from '@mui/material/FormControlLabel'

function ToggleSwitch(props) {
    const handleClick = (e) => {
        e.target.value = (e.target.checked)?1:0;
        props.onChange(e);
    }
    return (
        <div className="toggle-switch">
            <FormControlLabel 
                control={
                    <Checkbox
                        name={props.name}
                        checked={Boolean(props.checked === 1)}
                        onChange={handleClick}
                        size="large"
                    />
                }
                label="Urgent"
            />
      </div>
    );
}

export default ToggleSwitch;