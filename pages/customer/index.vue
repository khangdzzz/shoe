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

const companyAdminStore = useCompanyAdminStore();
const system = useSystemStore();
const customerPageStore = useCustomerPageStore();
const { toast } = useToast();

const getCompanies = async () => {
  const params = new URLSearchParams();

  params.append('page', page.value.toString());

  params.append('pageSize', pageSizes.value.toString());

  if (sort.value) params.append('sort', sort.value);

  if (status.value.length) {
    status.value.forEach((value: any) => {
      params.append('status', value);
    });
  }

  if (keyword.value) params.append('keyword', keyword.value);

  const storageCondition = {
    page: page.value,
    pageSize: pageSizes.value,
    sort: sort.value,
    status: status.value,
    keyword: keyword.value
  };

  customerPageStore.setCustomerStorageCondition(storageCondition);

  await companyAdminStore.searchCompanies(params.toString());
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
  page.value = 1;
  await getCompanies();
};

const onSearchCompany = async (value: string) => {
  keyword.value = value;
  page.value = 1;
  await getCompanies();
};

const exportCustomer = async () => {
  exportData(0);
};

const exportStatusCompany = async () => {
  exportData(1);
};

const exportData = async (exportType: number) => {
  const body = {
    exportType: exportType,
    targetYearMonth: targetYearMonth.value
  };

  const downloadUrl = await companyAdminStore.exportCompanyCustomer(body);

  if (!downloadUrl) {
    triggerToast('データのエクスポートに失敗', 'destructive');
    return;
  }

  await downloadFileFromS3(downloadUrl);

  companyAdminStore.resetLoadingExport();
};

const downloadFileFromS3 = async (url: string) => {
  try {
    const fileName = getFileNameFromUrl(url);
    const response = await fetch(url);

    if (!response.ok || !fileName) {
      triggerToast('データのエクスポートに失敗', 'destructive');
      return;
    }

    const blob = await response.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } catch (error) {
    triggerToast('データのエクスポートに失敗', 'destructive');
  }
};

const getFileNameFromUrl = (url: string) => {
  return url.split('/exports_').pop();
};

const triggerToast = (message: string, variant: 'default' | 'destructive' | null | undefined) => {
  toast({
    description: message,
    variant: variant,
    duration: 1000
  });
};

onMounted(async () => {
  const condition = customerPageStore.getCustomerStorageCondition();

  if (condition) {
    page.value = condition.page;
    pageSizes.value = condition.pageSize;
    sort.value = condition.sort;
    status.value = condition.status;
    keyword.value = condition.keyword;
  }

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
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
