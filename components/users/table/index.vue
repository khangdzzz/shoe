<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
import type { CompanyUserStatus } from '~/models/company';

const props = defineProps({
  companyUsers: {
    type: Array as () => CompanyUserStatus[],
    default: () => []
  }
});

const companyStore = useCompanyStore();

const userNameKanjiSearch = ref('');
const isCalenderJapanese = ref(false);
const reportSwitchState = ref(false);
const planSwitchState = ref(false);

const headers = [
  {
    label: '利用者',
    width: '16%',
    isSort: true
  },
  {
    label: '生年月日',
    width: '16%',
    isSort: false
  },
  {
    label: '報告書',
    width: '9%',
    isSort: false
  },
  {
    label: '実行日時',
    width: '16%',
    isSort: false
  },
  {
    label: '計画書',
    width: '9%',
    isSort: false
  },
  {
    label: '実行日時',
    width: '16%',
    isSort: false
  },
  {
    label: '報告書',
    width: '9%',
    isSort: false
  },
  {
    label: '計画書',
    width: '9%',
    isSort: false
  }
];

const STATUS: { [key: number]: string } = {
  0: '未実行',
  1: '実行予定',
  2: '実行済み',
  3: '実行エラー'
};

onMounted(async () => {
  companyStore.isLoadCompanyUsers = true;
});

const isLoading = computed(() => {
  return companyStore.isLoadCompanyUsers;
});

const characterSelected = computed(() => {
  return companyStore.charactersSelected;
});

const companyUsers = computed(() => {
  let filteredUsers = props.companyUsers;

  if (characterSelected.value.length) {
    filteredUsers = filteredUsers.filter((user) =>
      characterSelected.value.some((char) => user.companyUserNameKanji.includes(char))
    );
  }

  if (userNameKanjiSearch.value) {
    filteredUsers = filteredUsers.filter((user) => user.companyUserNameKanji.includes(userNameKanjiSearch.value));
  }

  if (reportSwitchState.value) {
    filteredUsers = filteredUsers.map((user) => {
      return {
        ...user,
        reportStatus: 1
      };
    });
  }

  if (planSwitchState.value) {
    filteredUsers = filteredUsers.map((user) => {
      return {
        ...user,
        planStatus: 1
      };
    });
  }

  return filteredUsers;
});

const getStatus = (amount: number | null) => {
  if (!amount) return STATUS[0];

  if (amount === 1) return STATUS[1];
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

  let classes = 'flex justify-center items-center py-2 ml-2 rounded-sm ';

  switch (amount) {
    case 0:
      classes += 'bg-[#ffffff] border border-[#ccc] hover:bg-[#ece6e6]';
      break;
    case 1:
      classes += 'bg-[#afeeed] hover:bg-[#77f6f4]';
      break;
    case 2:
    case 3:
      classes += 'bg-[#acacac]';
      break;
  }

  return classes;
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
                    'flex items-center justify-center px-4 text-black border-white',
                    index < headers.length - 1 ? 'border-r-2' : ''
                  ]"
                  >{{ header.label }}</span
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="companyUsers.length === 0 && !isLoading">
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
                <span>{{ row.companyUserNameKanji }}</span>
              </td>
              <td>
                <span v-if="isCalenderJapanese">{{ formatToJapaneseEra(row.companyUserBirthday) }}</span>
                <span v-else>{{ formatDate(row.companyUserBirthday, 'YYYY/MM/DD') }}</span>
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
                <span :class="getButtonColor(row.reportStatus)">実行</span>
              </td>
              <td>
                <span :class="getButtonColor(row.planStatus)">実行</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ShareLoading v-if="isLoading" />

      <div class="flex justify-end mr-[35px]">
        <Button class="flex justify-end mt-[30px]"> 実行開始 </Button>
      </div>
    </div>
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
