<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div
    class="search flex justify-between items-center min-h-[80px] !px-[25px] max-lg:!px-[10px] max-lg:flex-col max-lg:gap-5 max-lg:justify-start"
  >
    <div class="office flex gap-5 items-center font-medium w-full">
      <span class="label">事業所</span>
      <ShareAutoComplete :width="'250px'" />
    </div>

    <div class="date w-full">
      <UsersSearchDate :title="'表示年月'" />
    </div>

    <Button> 更新 </Button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  background-color: #afeeee;
  padding: 10px 30px;
}
</style>
