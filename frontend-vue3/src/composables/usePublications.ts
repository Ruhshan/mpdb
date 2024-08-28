import type { Publication } from '@/types/publication'

import citingArticlesJson from '@/assets/data/citing_publications.json'
import releasePublicationsJson from '@/assets/data/release_publications.json'
export interface UsePublicationsComposable {
  citingPublications: Publication[]
  releasePublications: Publication[]
}

export const usePublications = (): UsePublicationsComposable => {
  const citingPublications = citingArticlesJson as Publication[]
  const releasePublications = releasePublicationsJson as Publication[]
  return { citingPublications, releasePublications }
}
