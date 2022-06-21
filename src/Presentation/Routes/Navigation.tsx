import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Ui/Pages/Login/Login";
import { routes } from "./routes";

export const Navigation = () => {
  return (
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
  );
};
