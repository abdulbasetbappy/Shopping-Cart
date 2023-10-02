<template>
  <v-app id="inspire" :theme="useHeaderStore().getTheme">
    <!-- Header -->
    <Header />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useHeaderStore } from "../stores/header.js";
</script>