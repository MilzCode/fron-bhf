import { host } from "../host/host";
import axios from "axios";

const idSecret = "kg0zpPPWxTSqDen26zyc55dzrzTFTOfpU8wm5qpn";
const ingresoGoogle = async (access_token: string) => {
  const url = host + "/oauth/token";
  let error = "";
  try {
    const res = await fetch(url, {
      method: "POST",
      body:
        "grant_type=social&client_id=1&client_secret=" +
        idSecret +
        "&provider=google&access_token=" +
        access_token,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
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
    error = "error conexion";
    return error;
  }
};

export default ingresoGoogle;
