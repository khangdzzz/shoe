<script lang="ts" setup>
definePageMeta({
  middleware: ['auth', 'auth-redirect']
});

const companyStore = useCompanyStore();

const officeId = ref<number | undefined>(undefined);
const targetYearMonth = ref<string>('');

const handleOfficeId = (id: number | undefined) => {
  officeId.value = id;
  fetchCompanyUseStatus();
};

const handleTargetYearMonth = (date: string) => {
  targetYearMonth.value = date;
  fetchCompanyUseStatus();
};

const formatTargetYearMonth = (date: string) => {
  const [year, month] = date.split('/');

  return `${year}-${month}-01`;
};

const fetchCompanyUseStatus = () => {
  if (officeId.value && targetYearMonth.value) {
    companyStore.getCompanyUseStatus({
      officeId: officeId.value,
      targetYearMonth: formatTargetYearMonth(targetYearMonth.value)
    });
  }
};

onMounted(() => {
  fetchCompanyUseStatus();
});
</script>

<template>
  <div class="user-list px-4">
    <div class="header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">利用者選択</span>
    </div>
    <UsersSearch
      @update:officeId="handleOfficeId"
      @update:targetYearMonth="handleTargetYearMonth"
    ></UsersSearch>
    <div class="body-content flex py-4 w-full gap-2">
      <UsersSearchCharacter class="px-5 py-10 min-w-[230px]" />
      <UsersTable
        class="w-full"
        :office-id="officeId"
        :target-year-month="formatTargetYearMonth(targetYearMonth)"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
