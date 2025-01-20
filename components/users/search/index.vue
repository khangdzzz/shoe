<script lang="ts" setup>
import { LoaderCircle } from 'lucide-vue-next';
import { checkTargetYearMonthMatchCurrentYearMonth, hasRegisterPaymentMethod } from '~/helps';

const companyStore = useCompanyStore();
const system = useSystemStore();

const officeSelected = ref('');
const targetYearMonth = ref('');
const isLoading = ref(false);

const emit = defineEmits<{
  (e: 'update:officeId', officeId: number | undefined): void;
  (e: 'update:targetYearMonth', targetYearMonth: string): void;
}>();

const offices = computed(() => {
  return companyStore.offices.map((office) => office.officeName);
});

const officeId = computed(() => {
  return companyStore.offices.find((office) => office.officeName === officeSelected.value)?.id;
});

watch(officeId, () => {
  emit('update:officeId', officeId.value);
});

watch(targetYearMonth, () => {
  emit('update:targetYearMonth', targetYearMonth.value);
});

const crawlCompanyUserStatus = async () => {
  isLoading.value = true;

  await companyStore.crawlCompanyUserStatus().finally(() => {
    isLoading.value = false;
    setTimeout(() => {
      window.location.reload();
    }, 500);
  });
};

const isLoadPermission = computed(() => system.isLoadPermission);

const isDisableAllButton = computed(() => {
  const _forceUpdate = isLoadPermission.value;

  return checkTargetYearMonthMatchCurrentYearMonth(targetYearMonth?.value) && hasRegisterPaymentMethod();
});
</script>

<template>
  <div
    class="search flex justify-between items-center min-h-[80px] !px-[25px] max-lg:!px-[10px] max-lg:flex-col max-lg:gap-5 max-lg:justify-start"
  >
    <div class="office flex gap-5 items-center font-medium w-full">
      <span class="label">事業所</span>
      <ShareAutoComplete
        :width="'300px'"
        :options="offices"
        @update:selectedValue="(office) => (officeSelected = office)"
      />
    </div>

    <div class="date w-full">
      <UsersSearchDate
        :title="'表示年月'"
        @update:selectedDate="(date) => (targetYearMonth = date)"
      />
    </div>

    <Button
      @click="crawlCompanyUserStatus"
      :disabled="!isDisableAllButton"
    >
      <LoaderCircle
        v-if="isLoading"
        class="w-4 h-4 mr-2 animate-spin"
      />更新
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  background-color: #afeeee;
  padding: 10px 30px;
}
</style>
