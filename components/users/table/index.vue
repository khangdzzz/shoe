<script lang="ts" setup>
import { Search } from 'lucide-vue-next';

export interface Report {
  userNameKanji: string;
  birthday: string;
  reportStatus: number;
  reportDate: string;
  planStatus: number;
  planDate: string;
}

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

const getStatusColor = (amount: number) => {
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

const data = shallowRef<Report[]>([
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 3,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 2,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 1,
    reportDate: '平成2年01月02日',
    planStatus: 1,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 3,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 2,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 1,
    reportDate: '平成2年01月02日',
    planStatus: 1,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 3,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 2,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 1,
    reportDate: '平成2年01月02日',
    planStatus: 1,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 3,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 2,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 1,
    reportDate: '平成2年01月02日',
    planStatus: 1,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 3,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 2,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 1,
    reportDate: '平成2年01月02日',
    planStatus: 1,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 3,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 2,
    reportDate: '平成2年01月02日',
    planStatus: 0,
    planDate: '平成2年01月02日'
  },
  {
    userNameKanji: 'm5gr84i9',
    birthday: '平成2年01月02日',
    reportStatus: 1,
    reportDate: '平成2年01月02日',
    planStatus: 1,
    planDate: '平成2年01月02日'
  }
]);
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
          />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="w-4 h-4 text-muted-foreground" />
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="terms" />
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
          <Switch />
          <span>一括</span>
        </div>
        <div class="flex items-center space-x-2">
          <Switch />
          <span>一括</span>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="table-container overflow-auto border-b">
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
          <tbody class="border-l">
            <tr
              v-for="(row, index) in data"
              class="bg-white dark:bg-gray-800 text-center h-10 hover:cursor-pointer hover:bg-[#afe7ee47]"
              :class="[index < data.length - 1 ? 'border-b' : '']"
            >
              <td>
                <span>{{ row.userNameKanji }}</span>
              </td>
              <td>
                <span>{{ row.birthday }}</span>
              </td>
              <td>
                <span
                  class="px-[18px] py-[8px] rounded-sm"
                  :class="getStatusColor(row.reportStatus)"
                  >{{ STATUS[row.reportStatus] }}</span
                >
              </td>
              <td>
                <span>{{ row.reportDate }}</span>
              </td>
              <td>
                <span
                  class="px-[18px] py-[8px] rounded-sm"
                  :class="getStatusColor(row.planStatus)"
                  >{{ STATUS[row.planStatus] }}</span
                >
              </td>
              <td>
                <span>{{ row.planDate }}</span>
              </td>
              <td>
                <span :class="getStatusColor(row.planStatus)">実行</span>
              </td>
              <td>
                <span :class="getStatusColor(row.planStatus)">実行</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end mr-[35px]">
        <Button class="flex justify-end mt-[30px]"> 実行開始 </Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table-container {
  max-height: calc(100vh - 330px);
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
  min-width: 1180px;
}
</style>
