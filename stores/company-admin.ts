import type { ResponseApi } from '~/models/common';
import type { AdminCreateCustomer, Company, ExportCompanyCustomer } from '~/models/company';

export interface CompanyUserResponse {
  results: Company[];
  totalPage: number;
  totalRecord: number;
}

export const useCompanyAdminStore = defineStore('companyAdmin', () => {
  const companyUsers = ref<CompanyUserResponse>();
  const companyUser = ref<Company>();

  const isLoadCompanyCustomers = ref(false);
  const isLoadingExportCompany = ref(false);
  const isLoadingExportStatusCompany = ref(false);

  let currentRequestId = 0;
  const searchCompanies = async (condition: string) => {
    const requestId = Date.now();
    currentRequestId = requestId;

    isLoadCompanyCustomers.value = true;
    const res = await apis.archaic?.get(`company?${condition}`);

    if (requestId === currentRequestId) {
      companyUsers.value = res?.data ?? null;
    }

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

  const exportCompanyCustomer = async (body: ExportCompanyCustomer) => {
    if (body.exportType === 1) isLoadingExportStatusCompany.value = true;
    else isLoadingExportCompany.value = true;

    const res: ResponseApi<{ downloadUrl: string; fileName: string }> = await apis.archaic?.post(
      'company/bulk-export',
      body
    );

    return res?.data;
  };

  const resetLoadingExport = () => {
    isLoadingExportCompany.value = false;
    isLoadingExportStatusCompany.value = false;
  };

  return {
    companyUser,
    companyUsers,
    isLoadCompanyCustomers,
    isLoadingExportCompany,
    isLoadingExportStatusCompany,
    bulkDelete,
    searchCompanies,
    getCompanyById,
    createNewCompany,
    updateCompanyById,
    exportCompanyCustomer,
    updateStatusCompanyUser,
    resetLoadingExport
  };
});
