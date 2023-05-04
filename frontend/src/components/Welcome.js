import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const buttonStyle = {
  backgroundColor: '#6b9080',
};

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This is a simple appplication that retrieves photos using Unsplash API.
        In order to start, enter any search item in the input field.
      </p>
      <p>
        <Button
          style={buttonStyle}
          variant="primary"
          href="https://unsplash.com"
          target="_blank"
        >
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
