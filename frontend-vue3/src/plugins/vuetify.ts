import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.green.base
        }
      }
    }
  }
})
export default vuetify
