import { Mail } from "lucide-react";
import Image from "next/image";
import { RedesSociais } from "./RedesSociais";

export function Perfil() {

  return (
    <section className="w-11/12 max-sm:flex max-sm:flex-col max-sm:items-center sm:flex sm:justify-between sm:flex-row">

    <article className="ml-auto mr-auto flex flex-col items-center">
      <div className="p-2 mb-2 ml-auto mr-auto">
        <Image 
          src="https://avatars.githubusercontent.com/u/38478917?v=4" 
          alt="Foto de perfil da patricia"
          width={200}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full border border-green-500 m-2"
        />
      </div>

      {/* Redes Sociais */}
      <div className="w-11/12 flex items-center justify-center gap-3">
        <RedesSociais />
      </div>
    </article>

    <div className="m-2 pl-2 sm:w-3/5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
    <h1 className="text-center sm:text-left max-[394px]:text-2xl mt-1">
      Olá, me chamo Patrícia <br/>
      Uma Desenvolvimento Full Stack.
    </h1>
    {/* <p>Em busca de melhorar a vida das pessoas com meus códigos, 
      e no meio dessa trajetória ter um crescimento profissional, podendo
      contribuir com a comunidade tech.
    </p> */}
    <p className="text-justify sm:text-left sm:mb-8 mb-2 max-w-md leading-normal text-lg">
    Meu portfólio reflete minha paixão por melhorar a vida das pessoas através do desenvolvimento de código. Busco crescimento profissional e contribuição para a comunidade tech. Meus projetos mostram resultados tangíveis e contribuições significativas. Priorizo objetivos e crio soluções inovadoras para atender às necessidades dos usuários. Meus códigos reflete meu crescimento contínuo e minha paixão em fazer a diferença na tecnologia.
    </p>

    <button type="button" className=" mt-4 w-[242px] h-[57px] flex gap-2 justify-center items-center dark:bg-[#323232] bg-neutral-300 ">
      <Mail className="dark:text-violet-700 text-violet-600"/>
      patricia.dvsp@gmail.com
    </button>
    </div>
  </section>
  )
}