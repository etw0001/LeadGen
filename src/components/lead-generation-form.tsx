"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

export function LeadGenerationForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="w-full mx-auto max-w-4xl flex flex-col items-center gap-8 p-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-medium text-slate-12 tracking-[-0.025em]">LeadGen</h1>
        <p className="text-base font-medium text-[rgb(119,123,132)] max-w-2xl tracking-[-0.05em]">
          Find the best neighborhoods for your door-to-door marketing campaigns
        </p>
      </div>
    </div>

  )
}
