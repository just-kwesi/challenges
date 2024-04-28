import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
export default function Terms() {
  return (
    <p className="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{' '}
      <Dialog>
        <DialogTrigger className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>{' '}
      and{' '}
      <Dialog>
        <DialogTrigger className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      .
    </p>
  )
}
