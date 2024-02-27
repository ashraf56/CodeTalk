import getBlogs from '@/util/getBlogs';
import Link from 'next/link';
import React from 'react';

const Allblogs = async () => {
    // let data = await getBlogs()

    return (
        <div >
            <h1>Read letest Blogs</h1>
            <div className='grid grid-cols-3'>
            

                    <div className='card w-96 shadow-2xl p-2'>
<div className='card-body'>
<h1 className='text-white'>Author</h1>
</div>
                    </div>
               
            </div>
        </div>
    );
};

export default Allblogs;