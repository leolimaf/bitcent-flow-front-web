import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />}></Route>
        <Route path="/fazer-login" element={<Login />}></Route>
        <Route path="/cadastrar-se" element={<Cadastro />}></Route>
        <Route path="/termos-de-uso" element={<TermosDeUso />}></Route>
        <Route
          path="/politica-de-privacidade"
          element={<PoliticaDePrivacidade />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
