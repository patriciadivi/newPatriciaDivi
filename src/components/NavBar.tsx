// 'use client'

import { useState } from "react";
import Link from "next/link";

import { AlignRight, FileCode2, Home, User, X } from 'lucide-react';

export function NavBar() {
  const [ menu, toggleMenu ] = useState<boolean>(false)

  return (
    <section>
      {/* Menu Web */}
      <div className="max-sm:hidden flex items-center justify-center">
        {/* <div className="w-2 h-20 dark:bg-[#323232] bg-neutral-300 cursor-not-allowed"/> */}
        <div className="w-2 h-20 dark:bg-[#00ADB5] bg-[#00ADB5] cursor-not-allowed"/>
      <Link href='/' className="ml-8 mr-2 duration-150 hover:pb-4 hover:border-b-2 hover:font-semibold hover:text-[#00ADB5] dark:hover:text-[#00ADB5] dark:hover:texttext-[#00ADB5] hover:border-[#00ADB5]">
        HOME
      </Link>
      <Link href='/projects' className="ml-8 mr-2 duration-150 hover:pb-4 hover:border-b-2 hover:font-semibold hover:text-[#00ADB5] dark:hover:text-[#00ADB5] dark:hover:texttext-[#00ADB5] hover:border-[#00ADB5]">
        PROJETOS
      </Link>

      <Link href='/contact' className="ml-8 mr-2 duration-150 hover:pb-4 hover:border-b-2 hover:font-semibold hover:text-[#00ADB5] dark:hover:text-[#00ADB5] dark:hover:texttext-[#00ADB5] hover:border-[#00ADB5]">
        CONTATO
      </Link>

    </div>

    {/* Menu mobile */}
    <div className="sm:hidden">
      <button 
        type="button"
        onClick={ () => toggleMenu(menu === false ? true : false) }
      >
        {
          (menu === false) ? (
          <AlignRight className="ml-4 duration-200 hover:text-[#00ADB5]" />
          ) 
          : (
            <X className="ml-4 duration-200 hover:text-[#00ADB5]"/>
          )
        }
      
        {
          (menu) && (
            <div className="absolute w-full h-[91%] left-0 flex flex-col items-center justify-center dark:bg-backgroundDark bg-white mt-6 transition-all">

            <Link href='/' className="flex flex-col items-center justify-center p-4 transition-all hover:text-[#00ADB5] dark:hover:text-[#00ADB5]">
            <Home className="mb-4" />
              HOME
            </Link>  
            
            <Link href='/projects' className="flex flex-col items-center justify-center p-4 transition-all hover:text-[#00ADB5] dark:hover:text-[#00ADB5]">
              <FileCode2 className="mb-4" />
              PROJETOS
            </Link>

            <Link href='/contact' className="flex flex-col items-center justify-center p-4 transition-all hover:text-[#00ADB5] dark:hover:text-[#00ADB5]">
              <span><User className="mb-4" /></span>
              CONTATO
            </Link>

            </div>
          )
        }
      </button>
    </div>
    </section>
  );
}