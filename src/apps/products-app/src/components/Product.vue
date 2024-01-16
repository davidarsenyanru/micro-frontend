<template>
  <div class="border p-4 rounded flex flex-col items-center">
    <div class="bg-gray-300 h-32 w-full mb-4"></div>
    <h2 class="text-lg font-bold mb-2">{{ name }}</h2>
    <div class="text-lg mb-4">${{ price }}</div>
    <div>
      <button
          @click="addToCart"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          v-if="!isInCart"
      >
        Add to cart
      </button>
      <div v-else class="flex items-center">
        <button
            @click="changeQuantity(-1)"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <span class="mx-2">{{ quantity }}</span>
        <button
            @click="changeQuantity(1)"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../../../../stores/store.ts';

const props = defineProps({
  id: Number,
  name: String,
  price: Number
});

const store = useStore();
const quantity = ref(0);
const isInCart = ref(false);

if (store.isInCart(props.id)) {
  isInCart.value = true;
  quantity.value = store.getQuantityById(props.id);
}

const addToCart = () => {
  isInCart.value = true;
  store.updateCart({
    id: props.id,
    price: props.price,
    quantity: 1
  });
  quantity.value = 1;
};

const changeQuantity = (amount) => {
  if (quantity.value + amount >= 1) {
    quantity.value += amount;
    store.updateCart({
      id: props.id,
      price: props.price,
      quantity: quantity.value
    });
  }
};
</script>
