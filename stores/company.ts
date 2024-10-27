import type { CompanyUpdateBody, RegisterNewUser } from '~/models/company';

export const useCompanyStore = defineStore('company', () => {
  const registerNewUser = async (body: RegisterNewUser) => {
    return await apis.archaic?.post('company/register', { ...body });
  };

  const getCompanyUseStatus = async () => {
    return await apis.archaic?.get('company-user-status');
  };

  const updateCompanyInformation = async (body: CompanyUpdateBody) => {
    return await apis.archaic?.put('company/update', { ...body });
  };

  return {
    registerNewUser,
    getCompanyUseStatus,
    updateCompanyInformation
  };
});
