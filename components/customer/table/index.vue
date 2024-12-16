<script lang="ts" setup>
import { ArrowDownUp, ArrowUpDown } from 'lucide-vue-next';
import type { Header } from '~/models/common';
import { useToast } from '~/components/ui/toast/use-toast';

enum CheckType {
  All,
  None,
  Ticked
}

const companyAdminStore = useCompanyAdminStore();
const system = useSystemStore();
const { redirectPage } = useRedirectPage();
const { toast } = useToast();

const emit = defineEmits(['update:pagination', 'update:sort', 'getCompanies', 'selectRow']);

const STATUS = {
  1: '利用中',
  2: '停止中',
  3: '退会済'
};

const headers = [
  {
    label: '法人名',
    width: '10%',
    isSort: true,
    key: 'companyName'
  },
  {
    label: '所在地',
    width: '15%',
    isSort: true,
    key: 'companyAddress'
  },
  {
    label: '電話番号',
    width: '9%',
    isSort: true,
    key: 'phoneNumber'
  },
  {
    label: '代表者',
    width: '9%',
    isSort: true,
    key: 'frontPicFamilyName'
  },
  {
    label: '担当者',
    width: '9%',
    isSort: true,
    key: 'picFamilyName'
  },
  {
    label: 'メールアドレス',
    width: '15%',
    isSort: true,
    key: 'email'
  },
  {
    label: '介護ソフト',
    width: '10%',
    isSort: true,
    key: 'kaigoSoftware'
  },
  {
    label: 'ステータス',
    width: '9%',
    isSort: true,
    key: 'status'
  },
  {
    label: '開始日',
    width: '9%',
    isSort: true,
    key: 'createdAt'
  }
];

const isSelectedAll = ref(CheckType.None);
const sort = ref('');
const isOpenDialogDelete = ref(false);
const totalRecord = computed(() => companyAdminStore.companyUsers?.totalRecord ?? 0);
const isLoading = computed(() => companyAdminStore.isLoadCompanyCustomers);
const notify = computed(() => system.notify);

const selectedRows = ref<Set<number>>(new Set());

const companyUsers = computed(() => {
  selectedRows.value = new Set();
  return companyAdminStore.companyUsers?.results ?? [];
});

const toggleSelectAll = (value: boolean) => {
  if (value) {
    isSelectedAll.value = CheckType.All;
    selectedRows.value = new Set(companyUsers.value.map((user) => user.id));
  } else {
    isSelectedAll.value = CheckType.None;
    selectedRows.value.clear();
  }
};

const toggleSelectRow = (id: number) => {
  if (selectedRows.value.has(id)) {
    selectedRows.value.delete(id);
  } else {
    selectedRows.value.add(id);
  }

  const totalUsers = companyUsers.value.length;
  const selectedCount = selectedRows.value.size;

  if (selectedCount === 0) {
    isSelectedAll.value = CheckType.None;
  } else if (selectedCount === totalUsers) {
    isSelectedAll.value = CheckType.All;
  } else if (isSelectedAll.value === CheckType.All && selectedCount < totalUsers) {
    isSelectedAll.value = CheckType.Ticked;
  }
};

const ticked = () => {
  toggleSelectAll(false);
};

watch(
  selectedRows,
  () => {
    const exceptionIds: number[] = [];
    const checkedIds: number[] = [];
    const selectedAll = getStatusSelected();

    if (selectedAll) {
      companyUsers.value.forEach((user) => {
        if (!selectedRows.value.has(user.id)) {
          exceptionIds.push(user.id);
        }
      });
    } else {
      checkedIds.push(...selectedRows.value);
    }

    emit('selectRow', {
      exceptionIds,
      checkedIds,
      selectedAll
    });
  },
  { deep: true }
);

const getStatus = (status: number) => {
  if (!status) return (status = 0);
  return STATUS[status as keyof typeof STATUS];
};

const getStatusSelected = () => {
  return isSelectedAll.value === CheckType.All || isSelectedAll.value === CheckType.Ticked ? true : false;
};

const changePagination = ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) => {
  emit('update:pagination', { pageIndex, pageSize });
};

const updateSort = (header: Header) => {
  if (!header.isSort) return;

  const [currentKey, currentDirection] = sort.value.split(':');
  const newDirection = currentKey === header.key ? (currentDirection === SORT.ASC ? SORT.DESC : '') : SORT.ASC;

  sort.value = newDirection ? `${header.key}:${newDirection}` : '';

  emit('update:sort', sort.value);
};

const openDialogDelete = () => {
  if (selectedRows.value.size == 0) {
    const message = '削除する会社を選択してください';
    triggerToast('destructive', message);
    return;
  }

  isOpenDialogDelete.value = true;
};

const onHandleDelete = async () => {
  companyAdminStore.isLoadCompanyCustomers = true;

  isOpenDialogDelete.value = false;

  const ids = Array.from(selectedRows.value);

  await companyAdminStore.bulkDelete(ids);

  if (notify.value?.message) {
    companyAdminStore.isLoadCompanyCustomers = false;

    return;
  }

  const message = '会社を削除しました';

  triggerToast('default', message);

  emit('getCompanies');
};

const editCustomer = () => {
  if (selectedRows.value.size == 0) {
    const message = '編集する会社を選択してください';
    triggerToast('destructive', message);
    return;
  }

  if (selectedRows.value.size > 1) {
    const message = '編集する会社を1つだけ選択してください';
    triggerToast('destructive', message);
    return;
  }

  redirectPage(`/customer/detail/${selectedRows.value.values().next().value}`);
};

const doubleClickEditCustomer = (id: number) => {
  redirectPage(`/customer/detail/${id}`);
};

const triggerToast = (variant: 'default' | 'destructive' | null | undefined, message: string) => {
  toast({
    description: message,
    variant: variant,
    duration: 1000
  });
};

const getBackgroundColor = (status: number) => {
  let className = 'bg-white dark:bg-gray-800 h-10 hover:cursor-pointer ';
  if (!status || status == 1) return (className += 'hover:bg-[#afe7ee47]');
  if (status == 2) return (className += '!bg-[#feffce]');
  if (status == 3) return (className += '!bg-[#515151] text-white');
};
</script>

<template>
  <div class="user-container flex flex-col gap-2 overflow-hidden">
    <div class="actions flex justify-between items-center">
      <div class="flex">
        <span
          class="px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer"
          @click="editCustomer"
          >編集</span
        >
        <span
          class="px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer"
          @click="openDialogDelete"
          >削除</span
        >
      </div>

      <SharePagination
        class="mr-10"
        :length="totalRecord"
        @update:pagination="changePagination"
      />
    </div>
    <div class="w-full flex flex-col relative border-l border-r">
      <div class="table-container overflow-auto border-b">
        <table class="w-full table-fixed">
          <thead class="bg-[#afeeee] sticky top-0 z-10">
            <tr>
              <th>
                <span class="flex items-center justify-center px-4 py-[1px] text-black border-white border-r-2">
                  <Checkbox
                    id="select-all"
                    class="bg-white flex items-center justify-center mx-4 text-black border border-gray-300"
                    :checked="isSelectedAll === 0"
                    v-if="isSelectedAll === 0 || isSelectedAll === 1"
                    @update:checked="toggleSelectAll"
                  />
                  <ShareIconSelectAll
                    v-if="isSelectedAll === 2"
                    @click="ticked"
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
                    'flex items-center justify-center px-4 text-black border-white cursor-pointer',
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
          <tbody class="">
            <tr
              v-for="(row, index) in companyUsers"
              :key="index"
              :class="[index < companyUsers.length - 1 ? 'border-b' : '', getBackgroundColor(row.status)]"
              v-if="companyUsers.length > 0"
              @dblclick="doubleClickEditCustomer(row.id)"
            >
              <td class="pr-[1px]">
                <Checkbox
                  :id="'select-row-' + row.id"
                  class="m-auto bg-white flex items-center justify-center text-black border border-gray-300"
                  :checked="selectedRows.has(row.id)"
                  @update:checked="toggleSelectRow(row.id)"
                />
              </td>
              <td class="row-sticky px-[5px]">
                <span>{{ row.companyName }}</span>
              </td>
              <td class="row-sticky px-[5px]">
                <span>{{ row.companyAddress }}</span>
              </td>
              <td class="px-[5px]">
                <span>{{ row.phoneNumber }}</span>
              </td>
              <td class="px-[5px]">
                <span>{{ row.frontPicFamilyName ?? '' }} {{ row.frontPicGivenName ?? '' }}</span>
              </td>
              <td class="px-[5px]">
                <span>{{ row.picFamilyName ?? '' }} {{ row.picGivenName ?? '' }}</span>
              </td>
              <td class="px-[5px]">
                <span>{{ row.email ?? '' }}</span>
              </td>
              <td class="px-[5px] text-center">
                <span>{{ row.kaigoSoftware }}</span>
              </td>
              <td class="px-[5px] text-center">
                <span>{{ getStatus(row.status) }}</span>
              </td>
              <td class="px-[5px] text-center">
                <span>{{ formatDate(row.createdAt, 'YYYY-MM-DD') }} </span>
              </td>
            </tr>
            <tr v-if="companyUsers.length == 0 && isLoading == false">
              <td
                colspan="9"
                class="text-center py-4 text-[#5566da]"
              >
                {{ MESSAGES.EMPTY }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ShareLoading v-if="isLoading" />
    </div>
    <Toaster class="top-[5px]" />
    <CustomerModalDelete
      :is-open="isOpenDialogDelete"
      @close="isOpenDialogDelete = false"
      @update="onHandleDelete"
    />
  </div>
</template>

<style lang="scss" scoped>
.table-container {
  height: calc(100vh - 270px);
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

.row-sticky {
  width: 100% !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
</style>
