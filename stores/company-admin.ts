import type { Company } from '~/models/company';

export interface CompanyUserResponse {
  results: Company[];
  totalPage: number;
  totalRecord: number;
}

export const useCompanyAdminStore = defineStore('companyAdmin', () => {
  const companyUsers = ref<CompanyUserResponse>();
  const isLoadCompanyCustomers = ref(false);
  const searchCompanies = async (condition: string) => {
    isLoadCompanyCustomers.value = true;
    const res = await apis.archaic?.get(`company?${condition}`);

    companyUsers.value = res?.data ?? null;

    isLoadCompanyCustomers.value = false;
  };

  const bulkDelete = async (ids: number[]) => {
    await apis.archaic?.del('company/bulk-delete', { companyIds: ids });
  };

  return {
    companyUsers,
    isLoadCompanyCustomers,
    bulkDelete,
    searchCompanies
  };
});
