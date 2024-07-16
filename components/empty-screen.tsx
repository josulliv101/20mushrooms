import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import config from '@/lib/config'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Welcome to {config.org}!</h1>
        <p className="leading-normal text-muted-foreground">
          Discover the best dishes and restaurants in your area.
        </p>
        <p className="leading-normal text-muted-foreground text-sm">
          Whether you're looking for a hidden gem or sharing your favorite
          finds, 20 Mushrooms makes it easy to explore and recommend top dishes
          to fellow food enthusiasts. Join our community today and elevate your
          culinary adventures — it's free!
        </p>
      </div>
    </div>
  )
}
