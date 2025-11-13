import { useState } from "react";
import TrendingList from "./TrendingList";

export default function App() {
  const movieArray = [
    {
      title: "Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    },
    {
      title: "Star Wars: Episódio IV – Uma Nova Esperança",
      releaseYear: 1977,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BOWE0MDA0YjgtOGVhMi00NjY0LTkxNGQtYjVjMWU3ZTU5Mjc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Star Wars: Episódio I – A Ameaça Fantasma",
      releaseYear: 1999,
      imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg/250px-Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg"
    },
    {
      title: "Star Wars: Episódio II – Ataque dos Clones",
      releaseYear: 2002,
      imageUrl: "https://upload.wikimedia.org/wikipedia/pt/6/63/Star_Wars_The_Clone_Wars.jpg"
    },
    {
      title: "Star Wars: Episódio III – A Vingança dos Sith",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg"
    },
  ];
  const [movieData, setMovieData] = useState(movieArray);

  // code here 💖

  return <TrendingList movies={movieData} />;
}