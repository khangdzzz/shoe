<script lang="ts" setup>
definePageMeta({
  middleware: ['auth', 'auth-redirect']
});

const page = ref<number>(1);
const pageSizes = ref<number>(30);
const sort = ref<string>('');
const targetYearMonth = ref<string>('');
const status = ref<number[]>([]);
const companyName = ref<string>('');

const companyAdminStore = useCompanyAdminStore();

const getCompanies = async () => {
  let condition = `page=${page.value}&pageSize=${pageSizes.value}&createdAt=${targetYearMonth.value}`;
  if (sort.value) condition += `&sort=${sort.value}`;
  if (status.value.length) {
    status.value.forEach((value) => {
      condition += `&status=${value}`;
    });
  }

  if (companyName.value) condition += `&keyword=${companyName.value}`;

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

  await getCompanies();
};

const onChangeStatus = async (value: number[]) => {
  status.value = value;
  await getCompanies();
};

const onSearchCompanyName = async (value: string) => {
  companyName.value = value;
  await getCompanies();
};
</script>

<template>
  <div class="user-list px-4">
    <div class="header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">顧客管理</span>
    </div>
    <CustomerSearch
      @update:change-date="onChangeDate"
      @update:change-status="onChangeStatus"
      @search-company-name="onSearchCompanyName"
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
