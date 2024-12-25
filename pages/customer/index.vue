<script lang="ts" setup>
import { useToast } from '~/components/ui/toast/use-toast';

definePageMeta({
  middleware: ['auth', 'auth-redirect']
});

const page = ref<number>(1);
const pageSizes = ref<number>(30);
const sort = ref<string>('');
const targetYearMonth = ref<string>('');
const status = ref<number[]>([]);
const keyword = ref<string>('');
const exceptionListId = ref<number[]>([]);
const checkedListId = ref<number[]>([]);
const isSelectedAll = ref<boolean>(false);

const companyAdminStore = useCompanyAdminStore();
const system = useSystemStore();
const { toast } = useToast();

const getCompanies = async () => {
  let condition = `page=${page.value}&pageSize=${pageSizes.value}`;
  if (sort.value) condition += `&sort=${sort.value}`;
  if (status.value.length) {
    status.value.forEach((value) => {
      condition += `&status=${value}`;
    });
  }

  if (keyword.value) condition += `&keyword=${keyword.value}`;

  companyAdminStore.searchCompanies(condition);
};

const onChangePagination = async ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) => {
  page.value = pageIndex;
  pageSizes.value = pageSize;
  await getCompanies();
};

const onSort = async (sortValue: string) => {
  sort.value = sortValue;
  await getCompanies();
};

const onChangeDate = async (date: string) => {
  const [year, month] = date.split('/');

  targetYearMonth.value = `${year}-${month}-01`;
};

const onChangeStatus = async (value: number[]) => {
  status.value = value;
  await getCompanies();
};

const onSearchCompany = async (value: string) => {
  keyword.value = value;
  await getCompanies();
};

const onSelectRows = ({
  exceptionIds,
  checkedIds,
  selectedAll
}: {
  exceptionIds: number[];
  checkedIds: number[];
  selectedAll: boolean;
}) => {
  exceptionListId.value = exceptionIds;
  checkedListId.value = checkedIds;
  isSelectedAll.value = selectedAll;
};

const exportCustomer = async () => {
  const messageExportSuccess = '顧客情報ダウンロード用のリンクをメールで送信しました。';
  exportData(0, messageExportSuccess);
};

const exportStatusCompany = async () => {
  const messageExportSuccess = '利用状況ダウンロード用のリンクをメールで送信しました。';
  exportData(1, messageExportSuccess);
};

const exportData = async (exportType: number, messageExportSuccess: string) => {
  if (!isSelectedAll.value && checkedListId.value.length === 0) {
    triggerToast('顧客を選択してください', 'destructive');
    return;
  }

  const body = {
    exportType: exportType,
    checkedListId: checkedListId.value,
    exceptionListId: exceptionListId.value,
    isSelectedAll: isSelectedAll.value,
    targetYearMonth: targetYearMonth.value,
    status: status.value,
    keyword: keyword.value
  };

  await companyAdminStore.exportCompanyCustomer(body);

  if (!system.notify?.message) {
    triggerToast(messageExportSuccess, 'default');
  }
};

const triggerToast = (message: string, variant: 'default' | 'destructive' | null | undefined) => {
  toast({
    description: message,
    variant: variant,
    duration: 1000
  });
};

onMounted(async () => {
  await getCompanies();
});
</script>

<template>
  <div class="user-list px-4">
    <div class="header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">顧客管理</span>
    </div>
    <CustomerSearch
      @update:change-date="onChangeDate"
      @update:change-status="onChangeStatus"
      @search-company="onSearchCompany"
      @export-customer="exportCustomer"
      @export-status-company="exportStatusCompany"
    />
    <div class="body-content flex py-4 w-full gap-2">
      <CustomerTable
        class="w-full"
        @update:pagination="onChangePagination"
        @update:sort="onSort"
        @get-companies="getCompanies"
        @select-row="onSelectRows"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
