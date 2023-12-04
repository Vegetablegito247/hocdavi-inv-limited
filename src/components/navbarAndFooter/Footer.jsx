import React from 'react';
import { LiaMailBulkSolid } from "react-icons/lia";
import { ImLocation2 } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { TiSocialAtCircular } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className='subNltr grid grid-temp items-center gap-x-4 bg-slate-600 text-slate-100 mt-20 p-12'>
                <div className='mailLogo flex items-center justify-center w-16 h-16 rounded-full text-3xl bg-blue-800'>
                    <LiaMailBulkSolid />
                </div>
                <div className="subTxt">
                    <h3 className='text-3xl font-bold'>Subsribe To Our Newsletter</h3>
                    <p className=' text-base'>
                        Stay in touch with us to get latest news and special offers on placements and travel.
                    </p>
                </div>
                <form action="" className="subfrm flex items-center gap-x-3">
                    <div className="subCtrl flex items-center">
                        <input type="email" className=' w-64 h-11 border-blue-800 border-2 rounded-lg text-slate-900 p-2 outline-none' />
                    </div>
                    <div className="subFrmBtn">
                        <button className=' w-40 h-11 rounded-xl bg-blue-800 font-bold'>Subscribe</button>
                    </div>
                </form>
            </div>

            <div className="getToUs w-full p-12 bg-slate-800 text-slate-100 grid grid-cols-4">
                <div className="get flex  gap-x-3 h-full">
                    <div className="getLogo">
                        <ImLocation2 className=' text-5xl text-blue-800' />
                    </div>
                    <div className="getInfo">
                        <h3 className=' text-xl font-bold mb-3'>Address</h3>
                        <div className="getTxt grid gap-y-3 leading-7">
                            <span><b>Nigeria:</b> Haj estate flat 32B off Arab Road Kubwa FCT, Abuja</span>
                            <span><b>Canada:</b> 223 Bolstad Manor, Saskatoon, SK S7W 0Y1</span>
                        </div>
                    </div>
                </div>
                <div className="get flex gap-x-3 h-full">
                    <div className="getLogo">
                        <BiPhoneCall className=' text-5xl text-blue-800' />
                    </div>
                    <div className="getInfo">
                        <h3 className=' text-xl font-bold mb-3'>Contact Us</h3>
                        <div className="getTxt">
                            <span className=' block leading-7'>+1-(639)-384-5328</span>
                            <span className=' block leading-7'>+1-(306)-501-8411 </span>
                            <span className=' block leading-7'>+234-806-094-2907 </span>
                            <span className=' block leading-7'>+234-806-090-2766</span>
                        </div>
                    </div>
                </div>
                <div className="get flex gap-x-3 h-full">
                    <div className="getLogo">
                        <IoIosMail className=' text-5xl text-blue-800' />
                    </div>
                    <div className="getInfo">
                        <h3 className=' text-xl font-bold mb-3'>Email us</h3>
                        <span>avodahgvl@gmail.com</span>
                    </div>
                </div>
                <div className="get flex gap-x-3 h-full">
                    <div className="getLogo">
                        <TiSocialAtCircular className=' text-5xl text-blue-800' />
                    </div>
                    <div className="getInfo">
                        <h3 className=' text-xl font-bold mb-3'>Our Socials</h3>
                        <ul className="socials grid grid-cols-3 items-center justify-center gap-x-4">
                            <li>
                                <Link>
                                    <FaFacebook className='text-2xl' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaInstagram className='text-2xl' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaLinkedin className='text-2xl' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy text-center p-5">
                <p>Copyright © 2023 HOCDAVI Investments limited. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer