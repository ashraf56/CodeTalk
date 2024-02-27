import getBlogs from '@/util/getBlogs';
import Link from 'next/link';
import React from 'react';

const Allblogs = async () => {
    // let data = await getBlogs()

    return (
        <div >
            <h1>Read letest Blogs</h1>
            <div className='grid grid-cols-3'>


                <div className='card w-96 shadow-2xl p-2 bg-black'>
                    <div className="card-body">
                        <h2 >
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='text-2xl font-bold text-white'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start my-3">
                           <p className='text-white font-semibold '>  Read more </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Allblogs;