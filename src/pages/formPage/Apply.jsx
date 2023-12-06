import React from 'react';
import Heads from '../../components/utilities/Heads';
import './apply.css';

function Apply() {
    return (
        <div className='applyFrm'>
            <Heads head='Start Your Application' />
            <form action="" className='p-12 w-full mt-10'>
                <div className="frmBdy bg-slate-800 text-slate-100 rounded-3xl p-5">
                    <div className="formBdy grid grid-cols-2 gap-x-4 gap-y-8">
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>Name</label>
                            <input type="text" />
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>Email</label>
                            <input type="email" />
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>Contact</label>
                            <input type="tel" />
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>Organisation/Company name (if applicable)</label>
                            <input type="text" />
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>What type of consultation are you seeking? </label>
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
                            <label htmlFor="" className='font-semibold text-lg'>If you selected "Educational Services," please specify the area of interest:</label>
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
                            <label htmlFor="" className='font-semibold text-lg'>If you selected "Visa Services," please specify the type of visa you are interested in:</label>
                            <div className="frmRd">
                                <label htmlFor="">
                                    <input type="radio" name="edu" id="" />
                                    <span>Student Visa</span>
                                </label>
                                <label htmlFor="">
                                    <input type="radio" name="edu" id="" />
                                    <span>Work Visa</span>
                                </label>
                                <label htmlFor="">
                                    <input type="radio" name="edu" id="" />
                                    <span>Tourist Visa</span>
                                </label>
                                <label htmlFor="">
                                    <input type="radio" name="edu" id="" />
                                    <span>Business Visa</span>
                                </label>
                            </div>
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>What specific goals or outcomes do you hope to achieve through our consultation services?</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>Are there any challenges or issues you would like us to address during the consultation?</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>What is your preferred mode of consultation ?</label>
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
                            <label htmlFor="" className='font-semibold text-lg'>If you have a preferred date and time for the consultation, please provide details:</label>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>How did you hear about Avodah Global Ventures Limited?</label>
                            <select name="" id="">
                                <option value="">Facebook</option>
                                <option value="">Twitter</option>
                                <option value="">Instagram</option>
                                <option value="">Friend</option>
                                <option value="">Others</option>
                            </select>
                        </div>
                        <div className="frmCtrl">
                            <label htmlFor="" className='font-semibold text-lg'>Is there any additional information you would like to share with us?</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="subBtn w-full p-4 mt-8 text-center">
                        <button className=' w-80 h-12 bg-blue-800 font-bold rounded-xl'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Apply