
import Link from 'next/link';
import React from 'react';
import imageAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
          return (
                    <div className='container mx-auto flex justify-between mt-6'>
<div></div>
<ul className='flex justify-between items-center gap-5 text-gray-700'>
          <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/about-us"}>About</NavLink></li>
          <li><NavLink href={"/career"}>Career</NavLink></li>
</ul>
<div className='flex items-center gap-2'>
         <Image src={imageAvatar} alt='user' width={50} height={50}></Image>
         <button className='btn bg-purple-500 text-white px-9'><Link href={"/login"}>Login</Link></button>
</div>

                    </div>
          );
};

export default Navbar;