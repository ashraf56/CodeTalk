'use client'
import { UserAuth } from '@/app/context/Authcontext';
import Link from 'next/link';
import React from 'react';

const Logoutaction = () => {
    let { user, logout } = UserAuth()
    const LogOut = async () => {
      try {
        await logout()
        toast.success('success')
      } catch (error) {
      }
    }
    return (
        <div>
             <li>{user ? <a onClick={LogOut}>Logout</a> : <Link href={'/login'}>Log in</Link>}</li>
        </div>
    );
};

export default Logoutaction;