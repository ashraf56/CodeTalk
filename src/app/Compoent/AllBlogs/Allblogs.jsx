import getBlogs from '@/util/getBlogs';
import Link from 'next/link';
import React from 'react';

const Allblogs = async () => {
    let data = await getBlogs() 

    return (
        <div className='container mx-auto ' >

            <div className='grid grid-cols-3  gap-3 mx-auto  p-10'>

{
    data?.map(d=> (
        <div key={d?._id} className='card w-96 h-full shadow-2xl border-2 border-white hover:border-blue-600 p-2 bg-black transition duration-300 ease-linear transform text-white hover:transition-3s hover:bg-white hover:text-black hover:bg-gradient-to-tl '  >
                    <div className="card-body">
                        <div >
                            <span className='pe-3'>{d.date}</span>
                            <div className="badge badge-secondary mx-2">React </div>
                        </div>
                        <p className='text-2xl font-bold  '>{d?.title}</p>
                        <div className="card-actions justify-start my-3">
                            <div className=' font-semibold '>  Read more </div>
                        </div>
                    </div>
                </div>
    ))
}
                
               

            </div>
        </div>
    );
};

export default Allblogs;