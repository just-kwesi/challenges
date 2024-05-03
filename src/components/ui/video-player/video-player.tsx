'use client'
import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ url }: { url: string }) => {
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
            className="w-12 h-12 text-card"
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
    <div className="relative w-auto h-auto min-h-80">
      <ReactPlayer
        url={url}
        className="react-player absolute"
        width="100%"
        height="100%"
        controls={true} // This enables the native controls for YouTube, Vimeo,
        config={{
          file: {
            attributes: {
              crossOrigin: 'true',
            },
          },
          twitch: {
            options: {
              parent: 'klipped.gg',
            },
          },
        }}
      />
    </div>
  )
}

export default VideoPlayer
