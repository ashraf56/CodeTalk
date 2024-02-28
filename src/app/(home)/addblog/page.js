'use client'
import React from 'react';
import BlogForm from './BlogForm';

const addblog = () => {
    return (
        <div>
            <div className=" min-h-screen shadow-xl   ">
                <h1 className="text-5xl text-center text-white font-bold py-5 px-4 ">Post a Blog</h1>

                <div className=" hero-content mx-auto ">
                    <div className="card  w-full max-w-4xl 2xl:max-w-full shadow-md bg-base-300">

                        <BlogForm></BlogForm>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default addblog;