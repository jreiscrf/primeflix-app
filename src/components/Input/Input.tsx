import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as S from "./styles";

type Props = {
  label: string;
  secure?: boolean;
  type: string;
  placeholder: string;
  value: string;
  setValue: (data: string) => void;
};

const Input: React.FC<Props> = ({ label, secure, type, value, setValue }) => {
  const [email, setEmail] = useState("");

  const leftIcon = React.useMemo(() => {
    if (type == "email") {
      return <AntDesign size={30} name="user" />;
    }
    return <AntDesign size={30} name="lock" />;
  }, [type]);

  const rigthIcon = React.useMemo(() => {
    if (type == "email") {
      return <AntDesign size={40} name="check" color="#9403fc" />;
    }
    return (
      <>
        <S.Forget>
          <S.TextForget>Esqueceu?</S.TextForget>
        </S.Forget>
      </>
    );
  }, [type]);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Row>
        {leftIcon}
        <S.Input
          secureTextEntry={secure}
          onChangeText={setValue}
          value={value}
        />
        {rigthIcon}
      </S.Row>
    </S.Container>
  );
};

export default Input;
