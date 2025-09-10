"use client"

import React from "react"

type DecorLinesProps = {
  className?: string
  color?: string
  opacity?: number
}

export function DecorLines({ className, color = "#3eb2d9", opacity = 0.2 }: DecorLinesProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "100%", opacity }}
    >
      {/* Gentle wave pattern */}
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        d="M0,100 Q50,80 100,100 T200,100 T300,100 T400,100"
      />
      
      {/* Smaller wave accent */}
      <path
        fill="none"
        stroke={color}
        strokeWidth="1"
        d="M0,130 Q75,110 150,130 T300,130 T400,130"
      />
      
      {/* Minimal top accent */}
      <path
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        d="M0,70 Q100,50 200,70 T400,70"
      />
    </svg>
  )
}
