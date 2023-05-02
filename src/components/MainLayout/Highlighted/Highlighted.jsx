import React from 'react';
import "./Highlighted.scss";

function Highlighted() {
  return <div className="Highlighted">
    <img src="/assets/images/image-web-3-mobile.jpg" alt="" />
    <h1>The Bright Future of Web 3.0?</h1>
    <div className='summaryContain'>
      <p>We dive into the next evolution of the web that claims to put the power of 
        the platforms back into the hands of the people. But is it really fulfilling 
        its promise?
      </p>
      <button>READ MORE</button>
    </div>
  </div>
}

export default Highlighted;