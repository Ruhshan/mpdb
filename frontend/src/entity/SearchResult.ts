import Plant from "@/entity/Plant";


class SearchResult {
    constructor(
        public hits: number,
        public plants: Array<Plant>
    ) {
    }

}

export default SearchResult;