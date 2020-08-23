<template>
  <div>
    <b-navbar toggleable="sm" style="background:black" type="dark">
      <b-navbar-brand to="/">
        <img class="logo" :src="logo" alt="logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item class="mr-3" to="/">Home</b-nav-item>
            <b-nav-item class="mr-3" to="/about">About Us</b-nav-item>

            <b-nav-item-dropdown class="mr-3 learn" text="Courses" right>
              <b-dropdown-item to="/eng">Engineering</b-dropdown-item>
              <b-dropdown-item to="/mgmt">Management</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item class="mr-3" to="/resource">Resources</b-nav-item>
            <b-nav-item class="mr-3" to="csr">CSR</b-nav-item>
            <b-nav-item class="mr-3" to="career">Careers</b-nav-item>
            <b-nav-item class="mr-3" to="contact">Contact Us</b-nav-item>
            <b-nav-item class="hide-mobile" href="https://www.linkedin.com/company/phnxglobal/">
              <i class="fab fa-linkedin-in"></i>
            </b-nav-item>
            <b-nav-item class="hide-mobile" href="https://www.instagram.com/PHNXGLOBAL/">
              <i class="fab fa-instagram"></i>
            </b-nav-item>
            <b-nav-item class="hide-mobile" href="https://www.facebook.com/PHNXGLOBAL">
              <i class="fab fa-facebook"></i>
            </b-nav-item>
            <b-nav-item
              class="hide-mobile"
              href="https://www.youtube.com/channel/UCfZXsZfFSQtnutNYShgUxYw"
            >
              <i class="fab fa-youtube"></i>
            </b-nav-item>
            <b-nav-item class="hide-mobile" href=" https://twitter.com/PhnxGlobal">
              <i class="fab fa-twitter"></i>
            </b-nav-item>
            <b-nav-item class="hide-mobile" href="https://t.me/joinchat/SpoRiQwpcjM150BMYnSnGw">
              <i class="fab fa-telegram-plane"></i>
            </b-nav-item>
            <b-nav-item class="hide-mobile" target="blank" href="https://wa.me/message/VARH35TKLCKJE1">
              <!-- <i class="fab fa-whatsapp green"></i> let's Chat -->
              <img src="./../assets/whatsapp.png" class="logo"/> <b>Let's chat</b>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import logo from "./../assets/logo.png";

export default {
  data: function () {
    return {
      logo,
    };
  },
};
</script>
<style>
.navbar-dark .navbar-nav .learn > .nav-link {
  color: white !important;
  font-weight: bolder;
}
</style>
<style scoped>
.logo {
  height: 25px;
}
a {
  font-family: roboto, sans-serif;
  font-weight: bold;
  color: white !important;
}

.hide-mobile {
  display: none;
}

@media (min-width: 1025px) {
  .hide-mobile {
    display: flex;
  }
}
</style>