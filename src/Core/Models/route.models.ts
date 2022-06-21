import { LazyExoticComponent } from "react";
import { JSXComponent } from "../Types/Component.types";

export interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
