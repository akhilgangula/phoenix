<template>
  <div class="wrapper">
    <div>
      <img :src="about" class="img" />
    </div>
    <div>
      <h3 class="text-capitalize font-weight-bold heading mt-4">Who are we?</h3>
      <div>
        Phoenix Global is a skill-development company that helps students acquire
        and master professional and soft skills as per the requirements of the industry
        benchmarked to world’s top firms, trained by top class industry professionals.
      </div>
    </div>
    <div>
      <h3 class="text-capitalize font-weight-bold heading mt-4">What's Unique?</h3>
      <div>
        Phoenix Global is India’s firsts to have Industry professionals with
        esteemed alma mater including the IITs and IIMs to mentor and decipher
        the cutting-edge skills, critical to the emerging industries while also
        giving them an opportunity to intern on a project under the mentorship of
        industry professionals from the IITs /IIMs.
      </div>
    </div>
    <div>
      <h3 class="text-capitalize font-weight-bold heading mt-4">Vision</h3>
      <div>
        To be a national leader in skill development and industry
        readiness training by providing differentiated training from
        top class industry experts.
      </div>
    </div>
    <div>
      <h3 class="text-capitalize font-weight-bold heading mt-4">Mission</h3>
      <div>
        To be a go-to skill development platform for students, imparting
        skills benchmarked at global standards that help them realize their
        dream careers profitably
      </div>
    </div>
    <div>
      <h3 class="text-capitalize font-weight-bold heading mt-4">core values</h3>
      <div>
        the 4Ps, Professionalism
        Punctuality
        Passion
        Perseverance
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./../components/Header";
import about from "./../assets/about.png";
export default {
  data: function () {
    return {
      about,
    };
  },
  component: {
    Header,
  },
};
</script>
<style scoped>
.img {
  object-fit: cover;
  width: 100%;
}
.wrapper {
  margin-left: 5%;
  margin-right: 5%;
  font-weight: 500;
  margin-bottom: 5%;
  text-align: justify;
}
.heading {
  text-align: center;
}

@media (min-width: 1025px) {
  .img {
    width: 50%;
  }
  .wrapper {
    font-size: 16px;
    text-align: center;
  }
}
</style>