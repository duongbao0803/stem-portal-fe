import axiosClient from "@/config/axiosClient";
import { SigninValues, SignupValues } from "@/interfaces/interface";

const login = (formValues: SigninValues) => {
  return axiosClient.post("/v1/auth/login", formValues);
};

const signUp = (formValues: SignupValues) => {
  return axiosClient.post("/v1/auth/register", formValues);
};

const getInfoUser = () => {
  return axiosClient.get("/v1/auth/infoUser");
};

export { login, getInfoUser, signUp };
