import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      customProperties: true,
      light: {
        dark: false,
        colors: {
          primary: colors.green.base,
          'primary-lighten': colors.green.lighten2,
          section: colors.green.lighten5 //'#f8fcf9'
        }
      }
    }
  }
})
export default vuetify
