import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import margeret from '../../img/team/margeret.jpg';
import kelechi from '../../img/team/kelechi.jpg';
import ewuzie from '../../img/team/Ewuzie.jpg';
import gloria from '../../img/team/gloria.jpg';
import edu from '../../img/studyAbr.png';
import logistic from '../../img/log.png';
import visa from '../../img/why-people-travel-hero.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Main() {
    const team = [
        {
            name: 'Margaret Mere',
            role: 'Managing Partner',
            desc: 'Margaret is a managing partner at HOCDAVI Investment Limited with over 15years of experience in serving immigrants from visa consulting and working with Nigeria government on pilgrimage package working on this area inspired me on my functions at HOCDAVI on organizational and strategies in our goals in helping young youth achieve there big dreams in there educational values with this skills and knowledge I have been able to recruit students from every parts of the world.',
            img: margeret
        },
        {
            name: 'Ewuzie Mishark Chidinma',
            role: 'Strategic Partner',
            desc: 'Ewuzie is a Strategic Partner at HOCDAVI Investment Limited with over a decade of experience in helping businesses grow through Strategic Engagement, Corporate Communication and Deepening Market Acquisitions with information technology. Specializing in GoTo Market Strategic and Key Account Management, Ewuzie uses that experience to drive recruitment and achieve the organisation goal for successful student enrollment into various university partners.',
            img: ewuzie
        },
        {
            name: 'Kelechi Mere',
            role: 'Managing Partner',
            desc: 'Kelechi Mere serves as the Managing Partner at HOCDAVI Investment Limited, leveraging over a decade of specialized expertise in immigration matters. His pivotal role in marketing non-governmental pilgrim sponsorships in Nigeria has honed his deep understanding of immigration intricacies. Kelechi excels in orchestrating tailored seminars for diverse audiences, a distinctive skill that amplifies the strategic advantages for HOCDAVI Investment Limited.',
            img: kelechi
        },
        {
            name: 'Gloria Oluchi Cookey',
            role: 'Tourist and Logistic Partner',
            desc: "Gloria, a Tourist and Logistic Partner at HOCDAVI Investment Limited, boasts over 12 years of expertise in driving business growth in the tourism and logistics sector. Leveraging advanced technology, she excels in Go-To-Market Strategies, Key Account Management, and expanding market reach to enhance tourist engagement and optimize logistic operations. Her initiatives spearhead recruitment efforts, aiming to significantly increase tourist influx and facilitate streamlined logistics within a network of diverse partnerships.",
            img: gloria
        }
    ];

    const businessObjectives = [
        {
            head: 'To be a leading provider of comprehensive educational services and consultancy:',
            description: "HOCDAVI Investment Limited aims to establish itself as a prominent player in the field of educational services and consultancy. This objective involves offering a wide range of educational programs, training, and consultancy services to educational institutions, students, and professionals to enhance learning outcomes and foster academic excellence."
        },
        {
            head: 'To build a reliable information service platform:',
            description: "HOCDAVI Investment Limited strives to create a robust information service platform that delivers accurate, timely, and relevant information to its clients. This objective involves utilizing technology and industry expertise to curate and disseminate high-quality information across various sectors and domains, catering to the needs of businesses, academia, and individuals."
        },
        {
            head: 'To provide exceptional business support and development services:',
            description: "HOCDAVI Investment Limited seeks to be recognized for its exceptional business support and development services. This objective entails offering a comprehensive suite of services to startups, small and medium enterprises (SMEs), and established companies, including market research, strategic planning, financial analysis, and operational support, to help them achieve sustainable growth and success."
        },
        {
            head: 'To foster strategic partnerships and collaborations:',
            description: "HOCDAVI Investment Limited aims to forge strong strategic partnerships and collaborations with educational institutions, organizations, and businesses globally. This objective involves actively seeking and engaging in partnerships that complement its service offerings, expand its reach, and create mutual value for all stakeholders."
        },
        {
            head: 'To prioritize customer satisfaction and excellence:',
            description: "HOCDAVI Investment Limited places a high emphasis on customer satisfaction and excellence in service delivery. This objective involves implementing quality control measures, gathering customer feedback, and continuously improving its services to exceed client expectations and establish long-term relationships with its customers."
        },
        {
            head: 'To promote innovation and continuous learning:',
            description: "HOCDAVI Investment Limited is committed to fostering a culture of innovation and continuous learning within the organization. This objective entails encouraging employees to stay updated with industry trends, explore innovative solutions, and adapt to changing market demands, thereby positioning the company as a forward-thinking and dynamic player in the market."
        },
        {
            head: 'To achieve sustainable growth and profitability:',
            description: "HOCDAVI Investment Limited aims to achieve sustainable growth and profitability in all its business verticals. This objective involves prudent financial management, identifying new revenue streams, optimizing operational efficiency, and exploring opportunities for expansion while maintaining a strong focus on ethical business practices."
        }
    ];

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/apply');
    };

    const container1 = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .7,
                duration: 1,
                mass: .4,
                damping: 7,
                when: 'beforeChildren',
                staggerChildren: 0.7,
                type: 'tween',
                stiffness: 120
            }
        }
    }

    const container2 = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .7,
                duration: 1,
                mass: .4,
                damping: 7,
                when: 'beforeChildren',
                staggerChildren: 2,
                type: 'tween',
                stiffness: 150
            }
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const testimonials = useSelector((state) => state.testimonial.testimonials)
    console.log(testimonials)

    return (
        <div className=''>
            <motion.div className="abt-us lg:p-8 p-12 text-center lg:mt-10 mt-20 md:p-5"
                variants={container1}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                <motion.h3 className=' lg:text-3xl text-4xl font-bold lg:mb-5 mb-8'>Welcome to HOCDAVI Investment Limited!</motion.h3>
                <motion.p className=' text-lg'>
                    At HOCDAVI Investment Limited, we are committed to transforming lives through education and consultancy. We believe that knowledge is the cornerstone of growth and empowerment, and our mission is to provide comprehensive and innovative educational services and consultancy to individuals, institutions, and organizations worldwide.
                </motion.p>
            </motion.div>

            <div className="why-chs lg:p-8 p-12 text-center lg:mt-10 mt-20 bg-slate-800 text-slate-100 md:p-5"
            >
                <h3 className='lg:text-3xl text-4xl font-bold lg:mb-5 mb-8'>Business Objective for HOCDAVI Investment Limited :</h3>
                <div className="whyOutl grid grid-cols-2 gap-x-8 gap-y-8 mt-12 md:grid-cols-1">
                    {
                        businessObjectives.map((obj, ind) => (
                            <motion.div
                                variants={container2}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                key={ind} className="why-line w-full rounded-xl bg-blue-800 p-5">
                                <h3 className='font-semibold text-xl mb-4'>{obj.head}</h3>
                                <p className=''>{obj.description}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>

            <motion.div className="products lg:p-8 p-12 text-center lg:mt-10 mt-20 md:p-5" >
                <motion.h3
                    variants={container1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='lg:text-3xl text-4xl font-bold lg:mb-5 mb-8'>Our products</motion.h3>
                <motion.p className=' text-lg'>
                    HOCDAVI Investment Limited offers a comprehensive range of products and services as an educational services firm and visa agency, catering to the diverse needs of individuals, institutions, and organizations. Our offerings include:
                </motion.p>
                <motion.div className="prdSvr grid gap-y-8 text-slate-100 mt-8">
                    <div className="prdList w-full bg-slate-800 grid grid2nd gap-x-4 p-6 text-start rounded-xl lg:gap-y-6 lg:p-4">
                        <motion.div
                            variants={container2}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className="prdListImg w-full h-72 rounded-xl">
                            <img className='w-full h-full object-cover rounded-xl' src={edu} alt="" />
                        </motion.div>
                        <motion.div
                            variants={container1}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className="prdListText w-full bg-blue-800 p-3 rounded-xl">
                            <h4 className='font-semibold text-xl mb-4'>Do you want to study abroad ?</h4>
                            <p>
                                Explore endless possibilities by studying abroad with HOCDAVI. We facilitate seamless educational experiences for students aspiring to gain international exposure. Our services encompass guidance on selecting suitable programs, handling visa procedures, and ensuring a smooth transition to your chosen educational destination. Unlock global opportunities for learning and personal growth with us.
                            </p>
                        </motion.div>
                    </div>
                    <div className="prdList w-full bg-slate-800 grid gridInv gap-x-4 p-6 text-start rounded-xl lg:flex lg:flex-col-reverse lg:gap-y-6 lg:p-4">
                        <motion.div
                            variants={container2}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className="prdListText w-full bg-blue-800 p-3 rounded-xl">
                            <h4 className='font-semibold text-xl mb-4'>Get your Visa with us and travel to your desired country successful</h4>
                            <p>
                                Obtain your visa hassle-free through our visa application services. We provide comprehensive assistance and guidance throughout the visa application process, ensuring a successful and smooth travel experience to your desired destination.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={container1}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }} className="prdListImg w-full h-72 rounded-xl">
                            <img className='w-full h-full object-cover rounded-xl' src={visa} alt="" />
                        </motion.div>
                    </div>
                    <div className="prdList w-full bg-slate-800 grid grid2nd gap-x-4 p-6 text-start rounded-xl lg:gap-y-6 lg:p-4">
                        <motion.div
                            variants={container2}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className="prdListImg w-full h-72 rounded-xl">
                            <img className='w-full h-full object-cover rounded-xl' src={logistic} alt="" />
                        </motion.div>
                        <motion.div
                            variants={container1}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className="prdListText w-full bg-blue-800 p-3 rounded-xl">
                            <h4 className='font-semibold text-xl mb-4'>Looking to import and export your goods ?</h4>
                            <p>
                                Streamline import-export operations with our efficient logistics solutions. Simplify trade endeavors through our comprehensive services, designed to optimize and facilitate your global business transactions effectively.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="why-chs lg:p-8 p-12 text-center lg:mt-10 mt-20 bg-slate-800 text-slate-100 md:p-5"
            >
                <h3 className='lg:text-3xl text-4xl font-bold lg:mb-5 mb-8'>Why Choose HOCDAVI Investment Limited ?</h3>
                <motion.div
                    variants={container1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} className="whyOutl grid grid-cols-2 gap-x-8 gap-y-8 mt-12 md:grid-cols-1">
                    <motion.div className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <GiSkills className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Expertise</h3>
                        <p className=' text-lg'>
                            Our team comprises highly skilled professionals with extensive experience in the education and consultancy sectors, ensuring reliable and knowledgeable support.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={container1}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <FaHandshake className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Client-Centric Approach</h3>
                        <p className=' text-lg'>
                            We prioritize understanding the unique needs of our clients and tailor our services to provide customized solutions that address their specific requirements.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={container1}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }} className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <AiOutlineGlobal className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Global Reach</h3>
                        <p className=' text-lg'>
                            With a strong global presence, we serve clients from various industries and backgrounds, promoting diversity and inclusivity in our offerings.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={container1}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }} className="why-line w-full rounded-xl bg-blue-800 p-5">
                        <div className="whyLogo flex items-center justify-center">
                            <CgPerformance className='text-5xl mb-2' />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Lasting Impact</h3>
                        <p className=' text-lg'>
                            We are dedicated to making a positive and lasting impact on the lives of individuals and the performance of organizations through our educational services and consultancy.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className="meetTeam lg:p-8 p-12 text-center lg:mt-10 mt-20 bg-slate-800 text-slate-100 md:p-5"
            >
                <motion.h3 className='text-4xl font-bold lg:mb-5 mb-8'>Meet Our Team</motion.h3>
                <motion.div className="teamInfo lg:mt-10 mt-12 grid lg:grid-cols-1 gap-y-4">
                    {
                        team.map((team, id) => (
                            <motion.div
                                variants={container2}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }} key={id} className="member grid grid2 gap-y-4 gap-x-5 bg-blue-800 p-3 rounded-xl">
                                <div className="tmImg w-full h-96 rounded-xl">
                                    <img className=' w-full h-full rounded-xl object-cover' src={team.img} alt="" />
                                </div>
                                <div className="tmInfo text-start">
                                    <h3 className='text-xl font-semibold'>{team.name}</h3>
                                    <h4 className='font-semibold mb-3'>{team.role}</h4>
                                    <p>{team.desc}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

            {
                testimonials.length > 0 ? <div className='px-[10rem] py-[3rem] md:px-3 md:py-3'>
                    <h3 className='lg:text-3xl text-4xl font-bold lg:mb-5 mb-8 text-center'>What people say about HOCDAVI</h3>
                    <Slider {...settings}>
                        {
                            testimonials.map((test) => (
                                <div key={test._id} className='bg-blue-700 p-4 rounded-md text-slate-50'>
                                    <div className='grid gap-8 text-center'>
                                        <div>
                                            <h3 className='font-semibold text-[14px]'>{test.firstName} {test.lastName}</h3>
                                            <div className='flex gap-1 items-center justify-center'>
                                                {
                                                    Array.from({ length: test.rating }).map((_, ind) => (
                                                        <FaStar className='text-yellow-300' key={ind} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <FaQuoteLeft className='mx-auto' />
                                            <p className='text-[22px]'>{test.feedback}</p>
                                            <FaQuoteRight className='mx-auto' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div> : <div></div>
            }

            <motion.div className="strtNw lg:p-8 p-12 text-center lg:mt-10 mt-20 md:p-5"
                variants={container1}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                <motion.h3 className=' lg:text-3xl text-6xl font-bold lg:mb-5 mb-8'>Secure your spot in top-ranked universities while entrusting us with your import/export, contracts, and diverse supply needs.</motion.h3>
                <motion.p className=' lg:text-base text-lg'>
                    Ensure your entry into esteemed universities while relying on us for your import/export, contracts, and various supply necessities. Nurture your aspirations and strive for academic brilliance. We pride ourselves on facilitating students' admissions to diverse study destinations with our exceptional expertise.
                </motion.p>
                <motion.button onClick={handleNavigate} className=' w-64 mt-12 hover:scale-110 duration-700 h-12 bg-blue-800 text-slate-100 font-semibold rounded-lg md:mt-8'>Start Your Journey With Us</motion.button>
            </motion.div>
        </div >
    )
}

export default Main