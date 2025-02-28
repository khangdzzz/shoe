<script setup lang="ts">
import { Search, ShoppingCart, Phone, Menu, ChevronDown } from 'lucide-vue-next';
import { BRANDS } from '~/utils/constants/brand';
import { NEWS } from '~/utils/constants/news';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from 'radix-vue';

const currentTrigger = ref('');
</script>
<template>
  <div class="wrapper">
    <header class="flex flex-col">
      <div class="header-top w-full bg-[#ff6200] text-white text-center p-[10px] text-[14px]">
        Miễn phí giao hàng cho các đơn hàng trực tuyến tại running-store.vn.
        <a
          href="#"
          class="underline"
          >Đăng ký thành viên NGAY!</a
        >
      </div>

      <div class="w-full">
        <div class="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          <div>
            <div class="relative w-full max-w-md min-w-[300px] max-lg:hidden">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm, danh mục"
                class="w-full min-w-[300px] border border-orange-500 rounded-full py-2 px-4 pl-10 focus:ring-orange-500 focus:border-orange-600"
              />
              <Search class="absolute w-4 h-4 left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
            </div>
            <Menu class="w-8 h-8 hover:text-orange-500 hidden max-lg:block" />
          </div>

          <div class="flex items-center space-x-2">
            <img
              src="~/assets/images/forrest-01.png"
              class="h-[60px] w-auto max-lg:h-[50px]"
            />
          </div>

          <div class="flex gap-4 max-lg:flex-col">
            <div class="flex items-center space-x-4 max-sm:hidden">
              <div class="flex items-center space-x-2">
                <div class="border border-orange-500 rounded-full p-2"><Phone class="text-orange-500" /></div>
                <div class="flex flex-col text-[16px]">
                  <span class="">Hotline 24/7</span>
                  <span class="text-orange-500 font-bold">0976.857.936</span>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <a class="cursor-pointer hover:text-orange-500 font-medium max-sm:hidden">Đăng nhập</a>
              <span class="font-medium max-sm:hidden">Giỏ hàng</span>
              <ShoppingCart class="cursor-pointer w-22 hover:text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      <nav class="w-full max-md:hidden relative">
        <div class="container relative mx-auto flex flex-wrap items-center justify-center space-x-6 py-3 gap-5">
          <a
            href="#"
            class="font-semibold text-orange-500 hover:text-orange-500 text-[16px] whitespace-nowrap"
            >FORRESTRUN</a
          >
          <a
            href="#"
            class="flex items-center space-x-1 font-medium hover:text-orange-500 text-[16px] whitespace-nowrap"
          >
            <span>DANH MỤC</span> <ChevronDown class="w-4 h-4" />
          </a>

          <div class="group">
            <a
              href="#"
              class="flex items-center space-x-1 font-medium hover:text-orange-500 text-[16px] whitespace-nowrap"
            >
              <span>THƯƠNG HIỆU</span> <ChevronDown class="w-4 h-4" />
            </a>

            <div
              class="absolute left-0 top-[33px] w-full bg-white shadow-lg rounded-lg p-5 hidden group-hover:flex flex-wrap gap-20 justify-start"
            >
              <div
                v-for="brand in BRANDS"
                :key="brand.name"
                class="p-3"
              >
                <img
                  :src="brand.logo"
                  :alt="brand.name"
                  class="h-6 mb-2"
                />
                <h3 class="font-bold text-sm">{{ brand.name }}</h3>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li
                    v-for="product in brand.products"
                    :key="product.name"
                    class="hover:text-orange-500 cursor-pointer"
                  >
                    {{ product.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            href="#"
            class="flex items-center space-x-1 font-medium hover:text-orange-500 text-[16px] whitespace-nowrap"
          >
            <span>HƯỚNG DẪN</span> <ChevronDown class="w-4 h-4" />
          </a>
          <a
            href="#"
            class="flex items-center space-x-1 font-medium hover:text-orange-500 text-[16px] whitespace-nowrap"
          >
            <span>BLOG</span> <ChevronDown class="w-4 h-4" />
          </a>
          <a
            href="#"
            class="flex items-center space-x-1 font-medium hover:text-orange-500 text-[16px] whitespace-nowrap"
          >
            <span>GIẢM GIÁ ĐẶC BIỆT</span> <ChevronDown class="w-4 h-4" />
          </a>
          <a
            href="#"
            class="font-medium hover:text-orange-500 text-[16px] whitespace-nowrap"
            >LIÊN HỆ</a
          >
        </div>
      </nav>
    </header>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
