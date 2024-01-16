<script setup lang="ts">
import Product from './components/Product.vue';
import { useStore } from '../../../stores/store.ts';

const store = useStore();
const products = store.products;

</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :price="product.price"
        :name="product.name"
    />
  </div>
</template>

