import type { AdminCreateCustomer, Company } from '~/models/company';

export interface CompanyUserResponse {
  results: Company[];
  totalPage: number;
  totalRecord: number;
}

export const useCompanyAdminStore = defineStore('companyAdmin', () => {
  const companyUsers = ref<CompanyUserResponse>();
  const companyUser = ref<Company>();

  const isLoadCompanyCustomers = ref(false);
  const searchCompanies = async (condition: string) => {
    isLoadCompanyCustomers.value = true;
    const res = await apis.archaic?.get(`company?${condition}`);

    companyUsers.value = res?.data ?? null;

    isLoadCompanyCustomers.value = false;
  };

  const getCompanyById = async (id: number) => {
    const res = await apis.archaic?.get(`company/${id}`);

    companyUser.value = res?.data;
  };

  const updateCompanyById = async (id: number, data: any) => {
    await apis.archaic?.put(`company/${id}`, data);
  };

  const bulkDelete = async (ids: number[]) => {
    await apis.archaic?.del('company/bulk-delete', { companyIds: ids });
  };

  const updateStatusCompanyUser = async (id: number, body: { status: number }) => {
    await apis.archaic?.put(`company/${id}/status`, body);
  };

  const createNewCompany = async (body: AdminCreateCustomer) => {
    return await apis.archaic?.post('company', body);
  };

  return {
    companyUser,
    companyUsers,
    isLoadCompanyCustomers,
    bulkDelete,
    searchCompanies,
    getCompanyById,
    createNewCompany,
    updateCompanyById,
    updateStatusCompanyUser
  };
});
