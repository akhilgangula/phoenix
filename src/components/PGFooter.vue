<template>
  <footer class="wrapper">
    <b-row class="pt-5 pb-5" no-gutters>
      <b-col>
        <b-row class="mb-5" no-gutters>
          <b-col sm="12" md="0" lg="2"></b-col>
          <b-col sm="12" md="3" lg="2"><b>Student Resources :</b></b-col>
          <b-col sm="12" md="9" lg="6">
            <b-row no-gutters>
              <b-col sm="12" md="3" lg="3" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <a href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore</a>
              </b-col>
              <b-col sm="12" md="3" lg="3" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <a href="https://ndl.iitkgp.ac.in/">National Digital Library</a>
              </b-col>
              <b-col sm="12" md="3" lg="3" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <a href="https://www.scopus.com/home.uri">Scopus</a>
              </b-col>
              <b-col sm="12" md="3" lg="3" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <a href="http://community.worldlibrary.in/">World E-Books</a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col sm="12" md="0" lg="2"/>
          <b-col sm="12" md="3" lg="2"><b>Terms and Policies :</b></b-col>
          <b-col sm="12" md="9" lg="6">
            <b-row no-gutters>
              <b-col sm="12" md="3" lg="3" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <router-link to="/tc">Terms and Conditions</router-link>
              </b-col>
              <b-col sm="12" md="3" lg="4" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <router-link to="/privacy">Privacy Policy</router-link>
              </b-col>
              <b-col sm="12" md="4" lg="5" class="mb-sm-0 mb-1 mt-1 mt-sm-0">
                <router-link to="/refund">Refund and Cancellation Policy</router-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </footer>
</template>
<style scoped>
.wrapper {
  background-color: black;
  color: white;
  text-align: center;
}
.spread {
  display: flex;
  justify-content: space-between;
}
a {
    color: white
}
</style>