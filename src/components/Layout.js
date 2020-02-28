import React from 'react';
import Navbar from './Navbar';
import './styles/Layout.css';

 export default function Layout(props) {
  return (
    <div className='body'>
      <div className='layout'>
      <Navbar />
      {props.children}
    </div>
   </div>
    
  );
}


