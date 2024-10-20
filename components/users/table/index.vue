<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="user-container">
    <div class="action flex justify-between pr-5">
      <div class="flex gap-4 items-center">
        <div class="relative w-[220px] items-center justify-center">
          <Input
            id="search"
            type="text"
            placeholder="Search"
            class="pl-10"
          />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="w-4 h-4 text-muted-foreground" />
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            for="terms"
            class="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            和暦表示
          </label>
        </div>
      </div>
      <div class="toggle flex gap-5">
        <div class="flex items-center space-x-2">
          <Switch />
          <span>一括</span>
        </div>
        <div class="flex items-center space-x-2">
          <Switch />
          <span>一括</span>
        </div>
      </div>
    </div>

    
  </div>
</template>
<style lang="scss" scoped></style>
