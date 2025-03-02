<script setup lang="ts"></script>

<template>
  <section class="container mx-auto p-6">
    <div class="flex flex-col gap-6 items-center md:flex-row">
      <div class="w-full md:w-1/3">
        <img
          :src="'/images/brand/infor-company.webp'"
          alt="Forrest Run"
          class="rounded-lg shadow-lg w-full"
        />
      </div>

      <div>
        <h2 class="text-2xl md:text-4xl font-bold text-orange-500 uppercase">
          Giày Chạy Bộ Chính Hãng
          <span class="text-gray-900">Running Store</span>
        </h2>
        <p class="text-gray-600 mt-2">LỰA CHỌN TỐI ƯU CHO DÔI CHÂN CỦA BẠN</p>

        <div class="grid grid-cols-3 gap-8 mt-6">
          <div class="flex justify-center items-center">
            <img
              src="/images/brand/adidas.jpg"
              alt="Adidas"
              class="sm:h-[10rem] rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="/images/brand/nike.jpg"
              alt="Nike"
              class="sm:h-[10rem] rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="/images/brand/puma.jpg"
              alt="Puma"
              class="sm:h-[10rem] rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="/images/brand/asics.jpg"
              alt="Asics"
              class="sm:h-[10rem] rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="/images/brand/hoka.jpg"
              alt="Hoka"
              class="sm:h-[10rem] rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="/images/brand/saucony.webp"
              alt="Saucony"
              class="sm:h-[10rem] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
