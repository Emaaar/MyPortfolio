"use client"

import React from "react"

type DecorWaveAltProps = {
  className?: string
  color?: string
  opacity?: number
}

export function DecorWaveAlt({ className, color = "#0861A0", opacity = 0.25 }: DecorWaveAltProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1440 280"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="dw-alt-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity={opacity} />
          <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.6} />
        </linearGradient>
      </defs>
      <path
        fill="url(#dw-alt-grad)"
        d="M0 160 C 160 120, 320 200, 480 170 C 640 140, 800 60, 960 100 C 1120 140, 1280 230, 1440 200 L 1440 280 L 0 280 Z"
      />
      <path
        fill={color}
        opacity={opacity * 0.7}
        d="M0 110 C 160 90, 320 130, 480 110 C 640 90, 800 30, 960 70 C 1120 110, 1280 170, 1440 150 L 1440 280 L 0 280 Z"
      />
    </svg>
  )
}
