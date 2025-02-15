<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next';

const props = defineProps({
  isOpenNotify: {
    type: Boolean,
    default: false
  },
  htmlMessage: {
    type: String,
    default: ''
  }
});

const isOpenDialog = ref(props.isOpenNotify);
const isLoading = ref(false);

watch(
  () => props.isOpenNotify,
  (newVal) => {
    isOpenDialog.value = newVal;
  }
);

const emit = defineEmits(['close', 'reload']);

const handleClose = () => {
  emit('close');
};

const handleReload = () => {
  isLoading.value = true;
  emit('reload');
};
</script>

<template>
  <AlertDialog v-model:open="isOpenDialog">
    <AlertDialogContent>
      <AlertDialogHeader class="flex flex-col gap-4 items-center">
        <AlertDialogTitle class="text-sm">新しいデータ</AlertDialogTitle>
      </AlertDialogHeader>

      <AlertDialogDescription>
        <div
          class="text-center"
          v-html="htmlMessage"
        ></div>
      </AlertDialogDescription>

      <AlertDialogFooter class="flex !flex-col gap-4">
        <AlertDialogAction
          class="flex self-center min-w-[120px]"
          @click="handleReload"
        >
          <LoaderCircle
            v-if="isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          更新する
        </AlertDialogAction>

        <AlertDialogCancel
          class="flex self-center border border-gray-300 min-w-[120px]"
          @click="handleClose"
        >
          後で
        </AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style scoped lang="scss">
.error-content {
  border-left: 4px solid rgb(239 68 68);
}
</style>
