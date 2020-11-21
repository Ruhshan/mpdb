import Fields from "@/entity/Fields";

class TableParams{
    constructor(
        public globalSearch: string,
        public searchFields: Fields,
        public itemsPerPage: number,
        public activePage: number) {}


}

export default TableParams;