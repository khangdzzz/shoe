import{t as he,o as we,s as f,m as p,f as ke,d as Pe,u as Ne,F as Se,_ as Re,a as Fe,c as Ce,b as Ee}from"./CS3SHOQJ.js";import{_ as Ve}from"./0-QnzIb-.js";import{u as Ge,_ as Ke}from"./BxUkqd-y.js";import{c as $e,_ as Ie}from"./DI1eqzAo.js";import{_ as Me,a as Te,c as Ue,d as Ae,b as Le}from"./BFsG_52w.js";import{m as ne,Y as De,Z as Be,p as i,o as y,c as L,H,D as W,z as ze,y as je,n as qe,W as Oe,r as h,J as Je,A as le,M as b,F as t,g as Ye,T as U,a,b as e,w as s,q as u,v as w,x as O,d as A,t as te,B as He,C as We,E as Ze,G as Qe}from"./DSqI6PPL.js";import{_ as Xe}from"./BnR97QSv.js";import{u as es}from"./Jawt2ek-.js";import{u as ss}from"./Cd0njtKa.js";import{L as oe}from"./BnW9Z-pt.js";import{E as J,a as Y}from"./Dqzq7SHk.js";import{_ as as}from"./DlAUqK2U.js";import"./BKI6R6_z.js";import"./DIqocVxG.js";const ls=ne({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(Z,{emit:D}){const F=Z,C=Ge(F,"modelValue",D,{passive:!0,defaultValue:F.defaultValue});return(Q,P)=>De((y(),L("textarea",{"onUpdate:modelValue":P[0]||(P[0]=$=>H(C)?C.value=$:null),class:W(i($e)("flex min-h-20 w-full rounded-md border border-input  px-3 py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-none focus-visible:border focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50",F.class))},null,2)),[[Be,i(C)]])}}),ts={class:"login-page flex flex-col items-center justify-center !h-[100vh] overflow-hidden"},os={class:"form flex flex-col gap-[5px] w-[770px] bg-white px-12 pt-4 pb-8 h-[90%]"},ns={class:"form flex flex-col gap-[25px] pb-[20px] overflow-y-auto scroll"},rs={class:"company flex flex-col gap-5"},is={class:"relative w-[71%] !m-[0px] !mr-[25px]"},cs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},ds={class:"information flex flex-col gap-5"},ps={class:"relative flex !m-[0px] gap-[20px]"},ms={class:"relative w-[71%] !m-[0px] !mr-[25px]"},fs={class:"flex flex-col gap-[15px] w-[71%]"},us={class:"flex gap-5 items-center !m-[0px]"},xs={class:"pic-position flex gap-5 items-center w-[90%]"},_s={class:"pic-name flex items-center gap-5"},gs={class:"relative !m-[0px]"},vs={class:"relative !m-[0px]"},bs={class:"flex gap-5 items-center !m-[0px]"},ys={class:"pic-name flex items-center gap-5"},hs={class:"relative !m-[0px]"},ws={class:"relative !m-[0px]"},ks={class:"flex flex-col gap-[15px] w-[71%]"},Ps={class:"flex gap-5 items-center !m-[0px]"},Ns={class:"pic-position flex gap-5 items-center w-[90%]"},Ss={class:"pic-name flex items-center gap-5"},Rs={class:"relative !m-[0px]"},Fs={class:"relative !m-[0px]"},Cs={class:"flex gap-5 items-center !m-[0px]"},Es={class:"pic-name flex items-center gap-5"},Vs={class:"relative !m-[0px]"},Gs={class:"relative !m-[0px]"},Ks={class:"contact flex flex-col gap-6"},$s={class:"relative w-[40%] !m-[0px] !mr-[25px]"},Is={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ms={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ts={class:"relative"},Us={class:"relative w-[71%] !m-[0px] !mr-[25px]"},As={class:"relative"},Ls={key:0,class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"},Ds={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Bs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},zs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},js={class:"relative w-[71%] !m-[0px] !mr-[25px]"},qs={class:"relative"},Os={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Js={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ys={class:"terms contact flex flex-col"},Hs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ws={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Zs={class:"flex gap-5 items-center !m-[0px] pt-[10px]"},Qs={class:"flex gap-3 flex-col"},Xs=ne({__name:"index",setup(Z){const D=ze(),F=je(),k=qe(),C=Oe(),Q=es(),{redirectPage:P}=ss(),$=h(""),N=D.query.token,re=h(),B=h(!1),z=h(!1),S=h(""),E=h(!0),R=h(""),I=h(!1),M=h(!1),T=h(!1),V=/^[\u30A0-\u30FF]+$/;Je(()=>{var l;N||P("/login");const g=Q.parseJwt((N==null?void 0:N.toString())??"");(!g||(l=X.value)!=null&&l.message)&&setTimeout(()=>{P("/login")},1e3),$.value=(g==null?void 0:g.email)??"",ee("email",$.value)});const ie=le(()=>{var g;return(g=F.masterData)==null?void 0:g.kaigoSoftwares}),X=le(()=>k.notify),ce=he(we({companyName:f(p(t.companyName)).min(1,p(t.companyName)),companyNameKana:f(p(t.companyNameKana)).min(1,p(t.companyNameKana)).regex(V,{message:b.ERR005}),companyPostCode:f(p(t.companyPostCode)).min(1,t.companyPostCode),companyAddress:f(p(t.companyAddress)).min(1,t.companyAddress),frontPicPosition:f(p(t.frontPicPosition)).min(1,t.frontPicPosition),frontPicFamilyName:f(p(t.frontPicFamilyName)).min(1,t.frontPicFamilyName),frontPicGivenName:f(p(t.frontPicGivenName)).min(1,t.frontPicGivenName),frontPicFamilyNameKana:f(p(t.frontPicFamilyNameKana)).min(1,t.frontPicFamilyNameKana).regex(V,{message:b.ERR005}),frontPicGivenNameKana:f(p(t.frontPicGivenNameKana)).min(1,t.frontPicGivenNameKana).regex(V,{message:b.ERR005}),picPosition:f(p(t.picPosition)).min(1,t.picPosition),picFamilyName:f(p(t.picFamilyName)).min(1,t.picFamilyName),picGivenName:f(p(t.picGivenName)).min(1,t.picGivenName),picFamilyNameKana:f(p(t.picFamilyNameKana)).min(1,t.picFamilyNameKana).regex(V,{message:b.ERR005}),picGivenNameKana:f(p(t.picGivenNameKana)).min(1,t.picGivenNameKana).regex(V,{message:b.ERR005}),phoneNumber:f(p(t.phoneNumber)).min(1,t.phoneNumber),email:f(p(t.email)).min(1,t.email),password:f(p(t.password)).min(8,{message:b.ERR007}),confirmPassword:f(p(t.confirmPassword)).min(8,{message:b.ERR007}),kaigoSoftware:f(ke(b.ERR002,t.kaigoSoftware)).min(1,t.kaigoSoftware),kaipokeCompanyId:f(p(t.kaipokeCompanyId)).min(1,t.kaipokeCompanyId),kaipokeUserId:f(p(t.kaipokeUserId)).min(1,t.kaipokeUserId),kaipokeUserPassword:f(p(t.kaipokeUserPassword)).min(8,{message:b.ERR007}),registerReason:f(p(t.registerReason)).min(1,t.registerReason).max(1e3),paymentMethod:f(p(t.paymentMethod)).min(1,t.paymentMethod),terms:f(p(t.terms)).min(1,t.terms),term:Pe({message:b.ERR003}).refine(g=>g,{message:b.ERR003})})),{handleSubmit:de,values:j,setFieldValue:ee}=Ne({validationSchema:ce}),pe=()=>{T.value=!T.value},me=()=>{M.value=!M.value},fe=()=>{I.value=!I.value},ue=async()=>{const g=j==null?void 0:j.companyPostCode;if(!g){k.setNotify({message:"郵便番号が存在しません。",type:U.error});return}B.value=!0;const l=await k.searchPostalCode(g);if(l!=null&&l.data){const{prefecture:G,city:_}=l.data,r=`${G} ${_}`;ee("companyAddress",r),re.value=l.data}else k.setNotify({message:"郵便番号が存在しません。",type:U.error});B.value=!1};Ye([R,S],()=>{if(!S.value||!R.value){E.value=!0;return}E.value=S.value===R.value});const se=de(async g=>{var r;if(!E.value){k.setNotify({message:b.ERR006,type:U.error});return}z.value=!0;const{term:l,...G}=g,_={...G,kaigoSoftware:parseInt(g.kaigoSoftware),verifyToken:(N==null?void 0:N.toString())??""};await C.registerNewUser(_),(r=X.value)!=null&&r.message||P("/register/success"),z.value=!1},({errors:g})=>{const l=Object.values(g)[0];k.setNotify({message:l,type:U.error})});return(g,l)=>{const G=Re,_=Ve,r=Ke,m=Fe,c=Ce,d=Se,K=Ee,q=Ie,xe=Me,_e=Te,ge=Le,ve=Ue,be=Ae,ae=ls,ye=Xe;return y(),L("div",ts,[l[24]||(l[24]=a("div",{class:"logo"},"LOGO",-1)),a("div",os,[e(G),l[23]||(l[23]=a("h1",{class:"text-sm font-bold mb-[20px]"},"会員登録",-1)),a("form",{class:"register flex flex-col gap-[25px]",onSubmit:l[3]||(l[3]=(...o)=>i(se)&&i(se)(...o))},[a("div",ns,[e(_,{label:"必須項目です",position:"left"}),a("div",rs,[e(d,{name:"companyName"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"法人名",class:"w-[145px]"}),a("div",is,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"companyNameKana"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"フリガナ",class:"w-[145px]"}),a("div",cs,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(K,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1})]),l[18]||(l[18]=a("div",{class:"space"},null,-1)),a("div",ds,[e(d,{name:"companyPostCode"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"郵便番号",class:"w-[145px] flex"}),a("div",ps,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(q,{onClick:ue,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:s(()=>[i(B)?(y(),w(i(oe),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):O("",!0),l[4]||(l[4]=A(" 郵便番号から入力 "))]),_:1})])]),_:2},1024)]),_:1}),e(d,{name:"companyAddress"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"会社所在地",class:"w-[145px]"}),a("div",ms,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"frontPicPosition"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"代表者",class:"w-[145px] flex pt-[14px] items-baseline"}),a("div",fs,[a("div",us,[a("div",xs,[l[5]||(l[5]=a("span",{class:"label w-[35px]"},"役職",-1)),e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),a("div",_s,[l[6]||(l[6]=a("span",{class:"label flex w-[54%]"},"お名前",-1)),e(d,{name:"frontPicFamilyName"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",gs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"frontPicGivenName"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",vs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),a("div",bs,[l[8]||(l[8]=a("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),a("div",ys,[l[7]||(l[7]=a("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(d,{name:"frontPicFamilyNameKana"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",hs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"frontPicGivenNameKana"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",ws,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1}),e(d,{name:"picPosition"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"ご担当者",class:"w-[145px] flex pt-[14px] items-baseline"}),a("div",ks,[a("div",Ps,[a("div",Ns,[l[9]||(l[9]=a("span",{class:"label w-[35px]"},"役職",-1)),e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),a("div",Ss,[l[10]||(l[10]=a("span",{class:"label flex w-[54%]"},"お名前",-1)),e(d,{name:"picFamilyName"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",Rs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"picGivenName"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",Fs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),a("div",Cs,[l[12]||(l[12]=a("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),a("div",Es,[l[11]||(l[11]=a("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(d,{name:"picFamilyNameKana"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",Vs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(d,{name:"picGivenNameKana"},{default:s(({componentField:x,errors:v})=>[e(c,{class:"flex gap-5"},{default:s(()=>[a("div",Gs,[e(m,null,{default:s(()=>[e(r,u({type:"text",class:"placeholder:flex placeholder:text-center text-center"},x,{class:{"border-red-500":v.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1})]),l[19]||(l[19]=a("div",{class:"space"},null,-1)),a("div",Ks,[e(d,{name:"phoneNumber"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"電話番号",class:"w-[145px]"}),a("div",$s,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"email"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"メールアドレス",class:"w-[145px]"}),a("div",Is,[e(m,null,{default:s(()=>[e(r,u({disabled:"",type:"text"},o,{class:["bg-[#ccc]",{"border-red-500":n.length}]}),null,16,["class"]),l[13]||(l[13]=a("span",{class:"absolute text-[10px] pt-[2px]"},"認証済みのメールアドレス",-1))]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"password"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"パスワード",class:"w-[145px]"}),a("div",Ms,[e(m,null,{default:s(()=>[a("div",Ts,[e(r,u({type:i(T)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"],modelValue:i(S),"onUpdate:modelValue":l[0]||(l[0]=x=>H(S)?S.value=x:null)}),null,16,["type","class","modelValue"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:pe,"aria-label":"Toggle password visibility"},[i(T)?(y(),w(i(Y),{key:1,class:"h-5 w-3.5 text-black"})):(y(),w(i(J),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(K,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(d,{name:"confirmPassword"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l[14]||(l[14]=a("div",{class:"label w-[145px] flex gap-5 items-center"},[a("div",{class:"flex flex-col"},[a("span",{class:"text-xs"},"パスワード"),a("span",null,"（確認用）")]),a("span",{class:"text-red-500"},"※")],-1)),a("div",Us,[e(m,null,{default:s(()=>[a("div",As,[e(r,u({type:i(M)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length||!i(E)},"placeholder:text-[10px]"],modelValue:i(R),"onUpdate:modelValue":l[1]||(l[1]=x=>H(R)?R.value=x:null)}),null,16,["type","class","modelValue"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:me,"aria-label":"Toggle password visibility"},[i(M)?(y(),w(i(Y),{key:1,class:"h-5 w-3.5 text-black"})):(y(),w(i(J),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),!i(E)&&!n.length?(y(),L("span",Ls,te(("MESSAGES"in g?g.MESSAGES:i(b)).ERR006),1)):O("",!0),e(K,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(d,{name:"kaigoSoftware"},{default:s(({componentField:o,errors:n,meta:x})=>[e(c,{class:"relative flex gap-5"},{default:s(()=>[e(_,{label:"介護ソフト選択",class:"w-[145px]"}),a("div",Ds,[e(m,null,{default:s(()=>[e(be,He(We(o)),{default:s(()=>[e(_e,{class:W({"border-red-500":n.length&&!o.modelValue})},{default:s(()=>[e(xe,{placeholder:""})]),_:2},1032,["class"]),e(ve,null,{default:s(()=>[(y(!0),L(Ze,null,Qe(i(ie),v=>(y(),w(ge,{value:`${v.id}`},{default:s(()=>[A(te(v.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040),e(K,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeCompanyId"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"カイポケ法人ID",class:"w-[145px]"}),a("div",Bs,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeUserId"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"カイポケユーザーID",class:"w-[145px]"}),a("div",zs,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"kaipokeUserPassword"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"カイポケパスワード",class:"w-[145px]"}),a("div",js,[e(m,null,{default:s(()=>[a("div",qs,[e(r,u({type:i(I)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:fe,"aria-label":"Toggle password visibility"},[i(I)?(y(),w(i(Y),{key:1,class:"h-5 w-3.5 text-black"})):(y(),w(i(J),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(K,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(d,{name:"registerReason"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"ご登録の切っ掛け",class:"w-[145px]"}),a("div",Os,[e(m,null,{default:s(()=>[e(ae,u(o,{class:[{"border-red-500":n.length&&!o.modelValue},"reason-register relative resize-none"],placeholder:"1000文字以内"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{name:"paymentMethod"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"決済方法",class:"w-[145px]"}),a("div",Js,[e(m,null,{default:s(()=>[e(r,u({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1})]),l[20]||(l[20]=a("div",{class:"space"},null,-1)),a("div",Ys,[e(d,{name:"terms"},{default:s(({componentField:o,errors:n})=>[e(c,{class:"flex gap-5"},{default:s(()=>[e(_,{label:"利用規約",class:"w-[145px]"}),a("div",Hs,[e(m,null,{default:s(()=>[e(ae,u(o,{class:[{"border-red-500":n.length&&!o.modelValue},"resize-none h-[100px]"]}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(d,{type:"checkbox",name:"term"},{default:s(({value:o,handleChange:n,errors:x})=>[e(c,{class:"flex gap-5"},{default:s(()=>[l[17]||(l[17]=a("div",{class:"w-[145px]"},null,-1)),a("div",Ws,[a("div",Zs,[l[15]||(l[15]=a("span",{class:"label"},"利用規約確認",-1)),l[16]||(l[16]=a("span",{class:"text-red-500"},"※",-1)),e(ye,{checked:o,"onUpdate:checked":n,class:W({"border-red-500":x.length})},null,8,["checked","onUpdate:checked","class"])])])]),_:2},1024)]),_:1})])]),a("div",Qs,[e(q,{type:"submit",class:"flex self-center"},{default:s(()=>[i(z)?(y(),w(i(oe),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):O("",!0),l[21]||(l[21]=A(" アカウントを登録する "))]),_:1}),e(q,{variant:"cancel_btn",type:"button",class:"flex self-center min-w-[188px]",onClick:l[2]||(l[2]=o=>i(P)("/login"))},{default:s(()=>l[22]||(l[22]=[A(" キャンセル ")])),_:1})])],32)])])}}}),ua=as(Xs,[["__scopeId","data-v-402b9f7d"]]);export{ua as default};
