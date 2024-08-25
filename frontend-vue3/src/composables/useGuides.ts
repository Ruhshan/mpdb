import { ref, onBeforeMount } from 'vue'
import type { Guide } from '@/types/guide'
import MiscApi from '@/api/MiscApi'
export const useGuides = () => {
  const guides = ref<Guide[]>([])

  const fetchGuides = async () => {
    try {
      guides.value = await MiscApi.getGuides()
    } catch (err) {
      console.log(err)
    }
  }

  onBeforeMount(fetchGuides)

  return { guides }
}
