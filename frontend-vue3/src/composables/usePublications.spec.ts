import { describe, it, expect, vi } from 'vitest'
import { usePublications } from '@/composables/usePublications'

vi.mock('@/assets/data/citing_publications.json', () => ({
  default: [
    { id: 1, title: 'Citing Publication 1' },
    { id: 2, title: 'Citing Publication 2' }
  ]
}))

vi.mock('@/assets/data/release_publications.json', () => ({
  default: [
    { id: 1, title: 'Release Publication 1' },
    { id: 2, title: 'Release Publication 2' }
  ]
}))

describe('usePublications', () => {
  it('returns citing and release publications correctly', () => {
    const { citingPublications, releasePublications } = usePublications()

    // Check citing publications
    expect(citingPublications).toEqual([
      { id: 1, title: 'Citing Publication 1' },
      { id: 2, title: 'Citing Publication 2' }
    ])

    // Check release publications
    expect(releasePublications).toEqual([
      { id: 1, title: 'Release Publication 1' },
      { id: 2, title: 'Release Publication 2' }
    ])
  })
})
