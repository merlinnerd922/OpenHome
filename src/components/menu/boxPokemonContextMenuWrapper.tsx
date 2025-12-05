import { ContextMenu } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useSaves } from 'src/state/saves/useSaves.ts'
import { OHPKM } from 'src/types/pkm/OHPKM.ts'

import { MonLocation } from 'src/state/saves/monLocation.ts'
import { MonWithLocation } from 'src/state/saves/reducer.ts'

type BoxPokemonContextMenuProps = {
  children: React.ReactNode
  contextMon?: undefined | OHPKM
}

const BoxPokemonContextMenuWrapper = React.memo(function BoxPokemonContextMenuWrapper({
  children,
}: BoxPokemonContextMenuProps) {
  let useSaves1 = useSaves()
  const [contextMenuMonWithLocation] = useState<MonWithLocation>()

  if (contextMenuMonWithLocation === undefined || contextMenuMonWithLocation === null) {
    return null
  }

  const releasePokemon = (contextMenuMonWithLocation: MonLocation) => {
    useSaves1.releaseMonAtLocation(contextMenuMonWithLocation)
  }

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item onSelect={() => releasePokemon(contextMenuMonWithLocation)}>
          Release
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
})
export default BoxPokemonContextMenuWrapper
