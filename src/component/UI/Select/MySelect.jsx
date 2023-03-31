import React from "react";

export const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.currentTarget.value)}>
            <option
                value=''
                disabled={true}
            >{defaultValue}</option>
            {options.map(option => {
                return <option
                    key={option.value}
                    value={option.value}>
                    {option.name}
                </option>
            })}
        </select>
    )
}
