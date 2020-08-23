<template>
  <div class="wrapper mb-5">
    <streaming />
    <b-card-group deck v-for="(entry, i) in Math.ceil(feed.length / 2)" :key="i">
      <feed-layout
        v-for="(item, item_index) in feed.slice((entry - 1) * 2, entry * 2)"
        :key="item_index"
        md="6"
        class="mt-4"
        :title="item.title"
        :caption="item.caption"
        :imgUrl="item.img"
        :paylink="item.link"
        :description="item.description"
        :load="load"
        :doclink="item.docs"
        @complete="complete"
      />
    </b-card-group>
  </div>
</template>
<script>
import firebase from "firebase";
import firebaseConfig from './../config/keys.secret'
import feedLayout from "./../components/feed";
import streaming from "./../components/streaming";
export default {
  components: {
    feedLayout,
    streaming
  },
  data: function () {
    return {
      feed: [1,2,3,4,5,6,7,8,9,0],
      load: true,
      counter:0,
      toBeLoad: 10
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
      if(this.counter === this.toBeLoad) {
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
          this.toBeLoad = this.feed.length;
          if(this.feed.length %2 !== 0) {
            this.feed.push([]);
            this.toBeLoad--;
          }
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