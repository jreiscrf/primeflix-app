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

const InputSignUp: React.FC<Props> = ({
  label,
  secure,
  type,
  value,
  setValue,
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Row>
        <S.Input
          secureTextEntry={secure}
          onChangeText={setValue}
          value={value}
        />
      </S.Row>
    </S.Container>
  );
};

export default InputSignUp;
