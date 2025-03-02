<script setup lang="ts">
defineProps({
  class: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'GIÀY CHẠY BỘ BÁN CHẠY'
  },
  type: {
    type: String,
    default: ''
  },
  imageTitle: {
    type: String,
    default: ''
  },
  seeMore: {
    type: String,
    default: 'Xem Thêm'
  }
});
const products = ref([
  {
    id: 1,
    image: ['images/product/runner/forrestrun-vn-8.webp', 'images/product/runner/forrestrun-vn-6.webp'],
    name: 'Giày chạy bộ nam Nike Invincible 3 DR2615-102 – Trắng đỏ',
    sold: 200,
    oldPrice: '3.200.000 đ',
    newPrice: '1.090.000 đ',
    discount: '-66%'
  },
  {
    id: 2,
    image: ['images/product/runner/forrestrun-vn-395.webp', 'images/product/runner/forrestrun-vn-392.webp'],
    name: 'Nike Pegasus 41 Trắng Neon',
    sold: 93,
    oldPrice: '4.000.000 đ',
    newPrice: '2.400.000 đ',
    discount: '-40%'
  },
  {
    id: 3,
    image: ['images/product/runner/forrestrun-vn-8.webp', 'images/product/runner/forrestrun-vn-6.webp'],
    name: 'Nike React Infinity Run',
    sold: 93,
    oldPrice: '4.400.000 đ',
    newPrice: '1.600.000 đ',
    discount: '-64%'
  },
  {
    id: 4,
    image: ['images/product/runner/forrestrun-vn-8.webp', 'images/product/runner/forrestrun-vn-6.webp'],
    name: 'Nike Pegasus 41 GTX Nam',
    sold: 87,
    oldPrice: '4.200.000 đ',
    newPrice: '2.900.000 đ',
    discount: '-31%'
  },
  {
    id: 5,
    image: ['images/product/runner/forrestrun-vn-8.webp', 'images/product/runner/forrestrun-vn-6.webp'],
    name: 'Adidas Ultraboost Light',
    sold: 120,
    oldPrice: '5.000.000 đ',
    newPrice: '3.500.000 đ',
    discount: '-30%'
  },
  {
    id: 6,
    image: ['images/product/runner/forrestrun-vn-8.webp', 'images/product/runner/forrestrun-vn-6.webp'],
    name: 'Nike ZoomX Invincible Run',
    sold: 75,
    oldPrice: '4.500.000 đ',
    newPrice: '2.700.000 đ',
    discount: '-40%'
  },
  {
    id: 7,
    image: ['images/product/runner/forrestrun-vn-8.webp', 'images/product/runner/forrestrun-vn-6.webp'],
    name: 'Asics Gel-Kayano 29',
    sold: 50,
    oldPrice: '4.800.000 đ',
    newPrice: '3.200.000 đ',
    discount: '-33%'
  }
]);

const hoveredProduct = ref<number | null>(null);
</script>

<template>
  <div class="container mx-auto px-4 relative">
    <h3
      v-if="!imageTitle"
      class="text-3xl md:text-4xl font-bold text-center py-6"
    >
      {{ title }}
    </h3>

    <img
      v-if="imageTitle"
      :src="imageTitle"
      alt="image title"
      class="w-full mx-auto rounded-xl"
    />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex justify-center"
      >
        <div class="bg-white rounded-lg p-2 shadow-xl relative w-full max-w-[300px] md:p-6">
          <span class="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-lg absolute top-2 left-2 z-10">
            {{ product.discount }}
          </span>

          <div class="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer md:h-60">
            <img
              :src="product.image[0]"
              alt="product"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              :class="{ 'opacity-0': hoveredProduct === product.id }"
            />

            <img
              :src="product.image[1]"
              alt="product hover"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              :class="{ 'opacity-100': hoveredProduct === product.id, 'opacity-0': hoveredProduct !== product.id }"
            />

            <div
              class="absolute inset-0"
              @mouseover="hoveredProduct = product.id"
              @mouseleave="hoveredProduct = null"
            ></div>
          </div>

          <div class="text-center mt-2 md:mt-4">
            <h3 class="text-gray-800 font-normal text-[15px] mt-2 line-clamp-2">
              {{ product.name }}
            </h3>
            <div class="flex items-center justify-center gap-2">
              <span class="text-gray-400 line-through text:[12px] md:text-sm">{{ product.oldPrice }}</span>
              <span class="text-red-500 font-bold text:[12px] md:text-xl">{{ product.newPrice }}</span>
            </div>

            <button
              class="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-orange-600 transition"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center my-8">
      <span
        class="border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-sm font-bold cursor-pointer hover:bg-orange-600 hover:text-white transition"
        >{{ seeMore }}</span
      >
    </div>
  </div>
</template>
