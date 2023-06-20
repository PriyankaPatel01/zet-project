"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown]=useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3" >
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/images/logo.svg" alt="zet logo" width={100} height={100} className="object-contain" />
      </Link>
      {/*Desktop nav */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="./" >Home</Link>
          <Link href="./about" >About Us</Link>
          <Link href="#" >Partner with Us</Link>
          <Link href="#" >Blog</Link>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Download ZET</button>
        </div>
      </div>
      {/*Mobile navigation*/}

      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image src="/images/three.png" width={37} height={37} className="rounded-full" alt="three" onClick={()=>setToggleDropdown((prev)=>!prev)}/>
          {toggleDropdown && (
            <div className="dropdown">
              <Link href="#"  className="dropdown_link" onClick={()=>setToggleDropdown(false)}>Home</Link>
              <Link href="#"  className="dropdown_link" onClick={()=>setToggleDropdown(false)}>About Us</Link>
              <Link href="#"  className="dropdown_link" onClick={()=>setToggleDropdown(false)}>Partner with Us</Link>
              <Link href="#"  className="dropdown_link" onClick={()=>setToggleDropdown(false)}>Blog</Link>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setToggleDropdown(false)} >Download ZET</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
