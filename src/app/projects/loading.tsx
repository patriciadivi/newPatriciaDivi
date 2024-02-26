import { CardSkeleton } from "@/components/skeletons/CardSkeleton";

export default function Loading(){
  return(
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 max-md:flex-col  md:space-x-4 ">
      <div className="flex items-center justify-center gap-y-5 gap-x-8 sm:flex-wrap w-[900px] max-sm:flex-col">
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
    </div>
  )
}