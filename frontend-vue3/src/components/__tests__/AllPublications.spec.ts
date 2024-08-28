import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import * as composable from '@/composables/usePublications'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { type Publication } from '../../types/publication'
import AllPublications from '../AllPublications.vue'

const vuetify = createVuetify({
  components,
  directives
})

describe('AllPublications.vue', () => {
  const mockPublications = [
    { id: 1, heading: 'heading1', title: 'title1' },
    { id: 2, heading: 'heading2', title: 'title2' }
  ] as Publication[]

  vi.spyOn(composable, 'usePublications').mockReturnValue({
    citingPublications: mockPublications,
    releasePublications: mockPublications
  })

  const wrapper = mount(AllPublications, {
    global: {
      plugins: [vuetify]
    }
  })

  it('renders release articles', async () => {
    const renders = wrapper.findAll('[data-test-id="release-publications"]')

    expect(renders).length(2)

    mockPublications.forEach((publication, index) => {
      const render = renders[index]
      expect(render.find('h4').text()).toBe(publication.heading)
      expect(render.find('p').text()).contains(publication.title)
    })
  })

  it('renders citing articles', async () => {
    const renders = wrapper.findAll('[data-test-id="citing-publications"]')

    expect(renders).length(2)

    mockPublications.forEach((publication, index) => {
      const render = renders[index]
      expect(render.text()).contains(publication.title)
    })
  })
})
