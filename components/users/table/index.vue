<script lang="ts" setup>
import { Search, ArrowDownUp, ArrowUpDown } from 'lucide-vue-next';
import { useToast } from '~/components/ui/toast/use-toast';
import type { Header } from '~/models/common';
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

const companyStore = useCompanyStore();
const system = useSystemStore();
const { toast } = useToast();

const sort = ref('');
const userNameKanjiSearch = ref('');
const isDialogOpen = ref(false);
const planSwitchState = ref(false);
const reportSwitchState = ref(false);
const isCalenderJapanese = ref(false);
const isDisableExport = ref(true);
const selectedReportStatus = ref('999');
const selectedPlanStatus = ref('999');
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

const STATUS_CREATE_REPORT_PLAN = Object.entries(STATUS).map(([key, value]) => ({
  id: Number(key),
  value: value
}));

const isLoading = computed(() => companyStore.isLoadCompanyUsers);

const characterSelected = computed(() => companyStore.charactersSelected);

const isHaveDataCompanyUsers = computed(() => companyStore.isHaveDataCompanyUsers);

const users = computed(() => companyStore.companyUsers);

const notify = computed(() => system.notify);

const isOpenNotifyCrawler = computed(() => companyStore.isOpenNotifyCrawler);

const companyUsers = ref<CompanyUserStatus[]>([]);

watch(users, () => {
  planSwitchState.value = false;
  reportSwitchState.value = false;
  companyUsers.value = handleDataCompanyUserStatus();
});

watch([sort, characterSelected, userNameKanjiSearch], () => {
  companyUsers.value = handleDataCompanyUserStatus();
});

watch(companyUsers, (newUsers) => {
  const isBulkExport = newUsers.some(
    (user) => user.reportStatus === VALUE_STATUS_BULK_EXPORT || user.planStatus === VALUE_STATUS_BULK_EXPORT
  );

  isDisableExport.value = !isBulkExport;
});

watch([selectedReportStatus, selectedPlanStatus], () => {
  companyUsers.value = handleDataCompanyUserStatus();
});

const handleDataCompanyUserStatus = (companyUsers?: CompanyUserStatus[]) => {
  let filteredUsers = companyUsers ?? [...users.value];

  if (sort.value) filteredUsers = handleSortUsers(filteredUsers);

  if (characterSelected.value.length) filteredUsers = filterByCharacter(filteredUsers);

  if (userNameKanjiSearch.value) filteredUsers = filterByKanji(filteredUsers);

  if (selectedReportStatus.value !== '999' || selectedPlanStatus.value !== '999')
    filteredUsers = filterByReportStatus(filteredUsers);

  return filteredUsers;
};

const filterByReportStatus = (users: CompanyUserStatus[]) => {
  const selectReportStatus = Number(selectedReportStatus.value);
  const selectPlanStatus = Number(selectedPlanStatus.value);
  return users.filter((user) => {
    if (selectReportStatus !== 999 && selectPlanStatus !== 999)
      return user.reportStatus === selectReportStatus && user.planStatus === selectPlanStatus;
    if (selectReportStatus !== 999) return user.reportStatus === selectReportStatus;
    if (selectPlanStatus !== 999) return user.planStatus === selectPlanStatus;
    return true;
  });
};

const onChangeReportSwitch = () => {
  const reportStatus = !reportSwitchState.value;

  if (!reportStatus) {
    companyUsers.value = companyUsers.value.map((user) => ({
      ...user,
      reportStatus: users.value.find((u) => u.id === user.id)?.reportStatus ?? 0
    }));
    companyUsers.value = handleDataCompanyUserStatus(companyUsers.value);
    planSwitchState.value = false;
    onChangePlanSwitch(planSwitchState.value);
  } else {
    companyUsers.value = updateUsersReportStatus(companyUsers.value);
    if (planSwitchState.value) onChangePlanSwitch(planSwitchState.value);
  }
};

const onChangePlanSwitch = (status?: boolean) => {
  const planStatus = status !== undefined ? status : !planSwitchState.value;

  if (!planStatus) {
    companyUsers.value = companyUsers.value.map((user) => ({
      ...user,
      planStatus: users.value.find((u) => u.id === user.id)?.planStatus ?? 0
    }));
    companyUsers.value = handleDataCompanyUserStatus(companyUsers.value);
  } else companyUsers.value = updateUsersPlanStatus(companyUsers.value);
};

const filterByCharacter = (users: CompanyUserStatus[]) => {
  return users.filter((user) =>
    characterSelected.value.some((char) => {
      const [char1, char2] = char.split(',');

      return user.nameKana.startsWith(char1.trim()) || user.nameKana.startsWith(char2.trim());
    })
  );
};

const filterByKanji = (users: CompanyUserStatus[]) =>
  users.filter((user) => user.nameKanji.includes(userNameKanjiSearch.value));

const updateUsersReportStatus = (users: CompanyUserStatus[]) => {
  return users.map((user) => {
    return {
      ...user,
      reportStatus: user.reportStatus === 0 || user.reportStatus === 3 ? VALUE_STATUS_BULK_EXPORT : user.reportStatus
    };
  });
};

const updateUsersPlanStatus = (companyUsers: CompanyUserStatus[]) => {
  return companyUsers.map((companyUser) => {
    return {
      ...companyUser,
      planStatus:
        (companyUser.planStatus === 0 || companyUser.planStatus === 3) &&
        companyUser.reportStatus !== 0 &&
        companyUser.reportStatus !== 3
          ? VALUE_STATUS_BULK_EXPORT
          : companyUser.planStatus
    };
  });
};

const getStatus = (amount: number | null) => {
  if (!amount) return STATUS[0];

  if (amount === 1 || amount === VALUE_STATUS_BULK_EXPORT) return STATUS[1];
  if (amount === 2) return STATUS[2];
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

const getButtonColorReport = (amount: number | null) => {
  if (!amount) amount = 0;

  let classes = 'flex justify-center items-center py-2 ml-2 rounded-sm mx-1 ';

  switch (amount) {
    case 0:
      classes += isDisableAllButton.value ? 'border border-gray-300 hover:bg-[#faeded]' : 'border border-gray-300 ';
      break;
    case 1:
    case 2:
      classes += 'bg-[#afeeed]';
      break;
    case 3:
      classes += 'bg-[#acacac]';
      break;
    case VALUE_STATUS_BULK_EXPORT:
      classes += 'bg-[#afeeed] hover:bg-[#77f6f4]';
      break;
  }

  return classes;
};

const getButtonColorPlan = (row: CompanyUserStatus) => {
  const reportStatus = row.reportStatus ?? 0;
  const planStatus = row.planStatus ?? 0;

  let classes = 'flex justify-center items-center py-2 ml-2 rounded-sm mx-1 ';

  switch (planStatus) {
    case 0:
      classes +=
        [VALUE_STATUS_BULK_EXPORT, 1, 2].includes(reportStatus) && isDisableAllButton.value
          ? 'border border-gray-300 hover:bg-[#faeded]'
          : 'border border-gray-300 ';
      break;
    case 1:
    case 2:
      classes += 'bg-[#afeeed]';
      break;
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

const updateReportStatus = (companyUser: CompanyUserStatus) => {
  if (!isDisableAllButton.value) return;

  const { id, reportStatus } = companyUser;

  if (![0, 3, VALUE_STATUS_BULK_EXPORT].includes(reportStatus)) return;

  const userReportStatus = users.value.find((user) => user.id === id)?.reportStatus ?? 0;

  const newStatus = reportStatus === VALUE_STATUS_BULK_EXPORT ? userReportStatus : VALUE_STATUS_BULK_EXPORT;

  companyUsers.value = companyUsers.value.map(updateUserReportStatus(companyUser.id, newStatus));

  if (newStatus != VALUE_STATUS_BULK_EXPORT) updatePlanStatus(companyUser, true);
};

const updatePlanStatus = (companyUser: CompanyUserStatus, forceCancel?: boolean) => {
  if (!isDisableAllButton.value) return;

  const { id, planStatus, reportStatus } = companyUser;

  const userPlanStatus = users.value.find((user) => user.id === id)?.planStatus ?? 0;

  if (forceCancel) {
    companyUsers.value = companyUsers.value.map(updateUserPlanStatus(companyUser.id, userPlanStatus));
    return;
  }

  if (![0, 3, VALUE_STATUS_BULK_EXPORT].includes(planStatus) || [0, 3].includes(reportStatus)) return;

  const newStatus = planStatus === VALUE_STATUS_BULK_EXPORT ? userPlanStatus : VALUE_STATUS_BULK_EXPORT;

  companyUsers.value = companyUsers.value.map(updateUserPlanStatus(companyUser.id, newStatus));
};

const updateUserReportStatus = (id: number, status: number) => (user: CompanyUserStatus) =>
  user.id === id ? { ...user, reportStatus: status } : user;

const updateUserPlanStatus = (id: number, status: number) => (user: CompanyUserStatus) =>
  user.id === id ? { ...user, planStatus: status } : user;

const openDialogCreateReport = () => {
  usersNeedCreateReport.value = companyUsers.value.filter((user) => user.reportStatus === 99 || user.planStatus === 99);

  isDialogOpen.value = true;
};

const handleExportCompanyUser = async () => {
  companyStore.isLoadCompanyUsers = true;

  const users = usersNeedCreateReport.value.map((user) => {
    const { id } = user;
    const isExecuteReport = user.reportStatus === 99 ? 1 : 0;
    const isExecutePlan = user.planStatus === 99 ? 1 : 0;

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
    variant: variant,
    duration: 1000
  });
};

const isDisableAllButton = computed(() => {
  if (!targetYearMonth?.value) return false;

  const targetDate = new Date(targetYearMonth?.value);
  const currentDate = new Date();

  return currentDate.getFullYear() === targetDate.getFullYear() && currentDate.getMonth() === targetDate.getMonth();
});
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
          <Switch
            :disabled="!isDisableAllButton"
            v-model:checked="reportSwitchState"
            @click="() => onChangeReportSwitch()"
          />
          <span>一括</span>
        </div>
        <div class="flex items-center space-x-2">
          <Switch
            :disabled="!isDisableAllButton"
            v-model:checked="planSwitchState"
            @click="() => onChangePlanSwitch()"
          />
          <span>一括</span>
        </div>
      </div>
    </div>
    <div class="w-full flex relative flex-col">
      <table class="w-full table-fixed mb-[4px]">
        <thead>
          <tr class="bg-[#ffff]">
            <th class="w-[32%]"></th>
            <th class="w-[9%] text-center">
              <Select v-model="selectedReportStatus">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="999">すべて</SelectItem>
                  <SelectItem
                    :value="`${status.id}`"
                    v-for="status of STATUS_CREATE_REPORT_PLAN"
                  >
                    {{ status.value }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </th>
            <th class="w-[16%]"></th>
            <th class="w-[9%] text-center">
              <Select v-model="selectedPlanStatus">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="999">すべて</SelectItem>
                  <SelectItem
                    :value="`${status.id}`"
                    v-for="status of STATUS_CREATE_REPORT_PLAN"
                  >
                    {{ status.value }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </th>
            <th colspan="3"></th>
          </tr>
        </thead>
      </table>
      <div
        class="table-container overflow-auto border-b"
        :class="{ 'border-l': companyUsers.length }"
      >
        <table class="w-full table-fixed">
          <thead class="sticky top-0 z-10">
            <tr class="bg-[#afeeee]">
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
                  :class="getButtonColorReport(row.reportStatus)"
                  @click="updateReportStatus(row)"
                  >実行</span
                >
              </td>
              <td>
                <span
                  :class="getButtonColorPlan(row)"
                  @click="updatePlanStatus(row)"
                  >実行
                </span>
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
          :disabled="isDisableExport || !isDisableAllButton"
          class="flex justify-end mt-[30px]"
          @click="openDialogCreateReport"
        >
          実行開始
        </Button>
      </div>
    </div>
    <UsersModalConfirmCreateReport
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
  z-index: 1;
}

.table-fixed {
  min-width: 1160px;
}
</style>
