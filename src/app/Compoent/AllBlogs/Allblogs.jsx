'use client'
import { UserAuth } from '@/app/context/Authcontext';
import getBlogs from '@/util/getBlogs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Allblogs = () => {
    const [data, setData] = useState([]);
    let { flterBLogs } = UserAuth()
    let [loading, SetLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {

            try {
                const blogsData = await getBlogs();
                setData(blogsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                SetLoading(false);
            }
        };

        fetchData();

    }, []);


    const filterdata = data.filter(flterBLogs)
    return (
        <div className='container mx-auto  py-2' >

            {loading && filterdata.length === 0 ? (<div className="  flex justify-center items-center min-h-[60vh] ">
                <div className="w-max ">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>) : filterdata.length > 0 ? <div className='grid grid-cols-3  gap-3 mx-auto  p-10'>


                {filterdata?.map(d => (
                    <div key={d?._id} className='card w-96 h-72 shadow-2xl border-2 border-white hover:border-blue-600 p-2 bg-black transition duration-300 ease-linear transform text-white hover:transition-3s hover:bg-white hover:text-black hover:bg-gradient-to-tl '  >
                        <div className="card-body">
                            <div >
                                <span className='pe-3'>{d?.date}</span>
                                {d?.tag.slice(0, 2).map((t, i) => (
                                    <div key={i} className="badge badge-secondary mx-2"> {t}</div>
                                ))
                                }
                            </div>
                            <p className='text-2xl font-bold  '>{d?.title}</p>
                            <div className="card-actions justify-start my-3">
                                <div className=' font-semibold hover:text-cyan-600 cursor-pointer'>  Read more </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                :
                <div className=" flex justify-center items-center min-h-[60vh]">
                    <div className="w-max ">
                        <h2 className='uppercase font-bold '>NO blog available</h2>
                    </div>
                </div>
            }




        </div>
    );
};

export default Allblogs;