<template>
  <div class="wrapper">
    <div>
      <div class="text-capitalize font-weight-bold mt-5 mb-3 heading">What people say</div>
    </div>
    <div class="mt-2">
      <carousel
        :loop="true"
        :autoplay="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :autoplayHoverPause="true"
        :scrollPerPage="false"
        :perPageCustom="[[320,1],[768, 1], [1024, 3]]"
      >
        <slide v-for="(cardItem, index) in feed" :key="index">
          <div class="testimonial-card ml-2">
            <b-card
              :img-src="cardItem.userPic"
              img-alt="Card image"
              class="mb-3 img-pos"
              img-width="250"
              body-class="body-class"
            >
              <b-card-text class="testimonial">{{cardItem.text}}</b-card-text>
              <div class="subtitle">
                <div>{{cardItem.name}}</div>
              </div>
              <div class="img-wrapper">
                <img :src="cardItem.userLogo" class="img" />
              </div>
            </b-card>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import firebaseConfig from "./../config/keys.secret";
export default {
  data: function () {
    return {
      feed: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      load: true,
      counter: 0,
      top: false,
    };
  },
  mounted: function () {
    if (!firebase.init) {
      firebase.initializeApp(firebaseConfig);
      firebase.init = true;
    }
    const db = firebase.firestore();
    const storage = firebase.storage();

    this.getAllFeed(db, storage);
  },
  methods: {
    complete: function () {
      this.counter++;
      if (this.counter === this.feed.length) {
        this.load = false;
      }
    },
    getAllFeed: function (db, storage) {
      const testimonials = db.collection("phoenix").doc("testimonials");
      testimonials
        .get()
        .then((doc) => {
          this.feed = doc.data().entries;
          this.feed.map((entry) => {
            this.getPics(storage, entry.userLogo).then(
              (url) => (entry.userLogo = url)
            );
            this.getPics(storage, entry.userPic).then(
              (url) => (entry.userPic = url)
            );
          });
        })
        .catch((err) => console.log(err));
    },
    getPics: function (storage, filename) {
      const storageRef = storage.ref();
      return storageRef
        .child("images/" + filename)
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .catch((err) => console.log(err));
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
  height: 150px;
}
.img-wrapper {
  width: 70%;
  margin: 0 auto;
}
.subtitle {
  text-align: right;
  font-weight: bold;
}

.testimonial {
  text-align: justify;
  line-height: 1.5rem;
  margin-bottom: 0px;
}

.testimonial-card {
  max-width: 95%;
}

.body-class {
  padding-bottom: 0px;
}

.img-pos {
  flex-direction: column !important;
}

@media (min-width: 1025px) {
  .wrapper {
    width: 95%;
    margin-left: 2.5%;
  }
  .testimonial-card {
    max-width: 100%;
  }
  .img-pos {
    flex-direction: row !important;
  }
}
</style>

<style>
@media (max-width: 1024px) {
  .card-img {
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
}

@media (min-width: 1025px) {
  .card-img {
    width: 250px;
    border-top-left-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
}
</style>