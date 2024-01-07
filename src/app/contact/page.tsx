"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios';
import { GistImages } from '@/components/GistImages';

const contactFormSchema = z.object({
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres').max(100),
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido!'),
  message: z.string().min(1, 'A mensagem precisa ter no mínimo 1 caracteres').max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function Page() {
  const [search, setSearch ] = useState<string>('')
  const {
    register,
    reset,
    handleSubmit,
     formState: { errors } 
    } = useForm<ContactFormData>({
      resolver: zodResolver(contactFormSchema)
  })


  const submitMessage = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      reset()
    } catch  {
      alert('erro')
      
    }
  }


  return (
    <main className="flex flex-col items-center">
      {
        // Search Bar
        search === '' || search === 'all' ?
        (
                    
          <section className="mb-8 w-11/12">
          {/* title | busca */}
          <div 
            className="flex items-center justify-between pl-4 pr-4 sm:pl-0 sm:flex-col sm:items-certer  sm:mb-10"
          >
            <h1 className="font-bold sm:text-5xl text-4xl sm:mb-[-1px]">Entre em 
            <span className="text-[#00ADB5]"> contato</span></h1>
         

          </div>

          {/* container card */}
          <div 
            className="sm:flex sm:flex-row sm:flex-wrap sm:justify-around md:space-between md:items-center md:mx-auto gap-6 mt-3 xl:max-w-7xl"
          >
              
            {/* container card */}
              <section 
                className="bg-[#C7C7C8] dark:bg-[#393E46] bg-opacity-50 flex flex-col items-center gap-2 p-4 rounded-xl sm:w-[468px]"
              >
   
                <form 
                  onSubmit={handleSubmit(submitMessage)} 
                  className="w-full flex flex-col my-4"
                >
                  <label htmlFor="" className="font-semibold leading-tight text-[#00ADB5] sm:text-xl">
                    Nome
                  </label>

                  <input 
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    className="p-4 rounded-lg my-3  bg-zinc-300 text-zinc-900 placeholder:text-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:[#00ADB5] focus:ring-offset-2 focus:ring-offset-zinc-200 dark:focus:ring-offset-zinc-900"
                    {...register("name")}
                    // autoFocus
                    // value={title}
                    // onChange={({target: { value }}) => setTitle(value)}
                  />

                  {
                    errors.name && <span>{errors.name.message}</span>
                  }

                  <label htmlFor="" className="font-semibold leading-tight mt-4 text-[#00ADB5] sm:text-xl">
                    E-mail
                  </label>

                  <input 
                    type="email"
                    id="email"
                    placeholder="Digite sua e-mail"
                    className="p-4 rounded-lg my-3 bg-zinc-300 text-zinc-900 placeholder:text-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:[#00ADB5] focus:ring-offset-2 focus:ring-offset-zinc-200 dark:focus:ring-offset-zinc-900"
                    {...register("email")}
                    // autoFocus
                    // value={title}
                    // onChange={({target: { value }}) => setTitle(value)}
                  />

                  {
                    errors.email && <span>{errors.email.message}</span>
                  }

                  <label htmlFor="" className="font-semibold leading-tight mt-4 text-[#00ADB5] sm:text-xl">
                    Mensagem
                  </label>

                  <textarea 
                    // type="text"
                    id="message"
                    placeholder="Digite sua mensagem"
                    className="p-4 rounded-lg my-3 h-36  bg-zinc-300 text-zinc-900 placeholder:text-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:[#00ADB5] focus:ring-offset-2 focus:ring-offset-zinc-200 dark:focus:ring-offset-zinc-900"
                    {...register("message")}
                    // autoFocus
                    // value={title}
                    // onChange={({target: { value }}) => setTitle(value)}
                  />

                  {
                    errors.message && <span>{errors.message.message}</span>
                  }

                    <button 
                        type="submit" 
                        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    >
                        {/* <Check size={20} weight="bold" /> */}
                        Confirmar
                    </button>
                </form>

              </section>

          </div>
          </section>
        ) : (
          <p>render com filtro</p>
        )
      }
      {/* <div>
        <GistImages nameGist="habits"/>
      </div> */}
    </main>

  );
}