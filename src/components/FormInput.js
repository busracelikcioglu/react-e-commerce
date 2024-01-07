import React from "react";

export default function FormInput(props) {
  return (
    <div 
    
    style ={{
        backgroundColor:"#D0B8A8",
        color:"gray"
        }}>
      <label htmlFor={props.name} style ={{color:"#1C6758"}} className="form-label">
        {props.text}
      </label>

      <input
        disabled={props.disabled}
        type={props.type}
        className="form-control btn-secondary"
        style={{
          fontColor: "#dda15e",
          fontWeight: "bold",
          fontSize: 15,
          background: "white",
          color: "black"
        }}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onSelect={props.onSelect}
        checked={props.checked}
        required={props.required ? props.required : false}
        min={props.min}
      />
    </div>
  );
}
