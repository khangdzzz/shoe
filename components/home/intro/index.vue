<script setup lang="ts"></script>
<template>
  <section
    class="relative w-full h-auto bg-cover bg-center py-10"
    style="background-image: url('/images/bg-list-shose.webp')"
  >
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div class="relative flex justify-center">
        <div class="relative">
          <img
            src="/images/intro.webp"
            alt="Shoe Top"
            class="w-[400px] animate-float"
          />
        </div>
      </div>

      <div>
        <h2 class="text-orange-500 text-xl md:text-3xl font-bold uppercase">
          Giới Thiệu <span class="text-gray-900">Running Store</span>
        </h2>
        <p class="mt-4 text-gray-600 leading-7">
          Running Store mong muốn không chỉ đem lại những sản phẩm Giày chạy bộ chất lượng cao, mà còn là tình yêu cho
          bộ môn chạy bộ, cũng như các môn thể thao khác, và hi vọng có thể trở thành bạn đồng hành của bạn trong những
          mục tiêu trong cuộc đời.
        </p>
        <p class="mt-4 text-gray-600 leading-7">
          Running Store tự hào đem đến những sản phẩm Giày chạy bộ chính hãng chất lượng cao với mức giá cực kỳ hấp dẫn
          từ các đợt sale lớn tại Store của Nike, Adidas, Asics,.. tại thị trường Nhật, Mỹ, EUR.
        </p>

        <button
          class="mt-6 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 animate-pulse-scale"
        >
          Xem thêm
        </button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulseScale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-pulse-scale {
  animation: pulseScale 1.5s infinite;
}
</style>
