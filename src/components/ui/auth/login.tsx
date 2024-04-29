'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { login, resetPasswordServer } from '@/lib/database/actions'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'

export const FormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})

export const ResetFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export type FormData = z.infer<typeof FormSchema>

export function LoginForm({}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const resetPassowrdForm = useForm<z.infer<typeof ResetFormSchema>>({
    resolver: zodResolver(ResetFormSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await login(data)

    if (res) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'Invalid login credentials',
      })
    }
  }

  async function onResetSubmit(data: z.infer<typeof ResetFormSchema>) {
    const redirectUrl = `${window.location.origin}/reset-password`

    const { success, error } = await resetPasswordServer(
      data.email,
      redirectUrl
    )
    if (success) {
      toast({
        title: 'Success!',
        description: 'Check your email inbox to reset your passsword',
      })
    }
    if (error) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'Request for Password change Failed',
      })
    }
  }

  const [resetPassword, setResetPassword] = useState<boolean>(false)

  return (
    <>
      {!resetPassword && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-4/6 sm:w-full space-y-6"
          >
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
            <Button type="submit" className="w-full">
              Sign in with Email
            </Button>
          </form>
        </Form>
      )}

      {resetPassword && (
        <Form {...resetPassowrdForm}>
          <form
            onSubmit={resetPassowrdForm.handleSubmit(onResetSubmit)}
            className="w-4/6 sm:w-full space-y-6"
          >
            <FormField
              control={resetPassowrdForm.control}
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
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </Form>
      )}

      <div className=" w-full">
        <p
          onClick={() => setResetPassword(!resetPassword)}
          className="cursor-pointer text-right text-sm text-muted-foreground underline underline-offset-4 hover:text-primary px-8"
        >
          {resetPassword ? 'Login' : 'Forget Password?'}
        </p>
      </div>
    </>
  )
}
