
class Plant{
    constructor(
        public id: number,
        public scientificName: string,
        public familyName: string,
        public localName: string,
        public ailment: string,
        public activeCompound: string,
        public pmid: string
    ) {}

}

export default Plant;