'use client'

import { ReactNode } from "react";
import { ThemeChoice } from "@/components/ThemeChoice";
import { ThemeProvider } from "next-themes";

    export function Providers({
      children,
    }: {
      children: ReactNode
    }) {

      // const prefersThemes = window.matchMedia('(prefers-color-scheme: dark)').matches
      // {(window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'ligth'}
      // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    return (
      <ThemeProvider attribute="class">
        <ThemeChoice />
        {children}
      </ThemeProvider>
    );
    }