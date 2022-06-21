import React from "react";
import "./Button.scss";
interface title {
  title: string;
}

export const Button: React.FC<title> = ({ title }: title) => {
  return (
    <div className="content-button">
      <button className="button">
        <h2 className="text-button"> {title} </h2>
      </button>
    </div>
  );
};
