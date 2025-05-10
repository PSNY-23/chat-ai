"use client"

import { useEffect, useState, useRef } from "react"

interface StatsCounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
}

export function StatsCounter({ value, label, prefix = "", suffix = "", duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(percentage)

      countRef.current = Math.floor(easedProgress * value)
      setCount(countRef.current)

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [value, duration])

  // Format the number with commas
  const formattedCount = count.toLocaleString()

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {prefix}
        {formattedCount}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
