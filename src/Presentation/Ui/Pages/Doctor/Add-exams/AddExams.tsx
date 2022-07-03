import React from "react";
import { Helmet } from "react-helmet";
import { Circles } from "../../../Components/Circles/Circles";
import { Header } from "../../../Components/Header/Header";
import Doctor from "../../../../Common/assets/pose_4-add-exams.png";
import "./AddExams.scss";
export const AddExams = () => {
  return (
    <div>
      <Header />
      <Helmet bodyAttributes={{ style: "background :  whitesmoke;" }} />
      <Circles />
      <img
        src={Doctor}
        style={{
          width: 550,
          height: 550,
          position: "absolute",
          top: 214,
          left: 130,
        }}
      />
      <div className="content-inputs-add-exam"></div>
    </div>
  );
};
