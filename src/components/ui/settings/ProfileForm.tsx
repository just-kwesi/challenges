'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
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
import { userProfileData } from '@/lib/types/auth'
import { updateUserprofile } from '@/lib/database/actions'

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
})

type ProfileFormValues = z.infer<typeof userProfileSchema>

export default function Profile({ userData }: { userData: userProfileData }) {
  const defaultValues: Partial<ProfileFormValues> = {
    bio: 'Example: Top 500 in Overwatch and Apex Pred.',
    username: userData?.username,
    full_name: userData?.full_name,
  }
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: ProfileFormValues) {
    const { full_name, bio } = data
    await updateUserprofile({ full_name, bio })
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">Your Account details has been updated</p>
        </pre>
      ),
    })
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
                <Input placeholder={userData?.username} {...field} disabled />
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
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
