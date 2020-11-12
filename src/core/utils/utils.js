export const isLogged = () => {
  return localStorage.getItem("token") ? true : false;
};
