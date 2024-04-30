import { siteConfig } from '@/lib/config/site'

export function SiteFooter() {
  return (
    <footer className="py-4 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-primary md:text-left">
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLScD37vWsFyOuiSx0HQTXFEOHyWwrKfR748YIaSdJtpgV2nBVw/viewform?usp=sf_link`}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Suggestions or Bug Report
          </a>
        </p>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Frederick
          </a>
          . You can support the app on{' '}
          <a
            href={siteConfig.links.support}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Coindrop
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
