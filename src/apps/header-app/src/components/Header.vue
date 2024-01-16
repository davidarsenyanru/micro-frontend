<template>
  <header class="bg-gray-500 shadow-md">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <!-- Логотип -->
      <div class="flex items-center">
        Logo
      </div>

      <!-- Блок корзины -->
      <div class="flex items-center">
        {{ totalItemsInCart }}
        <!-- Иконка корзины -->
        <svg class="h-6 w-6 text-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 3h12l1 5h6" />
          <path d="M16 13H4a2 2 0 00-2 2v5h16v-5a2 2 0 00-2-2h-4" />
          <path d="M5 21h14" />
        </svg>
        <!-- Цена -->
        <span class="text-600 text-lg">${{ totalPriceInCart }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStore } from '../../../../stores/store.ts';
import { computed } from 'vue';

const store = useStore();
const totalItemsInCart = computed(() => store.totalItemsInCart);
const totalPriceInCart = computed(() => store.totalPriceInCart);
</script>
