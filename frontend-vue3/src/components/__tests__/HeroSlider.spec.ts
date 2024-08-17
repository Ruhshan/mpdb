import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HeroSlider from '../HeroSlider.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

describe('HeroSlider.vue', () => {
  const wrapper = mount(HeroSlider, {
    global: {
      plugins: [vuetify]
    }
  })

  it('renders the carousel with the correct height', async () => {
    const carousel = wrapper.findComponent({ name: 'VCarousel' })
    expect(carousel.exists()).toBe(true)
    expect(carousel.props().height).toBe('450')
  })

  it('renders two carousel items', async () => {
    const items = wrapper.findAllComponents({ name: 'VCarouselItem' })
    expect(items.length).toBe(2)
  })

  it('renders the first carousel item with the correct content', async () => {
    const firstItem = wrapper.findComponent('[data-testid="carousel-item-1"]')
    expect(firstItem.exists()).toBe(true)

    const title = firstItem.find('h2')
    const description = firstItem.find('p')

    expect(title.text()).toBe('Welcome to MPDB 2.0')
    expect(description.text()).toContain(
      'An extensive phytochemical data repertoire for indigenous medicinal plants of Bangladesh'
    )
  })

  it('renders the second carousel item with the correct content', async () => {
    const nextArrow = wrapper.find('.v-window__right')
    await nextArrow.trigger('click')

    const secondItem = wrapper.findComponent('[data-testid="carousel-item-2"]')

    expect(secondItem.exists()).toBe(true)

    const title = secondItem.find('h2')
    const description = secondItem.find('p')

    expect(title.text()).toBe('One destination, thousand plants')
    expect(description.text()).toContain(
      'Find the plant of your interest with its local name, scientific name, active compounds and reference article'
    )
  })
})
