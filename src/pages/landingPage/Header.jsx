import React from 'react';
import headImg from '../../img/hocdaImg.jpg';

function Header() {
  return (
    <div className=' h-96 w-full flex justify-center items-center'>
        <img className=' h-64 w-80' src={headImg} alt="" />
    </div>
  )
}

export default Header