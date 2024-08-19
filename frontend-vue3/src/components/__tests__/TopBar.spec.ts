import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { RouterLinkStub } from '@vue/test-utils'

const vuetify = createVuetify({
  components,
  directives
})

import TopBar from '../../App.vue'

describe('TopBar.vue', () => {
  const wrapper = mount(TopBar, {
    global: {
      plugins: [vuetify],
      stubs: {
        RouterLink: RouterLinkStub
      }
    }
  })

  it('renders the title "MPDB 2.0"', async () => {
    const title = wrapper.find('[data-testid="app-title"]')

    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('MPDB 2.0')
  })

  it('renders the Home button with text "Home"', () => {
    const homeButton = wrapper.find('[data-testid="home-button"]')
    expect(homeButton.exists()).toBe(true)
    expect(homeButton.text()).toBe('Home')
  })

  it('renders the Search button with text "Search"', () => {
    const homeButton = wrapper.find('[data-testid="search-button"]')
    expect(homeButton.exists()).toBe(true)
    expect(homeButton.text()).toBe('Search')
  })
})
