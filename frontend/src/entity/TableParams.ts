import Fields from "@/entity/Fields";

class TableParams{
    constructor(
        public globalSearch: string,
        public fields: Fields,
        public itemsPerPage: number,
        public activePage: number) {}


}

export default TableParams;