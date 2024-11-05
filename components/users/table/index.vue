<script lang="ts" setup>
import { Search, ArrowDownUp, ArrowUpDown } from 'lucide-vue-next';
import { useToast } from '~/components/ui/toast/use-toast';
import type { CompanyUserStatus } from '~/models/company';

const props = defineProps({
  officeId: {
    type: Number
  },
  targetYearMonth: {
    type: String
  }
});

const VALUE_STATUS_BULK_EXPORT = 99;

const { officeId, targetYearMonth } = toRefs(props);

interface Header {
  label: string;
  width: string;
  isSort: boolean;
  key: string;
}

const companyStore = useCompanyStore();
const system = useSystemStore();
const { toast } = useToast();

const sort = ref('');
const actionExport = ref('');
const userNameKanjiSearch = ref('');
const isDialogOpen = ref(false);
const planSwitchState = ref(false);
const reportSwitchState = ref(false);
const isCalenderJapanese = ref(false);

const excludeReportStatus = ref<number[]>([]);
const excludePlanStatus = ref<number[]>([]);
const usersNeedCreateReport = ref<CompanyUserStatus[]>([]);

const headers: Header[] = [
  { label: '利用者', width: '16%', key: 'nameKanji', isSort: true },
  { label: '生年月日', width: '16%', key: 'birthday', isSort: true },
  { label: '報告書', width: '9%', key: 'reportStatus', isSort: false },
  { label: '実行日時', width: '16%', key: 'reportDate', isSort: false },
  { label: '計画書', width: '9%', key: 'planStatus', isSort: false },
  { label: '実行日時', width: '16%', key: 'planDate', isSort: false },
  { label: '報告書', width: '9%', key: 'actionReport', isSort: false },
  { label: '計画書', width: '9%', key: 'actionPlan', isSort: false }
];

const STATUS: { [key: number]: string } = {
  0: '未実行',
  1: '実行予定',
  2: '実行済み',
  3: '実行エラー'
};

const isLoading = computed(() => companyStore.isLoadCompanyUsers);

const characterSelected = computed(() => companyStore.charactersSelected);

const isHaveDataCompanyUsers = computed(() => companyStore.isHaveDataCompanyUsers);

const users = computed(() => companyStore.companyUsers);

const notify = computed(() => system.notify);

const isOpenNotifyCrawler = computed(() => companyStore.isOpenNotifyCrawler);

const companyUsers = ref<CompanyUserStatus[]>([]);

watch(users, () => {
  companyUsers.value = handleDataCompanyUserStatus();
});

watch([sort, characterSelected, userNameKanjiSearch, reportSwitchState, planSwitchState], () => {
  companyUsers.value = handleDataCompanyUserStatus();
});

const handleDataCompanyUserStatus = () => {
  let filteredUsers = [...users.value];

  if (sort.value) filteredUsers = handleSortUsers(filteredUsers);

  if (characterSelected.value.length) filteredUsers = filterByCharacter(filteredUsers);

  if (userNameKanjiSearch.value) filteredUsers = filterByKanji(filteredUsers);

  filteredUsers = reportSwitchState.value
    ? updateUsersReportStatus(filteredUsers)
    : resetExcludeStatus(filteredUsers, excludeReportStatus);

  filteredUsers = planSwitchState.value
    ? updateUsersPlanStatus(filteredUsers)
    : resetExcludeStatus(filteredUsers, excludePlanStatus);

  console.log(excludePlanStatus.value, excludeReportStatus.value);

  return filteredUsers;
};

const filterByCharacter = (users: CompanyUserStatus[]) =>
  users.filter((user) => characterSelected.value.some((char) => user.nameKana.includes(char)));

const filterByKanji = (users: CompanyUserStatus[]) =>
  users.filter((user) => user.nameKanji.includes(userNameKanjiSearch.value));

const updateUsersReportStatus = (users: CompanyUserStatus[]) => {
  return users.map((user) =>
    excludeReportStatus.value.includes(user.id)
      ? user
      : { ...user, reportStatus: user.reportStatus === 0 ? VALUE_STATUS_BULK_EXPORT : user.reportStatus }
  );
};

const updateUsersPlanStatus = (users: CompanyUserStatus[]) => {
  return users.map((user) =>
    excludePlanStatus.value.includes(user.id)
      ? user
      : { ...user, planStatus: user.planStatus === 0 ? VALUE_STATUS_BULK_EXPORT : user.planStatus }
  );
};

const resetExcludeStatus = (users: CompanyUserStatus[], excludeStatusList: Ref<number[]>) => {
  excludeStatusList.value = [];
  return users;
};

const getStatus = (amount: number | null) => {
  if (!amount) return STATUS[0];

  if (amount === 1) return STATUS[1];
  if (amount === 2 || amount === VALUE_STATUS_BULK_EXPORT) return STATUS[2];
  if (amount === 3) return STATUS[3];

  return STATUS[0];
};

const getStatusColor = (amount: number | null) => {
  if (!amount) amount = 0;

  let classes = 'flex justify-center items-center py-2 ml-2 rounded-sm ';
  switch (amount) {
    case 0:
      classes += 'bg-[#d4e9d3]';
      break;
    case 1:
    case VALUE_STATUS_BULK_EXPORT:
      classes += 'bg-[#fff3cb]';
      break;
    case 2:
      classes += 'bg-[#d9e8fc]';
      break;
    case 3:
      classes += 'bg-[#f8cecb]';
      break;
  }

  return classes;
};

const getButtonColor = (amount: number | null) => {
  if (!amount) amount = 0;

  let classes = 'flex justify-center items-center py-2 ml-2 rounded-sm mx-1 ';

  switch (amount) {
    case 0:
      classes += 'border border-gray-300 hover:bg-[#faeded]';
      break;
    case 1:
    case 2:
    case 3:
      classes += 'bg-[#acacac]';
      break;
    case VALUE_STATUS_BULK_EXPORT:
      classes += 'bg-[#afeeed] hover:bg-[#77f6f4]';
      break;
  }

  return classes;
};

const updateSort = (header: Header) => {
  if (!header.isSort) return;

  const [currentKey, currentDirection] = sort.value.split(':');
  const newDirection = currentKey === header.key ? (currentDirection === SORT.ASC ? SORT.DESC : '') : SORT.ASC;

  sort.value = newDirection ? `${header.key}:${newDirection}` : '';
};

const handleSortUsers = (users: any[]) => {
  const [key, direction] = sort.value.split(':');

  return users.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === SORT.DESC ? bValue - aValue : aValue - bValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      const dateA = new Date(aValue);
      const dateB = new Date(bValue);
      if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
        return direction === SORT.DESC ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
      }
      return direction === SORT.DESC ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
    }

    return 0;
  });
};

const updateReportStatus = (user: CompanyUserStatus) => {
  if (user.reportStatus === VALUE_STATUS_BULK_EXPORT) {
    companyUsers.value = companyUsers.value.map(updateUserReportStatus(user.id, 0));
    excludeReportStatus.value.push(user.id);
    return;
  } else if (user.reportStatus === 0 && reportSwitchState.value) {
    companyUsers.value = companyUsers.value.map(updateUserReportStatus(user.id, VALUE_STATUS_BULK_EXPORT));
    excludeReportStatus.value = excludeReportStatus.value.filter((id) => id !== user.id);
    return;
  } else if (user.reportStatus !== 0) return;

  const userExport = { ...user, reportStatus: 0 };
  openDialogForExport(userExport, ACTION_EXPORT.REPORT);
};

const updatePlanStatus = (user: CompanyUserStatus) => {
  if (user.planStatus === VALUE_STATUS_BULK_EXPORT) {
    companyUsers.value = companyUsers.value.map(updateUserPlanStatus(user.id, 0));
    excludePlanStatus.value.push(user.id);
    return;
  } else if (user.planStatus === 0 && planSwitchState.value) {
    companyUsers.value = companyUsers.value.map(updateUserPlanStatus(user.id, VALUE_STATUS_BULK_EXPORT));
    excludePlanStatus.value = excludePlanStatus.value.filter((id) => id !== user.id);
    return;
  } else if (user.planStatus !== 0) return;

  const userExport = { ...user, planStatus: 0 };
  openDialogForExport(userExport, ACTION_EXPORT.PLAN);
};

const updateUserReportStatus = (id: number, status: number) => (user: CompanyUserStatus) =>
  user.id === id ? { ...user, reportStatus: status } : user;

const updateUserPlanStatus = (id: number, status: number) => (user: CompanyUserStatus) =>
  user.id === id ? { ...user, planStatus: status } : user;

const openDialogCreateReport = () => {
  usersNeedCreateReport.value = companyUsers.value.filter((user) => user.reportStatus === 99 || user.planStatus === 99);

  if (reportSwitchState.value && planSwitchState.value) actionExport.value = ACTION_EXPORT.PLAN_AND_REPORT;
  else if (reportSwitchState.value) actionExport.value = ACTION_EXPORT.REPORT;
  else if (planSwitchState.value) actionExport.value = ACTION_EXPORT.PLAN;

  isDialogOpen.value = true;
};
const openDialogForExport = (user: CompanyUserStatus, action: string) => {
  usersNeedCreateReport.value = [user];
  actionExport.value = action;
  isDialogOpen.value = true;
};

const handleExportCompanyUser = async () => {
  companyStore.isLoadCompanyUsers = true;

  const users = usersNeedCreateReport.value.map((user) => {
    const { id } = user;
    const isExecuteReport =
      actionExport.value === ACTION_EXPORT.REPORT ||
      (actionExport.value === ACTION_EXPORT.PLAN_AND_REPORT && user.reportStatus === 99)
        ? 1
        : 0;
    const isExecutePlan =
      actionExport.value === ACTION_EXPORT.PLAN ||
      (actionExport.value === ACTION_EXPORT.PLAN_AND_REPORT && user.planStatus === 99)
        ? 1
        : 0;

    return { id, isExecuteReport, isExecutePlan };
  });

  if (!officeId?.value || !targetYearMonth?.value) return;

  const body = {
    officeId: officeId?.value,
    targetYearMonth: targetYearMonth?.value,
    users
  };

  await companyStore.bulkExportReport(body);

  if (notify.value?.message) {
    triggerToast('destructive', notify.value.message);
    companyStore.isLoadCompanyUsers = false;
    return;
  }

  await companyStore.getCompanyUseStatus({
    officeId: officeId?.value,
    targetYearMonth: targetYearMonth?.value
  });

  companyStore.isLoadCompanyUsers = false;

  const message = `利用者の報告書／計画書実行のリクエストを受領しました。システムからの通知メールにて状況をご確認ください`;

  triggerToast('default', message);
};

const triggerToast = (variant: 'default' | 'destructive' | null | undefined, message: string) => {
  toast({
    description: message,
    variant: variant
  });
};
</script>

<template>
  <div class="user-container flex flex-col gap-2 overflow-hidden">
    <div class="action flex justify-between pr-5 max-lg:flex-col max-lg:gap-5">
      <div class="flex gap-4 items-center">
        <div class="relative w-full max-w-[220px] items-center justify-center">
          <Input
            id="search"
            type="text"
            placeholder="Search"
            class="pl-10"
            v-model="userNameKanjiSearch"
          />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="w-4 h-4 text-muted-foreground" />
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox
            id="terms"
            v-model:checked="isCalenderJapanese"
          />
          <span
            for="terms"
            class="flex text-xs flex-shrink-0"
          >
            和暦表示
          </span>
        </div>
      </div>
      <div class="toggle flex gap-5">
        <div class="flex items-center space-x-2">
          <Switch v-model:checked="reportSwitchState" />
          <span>一括</span>
        </div>
        <div class="flex items-center space-x-2">
          <Switch v-model:checked="planSwitchState" />
          <span>一括</span>
        </div>
      </div>
    </div>
    <div class="w-full flex relative flex-col">
      <div
        class="table-container overflow-auto border-b"
        :class="{ 'border-l': companyUsers.length }"
      >
        <table class="w-full table-fixed">
          <thead class="bg-[#afeeee] sticky top-0 z-10">
            <tr>
              <th
                class="py-3"
                v-for="(header, index) in headers"
                :key="index"
                :style="{ width: header.width }"
              >
                <span
                  :class="[
                    'flex items-center justify-center px-4 text-black border-white hover:cursor-pointer',
                    index < headers.length - 1 ? 'border-r-2' : ''
                  ]"
                  @click="updateSort(header)"
                  >{{ header.label }}
                  <ArrowDownUp
                    v-if="sort && sort.split(':')[1] == SORT.ASC && header.key == sort.split(':')[0]"
                    width="12"
                    height="12"
                    class="ml-1 hover:text-[#5566da]"
                  />
                  <ArrowUpDown
                    v-if="sort && sort.split(':')[1] == SORT.DESC && header.key == sort.split(':')[0]"
                    width="12"
                    height="12"
                    class="ml-1 hover:text-[#5566da]"
                  />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="companyUsers.length === 0 && !isHaveDataCompanyUsers">
              <td
                class="text-center py-3 text-[#5566da]"
                :colspan="headers.length"
              >
                {{ MESSAGES.EMPTY }}
              </td>
            </tr>
            <tr
              v-else
              v-for="(row, index) in companyUsers"
              class="bg-white dark:bg-gray-800 text-center h-10 hover:cursor-pointer hover:bg-[#afe7ee47]"
              :class="[index < companyUsers.length - 1 ? 'border-b' : '']"
            >
              <td>
                <span>{{ row.nameKanji }}</span>
              </td>
              <td>
                <span v-if="isCalenderJapanese">{{ formatToJapaneseEra(row.birthday) }}</span>
                <span v-else>{{ formatDate(row.birthday, 'YYYY/MM/DD') }}</span>
              </td>
              <td>
                <span
                  class="px-[18px] py-[8px] rounded-sm"
                  :class="getStatusColor(row.reportStatus)"
                  >{{ getStatus(row.reportStatus) }}</span
                >
              </td>
              <td>
                <span>{{ formatDate(row.reportDate, 'YYYY/MM/DD HH:mm') }}</span>
              </td>
              <td>
                <span
                  class="px-[18px] py-[8px] rounded-sm"
                  :class="getStatusColor(row.planStatus)"
                  >{{ getStatus(row.planStatus) }}</span
                >
              </td>
              <td>
                <span>{{ formatDate(row.planDate, 'YYYY/MM/DD HH:mm') }}</span>
              </td>
              <td>
                <span
                  :class="getButtonColor(row.reportStatus)"
                  @click="updateReportStatus(row)"
                  >実行</span
                >
              </td>
              <td>
                <span
                  :class="getButtonColor(row.planStatus)"
                  @click="updatePlanStatus(row)"
                  >実行</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ShareLoading v-if="isLoading" />

      <div
        v-if="isOpenNotifyCrawler"
        class="absolute w-full h-full bg-[#f7f5f505] flex justify-center items-center z-50"
      >
        <div class="flex flex-col items-center bg-[#b5b5b5e6] py-[24px] px-[50px] gap-[8px] rounded-[30px]">
          <span>利用者情報を最新化しています。 </span>
          <span>利用者数 一人あたり 5秒要します、しばらくお待ちください！</span>
          <span> ※実際の速度はカイポケサイトのレスポンス状況により変動いたします。</span>
        </div>
      </div>

      <div class="flex justify-end mr-[35px]">
        <Button
          :disabled="!planSwitchState && !reportSwitchState"
          class="flex justify-end mt-[30px]"
          @click="openDialogCreateReport"
        >
          実行開始
        </Button>
      </div>
    </div>
    <UsersModalConfirmCreateReport
      :action="actionExport"
      :isOpen="isDialogOpen"
      :users="usersNeedCreateReport"
      @close="() => (isDialogOpen = false)"
      @export="handleExportCompanyUser"
    />

    <Toaster class="top-[5px]" />
  </div>
</template>
<style lang="scss" scoped>
.table-container {
  max-height: calc(100vh - 330px);
  min-height: calc(100vh - 330px);
  overflow-y: auto;
  overflow-x: auto;
}

thead th {
  position: sticky;
  top: 0;
  background-color: #afeeee;
  z-index: 1;
}

.table-fixed {
  min-width: 1160px;
}
</style>
