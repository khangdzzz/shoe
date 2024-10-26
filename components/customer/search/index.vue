<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="search flex flex-col gap-8 min-h-[100px] !px-[25px] max-lg:!px-[10px]">
    <div class="company flex max-sm:flex-col gap-5">
      <div class="relative items-center font-medium lg:w-[450px]">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 w-[70%]"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="w-4 h-4" />
        </span>
      </div>
      <div class="active flex gap-5">
        <div class="flex items-center gap-2">
          <Checkbox
            id="terms"
            class="bg-white"
          />
          <span
            for="terms"
            class="flex text-xs flex-shrink-0"
          >
            利用中
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox
            id="terms"
            class="bg-white"
          />
          <span
            for="terms"
            class="flex text-xs flex-shrink-0"
          >
            退会済
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox
            id="terms"
            class="bg-white"
          />
          <span
            for="terms"
            class="flex text-xs flex-shrink-0"
          >
            和暦表示
          </span>
        </div>
      </div>
    </div>

    <div class="actions flex max-sm:flex-col gap-5">
      <div class="flex gap-5 lg:w-[450px]">
        <Button
          variant="export"
          left-icon="search"
        >
          新規顧客追加
        </Button>
        <Button
          variant="export"
          left-icon="search"
        >
          顧客情報出力
        </Button>
      </div>
      <div class="flex gap-5">
        <CustomerSearchDate />
        <Button
          variant="export"
          left-icon="search"
        >
          利用状況出力
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  padding: 10px 30px;
}
</style>
