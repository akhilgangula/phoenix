<template>
  <div class="mb-5">
    <div v-show="load" class="mt-5 ml-5">
      <vue-content-loading :width="600" :height="500" :speed="0.5">
        <rect x="35" y="13" rx="4" ry="4" width="500" height="450" />
      </vue-content-loading>
    </div>
    <div class="card-1">
      <b-card v-show="!load" img-top>
        <div class="slideshow">
          <carousel
            :perPageCustom="[[320, 1], [1024, 3]]"
            :perPage="perPage"
            :loop="true"
            :autoplay="true"
            :scrollPerPage="true"
            :paginationEnabled="false"
            :navigationEnabled="true"
          >
            <slide v-for="(photo, index) in photos" :key="index">
              <img class="d-block img-fluid img" :src="photo" alt="image slot" @load="onImageLoad" />
            </slide>
          </carousel>
        </div>
        <b-card-body :title="title" class="card-body">
          <b-card-text>{{description}}</b-card-text>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import VueContentLoading from "vue-content-loading";
export default {
  data: function () {
    return {
      perPage: 3,
      count: 0,
    };
  },
  components: {
    VueContentLoading,
  },
  props: ["title", "caption", "description", "photos", "load"],
  methods: {
    onImageLoad: function () {
      this.count++;
      if (this.photos.length === this.count) {
        console.log("Competed");
        this.$emit("complete");
      }
    },
  },
};
</script>
<style scoped>
.brochure {
  color: green;
}
.card-body {
  padding: 20px;
  text-align: justify;
}
.card-title {
  font-weight: bold;
  text-align: center;
}
.img {
  object-fit: cover;
  width: 95%;
  height: 100%;
}
.flex-right-bottom {
  position: absolute;
  right: 40px;
  bottom: 40px;
}
.card-body-pad {
  padding: 20px;
  height: 100%;
}
.slideshow {
  padding: 20px;
}
.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>