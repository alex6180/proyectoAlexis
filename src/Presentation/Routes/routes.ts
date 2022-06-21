import { Routes } from "../../Core/Models/route.models";
import CreateUser from "../Ui/Pages/Create-user/Create-user/CreateUser";
import { CreateUserInit } from "../Ui/Pages/Create-user/Create-user-init/Create-user-init";
import { CretateUserStepOne } from "../Ui/Pages/Create-user/Create-user-step-one/cretate-user-step-one";

import { Login } from "../Ui/Pages/Login/Login";

export const routes: Routes[] = [
  {
    to: "/create-user",
    path: "cretate-user",
    Component: CreateUser,
  },
  {
    to: "/create-user-1",
    path: "cretate-user-init",
    Component: CreateUserInit,
  },
  {
    to: "/create-user-2",
    path: "cretate-user-step-one",
    Component: CretateUserStepOne,
  },
  {
    to: "/login",
    path: "login",
    Component: Login,
  },
];
