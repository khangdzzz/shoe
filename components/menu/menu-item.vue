<script setup lang="ts">
import { Menu } from 'lucide-vue-next';
import {
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetDescription,
  SheetTitle,
  Sheet,
  SheetTrigger
} from '@/components/ui/sheet';

const screenWidth = ref(window.innerWidth);
const isMenuOpen = ref<boolean>(false);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const shouldShowMenu = computed(() => screenWidth.value < 1024);
</script>

<template>
  <Sheet
    v-model:open="isMenuOpen"
    v-if="shouldShowMenu"
  >
    <SheetTrigger>
      <Menu class="w-8 h-8 hover:text-orange-500 cursor-pointer" />
    </SheetTrigger>
    <SheetContent
      :side="'left'"
      class="w-full md:w-[540px]"
    >
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription> Make changes to your profile here. Click save when you're done. </SheetDescription>
      </SheetHeader>

      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit"> Save changes </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
