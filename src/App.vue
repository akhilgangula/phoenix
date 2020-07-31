<template>
  <div id="app">
    <navigationHeader/>
    <router-view></router-view>
    <pg-footer/>
  </div>
</template>

<script>
import navigationHeader from './components/Header'
import PgFooter from './components/PGFooter'
export default {
  name: 'App',
  components: {
    navigationHeader,
    PgFooter
  }
}
</script>

<style>
#app {
  font-family: roboto,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
