import{al as g,U as m,Q as S,R as f,am as h,an as L,ao as E}from"./De5gZPgs.js";const p=g(async n=>{const o=m(),t=f(),s=n.fullPath,e=t.getLocalStorage(S.role),c=t.hasLogged(),i=()=>{s!=="/login"&&o.push("/login")},r=u=>{const a=u===E.admin.toString(),l=a?h:L,R=a?"/customer":"/user-list";l.some(d=>s.includes(d))||o.push(R)};if(!e||!c){i();return}r(e)});export{p as default};
