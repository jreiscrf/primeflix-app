import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebase";

const useLogin = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigateToHomeScreen = React.useCallback(async () => {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        navigate("Home" as never);
        console.log("Login Realizado");
      })
      .catch((value) => {
        alert("Dados incorretos! Tente novamente");
      });
  }, [email, senha]);

  const navigateToSignUpScreen = React.useCallback(() => {
    navigate("SignUp" as never);
  }, []);

  return {
    email,
    setEmail,
    senha,
    setSenha,
    navigateToHomeScreen,
    navigateToSignUpScreen,
  };
};

export default useLogin;
