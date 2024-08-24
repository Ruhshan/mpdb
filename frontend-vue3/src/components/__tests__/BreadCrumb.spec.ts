import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BreadCrumb from '../BreadCrumb.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

describe('BreadCrumb.vue', () => {
  const wrapper = mount(BreadCrumb, {
    global: {
      plugins: [vuetify]
    },
    propsData: {
      title: 'TITLE',
      itemName: 'ItemName'
    }
  })

  it('renders the breadcrumb title correctly', async () => {
    const title = wrapper.get('.v-breadcrumbs__prepend h2').text()

    expect(title).toBe('TITLE')
  })

  it('renders the breadcrumb items correctly', async () => {
    const breadCrumbItems = wrapper.findAllComponents('.v-breadcrumbs-item')

    expect(breadCrumbItems).length(2)
    expect(breadCrumbItems[0].text()).toBe('Home')
    expect(breadCrumbItems[1].text()).toBe('ItemName')
  })
})
