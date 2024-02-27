import getBlogs from '@/util/getBlogs';
import Link from 'next/link';
import React from 'react';

const Allblogs = async() => {
    let data = await getBlogs()

    return (
        <div>
            {
                data.map(b => (
                    <div key={b._id}>
 <div dangerouslySetInnerHTML={{ __html: b?.content.slice(0,700)+'......' }} /> 
 <div>
    {b.tag.map((t,i)=> <p key={i}>{t}</p> )}
 </div>
 <Link href={`/blogdetail/${b._id}`}>detail</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Allblogs;