import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Addmovie from './Addmovie';
import MovieList from './MovieList';
import Filter from './Filter ';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [movieList, setMovieList] = useState([
    {
      id: '01',
      title: "Peaky Blinders ",
      description: "Peaky Blinders est une série télévisée britannique en 36 épisodes d'environ 55 minutes créée par Steven Knight et diffusée entre le 12 septembre 2013 et le 3 avril 2022 sur BBC Two",
      posterURL: "https://th.bing.com/th/id/OIP.5zMJ8nutjGDGLDEE9zfkPwHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating: 4,
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U?si=_3Uv2w9NEtEdAtSC" 
    },
    {
      id: '02',
      title: "One Piece",
      description: " One Piece est une série de Mangas, comportant actuellement plus de 600 épisodes. De nombreux produits dérivés existent, ainsi que des jeux vidéo.",
      posterURL: "https://th.bing.com/th/id/OIP.jPINN5ICJ3Z2qM9K1D4VHgHaFQ?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating: 5 ,
         trailer: "https://www.youtube.com/embed/Ades3pQbeh8?si=T_J78LOr5doE_00C" 
    },
    {
      id: '03',
      title: "Gomorra ",
      description: " Gomorra est une série télévisée italienne en 58 épisodes de 52 minutes créée par Roberto Saviano et diffusée entre le 6 mai 2014   Plus vite que prévu, Genny sera à la tête du clan Savastano. S'ensuivra un conflit générationnel opposant les jeunes, amis de Genny, et les anciens",
      posterURL: "https://th.bing.com/th/id/OIP.P7rh_bP8Oxskj8UK7-fdgwHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating: 3 ,
      trailer :"https://youtu.be/pB6Mfu-87QI?si=lfO71h-y_cZIc8uN"

    }
  ]);



  const [searchinput, setsearchinput] = useState("")

  const [rateinput, setrateinput] = useState(1)


  const addnewmovie = (movie) => {
    setMovieList([...movieList,{...movie,id:uuidv4()}]
    )

  }

  const handlesearch = (text) => {
    setsearchinput(text)
  }
  const handlerate = (number) => {
    console.log(number)
    setrateinput(number)

  }

  return (
    <div className="App">

      <Navigation />
      <Filter handlesearch={handlesearch} handlerate={handlerate} />
      <Addmovie addnewmovie={addnewmovie} />

      <Routes>

        <Route path='/' element={<MovieList data={movieList.filter((elm) => elm.title.toLowerCase().includes(searchinput.toLowerCase().trim()) && elm.rating >= rateinput)} />} />
<Route path="/movie/:id"  element={<MovieDetails movieList={movieList}/>}/>
      </Routes>

    </div>
  );
}

export default App;
