<script lang="ts" setup>
const systemStore = useSystemStore();
const fetchDataInit = useFetchDataInit();

const termHtml = computed(() => systemStore.termHtml);
const isLoadingInit = computed(() => fetchDataInit.isLoadingInit);
</script>

<template>
  <div class="px-[4px] pt-[20px]">
    <div
      class="user-list px-4"
      v-html="termHtml"
    ></div>
    <ShareLoading v-if="isLoadingInit" />
  </div>
</template>
<style lang="scss" scoped></style>
