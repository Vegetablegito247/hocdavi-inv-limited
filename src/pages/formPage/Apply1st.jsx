import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Apply1st() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('apply2')
    }
    return (
        <div className='apply'>
            <form action="" className='w-full'>
                <div className="formBdy grid grid-cols-1 gap-x-4 gap-y-8">
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* Name</label>
                        <input type="text" />
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* Email</label>
                        <input type="email" />
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* Contact</label>
                        <input type="tel" />
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>Organisation/Company name (if applicable)</label>
                        <input type="text" />
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* What type of consultation are you seeking? </label>
                        <div className="frmRd">
                            <label htmlFor="option1">
                                <input type="radio" name="option" id="option1" value='male' />
                                <span>Educational Services</span>
                            </label>
                            <label htmlFor="option2">
                                <input type="radio" name="option" id="option2" value='Female' />
                                <span>Visa Agency Services</span>
                            </label>
                            <label htmlFor="option3">
                                <input type="radio" name="option" id="option3" value='Gender' />
                                <span>Both Educational Services and Visa Agency Services</span>
                            </label>
                        </div>
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* If you selected "Educational Services," please specify the area of interest:</label>
                        <div className="frmRd">
                            <label htmlFor="">
                                <input type="radio" name="edu" id="" />
                                <span>Professional Development</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="edu" id="" />
                                <span>Vocational Training</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="edu" id="" />
                                <span>Educational Consulting</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="edu" id="" />
                                <span>Study Abroad Programs</span>
                            </label>
                        </div>
                    </div>
                    <div className="frmCtrl">
                        <label htmlFor="" className='font-semibold text-lg md:text-base'>* If you selected "Visa Services," please specify the type of visa you are interested in:</label>
                        <div className="frmRd">
                            <label htmlFor="">
                                <input type="radio" name="vis" id="" />
                                <span>Student Visa</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="vis" id="" />
                                <span>Work Visa</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="vis" id="" />
                                <span>Tourist Visa</span>
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="vis" id="" />
                                <span>Business Visa</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div onClick={handleNavigate} className="subBtn w-full p-4 mt-8 text-end">
                    <button className=' w-56 h-12 bg-blue-800 font-bold rounded-xl sm:w-full'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default Apply1st