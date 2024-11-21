import type { BulkExportReport, CompanyUpdateBody, CompanyUserStatus, RegisterNewUser } from '~/models/company';
import type { Office } from '~/models/office';

export const useCompanyStore = defineStore('company', () => {
  const offices = ref<Office[]>([]);
  const companyUsers = ref<CompanyUserStatus[]>([]);
  const isLoadCompanyUsers = ref(false);
  const isHaveDataCompanyUsers = ref(true);
  const userNameKana = ref('');
  const charactersSelected = ref<string[]>([]);
  const isOpenNotifyCrawler = ref(false);

  const registerNewUser = async (body: RegisterNewUser) => {
    return await apis.archaic?.post('company/register', { ...body });
  };

  const getCompanyUseStatus = async ({ officeId, targetYearMonth }: { officeId: number; targetYearMonth: string }) => {
    isLoadCompanyUsers.value = true;
    charactersSelected.value = [];

    const res = await apis.archaic?.get(`company-user-status?officeId=${officeId}&targetYearMonth=${targetYearMonth}`);

    companyUsers.value = res?.data ?? [];

    userNameKana.value = '';

    if (companyUsers.value.length) {
      isHaveDataCompanyUsers.value = true;
      userNameKana.value = companyUsers.value.map((user) => user.nameKana).join('');
    } else {
      isHaveDataCompanyUsers.value = false;
    }

    isLoadCompanyUsers.value = false;
  };

  const updateCompanyInformation = async (body: CompanyUpdateBody) => {
    return await apis.archaic?.put('company/update', { ...body });
  };

  const getOffices = async () => {
    const res = await apis.archaic?.get('office');

    offices.value = res?.data ?? [];
  };

  const bulkExportReport = async (body: BulkExportReport) => {
    return await apis.archaic?.post('company-user-status/bulk', { ...body });
  };

  const crawlCompanyUserStatus = async () => {
    await apis.archaic?.post('company-user-status/crawl', {});
    isOpenNotifyCrawler.value = true;
    setTimeout(() => {
      isOpenNotifyCrawler.value = false;
    }, 2000);
  };

  return {
    offices,
    userNameKana,
    companyUsers,
    isLoadCompanyUsers,
    charactersSelected,
    isOpenNotifyCrawler,
    isHaveDataCompanyUsers,
    getOffices,
    registerNewUser,
    bulkExportReport,
    getCompanyUseStatus,
    updateCompanyInformation,
    crawlCompanyUserStatus
  };
});
