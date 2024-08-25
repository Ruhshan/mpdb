import { describe, it, expect, vi } from 'vitest'
import ApiClient from '@/api/ApiClient'
import MiscApi from '@/api/MiscApi'
import type { Guide } from '@/types/guide'

describe('MiscApi', () => {
  it('getGuides should fetch guides successfully', async () => {
    // Mock response data
    const mockGuides = [
      { id: 1, text: 'Guide 1' },
      { id: 2, text: 'Guide 2' }
    ] as Array<Guide>

    // Spy on ApiClient.get and mock the resolved value
    const getSpy = vi.spyOn(ApiClient, 'get').mockResolvedValue({ data: mockGuides })

    // Call the method
    const guides = await MiscApi.getGuides()

    // Assertions
    expect(getSpy).toHaveBeenCalledWith('/misc/guide')
    expect(guides).toEqual(mockGuides)

    // Restore the mock
    getSpy.mockRestore()
  })

  it('getGuides should handle errors', async () => {
    // Spy on ApiClient.get and mock it to reject with an error
    const error = new Error('Network error')
    const getSpy = vi.spyOn(ApiClient, 'get').mockRejectedValue(error)

    // Expect the MiscApi.getGuides to throw the same error
    await expect(MiscApi.getGuides()).rejects.toThrow('Network error')

    // Ensure the get method was called
    expect(getSpy).toHaveBeenCalledWith('/misc/guide')

    // Restore the mock
    getSpy.mockRestore()
  })
})
