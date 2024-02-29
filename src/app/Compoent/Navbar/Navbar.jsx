import React from 'react';
import lgo from '@/asset/code.png';
import Image from 'next/image';
import Link from 'next/link';
import Logoutaction from './Logoutaction';
const Navbar = async() => {


 
  return (
    <div className=' bg-black  '>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image src={lgo} width={30} height={30} alt='logo' /><span>Code Talk</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href={'/'}>Home</Link></li>

            <li><a> Blog </a></li>
           {  <li><Link href={'/addblog'}>Create blog</Link></li>}
           <Logoutaction></Logoutaction>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;