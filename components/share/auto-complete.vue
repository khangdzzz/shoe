<script setup lang="ts">
import { ref } from 'vue';
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport
} from 'radix-vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  width: { type: String, default: '100%' },
  options: { type: Array as () => string[], default: () => [] }
});

const emit = defineEmits(['update:selectedValue']);

const valueSelected = ref('');

watch(
  () => props.options,
  () => {
    valueSelected.value = props.options[0] || '';
  },
  { immediate: true }
);

watch(valueSelected, (newValue) => {
  emit('update:selectedValue', newValue);
});

onMounted(() => {
  if (valueSelected.value) emit('update:selectedValue', valueSelected.value);
});
</script>

<template>
  <ComboboxRoot
    v-model="valueSelected"
    class="relative"
  >
    <ComboboxAnchor
      :style="{ width: width }"
      class="min-w-[120px] w-full inline-flex items-center justify-between rounded px-[15px] leading-none h-[30px] gap-[5px] bg-white hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none border border-input"
    >
      <ComboboxInput class="!bg-transparent w-full outline-none h-full selection:bg-grass5 placeholder-mauve8" />
      <ComboboxTrigger>
        <Icon
          icon="radix-icons:chevron-down"
          class="h-4 w-4"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent
      :style="{ width: width }"
      class="combobox-content absolute !z-12 w-full mt-[1px] min-w-[120px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
    >
      <ComboboxViewport class="p-[5px]">
        <ComboboxEmpty class="text-mauve8 text-xs font-medium text-center py-2" />

        <ComboboxGroup>
          <ComboboxItem
            v-for="(option, index) in options"
            :key="index"
            class="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-mauve3 data-[highlighted]:text-black"
            :value="option"
          >
            <ComboboxItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
            <span>
              {{ option }}
            </span>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
<style scoped lang="scss">
.combobox-content {
  z-index: 12;
}
</style>
