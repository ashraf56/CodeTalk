'use client'
import { UserAuth } from '@/app/context/Authcontext';
import React from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";

const Header = () => {
    let {search,Setsearch}=UserAuth()
    return (
        <div className='flex-col lg:flex gap-2  text-center mx-auto items-center bg-black text-white md:min-h-[90v] p-10'>
            <div className='max-w-5xl mx-auto '>

                <span className='font-extrabold text-4xl uppercase  '>Learn Easily, Master Seamlessly </span>

                <p className='text-base pt-2'>Welcome to Codtalk, your go-to destination for insightful articles, tutorials, and discussions on all things coding. Dive into our curated collection of blog posts covering a wide range of topics, from programming languages and frameworks to best practices and industry trends.</p>
            </div>
            <div className=' w-full  mx-auto mt-5 justify-center '>
                <div className='bg-base-100 mx-auto justify-between flex rounded-full input items-center max-w-lg'>
                    <input type="text" className='bg-base-100  px-3 outline-none ' placeholder='Search Here'  onChange={(e) => Setsearch(e.target.value)}/> <span className='  text-xl '><IoSearchCircleSharp className='text-4xl' /></span>
                </div>

            </div>
        </div>
    );
};

export default Header;