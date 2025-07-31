import clsx from "clsx"
import type { PropsWithChildren } from "react"

export async function Wrapper({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        `w-full mx-auto max-w-[1000px] flex flex-col justify-center items-center bg-black/100 text-white pb-0 overflow-hidden rounded-2xl`,
      )}
    >
      <div className="flex flex-col items-center gap-4 flex-1 text-center w-full p-8 pb-4">
        <div className="flex flex-col gap-10">{children}</div>
      </div>
      <footer className="flex justify-between items-center w-full self-stretch px-8 py-3 text-sm bg-gray-12/[.07] overflow-hidden">  
        <p className="text-xs text-white">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="text-xs text-white">Powered by Realie & OpenAI</p>
      </footer>
    </div>
  )
}
