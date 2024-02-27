import { Github, Linkedin, Codepen } from "lucide-react";

export function RedesSociais() {
  return (
    <>
        <button
          type="button"
         className="flex flex-col gap-2 items-center justify-center">
          <Github className="dark:text-[#00ADB5] text-[#00ADB5]"/>
          Github
        </button>

        <button
         type="button" 
         className="flex flex-col gap-2 items-center justify-center">
          <Linkedin className="dark:text-[#00ADB5] text-[#00ADB5]"/>
          Linkedin
        </button>

        <button 
         type="button" 
         className="flex flex-col gap-2 items-center justify-center">
          <Codepen className="dark:text-[#00ADB5] text-[#00ADB5]"/>
          Codepen
        </button>
    </>
  );
}