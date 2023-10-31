import Html from '@/images/html_5.svg'
import Css from '@/images/css.svg'
import JavaScript from '@/images/javascript.svg'
import TypeScript from '@/images/typescript.svg'
import Docker from '@/images/docker.svg'
import Nodejs from '@/images/nodejs.svg'
import Image from 'next/image';

type TechsProps = {
  listTechs: string[];

}
export function ValidateImage({listTechs}: TechsProps) {
  // let imagemSrc = ''
  const techs = listTechs

  return (
    <>
    {
      techs && techs?.map((tech, index) => {
        // console.log(tech)

        switch(tech) {
          case 'html5':
          return (
              <Image 
                key={`${index}-${tech}`}
                src={Html}
                alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                width={28} height={28} 
              />
          );

          case 'html':
          return (
              <Image 
                key={`${index}-${tech}`}
                src={Html} 
                alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                width={28} height={28} 
              />
          )

          case 'css3':
          return (
              <Image 
                key={`${index}-${tech}`}
                src={Css} 
                alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                width={28} height={28} 
              />
          )

          case 'typescript':
            return (

                <Image 
                  key={`${index}-${tech}`}
                  src={TypeScript} 
                  alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                  width={28} height={28} 
                />
          )

          case 'javascript':
          return (
              <Image 
                key={`${index}-${tech}`}
                src={JavaScript} 
                alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                width={28} height={28} 
              />
          )

          case 'docker':
          return (
              <Image 
                key={`${index}-${tech}`}
                src={Docker} 
                alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                width={28} height={28} 
              />
          )

          case 'nodejs':
          return (
              <Image 
                key={`${index}-${tech}`}
                src={Nodejs} 
                alt={`Imagem da logo da liguagem/marcação de text, chamada de ${tech}`}
                width={28} height={28} 
              />
          )

          default:
           return null;

        }

      })
    }
    
    </>
    
  );
}