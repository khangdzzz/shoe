import{z as s,a as g,m as u}from"./D-HuQBpm.js";import{M as a,P as d,N as m}from"./K78HjCDi.js";const R=n=>{if(!n)return!1;const e=new Date(n),t=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()},p=()=>{var c,i;const e=m().getCurrentUserFromStorage(),t=(c=e.company)==null?void 0:c.paymentMethod,o=(i=e.company)==null?void 0:i.isAdminUpdatePaymentMethod,r=e==null?void 0:e.paymentMethodInfo;return o?!!(t===d.bankWithdrawal||t===d.creditCard&&r):e==null?void 0:e.isHasPaymentMethod},S=()=>{var t;const e=m().getCurrentUserFromStorage();return e?(t=e.company)==null?void 0:t.paymentMethod:""},M=()=>{var t;return(t=m().getCurrentUserFromStorage().company)==null?void 0:t.isAdminUpdatePaymentMethod},P=n=>(n?s.string(n):s.string()).min(8,{message:a.ERR007}).regex(/[a-zA-Z]/,a.ERR007).regex(/\d/,a.ERR007).regex(/[@$!%*?&^#()\[\]{}|\\/.,;_:`~+=<>]/,a.ERR007).regex(new RegExp("^(?! )[A-Za-z0-9^$*.[\\]{}()?\\\"!@#%&/\\\\,><':;|_~`=+\\- ]*(?<! )$"),a.ERR007),E=(n,e,t)=>{const o=/^[\u30A0-\u30FF]+$/,r=s.string(g(n)).min(1,g(n)).max(e,u(n,e.toString()));return t?r.regex(o,{message:a.ERR005}):r};export{S as a,R as c,P as g,p as h,M as i,E as v};
