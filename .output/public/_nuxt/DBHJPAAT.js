import{_ as He,a as Ye}from"./eXfBK580.js";import{_ as de,a as fe,b as ue,c as _e,d as xe,e as ve,f as ye}from"./Comd-uQG.js";import{m as X,r as f,g as oe,o as d,v as P,w as n,b as e,d as k,a,c as L,D as te,E as ne,t as R,p as o,H as le,y as je,n as qe,I as ze,z as ee,J as Je,F as l,M as Qe,T as Y,x as W,q as j,A as We,B as Xe,C as Ze,G as es}from"./CJQ02Qb0.js";import{_ as ss}from"./qLOAyc8_.js";import{_ as as}from"./hBIlPggQ.js";import{_ as ts}from"./BfreF_wE.js";import{t as ns,u as os,_ as ls,a as is,F as rs}from"./CNPYM402.js";import{_ as cs,a as ps,b as ms,c as ds,d as fs}from"./B_AtmdCx.js";import{_ as us,a as _s}from"./Cgfuu8uE.js";import{_ as xs}from"./BF-kh-Z-.js";import{_ as vs}from"./CxMmE33i.js";import{_ as ys}from"./LIHSCdsz.js";import{_ as ge}from"./DlAUqK2U.js";import{_ as gs}from"./zOMGDkeW.js";import{o as bs,l as ks,s as se,f as ws,a as ae,b as Ns}from"./Dr36K71C.js";import{v as m,g as Ps}from"./TbKeXXfV.js";import{u as Cs}from"./BuwBRGO-.js";import{u as hs}from"./DxvkHBHp.js";import{f as Ss}from"./DevxgbSN.js";import{L as Fs}from"./id3GlF3S.js";import{E as pe,a as me}from"./DwMhvqtb.js";import"./H2wlGcZh.js";import"./CcI4GL3K.js";const As={class:"border border-gray-300 p-4 min-h-[150px]"},Ds={class:"flex flex-col gap-2"},$s=X({__name:"confirm-update-customer",props:{isOpen:{type:Boolean},fields:{}},emits:["close","update"],setup(B,{emit:M}){const r=B,b=f(r.isOpen);oe(()=>r.isOpen,g=>{b.value=g});const w=M,C=()=>{w("close")},y=()=>{w("update")};return(g,u)=>{const v=de,$=fe,I=ue,T=_e,U=xe,h=ve,K=ye;return d(),P(K,{open:o(b),"onUpdate:open":u[0]||(u[0]=S=>le(b)?b.value=S:null)},{default:n(()=>[e(h,null,{default:n(()=>[e($,{class:"flex flex-col gap-4"},{default:n(()=>[e(v,{class:"text-sm text-center"},{default:n(()=>u[1]||(u[1]=[k("変更の確認")])),_:1}),e(v,{class:"text-sm font-normal"},{default:n(()=>u[2]||(u[2]=[k("以下の内容を変更します。よろしいですか？")])),_:1})]),_:1}),a("div",As,[a("ul",Ds,[(d(!0),L(te,null,ne(g.fields,S=>(d(),L("li",{key:S},R(S),1))),128))])]),e(U,{class:"flex !flex-col gap-4"},{default:n(()=>[e(I,{class:"flex self-center min-w-[120px]",onClick:y},{default:n(()=>u[3]||(u[3]=[k("変更")])),_:1}),e(T,{class:"flex self-center border border-gray-300 min-w-[120px]",onClick:C},{default:n(()=>u[4]||(u[4]=[k("キャンセル")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Is=X({__name:"execution-confirm",props:{isOpen:{type:Boolean},activeStatus:{}},emits:["close","update"],setup(B,{emit:M}){const r=B,b=f(r.isOpen);oe(()=>r.isOpen,C=>{b.value=C});const w=M;return(C,y)=>{const g=de,u=fe,v=ue,$=_e,I=xe,T=ve,U=ye;return d(),P(U,{open:o(b),"onUpdate:open":y[2]||(y[2]=h=>le(b)?b.value=h:null),class:"delete-modal"},{default:n(()=>[e(T,null,{default:n(()=>[e(u,{class:"flex flex-col gap-6 items-center mb-4"},{default:n(()=>[e(g,{class:"text-sm"},{default:n(()=>y[3]||(y[3]=[k("実行の確認")])),_:1}),e(g,{class:"text-sm font-normal"},{default:n(()=>[k(R(C.activeStatus===1?"顧客の利用を停止します。よろしいですか？":"顧客の利用を再開します。よろしいですか？"),1)]),_:1})]),_:1}),e(I,{class:"flex !flex-col gap-5"},{default:n(()=>[e(v,{class:"flex self-center min-w-[120px]",onClick:y[0]||(y[0]=h=>w("update"))},{default:n(()=>[k(R(C.activeStatus===1?"停止":"開始"),1)]),_:1}),e($,{class:"flex self-center border border-gray-300 min-w-[120px]",onClick:y[1]||(y[1]=h=>w("close"))},{default:n(()=>y[4]||(y[4]=[k("キャンセル")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Ts=ge(Is,[["__scopeId","data-v-98fde63d"]]),Us={class:"login-page flex flex-col !h-[100vh] overflow-hidden relative"},Os={class:"flex justify-between mt-[15px]"},Ks={class:"form overflow-y-auto scroll"},Gs={class:"flex flex-col w-[900px] gap-[25px] pb-[20px]"},Es={class:"company flex flex-col gap-5"},Vs={class:"flex gap-5 items-center"},Ms={class:"flex gap-5 items-center"},Ls={class:"information flex flex-col gap-5"},Rs={class:"flex gap-5 items-center"},Bs={class:"flex gap-5 items-center"},Hs={class:"flex flex-col gap-[15px] w-[82%]"},Ys={class:"flex gap-5 items-center !m-[0px]"},js={class:"pic-position flex gap-5 items-center w-[50%]"},qs={class:"pic-name flex items-center gap-5 w-[50%]"},zs={class:"flex gap-5 items-center !m-[0px]"},Js={class:"pic-name flex items-center gap-5 w-[50%]"},Qs={class:"flex flex-col gap-[15px] w-[82%]"},Ws={class:"flex gap-5 items-center !m-[0px]"},Xs={class:"pic-position flex gap-5 items-center w-[50%]"},Zs={class:"pic-name flex items-center gap-5 w-[50%]"},ea={class:"flex gap-5 items-center !m-[0px]"},sa={class:"pic-name flex items-center gap-5 w-[50%]"},aa={class:"contact flex flex-col gap-6"},ta={class:"flex gap-5 items-center"},na={class:"flex gap-5 items-center -mb-[12.5px]"},oa={class:"flex gap-5 items-center"},la={class:"relative !m-[0px]"},ia={class:"relative"},ra={class:"flex gap-5 items-center"},ca={class:"!m-[0px]"},pa={class:"flex gap-5 items-center"},ma={class:"flex gap-5 items-center"},da={class:"flex gap-5 items-center"},fa={class:"relative !m-[0px]"},ua={class:"relative"},_a={class:"relative w-[82%] !m-[0px]"},xa={class:"relative w-[82%] !m-[0px] flex gap-2 items-center"},va={class:"relative w-[82%] !m-[0px] flex gap-2 items-center"},ya={class:"flex max-w-[900px] justify-between py-[20px]"},ga={class:"flex gap-5"},ba={class:"flex gap-5"},ka=X({__name:"index",setup(B){const M=je(),r=qe(),b=ze(),w=Cs(),{redirectPage:C}=hs(),y=f(),g=f(""),u=f(!1),v=f(!1),$=f(0),I=f(!1),T=f(!1),U=f(!1),h=f({}),K=f([]),S=f(!1),q=f(!1),G=f(!1),be=ee(()=>{var t;return(t=M.masterData)==null?void 0:t.kaigoSoftwares}),H=ee(()=>w.companyUser),ke=ee(()=>K.value.length==0),ie=f(!1),z=f("");Je(async()=>{if(v.value=!0,g.value=b.params.id,!g)return C("/customer");await w.getCompanyById(Number(g.value)),H.value&&(we(),$.value=H.value.status),v.value=!1});const we=()=>{if(H.value){const t=H.value;i("companyName",t.companyName),i("companyNameKana",t.companyNameKana),i("companyPostCode",t.companyPostCode),i("companyAddress",t.companyAddress),i("phoneNumber",t.phoneNumber),i("picFamilyName",t.picFamilyName),i("picFamilyNameKana",t.picFamilyNameKana),i("picGivenName",t.picGivenName),i("picGivenNameKana",t.picGivenNameKana),i("picPosition",t.picPosition),i("frontPicFamilyName",t.frontPicFamilyName),i("frontPicFamilyNameKana",t.frontPicFamilyNameKana),i("frontPicGivenName",t.frontPicGivenName),i("frontPicGivenNameKana",t.frontPicGivenNameKana),i("frontPicPosition",t.frontPicPosition),i("kaipokeUserId",t.kaipokeUserId),i("kaipokeUserPassword",t.kaipokeUserPassword),i("kaipokeCompanyId",t.kaipokeCompanyId),i("paymentMethod",t.paymentMethod),i("kaigoSoftware",t.kaigoSoftware.toString()),i("email",t.email),i("isValidAccountTransfer",t.isValidAccountTransfer),G.value=t.keepLastPlanContentFlg==1,h.value={...F},z.value=t.accountTransferValidatedAt??""}},Ne=ns(bs({companyName:m(l.companyName,250),companyNameKana:m(l.companyNameKana,250,!0),companyPostCode:m(l.companyPostCode,10),companyAddress:m(l.companyAddress,250),frontPicPosition:m(l.frontPicPosition,100),frontPicFamilyName:m(l.frontPicFamilyName,100),frontPicGivenName:m(l.frontPicGivenName,100),frontPicFamilyNameKana:m(l.frontPicFamilyNameKana,100,!0),frontPicGivenNameKana:m(l.frontPicGivenNameKana,100,!0),picPosition:m(l.picPosition,100),picFamilyName:m(l.picFamilyName,100),picGivenName:m(l.picGivenName,100),picFamilyNameKana:m(l.picFamilyNameKana,100,!0),picGivenNameKana:m(l.picGivenNameKana,100,!0),phoneNumber:m(l.phoneNumber,20),email:m(l.email,250),password:Ps().optional().or(ks("")),kaigoSoftware:se(ws(Qe.ERR002,l.kaigoSoftware)).min(1,ae(l.kaigoSoftware)),kaipokeCompanyId:m(l.kaipokeCompanyId,100),kaipokeUserId:m(l.kaipokeUserId,100),kaipokeUserPassword:se(ae(l.kaipokeUserPassword)).min(1,ae(l.kaipokeUserPassword)),paymentMethod:se().nullable().optional(),isValidAccountTransfer:Ns().default(!1).optional()})),{handleSubmit:Pe,values:F,setFieldValue:i}=os({validationSchema:Ne}),Ce=()=>{q.value=!q.value},he=()=>{S.value=!S.value},Se=async()=>{const t=F==null?void 0:F.companyPostCode;if(!t){r.setNotify({message:"郵便番号が存在しません。",type:Y.error});return}u.value=!0;const s=await r.searchPostalCode(t);if(s!=null&&s.data){const{prefecture:_,city:A}=s.data,p=`${_} ${A}`;i("companyAddress",p),y.value=s.data}else r.setNotify({message:"郵便番号が存在しません。",type:Y.error});u.value=!1};oe([F,G],()=>{var s;K.value=[],Object.keys(F).forEach(_=>{if(F[_]!==h.value[_]&&_!=="confirmPassword"&&_!=="isValidAccountTransfer"){if(_==="password"&&F[_]==="")return;const A=l[_];K.value.push(A)}});const t=G.value?1:0;((s=H.value)==null?void 0:s.keepLastPlanContentFlg)!==t&&K.value.push(l.keepLastPlanContentFlg)},{deep:!0});const re=Pe(async t=>{T.value=!0},({errors:t})=>{const _=Object.keys(l).map(A=>t[A]).find(Boolean)??"";r.setNotify({message:_,type:Y.error})}),Fe=async t=>{var p;r.clearNotify(),v.value=!0;const s={...F},_=s.password;delete s.password;const A={...s,keepLastPlanContentFlg:G.value?1:0,kaigoSoftware:Number(s.kaigoSoftware),..._&&{newPassword:_},...t&&{status:t}};await w.updateCompanyById(Number(g.value),A).finally(()=>{v.value=!1,T.value=!1}),(p=r.notify)!=null&&p.message||Z("顧客情報を更新しました")},Ae=async()=>{var s;r.clearNotify(),v.value=!0,I.value=!1;const t=[Number(g.value)];if(!t.length){r.setNotify({message:"会社を削除できません。",type:Y.error}),v.value=!1;return}await w.bulkDelete(t),v.value=!1,(s=r.notify)!=null&&s.message||Z("顧客情報を削除しました")},De=async()=>{var s;r.clearNotify(),v.value=!0,U.value=!1;const t=$.value===1?2:1;await w.updateStatusCompanyUser(Number(g.value),{status:t}),(s=r.notify)!=null&&s.message||Z("顧客情報を更新しました"),v.value=!1},Z=t=>{ie.value=!0,C("/customer"),r.setNotify({message:t,type:Y.success})},$e=async t=>{i("isValidAccountTransfer",t),z.value=Ss(new Date().toString(),"YYYY-MM-DD HH:mm:ss");const s={...h.value,accountTransferValidatedAt:z.value,isValidAccountTransfer:t};await w.updateCompanyById(Number(g.value),s)};return(t,s)=>{const _=He,A=$s,p=ss,x=as,J=ts,Q=Ye,E=ls,D=is,O=rs,Ie=cs,Te=ps,Ue=ms,Oe=ds,Ke=fs,Ge=us,Ee=_s,Ve=xs,Me=vs,Le=ys,Re=Ts,Be=gs;return d(),L("div",Us,[a("div",Os,[o(ie)?W("",!0):(d(),P(_,{key:0,class:"pl-[64px]"}))]),e(A,{isOpen:o(T),fields:o(K),onClose:s[0]||(s[0]=c=>T.value=!1),onUpdate:Fe},null,8,["isOpen","fields"]),a("form",{class:"register flex flex-col gap-[25px] pl-[64px] pt-[10px] pb-[15px]",onSubmit:s[5]||(s[5]=(...c)=>o(re)&&o(re)(...c))},[a("div",Ks,[a("div",Gs,[e(p,{label:"必須項目です",position:"left",class:"mb-[10px]"}),a("div",Es,[a("div",Vs,[e(p,{label:"法人名",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"companyName"})]),a("div",Ms,[e(p,{label:"フリガナ",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"companyNameKana"})])]),s[22]||(s[22]=a("div",{class:"space"},null,-1)),a("div",Ls,[a("div",Rs,[e(p,{label:"郵便番号",class:"w-[160px] flex"}),e(x,{"name-bind":"companyPostCode","class-form":"w-[20%]"}),e(J,{onClick:Se,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:n(()=>[o(u)?(d(),P(o(Fs),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):W("",!0),s[8]||(s[8]=k(" 郵便番号から入力 "))]),_:1})]),a("div",Bs,[e(p,{label:"会社所在地",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"companyAddress"})]),e(O,{name:"frontPicPosition"},{default:n(({componentField:c,errors:N})=>[e(D,{class:"flex gap-5"},{default:n(()=>[e(p,{label:"代表者",class:"w-[160px] flex pt-[14px] items-baseline flex-shrink-0"}),a("div",Hs,[a("div",Ys,[a("div",js,[s[9]||(s[9]=a("span",{class:"label w-[35px]"},"役職",-1)),e(E,null,{default:n(()=>[e(Q,j({type:"text"},c,{class:{"border-red-500":N.length}}),null,16,["class"])]),_:2},1024)]),a("div",qs,[s[10]||(s[10]=a("span",{class:"label flex w-[19%] flex-shrink-0"},"お名前",-1)),e(x,{"name-bind":"frontPicFamilyName",placeholder:"姓","class-input":"text-center"}),e(x,{"name-bind":"frontPicGivenName",placeholder:"名","class-input":"text-center"})])]),a("div",zs,[s[12]||(s[12]=a("div",{class:"pic-position flex gap-5 items-center w-[50%]"},null,-1)),a("div",Js,[s[11]||(s[11]=a("span",{class:"label flex w-[19%] flex-shrink-0"},"フリガナ",-1)),e(x,{"name-bind":"frontPicFamilyNameKana",placeholder:"せい","class-input":"text-center"}),e(x,{"name-bind":"frontPicGivenNameKana",placeholder:"めい","class-input":"text-center"})])])])]),_:2},1024)]),_:1}),e(O,{name:"picPosition"},{default:n(({componentField:c,errors:N})=>[e(D,{class:"flex gap-5"},{default:n(()=>[e(p,{label:"ご担当者",class:"w-[160px] flex pt-[14px] items-baseline flex-shrink-0"}),a("div",Qs,[a("div",Ws,[a("div",Xs,[s[13]||(s[13]=a("span",{class:"label w-[35px]"},"役職",-1)),e(E,null,{default:n(()=>[e(Q,j({type:"text"},c,{class:{"border-red-500":N.length}}),null,16,["class"])]),_:2},1024)]),a("div",Zs,[s[14]||(s[14]=a("span",{class:"label flex w-[19%] flex-shrink-0"},"お名前",-1)),e(x,{"name-bind":"picFamilyName",placeholder:"姓","class-input":"text-center"}),e(x,{"name-bind":"picGivenName",placeholder:"名","class-input":"text-center"})])]),a("div",ea,[s[16]||(s[16]=a("div",{class:"pic-position flex gap-5 items-center w-[50%]"},null,-1)),a("div",sa,[s[15]||(s[15]=a("span",{class:"label flex w-[19%] flex-shrink-0"},"フリガナ",-1)),e(x,{"name-bind":"picFamilyNameKana",placeholder:"せい","class-input":"text-center"}),e(x,{"name-bind":"picGivenNameKana",placeholder:"めい","class-input":"text-center"})])])])]),_:2},1024)]),_:1})]),s[23]||(s[23]=a("div",{class:"space"},null,-1)),a("div",aa,[a("div",ta,[e(p,{label:"電話番号",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"phoneNumber","class-form":"w-[40%]"})]),a("div",na,[e(p,{label:"メールアドレス",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"email",description:"認証済みのメールアドレス"})]),a("div",oa,[s[17]||(s[17]=a("div",{class:"w-[160px] flex-shrink-0"},[a("span",null,"パスワード")],-1)),e(O,{name:"password"},{default:n(({componentField:c,errors:N})=>[e(D,{class:"w-[100%]"},{default:n(()=>[a("div",la,[e(E,null,{default:n(()=>[a("div",ia,[e(Q,j({type:o(q)?"text":"password"},c,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":N.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:Ce,"aria-label":"Toggle password visibility"},[o(q)?(d(),P(o(me),{key:1,class:"h-5 w-3.5 text-black"})):(d(),P(o(pe),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024)])]),_:2},1024)]),_:1})]),a("div",ra,[e(p,{label:"介護ソフト選択",class:"w-[160px] flex-shrink-0"}),e(O,{name:"kaigoSoftware"},{default:n(({componentField:c,errors:N,meta:V})=>[e(D,{class:"w-[100%]"},{default:n(()=>[a("div",ca,[e(E,null,{default:n(()=>[e(Ke,We(Xe(c)),{default:n(()=>[e(Te,{class:Ze({"border-red-500":N.length&&!c.modelValue})},{default:n(()=>[e(Ie,{placeholder:"Select an option"})]),_:2},1032,["class"]),e(Oe,null,{default:n(()=>[(d(!0),L(te,null,ne(o(be),ce=>(d(),P(Ue,{value:`${ce.id}`},{default:n(()=>[k(R(ce.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040)]),_:2},1024)])]),_:2},1024)]),_:1})]),a("div",pa,[e(p,{label:"カイポケ法人ID",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"kaipokeCompanyId"})]),a("div",ma,[e(p,{label:"カイポケユーザーID",class:"w-[160px] flex-shrink-0"}),e(x,{"name-bind":"kaipokeUserId"})]),a("div",da,[e(p,{label:"カイポケパスワード",class:"w-[160px] flex-shrink-0"}),e(O,{name:"kaipokeUserPassword"},{default:n(({componentField:c,errors:N})=>[e(D,{class:"w-[100%]"},{default:n(()=>[a("div",fa,[e(E,null,{default:n(()=>[a("div",ua,[e(Q,j({type:o(S)?"text":"password"},c,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":N.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:he,"aria-label":"Toggle password visibility"},[o(S)?(d(),P(o(me),{key:1,class:"h-5 w-3.5 text-black"})):(d(),P(o(pe),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024)])]),_:2},1024)]),_:1})]),e(O,{name:"paymentMethod"},{default:n(({componentField:c,errors:N})=>[e(D,{class:"flex gap-5"},{default:n(()=>[e(p,{label:"決済方法",class:"w-[160px] flex-shrink-0"}),a("div",_a,[e(E,null,{default:n(()=>[e(Ee,j({class:"flex gap-5"},c),{default:n(()=>[(d(!0),L(te,null,ne("PAYMENT_METHOD_OPTIONS_LIST"in t?t.PAYMENT_METHOD_OPTIONS_LIST:o(es),V=>(d(),P(D,{class:"flex items-center space-y-0 gap-x-3"},{default:n(()=>[e(E,null,{default:n(()=>[e(Ge,{value:V.type},null,8,["value"])]),_:2},1024),a("span",null,R(V.value),1)]),_:2},1024))),256))]),_:2},1040)]),_:2},1024)])]),_:2},1024)]),_:1}),e(O,{type:"checkbox",name:"isValidAccountTransfer"},{default:n(({value:c,handleChange:N})=>[e(D,{class:"flex gap-5"},{default:n(()=>[s[18]||(s[18]=a("span",{class:"w-[160px] flex items-center"},"口座有効",-1)),a("div",xa,[e(Ve,{checked:c,"onUpdate:checked":V=>$e(V)},null,8,["checked","onUpdate:checked"]),a("span",null,R(o(z)||""),1)])]),_:2},1024)]),_:1}),e(O,{name:"remainOldPlan"},{default:n(({componentField:c,errors:N})=>[e(D,{class:"flex gap-5"},{default:n(()=>[s[21]||(s[21]=a("span",{class:"w-[160px] flex items-center"},"前回の計画書内容を保持する",-1)),a("div",va,[s[19]||(s[19]=a("span",null,"OFF",-1)),e(Me,{checked:o(G),"onUpdate:checked":s[1]||(s[1]=V=>le(G)?G.value=V:null)},null,8,["checked"]),s[20]||(s[20]=a("span",null,"ON",-1))])]),_:1})]),_:1})])])]),a("div",ya,[a("div",ga,[e(J,{type:"button",variant:"cancel_btn",class:"flex self-center",onClick:s[2]||(s[2]=c=>o(C)("/customer"))},{default:n(()=>s[24]||(s[24]=[k(" キャンセル ")])),_:1}),a("div",{class:"delete flex self-center underline cursor-pointer",onClick:s[3]||(s[3]=()=>I.value=!0)}," 削除 ")]),a("div",ba,[e(J,{type:"submit",class:"flex self-center",disabled:o(ke)},{default:n(()=>s[25]||(s[25]=[k(" 変更 ")])),_:1},8,["disabled"]),o($)!==3?(d(),P(J,{key:0,type:"button",variant:"export",class:"delete flex self-center",onClick:s[4]||(s[4]=()=>U.value=!0)},{default:n(()=>s[26]||(s[26]=[k(" 停止・開始 ")])),_:1})):W("",!0)])])],32),e(Le,{"is-open":o(I),onClose:s[6]||(s[6]=c=>I.value=!1),onUpdate:Ae},null,8,["is-open"]),e(Re,{"is-open":o(U),"active-status":o($),onClose:s[7]||(s[7]=c=>U.value=!1),onUpdate:De},null,8,["is-open","active-status"]),o(v)?(d(),P(Be,{key:0})):W("",!0)])}}}),wa=ge(ka,[["__scopeId","data-v-414a54af"]]),Na={class:"user-list px-4"},qa=X({__name:"[id]",setup(B){return(M,r)=>{const b=wa;return d(),L("div",Na,[r[0]||(r[0]=a("div",{class:"header flex items-center h-[40px] border-b border-b-[#e2e2e2]"},[a("span",{class:"text-base font-bold"},"顧客詳細")],-1)),e(b)])}}});export{qa as default};
