<template>
  <div>
    <div v-show="load" class="mt-5 ml-5">
      <vue-content-loading :width="300" :height="100" :speed="0.5">
        <circle cx="30" cy="30" r="30" />
        <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
        <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
      </vue-content-loading>
    </div>
    <div class="card-1">
    <b-card
      v-show="!load"
      no-body
      class="overflow-hidden"
      body-class="card-text"
      footer-class="footer-css"
    >
      <b-row no-gutters>
        <b-col md="4">
          <img :src="imgUrl" alt="Image" class="img" @load="onImageLoad" />
        </b-col>
        <b-col md="8">
          <b-card-body :title="title" class="card-body">
            <b-card-text>{{description}}</b-card-text>
          </b-card-body>
          <div class="footer-css">
            <b-button variant="outline-success" :href="paylink">Register</b-button>
            <b-button
              variant="link"

              @click="()=>openInTab(doclink)"
            >Download Brochure</b-button>
          </div>
        </b-col>
      </b-row>
    </b-card>
    </div>
  </div>
</template>
<script>
import VueContentLoading from "vue-content-loading";
export default {
  components: {
    VueContentLoading,
  },
  props: [
    "title",
    "caption",
    "description",
    "imgUrl",
    "paylink",
    "load",
    "doclink",
  ],
  methods: {
    onImageLoad: function () {
      this.$emit("complete");
    },
    openInTab: function (link) {
      window.open(link);
    },
  },
};
</script>
<style scoped>
.brochure {
  color: blue;
}
.card-body {
  padding: 20px;
}
.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.card-text {
  text-align: justify !important;
}
.card-title {
  font-weight: bold;
}
.footer-css {
  text-align: right;
  margin-bottom: 20px;
}
.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>