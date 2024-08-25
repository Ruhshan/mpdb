import { describe, it, expect, vi } from 'vitest'
import { type App, createApp } from 'vue'
import { flushPromises } from '@vue/test-utils'
import { useGuides, type UseGuidesComposable } from '@/composables/useGuides'
import MiscApi from '@/api/MiscApi'
import type { Guide } from '@/types/guide'

function withSetup(
  hook: () => UseGuidesComposable
): [UseGuidesComposable | undefined, App<Element>] {
  let result

  const app = createApp({
    setup() {
      result = hook()
      return () => {}
    }
  })

  app.mount(document.createElement('div'))

  return [result, app]
}

describe('useGuides', () => {
  it('fetches and sets guides correctly', async () => {
    // Mock successful API response
    const mockGuides = [
      { id: 1, text: 'Guide 1' },
      { id: 2, text: 'Guide 2' }
    ] as Array<Guide>

    const spy = vi.spyOn(MiscApi, 'getGuides').mockResolvedValue(mockGuides)

    // Use the composable

    const [result, app] = withSetup(useGuides)

    await flushPromises()

    // Assert that the guides were set correctly
    expect(result!.guides.value).toEqual(mockGuides)

    // Ensure the API was called once
    expect(spy).toHaveBeenCalledTimes(1)

    // Restore the original method
    spy.mockRestore()
    app.unmount()
  })
})
