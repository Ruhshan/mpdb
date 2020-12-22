<template>
    <div>
        <section class="breadcrumbs">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Team</h2>
                    <ol>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>Team</li>
                    </ol>
                </div>
            </div>
        </section>

        <section class="inner-page">
            <section id="team" class="team section-bg">
                <div class="container">
                    <!--        <div class="section-title">-->
                    <!--          <h2>Team</h2>-->
                    <!--          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>-->
                    <!--        </div>-->

                    <div class="row">
                        <div
                                class="col-lg-4 col-md-6 d-flex align-items-stretch"
                                v-for="member in teamMembers"
                                v-bind:key="member.id"
                        >
                            <div class="member">
                                <img :src="member.picture" alt=""/>
                                <h4>{{ member.name }}</h4>
                                <span>{{ member.role }}</span>
                                <p>
                                    {{ member.affiliation }}
                                </p>

                                <div class="social">
                                    <a v-for="social in member.social" style="padding-right: 3px" :href="social.val"
                                       v-bind:key="social.si">
                                        <font-awesome-icon :icon="social.icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Team Section -->
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TeamMember from '@/entity/TeamMember';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
    import {faGithub, faLinkedin, faOrcid, faResearchgate} from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(faResearchgate)
    library.add(faEnvelope)
    library.add(faLinkedin)
    library.add(faOrcid)
    library.add(faGithub)


    @Component({components: {FontAwesomeIcon}})
    export default class Team extends Vue {
        teamMembers: Array<TeamMember> = [
            new TeamMember(1,
                "M. Arif Ashraf",
                "Project coordinator",
                "Postdoctoral Research Associate, Biology department, University of Massachusetts Amherst, USA",
                "https://i.postimg.cc/MGp0TJxy/picture-arif-ashraf.jpg",
                [{si: 1, icon: ['fas', 'envelope'], val: "mailto:arif.ashraf.opu@gmail.com"},
                    {si:2, icon:['fab','orcid'], val:"https://orcid.org/0000-0002-0879-5835"}]
            ),
            new TeamMember(2, "Md. Kamrul Hasan",
                "Project coordinator", "Lecturer, Department of Biochemistry and Molecular Biology\n" +
                "Tejgaon College, National University of Bangladesh, Gazipur- 1704, Bangladesh",
                "https://i.postimg.cc/cCB6w6B6/kamrul-hasan.jpg",
                [{si: 1, icon: ['fas', 'envelope'], val: "mailto:kamrulhasanhridoy205@gmail.com"},
                    {si: 2, icon: ['fab', 'linkedin'], val: "https://www.linkedin.com/in/md-kamrul-hasan-a53b45ab"},
                    {si: 3, icon: ['fab', 'orcid'], val: "https://orcid.org/0000-0002-3032-7640"},
                    {si: 3, icon: ['fab', 'researchgate'], val: "https://www.researchgate.net/profile/Md_Hasan319"}]
            ),
            new TeamMember(3,
                "Nazmul Hussain",
                "Reseacher",
                "Tejgaon College, National University of Bangladesh, Gazipur- 1704, Bangladesh",
                "https://i.postimg.cc/DznCXq81/nazmul-r.jpg",
                [{si: 1, icon: ['fas', 'envelope'], val: "mailto:nazmulrobs@gmail.com"},
                    {si: 2, icon: ['fab', 'linkedin'], val: "https://www.linkedin.com/in/nazmul-hussain-01b421166/"}]),
            new TeamMember(4,
                "Rony Chanda",
                "Researcher",
                "Tejgaon College, National University of Bangladesh, Gazipur- 1704, Bangladesh",
                "https://i.postimg.cc/pVF13Xbh/rony-chanda-r.jpg",
                [{si: 1, icon: ['fas', 'envelope'], val: "mailto:ronychando98@gmail.com"},
                    {
                        si: 2,
                        icon: ['fab', 'linkedin'],
                        val: "https://www.linkedin.com/mwlite/in/rony-kumer-chando-23a907162"
                    }]),
            new TeamMember(5,
                "Ruhshan Ahmed Abir",
                "Frontend developer",
                "Bio-Bio-1 Bioinformatics Research Foundation",
                "https://i.postimg.cc/fbRFhPrP/rushan-r.jpg",
                [{si: 1, icon: ['fas', 'envelope'], val: "mailto:ruhshan.ahmed@gmail.com"},
                    {si: 2, icon: ['fab', 'linkedin'], val: "https://www.linkedin.com/in/ruhshan-ahmed/"},
                    {si: 3, icon: ['fab', 'github'], val: "https://github.com/Ruhshan/"},
                    {si: 4, icon: ['fab', 'researchgate'], val: "https://www.researchgate.net/profile/Ruhshan_Abir"}]),

            new TeamMember(6,
                "Mohsina Akter Mou",
                "Backend developer",
                "Shahjalal University of Science and Technology, Sylhet",
                "https://i.postimg.cc/fTHmrgYy/mou.jpg",
                [{si: 1, icon: ['fas', 'envelope'], val: "mailto:mou.mohsinaakter@gmail.com"},
                    {si: 2, icon: ['fab', 'linkedin'], val: "https://www.linkedin.com/in/mohsina-akter-mou-211a19193/"},
                    {si: 3, icon: ['fab', 'github'], val: "https://github.com/mohsina-mou/"}])
        ];
    }
</script>

<style scoped></style>
