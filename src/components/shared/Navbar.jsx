'use client'
import Link from 'next/link';
import React from 'react';
import imageAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
const { data: session ,isPending} = authClient.useSession()
// console.log(session,'sesion');
const user = session?.user || {}
console.log(user,isPending,'se');

          return (
                    <div className='container mx-auto flex justify-between mt-6'>
<div></div>
<ul className='flex justify-between items-center gap-5 text-gray-700'>
          <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/about-us"}>About</NavLink></li>
          <li><NavLink href={"/career"}>Career</NavLink></li>
</ul>

{/* {isPending ? <span className="loading loading-spinner loading-xl"></span> :  user ? (<div className='flex items-center gap-2'>
          <h2>Hello , {user.name}</h2>
         <Image src={user.image || imageAvatar} alt='user' width={50} height={50} className='rounded-full'></Image>
         <button className='btn bg-purple-500 text-white px-9' onClick={async()=> await authClient.signOut()}>LoginOut</button>
         
</div>) : (<button className='btn bg-purple-500 text-white px-9'><Link href={"/login"}>Login </Link></button>)} */}

{isPending ? (
  <span className="loading loading-spinner loading-xl"></span>
) : user ? (
  <div className='flex items-center gap-2'>
    <h2>Hello, {user.name}</h2>
    <Image 
      src={user?.image || imageAvatar} 
      alt='user' 
      width={50} 
      height={50} 
      className='rounded-full'
    />
    <button 
      className='btn bg-purple-500 text-white px-9'
      onClick={async () => await authClient.signOut()}
    >
      <Link href={"/login"}>LoginOut</Link>
    </button>
  </div>
) : (
  <button className='btn bg-purple-500 text-white px-9'>
    <Link href={"/login"}>Login</Link>
  </button>
)}



                    </div>
          );
};

export default Navbar;