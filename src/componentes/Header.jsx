import React from 'react';
import "../css/header.css";
import Navegacion from "./Navegacion"
function Header(props) {
  return (
    <header className='contHeader'>
      <Navegacion/>      
    </header>
  );
}

export default Header;