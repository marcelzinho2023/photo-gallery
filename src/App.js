import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #f4f4f9;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;

export default function App() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]); // Estado para armazenar as fotos

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos?client_id=UHj9Oj65sITmOjUJToYTZm2NcoRBHMQYtd7eZ70CGv4"
        );
        const data = await response.json();
        setPhotos(data); // Salva as fotos da API no estado
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  // Função para adicionar uma nova foto (simulando função POST)
  const addPhoto = (newPhotoUrl) => {
    const newPhoto = {
      id: Date.now(),
      urls: { small: newPhotoUrl },
    };
    setPhotos([newPhoto, ...photos]);
  };

  // Função para excluir uma foto (DELETE)
  const deletePhoto = (photoId) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
    setPhotos(updatedPhotos); // Atualiza o estado com a foto removida
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <AppContainer>
        <Header user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/gallery"
            element={
              <Gallery
                photos={photos}
                onAddPhoto={addPhoto}
                onDeletePhoto={deletePhoto}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}
