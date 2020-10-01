<template>
  <div class="wrapper mb-5">
    <b-row>
      <b-col v-for="(entry,index) in feed" :key="'a'+index" md="6" class="mt-4">
        <feed-layout
          :title="entry.title"
          :caption="entry.caption"
          :imgUrl="entry.img"
          :paylink="entry.link"
          :description="entry.description"
          :load=load
          :doclink="entry.docs"
          @complete="complete"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import firebase from "firebase";
import firebaseConfig from './../config/keys.secret'
import feedLayout from "./../components/feed";
export default {
  components: {
    feedLayout,
  },
  data: function () {
    return {
      feed: [1,2,3,4,5,6,7,8,9,0],
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
      const topNews = db.collection("phoenix").doc("management");
      topNews
        .get()
        .then((doc) => {
          this.feed = doc.data()["courses"];
          this.feed.map((entry) => {
            this.getPics(storage, entry.img).then((url) => (entry.img = url));
            this.getDocs(storage, entry.docs).then((url) => (entry.docs = url));
          });
          console.log(this.feed);
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
    getDocs: function (storage, filename) {
      const storageRef = storage.ref();
      return storageRef
        .child("brochures/" + filename)
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
.wrapper {
  margin:0 5%;
}
</style>