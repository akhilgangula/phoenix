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
      <b-card v-show="!load" no-body class="overflow-hidden" body-class="card-body">
        <b-row no-gutters>
          <b-col md="4">
            <img :src="imgUrl" alt="Image" class="img" @load="onImageLoad" />
          </b-col>
          <b-col md="8">
            <b-card-body :title="title" class="card-body">
              <b-card-text>{{description}}</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-row align-h="end">
          <b-col class="col-8 col-md-3 mb-4">
            <b-row>
              <b-col align-h="center">
                <b-button variant="outline-success" @click="()=>openInTab(doclink)">{{buttonText}}</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>

      <b-card
        v-show="!load"
        no-body
        class="overflow-hidden"
        body-class="card-text"
        footer-class="footer-css"
      ></b-card>
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
    "doclink",
    "load",
    "buttonText",
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
  color: green;
}
.card-body {
  padding: 40px;
  text-align: justify;
}
.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.flex-right-bottom {
  position: absolute;
  right: 3%;
  bottom: 10%;
}

.card-title {
  font-weight: bold;
}

.card-body-pad {
  padding: 20px;
  height: 100%;
}
.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@media (min-width: 1025px) and (max-width: 1280px) {
}
</style>