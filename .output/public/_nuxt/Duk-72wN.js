import{L as te,_ as _e}from"./CscEmbHp.js";import{_ as ae}from"./CXT6uESx.js";import{_ as oe}from"./COeEdW9b.js";import{C as ne,j as he,V as ge,S as xe,u as le,A as ye,a as be,f as ke,_ as Se}from"./8H-G_s5I.js";import{C as Ce}from"./SUN7AO9L.js";import{m as G,r as m,J as W,g as re,o as i,c as b,a as e,b as _,w as B,p as s,d as O,t as x,H as ce,A as R,K as we,v as V,x as E,L as $e,h as De,E as q,G as Q,n as ie,N as Ae,D as se,S as j,M as Ne}from"./De5gZPgs.js";import{_ as F}from"./DlAUqK2U.js";import{u as ue}from"./B1iYHAud.js";import{u as X}from"./DnFq0WJd.js";import{C as Ee}from"./D1qMwAXe.js";import{_ as Ie}from"./CRbg016k.js";import{_ as Ue}from"./DQdDknAW.js";import"./CRXpiUPU.js";import"./BEmwVOvO.js";const Le={class:"date-search flex items-center gap-3"},Me={class:"flex items-center gap-2"},Re={class:"border border-gray-300 h-[30px] flex items-center justify-between px-4 bg-white rounded cursor-pointer"},Pe=G({__name:"date",emits:["update:selectedDate"],setup(z,{emit:D}){const C=D,l=m((()=>{const n=new Date,o=n.getFullYear(),u=n.getMonth()+1;return{year:o,month:u}})()),r=m(""),g=()=>{const{year:n,month:o}=l.value;r.value=`${n}/${o.toString().padStart(2,"0")}`,C("update:selectedDate",r.value)},y=n=>{let{year:o,month:u}=l.value;u+=n,u>12?(u=1,o+=1):u<1&&(u=12,o-=1),h.value={year:o,month:u-1}};W(()=>{g()});const h=m({year:l.value.year,month:l.value.month-1});return re(h,()=>{l.value={year:h.value.year,month:h.value.month+1},g()}),(n,o)=>{const u=oe;return i(),b("div",Le,[e("div",Me,[_(u,{variant:"default",class:"bg-[#bfbfbf] text-black hover:bg-[#c4b3b3]","left-icon":"search",onClick:o[0]||(o[0]=U=>y(-1))},{default:B(()=>[_(s(ne),{class:"w-4 h-4"}),o[2]||(o[2]=O(" 前月 "))]),_:1}),_(s(ge),{modelValue:s(h),"onUpdate:modelValue":o[1]||(o[1]=U=>ce(h)?h.value=U:null),"month-picker":"","auto-apply":"","format-locale":s(he),format:"E"},{trigger:B(()=>[e("div",Re,[e("span",null,x(s(r)),1),_(s(Ce),{class:"w-4 h-4"})])]),_:1},8,["modelValue","format-locale"])])])}}}),Te=F(Pe,[["__scopeId","data-v-0df9fc12"]]),Ve={class:"search flex flex-col gap-8 min-h-[100px]"},ze={class:"company flex max-sm:flex-col gap-5"},Ye={class:"relative items-center font-medium lg:w-[450px]"},je={class:"absolute start-0 inset-y-0 flex items-center justify-center px-2"},Be={class:"active flex gap-5"},Oe={class:"flex items-center gap-2"},Ge={class:"flex items-center gap-2"},Fe={class:"flex items-center gap-2"},He={class:"actions flex max-sm:flex-col gap-5"},Ke={class:"flex gap-5 lg:w-[450px]"},Ze={class:"flex gap-5"},Je=G({__name:"index",emits:["update:changeDate","update:changeStatus","searchCompanyName","exportCustomer","exportStatusCompany"],setup(z,{emit:D}){const{redirectPage:C}=ue(),v=X(),l=D,r=m(""),g=m([]),y=m(""),h=R(()=>v.isLoadingExportCompany),n=R(()=>v.isLoadingExportStatusCompany),o=c=>{r.value=c,l("update:changeDate",r.value)},u=(c,a)=>{a?g.value.push(c):g.value=g.value.filter(I=>I!==c),l("update:changeStatus",g.value)},U=()=>{C("/customer/create-new-customer")},A=()=>{l("exportCustomer")},T=()=>{l("exportStatusCompany")};return(c,a)=>{const I=_e,k=ae,w=oe,L=Te;return i(),b("div",Ve,[e("div",ze,[e("div",Ye,[_(I,{id:"search",type:"text",placeholder:"Search...",class:"pl-10 w-[70%]",modelValue:s(y),"onUpdate:modelValue":a[0]||(a[0]=$=>ce(y)?y.value=$:null),onBlur:a[1]||(a[1]=$=>l("searchCompanyName",s(y))),onKeydown:a[2]||(a[2]=we($=>l("searchCompanyName",s(y)),["enter"]))},null,8,["modelValue"]),e("span",je,[_(s(xe),{class:"w-4 h-4"})])]),e("div",Be,[e("div",Oe,[_(k,{id:"normal",class:"bg-white","onUpdate:checked":a[3]||(a[3]=$=>u(1,$))}),a[6]||(a[6]=e("span",{for:"suspension",class:"flex text-xs flex-shrink-0"}," 利用中 ",-1))]),e("div",Ge,[_(k,{id:"terms",class:"bg-white","onUpdate:checked":a[4]||(a[4]=$=>u(2,$))}),a[7]||(a[7]=e("span",{for:"terms",class:"flex text-xs flex-shrink-0"}," 停止中 ",-1))]),e("div",Fe,[_(k,{id:"temporary",class:"bg-white","onUpdate:checked":a[5]||(a[5]=$=>u(3,$))}),a[8]||(a[8]=e("span",{for:"terms",class:"flex text-xs flex-shrink-0"}," 退会済 ",-1))])])]),e("div",He,[e("div",Ke,[_(w,{variant:"export","left-icon":"search",class:"cursor-pointer",onClick:U},{default:B(()=>a[9]||(a[9]=[O(" 新規顧客追加 ")])),_:1}),_(w,{variant:"export","left-icon":"search",onClick:A},{default:B(()=>[s(h)?(i(),V(s(te),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):E("",!0),a[10]||(a[10]=O(" 顧客情報出力 "))]),_:1})]),e("div",Ze,[_(L,{"onUpdate:selectedDate":o}),_(w,{variant:"export","left-icon":"search",onClick:T},{default:B(()=>[s(n)?(i(),V(s(te),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):E("",!0),a[11]||(a[11]=O(" 利用状況出力 "))]),_:1})])])])}}}),qe=F(Je,[["__scopeId","data-v-84f1edd0"]]),Qe={class:"pagination max-w-[350px]"},We={class:"flex items-center gap-5 justify-between"},Xe={class:"flex items-center gap-2"},et={class:"text-center"},tt={key:0,class:"dropdown-content absolute left-0 mt-1 w-full bg-white shadow-xl z-12"},st=["onClick"],at={class:"flex items-center gap-2"},ot={key:0,class:"from"},nt={key:1},lt={key:2},rt={key:3,class:"to"},ct={key:4},it={key:5,class:"total"},ut={class:"flex items-center gap-2"},dt=["disabled"],pt=["disabled"],mt=G({__name:"pagination",props:{length:{type:Number,default:100}},emits:["update:pagination"],setup(z,{emit:D}){const C=z,{length:v}=$e(C),l=m("30"),r=m(1),g=[30,100,200],y=m(!1),h=m(null),n=D,o=R(()=>Math.ceil(v.value/parseInt(l.value))),u=R(()=>v.value===0?0:(r.value-1)*parseInt(l.value)+1),U=R(()=>{if(v.value===0)return 0;const k=r.value*parseInt(l.value);return k>v.value?v.value:k}),A=k=>{l.value=k.toString(),r.value=1,y.value=!1,n("update:pagination",{pageIndex:r.value,pageSize:k})},T=()=>{r.value>1&&(r.value--,n("update:pagination",{pageIndex:r.value,pageSize:parseInt(l.value)}))},c=()=>{r.value<o.value&&(r.value++,n("update:pagination",{pageIndex:r.value,pageSize:parseInt(l.value)}))},a=R(()=>r.value>=o.value||v.value===0),I=k=>{h.value&&!h.value.contains(k.target)&&(y.value=!1)};return W(()=>{window.addEventListener("click",I)}),De(()=>{window.removeEventListener("click",I)}),(k,w)=>(i(),b("div",Qe,[e("div",We,[e("div",Xe,[w[2]||(w[2]=e("span",null,"表示数:",-1)),e("div",{class:"relative",ref_key:"dropdownRef",ref:h},[e("button",{onClick:w[0]||(w[0]=L=>y.value=!y.value),class:"w-[60px] flex justify-between items-center px-2 py-1"},[e("span",et,x(l.value),1),w[1]||(w[1]=e("div",{class:"w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-gray-500 hover:border-t-gray-700"},null,-1))]),y.value?(i(),b("div",tt,[e("ul",null,[(i(),b(q,null,Q(g,L=>e("li",{key:L,onClick:$=>A(L),class:"px-4 py-2 hover:bg-gray-100 cursor-pointer"},x(L),9,st)),64))])])):E("",!0)],512),e("div",at,[s(v)>0?(i(),b("span",ot,x(u.value),1)):(i(),b("span",nt,"0")),s(v)>0?(i(),b("span",lt,"-")):E("",!0),s(v)>0?(i(),b("span",rt,x(U.value)+" 件",1)):(i(),b("span",ct,"件")),s(v)>0?(i(),b("span",it,"(全"+x(s(v))+"件)",1)):E("",!0)])]),e("div",ut,[e("button",{onClick:T,disabled:r.value===1||s(v)===0,class:"disabled:opacity-50"},[_(s(ne),{class:"w-4 h-4"})],8,dt),e("button",{onClick:c,disabled:a.value,class:"disabled:opacity-50"},[_(s(Ee),{class:"w-4 h-4"})],8,pt)])])]))}}),vt=F(mt,[["__scopeId","data-v-f974aacb"]]),ft={},_t={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function ht(z,D){return i(),b("svg",_t,D[0]||(D[0]=[e("path",{d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM14.1667 10.8333H5.83333V9.16667H14.1667V10.8333Z",fill:"#343DD6"},null,-1)]))}const gt=F(ft,[["render",ht]]),xt={class:"user-container flex flex-col gap-2 overflow-hidden"},yt={class:"actions flex justify-between items-center"},bt={class:"w-full flex flex-col relative border-l border-r"},kt={class:"table-container overflow-auto border-b"},St={class:"w-full table-fixed"},Ct={class:"bg-[#afeeee] sticky top-0 z-10"},wt={class:"flex items-center justify-center px-4 py-[1px] text-black border-white border-r-2"},$t=["onClick"],Dt={class:""},At=["onDblclick"],Nt={class:"pr-[1px]"},Et={class:"row-sticky px-[5px]"},It={class:"row-sticky px-[5px]"},Ut={class:"px-[5px]"},Lt={class:"px-[5px]"},Mt={class:"px-[5px]"},Rt={class:"px-[5px]"},Pt={class:"px-[5px] text-center"},Tt={class:"px-[5px] text-center"},Vt={class:"px-[5px] text-center"},zt={key:1},Yt={colspan:"9",class:"text-center py-4 text-[#5566da]"},jt=G({__name:"index",emits:["update:pagination","update:sort","getCompanies","selectRow"],setup(z,{emit:D}){const C=X(),v=ie(),{redirectPage:l}=ue(),{toast:r}=le(),g=D,y={1:"利用中",2:"停止中",3:"退会済"},h=[{label:"法人名",width:"10%",isSort:!0,key:"companyName"},{label:"所在地",width:"15%",isSort:!0,key:"companyAddress"},{label:"電話番号",width:"9%",isSort:!0,key:"phoneNumber"},{label:"代表者",width:"9%",isSort:!0,key:"frontPicFamilyName"},{label:"担当者",width:"9%",isSort:!0,key:"picFamilyName"},{label:"メールアドレス",width:"15%",isSort:!0,key:"email"},{label:"介護ソフト",width:"10%",isSort:!0,key:"kaigoSoftware"},{label:"ステータス",width:"9%",isSort:!0,key:"status"},{label:"開始日",width:"9%",isSort:!0,key:"createdAt"}],n=m(1),o=m(""),u=m(!1),U=R(()=>{var t;return((t=C.companyUsers)==null?void 0:t.totalRecord)??0}),A=R(()=>C.isLoadCompanyCustomers),T=R(()=>v.notify),c=m(new Set),a=R(()=>{var t;return c.value=new Set,((t=C.companyUsers)==null?void 0:t.results)??[]}),I=t=>{t?(n.value=0,c.value=new Set(a.value.map(f=>f.id))):(n.value=1,c.value.clear())},k=t=>{c.value.has(t)?c.value.delete(t):c.value.add(t);const f=a.value.length,N=c.value.size;N===0?n.value=1:N===f?n.value=0:n.value===0&&N<f&&(n.value=2)},w=()=>{I(!1)};re(c,()=>{const t=[],f=[],N=$();N?a.value.forEach(P=>{c.value.has(P.id)||t.push(P.id)}):f.push(...c.value),g("selectRow",{exceptionIds:t,checkedIds:f,selectedAll:N})},{deep:!0});const L=t=>t?y[t]:t=0,$=()=>n.value===0||n.value===2,H=({pageIndex:t,pageSize:f})=>{g("update:pagination",{pageIndex:t,pageSize:f})},K=t=>{if(!t.isSort)return;const[f,N]=o.value.split(":"),P=f===t.key?N===j.ASC?j.DESC:"":j.ASC;o.value=P?`${t.key}:${P}`:"",g("update:sort",o.value)},d=()=>{if(c.value.size==0){Z("destructive","削除する会社を選択してください");return}u.value=!0},S=async()=>{var N;C.isLoadCompanyCustomers=!0,u.value=!1;const t=Array.from(c.value);if(await C.bulkDelete(t),(N=T.value)!=null&&N.message){C.isLoadCompanyCustomers=!1;return}Z("default","会社を削除しました"),g("getCompanies")},M=()=>{if(c.value.size==0){Z("destructive","編集する会社を選択してください");return}if(c.value.size>1){Z("destructive","編集する会社を1つだけ選択してください");return}l(`/customer/detail/${c.value.values().next().value}`)},J=t=>{l(`/customer/detail/${t}`)},Z=(t,f)=>{r({description:f,variant:t,duration:1e3})},de=t=>{let f="bg-white dark:bg-gray-800 h-10 hover:cursor-pointer ";if(!t||t==1)return f+="hover:bg-[#afe7ee47]";if(t==2)return f+="!bg-[#feffce]";if(t==3)return f+="!bg-[#515151] text-white"};return(t,f)=>{const N=vt,P=ae,pe=gt,me=Ie,ve=Se,fe=Ue;return i(),b("div",xt,[e("div",yt,[e("div",{class:"flex"},[e("span",{class:"px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer",onClick:M},"編集"),e("span",{class:"px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer",onClick:d},"削除")]),_(N,{class:"mr-10",length:s(U),"onUpdate:pagination":H},null,8,["length"])]),e("div",bt,[e("div",kt,[e("table",St,[e("thead",Ct,[e("tr",null,[e("th",null,[e("span",wt,[s(n)===0||s(n)===1?(i(),V(P,{key:0,id:"select-all",class:"bg-white flex items-center justify-center mx-4 text-black border border-gray-300",checked:s(n)===0,"onUpdate:checked":I},null,8,["checked"])):E("",!0),s(n)===2?(i(),V(pe,{key:1,onClick:w})):E("",!0)])]),(i(),b(q,null,Q(h,(p,Y)=>e("th",{class:"py-3",key:Y,style:Ae({width:p.width})},[e("span",{class:se(["flex items-center justify-center px-4 text-black border-white cursor-pointer",Y<h.length-1?"border-r-2":""]),onClick:ee=>K(p)},[O(x(p.label)+" ",1),s(o)&&s(o).split(":")[1]==("SORT"in t?t.SORT:s(j)).ASC&&p.key==s(o).split(":")[0]?(i(),V(s(ye),{key:0,width:"12",height:"12",class:"ml-1 hover:text-[#5566da]"})):E("",!0),s(o)&&s(o).split(":")[1]==("SORT"in t?t.SORT:s(j)).DESC&&p.key==s(o).split(":")[0]?(i(),V(s(be),{key:1,width:"12",height:"12",class:"ml-1 hover:text-[#5566da]"})):E("",!0)],10,$t)],4)),64))])]),e("tbody",Dt,[s(a).length>0?(i(!0),b(q,{key:0},Q(s(a),(p,Y)=>(i(),b("tr",{key:Y,class:se([Y<s(a).length-1?"border-b":"",de(p.status)]),onDblclick:ee=>J(p.id)},[e("td",Nt,[_(P,{id:"select-row-"+p.id,class:"m-auto bg-white flex items-center justify-center text-black border border-gray-300",checked:s(c).has(p.id),"onUpdate:checked":ee=>k(p.id)},null,8,["id","checked","onUpdate:checked"])]),e("td",Et,[e("span",null,x(p.companyName),1)]),e("td",It,[e("span",null,x(p.companyAddress),1)]),e("td",Ut,[e("span",null,x(p.phoneNumber),1)]),e("td",Lt,[e("span",null,x(p.frontPicFamilyName??"")+" "+x(p.frontPicGivenName??""),1)]),e("td",Mt,[e("span",null,x(p.picFamilyName??"")+" "+x(p.picGivenName??""),1)]),e("td",Rt,[e("span",null,x(p.email??""),1)]),e("td",Pt,[e("span",null,x(p.kaigoSoftware),1)]),e("td",Tt,[e("span",null,x(L(p.status)),1)]),e("td",Vt,[e("span",null,x(("formatDate"in t?t.formatDate:s(ke))(p.createdAt,"YYYY-MM-DD")),1)])],42,At))),128)):E("",!0),s(a).length==0&&s(A)==!1?(i(),b("tr",zt,[e("td",Yt,x(("MESSAGES"in t?t.MESSAGES:s(Ne)).EMPTY),1)])):E("",!0)])])]),s(A)?(i(),V(me,{key:0})):E("",!0)]),_(ve,{class:"top-[5px]"}),_(fe,{"is-open":s(u),onClose:f[0]||(f[0]=p=>u.value=!1),onUpdate:S},null,8,["is-open"])])}}}),Bt=F(jt,[["__scopeId","data-v-1b8f8ca5"]]),Ot={class:"user-list px-4"},Gt={class:"body-content flex py-4 w-full gap-2"},ns=G({__name:"index",setup(z){const D=m(1),C=m(30),v=m(""),l=m(""),r=m([]),g=m(""),y=m([]),h=m([]),n=m(!1),o=X(),u=ie(),{toast:U}=le(),A=async()=>{let d=`page=${D.value}&pageSize=${C.value}`;v.value&&(d+=`&sort=${v.value}`),r.value.length&&r.value.forEach(S=>{d+=`&status=${S}`}),g.value&&(d+=`&companyName=${g.value}`),o.searchCompanies(d)},T=async({pageIndex:d,pageSize:S})=>{D.value=d,C.value=S,await A()},c=async d=>{v.value=d,await A()},a=async d=>{const[S,M]=d.split("/");l.value=`${S}-${M}-01`},I=async d=>{r.value=d,await A()},k=async d=>{g.value=d,await A()},w=({exceptionIds:d,checkedIds:S,selectedAll:M})=>{y.value=d,h.value=S,n.value=M},L=async()=>{H(0)},$=async()=>{H(1)},H=async d=>{var M;if(!n.value&&h.value.length===0){K("顧客を選択してください","destructive");return}const S={exportType:d,checkedListId:h.value,exceptionListId:y.value,isSelectedAll:n.value,targetYearMonth:l.value,status:r.value,companyName:g.value};await o.exportCompanyCustomer(S),(M=u.notify)!=null&&M.message||K("顧客情報をエクスポートしました","default")},K=(d,S)=>{U({description:d,variant:S,duration:1e3})};return W(async()=>{await A()}),(d,S)=>{const M=qe,J=Bt;return i(),b("div",Ot,[S[0]||(S[0]=e("div",{class:"header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},[e("span",{class:"text-base font-bold"},"顧客管理")],-1)),_(M,{"onUpdate:changeDate":a,"onUpdate:changeStatus":I,onSearchCompanyName:k,onExportCustomer:L,onExportStatusCompany:$}),e("div",Gt,[_(J,{class:"w-full","onUpdate:pagination":T,"onUpdate:sort":c,onGetCompanies:A,onSelectRow:w})])])}}});export{ns as default};
