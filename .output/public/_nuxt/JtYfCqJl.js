import{t as ie,o as re,s as m,m as c,f as pe,u as de,_ as me,a as fe,c as xe,F as _e,b as ue}from"./C46O_gbA.js";import{_ as ge}from"./BCrQPMtU.js";import{_ as ve}from"./rNsDV_hC.js";import{_ as ye}from"./CAGg0RHQ.js";import{_ as be,a as he,b as we,c as Ne,d as ke}from"./BqC_mPR6.js";import{_ as Pe}from"./Ck4NlDRN.js";import{_ as Fe}from"./CaOAIKb2.js";import{m as j,y as Se,n as Ce,z as Re,r as k,A as Ee,F as t,M as h,T as E,o as y,c as M,a as s,b as e,w as a,q as f,p as g,v as w,x as D,d as K,B as Ke,C as $e,D as Ge,E as Ie,G as Ae,t as Ue,H as Me}from"./Bgnwh5r4.js";import{u as Te}from"./Cpee-8z-.js";import{u as Ve}from"./C8Ve72Sq.js";import{L as Le}from"./BQRBkTT0.js";import{E as B,a as O}from"./Brm1ShhH.js";import{_ as De}from"./DlAUqK2U.js";import"./ySqNkGWT.js";import"./D0psvkxm.js";const Be={class:"login-page flex flex-col !h-[100vh] overflow-hidden relative"},Oe={class:"flex justify-between mt-[15px]"},je={class:"form overflow-y-auto scroll"},qe={class:"flex flex-col w-[900px] gap-[25px] pb-[20px]"},ze={class:"company flex flex-col gap-5"},He={class:"relative w-[82%] !m-[0px]"},Ye={class:"relative w-[82%] !m-[0px]"},Je={class:"information flex flex-col gap-5"},Qe={class:"relative flex !m-[0px] gap-[20px]"},We={class:"relative w-[82%] !m-[0px]"},Xe={class:"flex flex-col gap-[15px] w-[82%]"},Ze={class:"flex gap-5 items-center !m-[0px]"},ea={class:"pic-position flex gap-5 items-center w-[90%]"},aa={class:"pic-name flex items-center gap-5"},sa={class:"relative !m-[0px]"},la={class:"relative !m-[0px]"},ta={class:"flex gap-5 items-center !m-[0px]"},oa={class:"pic-name flex items-center gap-5"},na={class:"relative !m-[0px]"},ca={class:"relative !m-[0px]"},ia={class:"flex flex-col gap-[15px] w-[82%]"},ra={class:"flex gap-5 items-center !m-[0px]"},pa={class:"pic-position flex gap-5 items-center w-[90%]"},da={class:"pic-name flex items-center gap-5"},ma={class:"relative !m-[0px]"},fa={class:"relative !m-[0px]"},xa={class:"flex gap-5 items-center !m-[0px]"},_a={class:"pic-name flex items-center gap-5"},ua={class:"relative !m-[0px]"},ga={class:"relative !m-[0px]"},va={class:"contact flex flex-col gap-6"},ya={class:"relative w-[40%] !m-[0px]"},ba={class:"relative w-[82%] !m-[0px]"},ha={class:"relative w-[82%] !m-[0px]"},wa={class:"relative"},Na={class:"relative w-[82%] !m-[0px]"},ka={class:"relative w-[82%] !m-[0px]"},Pa={class:"relative w-[82%] !m-[0px]"},Fa={class:"relative w-[82%] !m-[0px]"},Sa={class:"relative"},Ca={class:"relative w-[82%] !m-[0px]"},Ra={class:"relative w-[82%] !m-[0px] flex gap-2 items-center"},Ea={class:"flex max-w-[900px] justify-between py-[20px]"},Ka={class:"flex gap-5"},$a=j({__name:"index",setup(q){const T=Se(),b=Ce();Re();const $=Te(),{redirectPage:V}=Ve(),F=k(!1),z=k(),S=k(!1),P=/^[\u30A0-\u30FF]+$/,H=Ee(()=>{var v;return(v=T.masterData)==null?void 0:v.kaigoSoftwares}),G=k(!1),I=k(!1),C=k(!1),Y=ie(re({companyName:m(c(t.companyName)).min(1,c(t.companyName)),companyNameKana:m(c(t.companyNameKana)).min(1,c(t.companyNameKana)).regex(P,{message:h.ERR005}),companyPostCode:m(c(t.companyPostCode)).min(1,t.companyPostCode),companyAddress:m(c(t.companyAddress)).min(1,t.companyAddress),frontPicPosition:m(c(t.frontPicPosition)).min(1,t.frontPicPosition),frontPicFamilyName:m(c(t.frontPicFamilyName)).min(1,t.frontPicFamilyName),frontPicGivenName:m(c(t.frontPicGivenName)).min(1,t.frontPicGivenName),frontPicFamilyNameKana:m(c(t.frontPicFamilyNameKana)).min(1,c(t.frontPicFamilyNameKana)).regex(P,{message:h.ERR005}),frontPicGivenNameKana:m(c(t.frontPicGivenNameKana)).min(1,c(t.frontPicGivenNameKana)).regex(P,{message:h.ERR005}),picPosition:m(c(t.picPosition)).min(1,t.picPosition),picFamilyName:m(c(t.picFamilyName)).min(1,t.picFamilyName),picGivenName:m(c(t.picGivenName)).min(1,t.picGivenName),picFamilyNameKana:m(c(t.picFamilyNameKana)).min(1,c(t.picFamilyNameKana)).regex(P,{message:h.ERR005}),picGivenNameKana:m(c(t.picGivenNameKana)).min(1,c(t.picGivenNameKana)).regex(P,{message:h.ERR005}),phoneNumber:m(c(t.phoneNumber)).min(1,t.phoneNumber),email:m(c(t.email)).min(1,t.email).email({message:h.ERR004}),password:m(c(t.password)).min(8,{message:h.ERR007}),kaigoSoftware:m(pe(h.ERR002,t.kaigoSoftware)).min(1,t.kaigoSoftware),kaipokeCompanyId:m(c(t.kaipokeCompanyId)).min(1,t.kaipokeCompanyId),kaipokeUserId:m(c(t.kaipokeUserId)).min(1,t.kaipokeUserId),kaipokeUserPassword:m(c(t.kaipokeUserPassword)).min(8,{message:h.ERR007}),paymentMethod:m(c(t.paymentMethod)).min(1,t.paymentMethod)})),{handleSubmit:J,values:A,setFieldValue:Q}=de({validationSchema:Y}),W=()=>{S.value=!S.value},X=()=>{F.value=!F.value},Z=async()=>{const v=A==null?void 0:A.companyPostCode;if(!v){b.setNotify({message:"郵便番号が存在しません。",type:E.error});return}I.value=!0;const l=await b.searchPostalCode(v);if(l!=null&&l.data){const{prefecture:N,city:u}=l.data,i=`${N} ${u}`;Q("companyAddress",i),z.value=l.data}else b.setNotify({message:"郵便番号が存在しません。",type:E.error});I.value=!1},L=J(async v=>{var N;G.value=!0;const l={...v,keepLastPlanContentFlg:C.value?1:0};await $.createNewCompany(l),G.value=!1,(N=b.notify)!=null&&N.message||ee("新しい顧客の成功を生み出す。")},({errors:v})=>{const l=Object.values(v)[0];b.setNotify({message:l,type:E.error})}),ee=v=>{b.setNotify({message:v,type:E.success}),setTimeout(()=>{V("/customer")},500)};return(v,l)=>{const N=me,u=ge,i=ve,d=fe,r=xe,p=_e,R=ue,U=ye,ae=be,se=he,le=we,te=Ne,oe=ke,ne=Pe,ce=Fe;return y(),M("div",Be,[s("div",Oe,[e(N,{class:"pl-[64px]"})]),s("form",{class:"register flex flex-col gap-[25px] pl-[64px] pt-[10px] pb-[15px]",onSubmit:l[2]||(l[2]=(...o)=>g(L)&&g(L)(...o))},[s("div",je,[s("div",qe,[e(u,{label:"必須項目です",position:"left",class:"mb-[10px]"}),s("div",ze,[e(p,{name:"companyName"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"法人名",class:"w-[160px]"}),s("div",He,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"companyNameKana"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"フリガナ",class:"w-[160px]"}),s("div",Ye,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(R,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1})]),l[15]||(l[15]=s("div",{class:"space"},null,-1)),s("div",Je,[e(p,{name:"companyPostCode"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"郵便番号",class:"w-[160px] flex"}),s("div",Qe,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(U,{onClick:Z,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:a(()=>[g(I)?(y(),w(g(Le),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):D("",!0),l[3]||(l[3]=K(" 郵便番号から入力 "))]),_:1})])]),_:2},1024)]),_:1}),e(p,{name:"companyAddress"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"会社所在地",class:"w-[160px]"}),s("div",We,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"frontPicPosition"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"代表者",class:"w-[160px] flex pt-[14px] items-baseline"}),s("div",Xe,[s("div",Ze,[s("div",ea,[l[4]||(l[4]=s("span",{class:"label w-[35px]"},"役職",-1)),e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),s("div",aa,[l[5]||(l[5]=s("span",{class:"label flex w-[54%]"},"お名前",-1)),e(p,{name:"frontPicFamilyName"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",sa,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"frontPicGivenName"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",la,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),s("div",ta,[l[7]||(l[7]=s("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),s("div",oa,[l[6]||(l[6]=s("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(p,{name:"frontPicFamilyNameKana"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",na,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"frontPicGivenNameKana"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",ca,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1}),e(p,{name:"picPosition"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"ご担当者",class:"w-[160px] flex pt-[14px] items-baseline"}),s("div",ia,[s("div",ra,[s("div",pa,[l[8]||(l[8]=s("span",{class:"label w-[35px]"},"役職",-1)),e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),s("div",da,[l[9]||(l[9]=s("span",{class:"label flex w-[54%]"},"お名前",-1)),e(p,{name:"picFamilyName"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",ma,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"picGivenName"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",fa,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),s("div",xa,[l[11]||(l[11]=s("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),s("div",_a,[l[10]||(l[10]=s("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(p,{name:"picFamilyNameKana"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",ua,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"picGivenNameKana"},{default:a(({componentField:x,errors:_})=>[e(r,{class:"flex gap-5"},{default:a(()=>[s("div",ga,[e(d,null,{default:a(()=>[e(i,f({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":_.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1})]),l[16]||(l[16]=s("div",{class:"space"},null,-1)),s("div",va,[e(p,{name:"phoneNumber"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"電話番号",class:"w-[160px]"}),s("div",ya,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"email"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"メールアドレス",class:"w-[160px]"}),s("div",ba,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"password"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"パスワード",class:"w-[160px]"}),s("div",ha,[e(d,null,{default:a(()=>[s("div",wa,[e(i,f({type:g(F)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),s("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2","aria-label":"Toggle password visibility",onClick:X},[g(F)?(y(),w(g(O),{key:1,class:"h-5 w-3.5 text-black"})):(y(),w(g(B),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(R,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(p,{name:"kaigoSoftware"},{default:a(({componentField:o,errors:n,meta:x})=>[e(r,{class:"relative flex gap-5"},{default:a(()=>[e(u,{label:"介護ソフト選択",class:"w-[160px]"}),s("div",Na,[e(d,null,{default:a(()=>[e(oe,Ke($e(o)),{default:a(()=>[e(se,{class:Ge({"border-red-500":n.length&&!o.modelValue})},{default:a(()=>[e(ae,{placeholder:"Select an option"})]),_:2},1032,["class"]),e(te,null,{default:a(()=>[(y(!0),M(Ie,null,Ae(g(H),_=>(y(),w(le,{value:`${_.id}`},{default:a(()=>[K(Ue(_.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040),e(R,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"kaipokeCompanyId"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"カイポケ法人ID",class:"w-[160px]"}),s("div",ka,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"kaipokeUserId"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"カイポケユーザーID",class:"w-[160px]"}),s("div",Pa,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"kaipokeUserPassword"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"カイポケパスワード",class:"w-[160px]"}),s("div",Fa,[e(d,null,{default:a(()=>[s("div",Sa,[e(i,f({type:g(S)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),s("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:W,"aria-label":"Toggle password visibility"},[g(S)?(y(),w(g(O),{key:1,class:"h-5 w-3.5 text-black"})):(y(),w(g(B),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(R,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(p,{name:"paymentMethod"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[e(u,{label:"決済方法",class:"w-[160px]"}),s("div",Ca,[e(d,null,{default:a(()=>[e(i,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"remainOldPlan"},{default:a(({componentField:o,errors:n})=>[e(r,{class:"flex gap-5"},{default:a(()=>[l[14]||(l[14]=s("span",{class:"w-[160px] flex items-center"},"前回の計画書内容を保持する",-1)),s("div",Ra,[l[12]||(l[12]=s("span",null,"OFF",-1)),e(ne,{checked:g(C),"onUpdate:checked":l[0]||(l[0]=x=>Me(C)?C.value=x:null)},null,8,["checked"]),l[13]||(l[13]=s("span",null,"ON",-1))])]),_:1})]),_:1})])])]),s("div",Ea,[s("div",Ka,[e(U,{type:"button",variant:"cancel_btn",class:"flex self-center",onClick:l[1]||(l[1]=o=>g(V)("/customer"))},{default:a(()=>l[17]||(l[17]=[K(" キャンセル ")])),_:1}),e(U,{variant:"export",class:"delete flex self-center"},{default:a(()=>l[18]||(l[18]=[K(" 登録 ")])),_:1})])])],32),g(G)?(y(),w(ce,{key:0})):D("",!0)])}}}),Ga=De($a,[["__scopeId","data-v-769d4421"]]),Ia={class:"user-list px-4"},Qa=j({__name:"index",setup(q){return(T,b)=>{const $=Ga;return y(),M("div",Ia,[b[0]||(b[0]=s("div",{class:"header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},[s("span",{class:"text-base font-bold"},"顧客管理")],-1)),e($)])}}});export{Qa as default};
