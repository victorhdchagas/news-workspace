<script setup lang="ts">
import CustomHeader from "./components/CustomHeader.vue";
</script>

<template>
  <div id="app">
    <CustomHeader />

    <router-view />
  </div>
</template>

<style scoped></style>
