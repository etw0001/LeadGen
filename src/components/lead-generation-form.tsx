"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

import {
  Select,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export function LeadGenerationForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [businessType, setBusinessType] = useState("")
  const [serviceArea, setServiceArea] = useState("")

  const isValid = businessType !== "" && serviceArea !== ""

  return (
    <div className="w-full mx-auto max-w-4xl flex flex-col items-center gap-8 p-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-medium text-slate-12 tracking-[-0.025em]">LeadGen</h1>
        <p className="text-base text-[rgb(119,123,132)] max-w-2-xl tracking-[-0.05em]">
          Smarter local marketing starts here. Enter your business type and service area to find the best neighborhoods for lead generation.
        </p>
      </div>
    
      {/* Form Fields */}
      <div className="space-y-4 w-full">
        {/* Business Type Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <label className="text-sm font-medium text-white">Business Type</label>
          <Select value={businessType} onValueChange={setBusinessType}>
            <SelectTrigger
              className={clsx(
                "w-full bg-black text-white border border-white rounded-md px-4 py-2 transition",
                "focus:outline-none focus:ring-2 focus:ring-black focus:border-white"
              )}
            >
              <SelectValue placeholder="What type of business do you run?" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black dark:bg-zinc-900 dark:text-white border border-white/10">
              <SelectItem value="auto detailing" className="cursor-pointer hover:bg-white/5 data-[state=checked]:bg-white/10">Auto Detailing</SelectItem>
              <SelectItem value="landscaping" className="cursor-pointer hover:bg-white/5 data-[state=checked]:bg-white/10">Landscaping</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Service Area Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <label className="text-sm font-medium text-white">Service Area</label>
          <Select value={serviceArea} onValueChange={setServiceArea}>
            <SelectTrigger
              className={clsx(
                "w-full bg-black text-white border border-white rounded-md px-4 py-2 transition",
                "focus:outline-none focus:ring-2 focus:ring-black focus:border-white"
              )}
            >            
              <SelectValue placeholder="Which city do you want to target?" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-white border border-white/10">
              <SelectItem value="san diego" className="cursor-pointer hover:bg-white/5 data-[state=checked]:bg-white/10">San Diego</SelectItem>
              <SelectItem value="irvine" className="cursor-pointer hover:bg-white/5 data-[state=checked]:bg-white/10">Irvine</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <button
          disabled={!isValid}
          className={clsx(
            "w-full py-1.5 rounded-md text-white font-medium transition",
            isValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 cursor-not-allowed"
          )}
        >
          Generate Lead Report
        </button>
      </div>
    </div>
  )
}
