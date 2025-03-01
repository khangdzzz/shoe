<script setup lang="ts">
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const products = ref([
  {
    id: 1,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Adidas Supernova Stride',
    sold: 200,
    oldPrice: '3.200.000 đ',
    newPrice: '1.090.000 đ',
    discount: '-66%'
  },
  {
    id: 2,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Nike Pegasus 41 Trắng Neon',
    sold: 93,
    oldPrice: '4.000.000 đ',
    newPrice: '2.400.000 đ',
    discount: '-40%'
  },
  {
    id: 3,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Nike React Infinity Run',
    sold: 93,
    oldPrice: '4.400.000 đ',
    newPrice: '1.600.000 đ',
    discount: '-64%'
  },
  {
    id: 4,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Nike Pegasus 41 GTX Nam',
    sold: 87,
    oldPrice: '4.200.000 đ',
    newPrice: '2.900.000 đ',
    discount: '-31%'
  },
  {
    id: 5,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Adidas Ultraboost Light',
    sold: 120,
    oldPrice: '5.000.000 đ',
    newPrice: '3.500.000 đ',
    discount: '-30%'
  },
  {
    id: 6,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Nike ZoomX Invincible Run',
    sold: 75,
    oldPrice: '4.500.000 đ',
    newPrice: '2.700.000 đ',
    discount: '-40%'
  },
  {
    id: 7,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Asics Gel-Kayano 29',
    sold: 50,
    oldPrice: '4.800.000 đ',
    newPrice: '3.200.000 đ',
    discount: '-33%'
  },
  {
    id: 8,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Puma Velocity Nitro 2',
    sold: 40,
    oldPrice: '3.200.000 đ',
    newPrice: '2.400.000 đ',
    discount: '-25%'
  },
  {
    id: 9,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Reebok Floatride Energy',
    sold: 55,
    oldPrice: '3.500.000 đ',
    newPrice: '2.100.000 đ',
    discount: '-40%'
  },
  {
    id: 10,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'New Balance 1080 v12',
    sold: 70,
    oldPrice: '4.200.000 đ',
    newPrice: '2.800.000 đ',
    discount: '-33%'
  },
  {
    id: 8,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Puma Velocity Nitro 2',
    sold: 40,
    oldPrice: '3.200.000 đ',
    newPrice: '2.400.000 đ',
    discount: '-25%'
  },
  {
    id: 9,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Reebok Floatride Energy',
    sold: 55,
    oldPrice: '3.500.000 đ',
    newPrice: '2.100.000 đ',
    discount: '-40%'
  },
  {
    id: 10,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'New Balance 1080 v12',
    sold: 70,
    oldPrice: '4.200.000 đ',
    newPrice: '2.800.000 đ',
    discount: '-33%'
  },
  {
    id: 8,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Puma Velocity Nitro 2',
    sold: 40,
    oldPrice: '3.200.000 đ',
    newPrice: '2.400.000 đ',
    discount: '-25%'
  },
  {
    id: 9,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Reebok Floatride Energy',
    sold: 55,
    oldPrice: '3.500.000 đ',
    newPrice: '2.100.000 đ',
    discount: '-40%'
  },
  {
    id: 10,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'New Balance 1080 v12',
    sold: 70,
    oldPrice: '4.200.000 đ',
    newPrice: '2.800.000 đ',
    discount: '-33%'
  },
  {
    id: 8,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Puma Velocity Nitro 2',
    sold: 40,
    oldPrice: '3.200.000 đ',
    newPrice: '2.400.000 đ',
    discount: '-25%'
  },
  {
    id: 9,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'Reebok Floatride Energy',
    sold: 55,
    oldPrice: '3.500.000 đ',
    newPrice: '2.100.000 đ',
    discount: '-40%'
  },
  {
    id: 10,
    image: '/images/product/nike/forrestrun-vn-193.webp',
    name: 'New Balance 1080 v12',
    sold: 70,
    oldPrice: '4.200.000 đ',
    newPrice: '2.800.000 đ',
    discount: '-33%'
  }
]);

const countdownTime = 3600; // Example: 1 hour countdown
let timeLeft = countdownTime;

const updateCountdown = () => {
  if (timeLeft > 0) {
    hours.value = Math.floor(timeLeft / 3600);
    minutes.value = Math.floor((timeLeft % 3600) / 60);
    seconds.value = timeLeft % 60;
    timeLeft--;
    setTimeout(updateCountdown, 1000);
  }
};

onMounted(() => {
  updateCountdown();
  window.addEventListener('resize', updateItemsPerView);
  updateItemsPerView();
});

const currentIndex = ref(0);
const itemPerView = ref(4); // Mặc định hiển thị 4 item

const updateItemsPerView = () => {
  if (window.innerWidth < 640) {
    itemPerView.value = 1.25;
  } else if (window.innerWidth < 1024) {
    itemPerView.value = 2;
  } else {
    itemPerView.value = 4;
  }
};

const maxIndex = computed(() => products.value.length - itemPerView.value);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % (maxIndex.value + 1);
  if (currentIndex.value < 1) {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + (maxIndex.value + 1)) % (maxIndex.value + 1);
};
</script>

<template>
  <div
    class="event relative w-[90%] mx-auto bg-[#ff6200] rounded-[15px] p-[15px] mt-[20px] md:p-[30px] md:mt-[50px] md:w-[80%]"
  >
    <div>
      <img
        src="/images/event.webp"
        alt="event"
        class="w-full h-[128px] object-fit rounded-[15px]"
      />
    </div>

    <div
      class="main-content mx-auto flex flex-col items-start gap-5 py-6 md:flex-row md:justify-between md:items-center"
    >
      <h2 class="text-xl font-bold text-white md:text-3xl">DEAL SỐC GIÁ HỜI</h2>

      <div class="flex flex-col items-start gap-4 md:flex-row md:items-center">
        <p class="text-lg font-semibold text-white">Chương trình Flash Sale kết thúc sau:</p>
        <div class="flex gap-2">
          <div class="flex flex-col items-center bg-orange-100 text-orange-600 px-8 rounded-lg">
            <span class="text-xl font-bold">{{ hours }}</span>
            <span class="text-[12px] font-semibold">GIỜ</span>
          </div>
          <div class="flex flex-col items-center bg-orange-100 text-orange-600 px-8 rounded-lg">
            <span class="text-xl font-bold">{{ minutes }}</span>
            <span class="text-[12px] font-semibold">PHÚT</span>
          </div>
          <div class="flex flex-col items-center bg-orange-100 text-orange-600 px-8 rounded-lg">
            <span class="text-xl font-bold">{{ seconds }}</span>
            <span class="text-[12px] font-semibold">GIÂY</span>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden">
      <!-- Slider -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * (100 / itemPerView)}%)` }"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="px-2 shrink-0"
          :class="{
            'w-4/5': itemPerView === 1.25, // Mobile
            'w-1/2': itemPerView === 2, // Tablet
            'w-1/4': itemPerView === 4 // Desktop
          }"
        >
          <div class="bg-white rounded-lg p-4 shadow-lg relative">
            <span class="bg-orange-500 text-white text-sm px-3 py-1 rounded-lg absolute">
              {{ product.discount }}
            </span>
            <img
              :src="product.image"
              alt="product"
              class="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            />
            <div class="text-center mt-3">
              <p class="text-orange-600 text-sm font-semibold">🔥 Đã bán {{ product.sold }} sản phẩm</p>
              <h3 class="text-gray-800 font-semibold text-sm mt-2">{{ product.name }}</h3>
              <p class="text-gray-400 line-through text-sm">{{ product.oldPrice }}</p>
              <p class="text-red-500 font-bold text-lg">{{ product.newPrice }}</p>
              <button class="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute top-1/2 left-1 -translate-y-1/2 bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg transition duration-200 hover:scale-110 hover:bg-orange-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute top-1/2 right-1 -translate-y-1/2 bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg transition duration-200 hover:scale-110 hover:bg-orange-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
