'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Tables } from '@/lib/database/supabase.types'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { updateUserprofile, checkUsername } from '@/lib/database/actions'

const userProfileSchema = z.object({
  full_name: z
    .string()
    .min(5, { message: 'Full name must have at least five characters' }),
  bio: z.string().min(5).max(160),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' }) // Minimum length
    .max(20, { message: 'Username must not exceed 20 characters.' }) // Maximum length
    .regex(
      /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
      {
        message: 'Invalid username format.',
      }
    ),
  twitch_url: z
    .string()
    .url({ message: 'Please enter a valid twitch URL.' })
    .optional()
    .or(z.literal('')),
  x_url: z
    .string()
    .url({ message: 'Please enter a valid X URL.' })
    .optional()
    .or(z.literal('')),
  youtube_url: z
    .string()
    .url({ message: 'Please enter a valid Youtube URL.' })
    .optional()
    .or(z.literal('')),
})

export type ProfileFormValues = z.infer<typeof userProfileSchema>

export default function Profile({
  userData,
}: {
  userData: Tables<'profiles'>
}) {
  const defaultValues: Partial<ProfileFormValues> = {
    bio: userData.bio || '',
    username: userData.username || '',
    full_name: userData.full_name || '',
    twitch_url: userData.twitch_url || '',
    x_url: userData.x_url || '',
    youtube_url: userData.youtube_url || '',
  }
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: ProfileFormValues) {
    const { full_name, bio, twitch_url, x_url, youtube_url, username } = data

    // * a lot of messy code here
    // * instead of just submitting userdata
    // * user after goole,twith and discord oauth are lead here and must input a username to go on.
    // * they can't go on without a username
    if (!userData.username) {
      const { success, error } = await checkUsername(data.username)

      if (error) {
        toast({
          title: 'Uh oh!',
          description: ' Something went wrong.',
        })
      }
      if (!success) {
        toast({
          title: 'Username taken',
          description: 'Please Enter another username',
        })
      } else {
        const error = await updateUserprofile({
          username,
          full_name,
        })
      }
    } else {
      const error = await updateUserprofile({
        full_name,
        bio,
        twitch_url,
        x_url,
        youtube_url,
      })
      if (error) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'Invalid login credentials',
        })
      } else {
        toast({
          title: 'You changes have been submitted...',
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <p className="text-white">
                Your Account details has been updated
              </p>
            </pre>
          ),
        })
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                Name asscociated with the account. Can be your real name or
                pseudonym
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder={userData.username || 'username'}
                  {...field}
                  disabled={userData.username ? true : false}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Description for the About panel of your account in under 300
                characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="twitch_url"
          render={({ field }) => (
            <FormItem>
              <p className="text-base font-medium mb-2 text-muted-foreground">
                Social Media URLs
              </p>
              <FormLabel>Twitch</FormLabel>
              <FormControl>
                <Input
                  placeholder={userData.twitch_url || 'twitch url'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="x_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>X</FormLabel>
              <FormControl>
                <Input placeholder={userData.x_url || 'X url'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="youtube_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Youtube</FormLabel>
              <FormControl>
                <Input
                  placeholder={userData.youtube_url || 'youtube url'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
