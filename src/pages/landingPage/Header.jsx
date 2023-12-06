import React from 'react';
import headImg from '../../img/hocdaLogo.png';
import './header.css';

function Header() {
  return (
    <div className=' w-full h-96 flex items-center justify-center relative overflow-hidden bg-slate-100'>
      <div className="abt-des1"></div>
        <img className='landHead h-64 w-80' src={headImg} alt="" />
        <div className="abt-des2"></div>
    </div>
  )
}

export default Header