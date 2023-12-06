import React from 'react';
import Heads from '../../components/utilities/Heads';
import { MdDoubleArrow } from "react-icons/md";

function Services() {
    const head = 'Our Services';

    const eduSvr = [
        {
            head: 'Study Abroad Programs',
            text: 'Assisting students in exploring international educational opportunities and guiding them through the application and visa process.'
        },
        {
            head: 'Professional Development',
            text: 'Conducting workshops and training programs to equip individuals with the skills and knowledge needed to excel in their careers.'
        },
        {
            head: 'Vocational Training',
            text: 'Delivering specialized vocational training programs to prepare individuals for various industries and job roles.'
        },
        {
            head: 'Educational Consulting',
            text: 'Offering expert advice and guidance to educational institutions seeking to enhance their curriculum, teaching methodologies, and overall effectiveness.'
        }
    ];

    const visSvr = [
        {
            head: 'Visa Consultation',
            text: 'Providing comprehensive visa consultation services to help clients understand visa requirements and application procedures for various countries.'
        },
        {
            head: 'Student Visas',
            text: 'Assisting students in obtaining the appropriate student visas to study abroad, ensuring a smooth transition to their chosen educational institutions.'
        },
        {
            head: 'Work Visas',
            text: 'Supporting individuals and businesses in securing work visas to enable international employment opportunities.'
        }, 
        {
            head: 'Tourist Visas',
            text: 'Facilitating the application process for tourist visas, ensuring seamless travel experiences for leisure and exploration.'
        },
        {
            head: 'Business Visas',
            text: 'Assisting corporate clients in obtaining business visas to facilitate international trade, conferences, and meetings.'
        },
        {
            head: 'Visa Document Preparation',
            text: 'Ensuring accurate and timely completion of visa application forms and necessary documentation.'
        }, 
        {
            head: 'Visa Processing and Follow-up',
            text: 'Managing the visa application process on behalf of clients, including liaising with embassies and consulates for efficient processing.'
        }
    ]
    return (
        <div className='services'>
            <Heads head={head} />
            <div className="main">
                <div className="prd p-12 text-start mt-10">
                    <h3 className='text-4xl font-bold mb-6'>Our products</h3>
                    <p className=' text-lg'>
                        HOCDAVI Investment Limited offers a comprehensive range of products and services as an educational services firm and visa agency, catering to the diverse needs of individuals, institutions, and organizations. Our offerings include:
                    </p>
                </div>

                <div className="eduPrd p-12 text-start mt-4">
                    <h3 className='text-4xl font-bold mb-6'>Our Education Services</h3>
                    <p>
                        We offer a wide range of educational services tailored to meet the diverse needs of our clients. From early childhood education to professional development and vocational training, we cater to every stage of the learning journey. Our team of experienced educators and subject matter experts are dedicated to nurturing a passion for learning and unlocking the full potential of our students.
                    </p>
                    <div className="prdSvr grid grid-cols-1 gap-y-5 bg-slate-800 p-5 rounded-xl text-slate-100 mt-4">
                        {
                            eduSvr.map((edu, ind) => (
                                <div key={ind} className="edu flex items-baseline gap-x-4 text-start p-3 bg-blue-800 rounded-xl">
                                    <div className="eduIcon">
                                        <MdDoubleArrow />
                                    </div>
                                    <div className="svrTxt">
                                        <h4 className='font-bold text-lg'>{edu.head}</h4>
                                        <span>{edu.text}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="eduPrd p-12 text-start mt-4">
                    <h3 className='text-4xl font-bold mb-6'>Our Consultancy Services</h3>
                    <p>
                        Our consultancy services are designed to support organizations in achieving their goals and overcoming challenges in the ever-changing landscape of the global market. Whether it's strategic planning, market research, project management, or organizational development, our team of seasoned consultants provides personalized solutions that drive growth and sustainable success.
                    </p>
                    <div className="prdSvr grid grid-cols-1 gap-y-5 bg-slate-800 p-5 rounded-xl text-slate-100 mt-4">
                        {
                            visSvr.map((visa, ind) => (
                                <div key={ind} className="edu flex items-baseline gap-x-4 text-start p-3 bg-blue-800 rounded-xl">
                                    <div className="eduIcon">
                                        <MdDoubleArrow />
                                    </div>
                                    <div className="svrTxt">
                                        <h4 className='font-bold text-lg'>{visa.head}</h4>
                                        <span>{visa.text}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services