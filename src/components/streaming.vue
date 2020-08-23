<template>
  <div class="mt-5 mb-5">
    <b-container fluid>
      <b-row no-gutters>
        <b-col lg="5" sm="12" md='12'>
          <div class="ytb-cntrl">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/H9DCl7yJuS0"
              allowfullscreen
            ></b-embed>
          </div>
        </b-col>
        <b-col sm md>
          <b-row v-for="(entry, index) in first" :key="index">
            <div class="mb-4">
              <b-avatar variant="info" :src="entry.icon" class="mr-3" size="3.2rem"></b-avatar>
              <b class="ml-1 text">{{entry.text}}</b>
            </div>
          </b-row>
        </b-col>
        <b-col sm md class="ml-2">
          <b-row v-for="(entry, index) in highlights" :key="index">
            <div class="mb-4">
              <b-avatar variant="info" :src="entry.icon" class="mr-3" size="3.2rem"></b-avatar>
              <b class="ml-1 text">{{entry.text}}</b>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase";
import firebaseConfig from "./../config/keys.secret";
export default {
  data: function () {
    return {
      highlights: [],
      first: [],
    };
  },
  mounted: function () {
    if (!firebase.init) {
      firebase.initializeApp(firebaseConfig);
      firebase.init = true;
    }
    const db = firebase.firestore();
    const storage = firebase.storage();
    this.getHighlights(db, storage);
  },

  methods: {
    getHighlights: function (db, storage) {
      const topNews = db.collection("phoenix").doc("courses");
      topNews
        .get()
        .then((doc) => {
          this.highlights = doc.data().highlights;
          this.highlights.map((entry) => {
            this.getPics(storage, entry.icon).then((url) => (entry.icon = url));
          });
          this.first = this.highlights.splice(0, 4);
        })
        .catch((err) => console.log(err));
    },
    getPics: function (storage, filename) {
      const storageRef = storage.ref();
      return storageRef
        .child("images/" + filename)
        .getDownloadURL()
        .then((url) => {
          console.log("image url", url);
          return url;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.text {
  font-size: 1.5rem;
}
.ytb-cntrl {
  width: 100%;
  margin-bottom: 5%;
}
@media (min-width: 1025px) {
  .ytb-cntrl {
    width: 90%;
  }
}
</style>