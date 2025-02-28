<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref(['/images/slider02.jpeg', '/images/slider03.webp']);
const currentIndex = ref(0);
let intervalId: NodeJS.Timeout | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 2000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="relative w-full mx-auto overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide"
        class="w-full flex-shrink-0"
      />
    </div>

    <button
      @click="prevSlide"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md text-gray-900 px-4 py-2 rounded-full"
    >
      ❮
    </button>

    <button
      @click="nextSlide"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md text-gray-900 px-4 py-2 rounded-full"
    >
      ❯
    </button>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides.length"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full border-2 border-gray-500"
        :class="{ 'bg-orange-500': currentIndex === index, 'bg-white': currentIndex !== index }"
      />
    </div>
  </div>
</template>
