import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Ui/Pages/Login/Login";
import { routes } from "./routes";

export const CheckBoxContext = createContext<
  React.SetStateAction<string> | any
>("");

export const Navigation = () => {
  const [checkBox, setcheckBox] = useState("false");

  return (
    <CheckBoxContext.Provider value={{ checkBox, setcheckBox }}>
      <BrowserRouter>
        <div className="main-layout">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
            {routes.map(({ path, Component }) => {
              return <Route path={path} element={<Component />} />;
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </CheckBoxContext.Provider>
  );
};
