import React from 'react';

const Header = () => {
    return ( 
        <div className='flex gap-6 mx-auto justify-center items-center bg-base-200  md:min-h-[90v] p-10'>
           <div className='lg:w-3/6'>
           <h1 className='font-extrabold text-xl uppercase'>Learn Easily, Master Seamlessly </h1>
            <p>The ultimate resource for learning programming in Bengali. Find incredible training and the latest information on our website. Step-by-step examples and clear explanations provide an unparalleled opportunity to learn programming in a personalized and professional manner</p>
           </div>
           <div className='lg:3/6'>
            <input type="text" className='input ' /> 
           </div>
        </div>
    );
};

export default Header;