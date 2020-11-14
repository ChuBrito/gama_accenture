export const login = async (senha, usuario) => {
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
  )
    .then(async (response) => {
      if (response.ok) {
        const answer = await response.json();
        localStorage.setItem("token", answer.token);
        localStorage.setItem("userId", answer.userId);
      } else {
        alert("Login inválido");
      }
    })
    .catch(() => {
      alert("Houve um problema na realização do login");
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return true;
};
