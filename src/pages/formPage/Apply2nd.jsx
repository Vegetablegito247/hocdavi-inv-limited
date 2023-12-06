import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function Apply2nd() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);
    return (
        <div className='apply'>
            <form action="" className='w-full'>
                <div className="frnBdy grid grid-cols-1 gap-x-4 gap-y-8">
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* What specific goals or outcomes do you hope to achieve through our consultation services?</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* Are there any challenges or issues you would like us to address during the consultation?</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* What is your preferred mode of consultation ?</label>
                        <div className="frmRd">
                            <label htmlFor="">
                                <input type="radio" name="contact" id="" />
                                <span>In-person meeting</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="contact" id="" />
                                <span>Virtual meeting (Video/Phone Call)</span>
                            </label>
                        </div>
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* If you have a preferred date and time for the consultation, please provide details:</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* How did you hear about Avodah Global Ventures Limited?</label>
                        <select name="" id="">
                            <option value="">Facebook</option>
                            <option value="">Twitter</option>
                            <option value="">Instagram</option>
                            <option value="">Friend</option>
                            <option value="">Others</option>
                        </select>
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* Is there any additional information you would like to share with us?</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="subBtn w-full p-4 mt-8 text-center">
                    <button className=' w-56 h-12 bg-blue-800 font-bold rounded-xl sm:w-full'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Apply2nd