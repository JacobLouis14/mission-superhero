import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Authprovider from "./context/Authprovider";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Authprovider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Authprovider>
      </BrowserRouter>
    </>
  );
};

export default App;
