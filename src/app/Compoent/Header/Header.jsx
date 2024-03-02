import React from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex-col lg:flex gap-2  text-center mx-auto items-center bg-black text-white md:min-h-[90v] p-10'>
            <div className='max-w-5xl mx-auto '>

                <span className='font-extrabold text-4xl uppercase '>Learn Easily, Master Seamlessly </span>

                <p className='text-base '>The ultimate resource for learning programming in Bengali. Find incredible training and the latest information on our website. Step-by-step examples and clear explanations provide an unparalleled opportunity to learn programming in a personalized and professional manner</p>
            </div>
            <div className=' w-full  mx-auto mt-5 justify-center '>
                <div className='bg-base-100 mx-auto justify-between flex rounded-full input items-center max-w-lg'>
                    <input type="text" className='bg-base-100  px-3 outline-none ' placeholder='Search Here' /> <span className='  text-xl '><IoSearchCircleSharp className='text-4xl' /></span>
                </div>

            </div>
        </div>
    );
};

export default Header;