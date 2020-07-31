<template>
  <div class="wrapper">
    <div>
      <div class="text-capitalize font-weight-bold mt-3 heading">Our Associations</div>
    </div>
    <div class="mt-2">
      <carousel
        :perPage="perPage"
        :loop="true"
        :autoplay="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :autoplayHoverPause="true"
      >
        <slide v-for="(banner, index) in banners" :key="index">
          <img class="d-block img-fluid img" :src="banner" alt="image slot" />
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
import firebaseConfig from './../config/keys.secret'
export default {
  data: function () {
    return {
      perPage: 10,
      banners: [],
      window: {
        width: 0,
      },
    };
  },
  mounted: function () {
    if (!firebase.init) {
      firebase.initializeApp(firebaseConfig);
      firebase.init = true;
    }
    const storage = firebase.storage();
    this.getLogos(storage)
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.perPage = Math.ceil(this.window.width / 200);
    },
    getLogos: function (storage) {
      const storageRef = storage.ref();
      const listRef = storageRef.child("associations");
      listRef
        .listAll()
        .then((res) => {
          res.items.forEach((itemRef) => {
            storageRef
              .child(itemRef.location.path)
              .getDownloadURL()
              .then((url) => {
                this.banners.push(url);
              });
          });
        })
        .catch(function (error) {
          console.log("Unable to connect to firebase", error);
        });
    },
  },
};
</script>
<style scoped>
.heading {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.wrapper {
  width: 80%;
  margin-left: 9%;
}
.img {
  object-fit: cover;
}

@media (min-width: 1025px) {
  .wrapper {
    width: 95%;
    margin-left: 2.5%;
  }
}
</style>