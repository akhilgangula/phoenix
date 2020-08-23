<template>
  <div>
    <banner :src="top" :href="href"/>
    <div class="home">
      <div class="left">
        <show-case :banners="banners" />
      </div>
      <div class="right">
        <news :topFeed="topFeed" />
      </div>
    </div>
    <stat-comp :stats="stats" />
    <association />
    <testimonials />
  </div>
</template>
<script>
import ShowCase from "./../components/Showcase";
import News from "./../components/news";
import association from "./../components/associations";
import banner from "./../components/banner";
import testimonials from "./../components/testimonials";
import statComp from "./../components/footer";
import firebase from "firebase";
import firebaseConfig from "./../config/keys.secret";
export default {
  data: function () {
    return {
      banners: [],
      stats: {},
      topFeed: [],
      top: null,
      href: '#'
    };
  },
  components: { ShowCase, News, association, statComp, testimonials, banner },
  mounted: function () {
    if (!firebase.init) {
      firebase.initializeApp(firebaseConfig);
      firebase.init = true;
    }
    const db = firebase.firestore();
    const storage = firebase.storage();
    this.getStats(db);
    this.getBanners(storage);
    this.getTopFeed(db, storage);
    this.getTopBanner(db,storage);
  },
  methods: {
    getTopFeed: function (db, storage) {
      const topNews = db.collection("phoenix").doc("workshops");
      topNews
        .get()
        .then((doc) => {
          this.topFeed = doc.data()["topFeed"];
          this.topFeed.map((entry) => {
            this.getPics(storage, entry.img).then((url) => (entry.img = url));
          });
        })
        .catch((err) => console.log(err));
    },
    getTopBanner: function (db, storage) {
      db.collection("phoenix")
        .doc("home")
        .get()
        .then((doc) => {
          this.top = doc.data()["topBanner"];
          this.href = doc.data()["nav"];

            this.getPics(storage, this.top).then((url) => (this.top = url));

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
    getStats: function (db) {
      const statDocRef = db.collection("phoenix").doc("stats");
      statDocRef
        .get()
        .then((doc) => {
          this.stats = doc.data();
        })
        .catch((err) => console.log(err));
    },

    getBanners: function (storage) {
      const storageRef = storage.ref();
      const listRef = storageRef.child("banners");
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
.home {
  display: flex;
  flex-direction: column;
}
.left {
  width: 100%;
}
.right {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
}

@media (min-width: 1025px) {
  .right {
    width: 30%;
    margin-top: 0;
    margin-left: 0;
  }
  .left {
    width: 70%;
    margin-right: 1%;
  }
  .home {
    flex-direction: row;
    margin-left: 2%;
    margin-top: 2%;
  }
}
</style>