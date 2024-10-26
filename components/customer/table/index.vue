<script lang="ts" setup>
export interface CompanyInformation {
  companyName: string;
  companyAddress: string;
  phoneNumber: string;
  fullName: string;
  fullNameGiven: string;
  email: string;
  kaigoSoftware: string;
  activeStatus: number;
  createdAt: string;
}

const headers = [
  {
    label: '法人名',
    width: '10%',
    isSort: true
  },
  {
    label: '所在地',
    width: '15%',
    isSort: false
  },
  {
    label: '電話番号',
    width: '9%',
    isSort: false
  },
  {
    label: '代表者',
    width: '9%',
    isSort: false
  },
  {
    label: '担当者',
    width: '9%',
    isSort: false
  },
  {
    label: 'メールアドレス',
    width: '15%',
    isSort: false
  },
  {
    label: '介護ソフト',
    width: '10%',
    isSort: false
  },
  {
    label: 'ステータス',
    width: '9%',
    isSort: false
  },
  {
    label: '開始日',
    width: '9%',
    isSort: false
  }
];

const data = shallowRef<CompanyInformation[]>([
  {
    companyName: 'Blueoath',
    companyAddress: 'Ha Noi City',
    phoneNumber: '098783947484',
    fullName: '平成 平成',
    fullNameGiven: '平成 平成',
    email: 'dkmndc@gmail.com',
    kaigoSoftware: '平成 平成',
    activeStatus: 1,
    createdAt: '2022-01-01'
  },
  {
    companyName: 'Blueoath',
    companyAddress: 'Ha Noi City',
    phoneNumber: '098783947484',
    fullName: '平成 平成',
    fullNameGiven: '平成 平成',
    email: 'dkmndc@gmail.com',
    kaigoSoftware: '平成 平成',
    activeStatus: 1,
    createdAt: '2022-01-01'
  }
]);

const selectedRows = ref<Set<number>>(new Set());

const isSelectedAll = computed(() => data.value.length > 0 && selectedRows.value.size === data.value.length);

const toggleSelectAll = () => {
  if (isSelectedAll.value) {
    selectedRows.value.clear();
  } else {
    selectedRows.value = new Set(data.value.map((_, index) => index));
  }
};

const toggleSelectRow = (index: number) => {
  if (selectedRows.value.has(index)) {
    selectedRows.value.delete(index);
  } else {
    selectedRows.value.add(index);
  }
  console.log(selectedRows.value);
};
</script>

<template>
  <div class="user-container flex flex-col gap-2 overflow-hidden">
    <div class="actions flex justify-between items-center">
      <div class="flex">
        <span class="px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer">編集</span>
        <span class="px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer">削除</span>
      </div>

      <SharePagination class="mr-10" />
    </div>
    <div class="w-full flex flex-col">
      <div class="table-container overflow-auto border-b">
        <table class="w-full table-fixed">
          <thead class="bg-[#afeeee] sticky top-0 z-10">
            <tr>
              <th>
                <span class="flex items-center justify-center px-4 py-[1px] text-black border-white border-r-2">
                  <Checkbox
                    id="select-all"
                    class="bg-white flex items-center justify-center mx-4 text-black border border-gray-300"
                    :checked="isSelectedAll"
                    @update:checked="toggleSelectAll"
                  />
                </span>
              </th>
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
              :key="index"
              class="bg-white dark:bg-gray-800 text-center h-10 hover:cursor-pointer hover:bg-[#afe7ee47]"
              :class="[index < data.length - 1 ? 'border-b' : '']"
            >
              <td class="border-r border-[#52525200]">
                <Checkbox
                  :id="'select-row-' + index"
                  class="m-auto bg-white flex items-center justify-center text-black border border-gray-300"
                  :checked="selectedRows.has(index)"
                  @update:checked="toggleSelectRow(index)"
                />
              </td>
              <td>
                <span>{{ row.companyName }}</span>
              </td>
              <td>
                <span>{{ row.companyAddress }}</span>
              </td>
              <td>
                <span>{{ row.phoneNumber }}</span>
              </td>
              <td>
                <span>{{ row.fullName }}</span>
              </td>
              <td>
                <span>{{ row.fullNameGiven }}</span>
              </td>
              <td>
                <span>{{ row.email }}</span>
              </td>
              <td>
                <span>{{ row.kaigoSoftware }}</span>
              </td>
              <td>
                <span>{{ row.activeStatus }}</span>
              </td>
              <td>
                <span>{{ row.createdAt }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-container {
  max-height: calc(100vh - 270px);
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
