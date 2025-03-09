<script setup lang="ts">
const isOpen = ref(true);
const userName = ref<string>('');
const isLoading = ref(false);
const data = ref<any>();
const isError = ref(false);

const emit = defineEmits<{ (e: 'close', data: any): void }>();

const findUserByName = async (fileName: string, name: string) => {
  try {
    isLoading.value = true;
    const res = await $fetch('/api/file/find-by-name', {
      method: 'POST',
      params: { fileName, name }
    });

    data.value = res;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.error('Lỗi khi gọi API:', error);
  }
};

const onSubmit = async () => {
  isError.value = false;
  await findUserByName('spins', userName.value);
  if (data.value) {
    isOpen.value = false;
    emit('close', data.value);
  } else {
    isError.value = true;
  }
};
</script>

<template>
  <Dialog :open="isOpen">
    <DialogContent class="w-[325px] md:w-[500px]">
      <DialogHeader>
        <DialogDescription> Bạn Vui Lòng Nhập Tên Được Cung Cấp Bởi Hệ Thống</DialogDescription>
      </DialogHeader>
      <div class="flex items-center gap-4">
        <Label
          for="name"
          class="text-right"
        >
          Name
        </Label>
        <Input
          id="name"
          class="col-span-3"
          v-model:model-value="userName"
        />
      </div>
      <DialogFooter class="flex flex-col justify-end items-center">
        <span
          class="text-red-500"
          v-if="isError"
          >Tên được cung cấp không đúng hoặc không tìm thấy.</span
        >
        <Button
          type="submit"
          class="items-center"
          @click="onSubmit"
        >
          Gửi
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
