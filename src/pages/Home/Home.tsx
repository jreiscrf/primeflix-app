import React, { useState } from "react";
import useHome from "./useHome";
import * as S from "./styles";
import api from "../../services/api";

const Home = () => {
  const { loading, filmes } = useHome();

  if (loading) {
    return (
      <S.Loading>
        <S.TextLoading>Carregando filmes ...</S.TextLoading>
      </S.Loading>
    );
  }

  return (
    <S.Container>
      <S.StatusBar backgroundColor={"#9403fc"} />
      <S.Title>Top 10</S.Title>
      <S.Scroll>
        <S.ListMovie>
          {filmes.map((filmes) => (
            <>
              <S.Touchable>
                <S.ViewImage>
                  <S.Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${filmes.poster_path}`,
                    }}
                  />
                </S.ViewImage>
              </S.Touchable>
            </>
          ))}
        </S.ListMovie>
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
