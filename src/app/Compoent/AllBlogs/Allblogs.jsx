import Link from 'next/link';
import React from 'react';

const Allblogs = async () => {
    //  let data = await getBlogs() 

    return (
        <div className='container mx-auto' >
            <h1 className='text-white py-10 font-bold'>Read letest Blogs</h1>
            <div className='grid grid-cols-3  gap-3 mx-auto  p-10'>


            <div className='card w-96 shadow-2xl p-2 bg-black'  >
                    <div className="card-body">
                        <div >
                            <span className='pe-3'>Mar 1, 24</span>
                            <div className="badge badge-secondary mx-2">React </div>
                        </div>
                        <p className='text-2xl font-bold text-white'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start my-3">
                           <div className='text-white font-semibold '>  Read more </div>
                        </div>
                    </div>
                </div>
                <div className='card w-96 shadow-2xl p-2 bg-black'  >
                    <div className="card-body">
                        <div >
                            <span className='pe-3'>Mar 1, 24</span>
                            <div className="badge badge-secondary mx-2">React </div>
                        </div>
                        <p className='text-2xl font-bold text-white'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start my-3">
                           <div className='text-white font-semibold '>  <Link href={`/detailblog`}>Read more</Link> </div>
                        </div>
                    </div>
                </div>
                <div className='card w-96 shadow-2xl p-2 bg-black'  >
                    <div className="card-body">
                        <div >
                            <span className='pe-3'>Mar 1, 24</span>
                            <div className="badge badge-secondary mx-2">React </div>
                        </div>
                        <p className='text-2xl font-bold text-white'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start my-3">
                           <div className='text-white font-semibold '>  <Link href={`/detailblog`}>Read more</Link> </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Allblogs;