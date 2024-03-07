import React from 'react';
import Header from '../Compoent/Header/Header';
import Allblogs from '../Compoent/AllBlogs/Allblogs';

const Homecompo = () => {
    return (
        <div className='h-full min-h-full bg-[#000]'>
            
      <Header></Header>
      <Allblogs></Allblogs>
      
        </div>
    );
};

export default Homecompo;