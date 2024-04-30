'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signup, checkUsername } from '@/lib/database/actions'
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
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

export const FormSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message:
          'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
      }),
    passwordConfirm: z.string(),
    full_name: z
      .string()
      .min(5, { message: 'Full name must have at least five characters' }),
    username: z
      .string()
      .toLowerCase()
      .min(3, { message: 'Username must be at least 3 characters long.' }) // Minimum length
      .max(20, { message: 'Username must not exceed 20 characters.' }) // Maximum length
      .regex(
        /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        {
          message: 'Invalid username format.',
        }
      ),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  })
  .refine(
    async (data) => {
      const { success, error } = await checkUsername(data.username)
      if (error) {
        toast({
          title: 'Uh oh!',
          description: ' Something went wrong.',
        })
      }
      return success
    },
    {
      message: 'Username has been taken.',
      path: ['username'],
    }
  )

export type SignupData = z.infer<typeof FormSchema>

export function SignupForm({}) {
  const router = useRouter()
  const form = useForm<SignupData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      full_name: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { success, error } = await signup(data)
    if (error) {
      toast({
        title: 'Uh oh!',
        description: ' Something went wrong.',
      })
    }
    if (success) {
      toast({
        title: 'Please confirm your email address.',
        description: 'Check your inbox for the confirmation email.',
      })
      router.push('/')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/6 sm:w-full space-y-6"
      >
        {/* TODO: get full name and user name from here lead the to the profile page after signup where they can insert avartar url and bio after signing up */}

        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Example: Klipped" {...field} />
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign Up with Email
        </Button>
      </form>
    </Form>
  )
}
