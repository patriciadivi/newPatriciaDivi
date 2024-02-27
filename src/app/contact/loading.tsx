import { CardSkeleton } from "@/components/skeletons/CardSkeleton";

export default function Loading(){
  return(
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="flex flex-col items-center justify-center">
      <div className="bafore:-translate-x-full relative mb-4 h-5 w-11/12 space-y-3 overflow-hidden rounded-md bg-neutral-600 p-3 shadow before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg"></div>

      <div className="bafore:-translate-x-full relative mb-4 h-5 w-8/12 space-y-3 overflow-hidden rounded-md bg-neutral-600 p-3 shadow before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg"></div>
      <CardSkeleton/>
      </div>
    </div>
  )
}