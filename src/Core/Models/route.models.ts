import { LazyExoticComponent } from 'react';
import { JSXComponent } from "../Types/Component.types";

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string;
}