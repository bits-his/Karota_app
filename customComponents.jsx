import React from "react";
import { Input } from "reactstrap";

export const customInput = ({ name, value, onChange, label }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={`Enter ${label}`}
            />
        </div>
    )
}


export const customerSelect = ({ label, name, value, onChange, Option }) => {
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <select
                name={name}
                value={value}
                onChange={onChange}
            >
                {Option.map((item, idx) => (
                    <option key={idx} value={item.value}>
                        {item.value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export const customButton = ({ name, onClick }) => {
    return (
        <div>
            <Button onClick={onClick}>{name}</Button>
        </div>
    )
}