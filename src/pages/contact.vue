<template>
  <div class="wrapper">
    <b-row>
      <b-col>
        <h2>
          <b>Contact Us</b>
        </h2>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col md="4" class="left mb-5">
        <b-alert :show="show">Default Alert</b-alert>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-2" label="Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="What's your name?"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Email:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              required
              placeholder="Your E-mail ID?"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Contact:" label-for="input-number">
            <b-input-group prepend="+91" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="form.number"
                type="number"
                id="input-number"
                placeholder="Need your number, so we can get in touch!"
              ></b-input>
            </b-input-group>
          </b-form-group>

          <b-form-group id="input-group-2" label="Message:" label-for="input-2">
            <b-form-textarea
              id="input-2"
              v-model="form.message"
              type="email"
              placeholder="Want to say something?"
              rows="3"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" required>
              <b-form-checkbox
                value="true"
              >I give my consent that anyone from Phoenix Global can reach me out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
      <b-col md="5" class="middle mb-5">
        <b-row align-h="center">
          <img :src="location" class="img pt-4" />
        </b-row>
      </b-col>
      <b-col md="3" class="right mb-5">
        <div class=" mb-3 ">
          <div class="text-uppercase font-weight-bolder">phoenix global infotech</div>
          <div>
            <div>UAN: TS02D00052027</div>
            <div>NIC:</div>
            <div>74 - Scientific and Technical Activities</div>
            <div>85 - Education</div>
            <div>Registered under Telangana State MSME</div>
          </div>
        </div>
        <div class=" mb-3 ">
          <div class="text-uppercase font-weight-bolder">registered office</div>
          <div class="text-uppercase">
            203, SRR, lakshmi nagar, hyderabad,
            <br />telangana state, india 500015
          </div>
        </div>
        <div class=" mb-3 ">
          <div class="font-weight-bolder">Web: www.phnxglobal.com</div>
          <div class="font-weight-bolder">e-mail: info@phnxglobal.com</div>
          <div class="font-weight-bolder">Phone: +91 9866436267</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import firebase from "firebase";
import moment from "moment";
import location from "./../assets/location.png";
import config from "./../config/keys.secret";
export default {
  data: function () {
    return {
      location,
      form: {
        email: "",
        name: "",
        number: "",
        checked: [],
        message: "",
      },
      show: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const db = firebase.firestore();
      const data = {
        name: this.form.name,
        email: this.form.email,
        contact: this.form.number,
        message: this.form.message,
        timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      const ref = db.collection("phoenix").doc("messages");
      ref
        .update({
          queries: firebase.firestore.FieldValue.arrayUnion(data),
        })
        .then(() => {
          console.log("Query submitted!");
          this.form.email = "";
          this.form.name = "";
          this.form.number = "";
          this.form.checked = [];
          this.form.message = "";
          this.show = true;
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
  mounted: function () {
    if (firebase.init) return;
    firebase.initializeApp(config);
    firebase.init = true;
  },
};
</script>
<style scoped>
.wrapper {
  text-align: left;
  margin: 20px;
  color: rgb(0, 77, 129);
  font-family: roboto, sans-serif;
}

.middle {
  margin-left: 20px;
  margin-right: 20px;
}
.img {
  width: 100%;
  height: auto;
}

@media (min-width: 1025px) {
  .wrapper {
    margin: 40px;
  }
  .img {
    width: 85%;
  }
  .middle {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>