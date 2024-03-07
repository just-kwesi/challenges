'use client'
import React from 'react'
import ReactPlayer from 'react-player/lazy'

const LightPlayer = ({ url }: { url: string }) => {
  // You can add more customization and logic as needed here.
  if (!url)
    return (
      <div
        className="relative bg-card-foreground overflow-hidden"
        style={{ paddingBottom: '56.25%' }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          {/* Replace with an appropriate play icon from Shadcn UI if available */}
          <svg
            className="w-full h-[150px] text-card"
            fill="background"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.9"
              cx="42"
              cy="42"
              r="42"
              fill="primary-foreground"
            />
            <path d="M55.891 42L34.457 55.891V28.109L55.891 42z" fill="white" />
          </svg>
          <p className="sr-only">Video player placeholder</p>
        </div>
      </div>
    )
  return (
    <div className="min-h-[100px]">
      <ReactPlayer
        url={url}
        light={true}
        playing={false}
        width="100%"
        height="150px"
      />
    </div>
  )
}

export default LightPlayer
