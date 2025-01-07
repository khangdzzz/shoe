export interface CustomerStorageCondition {
  page: number;
  pageSize: number;
  sort: string;
  status: number[];
  keyword: string;
}

export const useCustomerPageStore = defineStore('customerPageStore', () => {
  const customerStorageCondition = ref<CustomerStorageCondition>({
    page: 1,
    pageSize: 30,
    sort: '',
    status: [],
    keyword: ''
  });

  const commonService = useCommon();
  const currentUser = computed(() => commonService.getCurrentUserFromStorage());
  const customerStorageKey = computed(() => `${currentUser.value?.id}_company_admin`);

  const setCustomerStorageCondition = (condition: Partial<CustomerStorageCondition>) => {
    const storageCondition = commonService.getLocalStorage(customerStorageKey.value);

    if (storageCondition) {
      const storageConditionParse = JSON.parse(storageCondition);
      customerStorageCondition.value = {
        ...storageConditionParse,
        ...condition
      };
    } else {
      customerStorageCondition.value = {
        ...customerStorageCondition.value,
        ...condition
      };
    }

    commonService.setLocalStorage(customerStorageKey.value, JSON.stringify(customerStorageCondition.value));
  };

  const getCustomerStorageCondition = () => {
    const storageCondition = commonService.getLocalStorage(customerStorageKey.value);

    if (storageCondition) {
      const storageConditionParse = JSON.parse(storageCondition);
      customerStorageCondition.value = {
        ...customerStorageCondition.value,
        ...storageConditionParse
      };
    }

    return customerStorageCondition.value;
  };

  return {
    customerStorageCondition,
    setCustomerStorageCondition,
    getCustomerStorageCondition
  };
});
