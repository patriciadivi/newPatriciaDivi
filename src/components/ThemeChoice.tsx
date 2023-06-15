// 'use client'

import {useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, MoonStar } from 'lucide-react'
import { NavBar } from "./NavBar";
    
export function ThemeChoice() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  // const { theme, resolvedTheme, systemTheme, setTheme } = useTheme()
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  // {(window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'ligth'}
  // console.log('---> currentTheme', currentTheme);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
      setMounted(true) 
  }, [])

  if (!mounted) {
    return null
  }

  return (
      <main>
        <section className="flex items-center w-full justify-between">
        <NavBar />
        <div className="flex items-center justify-end h-20">
          <button
            type="button"
            className="p4 w-auto flex items-center rounded" 
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {
              theme && (
              resolvedTheme === 'dark' ? (
                <span className="dark:text-white/90 flex gap-2  items-center justify-center "> 
                  <Sun className="h-6 w-6 dark:text-orange-300 ml-4 mr-4" />
                </span>
              ) : (
                <p className="dark:text-white/90 flex gap-2 items-center justify-center"> 
                  <MoonStar className="h-6 w-6 text-sky-600 ml-4 mr-4"/>
                </p>
              ) 
            )}
          </button>
        </div>
        </section>
    </main>
  );
}