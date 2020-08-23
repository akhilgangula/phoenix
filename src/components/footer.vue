<template>
  <div class="mt-3">
    <b-row class="footer stack" no-gutters>
      <b-col lg="2" class="first">
        <b-row no-gutters>
          <b-col >
            <img :src="logo_left" class="logo" />
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="8" class="mb-5 mt-2">
        <b-row class="stack" no-gutters>
          <b-col class="mt-4 stats">
            <div class>
              <div class="counter">
                <animated-number
                  :value="stats.students_impacted"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
              </div>
              <div>Students Impacted</div>
            </div>
          </b-col>
          <b-col class="mt-4 stats">
            <div class>
              <div class="counter">
                <animated-number
                  :value="stats.training_hours"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
              </div>
              <div>Training hours</div>
            </div>
          </b-col>
          <b-col class="mt-4 stats">
            <div class>
              <div class="counter">
                <animated-number
                  :value="stats.associations"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
              </div>
              <div>Associations</div>
            </div>
          </b-col>
          <b-col class="mt-4 stats">
            <div class>
              <div class="counter">
                <animated-number
                  :value="stats.alumni_team"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
              </div>
              <div>IIT/IIM Alumni in Team</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="2" class="mobile-hide right-logo">
        <div class=" mr-3">
          <img :src="logo_right" class="right_logo" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import logo_left from './../assets/logo left.jpg';
import logo_right from './../assets/logo right.png'
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber,
  },
  props: ["stats"],
  data: function () {
    return {
      logo_right,
      logo_left,
      duration: 5000,
    };
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)} +`;
    },
  },
};
</script>
<style scoped>
.logo {
  height: 120px;
}
.right_logo {
  height: 150px;
}
.left-logo {
  display: flex;
}
.footer {
  display: flex;
  width: 100%;
}
.stats {
  font-weight: bold;
  letter-spacing: 0px;
}
.stack {
  flex-direction: column;
}
.counter {
  font-size: 1.5rem;
}
.mobile-hide {
  display: none;
}
@media (min-width: 1025px) {
  .mobile-hide {
    display: flex;
  }
  .stack {
    flex-direction: row;
  }
  .right-logo {
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer {
    align-content: center;
  }
  .first {
    align-self: center;
  }
}
</style>
