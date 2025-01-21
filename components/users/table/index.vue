<script lang="ts" setup>
import { Search, ArrowDownUp, ArrowUpDown, ShieldAlert } from 'lucide-vue-next';
import { checkTargetYearMonthMatchCurrentYearMonth, hasRegisterPaymentMethod } from '~/helps';
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
const userListPage = userListPageStore();
const system = useSystemStore();

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
  { label: '生年月日', width: '12%', key: 'birthday', isSort: true },
  { label: '報告書', width: '12%', key: 'reportStatus', isSort: false },
  { label: '実行日時', width: '15%', key: 'reportDate', isSort: false },
  { label: '計画書', width: '12%', key: 'planStatus', isSort: false },
  { label: '実行日時', width: '15%', key: 'planDate', isSort: false },
  { label: '報告書', width: '9%', key: 'actionReport', isSort: false },
  { label: '計画書', width: '9%', key: 'actionPlan', isSort: false }
];

const STATUS: { [key: number]: string } = {
  0: '未実行',
  1: '実行予定',
  2: '実行済み',
  3: '実行エラー'
};

const htmlMessageCrawler = ref(HTML_MESSAGE_CRAWL);

const htmlMessageCreateReport = ref(HTML_MESSAGE_CREATE_REPORT);

const isErrorCreateReport = ref(false);

const isLoading = computed(() => companyStore.isLoadCompanyUsers);

const characterSelected = computed(() => companyStore.charactersSelected);

const isHaveDataCompanyUsers = computed(() => companyStore.isHaveDataCompanyUsers);

const users = computed(() => companyStore.companyUsers);

const notify = computed(() => system.notify);

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

const filterStatus = ({ status, type }: { status: string; type: string }) => {
  if (type === 'report') selectedReportStatus.value = status;
  if (type === 'plan') selectedPlanStatus.value = status;
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
    case 3:
      classes += isDisableAllButton.value
        ? 'border border-gray-300 bg-[#ccc] opacity-50 cursor-not-allowed'
        : 'border border-gray-300 hover:bg-[#faeded]';
      break;
    case 1:
      classes += 'bg-[#afeeed] cursor-not-allowed';
      break;
    case 2:
      classes += 'bg-[#ccc] cursor-not-allowed';
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
    case 3:
      classes +=
        [VALUE_STATUS_BULK_EXPORT, 1, 2].includes(reportStatus) && !isDisableAllButton.value
          ? 'border border-gray-300 hover:bg-[#faeded]'
          : 'border border-gray-300 bg-[#ccc] opacity-50 cursor-not-allowed';
      break;
    case 1:
      classes += 'bg-[#afeeed] cursor-not-allowed';
      break;
    case 2:
      classes += 'bg-[#ccc] cursor-not-allowed';
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
  if (isDisableAllButton.value) return;

  const { id, reportStatus } = companyUser;

  if (![0, 3, VALUE_STATUS_BULK_EXPORT].includes(reportStatus)) return;

  const userReportStatus = users.value.find((user) => user.id === id)?.reportStatus ?? 0;

  const newStatus = reportStatus === VALUE_STATUS_BULK_EXPORT ? userReportStatus : VALUE_STATUS_BULK_EXPORT;

  companyUsers.value = companyUsers.value.map(updateUserReportStatus(companyUser.id, newStatus));

  if (newStatus != VALUE_STATUS_BULK_EXPORT) updatePlanStatus(companyUser, true);
};

const updatePlanStatus = (companyUser: CompanyUserStatus, forceCancel?: boolean) => {
  if (isDisableAllButton.value) return;

  const { id, planStatus, reportStatus } = companyUser;

  if (![0, 3, VALUE_STATUS_BULK_EXPORT].includes(planStatus) || [0, 3].includes(reportStatus)) return;

  const userPlanStatus = users.value.find((user) => user.id === id)?.planStatus ?? 0;

  if (forceCancel) {
    companyUsers.value = companyUsers.value.map(updateUserPlanStatus(companyUser.id, userPlanStatus));
    return;
  }
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
  system.clearNotify();

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
    htmlMessageCreateReport.value = `
      <span class="text-red-500">${notify.value.message}</span>
    `;
    isErrorCreateReport.value = true;
    userListPage.isOpenNotifyExport = true;
    companyStore.isLoadCompanyUsers = false;
    return;
  }

  await companyStore.getCompanyUseStatus({
    officeId: officeId?.value,
    targetYearMonth: targetYearMonth?.value
  });

  companyStore.isLoadCompanyUsers = false;

  htmlMessageCreateReport.value = HTML_MESSAGE_CREATE_REPORT;
  userListPage.isOpenNotifyExport = true;
};

const selectReportElement = ref<HTMLElement | null>();
const columnReportElement = ref<HTMLElement | null>();

const selectPlanElement = ref<HTMLElement | null>();
const columnPlanElement = ref<HTMLElement | null>();

const toggleReportElement = ref<HTMLElement | null>();
const columnToggleReportElement = ref<HTMLElement | null>();

const togglePlanElement = ref<HTMLElement | null>();
const columnTogglePlanElement = ref<HTMLElement | null>();

const tableElement = ref<HTMLElement | null>();
const rectTableElement = ref<DOMRect | null>();
const lastScrollLeft = ref(0);

onMounted(() => {
  selectReportElement.value = document.getElementById('select-report-element');
  columnReportElement.value = document.getElementById('column-3');

  selectPlanElement.value = document.getElementById('select-plan-element');
  columnPlanElement.value = document.getElementById('column-5');

  toggleReportElement.value = document.getElementById('toggle-report-element');
  columnToggleReportElement.value = document.getElementById('column-7');

  togglePlanElement.value = document.getElementById('toggle-plan-element');
  columnTogglePlanElement.value = document.getElementById('column-8');

  tableElement.value = document.getElementById('table-user');
  rectTableElement.value = tableElement.value?.getBoundingClientRect();

  updateHeaderPosition();

  window.addEventListener('resize', updateHeaderPosition);
});

const updateHeaderPosition = () => {
  const rectTable = rectTableElement.value;
  const elements = [
    { element: selectReportElement.value, column: columnReportElement.value, position: 35 },
    { element: selectPlanElement.value, column: columnPlanElement.value, position: 35 },
    { element: toggleReportElement.value, column: columnToggleReportElement.value, position: 30 },
    { element: togglePlanElement.value, column: columnTogglePlanElement.value, position: 30 }
  ];

  const updatePositions = () => {
    elements.forEach(({ element, column, position }) => {
      updateElementPosition(element, column, position, rectTable);
    });
  };

  updatePositions();

  setTimeout(updatePositions, 50);
};

const updateElementPosition = (
  targetElement: HTMLElement | null | undefined,
  referenceElement: HTMLElement | null | undefined,
  offsetTop: number,
  rectTable: DOMRect | undefined | null
) => {
  if (!targetElement || !referenceElement) return;

  const rect = referenceElement.getBoundingClientRect();

  targetElement.style.left = `${rect.left + window.scrollX}px`;
  targetElement.style.top = `${rect.top + window.scrollY - offsetTop}px`;
  targetElement.style.width = `${rect.width - 10}px`;

  if ((rectTable && rectTable.left > rect.left) || window.innerWidth - rect.left - rect.width < 5) {
    targetElement.style.zIndex = '-1';
    targetElement.style.display = 'none';
  } else {
    targetElement.style.zIndex = '5';
    targetElement.style.display = 'flex';
  }
};

const handleTableScroll = (event: any) => {
  const scrollLeft = event.target.scrollLeft;
  if (scrollLeft !== lastScrollLeft.value) {
    updateHeaderPosition();
  }
};

onUpdated(() => {
  updateHeaderPosition();
});

const isLoadPermission = computed(() => system.isLoadPermission);

const isDisableAllButton = computed(() => {
  const _forceUpdate = isLoadPermission.value;

  const isCurrentYearMonth = checkTargetYearMonthMatchCurrentYearMonth(targetYearMonth?.value);
  return isCurrentYearMonth && hasRegisterPaymentMethod() ? false : true;
});

const resetFilterTable = (isClearSearchName?: boolean) => {
  if (isClearSearchName) {
    userNameKanjiSearch.value = '';
    selectedReportStatus.value = '999';
    selectedPlanStatus.value = '999';
    sort.value = '';
  }
  isCalenderJapanese.value = false;
};

defineExpose({
  resetFilterTable
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
    </div>

    <UsersSearchStatus
      id="select-report-element"
      :cssStyle="'absolute duration-10 ease-linear whitespace-nowrap top-0'"
      :type="'report'"
      :selected-status="selectedReportStatus"
      @filter-status="filterStatus"
    />

    <UsersSearchStatus
      id="select-plan-element"
      :cssStyle="'absolute duration-10 ease-linear whitespace-nowrap top-0'"
      :type="'plan'"
      :selected-status="selectedPlanStatus"
      @filter-status="filterStatus"
    />

    <div
      id="toggle-report-element"
      class="flex! items-center justify-center space-x-2 absolute duration-10 ease-linear whitespace-nowrap top-0"
    >
      <Switch
        :disabled="isDisableAllButton"
        v-model:checked="reportSwitchState"
        @click="() => onChangeReportSwitch()"
      />
      <span>一括</span>
    </div>

    <div
      id="toggle-plan-element"
      class="flex! items-center justify-center space-x-2 absolute duration-10 ease-linear whitespace-nowrap top-0"
    >
      <Switch
        :disabled="isDisableAllButton"
        v-model:checked="planSwitchState"
        @click="() => onChangePlanSwitch()"
      />
      <span>一括</span>
    </div>

    <div class="w-full flex relative flex-col mt-[35px]">
      <div
        class="table-container overflow-auto border-b"
        :class="{ 'border-l': companyUsers.length }"
        @scroll="handleTableScroll"
      >
        <table
          class="w-full table-fixed"
          id="table-user"
        >
          <thead class="sticky top-0 z-10">
            <tr class="bg-[#afeeee] mt-[20px]">
              <th
                class="py-3"
                :id="`column-${index + 1}`"
                v-for="(header, index) in headers"
                :key="index"
                :style="{ width: header.width }"
              >
                <span
                  :class="[
                    'flex items-center justify-center px-4 text-black border-white hover:cursor-pointer ',
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
                  >{{ getStatus(row.reportStatus) }}

                  <TooltipProvider v-if="row.reportErrorMessage">
                    <Tooltip>
                      <TooltipTrigger>
                        <ShieldAlert
                          width="16"
                          height="16"
                          class="ml-[5px] hover:text-[#5566da] text-[red]"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p v-html="row.reportErrorMessage"></p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
              </td>
              <td>
                <span>{{ formatDate(row.reportDate, 'YYYY/MM/DD HH:mm') }}</span>
              </td>
              <td>
                <span
                  class="px-[18px] py-[8px] rounded-sm"
                  :class="getStatusColor(row.planStatus)"
                  >{{ getStatus(row.planStatus) }}
                  <TooltipProvider v-if="row.planErrorMessage">
                    <Tooltip>
                      <TooltipTrigger>
                        <ShieldAlert
                          width="16"
                          height="16"
                          class="ml-[5px] hover:text-[#5566da] text-[red]"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p
                          class="text-[12px]"
                          v-html="row.planErrorMessage"
                        ></p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
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

      <UsersModalNotifyHandleExport
        :is-open-notify="userListPage.isOpenNotifyCrawl"
        :html-message="htmlMessageCrawler"
        @close="userListPage.isOpenNotifyCrawl = false"
      />

      <UsersModalNotifyHandleExport
        :is-open-notify="userListPage.isOpenNotifyExport"
        :html-message="htmlMessageCreateReport"
        :is-error="isErrorCreateReport"
        @close="
          userListPage.isOpenNotifyExport = false;
          isErrorCreateReport = false;
        "
      />

      <div class="flex justify-end mr-[35px]">
        <Button
          :disabled="isDisableExport || isDisableAllButton"
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
