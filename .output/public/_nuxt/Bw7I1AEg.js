import{t as Le,m as r,f as Ve,u as Be,_ as He,a as je,c as qe,F as Ye,b as ze}from"./BxW6nvQ3.js";import{_ as me,a as de,b as fe,c as ue,d as _e,e as xe,f as ve}from"./DSSkqGoL.js";import{m as ee,r as P,g as oe,o as N,v as I,w as t,b as e,d as S,a as s,c as q,E as se,G as le,t as Q,p as c,I as ne,y as Je,n as Qe,z as We,A as te,J as Xe,F as l,M as T,T as J,q as _,x as re,B as Ze,C as ea,D as aa,H as ta}from"./CwaHjqsY.js";import{_ as sa}from"./Dw0ZtYE0.js";import{_ as la}from"./BjOEEvWd.js";import{_ as oa}from"./Dt4zAQGF.js";import{_ as na,a as ia,b as ra,c as ca,d as pa}from"./Beum52QC.js";import{_ as ma,a as da}from"./CdOZaBNq.js";import{_ as fa}from"./BLOkiLjy.js";import{_ as ua}from"./DCHhB4mu.js";import{_ as ge}from"./DlAUqK2U.js";import{_ as _a}from"./CX5XgV5U.js";import{o as xa,s as x}from"./C7MCtxAn.js";import{g as va}from"./vAbjMd8Z.js";import{u as ga}from"./FlD-LFSw.js";import{u as ya}from"./f69o9pGR.js";import{L as ba}from"./tpx4wnjJ.js";import{E as ce,a as pe}from"./DTcWWnd_.js";import"./DvsDmjal.js";import"./B3hmjMpz.js";const wa={class:"border border-gray-300 p-4 min-h-[150px]"},Na={class:"flex flex-col gap-2"},ka=ee({__name:"confirm-update-customer",props:{isOpen:{type:Boolean},fields:{}},emits:["close","update"],setup(Y,{emit:H}){const y=Y,C=P(y.isOpen);oe(()=>y.isOpen,F=>{C.value=F});const $=H,A=()=>{$("close")},h=()=>{$("update")};return(F,w)=>{const k=me,M=de,E=fe,G=ue,O=_e,U=xe,L=ve;return N(),I(L,{open:c(C),"onUpdate:open":w[0]||(w[0]=K=>ne(C)?C.value=K:null)},{default:t(()=>[e(U,null,{default:t(()=>[e(M,{class:"flex flex-col gap-4"},{default:t(()=>[e(k,{class:"text-sm text-center"},{default:t(()=>w[1]||(w[1]=[S("変更の確認")])),_:1}),e(k,{class:"text-sm font-normal"},{default:t(()=>w[2]||(w[2]=[S("以下の内容を変更します。よろしいですか？")])),_:1})]),_:1}),s("div",wa,[s("ul",Na,[(N(!0),q(se,null,le(F.fields,K=>(N(),q("li",{key:K},Q(K),1))),128))])]),e(O,{class:"flex !flex-col gap-4"},{default:t(()=>[e(E,{class:"flex self-center min-w-[120px]",onClick:h},{default:t(()=>w[3]||(w[3]=[S("変更")])),_:1}),e(G,{class:"flex self-center border border-gray-300 min-w-[120px]",onClick:A},{default:t(()=>w[4]||(w[4]=[S("キャンセル")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Pa=ee({__name:"execution-confirm",props:{isOpen:{type:Boolean},activeStatus:{}},emits:["close","update"],setup(Y,{emit:H}){const y=Y,C=P(y.isOpen);oe(()=>y.isOpen,A=>{C.value=A});const $=H;return(A,h)=>{const F=me,w=de,k=fe,M=ue,E=_e,G=xe,O=ve;return N(),I(O,{open:c(C),"onUpdate:open":h[2]||(h[2]=U=>ne(C)?C.value=U:null),class:"delete-modal"},{default:t(()=>[e(G,null,{default:t(()=>[e(w,{class:"flex flex-col gap-6 items-center mb-4"},{default:t(()=>[e(F,{class:"text-sm"},{default:t(()=>h[3]||(h[3]=[S("実行の確認")])),_:1}),e(F,{class:"text-sm font-normal"},{default:t(()=>[S(Q(A.activeStatus===1?"顧客の利用を停止します。よろしいですか？":"顧客の利用を再開します。よろしいですか？"),1)]),_:1})]),_:1}),e(E,{class:"flex !flex-col gap-5"},{default:t(()=>[e(k,{class:"flex self-center min-w-[120px]",onClick:h[0]||(h[0]=U=>$("update"))},{default:t(()=>[S(Q(A.activeStatus===1?"停止":"開始"),1)]),_:1}),e(M,{class:"flex self-center border border-gray-300 min-w-[120px]",onClick:h[1]||(h[1]=U=>$("close"))},{default:t(()=>h[4]||(h[4]=[S("キャンセル")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),ha=ge(Pa,[["__scopeId","data-v-98fde63d"]]),Ca={class:"login-page flex flex-col !h-[100vh] overflow-hidden relative"},Fa={class:"flex justify-between mt-[15px]"},Sa={class:"form overflow-y-auto scroll"},$a={class:"flex flex-col w-[900px] gap-[25px] pb-[20px]"},Da={class:"company flex flex-col gap-5"},Aa={class:"relative w-[82%] !m-[0px]"},Ia={class:"relative w-[82%] !m-[0px]"},Ka={class:"information flex flex-col gap-5"},Ea={class:"relative flex !m-[0px] gap-[20px]"},Ga={class:"relative w-[82%] !m-[0px]"},Oa={class:"flex flex-col gap-[15px] w-[82%]"},Ua={class:"flex gap-5 items-center !m-[0px]"},Ra={class:"pic-position flex gap-5 items-center w-[50%]"},Ta={class:"pic-name flex items-center gap-5 w-[50%]"},Ma={class:"relative !m-[0px]"},La={class:"relative !m-[0px]"},Va={class:"flex gap-5 items-center !m-[0px]"},Ba={class:"pic-name flex items-center gap-5 w-[50%]"},Ha={class:"relative !m-[0px]"},ja={class:"relative !m-[0px]"},qa={class:"flex flex-col gap-[15px] w-[82%]"},Ya={class:"flex gap-5 items-center !m-[0px]"},za={class:"pic-position flex gap-5 items-center w-[50%]"},Ja={class:"pic-name flex items-center gap-5 w-[50%]"},Qa={class:"relative !m-[0px]"},Wa={class:"relative !m-[0px]"},Xa={class:"flex gap-5 items-center !m-[0px]"},Za={class:"pic-name flex items-center gap-5 w-[50%]"},et={class:"relative !m-[0px]"},at={class:"relative !m-[0px]"},tt={class:"contact flex flex-col gap-6"},st={class:"relative w-[40%] !m-[0px]"},lt={class:"relative w-[82%] !m-[0px]"},ot={class:"relative w-[82%] !m-[0px]"},nt={class:"relative"},it={class:"relative w-[82%] !m-[0px]"},rt={class:"relative w-[82%] !m-[0px]"},ct={class:"relative w-[82%] !m-[0px]"},pt={class:"relative w-[82%] !m-[0px]"},mt={class:"relative"},dt={class:"relative w-[82%] !m-[0px]"},ft={class:"relative w-[82%] !m-[0px] flex gap-2 items-center"},ut={class:"flex max-w-[900px] justify-between py-[20px]"},_t={class:"flex gap-5"},xt={class:"flex gap-5"},vt=ee({__name:"index",setup(Y){const H=Je(),y=Qe(),C=We(),$=ga(),{redirectPage:A}=ya(),h=P(),F=P(""),w=P(!1),k=P(!1),M=P(0),E=P(!1),G=P(!1),O=P(!1),U=P({}),L=P([]),K=P(!1),W=P(!1),V=P(!1),z=/^[\u30A0-\u30FF]+$/,ye=te(()=>{var i;return(i=H.masterData)==null?void 0:i.kaigoSoftwares}),j=te(()=>$.companyUser),be=te(()=>L.value.length==0);Xe(async()=>{if(k.value=!0,F.value=C.params.id,!F)return A("/customer");await $.getCompanyById(Number(F.value)),j.value&&(we(),M.value=j.value.status),k.value=!1});const we=()=>{var i;if(j.value){const a=j.value;(i=j.value)==null||i.paymentMethodInfo,f("companyName",a.companyName),f("companyNameKana",a.companyNameKana),f("companyPostCode",a.companyPostCode),f("companyAddress",a.companyAddress),f("phoneNumber",a.phoneNumber),f("picFamilyName",a.picFamilyName),f("picFamilyNameKana",a.picFamilyNameKana),f("picGivenName",a.picGivenName),f("picGivenNameKana",a.picGivenNameKana),f("picPosition",a.picPosition),f("frontPicFamilyName",a.frontPicFamilyName),f("frontPicFamilyNameKana",a.frontPicFamilyNameKana),f("frontPicGivenName",a.frontPicGivenName),f("frontPicGivenNameKana",a.frontPicGivenNameKana),f("frontPicPosition",a.frontPicPosition),f("kaipokeUserId",a.kaipokeUserId),f("kaipokeUserPassword",a.kaipokeUserPassword),f("kaipokeCompanyId",a.kaipokeCompanyId),f("paymentMethod",a.paymentMethod),f("kaigoSoftware",a.kaigoSoftware.toString()),f("email",a.email),V.value=a.keepLastPlanContentFlg==1,U.value={...R}}},Ne=Le(xa({companyName:x(r(l.companyName)).min(1,r(l.companyName)).max(255,T.ERR011),companyNameKana:x(r(l.companyNameKana)).min(1,r(l.companyNameKana)).regex(z,{message:T.ERR005}),companyPostCode:x(r(l.companyPostCode)).min(1,l.companyPostCode),companyAddress:x(r(l.companyAddress)).min(1,l.companyAddress),frontPicPosition:x(r(l.frontPicPosition)).min(1,l.frontPicPosition),frontPicFamilyName:x(r(l.frontPicFamilyName)).min(1,l.frontPicFamilyName),frontPicGivenName:x(r(l.frontPicGivenName)).min(1,l.frontPicGivenName),frontPicFamilyNameKana:x(r(l.frontPicFamilyNameKana)).min(1,r(l.frontPicFamilyNameKana)).regex(z,{message:T.ERR005}),frontPicGivenNameKana:x(r(l.frontPicGivenNameKana)).min(1,r(l.frontPicGivenNameKana)).regex(z,{message:T.ERR005}),picPosition:x(r(l.picPosition)).min(1,l.picPosition),picFamilyName:x(r(l.picFamilyName)).min(1,l.picFamilyName),picGivenName:x(r(l.picGivenName)).min(1,l.picGivenName),picFamilyNameKana:x(r(l.picFamilyNameKana)).min(1,r(l.picFamilyNameKana)).regex(z,{message:T.ERR005}),picGivenNameKana:x(r(l.picGivenNameKana)).min(1,r(l.picGivenNameKana)).regex(z,{message:T.ERR005}),phoneNumber:x(r(l.phoneNumber)).min(1,l.phoneNumber),email:x(r(l.email)).min(1,l.email),password:va().optional(),kaigoSoftware:x(Ve(T.ERR002,l.kaigoSoftware)).min(1,l.kaigoSoftware),kaipokeCompanyId:x(r(l.kaipokeCompanyId)).min(1,l.kaipokeCompanyId),kaipokeUserId:x(r(l.kaipokeUserId)).min(1,l.kaipokeUserId),kaipokeUserPassword:x(r(l.kaipokeUserPassword)).min(8,{message:T.ERR007}),paymentMethod:x().nullable().optional()})),{handleSubmit:ke,values:R,setFieldValue:f}=Be({validationSchema:Ne}),Pe=()=>{W.value=!W.value},he=()=>{K.value=!K.value},Ce=async()=>{const i=R==null?void 0:R.companyPostCode;if(!i){y.setNotify({message:"郵便番号が存在しません。",type:J.error});return}w.value=!0;const a=await y.searchPostalCode(i);if(a!=null&&a.data){const{prefecture:D,city:B}=a.data,g=`${D} ${B}`;f("companyAddress",g),h.value=a.data}else y.setNotify({message:"郵便番号が存在しません。",type:J.error});w.value=!1};oe([R,V],()=>{var a;L.value=[],Object.keys(R).forEach(D=>{if(R[D]!==U.value[D]&&D!=="confirmPassword"){const B=l[D];L.value.push(B)}});const i=V.value?1:0;((a=j.value)==null?void 0:a.keepLastPlanContentFlg)!==i&&L.value.push(l.keepLastPlanContentFlg)},{deep:!0});const ie=ke(async i=>{G.value=!0},({errors:i})=>{const a=Object.values(i)[0];y.setNotify({message:a,type:J.error})}),Fe=async i=>{var g;k.value=!0;const a={...R},D=a.password;delete a.password;const B={...a,keepLastPlanContentFlg:V.value?1:0,kaigoSoftware:Number(a.kaigoSoftware),...D&&{newPassword:D},...i&&{status:i}};await $.updateCompanyById(Number(F.value),B).finally(()=>{k.value=!1,G.value=!1}),(g=y.notify)!=null&&g.message||ae("会社情報を更新しました。")},Se=async()=>{var a;k.value=!0,E.value=!1;const i=[Number(F.value)];if(!i.length){y.setNotify({message:"会社を削除できません。",type:J.error}),k.value=!1;return}await $.bulkDelete(i),k.value=!1,(a=y.notify)!=null&&a.message||ae("会社を削除しました。")},$e=async()=>{var a;k.value=!0,O.value=!1;const i=M.value===1?2:1;await $.updateStatusCompanyUser(Number(F.value),{status:i}),(a=y.notify)!=null&&a.message||ae("会社情報を更新しました。"),k.value=!1},ae=i=>{y.setNotify({message:i,type:J.success}),setTimeout(()=>{A("/customer")},500)};return(i,a)=>{const D=He,B=ka,g=sa,v=la,m=je,p=qe,d=Ye,X=ze,Z=oa,De=na,Ae=ia,Ie=ra,Ke=ca,Ee=pa,Ge=ma,Oe=da,Ue=fa,Re=ua,Te=ha,Me=_a;return N(),q("div",Ca,[s("div",Fa,[e(D,{class:"pl-[64px]"})]),e(B,{isOpen:c(G),fields:c(L),onClose:a[0]||(a[0]=o=>G.value=!1),onUpdate:Fe},null,8,["isOpen","fields"]),s("form",{class:"register flex flex-col gap-[25px] pl-[64px] pt-[10px] pb-[15px]",onSubmit:a[5]||(a[5]=(...o)=>c(ie)&&c(ie)(...o))},[s("div",Sa,[s("div",$a,[e(g,{label:"必須項目です",position:"left",class:"mb-[10px]"}),s("div",Da,[e(d,{name:"companyName"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"法人名",class:"w-[160px]"}),s("div",Aa,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"companyNameKana"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"フリガナ",class:"w-[160px]"}),s("div",Ia,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(X,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1})]),a[22]||(a[22]=s("div",{class:"space"},null,-1)),s("div",Ka,[e(d,{name:"companyPostCode"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"郵便番号",class:"w-[160px] flex"}),s("div",Ea,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(Z,{onClick:Ce,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:t(()=>[c(w)?(N(),I(c(ba),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):re("",!0),a[8]||(a[8]=S(" 郵便番号から入力 "))]),_:1})])]),_:2},1024)]),_:1}),e(d,{name:"companyAddress"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"会社所在地",class:"w-[160px]"}),s("div",Ga,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"frontPicPosition"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"代表者",class:"w-[160px] flex pt-[14px] items-baseline"}),s("div",Oa,[s("div",Ua,[s("div",Ra,[a[9]||(a[9]=s("span",{class:"label w-[35px]"},"役職",-1)),e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),s("div",Ta,[a[10]||(a[10]=s("span",{class:"label flex w-[19%]"},"お名前",-1)),e(d,{name:"frontPicFamilyName"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ma,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"frontPicGivenName"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",La,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),s("div",Va,[a[12]||(a[12]=s("div",{class:"pic-position flex gap-5 items-center w-[50%]"},null,-1)),s("div",Ba,[a[11]||(a[11]=s("span",{class:"label flex w-[19%]"},"フリガナ",-1)),e(d,{name:"frontPicFamilyNameKana"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ha,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"frontPicGivenNameKana"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",ja,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1}),e(d,{name:"picPosition"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"ご担当者",class:"w-[160px] flex pt-[14px] items-baseline"}),s("div",qa,[s("div",Ya,[s("div",za,[a[13]||(a[13]=s("span",{class:"label w-[35px]"},"役職",-1)),e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),s("div",Ja,[a[14]||(a[14]=s("span",{class:"label flex w-[19%]"},"お名前",-1)),e(d,{name:"picFamilyName"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Qa,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"picGivenName"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Wa,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),s("div",Xa,[a[16]||(a[16]=s("div",{class:"pic-position flex gap-5 items-center w-[50%]"},null,-1)),s("div",Za,[a[15]||(a[15]=s("span",{class:"label flex w-[19%]"},"フリガナ",-1)),e(d,{name:"picFamilyNameKana"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",et,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"picGivenNameKana"},{default:t(({componentField:u,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",at,[e(m,null,{default:t(()=>[e(v,_({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},u,{class:{"border-red-500":b.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1})]),a[23]||(a[23]=s("div",{class:"space"},null,-1)),s("div",tt,[e(d,{name:"phoneNumber"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"電話番号",class:"w-[160px]"}),s("div",st,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"email"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"メールアドレス",class:"w-[160px]"}),s("div",lt,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"]),a[17]||(a[17]=s("span",{class:"absolute text-[10px] pt-[2px]"},"認証済みのメールアドレス",-1))]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"password"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[a[18]||(a[18]=s("div",{class:"w-[160px]"},[s("span",null,"パスワード")],-1)),s("div",ot,[e(m,null,{default:t(()=>[s("div",nt,[e(v,_({type:c(W)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),s("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:Pe,"aria-label":"Toggle password visibility"},[c(W)?(N(),I(c(pe),{key:1,class:"h-5 w-3.5 text-black"})):(N(),I(c(ce),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(X,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(d,{name:"kaigoSoftware"},{default:t(({componentField:o,errors:n,meta:u})=>[e(p,{class:"relative flex gap-5"},{default:t(()=>[e(g,{label:"介護ソフト選択",class:"w-[160px]"}),s("div",it,[e(m,null,{default:t(()=>[e(Ee,Ze(ea(o)),{default:t(()=>[e(Ae,{class:aa({"border-red-500":n.length&&!o.modelValue})},{default:t(()=>[e(De,{placeholder:"Select an option"})]),_:2},1032,["class"]),e(Ke,null,{default:t(()=>[(N(!0),q(se,null,le(c(ye),b=>(N(),I(Ie,{value:`${b.id}`},{default:t(()=>[S(Q(b.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040),e(X,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeCompanyId"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"カイポケ法人ID",class:"w-[160px]"}),s("div",rt,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeUserId"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"カイポケユーザーID",class:"w-[160px]"}),s("div",ct,[e(m,null,{default:t(()=>[e(v,_({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeUserPassword"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"カイポケパスワード",class:"w-[160px]"}),s("div",pt,[e(m,null,{default:t(()=>[s("div",mt,[e(v,_({type:c(K)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),s("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:he,"aria-label":"Toggle password visibility"},[c(K)?(N(),I(c(pe),{key:1,class:"h-5 w-3.5 text-black"})):(N(),I(c(ce),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(X,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(d,{name:"paymentMethod"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"決済方法",class:"w-[160px]"}),s("div",dt,[e(m,null,{default:t(()=>[e(Oe,_({class:"flex gap-5"},o),{default:t(()=>[(N(!0),q(se,null,le("PAYMENT_METHOD_OPTIONS_LIST"in i?i.PAYMENT_METHOD_OPTIONS_LIST:c(ta),u=>(N(),I(p,{class:"flex items-center space-y-0 gap-x-3"},{default:t(()=>[e(m,null,{default:t(()=>[e(Ge,{value:u.type},null,8,["value"])]),_:2},1024),s("span",null,Q(u.value),1)]),_:2},1024))),256))]),_:2},1040)]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"remainOldPlan"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[a[21]||(a[21]=s("span",{class:"w-[160px] flex items-center"},"前回の計画書内容を保持する",-1)),s("div",ft,[a[19]||(a[19]=s("span",null,"OFF",-1)),e(Ue,{checked:c(V),"onUpdate:checked":a[1]||(a[1]=u=>ne(V)?V.value=u:null)},null,8,["checked"]),a[20]||(a[20]=s("span",null,"ON",-1))])]),_:1})]),_:1})])])]),s("div",ut,[s("div",_t,[e(Z,{type:"button",variant:"cancel_btn",class:"flex self-center",onClick:a[2]||(a[2]=o=>c(A)("/customer"))},{default:t(()=>a[24]||(a[24]=[S(" キャンセル ")])),_:1}),s("div",{class:"delete flex self-center underline cursor-pointer",onClick:a[3]||(a[3]=()=>E.value=!0)}," 削除 ")]),s("div",xt,[e(Z,{type:"submit",class:"flex self-center",disabled:c(be)},{default:t(()=>a[25]||(a[25]=[S(" 変更 ")])),_:1},8,["disabled"]),e(Z,{type:"button",variant:"export",class:"delete flex self-center",onClick:a[4]||(a[4]=()=>O.value=!0)},{default:t(()=>a[26]||(a[26]=[S(" 停止・開始 ")])),_:1})])])],32),e(Re,{"is-open":c(E),onClose:a[6]||(a[6]=o=>E.value=!1),onUpdate:Se},null,8,["is-open"]),e(Te,{"is-open":c(O),"active-status":c(M),onClose:a[7]||(a[7]=o=>O.value=!1),onUpdate:$e},null,8,["is-open","active-status"]),c(k)?(N(),I(Me,{key:0})):re("",!0)])}}}),gt=ge(vt,[["__scopeId","data-v-3ffe6936"]]),yt={class:"user-list px-4"},Mt=ee({__name:"[id]",setup(Y){return(H,y)=>{const C=gt;return N(),q("div",yt,[y[0]||(y[0]=s("div",{class:"header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},[s("span",{class:"text-base font-bold"},"顧客詳細")],-1)),e(C)])}}});export{Mt as default};
