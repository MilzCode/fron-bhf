import { host } from "../host/host";
const ingresarSistema = async (
  email: string,
  password: string,
  remember_me: boolean
) => {
  const url = host + "/api/v1/login";
  let error = "";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password, remember_me }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    const data = await res.json();
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
    } else {
      localStorage.clear();
    }
    return data;
  } catch (e) {
    console.log(e);
    error = "Error de conexión";
    return error;
  }
};

export default ingresarSistema;
