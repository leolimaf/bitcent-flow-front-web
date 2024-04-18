import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
