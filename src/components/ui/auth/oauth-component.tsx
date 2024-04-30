'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { loginWithOauth } from '@/lib/database/actions'
export default function Oauth() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [googleAuth, setGoogleAuth] = React.useState<boolean>(false)
  async function handleGoogleAuth() {
    setGoogleAuth(!googleAuth)
    const { error } = await loginWithOauth('google')
  }
  async function handleTwitchAuth() {
    setGoogleAuth(!googleAuth)
    const { error } = await loginWithOauth('google')
  }
  async function handleDiscordAuth() {
    setGoogleAuth(!googleAuth)
    const { error } = await loginWithOauth('google')
  }
  return (
    <div className="w-full">
      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <Button
          variant="outline"
          type="button"
          disabled={googleAuth}
          onClick={handleGoogleAuth}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4 fill-current" />
          )}{' '}
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => setIsLoading(!isLoading)}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.twitch className="mr-2 h-4 w-4 fill-current" />
          )}{' '}
          Twitch
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => setIsLoading(!isLoading)}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.discord className="mr-2 h-4 w-4 fill-current" />
          )}{' '}
          Discord
        </Button>
      </div>
    </div>
  )
}
