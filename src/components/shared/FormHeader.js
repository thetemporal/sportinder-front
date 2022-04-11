import React from "react";
import "./formHeader.css";
export default function FormHeader(props) {
  return (
    <div className="form-header mt-5 mb-3">
      <h2 className="font-bold text-lg form-title">{props.title}</h2>
      <h4 className="text-sm ml-5">
        {props.subtitle} <br />
        <a href="" className="text-link hover:text-linkHover">
          {props.action}
        </a>
      </h4>
    </div>
  );
}
