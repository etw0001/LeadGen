import Image from "next/image";
import { Wrapper } from "@/components/wrapper"
import { LeadGenerationForm } from "@/components/lead-generation-form"
import type { Metadata } from "next"

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4">
      <Wrapper>
        <div className="px-1 flex flex-col w-full self-stretch">
          <LeadGenerationForm />
        </div>        
      </Wrapper>
    </div>
  )
}
