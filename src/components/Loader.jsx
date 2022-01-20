import React from 'react';
import "../css/preloader.scss";

const sun = require("../assets/sun.gif");

export default function Loader() {

  return (
    <div className='loader'>
        <img src={sun}/>
    </div>
  );
}
