import{a as xe,_ as ye}from"./Bnev0QHF.js";import{_ as ie}from"./CvywUbkQ.js";import{_ as ce}from"./cxjxDe81.js";import{C as ue,j as Se,V as Ce,S as be,u as de,A as ke,a as we,f as $e,_ as De}from"./DMjQVsRU.js";import{C as Ee}from"./03S2FrUi.js";import{m as K,r as g,J as H,g as Q,o as p,c as k,a as e,b as m,w as F,p as o,d as B,t as C,H as pe,L as Ue,z as D,N as Ne,O as Pe,Q as Ie,v as G,x as L,R as Le,h as ze,D as X,E as Z,n as me,y as Ae,S as Me,C as re,U as Y,M as Re}from"./8DzkUH2E.js";import{_ as q}from"./DlAUqK2U.js";import{u as ge}from"./D-Fke9Ft.js";import{u as ee}from"./BsviWeDB.js";import{L as le}from"./BrLfVk0x.js";import{C as Te}from"./LhZusj_m.js";import{_ as Oe}from"./B-nF45KJ.js";import{_ as je}from"./B_UOF5qM.js";import"./Cc2fCF5l.js";import"./9-eyLIwT.js";const Ve={class:"date-search flex items-center gap-3"},Ye={class:"flex items-center gap-2"},Fe={class:"border border-gray-300 h-[30px] flex items-center justify-between px-4 bg-white rounded cursor-pointer"},Be=K({__name:"date",emits:["update:selectedDate"],setup(E,{emit:h}){const f=h,x=g((()=>{const y=new Date,n=y.getFullYear(),c=y.getMonth()+1;return{year:n,month:c}})()),l=g(""),a=()=>{const{year:y,month:n}=x.value;l.value=`${y}/${n.toString().padStart(2,"0")}`,f("update:selectedDate",l.value)},u=y=>{let{year:n,month:c}=x.value;c+=y,c>12?(c=1,n+=1):c<1&&(c=12,n-=1),i.value={year:n,month:c-1}};H(()=>{a()});const i=g({year:x.value.year,month:x.value.month-1});return Q(i,()=>{x.value={year:i.value.year,month:i.value.month+1},a()}),(y,n)=>{const c=ce;return p(),k("div",Ve,[e("div",Ye,[m(c,{variant:"default",class:"bg-[#bfbfbf] text-black hover:bg-[#c4b3b3]","left-icon":"search",onClick:n[0]||(n[0]=N=>u(-1))},{default:F(()=>[m(o(ue),{class:"w-4 h-4"}),n[2]||(n[2]=B(" 前月 "))]),_:1}),m(o(Ce),{modelValue:o(i),"onUpdate:modelValue":n[1]||(n[1]=N=>pe(i)?i.value=N:null),"month-picker":"","auto-apply":"","format-locale":o(Se),format:"E"},{trigger:F(()=>[e("div",Fe,[e("span",null,C(o(l)),1),m(o(Ee),{class:"w-4 h-4"})])]),_:1},8,["modelValue","format-locale"])])])}}}),Ge=q(Be,[["__scopeId","data-v-0df9fc12"]]),te=Ue("customerPageStore",()=>{const E=g({page:1,pageSize:30,sort:"",status:[],keyword:""}),h=Ne(),f=D(()=>h.getCurrentUserFromStorage()),r=D(()=>{var a;return`${(a=f.value)==null?void 0:a.id}_company_admin`});return{customerStorageCondition:E,setCustomerStorageCondition:a=>{const u=h.getLocalStorage(r.value);if(u){const i=JSON.parse(u);E.value={...i,...a}}else E.value={...E.value,...a};h.setLocalStorage(r.value,JSON.stringify(E.value))},getCustomerStorageCondition:()=>{const a=h.getLocalStorage(r.value);if(a){const u=JSON.parse(a);E.value={...E.value,...u}}return E.value}}}),Ke={class:"search flex flex-col gap-8 min-h-[100px]"},Je={class:"company flex max-sm:flex-col gap-5"},He={class:"relative items-center font-medium lg:w-[450px]"},Qe={class:"absolute start-0 inset-y-0 flex items-center justify-center px-2"},qe={class:"active flex gap-5"},We={class:"flex items-center gap-2"},Xe={class:"flex items-center gap-2"},Ze={class:"flex items-center gap-2"},et={class:"actions flex max-sm:flex-col gap-5"},tt={class:"flex gap-5 lg:w-[450px]"},st={class:"flex gap-5"},ot=K({__name:"index",emits:["update:changeDate","update:changeStatus","searchCompany","exportCustomer","exportStatusCompany"],setup(E,{emit:h}){const{redirectPage:f}=ge(),r=ee(),x=te(),l=h,a=g(""),u=g([]),i=g(""),y=g(!1),n=D(()=>r.isLoadingExportCompany),c=D(()=>r.isLoadingExportStatusCompany),N=_=>{a.value=_,l("update:changeDate",a.value)},z=(_,t)=>{t?u.value.push(_):u.value=u.value.filter(v=>v!==_),l("update:changeStatus",u.value)},R=()=>{f("/customer/create-new-customer")},T=()=>{l("exportCustomer")},O=()=>{l("exportStatusCompany")},w=()=>{if(y.value){y.value=!1;return}l("searchCompany",i.value)},P=_=>{y.value=!0,_.target.blur(),l("searchCompany",i.value)},$=D(()=>x.customerStorageCondition);return Q($,()=>{u.value=$.value.status,i.value=$.value.keyword}),(_,t)=>{const v=xe,b=ie,I=ce,U=Ge;return p(),k("div",Ke,[e("div",Je,[e("div",He,[m(v,{id:"search",type:"text",placeholder:"Search...",class:"pl-10 w-[70%]",modelValue:o(i),"onUpdate:modelValue":t[0]||(t[0]=A=>pe(i)?i.value=A:null),onBlur:w,onKeydown:Pe(Ie(P,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"]),e("span",Qe,[m(o(be),{class:"w-4 h-4"})])]),e("div",qe,[e("div",We,[m(b,{id:"normal",class:"bg-white",checked:o(u).includes(1),"onUpdate:checked":t[1]||(t[1]=A=>z(1,A))},null,8,["checked"]),t[4]||(t[4]=e("span",{for:"suspension",class:"flex text-xs flex-shrink-0"}," 利用中 ",-1))]),e("div",Xe,[m(b,{id:"terms",class:"bg-white",checked:o(u).includes(2),"onUpdate:checked":t[2]||(t[2]=A=>z(2,A))},null,8,["checked"]),t[5]||(t[5]=e("span",{for:"terms",class:"flex text-xs flex-shrink-0"}," 停止中 ",-1))]),e("div",Ze,[m(b,{id:"temporary",class:"bg-white",checked:o(u).includes(3),"onUpdate:checked":t[3]||(t[3]=A=>z(3,A))},null,8,["checked"]),t[6]||(t[6]=e("span",{for:"terms",class:"flex text-xs flex-shrink-0"}," 退会済 ",-1))])])]),e("div",et,[e("div",tt,[m(I,{variant:"export","left-icon":"search",class:"cursor-pointer",onClick:R},{default:F(()=>t[7]||(t[7]=[B(" 新規顧客追加 ")])),_:1}),m(I,{variant:"export","left-icon":"search",onClick:T},{default:F(()=>[o(n)?(p(),G(o(le),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):L("",!0),t[8]||(t[8]=B(" 顧客情報出力 "))]),_:1})]),e("div",st,[m(U,{"onUpdate:selectedDate":N}),m(I,{variant:"export","left-icon":"search",onClick:O},{default:F(()=>[o(c)?(p(),G(o(le),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):L("",!0),t[9]||(t[9]=B(" 利用状況出力 "))]),_:1})])])])}}}),at=q(ot,[["__scopeId","data-v-665761e3"]]),nt={class:"pagination max-w-[350px]"},rt={class:"flex items-center gap-5 justify-between"},lt={class:"flex items-center gap-2"},it={class:"text-center"},ct={key:0,class:"dropdown-content absolute left-0 mt-1 w-full bg-white shadow-xl z-12"},ut=["onClick"],dt={class:"flex items-center gap-2"},pt={key:0,class:"from"},mt={key:1},gt={key:2},vt={key:3,class:"to"},ft={key:4},_t={key:5,class:"total"},ht={class:"flex items-center gap-2"},xt=["disabled"],yt=["disabled"],St=K({__name:"pagination",props:{length:{type:Number,default:100},pagination:{type:Object,default:()=>({pageIndex:1,pageSize:30})}},emits:["update:pagination"],setup(E,{emit:h}){const f=E,{length:r}=Le(f),x=D(()=>f.pagination),l=g(x.value.pageSize.toString()),a=g(x.value.pageIndex),u=[30,100,200],i=g(!1),y=g(null);Q(x,()=>{l.value=x.value.pageSize.toString(),a.value=x.value.pageIndex});const n=h,c=D(()=>Math.ceil(r.value/parseInt(l.value))),N=D(()=>r.value===0?0:(a.value-1)*parseInt(l.value)+1),z=D(()=>{if(r.value===0)return 0;const $=a.value*parseInt(l.value);return $>r.value?r.value:$}),R=$=>{l.value=$.toString(),a.value=1,i.value=!1,n("update:pagination",{pageIndex:a.value,pageSize:$})},T=()=>{a.value>1&&(a.value--,n("update:pagination",{pageIndex:a.value,pageSize:parseInt(l.value)}))},O=()=>{a.value<c.value&&(a.value++,n("update:pagination",{pageIndex:a.value,pageSize:parseInt(l.value)}))},w=D(()=>a.value>=c.value||r.value===0),P=$=>{y.value&&!y.value.contains($.target)&&(i.value=!1)};return H(()=>{window.addEventListener("click",P)}),ze(()=>{window.removeEventListener("click",P)}),($,_)=>(p(),k("div",nt,[e("div",rt,[e("div",lt,[_[2]||(_[2]=e("span",null,"表示数:",-1)),e("div",{class:"relative",ref_key:"dropdownRef",ref:y},[e("button",{onClick:_[0]||(_[0]=t=>i.value=!i.value),class:"w-[60px] flex justify-between items-center px-2 py-1"},[e("span",it,C(l.value),1),_[1]||(_[1]=e("div",{class:"w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-gray-500 hover:border-t-gray-700"},null,-1))]),i.value?(p(),k("div",ct,[e("ul",null,[(p(),k(X,null,Z(u,t=>e("li",{key:t,onClick:v=>R(t),class:"px-4 py-2 hover:bg-gray-100 cursor-pointer"},C(t),9,ut)),64))])])):L("",!0)],512),e("div",dt,[o(r)>0?(p(),k("span",pt,C(N.value),1)):(p(),k("span",mt,"0")),o(r)>0?(p(),k("span",gt,"-")):L("",!0),o(r)>0?(p(),k("span",vt,C(z.value)+" 件",1)):(p(),k("span",ft,"件")),o(r)>0?(p(),k("span",_t,"(全"+C(o(r))+"件)",1)):L("",!0)])]),e("div",ht,[e("button",{onClick:T,disabled:a.value===1||o(r)===0,class:"disabled:opacity-50"},[m(o(ue),{class:"w-4 h-4"})],8,xt),e("button",{onClick:O,disabled:w.value,class:"disabled:opacity-50"},[m(o(Te),{class:"w-4 h-4"})],8,yt)])])]))}}),Ct=q(St,[["__scopeId","data-v-3b5cf6f5"]]),bt={class:"user-container flex flex-col gap-2 overflow-hidden"},kt={class:"actions flex justify-between items-center"},wt={class:"w-full flex flex-col relative border-l border-r"},$t={class:"table-container overflow-auto border-b"},Dt={class:"w-full table-fixed"},Et={class:"bg-[#afeeee] sticky top-0 z-10"},Ut=["onClick"],Nt={class:""},Pt=["onDblclick"],It={class:"pr-[1px]"},Lt={class:"row-sticky px-[5px] truncate"},zt={class:"row-sticky px-[5px] truncate"},At={class:"px-[5px]"},Mt={class:"px-[5px] truncate"},Rt={class:"px-[5px] truncate"},Tt={class:"px-[5px]"},Ot={class:"px-[5px] text-center"},jt={class:"px-[5px] text-center"},Vt={class:"px-[5px] text-center"},Yt={key:1},Ft={colspan:"9",class:"text-center py-4 text-[#5566da]"},Bt=K({__name:"index",emits:["update:pagination","update:sort","getCompanies"],setup(E,{emit:h}){const f=ee(),r=me(),x=Ae(),l=te(),{redirectPage:a}=ge(),{toast:u}=de(),i=h,y={1:"利用中",2:"停止中",3:"退会済"},n=[{label:"法人名",width:"10%",isSort:!0,key:"companyName"},{label:"所在地",width:"15%",isSort:!0,key:"companyAddress"},{label:"電話番号",width:"9%",isSort:!0,key:"phoneNumber"},{label:"代表者",width:"9%",isSort:!0,key:"frontPicFamilyName"},{label:"担当者",width:"9%",isSort:!0,key:"picFamilyName"},{label:"メールアドレス",width:"15%",isSort:!0,key:"email"},{label:"介護ソフト",width:"10%",isSort:!0,key:"kaigoSoftware"},{label:"ステータス",width:"9%",isSort:!0,key:"status"},{label:"開始日",width:"9%",isSort:!0,key:"createdAt"}],c=g(""),N=g(!1),z=D(()=>{var s;return((s=f.companyUsers)==null?void 0:s.totalRecord)??0}),R=D(()=>f.isLoadCompanyCustomers),T=D(()=>r.notify),O=D(()=>x.masterData),w=g(new Set),P=D(()=>{var s;return w.value=new Set,((s=f.companyUsers)==null?void 0:s.results)??[]}),$=s=>{w.value.has(s)?w.value.delete(s):w.value.add(s)},_=s=>s?y[s]:s=0,t=({pageIndex:s,pageSize:S})=>{i("update:pagination",{pageIndex:s,pageSize:S})},v=s=>{if(!s.isSort)return;const[S,M]=c.value.split(":"),j=S===s.key?M===Y.ASC?Y.DESC:"":Y.ASC;c.value=j?`${s.key}:${j}`:"",i("update:sort",c.value)},b=()=>{if(w.value.size==0){J("destructive","削除する会社を選択してください");return}N.value=!0},I=async()=>{var M;r.clearNotify(),f.isLoadCompanyCustomers=!0,N.value=!1;const s=Array.from(w.value);if(await f.bulkDelete(s),(M=T.value)!=null&&M.message){f.isLoadCompanyCustomers=!1;return}J("default","会社を削除しました"),i("getCompanies")},U=()=>{if(w.value.size==0){J("destructive","編集する会社を選択してください");return}if(w.value.size>1){J("destructive","編集する会社を1つだけ選択してください");return}a(`/customer/detail/${w.value.values().next().value}`)},A=s=>{a(`/customer/detail/${s}`)},J=(s,S)=>{u({description:S,variant:s,duration:1e3})},ve=s=>{let S="bg-white dark:bg-gray-800 h-10 hover:cursor-pointer ";if(!s||s==1)return S+="hover:bg-[#afe7ee47]";if(s==2)return S+="!bg-[#feffce]";if(s==3)return S+="!bg-[#515151] text-white"},fe=s=>{var M,j;const S=(M=O.value)==null?void 0:M.kaigoSoftwares;return((j=S==null?void 0:S.find(W=>W.id==s))==null?void 0:j.name)??""},se=g({pageIndex:1,pageSize:30}),oe=D(()=>l.customerStorageCondition);Q(oe,()=>{ae(oe.value)}),H(()=>{const s=l.getCustomerStorageCondition();ae(s)});const ae=s=>{se.value={pageIndex:s.page,pageSize:s.pageSize},c.value=s.sort};return(s,S)=>{const M=Ct,j=ie,W=Oe,_e=De,he=je;return p(),k("div",bt,[e("div",kt,[e("div",{class:"flex"},[e("span",{class:"px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer",onClick:U},"編集"),e("span",{class:"px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer",onClick:b},"削除")]),m(M,{class:"mr-10",length:o(z),"onUpdate:pagination":t,pagination:o(se)},null,8,["length","pagination"])]),e("div",wt,[e("div",$t,[e("table",Dt,[e("thead",Et,[e("tr",null,[S[1]||(S[1]=e("th",{class:"py-3"},[e("span",{class:"flex items-center justify-center px-4 text-black border-white cursor-pointer border-r-2 p-[9px]"})],-1)),(p(),k(X,null,Z(n,(d,V)=>e("th",{class:"py-3",key:V,style:Me({width:d.width})},[e("span",{class:re(["flex items-center justify-center px-4 text-black border-white cursor-pointer",V<n.length-1?"border-r-2":""]),onClick:ne=>v(d)},[B(C(d.label)+" ",1),o(c)&&o(c).split(":")[1]==("SORT"in s?s.SORT:o(Y)).ASC&&d.key==o(c).split(":")[0]?(p(),G(o(ke),{key:0,width:"12",height:"12",class:"ml-1 hover:text-[#5566da]"})):L("",!0),o(c)&&o(c).split(":")[1]==("SORT"in s?s.SORT:o(Y)).DESC&&d.key==o(c).split(":")[0]?(p(),G(o(we),{key:1,width:"12",height:"12",class:"ml-1 hover:text-[#5566da]"})):L("",!0)],10,Ut)],4)),64))])]),e("tbody",Nt,[o(P).length>0?(p(!0),k(X,{key:0},Z(o(P),(d,V)=>(p(),k("tr",{key:V,class:re([V<o(P).length-1?"border-b":"",ve(d.status)]),onDblclick:ne=>A(d.id)},[e("td",It,[m(j,{id:"select-row-"+d.id,class:"m-auto bg-white flex items-center justify-center text-black border border-gray-300",checked:o(w).has(d.id),"onUpdate:checked":ne=>$(d.id)},null,8,["id","checked","onUpdate:checked"])]),e("td",Lt,[e("span",null,C(d.companyName),1)]),e("td",zt,[e("span",null,C(d.companyAddress),1)]),e("td",At,[e("span",null,C(d.phoneNumber),1)]),e("td",Mt,[e("span",null,C(d.frontPicFamilyName??"")+" "+C(d.frontPicGivenName??""),1)]),e("td",Rt,[e("span",null,C(d.picFamilyName??"")+" "+C(d.picGivenName??""),1)]),e("td",Tt,[e("span",null,C(d.email??""),1)]),e("td",Ot,[e("span",null,C(fe(d.kaigoSoftware)),1)]),e("td",jt,[e("span",null,C(_(d.status)),1)]),e("td",Vt,[e("span",null,C(("formatDate"in s?s.formatDate:o($e))(d.createdAt,"YYYY-MM-DD")),1)])],42,Pt))),128)):L("",!0),o(P).length==0&&o(R)==!1?(p(),k("tr",Yt,[e("td",Ft,C(("MESSAGES"in s?s.MESSAGES:o(Re)).EMPTY),1)])):L("",!0)])])]),o(R)?(p(),G(W,{key:0})):L("",!0)]),m(_e,{class:"top-[5px]"}),m(he,{"is-open":o(N),onClose:S[0]||(S[0]=d=>N.value=!1),onUpdate:I},null,8,["is-open"])])}}}),Gt=q(Bt,[["__scopeId","data-v-ac7ee205"]]),Kt={class:"user-list px-4"},Jt={class:"relative header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},Ht={class:"body-content flex py-4 w-full gap-2"},us=K({__name:"index",setup(E){const h=g(1),f=g(30),r=g(""),x=g(""),l=g([]),a=g(""),u=ee();me();const i=te(),{toast:y}=de(),n=async()=>{const t=new URLSearchParams;t.append("page",h.value.toString()),t.append("pageSize",f.value.toString()),r.value&&t.append("sort",r.value),l.value.length&&l.value.forEach(b=>{t.append("status",b)}),a.value&&t.append("keyword",a.value);const v={page:h.value,pageSize:f.value,sort:r.value,status:l.value,keyword:a.value};i.setCustomerStorageCondition(v),await u.searchCompanies(t.toString())},c=async({pageIndex:t,pageSize:v})=>{h.value=t,f.value=v,await n()},N=async t=>{r.value=t,await n()},z=async t=>{const[v,b]=t.split("/");x.value=`${v}-${b}-01`},R=async t=>{l.value=t,h.value=1,await n()},T=async t=>{a.value=t,h.value=1,await n()},O=async()=>{P(0)},w=async()=>{P(1)},P=async t=>{const v={exportType:t,targetYearMonth:x.value},b=await u.exportCompanyCustomer(v),{downloadUrl:I,fileName:U}=b||{};if(!I||!U){_("データのエクスポートに失敗","destructive");return}await $(I,U),u.resetLoadingExport()},$=async(t,v)=>{try{const b=await fetch(t);if(!b.ok){_("データのエクスポートに失敗","destructive");return}const I=await b.blob(),U=document.createElement("a");U.href=URL.createObjectURL(I),U.download=v,document.body.appendChild(U),U.click(),document.body.removeChild(U)}catch{_("データのエクスポートに失敗","destructive")}},_=(t,v)=>{y({description:t,variant:v,duration:1e3})};return H(async()=>{const t=i.getCustomerStorageCondition();t&&(h.value=t.page,f.value=t.pageSize,r.value=t.sort,l.value=t.status,a.value=t.keyword),await n()}),(t,v)=>{const b=ye,I=at,U=Gt;return p(),k("div",Kt,[e("div",Jt,[v[0]||(v[0]=e("span",{class:"text-base font-bold"},"顧客管理",-1)),m(b,{"class-custom":"absolute z-10 bg-[#ccc] w-[100%] top-[40px]  py-[11px]",type:"custom"})]),m(I,{"onUpdate:changeDate":z,"onUpdate:changeStatus":R,onSearchCompany:T,onExportCustomer:O,onExportStatusCompany:w}),e("div",Ht,[m(U,{class:"w-full","onUpdate:pagination":c,"onUpdate:sort":N,onGetCompanies:n})])])}}});export{us as default};
