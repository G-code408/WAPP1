import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ImageUpload.css'; // Make sure you have this CSS file for additional styling

function ImageUpload({ onImageUpload }) {
  const [imgSrc, setImgSrc] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.match('image.*')) {
      setImageName(file.name); // Set the image name for display
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgSrc(event.target.result);
        onImageUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        backgroundColor:'#363940',
        width: '40rem',
        height: '40rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden', // Ensures the image doesn't spill out of the card
        backgroundSize: 'cover', // This will cover the whole Card area
        backgroundImage: imgSrc ? `url(${imgSrc})` : '', // The uploaded image as background
        color:'white'
      }}
    >
      {!imgSrc && (
        <Card.Text><h3>Drag and Drop What your Hair looks like Now</h3></Card.Text>
      )}
      {imgSrc && (
        <div className="image-name-overlay">
          {imageName}
        </div>
      )}
    </Card>
  );
}

export default ImageUpload;
