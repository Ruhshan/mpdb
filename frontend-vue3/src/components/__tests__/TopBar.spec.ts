import { describe, it, expect } from 'vitest'
import {DOMWrapper, mount} from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { RouterLinkStub } from '@vue/test-utils'

const vuetify = createVuetify({
  components,
  directives
})

import TopBar from '../../App.vue'
import router from "../../router";

describe('TopBar.vue', () => {
  const wrapper = mount(TopBar, {
    global: {
      plugins: [vuetify, router],
      stubs: {
        RouterLink: RouterLinkStub
      }
    }
  })

  const findRouterLinkTo = (component: DOMWrapper<Element> ) =>
      component.findComponent(RouterLinkStub).props().to

  it('renders the title "MPDB 2.0"', async () => {
    const title = wrapper.find('[data-testid="app-title"]')

    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('MPDB 2.0')
  })

  it('renders the Home button with text "Home"', () => {
    const homeButton = wrapper.find('[data-testid="home-button"]')
    expect(homeButton.exists()).toBe(true)
    expect(homeButton.text()).toBe('Home')

    expect(findRouterLinkTo(homeButton)).toEqual({ name: 'home' })
  })

  it('renders the Search button with text "Search"', () => {
    const searchButton = wrapper.find('[data-testid="search-button"]')
    expect(searchButton.exists()).toBe(true)
    expect(searchButton.text()).toBe('Search')
  })

  it('renders the Guid button with text "Search"', () => {
    const guideButton = wrapper.find('[data-testid="guide-button"]')

    expect(guideButton.exists()).toBe(true)
    expect(guideButton.text()).toBe('Guide')

    expect(findRouterLinkTo(guideButton)).toEqual({ name: 'guide' })
  })
})
