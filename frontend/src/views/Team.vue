<template>
    <div>
		<section class="breadcrumbs">
			<div class="container">
				<div class="d-flex justify-content-between align-items-center">
					<h2>Team</h2>
					<ol>
						<li><router-link to="/">Home</router-link></li>
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
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" v-for="member in teamMembers" v-bind:key="member.id">
            <div class="member">
              <img :src="member.picture" alt="">
              <h4>{{ member.name }}</h4>
              <span>{{ member.role }}</span>
              <p>
                {{ member.affiliation }}
              </p>
              <div class="social">
                <a :href="member.email"><i class="icofont-mail"></i></a>
                <a href=""><i class="icofont-facebook"></i></a>
                <a href=""><i class="icofont-instagram"></i></a>
                <a href=""><i class="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>




        </div>

      </div>
    </section><!-- End Team Section -->

		</section>
	</div>
    
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import TeamMember from '@/entity/TeamMember';

export default class Team extends Vue{
    teamMembers: Array<TeamMember> =[
        new TeamMember(1,"M. Arif Ashraf", "Project coordinator", "Postdoctoral Research Associate, Biology department, University of Massachusetts\n" +
            "Amherst, USA", "mailto:arif.ashraf.opu@gmail.com","https://i.postimg.cc/MGp0TJxy/picture-arif-ashraf.jpg"),
        new TeamMember(2,"Md. Kamrul Hasan", "Project coordinator", "Lecturer, Department of Biochemistry and Molecular Biology\n" +
            "Tejgaon College, National University of Bangladesh, Gazipur- 1704, Bangladesh", "mailto:kamrulhasanhridoy205@gmail.com","https://i.postimg.cc/cCB6w6B6/kamrul-hasan.jpg"),
        new TeamMember(3,"Nazmul Hussain", "Reseacher", "Tejgaon College, National University of Bangladesh, Gazipur- 1704, Bangladesh", "mailto:nazmulrobs@gmail.com","https://i.postimg.cc/VkjZM83p/nazmul-hossain.jpg"),
        new TeamMember(4,"Rony Chanda", "Researcher", "Tejgaon College, National University of Bangladesh, Gazipur- 1704, Bangladesh", "mailto:ronychando98@gmail.com","https://i.postimg.cc/xTs12wxr/rony-chanda-r.jpg"),
        new TeamMember(5,"Ruhshan Ahmed Abir", "Frontend developer", "Bio-Bio-1 Bioinformatics Research Foundation", "mailto:ruhshan.ahmed@@gmail.com","https://i.postimg.cc/fbRFhPrP/rushan-r.jpg"),
        new TeamMember(6,"Mohsina Akter Mou", "Backend developer", "Shahjalal University of Science and Technology, Sylhet", "mailto:ruhshan.ahmed@@gmail.com","https://i.postimg.cc/fTHmrgYy/mou.jpg"),
    ];
}
</script>

<style scoped>

</style>