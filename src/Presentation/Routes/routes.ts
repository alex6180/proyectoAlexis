import { Routes } from "../../Core/Models/route.models";
import CreateUser from "../Ui/Pages/Admin/Create-user/Create-user/CreateUser";
import { CreateUserInit } from "../Ui/Pages/Admin/Create-user/Create-user-init/Create-user-init";
import { CretateUserStepOne } from "../Ui/Pages/Admin/Create-user/Create-user-step-one/cretate-user-step-one";

import { Login } from "../Ui/Pages/Login/Login";
import { HomeAdmin } from "../Ui/Pages/Admin/Home-admin/Home-admin";
import { UsersPage } from "../Ui/Pages/Admin/users-page/UsersPage";
import { HomeDoctor } from "../Ui/Pages/Doctor/Home-Doctor/Home-Doctor";
import { PacientPage } from "../Ui/Pages/Doctor/Page-of-pacient/PacientPage";

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
    to: "/HomeDoctor",
    path: "/Home-doctor",
    Component: HomeDoctor,
  },
  {
    to: "/PacientPage",
    path: "/Pacient-Page/:id",
    Component: PacientPage,
  },
  {
    to: "/login",
    path: "login",
    Component: Login,
  },
];
