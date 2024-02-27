'use client'

import React, { MouseEvent, useState } from "react";
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { ValidateImage } from "../ValidateImage";
import Link from "next/link";
import { GistImages } from "../GistImages";

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

type FilesProps = {
  files: {
    [key:string]: {
      raw_url: string;
      filename: string;
      language: string;
    }
  }
}

  interface Propslist {
    list: ReposProps[]
    gists: GistProps[]
  }


export function FilterTechnology({ list, gists }:Propslist) {
  const [search, setSearch] = useState('')

  const listRepos = list
  const listGists = gists

  const filteredRepos = (!search || search !== 'All') 
  ? listRepos.filter((repo) => repo.topics.includes(search) )
  : [];

  const filteredNames = listRepos?.map((repo) => repo.name )
  const filteredGists = listGists?.map((repo) => repo.files )
  // const filteredImages = filteredGists?.filter((gist, index) => {
  //   return Object.keys(gist).some((file)=>{
  //     // const data = filteredNames.filter((nameImage) => ({
  //     //   filename: `${file}.svg` === `${nameImage}.svg`
  //     // }))
  //     // const { filename, raw_url } = file
  //     // const array = []
  //     // return array.push(filename, raw_url)
  //     // console.log('---> file', file)
      
  //     return (file === "newPatriciaDivi.svg") && file
  //   })
  // })
  // console.log('----> filteredNames',filteredNames);
  // console.log('----> gists', filteredGists);
  // console.log('----> images', filteredImages);
  console.log('----> listRepos', listRepos);
  


  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const text = event.currentTarget.textContent;
    // console.log('----> text', text?.toLocaleLowerCase())

    if (text) {
      setSearch(text?.toLocaleLowerCase());
    }

  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(event.target.value.toLowerCase())
    console.log("Selected Value:", event.target.value.toLowerCase());
  }
  
  // console.log('---> renderizei', search)
  
  return (
    <>
    {
      // Mobile
      (search === '' || search === 'all') ? (
                          
        <section className="mb-8 w-11/12">
        {/* title | busca */}
        <div 
          className="flex items-center justify-between sm:pl-0 sm:flex-col sm:items-start"
        >
          <h1 
            className="font-bold sm:text-5xl text-3xl mr-4 sm:mb-[-1px]"
          > Meus 
            <span className="text-[#00ADB5]"> Projetos</span>
          </h1>

          <div className="flex sm:gap-2 max-sm:hidden">

            <button
              type="button" 
              className={`${(search === '' || search === 'all') 
              ? "bg-[#00ADB5] border-current" 
              : "bg-[#C7C7C8]"} bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow `}
              value='all'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
              All
            </button>
            
            <button 
              className="bg-[#C7C7C8] dark:bg-[#393E46] bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow"
              value='front-end'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
                Front-end
            </button>
            
            <button 
              className="bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow"
              value='back-end'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
                Back-end
            </button>
            
            <button 
              className="bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow"
              value='full-stack'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
                Full Stack
            </button>
          </div>
          
          <select 
            name="technology" 
            id="technology" 
            value={ search }
            onChange={ handleChange }
            className="py-2 px-4 rounded-lg bg-[#00ADB5] sm:hidden"
          >
            <option value="all" className="text-center">All</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="full-stack">Full-stack</option>
          </select>
          

        </div>

        {/* container card */}
        <div 
          className="sm:flex sm:flex-row sm:flex-wrap sm:justify-around md:space-between md:items-center md:mx-auto gap-6 mt-11 xl:max-w-7xl"
        >
            
          {/* container card */}

        
          {/* <div>
            < GistImages nameGist={filteredNames}/>
          </div> */}
          
          {
            
            listRepos.map((repo, index) => {
              const date = dayjs(repo.created_at).locale('pt-br').format('MMM/YYYY')

              return (
              <div
              key={`${index}-${repo.name}`} 
              className="mb-10 bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 rounded-xl sm:min-h-[350px] sm:w-[368px] shadow-lg duration-300 dark:hover:brightness-50 hover:neutral-150 hover:scale-105"
            >

              <Link   
                href={repo.html_url} 
                target="_blank"
                className="flex flex-col items-center gap-2 p-4"
              >
                    
                <div className="flex items-center justify-end w-[102%] text-xs text-[#00ADB5] font-semibold sm:w-[104%]">
                  <p>{date.toUpperCase()}</p>
                </div>

                <div 
                  className="w-[90%] h-[230px] p-2 bg-[url('https://source.unsplash.com/500x300/?code')] bg-cover bg-center sm:w-[95%] sm:h-[150px]"
                />


                <div 
                  className="flex flex-col justify-between items-start w-[90%] sm:w-[95%]"
                >

                  <div 
                    className="flex items-center justify-between w-full"
                  >

                    <h2 className="text-xl mb-2 text-[#00ADB5] sm:text-2xl">
                      { repo.name.charAt(0).toUpperCase() + repo.name.slice(1) }
                    </h2>

                    <span className="flex items-center gap-1">
                      <ValidateImage listTechs={repo.topics}/>
                     
                    </span>
                  </div>

                  {
                    (repo.description) ? (
                      <p className="tracking-wider leading-6 text-zinc-800 dark:text-white text-base text-left sm:text-left sm:text-base"> 
                        { repo.description }
                      </p>
                     ) : (
                      <p className="tracking-wider leading-6 text-zinc-800 text-base text-left border sm:text-base"> 
                        Descrição ainda não preenchida
                      </p>
                     )
                  }

                  
                  
                  
                </div>

                </Link>
              </div>

              )
            })
          }


        </div>   

        </section>

      ) :
      (
                                
        <section className="mb-8 w-11/12">
        {/* title | busca */}
        <div 
          className="flex items-center justify-between sm:pl-0 sm:flex-col sm:items-start"
        >
          <h1 
            className="font-bold sm:text-5xl text-3xl mr-4 sm:mb-[-1px]"
          > Meus
            <span className="text-[#00ADB5]"> Projetos</span>
          </h1>

          <div className="flex sm:gap-2 max-sm:hidden">

            <button
              type="button"
              className={`${(search === '' || search === 'all') && "bg-[#00ADB5]"} bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow`}
              value='all'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
              All
            </button>
            
            <button 
              className="bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow dark:focus:bg-[#00ADB5]"
              value='front-end'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
                Front-end
            </button>
            
            <button 
              className="bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow dark:focus:bg-[#00ADB5]"
              value='back-end'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
                Back-end
            </button>
            
            <button 
              className="bg-[#C7C7C8] bg-opacity-50 dark:bg-[#393E46] dark:bg-opacity-50 py-3 px-9 rounded-3xl my-4 border border-transparent focus:bg-[#00ADB5] focus:border focus:border-current transition-shadow dark:focus:bg-[#00ADB5]"
              value='full-stack'
              onClick={ ({currentTarget: { value }}) => setSearch(value)}
            >
                Full Stack
            </button>
          </div>
          
          <select 
            name="technology" 
            id="technology" 
            value={ search }
            onChange={ handleChange }
            className="py-2 px-4 rounded-lg bg-[#00ADB5] sm:hidden"
          >
            <option value="all" className="text-center">All</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="full-stack">Full-stack</option>
          </select>
          

        </div>

        {/* container card */}
        <div 
          className="sm:flex sm:flex-row sm:flex-wrap sm:justify-around md:space-between md:items-center md:mx-auto gap-6 mt-11 xl:max-w-7xl"
        >
            
          {/* container card */}
          {
            (filteredRepos.length > 0) ? (

              filteredRepos.map((repo, index) => {
                const date = dayjs(repo.created_at).locale('pt-br').format('MMM/YYYY')

                return (
                <div
                key={`${index}-${repo.name}`} 
                className="mb-10 bg-[#393E46] bg-opacity-50 rounded-xl sm:min-h-[350px] sm:w-[368px] shadow-lg duration-300 dark:hover:brightness-50 hover:brightness-150 hover:scale-105"
              >

                <Link   
                  href={repo.html_url} 
                  target="_blank"
                  className="flex flex-col items-center gap-2 p-4"
                >
                      
                  <div className="flex items-center justify-end w-[102%] text-xs text-[#00ADB5]  sm:w-[104%]">
                    <p>{date.toUpperCase()}</p>
                  </div>

                  <div 
                    className="w-[90%] h-[230px] p-2 bg-[url('https://source.unsplash.com/800x600/?code')] bg-cover bg-center sm:w-[95%] sm:h-[150px]"
                  />

                  {
                    (index >= 0) && (
                      <img 
                          src="https://source.unsplash.com/random/800x600/?code" 
                          alt="" 
                          className="h- w-24 sm:h-24 sm:w-24" 
                        />
                    )
                  }
                  <p>{index}</p>

                  <div 
                    className="flex flex-col justify-between items-start w-[90%] sm:w-[95%]"
                  >

                    <div 
                      className="flex items-center justify-between w-full"
                    >

                      <h2 className="text-xl mb-2 text-[#00ADB5] sm:text-2xl">
                        { repo.name.charAt(0).toUpperCase() + repo.name.slice(1) }
                      </h2>



                      <span
                        key={`${repo.name}-${index}`}
                        className="flex items-center gap-1"
                      >
                        <ValidateImage listTechs={repo.topics}/>
                        {/* <img 
                          src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png" 
                          alt="" 
                          className="h-7 w-7 sm:h-9 sm:w-9" 
                        />

                        <img 
                          src="https://logospng.org/download/css-3/logo-css-3-1024.png" 
                          alt="" 
                          className="h-7 w-7 sm:h-8 sm:w-8" 
                        />

                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" 
                          alt="" 
                          className="h-6 w-6 sm:h-7 sm:w-7" 
                        /> */}
                      </span>
                    </div>

                    {
                      (repo.description) ? (
                        <p className="tracking-wider leading-6 text-white text-base text-left sm:text-left sm:text-sm"> 
                          { repo.description }
                        </p>
                      ) : (
                        <p className="tracking-wider leading-6 text-white text-base text-left border sm:text-sm"> 
                          Descrição ainda não preenchida
                        </p>
                      )
                    }
                    
                  </div>

                  </Link>
                </div>

                )
              })

            ) :
            (
             <>
               <p className="border font-semibold">não tem conteúdo</p>
             </>
            )

          }


        </div>   

        </section>

      )
    }
    
    </>

  );
}