const LoginService = async (senha, usuario) => {
  const REQ_METHOD = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      senha: senha,
      usuario: usuario,
    }),
  };

  await fetch(
    "https://javatravelers-backend.azurewebsites.net/login",
    REQ_METHOD
  ).then(async (response) => {
    if (response.ok) {
      const answer = await response.json();
      localStorage.setItem("token", answer.token);
      localStorage.setItem("userId", answer.userId);
      return true;
    } else {
      alert("Login inválido");
      return false;
    }
  });
};

export default LoginService;
