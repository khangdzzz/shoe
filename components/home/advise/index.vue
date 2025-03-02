<script setup lang="ts">
import { Phone } from 'lucide-vue-next';
</script>

<template>
  <section class="relative w-full h-[300px] flex items-center justify-center">
    <div class="absolute inset-0">
      <img
        src="/images/bg-advise.webp"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative text-center text-white px-6">
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">BẠN CẦN TƯ VẤN GIÀY CHẠY BỘ PHÙ HỢP NHẤT?</h1>
      <p class="mt-4 text-lg md:text-xl">
        Liên hệ ngay Running Store để được tư vấn chính xác, phù hợp nhất với nhu cầu của bạn
      </p>

      <div class="w-full flex items-center justify-center">
        <button
          class="mt-6 flex gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-lg shadow-lg transition"
        >
          <Phone class="text-white" />
          Liên hệ ngay
        </button>
      </div>
    </div>
  </section>

  <section class="flex justify-center items-center py-10 px-4">
    <div class="w-full max-w-5xl">
      <iframe
        class="w-full aspect-video rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/_uho8HNa5QI?si=otIer-hDJvX7WksA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </div>
  </section>
</template>
