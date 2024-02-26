import Image from 'next/image';
import React from 'react';
import Login from '../Compoent/Login/Login';
import imgs from '@/asset/code.png'

const login = () => {
    return (
        <div>
             <div className=" my-10  max-w-5xl justify-center mx-auto">
                <div className="hero-content flex-col lg:flex-row card shadow-2xl dark:text-white ">
                    <div className='max-w-full w-full  text-center mx-auto justify-center items-center '>
                        <Image src={imgs} width={100} height={100} alt='auth' className='mx-auto animate-spin '></Image>
                        <h1 className='text-xl text-center font-bold uppercase px-10 pt-3'>Sign in now</h1>
                        <p className='pt-2 text-sm '>Join Us Today and Unlock Endless Possibilities!</p>
                    </div>
                    <div className='w-full  bg-[#0072BB] card-body  rounded-e-lg'>
                        <h1 className="text-2xl text-center font-bold py-2">Log in Now</h1>
                        <Login/>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;