import React from "react";
import * as S from "./styles";

const StyledHeader = () => {
  return (
    <S.Container>
      <S.BlueView />
      <S.ViewImage>
        {/*<S.Image />*/}
        <S.Prime>PRIME </S.Prime>
        <S.Flix> FLIX</S.Flix>
      </S.ViewImage>
    </S.Container>
  );
};

export default StyledHeader;
