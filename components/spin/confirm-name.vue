<script setup lang="ts">
defineProps<{ isOpen: boolean }>();

const onSubmit = async () => {
  window.close();
};
</script>

<template>
  <Dialog :open="isOpen">
    <DialogContent class="w-[325px] md:w-[500px]">
      <DialogHeader>
        <DialogDescription class="text-start p-2 font-bold !text-red-500">
          Bạn Không Có Quyền Quay Vòng Quay</DialogDescription
        >
        <DialogDescription class="text-start p-2 font-medium">
          Vui Long Liên Hệ Với Quản Trị RUNNING STORE</DialogDescription
        >
      </DialogHeader>
      <DialogFooter class="flex flex-col !justify-center items-center">
        <Button
          type="submit"
          class="items-center"
          @click="onSubmit"
        >
          Thoát
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
