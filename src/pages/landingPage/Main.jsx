import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { MdDoubleArrow } from "react-icons/md";
import margeret from '../../img/team/margeret.jpg';
import kelechi from '../../img/team/kelechi.jpg'
import { useNavigate } from 'react-router-dom';

function Main() {
    const eduSvr = ['Study Abroad Programs: Assisting students in exploring international educational opportunities and guiding them through the application and visa process.', 'Professional Development: Conducting workshops and training programs to equip individuals with the skills and knowledge needed to excel in their careers.', 'Vocational Training: Delivering specialized vocational training programs to prepare individuals for various industries and job roles.', 'Educational Consulting: Offering expert advice and guidance to educational institutions seeking to enhance their curriculum, teaching methodologies, and overall effectiveness.'];

    const visSvr = ['Visa Consultation: Providing comprehensive visa consultation services to help clients understand visa requirements and application procedures for various countries.', 'Student Visas: Assisting students in obtaining the appropriate student visas to study abroad, ensuring a smooth transition to their chosen educational institutions.', 'Work Visas: Supporting individuals and businesses in securing work visas to enable international employment opportunities.', 'Tourist Visas: Facilitating the application process for tourist visas, ensuring seamless travel experiences for leisure and exploration.', 'Business Visas: Assisting corporate clients in obtaining business visas to facilitate international trade, conferences, and meetings.', 'Visa Document Preparation: Ensuring accurate and timely completion of visa application forms and necessary documentation.', 'Visa Processing and Follow-up: Managing the visa application process on behalf of clients, including liaising with embassies and consulates for efficient processing.'];

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/apply');
    };

    return (
        <div className=''>
            <div className="abt-us p-8 sm:p-12 text-center mt-10 sm:mt-20">
                <h3 className=' text-3xl sm:text-4xl font-bold mb-5 sm:mb-8'>Welcome to HOCDAVI Investment Limited!</h3>
                <p className=' text-lg'>
                    At HOCDAVI Investment Limited, we are committed to transforming lives through education and consultancy. We believe that knowledge is the cornerstone of growth and empowerment, and our mission is to provide comprehensive and innovative educational services and consultancy to individuals, institutions, and organizations worldwide.
                </p>
            </div>
            <div className="why-chs p-8 sm:p-12 text-center mt-10 sm:mt-20 bg-slate-800 text-slate-100">
                <h3 className='text-3xl sm:text-4xl font-bold mb-5 sm:mb-8'>Why Choose HOCDAVI Investment Limited ?</h3>
                <div className="whyOutl grid grid-cols-2 gap-x-8 gap-y-8 mt-12">
                    <div className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <GiSkills className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Expertise</h3>
                        <p className=' text-lg'>
                            Our team comprises highly skilled professionals with extensive experience in the education and consultancy sectors, ensuring reliable and knowledgeable support.
                        </p>
                    </div>
                    <div className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <FaHandshake className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Client-Centric Approach</h3>
                        <p className=' text-lg'>
                            We prioritize understanding the unique needs of our clients and tailor our services to provide customized solutions that address their specific requirements.
                        </p>
                    </div>
                    <div className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <AiOutlineGlobal className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Global Reach</h3>
                        <p className=' text-lg'>
                            With a strong global presence, we serve clients from various industries and backgrounds, promoting diversity and inclusivity in our offerings.
                        </p>
                    </div>
                    <div className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <CgPerformance className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Lasting Impact</h3>
                        <p className=' text-lg'>
                            We are dedicated to making a positive and lasting impact on the lives of individuals and the performance of organizations through our educational services and consultancy.
                        </p>
                    </div>
                </div>
            </div>

            {/* <marquee className='flags flex items-center gap-x-5 p-12 text-center mt-20' behaviour='scroll' direction='left'>
                {
                    flags.map((flag, id) => (
                        <img key={id} src={flag} alt="" className=' w-96 h-56 inline-block' />
                    ))
                }
            </marquee> */}

            <div className="products p-8 sm:p-12 text-center mt-10 sm:mt-20">
                <h3 className='text-3xl sm:text-4xl font-bold mb-5 sm:mb-8'>Our products</h3>
                <p className=' text-lg'>
                    HOCDAVI Investment Limited offers a comprehensive range of products and services as an educational services firm and visa agency, catering to the diverse needs of individuals, institutions, and organizations. Our offerings include:
                </p>
                <div className="prdSvr grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-12">
                    <div className="eduSvr bg-slate-800 p-5 rounded-xl text-slate-100">
                        <h3 className='font-semibold text-xl mb-4'>Educational Services:</h3>
                        <div className="eduList grid gap-y-3 sm:gap-y-6">
                            {
                                eduSvr.map((edu, ind) => (
                                    <div key={ind} className="edu flex items-baseline gap-x-4 text-start p-3 bg-blue-800 rounded-xl">
                                        <div className="eduIcon">
                                            <MdDoubleArrow />
                                        </div>
                                        <div className="svrTxt">
                                            <span>{edu}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='visSvr bg-slate-800 p-5 rounded-xl text-slate-100'>
                        <h3 className='font-semibold text-xl mb-4'>Visa Services:</h3>
                        <div className='visList grid gap-y-3 sm:gap-y-6'>
                            {
                                visSvr.map((vis, ind) => (
                                    <div key={ind} className="edu flex items-baseline gap-x-4 text-start p-3 bg-blue-800 rounded-xl">
                                        <div className="eduIcon">
                                            <MdDoubleArrow />
                                        </div>
                                        <div className="svrTxt">
                                            <span>{vis}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="meetTeam p-8 sm:p-12 text-center mt-10 sm:mt-20 bg-slate-800 text-slate-100">
                <h3 className='text-4xl sm:text-4xl font-bold mb-5 sm:mb-8'>Meet Our Team</h3>
                <div className="teamInfo mt-12 grid grid-cols-1 gap-y-4">
                    <div className="member grid grid2 gap-x-5 bg-blue-800 p-3 rounded-xl">
                        <div className="tmImg w-full h-96 rounded-xl">
                            <img className=' w-full h-full rounded-xl' src={margeret} alt="" />
                        </div>
                        <div className="tmInfo text-start">
                            <h3 className='text-xl font-semibold'>Margaret Mere</h3>
                            <h4 className='font-semibold mb-3'>Managing Partner</h4>
                            <p>Margaret is a managing partner at HOCDAVI Investment Limited with over 15years of experience in serving immigrants from visa consulting and working with Nigeria government on pilgrimage package working on this area inspired me on my functions at HOCDAVI on organizational and strategies in our goals in helping young youth achieve there big dreams in there educational values with this skills and knowledge I have been able to recruit students from every parts of the world.</p>
                        </div>
                    </div>
                    <div className="member grid grid2 gap-x-5 bg-blue-800 p-3 rounded-xl">
                        <div className="tmImg w-full h-96 rounded-xl">
                            <img className=' w-full h-full rounded-xl' src={kelechi} alt="" />
                        </div>
                        <div className="tmInfo text-start">
                            <h3 className='text-xl font-semibold'>Kelechi Mere</h3>
                            <h4 className='font-semibold mb-3'>Managing Partner</h4>
                            <p>Kelechi Mere serves as the Managing Partner at HOCDAVI Investment Limited, leveraging over a decade of specialized expertise in immigration matters. His pivotal role in marketing non-governmental pilgrim sponsorships in Nigeria has honed his deep understanding of immigration intricacies. Kelechi excels in orchestrating tailored seminars for diverse audiences, a distinctive skill that amplifies the strategic advantages for HOCDAVI Investment Limited.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="strtNw p-12 text-center mt-20">
                <h3 className='text-6xl font-bold mb-8'>Secure Your Place In Top Ranked Universities!</h3>
                <p className=' text-lg'>
                    Fuel your passion & aim for academic excellence. We boast of our excellence in helping students gain admission in various study destinations.
                </p>
                <button onClick={handleNavigate} className=' w-64 mt-12 hover:scale-110 duration-700 h-12 bg-blue-800 text-slate-100 font-semibold rounded-lg'>Start Your Journey With Us</button>
            </div>
        </div>
    )
}

export default Main