<script setup lang="ts">
interface Character {
  label: string;
  selected: boolean;
  disabled?: boolean;
}
const characters = ref([
  { label: 'あ', selected: false },
  { label: 'い', selected: false },
  { label: 'う', selected: false },
  { label: 'え', selected: false },
  { label: 'お', selected: false },
  { label: 'か', selected: false },
  { label: 'き', selected: false },
  { label: 'く', selected: false },
  { label: 'け', selected: false },
  { label: 'こ', selected: false },
  { label: 'さ', selected: false },
  { label: 'し', selected: false },
  { label: 'す', selected: false },
  { label: 'せ', selected: false },
  { label: 'そ', selected: false },
  { label: 'た', selected: false },
  { label: 'ち', selected: false },
  { label: 'つ', selected: false },
  { label: 'て', selected: false },
  { label: 'と', selected: false },
  { label: 'な', selected: false },
  { label: 'に', selected: false },
  { label: 'ぬ', selected: false },
  { label: 'ね', selected: false },
  { label: 'の', selected: false },
  { label: 'は', selected: false },
  { label: 'ひ', selected: false },
  { label: 'ふ', selected: false },
  { label: 'へ', selected: false },
  { label: 'ほ', selected: false },
  { label: 'ま', selected: false },
  { label: 'み', selected: false },
  { label: 'む', selected: false },
  { label: 'め', selected: false },
  { label: 'も', selected: false },
  { label: 'や', selected: false },
  { label: 'ゆ', selected: false },
  { label: 'よ', selected: false },
  { label: 'ら', selected: false },
  { label: 'り', selected: false },
  { label: 'る', selected: false },
  { label: 'れ', selected: false },
  { label: 'ろ', selected: false },
  { label: 'わ', selected: false },
  { label: 'を', selected: false },
  { label: 'ん', selected: false }
]);

const getClass = (char: Character) => {
  if (char.disabled) {
    return 'py-[5px] px-[8px] bg-gray-400 text-white rounded-md cursor-not-allowed';
  }
  if (char.selected) {
    return 'py-[5px] px-[8px] border border-blue-500 text-blue-500 rounded-md';
  }
  return 'py-[5px] px-[8px] border border-black rounded-md hover:bg-gray-100';
};

const handleClick = (char: Character) => {
  if (!char.disabled) {
    char.selected = !char.selected;
  }
};

const clearSelection = () => {
  characters.value.forEach((char) => {
    char.selected = false;
  });
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-5 gap-2 mb-4">
      <button
        v-for="(char, index) in characters"
        :key="index"
        :class="getClass(char)"
        @click="handleClick(char)"
      >
        {{ char.label }}
      </button>
    </div>

    <button
      class="py-2 px-4 border border-black rounded-full text-black hover:bg-gray-200"
      @click="clearSelection"
    >
      条件クリア
    </button>
  </div>
</template>

<style scoped lang="scss">
.grid {
  max-width: 250px;
}
</style>
