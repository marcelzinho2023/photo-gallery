import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import About from "./pages/About"; // Importando About
import Header from "./components/Header";
import styled from "styled-components";
import { useState } from "react";

const AppContainer = styled.div`
  background-color: #f4f4f9;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

export default function App() {
  const [user, setUser] = useState(null);

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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} /> {/* Nova rota */}
        </Routes>
      </AppContainer>
    </Router>
  );
}

