import config from '@/lib/config'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Logo({
  className = '',
  showLabel = false
}: {
  className?: string
  showLabel?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        className={cn('w-4 h-4', className)}
        src={config.logoUrl}
        width="48"
        height="48"
        alt={config.org}
      />
      {showLabel && (
        <span className="text-xs text-muted-foreground">/ {config.org}</span>
      )}
    </div>
  )
}
