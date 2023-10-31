import { Perfil } from "@/components/Perfil";

export default async function Home() {
  return (
    <main className="h-[90vh] pb-2 scroll-smooth flex flex-col justify-between items-center sm:justify-around sm:pb-0">
      {/* Perfil */}
      <Perfil />

    </main>
  )
}
