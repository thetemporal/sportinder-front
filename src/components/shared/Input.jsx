import React, { Component } from "react";

/**
 * Use this component to render an input with the desired properties.
 * name = component name, this name will also be applied to label htmlFor property.
 * type = component type (text, password, email, etc.).
 * placeholder = placeholder text to be shown inside the input.
 * labelText = Text to be rendered in the label.
 * footerNote = If the input has some note that should be placed below
 */
export class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid mb-4">
        <label className="font-semibold text-sm mb-1" htmlFor={this.props.name}>
          {this.props.labelText}
        </label>
        <input
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          className="border-solid border rounded h-12 pl-2"
        />
        <h1 className="text-xs">{this.props.footerNote}</h1>
      </div>
    );
  }
}
