import React, { Component } from "react";

/**
 * Use this component to render an input with the desired properties.
 * name = component name, this name will also be applied to label htmlFor property.
 * type = component type (text, password, email, etc.).
 * placeholder = placeholder text to be shown inside the input.
 * labelText = Text to be rendered in the label.
 * footerNote = If the input has some note that should be placed below
 */
export default function Input(props) {
  return (
    <div className="grid mb-4">
      <label className="font-semibold text-sm mb-1" htmlFor={props.name}>
        {props.labelText}
      </label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="border-solid border rounded h-12 pl-2"
      />
      <h1 className="text-xs">{props.footerNote}</h1>
    </div>
  );
}
