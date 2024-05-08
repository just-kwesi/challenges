'use client'
import React, { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { updateUserprofilePicture } from '@/lib/database/storage-actions'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AvatarPage({
  uid,
  url,
  username,
}: {
  uid: string | null
  url: string
  username: string | null
}) {
  const supabase = createClient()
  const [uploading, setUploading] = useState(false)

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]

      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}/${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description:
            'There was a problem with your image upload request. Must be less than  2MB',
        })
      }
      url = await supabase.storage.from('avatars').getPublicUrl(filePath).data
        .publicUrl
      updateUserprofilePicture(url)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request to Upload a file.',
      })
    } finally {
      setUploading(false)
    }
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'You must select an image to upload.',
      })
      return
    }
    const file = event.target.files[0]
    const size = file.size

    if (size > 2100000) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'There was a problem with your image size. Must be less than  2MB. ',
      })
      return
    }

    toast({
      title: 'Would you like to update your avatar?',
      description: 'Confirm by clicking the button below.',
      action: (
        <ToastAction altText="Try again" onClick={() => uploadAvatar(event)}>
          Upload Picture
        </ToastAction>
      ),
    })
  }

  return (
    <div className="space-y-3">
      <Avatar className="w-[150px] h-[150px]">
        <AvatarImage src={url} />
        <AvatarFallback>{`${username} avatar`}</AvatarFallback>
      </Avatar>

      <div className="grid w-full max-w-sm items-center gap-1.5 space-y-3">
        <Label htmlFor="picture">
          {uploading
            ? 'Uploading Profile Picture...'
            : 'Upload Profile Picture'}
        </Label>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={onChange}
          disabled={uploading}
        />
        <p className="text-sm text-muted-foreground">
          Please ensure your file does not exceed 2MB in size.
        </p>
      </div>
    </div>
  )
}
