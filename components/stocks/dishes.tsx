'use client'

import { useActions, useUIState } from 'ai/rsc'
import Image from 'next/image'
import type { AI } from '@/lib/chat/actions'

export interface Dish {
  id: string
  name: string
  price: number
  location: string
  placeName: string
  photoUrl: string
}

export function Dishes({ props: dishes }: { props: Dish[] }) {
  const [, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {dishes.map(dish => (
          <button
            key={dish.id}
            className="group/item relative min-h-[120px] flex cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-700 sm:w-52"
            onClick={async () => {
              const response = await submitUserMessage(`View ${dish.name}`)
              setMessages(currentMessages => [...currentMessages, response])
            }}
          >
            <div
              className={`w-full h-full absolute top-0 left-0 rounded-lg overflow-hidden`}
            >
              <Image
                className="group-hover/item:opacity-100 opacity-0 object-cover w-full h-full transition-opacity duration-500"
                width="220"
                height="220"
                src={dish.photoUrl}
                alt={`${dish.name} @ ${dish.placeName}`}
              />
            </div>
            <div className="flex flex-col">
              <div className="bold uppercase text-zinc-300">{dish.name}</div>
              <div className="bold text-zinc-300">{dish.placeName}</div>
              <div className="text-xs text-zinc-400">${dish.price}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="p-4 text-center text-sm text-zinc-500">
        Note: contact the restaurant directly for information relating to
        allergies.
      </div>
    </div>
  )
}
