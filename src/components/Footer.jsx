import Container from './Container';
import { Link } from 'react-router-dom';
import React from 'react';
const Footer = () => {
  return (
    <Container className="bg-brown-300 text-3xl font-bold text-center">
      <div>"Sharing perspectives, inspiring minds: the power of blogging."</div>
      Copyright © 2023, Bulletin Social 
    </Container>
  );
};

export default Footer;
