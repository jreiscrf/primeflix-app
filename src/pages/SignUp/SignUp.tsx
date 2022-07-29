import React, { useState } from "react";
import useSignup from "./useSignup";
import StyledHeader from "../../components/StyledHeader";
import InputSignUp from "../../components/InputSignUp";
import Button from "../../components/Button";
import { ScrollView } from "react-native";
import * as S from "./styles";

const SignUp = () => {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    cpf,
    setCpf,
    nascimento,
    setNascimento,
    addUser,
  } = useSignup();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <S.Container>
        <StyledHeader />
        <S.ViewText>
          <S.TextSignUp>Crie sua conta</S.TextSignUp>
          <S.TextTwo>Preencha os campos abaixo</S.TextTwo>
        </S.ViewText>
        <S.ViewInput>
          <InputSignUp
            placeholder="email"
            label="E-Mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <InputSignUp
            placeholder="passaword"
            label="Passaword"
            type="passaword"
            value={senha}
            setValue={setSenha}
          />
          <InputSignUp
            placeholder="CPF"
            label="CPF"
            type="cpf"
            value={cpf}
            setValue={setCpf}
          />
          <InputSignUp
            placeholder="Birth Date"
            label="Birth Date"
            type="email"
            value={nascimento}
            setValue={setNascimento}
          />
        </S.ViewInput>
        <S.ViewButton>
          <Button onPress={addUser} />
        </S.ViewButton>
      </S.Container>
    </ScrollView>
  );
};

export default SignUp;
