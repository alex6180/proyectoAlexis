import { Routes } from "../../Core/Models/route.models";
import CreateUser from "../Ui/Pages/Admin/Create-user/Create-user/CreateUser";
import { CreateUserInit } from "../Ui/Pages/Admin/Create-user/Create-user-init/Create-user-init";
import { CretateUserStepOne } from "../Ui/Pages/Admin/Create-user/Create-user-step-one/cretate-user-step-one";

import { Login } from "../Ui/Pages/Login/Login";
import { HomeAdmin } from "../Ui/Pages/Admin/Home-admin/Home-admin";
import { UsersPage } from "../Ui/Pages/Admin/users-page/UsersPage";
import { HomeDoctor } from "../Ui/Pages/Doctor/Home-Doctor/Home-Doctor";
import { PacientPage } from "../Ui/Pages/Doctor/Page-of-pacient/PacientPage";
import { AddExams } from "../Ui/Pages/Doctor/Add-exams/AddExams";
import { InfoExams } from "../Ui/Pages/Doctor/Info-exams/InfoExams";
import { HomeLabTechnician } from "../Ui/Pages/Lab-technician/Home/Home-lab-technician";
import { PacientPageLab } from "../Ui/Pages/Lab-technician/Paciennt-page/PacientPageLab";
import { InfoExamsLab } from "../Ui/Pages/Lab-technician/Info-exams/InfoExamsLab";
import { HomePacient } from "../Ui/Pages/Pacient/Home/Home-Pacient";
import { InfoExamsPacientPage } from "../Ui/Pages/Pacient/Info-exam/InfoExamspacientPage";

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
    to: "/AddExamPage",
    path: "/Add-exam-page",
    Component: AddExams,
  },
  {
    to: "/InfoExamPage",
    path: "/InfoExampage",
    Component: InfoExams,
  },
  {
    to: "/HomeLabTechnician",
    path: "/Home-Lab-Technician",
    Component: HomeLabTechnician,
  },
  {
    to: "/PacientPageLab",
    path: "/Pacient-Page-Lab/:id",
    Component: PacientPageLab,
  },
  {
    to: "/InfoExamsLab",
    path: "/Info-Exams-Lab",
    Component: InfoExamsLab,
  },
  {
    to: "/InfoExamsPacientPage",
    path: "/Info-Exams-Pacient-Page",
    Component: InfoExamsPacientPage,
  },
  {
    to: "/HomePacient",
    path: "/Home-Pacient",
    Component: HomePacient,
  },
  {
    to: "/login",
    path: "login",
    Component: Login,
  },
];
