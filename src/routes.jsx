import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />}></Route>
        <Route path="/fazer-login" element={<Login />}></Route>
        <Route path="/cadastrar-se" element={<Cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
