"use client"

import { MeshGradient, type MeshGradientProps } from "@paper-design/shaders-react"
import { useEffect } from "react"

export function MeshGradientComponent({ speed, ...props }: MeshGradientProps) {
  useEffect(() => {
    // This class is added to ensure the body is visible after hydration,
    // as the gradient might initially render transparently.
    document.body.classList.add("opacity-100")
  }, [])

  return <MeshGradient {...props} speed={speed ? speed / 10 : 0.25} />
}
