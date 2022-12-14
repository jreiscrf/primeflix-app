import React from "react";
import * as S from "./styles";

type Props = {
  onPress: () => void;
};

const Button: React.FC<Props> = ({ onPress }) => {
  return (
    <S.Button onPress={onPress}>
      <S.TextButton>Entrar</S.TextButton>
    </S.Button>
  );
};

export default Button;
