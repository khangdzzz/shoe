<script setup lang="ts">
defineProps({
  nameBind: {
    type: String,
    default: ''
  },
  classForm: {
    type: String,
    default: 'w-[100%]'
  },
  placeholder: {
    type: String,
    default: ''
  },
  classInput: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <FormField
    v-slot="{ componentField, errors }"
    :name="nameBind"
    class="flex-grow"
  >
    <FormItem :class="classForm">
      <FormControl>
        <Input
          type="text"
          v-bind="componentField"
          :class="[
            {
              'border-red-500': errors.length
            },
            classInput
          ]"
          class="placeholder:flex placeholder:text-center placeholder:text-[10px]"
          :placeholder="placeholder"
        />
        <span class="text-[10px] pt-[2px]">{{ description }}</span>
      </FormControl>
    </FormItem>
  </FormField>
</template>

<style scoped lang="scss"></style>
