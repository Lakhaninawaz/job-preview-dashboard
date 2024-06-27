'use client'
import Footer from '@/components/Footer';
import Link from 'next/link'
import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import "./dashboard.css"

const Dashboard = () => {
    const [isActive, setIsActive] = useState(0)
    const menus = [
        { title: "Job preview", path: "#", },
        { title: "Applicants", path: "#", },
        { title: "Match", path: "#", },
        { title: "Messages", path: "#", },
    ]

    return (
        <div>
            <div className="dashboard__header">
                <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0 py-1 px-7 gap-5">
                    {menus.map((item, idx) => (
                        <li
                            key={idx}
                            className={`flex gap-2 items-center justify-center text-[#5D5D5D] ${idx === isActive ? '' : ''
                                } px-5 py-3 rounded-full`}
                            onClick={() => setIsActive(idx)}
                        >
                            <Link href={item.path} className={`${idx === isActive ? 'underline-small text-red-500' : ''}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
            <div className="dashboard flex w-full h-screen">
                <div className="left job_detail w-3/4 h-fit border-r-2">
                    <div className="job_header px-20 py-4 pb-2 flex gap-5 items-center">
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
                        <p className='flex flex-col justify-center font-medium'>
                        1. Handle the UI/UX research design <br />
                        2. Work on researching on latest web applications designs & trends<br /> 
                        3. Work on conceptualizing and visualizing<br /> 
                        4. Work on creating graphics content and other graphic related works<br />
<span className='my-1 block'>Benefits:</span>
<span className='my-1 block'>• Health insurance</span>
<span className='my-1'>• Provident Fund</span>
<span className='my-1 block'>Schedule:</span>
<span className='my-1'>• Day shift</span>
<span className='my-1 block'>Supplemental pay types:</span>
<span className='my-1'>• Performance bonus</span>
<span className='my-1'>• Yearly bonus</span>
<span className='my-1 block'>Work Location: In person</span>
                        </p>
                    </div>
                    <hr />
                    <Footer />
                </div>
                <div className="right px-8 py-5 w-1/4 h-full">
                    <div className="buttons flex justify-between">
                        <button className='bg-red-50 text-red-500 border border-red-500 px-6 rounded-xl flex gap-2 justify-center items-center'><RiDeleteBin6Line />Delete job</button>
                        <button className='bg-red-500 text-white border-2 border-[#FED3CA] px-7 py-3 rounded-xl flex gap-2 justify-center items-center'><LuPencil />Edit job</button>
                    </div>
                    <div className="more_details pt-5 px-2">
                        <div className="first_col flex justify-between items-center my-4">
                            <p className='text-[#4F4F4F] flex items-center justify-center gap-2'><LuUsers />Applicants</p>
                            <h1 className='font-extrabold text-[#3D3D3D]'>400</h1>
                        </div>
                        <hr />
                        <div className="second_col flex justify-between items-center my-4">
                            <p className='text-[#4F4F4F] flex items-center justify-center gap-2'><TbUserCheck />Matches</p>
                            <h1 className='font-extrabold text-[#3D3D3D]'>100</h1>
                        </div>
                        <hr />
                        <div className="third_col flex justify-between items-center my-4">
                            <p className='text-[#4F4F4F] flex items-center justify-center gap-2'><FiMessageSquare />Messages</p>
                            <h1 className='font-extrabold text-[#3D3D3D]'>147</h1>
                        </div>
                        <hr />
                        <div className="fourth_col flex justify-between items-center my-4">
                            <p className='text-[#4F4F4F] flex items-center justify-center gap-2'><IoEyeOutline />Views</p>
                            <h1 className='font-extrabold text-[#3D3D3D]'>800</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard