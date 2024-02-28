// "use client"

import 'dayjs/locale/pt-br'

// dayjs.updateLocale('pt-br')
import { makeRequest } from "@/lib/api";

import Html from '@/images/html_5.svg'
import JavaScript from '@/images/javascript.svg'
import TypeScript from '@/images/typescript.svg'

import { FilterTechnology } from "@/components/repositories/FilterTechnology";
import { ProjectComingSoon } from '@/components/ProjectComingSoon';

// type UserProps = {
//   avatar_url: string;
//   bio: string;
//   id: number;
//   name: string;
//   location: string;
//   login: string;
//   public_repos: string;
//   followers: number;
//   following: number;
//   url: string;
// }

type GistProps = {
  id: number;
  url: string;
  html_url: string;
  description: string;
  files: {
    [key:string]: {
      raw_url: string;
      filename: string;
      language: string;
    }
  }

}

type ReposProps = {
  name: string;
  full_name: string;
  id: number;
  visibility: string;
  created_at: string;
  git_url: string;
  html_url: string;
  language: string;
  description: string;
  topics: string[];
  releases: string[];
}

export default async function Page() {
  // const responseUser: UserProps = await makeRequest('patriciadivi', 'get')
  // const gists: GistProps[] = await makeRequest('patriciadivi/gists', 'get')
  const repos: ReposProps[] = await makeRequest('patriciadivi/repos', 'get')

  // const user = [responseUser]

  const iconsLiguagens:Array<string> = [ Html, JavaScript, TypeScript ]

  return (
    <main className="flex flex-col items-center">

      {/* <FilterTechnology list={ repos } gists={ gists } /> */}
      {/* <FilterTechnology list={ repos } />  */}
      
      {/* <pre className="text-left ml-auto mr-auto pl-4 text-xs">{JSON.stringify(repos, null, 2)}</pre> */}
      <section className="mb-8 w-11/12">
        {/* title | busca */}
        <div 
          className="flex items-center justify-center sm:pl-0 sm:flex-col sm:items-start"
        >
          <h1 
            className="font-bold sm:text-5xl max-sm:text-5xl text-3xl mr-4 sm:mb-[-1px]"
          > Meus 
            <span className="text-[#00ADB5]"> Projetos</span>
          </h1>
        </div>
        <ProjectComingSoon />
      </section>
    </main>
  );
}