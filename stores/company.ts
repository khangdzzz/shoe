import { set } from 'zod';
import type { CompanyUpdateBody, CompanyUserStatus, RegisterNewUser } from '~/models/company';
import type { Office } from '~/models/office';

export const useCompanyStore = defineStore('company', () => {
  const offices = ref<Office[]>([]);
  const companyUsers = ref<CompanyUserStatus[]>([]);
  const isLoadCompanyUsers = ref(false);
  const userNameKanjiCharacters = ref('');
  const charactersSelected = ref<string[]>([]);

  const registerNewUser = async (body: RegisterNewUser) => {
    return await apis.archaic?.post('company/register', { ...body });
  };

  const getCompanyUseStatus = async ({ officeId, targetYearMonth }: { officeId: number; targetYearMonth: string }) => {
    isLoadCompanyUsers.value = true;
    charactersSelected.value = [];
    const res = await apis.archaic?.get(`company-user-status?officeId=${officeId}&targetYearMonth=${targetYearMonth}`);

    companyUsers.value = res?.data?.results ?? [];

    if (companyUsers.value.length) {
      userNameKanjiCharacters.value = companyUsers.value.map((user) => user.companyUserNameKanji).join('');
    }

    isLoadCompanyUsers.value = false;
  };

  const updateCompanyInformation = async (body: CompanyUpdateBody) => {
    return await apis.archaic?.put('company/update', { ...body });
  };

  const getOffices = async () => {
    const res = await apis.archaic?.get('office');

    offices.value = res?.data?.results ?? [];
  };

  return {
    offices,
    companyUsers,
    isLoadCompanyUsers,
    userNameKanjiCharacters,
    charactersSelected,
    getOffices,
    registerNewUser,
    getCompanyUseStatus,
    updateCompanyInformation
  };
});
