import React from 'react';
import "./NavBar.scss";

function NavBar() {
  return <div className="NavBar">
    <div className="content-left">
      <img src="/assets/images/logo.svg" alt="" /></div>
    <div className="content-rigth">
      <div className='menu-mobile'>
        <img src="/assets/images/icon-menu.svg" alt="" /></div>
      <div className='menu-desktop'>
        <a href="">Home</a>
        <a href="">New</a>
        <a href="">Popular</a>
        <a href="">Trending</a>
        <a href="">Categories</a>
      </div>
    </div>
  </div>
}

export default NavBar;