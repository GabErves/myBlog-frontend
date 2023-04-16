import Container from './Container';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const NotFound = () => {
  return (
    <Container>
      <p>This page does not exist. :/</p>
    </Container>
  );
};

export default NotFound;
