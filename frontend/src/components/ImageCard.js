import React from 'react';
import { Card, Button } from 'react-bootstrap';

const buttonStyle = {
  backgroundColor: '#6b9080',
};

const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button
          style={buttonStyle}
          variant="primary"
          onClick={() => deleteImage(image.id)}
        >
          Delete
        </Button>{' '}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
