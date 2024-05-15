import React from 'react';
import Heads from '../../components/utilities/Heads';
import { AiOutlineGlobal } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from 'framer-motion';
import Chat from '../../components/utilities/Chat';

function AboutUs() {
  const heads = 'About us';

  const values = [
    {
      head: 'Excellence',
      text: 'We strive for excellence in everything we do, ensuring the highest quality of educational services and consultancy that meet and exceed  expectations.'
    },
    {
      head: 'Integrity',
      text: 'Trust is the foundation of our relationships with our clients and partners. We uphold the highest ethical standards and transparency in all our  interactions.'
    },
    {
      head: 'Innovation',
      text: 'We embrace creativity and continuously seek innovative approaches to deliver cutting-edge educational solutions and consultancy services.'
    },
    {
      head: 'Empowerment',
      text: 'Our purpose is to empower individuals and organizations to reach their full potential by providing them with the tools, knowledge, and skills they   need to succeed.'
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
  };

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
  };

  return (
    <div className='abtUs'>
      <Heads head={heads} />

      <div className="abtMain">
        <motion.div className="abt-us p-12 text-start mt-10 lg:p-8 lg:mt-10 md:p-5"
          variants={container1}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h3 className='text-4xl font-bold mb-6 lg:text-3xl lg:mb-4'>Welcome to HOCDAVI Investment Limited!</h3>
          <p className=' text-lg'>
            At HOCDAVI Investment Limited, we are committed to transforming lives through education and consultancy. We believe that knowledge is the   cornerstone of growth and empowerment, and our mission is to provide comprehensive and innovative educational services and consultancy to   individuals, institutions, and organizations worldwide.
          </p>
        </motion.div>

        <motion.div className="why-chs lg:p-8 p-12 text-center lg:mt-10 mt-20 bg-slate-800 text-slate-100 md:p-5"
          variants={container2}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h3 className='lg:text-3xl text-4xl font-bold lg:mb-5 mb-8'>Business Objective for HOCDAVI Investment Limited :</h3>
          <motion.div className="whyOutl grid grid-cols-2 gap-x-8 gap-y-8 mt-12 md:grid-cols-1">
            {
              businessObjectives.map((obj, ind) => (
                <motion.div className="why-line w-full rounded-xl bg-blue-800 p-5">
                  <h3 className='font-semibold text-xl mb-4'>{obj.head}</h3>
                  <p className=''>{obj.description}</p>
                </motion.div>
              ))
            }
          </motion.div>
        </motion.div>

        <motion.div
          className="coreValues p-12 text-start mt-10 lg:p-8 lg:mt-10 md:p-5"
          variants={container1}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h3 className='text-4xl font-bold mb-6 lg:text-3xl lg:mb-4'>Our Core Values</h3>
          <div className="corevalExp grid grid-cols-1 gap-y-5 bg-slate-800 p-5 rounded-xl text-slate-100">
            {
              values.map((val, id) => (
                <div key={id} className="value flex items-baseline gap-x-4 text-start p-3 bg-blue-800 rounded-xl">
                  <div className="valIcon">
                    <MdDoubleArrow />
                  </div>
                  <div className="valTxt">
                    <h4 className='font-bold text-lg'>{val.head}:</h4>
                    <p>{val.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </motion.div>

        <motion.div className="why-chs p-12 text-center mt-20 bg-slate-800 text-slate-100 lg:p-8 lg:mt-10 md:p-5"
          variants={container2}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h3 className='text-4xl font-bold mb-8 text-start lg:text-3xl lg:mb-4'>Why Choose HOCDAVI Investment Limited ?</h3>
          <div className="whyOutl grid grid-cols-2 gap-x-8 gap-y-8 mt-12 md:grid-cols-1">
            <div className="why-line w-full rounded-xl bg-blue-800 p-5">
              <div className="whyLogo flex items-center justify-center">
                <GiSkills className='text-5xl mb-2' />
              </div>
              <h3 className='font-semibold text-xl mb-4'>Expertise</h3>
              <p className=' text-lg'>
                Our team comprises highly skilled professionals with extensive experience in the education and consultancy sectors, ensuring reliable and   knowledgeable support.
              </p>
            </div>
            <div className="why-line w-full rounded-xl bg-blue-800 p-5">
              <div className="whyLogo flex items-center justify-center">
                <FaHandshake className='text-5xl mb-2' />
              </div>
              <h3 className='font-semibold text-xl mb-4'>Client-Centric Approach</h3>
              <p className=' text-lg'>
                We prioritize understanding the unique needs of our clients and tailor our services to provide customized solutions that address their specific   requirements.
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
                We are dedicated to making a positive and lasting impact on the lives of individuals and the performance of organizations through our   educational services and consultancy.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="join p-12 mt-10 text-center lg:p-8 lg:mt-10 md:p-5"
          variants={container2}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h3 className='text-6xl font-bold mb-6 lg:text-4xl lg:mb-4'>Join Us Now!</h3>
          <p className=' text-lg'>
            Join us on our journey to build a better, more informed, and empowered world. Whether you are a student seeking knowledge, an institution striving  for growth, or a business aiming to thrive, Avodah Global Ventures Limited is your reliable partner on the path to success.
            Together, let's unlock the potential of education and consultancy for a brighter future!
          </p>
          <button className=' w-64 mt-12 hover:scale-110 duration-700 h-12 bg-blue-800 text-slate-100 font-semibold rounded-lg'>Start Your Journey With Us</  button>
        </motion.div>
      </div>
      <Chat />
    </div>
  )
}

export default AboutUs