import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "../Favorites";
import Login from "../Login";
import Signup from "../Signup";
import HomePage from "../HomePage";
import MovieModal from "../MovieModal";

const MainRoute = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsSignedIn(true);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage onSelectMovie={handleSelectMovie} />}
      />
      <Route path="/viewdata" element={<MovieModal />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
    </Routes>
  );
};

export default MainRoute;
