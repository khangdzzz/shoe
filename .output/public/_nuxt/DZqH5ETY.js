import{O as m,r as n,P as o}from"./D6_zQaNs.js";const v=m("companyAdmin",()=>{const r=n(),y=n(),s=n(!1),c=n(!1),p=n(!1);return{companyUser:y,companyUsers:r,isLoadCompanyCustomers:s,isLoadingExportCompany:c,isLoadingExportStatusCompany:p,bulkDelete:async t=>{var a;await((a=o.archaic)==null?void 0:a.del("company/bulk-delete",{companyIds:t}))},searchCompanies:async t=>{var e;s.value=!0;const a=await((e=o.archaic)==null?void 0:e.get(`company?${t}`));r.value=(a==null?void 0:a.data)??null,s.value=!1},getCompanyById:async t=>{var e;const a=await((e=o.archaic)==null?void 0:e.get(`company/${t}`));y.value=a==null?void 0:a.data},createNewCompany:async t=>{var a;return await((a=o.archaic)==null?void 0:a.post("company",t))},updateCompanyById:async(t,a)=>{var e;await((e=o.archaic)==null?void 0:e.put(`company/${t}`,a))},exportCompanyCustomer:async t=>{var a;t.exportType===1?p.value=!0:c.value=!0,await((a=o.archaic)==null?void 0:a.post("company/bulk-export",t)),c.value=!1,p.value=!1},updateStatusCompanyUser:async(t,a)=>{var e;await((e=o.archaic)==null?void 0:e.put(`company/${t}/status`,a))}}});export{v as u};
