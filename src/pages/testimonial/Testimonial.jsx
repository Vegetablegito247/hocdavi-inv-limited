import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbarAndFooter/Navbar';
import Heads from '../../components/utilities/Heads';
import Footer from '../../components/navbarAndFooter/Footer';
import { postTestimonial } from '../../store/testimonial';

function Testimonial() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [testimonialData, setTestimonialData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        rating: '',
        feedback: ''
    })
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTestimonialData({
            ...testimonialData,
            [name]: value
        })
    }

    const validate = () => {
        const newError = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!testimonialData.firstName.trim()) {
            newError.firstName = 'First name is required';
        }
        if(!testimonialData.lastName.trim()) {
            newError.lastName = 'Last name is required';
        }
        if(!testimonialData.email.trim()) {
            newError.email = 'Email is required';
        }
        else if(!emailPattern.test(testimonialData.email.trim())) {
            newError.email = 'Please enter a valid email address';
        }
        if(!testimonialData.rating) {
            newError.rating = 'Please select a rating';
        }
        if(!testimonialData.feedback.trim()) {
            newError.feedback = 'Feedback is required';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(validate()) {
            const response = await dispatch(postTestimonial(testimonialData))
            if(postTestimonial.fulfilled.match(response)) {
                const payload = response.payload
                toast.success(payload.message)
                navigate('/')

                setTestimonialData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    rating: '',
                    feedback: ''
                })
            }
            else {
                toast.error(response.error?.message);
            }
        }
    }
    return (
        <div>
            <Navbar />
            <Heads head='Rate our service' />

            <div className='p-12 mt-10 lg:p-8 lg:mt-10 md:p-5'>
                <form onSubmit={handleSubmit} action="" className='w-full p-4 grid gap-3'>
                    <div className='w-full grid gap-2'>
                        <div className='grid grid-cols-2 gap-2 w-full md:grid-cols-1'>
                            <div className='grid gap-1 md:w-full'>
                                <label htmlFor="">First name</label>
                                <input className='w-full h-[40px] outline-none border-2 border-slate-600 rounded-md p-3' type="text" name='firstName' value={testimonialData.firstName} onChange={handleChange} />
                                { error.firstName && <span className='text-red-400 text-[12px]'>{error.firstName}</span> }
                            </div>
                            <div className='grid gap-1 md:w-full'>
                                <label htmlFor="">Last name</label>
                                <input className='w-full h-[40px] outline-none border-2 border-slate-600 rounded-md p-3' type="text" name='lastName' value={testimonialData.lastName} onChange={handleChange} />
                                { error.lastName && <span className='text-red-400 text-[12px]'>{error.lastName}</span> }
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2 w-full md:grid-cols-1'>
                            <div className='grid gap-1 md:w-full'>
                                <label htmlFor="">Email</label>
                                <input className='w-full h-[40px] outline-none border-2 border-slate-600 rounded-md p-3' type="text" name='email' value={testimonialData.email} onChange={handleChange} />
                                { error.email && <span className='text-red-400 text-[12px]'>{error.email}</span> }
                            </div>
                            <div className='grid gap-1 md:w-full'>
                                <label htmlFor="">Rating</label>
                                <select name='rating' value={testimonialData.rating} onChange={handleChange} id="" className='w-full h-[40px] outline-none border-2 border-slate-600 rounded-md'>
                                    <option value=""></option>
                                    <option value="1">1 star</option>
                                    <option value="2">2 star</option>
                                    <option value="3">3 star</option>
                                    <option value="4">4 star</option>
                                    <option value="5">5 star</option>
                                </select>
                                { error.rating && <span className='text-red-400 text-[12px]'>{error.rating}</span> }
                            </div>
                        </div>
                        <div className='grid gap-1 md:w-full'>
                            <label htmlFor="">Feedback</label>
                            <textarea className='w-full h-[120px] p-3 outline-none border-2 border-slate-600 rounded-md' name="feedback" value={testimonialData.feedback} onChange={handleChange} id=""></textarea>
                            { error.feedback && <span className='text-red-400 text-[12px]'>{error.feedback}</span> }
                        </div>
                    </div>
                    <div className='submit_btn'>
                        <button type='submit'>Rate</button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Testimonial