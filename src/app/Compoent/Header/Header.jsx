import React from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";

const Header = () => {
    return ( 
        <div className='flex-col lg:flex gap-2 mx-auto justify-center items-center bg-base-200  md:min-h-[90v] p-20'>
           <div className='w-full lg:w-3/6 text-center'>
           <h1 className='font-extrabold text-4xl uppercase'>Learn Easily, Master Seamlessly </h1>
            <p className='text-xs'>The ultimate resource for learning programming in Bengali. Find incredible training and the latest information on our website. Step-by-step examples and clear explanations provide an unparalleled opportunity to learn programming in a personalized and professional manner</p>
           </div>
           <div className=' w-full lg:w-3/6  mt-5 '>
            <div className='bg-base-100 mx-auto justify-around  flex rounded-full input items-center max-w-md'>
            <input type="text" className='bg-base-100  px-3 outline-none ' placeholder='Search Here' /> <span className='  text-xl '><IoSearchCircleSharp className='text-4xl' /></span>
            </div>

           </div>
        </div>
    );
};

export default Header;