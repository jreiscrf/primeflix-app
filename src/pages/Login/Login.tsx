import React from "react";
import { ScrollView } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import StyledHeader from "../../components/StyledHeader";
import useLogin from "./useLogin";
import * as S from "./styles";

const Login = () => {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    navigateToHomeScreen,
    navigateToSignUpScreen,
  } = useLogin();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <S.Container>
        <S.StatusBar />
        <StyledHeader />
        <S.ViewText>
          <S.Text>Entre na sua conta</S.Text>
          <S.TextTwo>Bem-vindo de volta, sentimos a sua falta!</S.TextTwo>
        </S.ViewText>
        <S.ViewInputEmail>
          <Input
            placeholder="email"
            label="E-Mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
        </S.ViewInputEmail>
        <S.ViewInputSenha>
          <Input
            placeholder="email"
            label="Senha"
            secure
            type="senha"
            value={senha}
            setValue={setSenha}
          />
        </S.ViewInputSenha>
        <S.ViewButton>
          <Button onPress={navigateToHomeScreen} />
        </S.ViewButton>
        <S.ViewSignUp>
          <S.TextQuestSignUp>Ainda não tem conta?</S.TextQuestSignUp>
          <S.ButtonSignUp onPress={navigateToSignUpScreen}>
            <S.TextSignUp>Cadastre-se</S.TextSignUp>
          </S.ButtonSignUp>
        </S.ViewSignUp>
      </S.Container>
    </ScrollView>
  );
};

export default Login;
