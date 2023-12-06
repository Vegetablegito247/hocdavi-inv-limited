import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import whatsapp from '../../img/whatsapp.png';
import './chat.css';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

function Chat() {
    const [openMsg, setOpenMsg] = useState(false);
    const handleOpenMsg = () => {
        setOpenMsg(!openMsg)
    }
    return (
        <div className='chatW'>
            <div className="msgChat">
                <div className={openMsg ? "msg1 active text-slate-100 bg-slate-600" : "msg1 text-slate-100 bg-slate-600"}>
                    <p>Need help ? <b>Chat with us</b></p>
                </div>

                <div className={!openMsg ? "msg2 active bg-slate-100 text-slate-100" : "msg2 bg-slate-100 text-slate-100"}>
                    <div className="bdyMsg flex items-stretch gap-x-2 bg-blue-800 text-slate-100 rounded-t-md p-5">
                        <div className="whatIcon">
                            <FaWhatsapp className=' text-4xl' />
                        </div>
                        <div className="msgTxt">
                            <h3 className=''>Start a WhatsApp conversation</h3>
                            <p className=''>Hi there! Click on one of our representative below to chat on WhatsApp.</p>
                        </div>
                    </div>
                    <div className="bdyMsg text-slate-800 w-full px-5 py-3">
                        <p className=' text-xs'>We typically reply in a few hours.</p>
                    </div>
                    <div className="bdyMsg text-slate-800 w-full px-5 pb-5">
                        <Link className="click w-full flex items-center gap-x-2 bg-green-200 rounded-md p-2">
                            <div className="wtsapp">
                                <img className='w-8 h-8' src={whatsapp} alt="" />
                            </div>
                            <div className="clkTxt">
                                <h3>Just Education</h3>
                                <p>Admission Team</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div onClick={handleOpenMsg} className="contChat text-slate-100">
                {
                    openMsg ? (
                        <IoClose className={`text-3xl ${openMsg ? 'rotate-icon2' : ''}`} />
                     )
                     : (
                        <FaWhatsapp className={`text-3xl ${!openMsg ? 'rotate-icon' : ''}`} />
                    )
                }
            </div>
        </div>
    )
}

export default Chat