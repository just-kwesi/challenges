'use client'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { submitVideo, GameCategories } from '@/lib/database/actions'
import React, { ChangeEvent } from 'react'
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

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

interface VideoSubmissionFormProps {
  onVideoUrlChange: (url: string) => void
  data: any
  // Include other props as needed
}

export const SubmissionForm: React.FC<VideoSubmissionFormProps> = ({
  data,
  onVideoUrlChange,
}) => {
  const { error, gamesData, categoriesData } = data
  const router = useRouter()
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
    const { success, error } = await submitVideo(vidData)
    if (error) {
      toast({
        title: 'Uh oh!',
        description: ' Something went wrong.',
      })
    }
    if (success) {
      toast({
        title: 'Success!',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <p className="text-white">Video Submission has been completed</p>
          </pre>
        ),
      })
      router.push('/videos')
    }
  }

  const handleVideoUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onVideoUrlChange(value)
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
                <Input
                  placeholder="https://"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e) // Call the default form handling
                    handleVideoUrlChange(e) // Handle the video URL change
                  }}
                />
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
                {/* <FormLabel>Accept terms and conditions</FormLabel> */}
                <FormLabel>
                  <Dialog>
                    <DialogTrigger className="underline underline-offset-4 hover:text-primary">
                      Accept terms and conditions
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Video Submission Guidelines</DialogTitle>
                        <DialogDescription>
                          <ScrollArea className="h-[400px]  rounded-md border p-4 space-y-2 px-2">
                            <div className="space-y-2 text-left">
                              <ul className="space-y-2 list-disc [&>li]:mt-2">
                                <li>
                                  <span>
                                    <strong>Relevance:</strong>
                                  </span>
                                  All videos submitted must directly pertain to
                                  the game they are categorized under. Videos
                                  that do not clearly relate to the specified
                                  game will not be accepted.
                                </li>
                                <li>
                                  <span>
                                    <strong>Duration:</strong>
                                  </span>
                                  Videos submitted to the platform must not
                                  exceed 10 minutes (600 seconds) in length.
                                  Videos longer than this limit will not be
                                  accepted for upload.
                                </li>
                                <li>
                                  <span>
                                    <strong>Quality:</strong>
                                  </span>
                                  Submitted videos should be of good quality,
                                  both in terms of audio and visual components.
                                  Videos with poor resolution, significant
                                  artifacts, or distorted audio may be rejected.
                                </li>
                              </ul>
                            </div>
                          </ScrollArea>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </FormLabel>
              </div>
            </FormItem>
          )}
        ></FormField>
        {form.formState.errors.acceptTerms && (
          <p className="text-sm font-medium text-destructive">
            {form.formState.errors.acceptTerms.message}
          </p>
        )}
        <Button type="submit">Submit Video</Button>
      </form>
    </Form>
  )
}
