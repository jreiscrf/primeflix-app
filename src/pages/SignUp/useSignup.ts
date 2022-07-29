import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const useSignup = () => {
  const usersCollectionRef = collection(db, "users");
  const { navigate } = useNavigation();
  const [users, setUsers] = useState({});
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");

  const addUser = async () => {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        addDoc(usersCollectionRef, {
          email: email,
          cpf: cpf,
          nascimento: nascimento,
        });
        alert("Congratulations!! Account created successfully"),
          console.log("Cadastrei \n" + value.user.uid);
        navigate("Home" as never);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  //Teste atualização de dados
  /*const teste = async () => {
    let data = await db
      .collection("Teste")
      .doc("2QcGQEPDsfPY6N8YkqXM")
      .update({ cpf: "000000000" });
    let item = data.docs.map((item) => item.data());
    console.log(item);
  };

  useEffect(() => {
    teste();
  }, []);*/

  return {
    email,
    setEmail,
    senha,
    setSenha,
    cpf,
    setCpf,
    nascimento,
    setNascimento,
    addUser,
  };
};

export default useSignup;
