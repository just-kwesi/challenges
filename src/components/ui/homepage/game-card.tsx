import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface cardProps {
  imageUrl: string
  description?: string
  title: string
  href: string
}

export const GameCard = ({ imageUrl, description, title, href }: cardProps) => {
  return (
    <div className="max-w-[300px] min-w-[200px] rounded overflow-hidden text-card-foreground shadow-sm border">
      <Image
        className="w-full object-cover h-full bg-white"
        src={imageUrl}
        alt="Landscape picture"
        width={300}
        height={150}
      />
      <div className="px-6 py-4">
        <div className="scroll-m-20 text-xl font-semibold tracking-tight">
          {title}
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/games/${href}/videos`}>Videos</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/games/${href}/charts/daily`}>Charts</Link>
        </Button>
      </div>
    </div>
  )
}
