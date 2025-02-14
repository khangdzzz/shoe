<script lang="ts" setup>
definePageMeta({
  middleware: ['auth', 'auth-redirect']
});

const companyStore = useCompanyStore();
const systemStore = useSystemStore();
const jobService = useJob();

const officeId = ref<number | undefined>(undefined);
const targetYearMonth = ref<string>('');
const userTableComponentRef = ref();

const handleOfficeId = (id: number | undefined) => {
  if (userTableComponentRef.value) userTableComponentRef.value?.resetFilterTable(true);

  officeId.value = id;
  fetchCompanyUseStatus(true);
};

const handleTargetYearMonth = (date: string) => {
  if (userTableComponentRef.value) userTableComponentRef.value?.resetFilterTable(false);

  targetYearMonth.value = date;
  fetchCompanyUseStatus(false);
};

const formatTargetYearMonth = (date: string) => {
  const [year, month] = date.split('/');

  return `${year}-${month}-01`;
};

const fetchCompanyUseStatus = (isClearKana?: boolean) => {
  if (officeId.value && targetYearMonth.value) {
    companyStore.getCompanyUseStatus(
      {
        officeId: officeId.value,
        targetYearMonth: formatTargetYearMonth(targetYearMonth.value)
      },
      isClearKana
    );
  }
};

onMounted(() => {
  systemStore.searchLastJob();
  fetchCompanyUseStatus(true);
});

onUnmounted(() => {
  jobService.stopSearchLastJob();
});

const job = computed(() => systemStore.job);

watch(job, (newValue, oldValue) => {
  if (oldValue?.requestReport.status === 1 && newValue?.requestReport.status !== 1) {
    fetchCompanyUseStatus(false);
  }
});
</script>

<template>
  <div class="user-list px-4">
    <UsersModalNotifyRegisterPayment />
    <div class="relative header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">利用者選択</span>
      <ShareErrorMessage
        :class-custom="'absolute z-10 bg-[#ccc] w-[100%] top-[40px]  py-[11px]'"
        :type="'custom'"
      />
    </div>
    <UsersSearch
      @update:officeId="handleOfficeId"
      @update:targetYearMonth="handleTargetYearMonth"
    ></UsersSearch>
    <div class="body-content flex py-4 w-full gap-2">
      <UsersSearchCharacter class="px-5 py-10 min-w-[230px]" />
      <UsersTable
        class="w-full"
        ref="userTableComponentRef"
        :office-id="officeId"
        :target-year-month="formatTargetYearMonth(targetYearMonth)"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
