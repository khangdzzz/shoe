import{u as ke,_ as Pe,a as Ne}from"./HH2KvXcW.js";import{_ as Se}from"./vYsHKxVv.js";import{t as Ce,u as Fe,F as Ve,_ as Re,a as Ee}from"./D2IXt8h9.js";import{c as Ie,_ as Te}from"./C6W6FGfQ.js";import{_ as Ue,a as $e,c as Ge,d as Ke,b as Ae}from"./BM6RYi22.js";import{m as re,$ as Me,a0 as Le,p as n,o as g,c as M,H as O,C as Y,I as Be,y as De,n as qe,Y as je,r as y,J as ze,z as le,M as V,g as Je,T as K,a as l,b as e,w as s,a1 as Oe,F as i,q as f,v as h,x as j,d as A,t as ae,A as Ye,B as He,D as Qe,E as We}from"./B_IVimSW.js";import{_ as Xe}from"./DIbJkIk-.js";import{_ as Ze}from"./Cxjwflmj.js";import{o as es,a as R,s as te,f as ss,b as ls}from"./CyThWGJQ.js";import{v as _,g as oe}from"./CetBQkYA.js";import{u as as}from"./CfM5ZeIB.js";import{u as ts}from"./DC9Az0I9.js";import{L as ne}from"./D8SgnQi5.js";import{E as z,a as J}from"./Y2zC-5VN.js";import{_ as os}from"./DlAUqK2U.js";import"./Br6ECwfk.js";import"./CuyvDRtF.js";const ns=re({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(H,{emit:Q}){const S=H,C=ke(S,"modelValue",Q,{passive:!0,defaultValue:S.defaultValue});return(w,E)=>Me((g(),M("textarea",{"onUpdate:modelValue":E[0]||(E[0]=I=>O(C)?C.value=I:null),class:Y(n(Ie)("flex min-h-20 w-full rounded-md border border-input  px-3 py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-none focus-visible:border focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50",S.class))},null,2)),[[Le,n(C)]])}}),rs={class:"login-page flex flex-col items-center justify-center !h-[100vh] overflow-hidden"},is={class:"form flex flex-col gap-[5px] w-[770px] bg-white px-12 pt-4 pb-8 h-[90%]"},cs={class:"form flex flex-col gap-[25px] pb-[20px] overflow-y-auto scroll"},ds={class:"company flex flex-col gap-5"},ps={class:"relative w-[71%] !m-[0px] !mr-[25px]"},ms={class:"relative w-[71%] !m-[0px] !mr-[25px]"},fs={class:"information flex flex-col gap-5"},us={class:"relative flex !m-[0px] gap-[20px]"},xs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},_s={class:"flex flex-col gap-[15px] w-[71%]"},vs={class:"flex gap-5 items-center !m-[0px]"},gs={class:"pic-position flex gap-5 items-center w-[90%]"},bs={class:"pic-name flex items-center gap-5"},ys={class:"relative !m-[0px]"},hs={class:"relative !m-[0px]"},ws={class:"flex gap-5 items-center !m-[0px]"},ks={class:"pic-name flex items-center gap-5"},Ps={class:"relative !m-[0px]"},Ns={class:"relative !m-[0px]"},Ss={class:"flex flex-col gap-[15px] w-[71%]"},Cs={class:"flex gap-5 items-center !m-[0px]"},Fs={class:"pic-position flex gap-5 items-center w-[90%]"},Vs={class:"pic-name flex items-center gap-5"},Rs={class:"relative !m-[0px]"},Es={class:"relative !m-[0px]"},Is={class:"flex gap-5 items-center !m-[0px]"},Ts={class:"pic-name flex items-center gap-5"},Us={class:"relative !m-[0px]"},$s={class:"relative !m-[0px]"},Gs={class:"contact flex flex-col gap-6"},Ks={class:"relative w-[40%] !m-[0px] !mr-[25px]"},As={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ms={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ls={class:"relative"},Bs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ds={class:"relative"},qs={key:0,class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"},js={class:"relative w-[71%] !m-[0px] !mr-[25px]"},zs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Js={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Os={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ys={class:"relative"},Hs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Qs={class:"terms contact flex flex-col"},Ws={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Xs={class:"flex gap-5 items-center !m-[0px] pt-[10px]"},Zs={class:"flex gap-3 flex-col"},el=re({__name:"index",setup(H){const S=Oe().public.BASE_URL+"term-of-use",W=Be(),C=De(),w=qe(),E=je(),I=as(),{redirectPage:T}=ts(),X=y(""),b=W.query.token,ie=y(),L=y(!1),B=y(!1),P=y(""),F=y(!0),N=y(""),U=y(!1),$=y(!1),G=y(!1);ze(()=>{var a;b||T("/login"),I.checkTokenValid("email",(b==null?void 0:b.toString())??"");const x=I.parseJwt((b==null?void 0:b.toString())??"");(!x||(a=Z.value)!=null&&a.message)&&setTimeout(()=>{T("/login")},1e3),X.value=(x==null?void 0:x.email)??"",ee("email",X.value)});const ce=le(()=>{var x;return(x=C.masterData)==null?void 0:x.kaigoSoftwares}),Z=le(()=>w.notify),de=Ce(es({companyName:_(i.companyName,250),companyNameKana:_(i.companyNameKana,250,!0),companyPostCode:_(i.companyPostCode,10),companyAddress:_(i.companyAddress,250),frontPicPosition:_(i.frontPicPosition,100),frontPicFamilyName:_(i.frontPicFamilyName,100),frontPicGivenName:_(i.frontPicGivenName,100),frontPicFamilyNameKana:_(i.frontPicFamilyNameKana,100,!0),frontPicGivenNameKana:_(i.frontPicGivenNameKana,100,!0),picPosition:_(i.picPosition,100),picFamilyName:_(i.picFamilyName,100),picGivenName:_(i.picGivenName,100),picFamilyNameKana:_(i.picFamilyNameKana,100,!0),picGivenNameKana:_(i.picGivenNameKana,100,!0),phoneNumber:_(i.phoneNumber,20),email:_(i.email,250),password:oe(R(i.password)),confirmPassword:oe(R(i.confirmPassword)),kaigoSoftware:te(ss(V.ERR002,i.kaigoSoftware)).min(1,R(i.kaigoSoftware)),kaipokeCompanyId:_(i.kaipokeCompanyId,100),kaipokeUserId:_(i.kaipokeUserId,100),kaipokeUserPassword:te(R(i.kaipokeUserPassword)).min(1,R(i.kaipokeUserPassword)),registerReason:_(i.registerReason,1e3),term:ls({message:V.ERR003}).refine(x=>x,{message:V.ERR003})})),{handleSubmit:pe,values:D,setFieldValue:ee}=Fe({validationSchema:de}),me=()=>{G.value=!G.value},fe=()=>{$.value=!$.value},ue=()=>{U.value=!U.value},xe=async()=>{const x=D==null?void 0:D.companyPostCode;if(!x){w.setNotify({message:"郵便番号が存在しません。",type:K.error});return}L.value=!0;const a=await w.searchPostalCode(x);if(a!=null&&a.data){const{prefecture:k,city:u}=a.data,r=`${k} ${u}`;ee("companyAddress",r),ie.value=a.data}else w.setNotify({message:"郵便番号が存在しません。",type:K.error});L.value=!1};Je([N,P],()=>{if(!P.value||!N.value){F.value=!0;return}F.value=P.value===N.value});const se=pe(async x=>{var r;if(w.clearNotify(),!F.value){w.setNotify({message:V.ERR006,type:K.error});return}B.value=!0;const{term:a,...k}=x,u={...k,kaigoSoftware:parseInt(x.kaigoSoftware),verifyToken:(b==null?void 0:b.toString())??""};await E.registerNewUser(u),(r=Z.value)!=null&&r.message||T("/register/success"),B.value=!1},({errors:x})=>{const k=Object.keys(i).map(u=>x[u]).find(Boolean)??"";w.setNotify({message:k,type:K.error})});return(x,a)=>{const k=Pe,u=Se,r=Ne,p=Re,c=Ee,d=Ve,q=Te,_e=Ue,ve=$e,ge=Ae,be=Ge,ye=Ke,he=ns,we=Xe;return g(),M("div",rs,[a[25]||(a[25]=l("div",{class:"logo mb-2"},[l("img",{src:Ze,class:"h-[60px] w-auto"})],-1)),l("div",is,[e(k),a[24]||(a[24]=l("h1",{class:"text-sm font-bold mb-[20px]"},"会員登録",-1)),l("form",{class:"register flex flex-col gap-[25px]",onSubmit:a[3]||(a[3]=(...t)=>n(se)&&n(se)(...t))},[l("div",cs,[e(u,{label:"必須項目です",position:"left"}),l("div",ds,[e(d,{name:"companyName"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"法人名",class:"w-[145px]"}),l("div",ps,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"companyNameKana"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"フリガナ",class:"w-[145px]"}),l("div",ms,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1})]),a[19]||(a[19]=l("div",{class:"space"},null,-1)),l("div",fs,[e(d,{name:"companyPostCode"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"郵便番号",class:"w-[145px] flex"}),l("div",us,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024),e(q,{onClick:xe,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:s(()=>[n(L)?(g(),h(n(ne),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):j("",!0),a[4]||(a[4]=A(" 郵便番号から入力 "))]),_:1})])]),_:2},1024)]),_:1}),e(d,{name:"companyAddress"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"会社所在地",class:"w-[145px]"}),l("div",xs,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"frontPicPosition"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"代表者",class:"w-[145px] flex pt-[14px] items-baseline"}),l("div",_s,[l("div",vs,[l("div",gs,[a[5]||(a[5]=l("span",{class:"label w-[35px]"},"役職",-1)),e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)]),l("div",bs,[a[6]||(a[6]=l("span",{class:"label flex w-[54%]"},"お名前",-1)),e(d,{name:"frontPicFamilyName"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",ys,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"frontPicGivenName"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",hs,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),l("div",ws,[a[8]||(a[8]=l("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),l("div",ks,[a[7]||(a[7]=l("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(d,{name:"frontPicFamilyNameKana"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",Ps,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"frontPicGivenNameKana"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",Ns,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1}),e(d,{name:"picPosition"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"ご担当者",class:"w-[145px] flex pt-[14px] items-baseline"}),l("div",Ss,[l("div",Cs,[l("div",Fs,[a[9]||(a[9]=l("span",{class:"label w-[35px]"},"役職",-1)),e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)]),l("div",Vs,[a[10]||(a[10]=l("span",{class:"label flex w-[54%]"},"お名前",-1)),e(d,{name:"picFamilyName"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",Rs,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"picGivenName"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",Es,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),l("div",Is,[a[12]||(a[12]=l("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),l("div",Ts,[a[11]||(a[11]=l("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(d,{name:"picFamilyNameKana"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",Us,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"picGivenNameKana"},{default:s(({componentField:m,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l("div",$s,[e(p,null,{default:s(()=>[e(r,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},m,{class:{"border-red-500":v.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1})]),a[20]||(a[20]=l("div",{class:"space"},null,-1)),l("div",Gs,[e(d,{name:"phoneNumber"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"電話番号",class:"w-[145px]"}),l("div",Ks,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"email"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"メールアドレス",class:"w-[145px]"}),l("div",As,[e(p,null,{default:s(()=>[e(r,f({disabled:"",type:"text"},t,{class:["bg-[#ccc]",{"border-red-500":o.length}]}),null,16,["class"]),a[13]||(a[13]=l("span",{class:"absolute text-[10px] pt-[2px]"},"認証済みのメールアドレス",-1))]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"password"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"パスワード",class:"w-[145px]"}),l("div",Ms,[e(p,null,{default:s(()=>[l("div",Ls,[e(r,f({type:n(G)?"text":"password"},t,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":o.length},"placeholder:text-[10px]"],modelValue:n(P),"onUpdate:modelValue":a[0]||(a[0]=m=>O(P)?P.value=m:null)}),null,16,["type","class","modelValue"]),l("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:me,"aria-label":"Toggle password visibility"},[n(G)?(g(),h(n(J),{key:1,class:"h-5 w-3.5 text-black"})):(g(),h(n(z),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"confirmPassword"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a[14]||(a[14]=l("div",{class:"label w-[145px] flex gap-5 items-center"},[l("div",{class:"flex flex-col"},[l("span",{class:"text-xs"},"パスワード"),l("span",null,"（確認用）")]),l("span",{class:"text-red-500"},"※")],-1)),l("div",Bs,[e(p,null,{default:s(()=>[l("div",Ds,[e(r,f({type:n($)?"text":"password"},t,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":o.length||!n(F)},"placeholder:text-[10px]"],modelValue:n(N),"onUpdate:modelValue":a[1]||(a[1]=m=>O(N)?N.value=m:null)}),null,16,["type","class","modelValue"]),l("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:fe,"aria-label":"Toggle password visibility"},[n($)?(g(),h(n(J),{key:1,class:"h-5 w-3.5 text-black"})):(g(),h(n(z),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),!n(F)&&!o.length?(g(),M("span",qs,ae(("MESSAGES"in x?x.MESSAGES:n(V)).ERR006),1)):j("",!0)])]),_:2},1024)]),_:1}),e(d,{name:"kaigoSoftware"},{default:s(({componentField:t,errors:o,meta:m})=>[e(c,{class:"relative flex gap-5"},{default:s(()=>[e(u,{label:"介護ソフト選択",class:"w-[145px]"}),l("div",js,[e(p,null,{default:s(()=>[e(ye,Ye(He(t)),{default:s(()=>[e(ve,{class:Y({"border-red-500":o.length&&!t.modelValue})},{default:s(()=>[e(_e,{placeholder:""})]),_:2},1032,["class"]),e(be,null,{default:s(()=>[(g(!0),M(Qe,null,We(n(ce),v=>(g(),h(ge,{value:`${v.id}`},{default:s(()=>[A(ae(v.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040)]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeCompanyId"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"カイポケ法人ID",class:"w-[145px]"}),l("div",zs,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeUserId"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"カイポケユーザーID",class:"w-[145px]"}),l("div",Js,[e(p,null,{default:s(()=>[e(r,f({type:"text"},t,{class:{"border-red-500":o.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeUserPassword"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"カイポケパスワード",class:"w-[145px]"}),l("div",Os,[e(p,null,{default:s(()=>[l("div",Ys,[e(r,f({type:n(U)?"text":"password"},t,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":o.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),l("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:ue,"aria-label":"Toggle password visibility"},[n(U)?(g(),h(n(J),{key:1,class:"h-5 w-3.5 text-black"})):(g(),h(n(z),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"registerReason"},{default:s(({componentField:t,errors:o})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(u,{label:"ご登録の切っ掛け",class:"w-[145px]"}),l("div",Hs,[e(p,null,{default:s(()=>[e(he,f(t,{class:[{"border-red-500":o.length&&!t.modelValue},"reason-register relative resize-none"],placeholder:"1000文字以内"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1})]),a[21]||(a[21]=l("div",{class:"space"},null,-1)),l("div",Qs,[l("div",null,[l("div",{class:"flex gap-5"},[a[15]||(a[15]=l("span",{class:"w-[145px] flex items-center"},"利用規約",-1)),l("div",{class:"relative w-[71%] !m-[0px] !mr-[25px]"},[l("iframe",{src:S,class:"w-full h-[300px] border rounded",title:"利用規約"})])])]),e(d,{type:"checkbox",name:"term"},{default:s(({value:t,handleChange:o,errors:m})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a[18]||(a[18]=l("div",{class:"w-[145px]"},null,-1)),l("div",Ws,[l("div",Xs,[a[16]||(a[16]=l("span",{class:"label"},"利用規約確認",-1)),a[17]||(a[17]=l("span",{class:"text-red-500"},"※",-1)),e(we,{checked:t,"onUpdate:checked":o,class:Y({"border-red-500":m.length})},null,8,["checked","onUpdate:checked","class"])])])]),_:2},1024)]),_:1})])]),l("div",Zs,[e(q,{type:"submit",class:"flex self-center"},{default:s(()=>[n(B)?(g(),h(n(ne),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):j("",!0),a[22]||(a[22]=A(" アカウントを登録する "))]),_:1}),e(q,{variant:"cancel_btn",type:"button",class:"flex self-center min-w-[188px]",onClick:a[2]||(a[2]=t=>n(T)("/login"))},{default:s(()=>a[23]||(a[23]=[A(" キャンセル ")])),_:1})])],32)])])}}}),gl=os(el,[["__scopeId","data-v-3c8f4994"]]);export{gl as default};
