"use client"

import React from "react"

type DecorDotsProps = {
  className?: string
  color?: string
  size?: number
  gap?: number
  rows?: number
  cols?: number
}

export function DecorDots({
  className,
  color = "#0861A0",
  size = 3,
  gap = 10,
  rows = 6,
  cols = 8,
}: DecorDotsProps) {
  const width = cols * gap
  const height = rows * gap
  const dots: Array<{ x: number; y: number }> = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: c * gap + size, y: r * gap + size })
    }
  }
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ opacity: 0.15 }}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={size} fill={color} />)
      )}
    </svg>
  )
}


