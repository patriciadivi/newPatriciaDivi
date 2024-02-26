import { CardSkeleton } from "@/components/skeletons/CardSkeleton";

export default function Loading(){
  return(
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 max-md:flex-col  md:space-x-4 ">
      <div className="flex items-center justify-center gap-y-5 gap-x-8 sm:flex-wrap w-[900px] max-sm:flex-col">
      <div className="h-5 w-1/3 bg-neutral-600 mb-4 bafore:-translate-x-full relative space-y-3 overflow-hidden rounded-md p-3 shadow before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg"></div>
      <div className="h-5 w-1/4 bg-neutral-600 mb-4 bafore:-translate-x-full relative space-y-3 overflow-hidden rounded-md p-3 shadow before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg"></div>
        <CardSkeleton/>
      </div>
    </div>
  )
}