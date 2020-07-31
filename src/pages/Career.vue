<template>
  <div class="wrapper mb-5">
    <b-row>
      <b-col v-for="(entry,index) in feed" :key="index" md="12" class="mt-4">
        <reports
          :title="entry.title"
          :imgUrl="entry.img"
          :doclink="entry.link"
          :description="entry.description"
          :load=load
          @complete="complete"
          buttonText="Apply Now"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import firebase from "firebase";
import reports from "./../components/reports";
import firebaseConfig from './../config/keys.secret'
export default {
  components: {
    reports
  },
  data: function () {
    return {
      feed: [1,2],
      load: true,
      counter:0
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
    complete: function(){
      this.counter ++;
      if(this.counter === this.feed.length) {
        this.load = false
      }
    },
    getAllFeed: function (db, storage) {
      const topNews = db.collection("phoenix").doc("careers");
      topNews
        .get()
        .then((doc) => {
          this.feed = doc.data()["jobs"];
          this.feed.map((entry) => {
            this.getPics(storage, entry.img).then((url) => (entry.img = url));
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
          console.log("image url", url);
          return url;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.wrapper {
  margin:0 5%;
}
</style>