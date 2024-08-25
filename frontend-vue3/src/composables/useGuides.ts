import { ref, onBeforeMount, type Ref } from 'vue'
import type { Guide } from '@/types/guide'
import MiscApi from '@/api/MiscApi'

export interface UseGuidesComposable {
  guides: Ref<Guide[]>
}
export const useGuides = (): UseGuidesComposable => {
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
