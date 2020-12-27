import ActiveCompound from "@/entity/ActiveCompound";

class Plant{
    constructor(
        public id: number,
        public scientificName: string,
        public author: string,
        public familyName: string,
        public localName: string,
        public ailment: string,
        public activeCompound: string,
        public pmid: string,
        public utilizedPart: string,
        public pmAcList: Array<ActiveCompound>
    ) {}

}

export default Plant;