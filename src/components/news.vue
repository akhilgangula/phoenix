<template>
  <div class="wrapper">
    <h3 class="latest mb-4">Latest</h3>
    <div v-for="(feed, index) in topFeed" :key="index" class="mb-3">
      <b-overlay
        id="overlay-background"
        :show="show"
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
      >
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img :src="feed.img" alt="Image" class="rounded-0 img"></b-card-img>
            </b-col>
            <b-col md="8" class="text-left">
              <b-card-body class="text-card-body">
                <b-link
                  class="title text-uppercase"
                  variant="Success"
                  :href="feed.link"
                >{{feed.title}}</b-link>
                <b-card-sub-title class="mt-1 mb-1 sub">{{feed.caption}}</b-card-sub-title>
                <b-card-text class="text-body">{{feed.description}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-overlay>
    </div>
  </div>
</template>
<script>
import tumbnails from "./../assets/150.png";
export default {
  props: ["topFeed"],
  data: function () {
    return {
      tumbnails,
      opacity: 0.96,
      blur: "1",
      show: true,
      variant: "light",
    };
  },
  watch: {
    topFeed: function () {
      setTimeout(() => {
        this.show = false;
      }, 1500);
    },
  },
};
</script>
<style scoped>
.text-body {
  line-height: 1.2rem;
  font-size: 14px;
  font-weight: 600;
}
.sub {
  font-size: 12px;
}

.text-card-body {
  padding: 10px;
}
.title {
  font-size: 12px;
  font-weight: bolder;
  color: rgb(28, 207, 28);
}

.img {
      object-fit: cover;
    width: 100%;
    height: 100%;
}

.latest {
  font-weight: bold;
  text-align: center;
}

@media (min-width: 1025px) {
  .wrapper {
    margin-right: 5%;
  }
}
</style>
