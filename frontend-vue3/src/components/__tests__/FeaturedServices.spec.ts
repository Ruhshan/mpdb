import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mdiMagnify } from '@mdi/js'
import { mdiNewspaper } from '@mdi/js'
import { mdiHelpCircle } from '@mdi/js'

import FeaturedServices from '../FeaturedServices.vue'

const vuetify = createVuetify({
  components,
  directives
})

const VIconStub = {
  template: '<span class="v-icon-stub">{{ icon }}</span>',
  props: ['icon']
}

describe('FeaturedServices.vue', () => {
  const wrapper = mount(FeaturedServices, {
    global: {
      plugins: [vuetify],
      stubs: {
        VIcon: VIconStub
      }
    }
  })

  it('renders all featured services', async () => {
    const serviceItems = wrapper.findAll('.ico-box')
    expect(serviceItems.length).toBe(3)
  })

  it('renders the correct icon, title, and description for each service', async () => {
    const services = [
      {
        icon: mdiMagnify,
        title: 'Search',
        description: "Search using plant's name, active compounds, ailments and PMID"
      },
      {
        icon: mdiNewspaper,
        title: 'Publication',
        description: 'View list of publications that referenced this database in their work'
      },
      {
        icon: mdiHelpCircle,
        title: 'Publication',
        description: 'This is an easy to use database, find step by step instruction here'
      }
    ]

    services.forEach((service, index) => {
      const serviceItem = wrapper.findAll('.ico-box').at(index)!

      const icon = serviceItem.find('.v-icon-stub')
      expect(icon.exists()).toBe(true)
      expect(icon.text()).toBe(service.icon)

      const title = serviceItem.find('h4.title')
      expect(title.exists()).toBe(true)
      expect(title.text()).toBe(service.title)

      const description = serviceItem.find('p.description')
      expect(description.exists()).toBe(true)
      expect(description.text()).toBe(service.description)
    })
  })
})
