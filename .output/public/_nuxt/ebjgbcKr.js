import{t as Me,o as Le,s as u,m as i,f as Te,u as Ve,_ as Be,a as je,c as He,F as qe,b as ze}from"./CgKiSFj5.js";import{_ as re,a as pe,b as me,c as de,d as fe,e as ue,f as _e}from"./BLZZ78SC.js";import{m as ee,r as P,g as se,o as C,v as G,w as t,b as e,d as $,a as s,c as J,E as xe,G as ve,t as Z,p as r,H as le,y as Ye,n as Je,z as Qe,A as te,I as We,F as l,M as U,T as Y,q as x,x as ne,B as Xe,C as Ze,D as ea}from"./DUmNgXA6.js";import{_ as aa}from"./Df-7hjyU.js";import{_ as ta}from"./BJir1rd4.js";import{_ as sa}from"./483JTOK4.js";import{_ as la,a as oa,b as na,c as ia,d as ca}from"./CYhdYBa4.js";import{_ as ra}from"./CaZnUcNN.js";import{_ as pa}from"./krd8VUne.js";import{_ as ge}from"./DlAUqK2U.js";import{_ as ma}from"./CIxr4kGZ.js";import{u as da}from"./CMJhSrBd.js";import{u as fa}from"./B_Osu9wg.js";import{L as ua}from"./vwPXLrpp.js";import{E as ie,a as ce}from"./DdZYqTce.js";import"./66zM7t99.js";import"./Cr589Knb.js";const _a={class:"border border-gray-300 p-4 min-h-[150px]"},xa={class:"flex flex-col gap-2"},va=ee({__name:"confirm-update-customer",props:{isOpen:{type:Boolean},fields:{}},emits:["close","update"],setup(q,{emit:j}){const v=q,F=P(v.isOpen);se(()=>v.isOpen,S=>{F.value=S});const D=j,A=()=>{D("close")},h=()=>{D("update")};return(S,w)=>{const k=re,M=pe,I=me,L=de,R=fe,E=ue,T=_e;return C(),G(T,{open:r(F),"onUpdate:open":w[0]||(w[0]=K=>le(F)?F.value=K:null)},{default:t(()=>[e(E,null,{default:t(()=>[e(M,{class:"flex flex-col gap-4"},{default:t(()=>[e(k,{class:"text-sm text-center"},{default:t(()=>w[1]||(w[1]=[$("変更の確認")])),_:1}),e(k,{class:"text-sm font-normal"},{default:t(()=>w[2]||(w[2]=[$("以下の内容を変更します。よろしいですか？")])),_:1})]),_:1}),s("div",_a,[s("ul",xa,[(C(!0),J(xe,null,ve(S.fields,K=>(C(),J("li",{key:K},Z(K),1))),128))])]),e(R,{class:"flex !flex-col gap-4"},{default:t(()=>[e(I,{class:"flex self-center min-w-[120px]",onClick:h},{default:t(()=>w[3]||(w[3]=[$("変更")])),_:1}),e(L,{class:"flex self-center border border-gray-300 min-w-[120px]",onClick:A},{default:t(()=>w[4]||(w[4]=[$("キャンセル")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),ga=ee({__name:"execution-confirm",props:{isOpen:{type:Boolean},activeStatus:{}},emits:["close","update"],setup(q,{emit:j}){const v=q,F=P(v.isOpen);se(()=>v.isOpen,A=>{F.value=A});const D=j;return(A,h)=>{const S=re,w=pe,k=me,M=de,I=fe,L=ue,R=_e;return C(),G(R,{open:r(F),"onUpdate:open":h[2]||(h[2]=E=>le(F)?F.value=E:null),class:"delete-modal"},{default:t(()=>[e(L,null,{default:t(()=>[e(w,{class:"flex flex-col gap-6 items-center mb-4"},{default:t(()=>[e(S,{class:"text-sm"},{default:t(()=>h[3]||(h[3]=[$("実行の確認")])),_:1}),e(S,{class:"text-sm font-normal"},{default:t(()=>[$(Z(A.activeStatus===1?"顧客の利用を停止します。よろしいですか？":"顧客の利用を再開します。よろしいですか？"),1)]),_:1})]),_:1}),e(I,{class:"flex !flex-col gap-5"},{default:t(()=>[e(k,{class:"flex self-center min-w-[120px]",onClick:h[0]||(h[0]=E=>D("update"))},{default:t(()=>[$(Z(A.activeStatus===1?"停止":"開始"),1)]),_:1}),e(M,{class:"flex self-center border border-gray-300 min-w-[120px]",onClick:h[1]||(h[1]=E=>D("close"))},{default:t(()=>h[4]||(h[4]=[$("キャンセル")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),ya=ge(ga,[["__scopeId","data-v-98fde63d"]]),ba={class:"login-page flex flex-col !h-[100vh] overflow-hidden relative"},wa={class:"flex justify-between mt-[15px]"},ka={class:"form overflow-y-auto scroll"},Na={class:"flex flex-col w-[900px] gap-[25px] pb-[20px]"},Pa={class:"company flex flex-col gap-5"},ha={class:"relative w-[82%] !m-[0px]"},Ca={class:"relative w-[82%] !m-[0px]"},Fa={class:"information flex flex-col gap-5"},Sa={class:"relative flex !m-[0px] gap-[20px]"},$a={class:"relative w-[82%] !m-[0px]"},Da={class:"flex flex-col gap-[15px] w-[82%]"},Aa={class:"flex gap-5 items-center !m-[0px]"},Ka={class:"pic-position flex gap-5 items-center w-[50%]"},Ua={class:"pic-name flex items-center gap-5 w-[50%]"},Ga={class:"relative !m-[0px]"},Ia={class:"relative !m-[0px]"},Ra={class:"flex gap-5 items-center !m-[0px]"},Ea={class:"pic-name flex items-center gap-5 w-[50%]"},Oa={class:"relative !m-[0px]"},Ma={class:"relative !m-[0px]"},La={class:"flex flex-col gap-[15px] w-[82%]"},Ta={class:"flex gap-5 items-center !m-[0px]"},Va={class:"pic-position flex gap-5 items-center w-[50%]"},Ba={class:"pic-name flex items-center gap-5 w-[50%]"},ja={class:"relative !m-[0px]"},Ha={class:"relative !m-[0px]"},qa={class:"flex gap-5 items-center !m-[0px]"},za={class:"pic-name flex items-center gap-5 w-[50%]"},Ya={class:"relative !m-[0px]"},Ja={class:"relative !m-[0px]"},Qa={class:"contact flex flex-col gap-6"},Wa={class:"relative w-[40%] !m-[0px]"},Xa={class:"relative w-[82%] !m-[0px]"},Za={class:"relative w-[82%] !m-[0px]"},et={class:"relative"},at={class:"relative w-[82%] !m-[0px]"},tt={class:"relative w-[82%] !m-[0px]"},st={class:"relative w-[82%] !m-[0px]"},lt={class:"relative w-[82%] !m-[0px]"},ot={class:"relative"},nt={class:"relative w-[82%] !m-[0px]"},it={class:"relative w-[82%] !m-[0px] flex gap-2 items-center"},ct={class:"flex max-w-[900px] justify-between py-[20px]"},rt={class:"flex gap-5"},pt={class:"flex gap-5"},mt=ee({__name:"index",setup(q){const j=Ye(),v=Je(),F=Qe(),D=da(),{redirectPage:A}=fa(),h=P(),S=P(""),w=P(!1),k=P(!1),M=P(0),I=P(!1),L=P(!1),R=P(!1),E=P({}),T=P([]),K=P(!1),Q=P(!1),V=P(!1),z=/^[\u30A0-\u30FF]+$/,ye=te(()=>{var c;return(c=j.masterData)==null?void 0:c.kaigoSoftwares}),H=te(()=>D.companyUser),be=te(()=>T.value.length==0);We(async()=>{if(k.value=!0,S.value=F.params.id,!S)return A("/customer");await D.getCompanyById(Number(S.value)),H.value&&(we(),M.value=H.value.status),k.value=!1});const we=()=>{var c;if(H.value){const a=H.value,N=(c=H.value)==null?void 0:c.paymentMethodInfo;d("companyName",a.companyName),d("companyNameKana",a.companyNameKana),d("companyPostCode",a.companyPostCode),d("companyAddress",a.companyAddress),d("phoneNumber",a.phoneNumber),d("picFamilyName",a.picFamilyName),d("picFamilyNameKana",a.picFamilyNameKana),d("picGivenName",a.picGivenName),d("picGivenNameKana",a.picGivenNameKana),d("picPosition",a.picPosition),d("frontPicFamilyName",a.frontPicFamilyName),d("frontPicFamilyNameKana",a.frontPicFamilyNameKana),d("frontPicGivenName",a.frontPicGivenName),d("frontPicGivenNameKana",a.frontPicGivenNameKana),d("frontPicPosition",a.frontPicPosition),d("kaipokeUserId",a.kaipokeUserId),d("kaipokeUserPassword",a.kaipokeUserPassword),d("kaipokeCompanyId",a.kaipokeCompanyId),d("kaigoSoftware",a.kaigoSoftware.toString()),d("paymentMethod",(N==null?void 0:N.ccDisplayName)??"未登録"),d("email",a.email),V.value=a.keepLastPlanContentFlg==1,E.value={...O}}},ke=Me(Le({companyName:u(i(l.companyName)).min(1,i(l.companyName)).max(250,U.ERR011),companyNameKana:u(i(l.companyNameKana)).min(1,i(l.companyNameKana)).regex(z,{message:U.ERR005}),companyPostCode:u(i(l.companyPostCode)).min(1,l.companyPostCode),companyAddress:u(i(l.companyAddress)).min(1,l.companyAddress),frontPicPosition:u(i(l.frontPicPosition)).min(1,l.frontPicPosition),frontPicFamilyName:u(i(l.frontPicFamilyName)).min(1,l.frontPicFamilyName),frontPicGivenName:u(i(l.frontPicGivenName)).min(1,l.frontPicGivenName),frontPicFamilyNameKana:u(i(l.frontPicFamilyNameKana)).min(1,i(l.frontPicFamilyNameKana)).regex(z,{message:U.ERR005}),frontPicGivenNameKana:u(i(l.frontPicGivenNameKana)).min(1,i(l.frontPicGivenNameKana)).regex(z,{message:U.ERR005}),picPosition:u(i(l.picPosition)).min(1,l.picPosition),picFamilyName:u(i(l.picFamilyName)).min(1,l.picFamilyName),picGivenName:u(i(l.picGivenName)).min(1,l.picGivenName),picFamilyNameKana:u(i(l.picFamilyNameKana)).min(1,i(l.picFamilyNameKana)).regex(z,{message:U.ERR005}),picGivenNameKana:u(i(l.picGivenNameKana)).min(1,i(l.picGivenNameKana)).regex(z,{message:U.ERR005}),phoneNumber:u(i(l.phoneNumber)).min(1,l.phoneNumber),email:u(i(l.email)).min(1,l.email),password:u().min(8,{message:U.ERR007}).optional(),kaigoSoftware:u(Te(U.ERR002,l.kaigoSoftware)).min(1,l.kaigoSoftware),kaipokeCompanyId:u(i(l.kaipokeCompanyId)).min(1,l.kaipokeCompanyId),kaipokeUserId:u(i(l.kaipokeUserId)).min(1,l.kaipokeUserId),kaipokeUserPassword:u(i(l.kaipokeUserPassword)).min(8,{message:U.ERR007}),paymentMethod:u().optional()})),{handleSubmit:Ne,values:O,setFieldValue:d}=Ve({validationSchema:ke}),Pe=()=>{Q.value=!Q.value},he=()=>{K.value=!K.value},Ce=async()=>{const c=O==null?void 0:O.companyPostCode;if(!c){v.setNotify({message:"郵便番号が存在しません。",type:Y.error});return}w.value=!0;const a=await v.searchPostalCode(c);if(a!=null&&a.data){const{prefecture:N,city:B}=a.data,g=`${N} ${B}`;d("companyAddress",g),h.value=a.data}else v.setNotify({message:"郵便番号が存在しません。",type:Y.error});w.value=!1};se([O,V],()=>{var a;T.value=[],Object.keys(O).forEach(N=>{if(O[N]!==E.value[N]&&N!=="confirmPassword"){const B=l[N];T.value.push(B)}});const c=V.value?1:0;((a=H.value)==null?void 0:a.keepLastPlanContentFlg)!==c&&T.value.push(l.keepLastPlanContentFlg)},{deep:!0});const oe=Ne(async c=>{L.value=!0},({errors:c})=>{const a=Object.values(c)[0];v.setNotify({message:a,type:Y.error})}),Fe=async c=>{var g;k.value=!0;const a={...O},N=a.password;delete a.password;const B={...a,keepLastPlanContentFlg:V.value?1:0,kaigoSoftware:Number(a.kaigoSoftware),...N&&{newPassword:N},...c&&{status:c}};await D.updateCompanyById(Number(S.value),B),(g=v.notify)!=null&&g.message||ae("会社情報を更新しました。"),k.value=!1},Se=async()=>{var a;k.value=!0,I.value=!1;const c=[Number(S.value)];if(!c.length){v.setNotify({message:"会社を削除できません。",type:Y.error}),k.value=!1;return}await D.bulkDelete(c),k.value=!1,(a=v.notify)!=null&&a.message||ae("会社を削除しました。")},$e=async()=>{var a;k.value=!0,R.value=!1;const c=M.value===1?2:1;await D.updateStatusCompanyUser(Number(S.value),{status:c}),(a=v.notify)!=null&&a.message||ae("会社情報を更新しました。"),k.value=!1},ae=c=>{v.setNotify({message:c,type:Y.success}),setTimeout(()=>{A("/customer")},500)};return(c,a)=>{const N=Be,B=va,g=aa,_=ta,f=je,p=He,m=qe,W=ze,X=sa,De=la,Ae=oa,Ke=na,Ue=ia,Ge=ca,Ie=ra,Re=pa,Ee=ya,Oe=ma;return C(),J("div",ba,[s("div",wa,[e(N,{class:"pl-[64px]"})]),e(B,{isOpen:r(L),fields:r(T),onClose:a[0]||(a[0]=o=>L.value=!1),onUpdate:Fe},null,8,["isOpen","fields"]),s("form",{class:"register flex flex-col gap-[25px] pl-[64px] pt-[10px] pb-[15px]",onSubmit:a[5]||(a[5]=(...o)=>r(oe)&&r(oe)(...o))},[s("div",ka,[s("div",Na,[e(g,{label:"必須項目です",position:"left",class:"mb-[10px]"}),s("div",Pa,[e(m,{name:"companyName"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"法人名",class:"w-[160px]"}),s("div",ha,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"companyNameKana"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"フリガナ",class:"w-[160px]"}),s("div",Ca,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(W,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1})]),a[23]||(a[23]=s("div",{class:"space"},null,-1)),s("div",Fa,[e(m,{name:"companyPostCode"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"郵便番号",class:"w-[160px] flex"}),s("div",Sa,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(X,{onClick:Ce,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:t(()=>[r(w)?(C(),G(r(ua),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):ne("",!0),a[8]||(a[8]=$(" 郵便番号から入力 "))]),_:1})])]),_:2},1024)]),_:1}),e(m,{name:"companyAddress"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"会社所在地",class:"w-[160px]"}),s("div",$a,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"frontPicPosition"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"代表者",class:"w-[160px] flex pt-[14px] items-baseline"}),s("div",Da,[s("div",Aa,[s("div",Ka,[a[9]||(a[9]=s("span",{class:"label w-[35px]"},"役職",-1)),e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),s("div",Ua,[a[10]||(a[10]=s("span",{class:"label flex w-[16%]"},"お名前",-1)),e(m,{name:"frontPicFamilyName"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ga,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(m,{name:"frontPicGivenName"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ia,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),s("div",Ra,[a[12]||(a[12]=s("div",{class:"pic-position flex gap-5 items-center w-[50%]"},null,-1)),s("div",Ea,[a[11]||(a[11]=s("span",{class:"label flex w-[16%]"},"フリガナ",-1)),e(m,{name:"frontPicFamilyNameKana"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Oa,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(m,{name:"frontPicGivenNameKana"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ma,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1}),e(m,{name:"picPosition"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"ご担当者",class:"w-[160px] flex pt-[14px] items-baseline"}),s("div",La,[s("div",Ta,[s("div",Va,[a[13]||(a[13]=s("span",{class:"label w-[35px]"},"役職",-1)),e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),s("div",Ba,[a[14]||(a[14]=s("span",{class:"label flex w-[16%]"},"お名前",-1)),e(m,{name:"picFamilyName"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",ja,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(m,{name:"picGivenName"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ha,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),s("div",qa,[a[16]||(a[16]=s("div",{class:"pic-position flex gap-5 items-center w-[50%]"},null,-1)),s("div",za,[a[15]||(a[15]=s("span",{class:"label flex w-[16%]"},"フリガナ",-1)),e(m,{name:"picFamilyNameKana"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ya,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(m,{name:"picGivenNameKana"},{default:t(({componentField:y,errors:b})=>[e(p,{class:"flex gap-5"},{default:t(()=>[s("div",Ja,[e(f,null,{default:t(()=>[e(_,x({type:"text",class:"placeholder:flex placeholder:text-center text-center"},y,{class:{"border-red-500":b.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1})]),a[24]||(a[24]=s("div",{class:"space"},null,-1)),s("div",Qa,[e(m,{name:"phoneNumber"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"電話番号",class:"w-[160px]"}),s("div",Wa,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"email"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"メールアドレス",class:"w-[160px]"}),s("div",Xa,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"]),a[17]||(a[17]=s("span",{class:"absolute text-[10px] pt-[2px]"},"認証済みのメールアドレス",-1))]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"password"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[a[18]||(a[18]=s("div",{class:"w-[160px]"},[s("span",null,"パスワード")],-1)),s("div",Za,[e(f,null,{default:t(()=>[s("div",et,[e(_,x({type:r(Q)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),s("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:Pe,"aria-label":"Toggle password visibility"},[r(Q)?(C(),G(r(ce),{key:1,class:"h-5 w-3.5 text-black"})):(C(),G(r(ie),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(W,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(m,{name:"kaigoSoftware"},{default:t(({componentField:o,errors:n,meta:y})=>[e(p,{class:"relative flex gap-5"},{default:t(()=>[e(g,{label:"介護ソフト選択",class:"w-[160px]"}),s("div",at,[e(f,null,{default:t(()=>[e(Ge,Xe(Ze(o)),{default:t(()=>[e(Ae,{class:ea({"border-red-500":n.length&&!o.modelValue})},{default:t(()=>[e(De,{placeholder:"Select an option"})]),_:2},1032,["class"]),e(Ue,null,{default:t(()=>[(C(!0),J(xe,null,ve(r(ye),b=>(C(),G(Ke,{value:`${b.id}`},{default:t(()=>[$(Z(b.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040),e(W,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"kaipokeCompanyId"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"カイポケ法人ID",class:"w-[160px]"}),s("div",tt,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"kaipokeUserId"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"カイポケユーザーID",class:"w-[160px]"}),s("div",st,[e(f,null,{default:t(()=>[e(_,x({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"kaipokeUserPassword"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[e(g,{label:"カイポケパスワード",class:"w-[160px]"}),s("div",lt,[e(f,null,{default:t(()=>[s("div",ot,[e(_,x({type:r(K)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),s("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:he,"aria-label":"Toggle password visibility"},[r(K)?(C(),G(r(ce),{key:1,class:"h-5 w-3.5 text-black"})):(C(),G(r(ie),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(W,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(m,{name:"paymentMethod"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[a[19]||(a[19]=s("span",{class:"flex items-center w-[160px]"},"決済方法",-1)),s("div",nt,[e(f,null,{default:t(()=>[e(_,x({disabled:"",class:"bg-[#ccc]",type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(m,{name:"remainOldPlan"},{default:t(({componentField:o,errors:n})=>[e(p,{class:"flex gap-5"},{default:t(()=>[a[22]||(a[22]=s("span",{class:"w-[160px] flex items-center"},"前回の計画書内容を保持する",-1)),s("div",it,[a[20]||(a[20]=s("span",null,"OFF",-1)),e(Ie,{checked:r(V),"onUpdate:checked":a[1]||(a[1]=y=>le(V)?V.value=y:null)},null,8,["checked"]),a[21]||(a[21]=s("span",null,"ON",-1))])]),_:1})]),_:1})])])]),s("div",ct,[s("div",rt,[e(X,{type:"button",variant:"cancel_btn",class:"flex self-center",onClick:a[2]||(a[2]=o=>r(A)("/customer"))},{default:t(()=>a[25]||(a[25]=[$(" キャンセル ")])),_:1}),s("div",{class:"delete flex self-center underline cursor-pointer",onClick:a[3]||(a[3]=()=>I.value=!0)}," 削除 ")]),s("div",pt,[e(X,{type:"submit",class:"flex self-center",disabled:r(be)},{default:t(()=>a[26]||(a[26]=[$(" 変更 ")])),_:1},8,["disabled"]),e(X,{type:"button",variant:"export",class:"delete flex self-center",onClick:a[4]||(a[4]=()=>R.value=!0)},{default:t(()=>a[27]||(a[27]=[$(" 停止・開始 ")])),_:1})])])],32),e(Re,{"is-open":r(I),onClose:a[6]||(a[6]=o=>I.value=!1),onUpdate:Se},null,8,["is-open"]),e(Ee,{"is-open":r(R),"active-status":r(M),onClose:a[7]||(a[7]=o=>R.value=!1),onUpdate:$e},null,8,["is-open","active-status"]),r(k)?(C(),G(Oe,{key:0})):ne("",!0)])}}}),dt=ge(mt,[["__scopeId","data-v-0d061566"]]),ft={class:"user-list px-4"},At=ee({__name:"[id]",setup(q){return(j,v)=>{const F=dt;return C(),J("div",ft,[v[0]||(v[0]=s("div",{class:"header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},[s("span",{class:"text-base font-bold"},"顧客詳細")],-1)),e(F)])}}});export{At as default};
