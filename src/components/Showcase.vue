<template>
  <div class="wrapper">
    <b-row no-gutters>
      <b-col>
        <div v-show="load" class="mt-5 ml-5">
          <vue-content-loading :width="300" :height="125" :speed="0.5">
            <rect x="0" y="0" rx="4" ry="4" width="300" height="100" />
          </vue-content-loading>
        </div>
        <b-carousel
          v-show="!load"
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
          img-width="1024"
          img-height="280"
        >
          <b-carousel-slide v-for="banner in banners" :key="banner">
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100 img"
                :src="banner"
                alt="image slot"
                @load="onImageLoad"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
      <!-- <b-col md="1"></b-col> -->
    </b-row>
  </div>
</template>

<script>
import VueContentLoading from "vue-content-loading";
export default {
  props: ["banners"],
  components: {
    VueContentLoading,
  },
  data() {
    return {
      perPage: 1,
      load: true,
      loadImgs: 0,
      variant: "light",
    };
  },
  methods: {
    onImageLoad: function () {
      this.loadImgs++;
      if (this.loadImgs === this.banners.length) {
        this.load = false;
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.img {
  object-fit: cover;
  width: 200px;
  height: 550px;
}
</style>