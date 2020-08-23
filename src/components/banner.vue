<template>
    <div v-if="src && src!==''">
        <b-link :href="href">
        <img :src="src" class="banner"/>
        </b-link>
    </div>
</template>
<script>
export default {
    props: ['src',"href"]
}
</script>
<style scoped>
.banner {
    width: 100%;
    height: 10rem;
    object-fit: cover;
}
</style>