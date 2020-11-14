import { login } from "../loginService/LoginService";

const RegisterService = async (userData) => {
  const REQ_METHOD = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      cpf: userData.cpf,
      nome: userData.nome,
      senha: userData.senha,
      login: userData.email,
      email: userData.email,
    }),
  };

  await fetch(
    "https://javatravelers-backend.azurewebsites.net/signup",
    REQ_METHOD
  )
    .then(async (response) => {
      if (response.ok) {
        login(userData.senha, userData.email);
      } else {
        alert("Não foi possível realizar o cadastro");
      }
    })
    .catch(() => {
      alert("Houve um problema na realização do cadastro");
    });
};

export default RegisterService;
