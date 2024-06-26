'use client'
import Footer from '@/components/Footer';
import Link from 'next/link'
import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";

const Dashboard = () => {
    const [isActive, setIsActive] = useState()
    const menus = [
        { title: "Job preview", path: "#", },
        { title: "Applicants", path: "#", },
        { title: "Match", path: "#", },
        { title: "Messages", path: "#", },
    ]

    return (
        <div>
            <div className="dashboard__header">
                <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0 py-2 px-7 gap-5">
                    {menus.map((item, idx) => (
                        <li
                            key={idx}
                            className={`flex gap-2 items-center justify-center text-[#5D5D5D] ${idx === isActive ? '' : ''
                                } px-5 py-3 rounded-full`}
                            onClick={() => setIsActive(idx)}
                        >
                            <Link href={item.path} className={`${idx === isActive ? 'text-red-500 underline under underline-offset-1' : ''}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
            <div className="dashboard flex w-full h-screen">
                <div className="left job_detail w-3/4">
                    <div className="job_header px-16 py-4 pb-2 flex gap-5 items-center">
                        <h1 className='text-3xl font-semibold'>Senior Product Designer</h1>
                        <p className='text-[#5D5D5D]'>• posted 2 days ago</p>
                        <p className='bg-green-200 text-green-600 font-semibold px-2 py-1 rounded-full text-[12px]'>• Open</p>
                    </div>
                    <div className="job_location px-16 pb-5 mt-5 flex gap-5 text-[#5D5D5D]">
                        <p className='flex items-center justify-center gap-3'><CiLocationOn className='text-lg' />Delaware, USA</p>
                        <p className='flex items-center justify-center gap-3'>• <FaCoins />$300k-$400k</p>
                    </div>
                    <hr />
                    <div className="skill_required px-16 py-4 mt-5 flex gap-24 text-sm">
                        <div className="skill">
                            <p>Skills Required</p>
                            <p className='flex gap-3 items-center border rounded-full mt-1 w-fit px-2 border-[#D0D5DD]'><FaFigma />Figma</p>
                            <p className='flex gap-3 items-center border rounded-full mt-1 w-fit px-2 border-[#D0D5DD]'><SiAdobeillustrator />Adobe Illustrator</p>
                            <p className='flex gap-3 items-center border rounded-full mt-1 w-fit px-2 border-[#D0D5DD]'><SiAdobexd />Adobe XD</p>
                        </div>
                        <div className="language">
                            <p>Preferred Language</p>
                            <p className='font-semibold'>English</p>
                        </div>
                        <div className="type">
                            <p>Type</p>
                            <p className='font-semibold'>Full time</p>
                        </div>
                        <div className="experience">
                            <p>Years of Experience</p>
                            <p className='font-semibold'>3+ Years of Experience</p>
                        </div>
                    </div>
                    <hr />
                    <div className="job_description px-16 py-4 mt-5 mb-5 text-sm" >
                        <p className='text-[#5D5D5D] pb-4'>About the job</p>
                        <p>
                        1. Handle the UI/UX research design <br />
                        2. Work on researching on latest web applications designs & trends<br /> 
                        3. Work on conceptualizing and visualizing<br /> 
                        4. Work on creating graphics content and other graphic related works<br />
<p className='my-1'>Benefits:</p>
<li className='my-1'>Health insurance</li>
<li className='my-1'>Provident Fund</li>
<p className='my-1'>Schedule:</p>
<li className='my-1'>Day shift</li>
<p className='my-1'>Supplemental pay types:</p>
<li className='my-1'>Performance bonus</li>
<li className='my-1'>Yearly bonus</li>
<p className='my-1'>Work Location: In person</p>
                        </p>
                    </div>
                    <hr />
                    <Footer />
                </div>
                <div className="right w-1/4 h-full bg-blue-500">

                </div>
            </div>
        </div>
    )
}

export default Dashboard