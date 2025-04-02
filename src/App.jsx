import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import "./index.css";
import Popular from "../src/components/Popular.jsx";
import Trending from "./components/Trending.jsx";
import Movie from "./components/Movie.jsx";
import Tv from "./components/Tv.jsx";
import Person from "./components/Person.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import TvDetails from "./components/TvDetails.jsx";
import PersonDetails from "./components/PersonDetails.jsx";
import Trailer from "./components/Trailer.jsx";
import NotFound from "./components/NotFound.jsx";
const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen bg-[#121212] flex ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/movie/detail/:id" element={<MovieDetails />}>
          </Route>
          <Route
              path="/movie/detail/:id/trailer"
              element={<Trailer />}
            ></Route>

          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/tv/detail/:id" element={<TvDetails />}>
          <Route
              path="/tv/detail/:id/trailer"
              element={<Trailer />}
            ></Route>
          </Route>
          <Route path="/people" element={<Person />}></Route>
          <Route path="/people/detail/:id" element={<PersonDetails />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
