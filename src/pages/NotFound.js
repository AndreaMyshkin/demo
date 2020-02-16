import React from 'react';
import './styles/NotFound.css';
import image from '../images/404.jpg';

function NotFound() {
  return <div className='notFound_page'><img src={image} alt='404'/></div>;
}

export default NotFound;
