import { Github, Linkedin, Codepen } from "lucide-react";

export function RedesSociais() {
  return (
    <>
        <button
          type="button"
         className="flex flex-col gap-2 items-center justify-center">
          <Github className="dark:text-violet-700 text-violet-600"/>
          Github
        </button>

        <button
         type="button" 
         className="flex flex-col gap-2 items-center justify-center">
          <Linkedin className="dark:text-violet-700 text-violet-600"/>
          Linkedin
        </button>

        <button 
         type="button" 
         className="flex flex-col gap-2 items-center justify-center">
          <Codepen className="dark:text-violet-700 text-violet-600"/>
          Codepen
        </button>
    </>
  );
}