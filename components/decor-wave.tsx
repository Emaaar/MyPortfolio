"use client"

import React from "react"

type DecorWaveProps = {
  className?: string
  color?: string
  opacity?: number
}

export function DecorWave({ className, color = "#064b7f", opacity = 0.25 }: DecorWaveProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "100%", opacity }}
    >
      <path
        fill={color}
        d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"
      />
    </svg>
  )
}


