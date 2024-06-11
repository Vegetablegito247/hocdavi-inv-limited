import React, { useState } from 'react';
import { LiaMailBulkSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { ImLocation2 } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { TiSocialAtCircular } from "react-icons/ti";
import { IoTime } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { postMessage } from '../../store/message';
import { toast } from 'react-toastify';


function Footer() {
    const dispatch = useDispatch();

    const [messageData, setMessageData] = useState({
        email: '',
        message: ''
    })
    const [error, setError] = useState({});

    const validateMsg = () => {
        const newErrors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!messageData.email.trim()) {
            newErrors.email = 'Email account is required';
        }
        else if (!emailPattern.test(messageData.email.trim())) {
            newErrors.email = 'Invalid email address';
        }

        if (!messageData.message.trim()) {
            newErrors.message = 'Message field is required';
        }
        else if (messageData.message.length < 100) {
            newErrors.message = 'Message must be at least 100 characters';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const msgSubmit = (e) => {
        e.preventDefault();

        if (validateMsg()) {
            dispatch(postMessage(messageData));
            toast.success('Message sent successfully');
            setMessageData({ email: '', message: '' });
        }
        else {
            toast.warning('Please correct the error in the form');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessageData({
            ...messageData,
            [name]: value
        });
    };
    return (
        <footer>
            <div className='subNltr grid grid-temp items-center gap-y-6 text-center gap-x-4 bg-slate-600 text-slate-100 lg:mt-10 mt-20 p-12 lg:grid lg:grid-cols-1 md:p-5'>
                <div className='mailLogo flex items-center justify-center lg:mx-auto w-16 h-16 rounded-full text-3xl bg-blue-800'>
                    <LiaMailBulkSolid />
                </div>
                <div className="subTxt">
                    <h3 className='text-3xl font-bold'>Would you like to send us a message?</h3>
                    <p className=' text-base'>
                        Let us know your thoughts or inquiries. We'd love to hear from you!
                    </p>
                </div>
                <form action="" className="subfrm flex flex-col items-center gap-x-3" onSubmit={msgSubmit}>
                        <div className="subCtrl flex flex-col gap-[10px] items-start lg:w-[100%]">
                            <div className="inp_ctrl">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Your email'
                                    onChange={handleChange}
                                    className=' w-64 h-[40px] border-blue-800 border-2 rounded-lg text-slate-900 p-2 outline-none lg:w-full'
                                />
                                {error.email && <span className='err-msg text-red-600 font-[12px]'>{error.email}</span>}
                            </div>
                            <div className="inp_ctrl">
                                <textarea
                                    name="message"
                                    placeholder='Your message'
                                    onChange={handleChange}
                                    className='w-64 h-[100px] border-blue-800 border-2 rounded-lg text-slate-900 p-2 outline-none lg:w-full'
                                ></textarea>
                                {error.message && <span className='err-msg text-red-600 font-[12px]'>{error.message}</span>}
                            </div>
                        </div>
                        <div className="subFrmBtn ">
                            <button type='submit' className=' w-[250px] h-11 rounded-xl bg-blue-800 font-bold lg:w-[250px]'>Send Message</button>
                        </div>
                    </form>
            </div>

            <div className="getToUs w-full p-9 bg-slate-800 text-slate-100 grid gap-y-5 grid-cols-5 lg:p-8 lg:grid-cols-1 md:p-5">
                <div className="get flex  gap-x-3 h-full">
                    <div className="getLogo">
                        <ImLocation2 className=' text-5xl text-blue-800' />
                    </div>
                    <div className="getInfo">
                        <div className="address">
                            <h3 className=' text-xl font-bold mb-2'>Address</h3>
                            <div className="getTxt grid gap-y-2">
                                <span><b>Nigeria:</b> Haj estate flat 32B off Arab Road Kubwa FCT, Abuja</span>
                                <span><b>Canada:</b> 971 Gladmer park, Regina, Saskatchewan S4P 2X8</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get flex gap-x-3 h-full">
                    <div className="getLogo">
                        <IoTime className=' text-5xl text-blue-800' />
                    </div>
                    <div className="getInfo">
                        <h3 className=' text-xl font-bold mb-3'>Open hours</h3>
                        <div className="viewTime grid gap-y-2">
                            <span><b>Mon - Fri:</b> 8:00am - 18:00pm</span>
                            <span><b>Saturdays:</b> 9:00am - 16:00pm</span>
                            <span><b>Sundays:</b> closed</span>
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
                            <span className=' block leading-7'>+1-(306)-501-8411 </span>
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
                        <span>hocdavi7@gmail.com</span>
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
                                    <FaWhatsapp className='text-2xl' />
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