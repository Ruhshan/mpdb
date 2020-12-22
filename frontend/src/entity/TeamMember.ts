class TeamMember {
    constructor(
        public id: number,
        public name: string,
        public role: string,
        public affiliation: string,
        public picture: string,
        public social: Array<any> = [],


    ) {}

}

export default TeamMember;