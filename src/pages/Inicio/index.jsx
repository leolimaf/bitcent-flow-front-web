import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <h1>Início</h1>
      <Link to="/fazer-login">Login</Link>
      <br />
      <Link to="/cadastrar-se">Cadastrar-se</Link>
    </>
  );
};

export default Inicio;
