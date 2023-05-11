import React, { useState } from 'react';
import "./NavBar.scss";


function NavBar() {
  const [show, setShow] = useState(false);

  return <div className="NavBar">
    <div className="content-left">
      <img src="/assets/images/logo.svg" alt="" />
    </div>
    <div className="content-rigth">
      <a className='menu-mobile' onClick={() => setShow(true)}>
        <img src="/assets/images/icon-menu.svg" alt="" />
      </a>
      <div className={`menu ${show ? "" : "hidden"} `}>
        <a className='close-button' onClick={() => setShow(false)}>
          <img src="/assets/images/icon-menu-close.svg" alt="" />
        </a>
        <a>Home</a>
        <a>New</a>
        <a>Popular</a>
        <a>Trending</a>
        <a>Categories</a>
      </div>
    </div>
  </div>
}

export default NavBar;