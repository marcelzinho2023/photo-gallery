import React, { useState } from "react";
import styled from "styled-components";

// Estilização básica
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const PhotoItem = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

const AddPhotoForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 0.5rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: #61dafb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

export default function Gallery({ photos, onAddPhoto, onDeletePhoto }) {
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (newPhotoUrl.trim()) {
      onAddPhoto(newPhotoUrl); // Adiciona a nova foto
      setNewPhotoUrl(""); // Limpa o campo de input
    }
  };

  return (
    <GalleryContainer>
      <h2>Photo Gallery</h2>

      {/* Formulário para adicionar uma nova foto */}
      <AddPhotoForm onSubmit={handleAddPhoto}>
        <Input
          type="text"
          placeholder="Enter photo URL"
          value={newPhotoUrl}
          onChange={(e) => setNewPhotoUrl(e.target.value)}
        />
        <Button type="submit">Add Photo</Button>
      </AddPhotoForm>

      {/* Grid de fotos */}
      <PhotoGrid>
        {photos.map((photo) => (
          <PhotoItem key={photo.id}>
            <img src={photo.urls.small} alt="Gallery Item" />
            <DeleteButton onClick={() => onDeletePhoto(photo.id)}>
              Delete
            </DeleteButton>
          </PhotoItem>
        ))}
      </PhotoGrid>
    </GalleryContainer>
  );
}
