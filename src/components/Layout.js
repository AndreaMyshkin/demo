import React from 'react';
import Navbar from './Navbar';
import './styles/Layout.css';

function Layout(props) {
  return (
    <div className='body'>
      <div className='layout'>
      <Navbar />
      {props.children}
    </div>
   </div>
    
  );
}

export default Layout;
