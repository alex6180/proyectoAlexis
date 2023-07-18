import React, { ButtonHTMLAttributes, DOMAttributes } from "react";
import "./Button.scss";
interface title {
  title: string;
}

export const Button = ({
  ...props
}: React.DOMAttributes<HTMLButtonElement>) => {
  return (
    <div>
      <button>Iniciar sesion</button>
    </div>
  );
};
