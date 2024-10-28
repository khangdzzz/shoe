<script setup lang="ts">
interface Character {
  label: string;
  selected: boolean;
  disabled?: boolean;
}

const companyStore = useCompanyStore();

const characters = ref<Character[]>(CHARACTERS.map((char) => ({ ...char, selected: false })));

watch(
  () => companyStore.userNameKanjiCharacters,
  () => {
    characters.value = CHARACTERS.map((char) =>
      companyStore.userNameKanjiCharacters.includes(char.label)
        ? { ...char, selected: false }
        : { ...char, disabled: true, selected: false }
    );
  },
  { immediate: true }
);

const getClass = (char: Character) => {
  if (char.disabled) {
    return 'h-[25px] w-[25px] bg-gray-400 text-white rounded-md cursor-not-allowed ';
  }
  if (char.selected) {
    return 'h-[25px] w-[25px] border border-blue-500 text-blue-500 rounded-md ';
  }
  return 'h-[25px] w-[25px] border border-black rounded-md hover:bg-gray-100 ';
};

const handleClick = (char: Character) => {
  if (!char.disabled) {
    char.selected = !char.selected;
  }

  companyStore.charactersSelected = characters.value.filter((char) => char.selected).map((char) => char.label);
};

const clearSelection = () => {
  characters.value.forEach((char) => {
    char.selected = false;
  });

  companyStore.charactersSelected = [];
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
