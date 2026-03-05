import { ContextMenu } from '@radix-ui/themes'
import React from 'react'
import { OHPKM } from 'src/types/pkm/OHPKM.ts'

import { MonLocation } from 'src/state/saves/monLocation.ts'
import { MonWithLocation } from 'src/state/saves/reducer.ts'

type BoxPokemonContextMenuProps = {
  children: React.ReactNode
  contextMon?: undefined | OHPKM
  monWithLocation?: MonWithLocation
}

const BoxPokemonContextMenuWrapper = React.memo(function BoxPokemonContextMenuWrapper({
  children,
  monWithLocation,
}: BoxPokemonContextMenuProps) {
  if (monWithLocation === undefined || monWithLocation === null) {
    return null
  }

  const releasePokemon = (contextMenuMonWithLocation: MonLocation) => {
    console.info(contextMenuMonWithLocation)
  }

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item onSelect={() => releasePokemon(monWithLocation)}>
          Release
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
})
export default BoxPokemonContextMenuWrapper
