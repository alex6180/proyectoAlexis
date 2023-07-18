import { lazy } from "react";

export const Login = lazy(
  () => import("../Ui/Pages/Admin/Create-user/Create-user/CreateUser")
);
