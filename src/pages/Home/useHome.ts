import React, { useState, useEffect } from "react";
import api from "../../services/api";

type Filme = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  id: Number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: Number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
};

const useHome = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilmes = async () => {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7f2cea6111355b8918f995e7db54d01e",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 10));
    };
    loadFilmes();
    setLoading(false);
  }, []);

  return { loading, filmes };
};

export default useHome;
