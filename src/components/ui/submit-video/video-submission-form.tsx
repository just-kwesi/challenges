'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { submitVideo, GameCategories } from '@/lib/database/actions'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const videoFormSchema = z.object({
  game: z.string({
    required_error: 'Please select the game of the video.',
  }),
  category: z.string({
    required_error: 'Please select a category to enter video.',
  }),
  linkToVideo: z.string().url({ message: 'Please enter a valid video url' }),
  title: z
    .string()
    .max(120, { message: 'video title must be less than 120 charcters' })
    .min(4, { message: 'title must be more than 4 characters' }),
  description: z
    .string()
    .max(900, { message: 'Description must be less than 900 characters' })
    .min(10, { message: 'Description must be more than 10 characters' }),
  acceptTerms: z.boolean().refine((val) => val, {
    message: 'Please read and accept the terms and condtions',
  }),
})

type VideoFormValues = z.infer<typeof videoFormSchema>

export function SubmissionForm(gameData: any) {
  const { error, gamesData, categoriesData } = gameData.gamesData
  if (error) {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
    })
  }
  const form = useForm<VideoFormValues>({
    resolver: zodResolver(videoFormSchema),
    mode: 'onChange',
    defaultValues: {
      linkToVideo: '',
      description: '',
      title: '',
    },
  })

  async function onSubmit(data: VideoFormValues) {
    const { game, category, linkToVideo, description, title } = data
    const vidData = {
      description,
      url: linkToVideo,
      title,
      game_id: game,
      category_id: category,
      reviewed: false,
    }
    await submitVideo(vidData)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">Video Submission has been completed</p>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="game"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a game title" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {gamesData &&
                    gamesData?.map((game: { name: string; id: string }) => {
                      return (
                        <SelectItem value={game.id} key={game.id}>
                          {game.name}
                        </SelectItem>
                      )
                    })}
                </SelectContent>
              </Select>
              <FormDescription>
                The name of the game you want to submit a video for.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a game title" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoriesData &&
                    categoriesData?.map(
                      (category: { name: string; id: string }) => {
                        return (
                          <SelectItem value={category.id} key={category.id}>
                            {category.name}
                          </SelectItem>
                        )
                      }
                    )}
                </SelectContent>
              </Select>
              <FormDescription>
                In what category do you want to enter the video
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkToVideo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Link to Video (Youtube, Twitch, Streamable, etc)
              </FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormDescription>
                Paste in the full url of the video resource
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title of the video</FormLabel>
              <FormControl>
                <Input placeholder="Example: Clutch Win" {...field} />
              </FormControl>
              <FormDescription>
                Enter a title for the video. Max: 120
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief context of the video or anything you want a viewer to know. Max 900"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Brief context of the video or anything you want a viewer to
                know. Max 900
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
              </div>
            </FormItem>
          )}
        ></FormField>
        {form.formState.errors.acceptTerms && (
          <p className="text-sm font-medium text-destructive">
            {form.formState.errors.acceptTerms.message}
          </p>
        )}
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
