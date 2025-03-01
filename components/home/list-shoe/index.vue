<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const originalSlides = [
  { id: 1, name: 'Tất cả sản phẩm', image: '/images/all.svg' },
  { id: 2, name: 'Giày chạy bộ nam', image: '/images/man-shoe.svg' },
  { id: 3, name: 'Giày chạy bộ nữ', image: '/images/girl-shoe.svg' },
  { id: 4, name: 'Giày chạy trail', image: '/images/tail.svg' },
  { id: 5, name: 'Phụ kiện', image: '/images/phukien.svg' },
  { id: 6, name: 'Cự ly < 10km', image: '/images/10km.webp' },
  { id: 7, name: 'Cự ly < 21km', image: '/images/21km.webp' },
  { id: 8, name: 'Cự ly < 42km', image: '/images/42km.webp' }
];

const visibleItems = 4;
const currentIndex = ref(visibleItems);
let intervalId: NodeJS.Timeout | null = null;

const sliders = computed(() => {
  return [...originalSlides.slice(-visibleItems), ...originalSlides, ...originalSlides.slice(0, visibleItems)];
});

const nextSlide = () => {
  currentIndex.value++;

  if (currentIndex.value >= sliders.value.length - visibleItems) {
    setTimeout(() => {
      currentIndex.value = visibleItems;
    }, 500);
  }
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 2000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="list-shoe relative w-full mx-auto h-[300px]">
    <img
      class="w-full absolute top-0 left-0 h-[300px] object-cover"
      src="/images/bg-shoe-run.webp"
      alt="Background"
    />

    <div class="content relative z-10 flex flex-col h-full">
      <h3 class="title flex w-full justify-center text-center text-[40px] font-bold py-6">DANH MỤC GIÀY CHẠY BỘ</h3>

      <div class="hidden lg:flex w-full mx-auto flex-wrap items-center justify-center gap-10 flex-grow">
        <div
          v-for="(slide, index) in originalSlides"
          :key="index"
          class="flex flex-col items-center space-y-2 cursor-pointer"
        >
          <img
            :src="slide.image"
            class="w-[90px] flex-shrink-0 border-4 border-white rounded-full p-2 hover:scale-125 duration-300"
          />
          <span class="text-center">{{ slide.name }}</span>
        </div>
      </div>

      <div class="lg:hidden relative w-full overflow-hidden flex-grow">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }"
        >
          <div
            v-for="(slide, index) in sliders"
            :key="index"
            class="w-1/4 flex-shrink-0 flex flex-col items-center space-y-2"
          >
            <img
              :src="slide.image"
              class="w-[80px] border-4 border-white rounded-full p-2 hover:scale-110 duration-300"
            />
            <span class="text-center text-xs">{{ slide.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
