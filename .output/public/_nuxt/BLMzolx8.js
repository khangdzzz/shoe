import{_ as le}from"./BU0Xm4fz.js";import{_ as H}from"./VWipsjpD.js";import{_ as J}from"./uQZuqk6e.js";import{C as q,j as re,V as ie,S as ce,u as de,A as ue,a as pe,f as me,_ as _e}from"./B8EG3cWW.js";import{C as ve}from"./CYbLzFEL.js";import{m as L,r as _,G as Q,g as fe,o as m,c as h,a as e,b as d,w as V,p as o,d as j,t as v,A as W,K as he,L as ge,E as C,h as xe,y as B,z as F,x as P,n as ye,N as be,J as K,S as M,v as O}from"./CbXXyIg_.js";import{_ as E}from"./DlAUqK2U.js";import{C as ke}from"./CqBdQjCs.js";import{_ as we}from"./C76HxtJI.js";import{u as X,_ as Se}from"./cHj4cOA2.js";import{u as $e}from"./D3j4oGQf.js";import"./DPST4t1e.js";import"./D0OBRSg9.js";const Ce={class:"date-search flex items-center gap-3"},De={class:"flex items-center gap-2"},Ne={class:"border border-gray-300 h-[30px] flex items-center justify-between px-4 bg-white rounded cursor-pointer"},Ue=L({__name:"date",emits:["update:selectedDate"],setup(R,{emit:w}){const f=w,i=_((()=>{const t=new Date,n=t.getFullYear(),p=t.getMonth()+1;return{year:n,month:p}})()),l=_(""),x=()=>{const{year:t,month:n}=i.value;l.value=`${t}/${n.toString().padStart(2,"0")}`,f("update:selectedDate",l.value)},g=t=>{let{year:n,month:p}=i.value;p+=t,p>12?(p=1,n+=1):p<1&&(p=12,n-=1),r.value={year:n,month:p-1}};Q(()=>{x()});const r=_({year:i.value.year,month:i.value.month-1});return fe(r,()=>{i.value={year:r.value.year,month:r.value.month+1},x()}),(t,n)=>{const p=J;return m(),h("div",Ce,[e("div",De,[d(p,{variant:"default",class:"bg-[#bfbfbf] text-black hover:bg-[#c4b3b3]","left-icon":"search",onClick:n[0]||(n[0]=b=>g(-1))},{default:V(()=>[d(o(q),{class:"w-4 h-4"}),n[2]||(n[2]=j(" 前月 "))]),_:1}),d(o(ie),{modelValue:o(r),"onUpdate:modelValue":n[1]||(n[1]=b=>W(r)?r.value=b:null),"month-picker":"","auto-apply":"","format-locale":o(re),format:"E"},{trigger:V(()=>[e("div",Ne,[e("span",null,v(o(l)),1),d(o(ve),{class:"w-4 h-4"})])]),_:1},8,["modelValue","format-locale"])])])}}}),Ae=E(Ue,[["__scopeId","data-v-0df9fc12"]]),Ie={class:"search flex flex-col gap-8 min-h-[100px]"},Pe={class:"company flex max-sm:flex-col gap-5"},Re={class:"relative items-center font-medium lg:w-[450px]"},Te={class:"absolute start-0 inset-y-0 flex items-center justify-center px-2"},ze={class:"active flex gap-5"},Me={class:"flex items-center gap-2"},Ve={class:"flex items-center gap-2"},je={class:"flex items-center gap-2"},Le={class:"actions flex max-sm:flex-col gap-5"},Ye={class:"flex gap-5 lg:w-[450px]"},Ee={class:"flex gap-5"},Oe=L({__name:"index",emits:["update:changeDate","update:changeStatus","searchCompanyName"],setup(R,{emit:w}){const f=w,c=_(""),i=_([]),l=_(""),x=r=>{c.value=r,f("update:changeDate",c.value)},g=(r,t)=>{t?i.value.push(r):i.value=i.value.filter(n=>n!==r),f("update:changeStatus",i.value)};return(r,t)=>{const n=le,p=H,b=J,N=Ae;return m(),h("div",Ie,[e("div",Pe,[e("div",Re,[d(n,{id:"search",type:"text",placeholder:"Search...",class:"pl-10 w-[70%]",modelValue:o(l),"onUpdate:modelValue":t[0]||(t[0]=s=>W(l)?l.value=s:null),onKeydown:t[1]||(t[1]=he(s=>f("searchCompanyName",o(l)),["enter"]))},null,8,["modelValue"]),e("span",Te,[d(o(ce),{class:"w-4 h-4"})])]),e("div",ze,[e("div",Me,[d(p,{id:"normal",class:"bg-white","onUpdate:checked":t[2]||(t[2]=s=>g(1,s))}),t[5]||(t[5]=e("span",{for:"suspension",class:"flex text-xs flex-shrink-0"}," 利用中 ",-1))]),e("div",Ve,[d(p,{id:"terms",class:"bg-white","onUpdate:checked":t[3]||(t[3]=s=>g(2,s))}),t[6]||(t[6]=e("span",{for:"terms",class:"flex text-xs flex-shrink-0"}," 停止中 ",-1))]),e("div",je,[d(p,{id:"temporary",class:"bg-white","onUpdate:checked":t[4]||(t[4]=s=>g(3,s))}),t[7]||(t[7]=e("span",{for:"terms",class:"flex text-xs flex-shrink-0"}," 退会済み ",-1))])])]),e("div",Le,[e("div",Ye,[d(b,{variant:"export","left-icon":"search"},{default:V(()=>t[8]||(t[8]=[j(" 新規顧客追加 ")])),_:1}),d(b,{variant:"export","left-icon":"search"},{default:V(()=>t[9]||(t[9]=[j(" 顧客情報出力 ")])),_:1})]),e("div",Ee,[d(N,{"onUpdate:selectedDate":x}),d(b,{variant:"export","left-icon":"search"},{default:V(()=>t[10]||(t[10]=[j(" 利用状況出力 ")])),_:1})])])])}}}),Be=E(Oe,[["__scopeId","data-v-2b970d65"]]),Fe={class:"pagination max-w-[350px]"},Ge={class:"flex items-center gap-5 justify-between"},Ke={class:"flex items-center gap-2"},He={class:"text-center"},Je={key:0,class:"dropdown-content absolute left-0 mt-1 w-full bg-white shadow-xl z-12"},qe=["onClick"],Qe={class:"flex items-center gap-2"},We={key:0,class:"from"},Xe={key:1},Ze={key:2},et={key:3,class:"to"},tt={key:4},st={key:5,class:"total"},at={class:"flex items-center gap-2"},ot=["disabled"],nt=["disabled"],lt=L({__name:"pagination",props:{length:{type:Number,default:100}},emits:["update:pagination"],setup(R,{emit:w}){const f=R,{length:c}=ge(f),i=_("30"),l=_(1),x=[30,100,200],g=_(!1),r=_(null),t=w,n=C(()=>Math.ceil(c.value/parseInt(i.value))),p=C(()=>c.value===0?0:(l.value-1)*parseInt(i.value)+1),b=C(()=>{if(c.value===0)return 0;const S=l.value*parseInt(i.value);return S>c.value?c.value:S}),N=S=>{i.value=S.toString(),l.value=1,g.value=!1,t("update:pagination",{pageIndex:l.value,pageSize:S})},s=()=>{l.value>1&&(l.value--,t("update:pagination",{pageIndex:l.value,pageSize:parseInt(i.value)}))},y=()=>{l.value<n.value&&(l.value++,t("update:pagination",{pageIndex:l.value,pageSize:parseInt(i.value)}))},k=C(()=>l.value>=n.value||c.value===0),U=S=>{r.value&&!r.value.contains(S.target)&&(g.value=!1)};return Q(()=>{window.addEventListener("click",U)}),xe(()=>{window.removeEventListener("click",U)}),(S,D)=>(m(),h("div",Fe,[e("div",Ge,[e("div",Ke,[D[2]||(D[2]=e("span",null,"表示数:",-1)),e("div",{class:"relative",ref_key:"dropdownRef",ref:r},[e("button",{onClick:D[0]||(D[0]=A=>g.value=!g.value),class:"w-[60px] flex justify-between items-center px-2 py-1"},[e("span",He,v(i.value),1),D[1]||(D[1]=e("div",{class:"w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-gray-500 hover:border-t-gray-700"},null,-1))]),g.value?(m(),h("div",Je,[e("ul",null,[(m(),h(B,null,F(x,A=>e("li",{key:A,onClick:G=>N(A),class:"px-4 py-2 hover:bg-gray-100 cursor-pointer"},v(A),9,qe)),64))])])):P("",!0)],512),e("div",Qe,[o(c)>0?(m(),h("span",We,v(p.value),1)):(m(),h("span",Xe,"0")),o(c)>0?(m(),h("span",Ze,"-")):P("",!0),o(c)>0?(m(),h("span",et,v(b.value)+" 件",1)):(m(),h("span",tt,"件")),o(c)>0?(m(),h("span",st,"(全"+v(o(c))+"件)",1)):P("",!0)])]),e("div",at,[e("button",{onClick:s,disabled:l.value===1||o(c)===0,class:"disabled:opacity-50"},[d(o(q),{class:"w-4 h-4"})],8,ot),e("button",{onClick:y,disabled:k.value,class:"disabled:opacity-50"},[d(o(ke),{class:"w-4 h-4"})],8,nt)])])]))}}),rt=E(lt,[["__scopeId","data-v-f974aacb"]]),it={class:"user-container flex flex-col gap-2 overflow-hidden"},ct={class:"actions flex justify-between items-center"},dt={class:"w-full flex flex-col relative border-l border-r"},ut={class:"table-container overflow-auto border-b"},pt={class:"w-full table-fixed"},mt={class:"bg-[#afeeee] sticky top-0 z-10"},_t={class:"flex items-center justify-center px-4 py-[1px] text-black border-white border-r-2"},vt=["onClick"],ft={class:""},ht={class:"border-r border-[#52525200]"},gt={class:"row-sticky px-[5px]"},xt={class:"row-sticky px-[5px]"},yt={class:"px-[5px]"},bt={class:"px-[5px]"},kt={class:"px-[5px]"},wt={class:"px-[5px]"},St={class:"px-[5px] text-center"},$t={class:"px-[5px] text-center"},Ct={class:"px-[5px] text-center"},Dt=L({__name:"index",emits:["update:pagination","update:sort","getCompanies"],setup(R,{emit:w}){const f=X(),c=ye(),{redirectPage:i}=$e(),{toast:l}=de(),x=w,g={1:"利用中",2:"停止中",3:"退会済み"},r=[{label:"法人名",width:"10%",isSort:!0,key:"companyName"},{label:"所在地",width:"15%",isSort:!0,key:"companyAddress"},{label:"電話番号",width:"9%",isSort:!0,key:"phoneNumber"},{label:"代表者",width:"9%",isSort:!0,key:"frontPicFamilyName"},{label:"担当者",width:"9%",isSort:!0,key:"picFamilyName"},{label:"メールアドレス",width:"15%",isSort:!0,key:"email"},{label:"介護ソフト",width:"10%",isSort:!0,key:"kaigoSoftware"},{label:"ステータス",width:"9%",isSort:!0,key:"status"},{label:"開始日",width:"9%",isSort:!0,key:"createdAt"}],t=_(""),n=_(!1),p=C(()=>{var a;return((a=f.companyUsers)==null?void 0:a.totalRecord)??0}),b=C(()=>f.isLoadCompanyCustomers),N=C(()=>c.notify),s=_(new Set),y=C(()=>k.value.length>0&&s.value.size===k.value.length),k=C(()=>{var a;return s.value=new Set,((a=f.companyUsers)==null?void 0:a.results)??[]}),U=()=>{y.value?s.value.clear():s.value=new Set(k.value.map(a=>a.id))},S=a=>{s.value.has(a)?s.value.delete(a):s.value.add(a)},D=a=>a?g[a]:a=0,A=({pageIndex:a,pageSize:$})=>{x("update:pagination",{pageIndex:a,pageSize:$})},G=a=>{if(!a.isSort)return;const[$,I]=t.value.split(":"),T=$===a.key?I===M.ASC?M.DESC:"":M.ASC;t.value=T?`${a.key}:${T}`:"",x("update:sort",t.value)},Z=()=>{if(s.value.size==0){Y("destructive","削除する会社を選択してください");return}n.value=!0},ee=async()=>{var I;f.isLoadCompanyCustomers=!0,n.value=!1;const a=Array.from(s.value);if(await f.bulkDelete(a),(I=N.value)!=null&&I.message){f.isLoadCompanyCustomers=!1;return}Y("default","会社を削除しました"),x("getCompanies")},te=()=>{if(s.value.size==0){Y("destructive","編集する会社を選択してください");return}if(s.value.size>1){Y("destructive","編集する会社を1つだけ選択してください");return}i(`/customer/detail/${s.value.values().next().value}`)},Y=(a,$)=>{l({description:$,variant:a,duration:1e3})};return(a,$)=>{const I=rt,T=H,se=we,ae=_e,oe=Se;return m(),h("div",it,[e("div",ct,[e("div",{class:"flex"},[e("span",{class:"px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer",onClick:te},"編集"),e("span",{class:"px-5 py-1 border-l-2 border-[#e2e2e2] cursor-pointer",onClick:Z},"削除")]),d(I,{class:"mr-10",length:o(p),"onUpdate:pagination":A},null,8,["length"])]),e("div",dt,[e("div",ut,[e("table",pt,[e("thead",mt,[e("tr",null,[e("th",null,[e("span",_t,[d(T,{id:"select-all",class:"bg-white flex items-center justify-center mx-4 text-black border border-gray-300",checked:o(y),"onUpdate:checked":U},null,8,["checked"])])]),(m(),h(B,null,F(r,(u,z)=>e("th",{class:"py-3",key:z,style:be({width:u.width})},[e("span",{class:K(["flex items-center justify-center px-4 text-black border-white cursor-pointer",z<r.length-1?"border-r-2":""]),onClick:ne=>G(u)},[j(v(u.label)+" ",1),o(t)&&o(t).split(":")[1]==("SORT"in a?a.SORT:o(M)).ASC&&u.key==o(t).split(":")[0]?(m(),O(o(ue),{key:0,width:"12",height:"12",class:"ml-1 hover:text-[#5566da]"})):P("",!0),o(t)&&o(t).split(":")[1]==("SORT"in a?a.SORT:o(M)).DESC&&u.key==o(t).split(":")[0]?(m(),O(o(pe),{key:1,width:"12",height:"12",class:"ml-1 hover:text-[#5566da]"})):P("",!0)],10,vt)],4)),64))])]),e("tbody",ft,[(m(!0),h(B,null,F(o(k),(u,z)=>(m(),h("tr",{key:z,class:K(["bg-white dark:bg-gray-800 h-10 hover:cursor-pointer hover:bg-[#afe7ee47]",[z<o(k).length-1?"border-b":""]])},[e("td",ht,[d(T,{id:"select-row-"+u.id,class:"m-auto bg-white flex items-center justify-center text-black border border-gray-300",checked:o(s).has(u.id),"onUpdate:checked":ne=>S(u.id)},null,8,["id","checked","onUpdate:checked"])]),e("td",gt,[e("span",null,v(u.companyName),1)]),e("td",xt,[e("span",null,v(u.companyAddress),1)]),e("td",yt,[e("span",null,v(u.phoneNumber),1)]),e("td",bt,[e("span",null,v(u.frontPicFamilyName??"")+" "+v(u.frontPicGivenName??""),1)]),e("td",kt,[e("span",null,v(u.picFamilyName??"")+" "+v(u.picGivenName??""),1)]),e("td",wt,[e("span",null,v(u.email??""),1)]),e("td",St,[e("span",null,v(u.kaigoSoftware),1)]),e("td",$t,[e("span",null,v(D(u.status)),1)]),e("td",Ct,[e("span",null,v(("formatDate"in a?a.formatDate:o(me))(u.createdAt,"YYYY-MM-DD")),1)])],2))),128))])])]),o(b)?(m(),O(se,{key:0})):P("",!0)]),d(ae,{class:"top-[5px]"}),d(oe,{"is-open":o(n),onClose:$[0]||($[0]=u=>n.value=!1),onUpdate:ee},null,8,["is-open"])])}}}),Nt=E(Dt,[["__scopeId","data-v-bd8eb077"]]),Ut={class:"user-list px-4"},At={class:"body-content flex py-4 w-full gap-2"},Ft=L({__name:"index",setup(R){const w=_(1),f=_(30),c=_(""),i=_(""),l=_([]),x=_(""),g=X(),r=async()=>{let s=`page=${w.value}&pageSize=${f.value}&createdAt=${i.value}`;c.value&&(s+=`&sort=${c.value}`),l.value.length&&l.value.forEach(y=>{s+=`&status=${y}`}),x.value&&(s+=`&keyword=${x.value}`),g.searchCompanies(s)},t=async({pageIndex:s,pageSize:y})=>{w.value=s,f.value=y,await r()},n=async s=>{c.value=s,await r()},p=async s=>{const[y,k]=s.split("/");i.value=`${y}-${k}-01`,await r()},b=async s=>{l.value=s,await r()},N=async s=>{x.value=s,await r()};return(s,y)=>{const k=Be,U=Nt;return m(),h("div",Ut,[y[0]||(y[0]=e("div",{class:"header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},[e("span",{class:"text-base font-bold"},"顧客管理")],-1)),d(k,{"onUpdate:changeDate":p,"onUpdate:changeStatus":b,onSearchCompanyName:N}),e("div",At,[d(U,{class:"w-full","onUpdate:pagination":t,"onUpdate:sort":n,onGetCompanies:r})])])}}});export{Ft as default};
