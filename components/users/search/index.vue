<script lang="ts" setup>
import { LoaderCircle, ShieldAlert } from 'lucide-vue-next';
import type { Jobs } from '~/models/common';

const common = useCommon();
const companyStore = useCompanyStore();
const userListPage = userListPageStore();
const systemStore = useSystemStore();

const officeSelected = ref('');
const targetYearMonth = ref('');
const isLoading = ref(false);
const jobSearchInterval = ref<ReturnType<typeof setInterval> | null>(null);

const emit = defineEmits<{
  (e: 'update:officeId', officeId: number | undefined): void;
  (e: 'update:targetYearMonth', targetYearMonth: string): void;
}>();

const searchLastJob = async () => {
  await systemStore.searchLastJob();
  if (!jobSearchInterval.value) {
    jobSearchInterval.value = setInterval(async () => {
      await systemStore.searchLastJob();
    }, 30000);
  }
};

const stopSearchLastJob = () => {
  if (jobSearchInterval.value) {
    clearInterval(jobSearchInterval.value);
    jobSearchInterval.value = null;
  }
};

onMounted(() => {
  searchLastJob();
});

onUnmounted(() => {
  stopSearchLastJob();
});

const job = computed(() => systemStore.job);

const offices = computed(() => {
  const storedOfficeName = common.getLocalStorage(LOCAL_STORAGE_KEYS.officeName);
  const officeNames = companyStore.offices.map((office) => office.officeName);

  if (storedOfficeName && officeNames.length && officeNames.includes(storedOfficeName)) {
    officeSelected.value = storedOfficeName;
  }

  if (!storedOfficeName && officeNames[0]) {
    officeSelected.value = officeNames[0];
    common.setLocalStorage(LOCAL_STORAGE_KEYS.officeName, officeNames[0]);
  }

  return officeNames;
});

const officeId = computed(() => {
  if (officeSelected.value) common.setLocalStorage(LOCAL_STORAGE_KEYS.officeName, officeSelected.value);

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
  try {
    const res = await companyStore.crawlCompanyUserStatus();
    await systemStore.searchLastJob();
    if (res?.data) {
      userListPage.isOpenNotifyCrawl = true;
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
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
        :value-selected="officeSelected"
        @update:selectedValue="(office) => (officeSelected = office)"
      />
    </div>

    <div class="date w-full">
      <UsersSearchDate
        :title="'表示年月'"
        @update:selectedDate="(date) => (targetYearMonth = date)"
      />
    </div>

    <div class="flex relative gap-5 pr-[20px]">
      <Button
        @click="crawlCompanyUserStatus"
        :disabled="job && job.status === 1"
        class="w-[80px] flex items-center justify-center"
      >
        <LoaderCircle
          v-if="isLoading"
          class="w-4 h-4 mr-2 animate-spin flex-shrink-0"
        />更新
      </Button>
      <div
        class="absolute top-[5px] right-[-7px]"
        v-if="job?.status == 2"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ShieldAlert class="w-[20px] h-[20px] text-red-500 cursor-pointer hover:text-red-600" />
            </TooltipTrigger>
            <TooltipContent class="mb-2 mr-2">
              <p class="text-[12px]">
                {{ job?.errorMessage }}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        class="absolute top-[36px] left-[-30px] text-[10px] w-[200px]"
        v-if="job"
      >
        最終更新：{{ formatDate(job.updatedAt, 'YYYY/MM/DD HH:mm') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  background-color: #afeeee;
  padding: 10px 30px;
}
</style>
