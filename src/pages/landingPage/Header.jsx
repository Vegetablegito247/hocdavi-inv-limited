import React from 'react';
import { motion } from 'framer-motion';
import headImg from '../../img/hocdaLogo.png';
import './header.css';

function Header() {
  return (
    <motion.div
      className=' w-full h-[70vh] flex items-center justify-center relative overflow-hidden bg-slate-100'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, zIndex: 11 }}
      transition={{ duration: 2, type: 'tween' }}
    >
      <div className="abt-des1"></div>
      <img className='landHead h-64 w-80' src={headImg} alt="" />
      <div className="abt-des2"></div>
    </motion.div>
  )
}

export default Header