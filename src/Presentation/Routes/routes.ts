import { Routes } from "../../Core/Models/route.models";
import CreateUser from "../Ui/Pages/Create-user/Create-user/CreateUser";
import { CreateUserInit } from "../Ui/Pages/Create-user/Create-user-init/Create-user-init";
import { CretateUserStepOne } from "../Ui/Pages/Create-user/Create-user-step-one/cretate-user-step-one";

import { Login } from "../Ui/Pages/Login/Login";
import { HomeAdmin } from "../Ui/Pages/Home-admin/Home-admin";
import { UsersPage } from "../Ui/Pages/users-page/UsersPage";

export const routes: Routes[] = [
  {
    to: "/CreateUser",
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
    to: "/Home-admin",
    path: "Home-admin",
    Component: HomeAdmin,
  },
  {
    to: "/UserPage",
    path: "/User-page/:id",
    Component: UsersPage,
  },
  {
    to: "/login",
    path: "login",
    Component: Login,
  },
];
