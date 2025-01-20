<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
import { LoaderCircle } from 'lucide-vue-next';

const { redirectPage } = useRedirectPage();
const companyAdminStore = useCompanyAdminStore();
const customerPageStore = useCustomerPageStore();

const emit = defineEmits([
  'update:changeDate',
  'update:changeStatus',
  'searchCompany',
  'exportCustomer',
  'exportStatusCompany'
]);

const targetYearMonth = ref('');
const status = ref<number[]>([]);
const keyword = ref('');
const isEnterPressed = ref(false);

const isLoadingExportCompany = computed(() => companyAdminStore.isLoadingExportCompany);
const isLoadingExportStatusCompany = computed(() => companyAdminStore.isLoadingExportStatusCompany);
const onChangeTargetYearMonth = (date: string) => {
  targetYearMonth.value = date;
  emit('update:changeDate', targetYearMonth.value);
};

const handleCheckboxChange = (value: number, checked: boolean) => {
  if (checked) status.value.push(value);
  else status.value = status.value.filter((item) => item !== value);

  emit('update:changeStatus', status.value);
};

const createNewCustomer = () => {
  redirectPage('/customer/create-new-customer');
};

const handleExportCustomer = () => {
  emit('exportCustomer');
};

const handleExportStatusCompany = () => {
  emit('exportStatusCompany');
};

const onBlur = () => {
  if (isEnterPressed.value) {
    isEnterPressed.value = false;
    return;
  }
  emit('searchCompany', keyword.value);
};

const handleEnter = (event: any) => {
  isEnterPressed.value = true;
  event.target.blur();
  emit('searchCompany', keyword.value);
};

const customerStorageCondition = computed(() => customerPageStore.customerStorageCondition);

watch(customerStorageCondition, () => {
  status.value = customerStorageCondition.value.status;
  keyword.value = customerStorageCondition.value.keyword;
});
</script>

<template>
  <div class="search flex flex-col gap-8 min-h-[100px]">
    <div class="company flex max-sm:flex-col gap-5">
      <div class="relative items-center font-medium lg:w-[450px]">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 w-[70%]"
          v-model="keyword"
          @blur="onBlur"
          @keydown.enter.prevent="handleEnter"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="w-4 h-4" />
        </span>
      </div>
      <div class="active flex gap-5">
        <div class="flex items-center gap-2">
          <Checkbox
            id="normal"
            class="bg-white"
            :checked="status.includes(1)"
            @update:checked="handleCheckboxChange(1, $event)"
          />
          <span
            for="suspension"
            class="flex text-xs flex-shrink-0"
          >
            利用中
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox
            id="terms"
            class="bg-white"
            :checked="status.includes(2)"
            @update:checked="handleCheckboxChange(2, $event)"
          />
          <span
            for="terms"
            class="flex text-xs flex-shrink-0"
          >
            停止中
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox
            id="temporary"
            class="bg-white"
            :checked="status.includes(3)"
            @update:checked="handleCheckboxChange(3, $event)"
          />
          <span
            for="terms"
            class="flex text-xs flex-shrink-0"
          >
            退会済
          </span>
        </div>
      </div>
    </div>

    <div class="actions flex max-sm:flex-col gap-5">
      <div class="flex gap-5 lg:w-[450px]">
        <Button
          variant="export"
          left-icon="search"
          class="cursor-pointer"
          @click="createNewCustomer"
        >
          新規顧客追加
        </Button>
        <Button
          variant="export"
          left-icon="search"
          @click="handleExportCustomer"
        >
          <LoaderCircle
            v-if="isLoadingExportCompany"
            class="w-4 h-4 mr-2 animate-spin"
          />
          顧客情報出力
        </Button>
      </div>
      <div class="flex gap-5">
        <CustomerSearchDate @update:selectedDate="onChangeTargetYearMonth" />
        <Button
          variant="export"
          left-icon="search"
          @click="handleExportStatusCompany"
        >
          <LoaderCircle
            v-if="isLoadingExportStatusCompany"
            class="w-4 h-4 mr-2 animate-spin"
          />
          利用状況出力
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  padding: 10px 0px;
}
</style>
