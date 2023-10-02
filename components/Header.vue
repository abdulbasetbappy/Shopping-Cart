<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')">
      Shopping Website
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/Cart')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <v-icon> mdi-cart-outline </v-icon>
      </v-badge>
    </v-btn>
    <v-btn
      :prepend-icon="
        headerStore.theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'
      "
      @click="headerStore.setTheme"
    >
    {{ headerStore.theme === 'light' ? 'Dark' : 'Light' }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useHeaderStore } from "../stores/header.js";
const headerStore = useHeaderStore();
import { useCartStore } from '../stores/cart.js'
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>