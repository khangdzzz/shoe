import{t as ke,m,f as Pe,u as Ne,F as Se,_ as Re,a as Fe,c as Ce,b as Ve}from"./HXG_Pni8.js";import{_ as Ee}from"./zte-ZJos.js";import{u as Ge,_ as Ke}from"./Cijh0v0E.js";import{c as Ie,_ as $e}from"./plgbfb4Z.js";import{_ as Te,a as Ue,c as Ae,d as Me,b as Le}from"./D7FmLCqo.js";import{m as ie,a0 as De,a1 as Be,p as i,o as b,c as L,I as Q,D as W,z as ze,y as je,n as qe,Z as Oe,r as k,J as He,g as le,A as te,M as y,F as t,T as A,a,b as e,w as s,q as f,v as P,x as J,d as M,t as oe,B as Je,C as Ye,E as Ze,G as Qe}from"./CjpW1lXB.js";import{_ as We}from"./Cor229lG.js";import{o as Xe,s as _,b as es}from"./C7MCtxAn.js";import{g as ne}from"./CimQgyri.js";import{u as ss}from"./DoaTPcYl.js";import{u as as}from"./s_z4pVfJ.js";import{L as re}from"./DY6BMHKa.js";import{E as Y,a as Z}from"./D-ALjMYB.js";import{_ as ls}from"./DlAUqK2U.js";import"./KCRHomfj.js";import"./BYTz8R-e.js";const ts=ie({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(X,{emit:D}){const F=X,C=Ge(F,"modelValue",D,{passive:!0,defaultValue:F.defaultValue});return(B,N)=>De((b(),L("textarea",{"onUpdate:modelValue":N[0]||(N[0]=K=>Q(C)?C.value=K:null),class:W(i(Ie)("flex min-h-20 w-full rounded-md border border-input  px-3 py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-none focus-visible:border focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50",F.class))},null,2)),[[Be,i(C)]])}}),os={class:"login-page flex flex-col items-center justify-center !h-[100vh] overflow-hidden"},ns={class:"form flex flex-col gap-[5px] w-[770px] bg-white px-12 pt-4 pb-8 h-[90%]"},rs={class:"form flex flex-col gap-[25px] pb-[20px] overflow-y-auto scroll"},is={class:"company flex flex-col gap-5"},cs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},ds={class:"relative w-[71%] !m-[0px] !mr-[25px]"},ps={class:"information flex flex-col gap-5"},ms={class:"relative flex !m-[0px] gap-[20px]"},fs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},us={class:"flex flex-col gap-[15px] w-[71%]"},xs={class:"flex gap-5 items-center !m-[0px]"},_s={class:"pic-position flex gap-5 items-center w-[90%]"},gs={class:"pic-name flex items-center gap-5"},vs={class:"relative !m-[0px]"},bs={class:"relative !m-[0px]"},ys={class:"flex gap-5 items-center !m-[0px]"},hs={class:"pic-name flex items-center gap-5"},ws={class:"relative !m-[0px]"},ks={class:"relative !m-[0px]"},Ps={class:"flex flex-col gap-[15px] w-[71%]"},Ns={class:"flex gap-5 items-center !m-[0px]"},Ss={class:"pic-position flex gap-5 items-center w-[90%]"},Rs={class:"pic-name flex items-center gap-5"},Fs={class:"relative !m-[0px]"},Cs={class:"relative !m-[0px]"},Vs={class:"flex gap-5 items-center !m-[0px]"},Es={class:"pic-name flex items-center gap-5"},Gs={class:"relative !m-[0px]"},Ks={class:"relative !m-[0px]"},Is={class:"contact flex flex-col gap-6"},$s={class:"relative w-[40%] !m-[0px] !mr-[25px]"},Ts={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Us={class:"relative w-[71%] !m-[0px] !mr-[25px]"},As={class:"relative"},Ms={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Ls={class:"relative"},Ds={key:0,class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"},Bs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},zs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},js={class:"relative w-[71%] !m-[0px] !mr-[25px]"},qs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Os={class:"relative"},Hs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Js={class:"terms contact flex flex-col"},Ys={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Zs={class:"relative w-[71%] !m-[0px] !mr-[25px]"},Qs={class:"flex gap-5 items-center !m-[0px] pt-[10px]"},Ws={class:"flex gap-3 flex-col"},Xs=ie({__name:"index",setup(X){const D=ze(),F=je(),h=qe(),C=Oe(),B=ss(),{redirectPage:N}=as(),K=k(""),w=D.query.token,ce=k(),z=k(!1),j=k(!1),S=k(""),V=k(!0),R=k(""),I=k(!1),$=k(!1),T=k(!1),E=/^[\u30A0-\u30FF]+$/;He(()=>{var l;w||N("/login"),B.checkTokenValid("email",(w==null?void 0:w.toString())??"");const u=B.parseJwt((w==null?void 0:w.toString())??"");(!u||(l=ee.value)!=null&&l.message)&&setTimeout(()=>{N("/login")},1e3),K.value=(u==null?void 0:u.email)??"",O("email",K.value)}),le(()=>h.termHtml,()=>{if(h.termHtml){const u=h.termHtml.replace(/<br>/g,`
`);O("terms",u)}});const de=te(()=>{var u;return(u=F.masterData)==null?void 0:u.kaigoSoftwares}),ee=te(()=>h.notify),pe=ke(Xe({companyName:_(m(t.companyName)).min(1,m(t.companyName)).max(250,y.ERR011),companyNameKana:_(m(t.companyNameKana)).min(1,m(t.companyNameKana)).regex(E,{message:y.ERR005}),companyPostCode:_(m(t.companyPostCode)).min(1,t.companyPostCode),companyAddress:_(m(t.companyAddress)).min(1,t.companyAddress),frontPicPosition:_(m(t.frontPicPosition)).min(1,t.frontPicPosition),frontPicFamilyName:_(m(t.frontPicFamilyName)).min(1,t.frontPicFamilyName),frontPicGivenName:_(m(t.frontPicGivenName)).min(1,t.frontPicGivenName),frontPicFamilyNameKana:_(m(t.frontPicFamilyNameKana)).min(1,t.frontPicFamilyNameKana).regex(E,{message:y.ERR005}),frontPicGivenNameKana:_(m(t.frontPicGivenNameKana)).min(1,t.frontPicGivenNameKana).regex(E,{message:y.ERR005}),picPosition:_(m(t.picPosition)).min(1,t.picPosition),picFamilyName:_(m(t.picFamilyName)).min(1,t.picFamilyName),picGivenName:_(m(t.picGivenName)).min(1,t.picGivenName),picFamilyNameKana:_(m(t.picFamilyNameKana)).min(1,t.picFamilyNameKana).regex(E,{message:y.ERR005}),picGivenNameKana:_(m(t.picGivenNameKana)).min(1,t.picGivenNameKana).regex(E,{message:y.ERR005}),phoneNumber:_(m(t.phoneNumber)).min(1,t.phoneNumber),email:_(m(t.email)).min(1,t.email),password:ne(m(t.password)),confirmPassword:ne(m(t.confirmPassword)),kaigoSoftware:_(Pe(y.ERR002,t.kaigoSoftware)).min(1,t.kaigoSoftware),kaipokeCompanyId:_(m(t.kaipokeCompanyId)).min(1,t.kaipokeCompanyId),kaipokeUserId:_(m(t.kaipokeUserId)).min(1,t.kaipokeUserId),kaipokeUserPassword:_(m(t.kaipokeUserPassword)).min(8,{message:y.ERR007}),registerReason:_(m(t.registerReason)).min(1,t.registerReason).max(1e3),terms:_(m(t.terms)).min(1,t.terms),term:es({message:y.ERR003}).refine(u=>u,{message:y.ERR003})})),{handleSubmit:me,values:q,setFieldValue:O}=Ne({validationSchema:pe}),fe=()=>{T.value=!T.value},ue=()=>{$.value=!$.value},xe=()=>{I.value=!I.value},_e=async()=>{const u=q==null?void 0:q.companyPostCode;if(!u){h.setNotify({message:"郵便番号が存在しません。",type:A.error});return}z.value=!0;const l=await h.searchPostalCode(u);if(l!=null&&l.data){const{prefecture:U,city:g}=l.data,c=`${U} ${g}`;O("companyAddress",c),ce.value=l.data}else h.setNotify({message:"郵便番号が存在しません。",type:A.error});z.value=!1};le([R,S],()=>{if(!S.value||!R.value){V.value=!0;return}V.value=S.value===R.value});const se=me(async u=>{var r;if(h.clearNotify(),!V.value){h.setNotify({message:y.ERR006,type:A.error});return}j.value=!0;const{term:l,terms:U,...g}=u,c={...g,kaigoSoftware:parseInt(u.kaigoSoftware),verifyToken:(w==null?void 0:w.toString())??""};await C.registerNewUser(c),(r=ee.value)!=null&&r.message||N("/register/success"),j.value=!1},({errors:u})=>{const l=Object.values(u)[0];h.setNotify({message:l,type:A.error})});return(u,l)=>{const U=Re,g=Ee,c=Ke,r=Fe,d=Ce,p=Se,G=Ve,H=$e,ge=Te,ve=Ue,be=Le,ye=Ae,he=Me,ae=ts,we=We;return b(),L("div",os,[l[25]||(l[25]=a("div",{class:"logo"},"LOGO",-1)),a("div",ns,[e(U),l[24]||(l[24]=a("h1",{class:"text-sm font-bold mb-[20px]"},"会員登録",-1)),a("form",{class:"register flex flex-col gap-[25px]",onSubmit:l[3]||(l[3]=(...o)=>i(se)&&i(se)(...o))},[a("div",rs,[e(g,{label:"必須項目です",position:"left"}),a("div",is,[e(p,{name:"companyName"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"法人名",class:"w-[145px]"}),a("div",cs,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"companyNameKana"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"フリガナ",class:"w-[145px]"}),a("div",ds,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(G,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1})]),l[19]||(l[19]=a("div",{class:"space"},null,-1)),a("div",ps,[e(p,{name:"companyPostCode"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"郵便番号",class:"w-[145px] flex"}),a("div",ms,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024),e(H,{onClick:_e,type:"button",variant:"cancel_btn",class:"!m-[0px] !rounded-3xl"},{default:s(()=>[i(z)?(b(),P(i(re),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):J("",!0),l[4]||(l[4]=M(" 郵便番号から入力 "))]),_:1})])]),_:2},1024)]),_:1}),e(p,{name:"companyAddress"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"会社所在地",class:"w-[145px]"}),a("div",fs,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"frontPicPosition"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"代表者",class:"w-[145px] flex pt-[14px] items-baseline"}),a("div",us,[a("div",xs,[a("div",_s,[l[5]||(l[5]=a("span",{class:"label w-[35px]"},"役職",-1)),e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),a("div",gs,[l[6]||(l[6]=a("span",{class:"label flex w-[54%]"},"お名前",-1)),e(p,{name:"frontPicFamilyName"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",vs,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"frontPicGivenName"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",bs,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),a("div",ys,[l[8]||(l[8]=a("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),a("div",hs,[l[7]||(l[7]=a("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(p,{name:"frontPicFamilyNameKana"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",ws,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"frontPicGivenNameKana"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",ks,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1}),e(p,{name:"picPosition"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"ご担当者",class:"w-[145px] flex pt-[14px] items-baseline"}),a("div",Ps,[a("div",Ns,[a("div",Ss,[l[9]||(l[9]=a("span",{class:"label w-[35px]"},"役職",-1)),e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)]),a("div",Rs,[l[10]||(l[10]=a("span",{class:"label flex w-[54%]"},"お名前",-1)),e(p,{name:"picFamilyName"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",Fs,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"姓"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"picGivenName"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",Cs,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"名"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])]),a("div",Vs,[l[12]||(l[12]=a("div",{class:"pic-position flex gap-5 items-center w-[90%]"},null,-1)),a("div",Es,[l[11]||(l[11]=a("span",{class:"label flex w-[54%]"},"フリガナ",-1)),e(p,{name:"picFamilyNameKana"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",Gs,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"せい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024),e(p,{name:"picGivenNameKana"},{default:s(({componentField:x,errors:v})=>[e(d,{class:"flex gap-5"},{default:s(()=>[a("div",Ks,[e(r,null,{default:s(()=>[e(c,f({type:"text",class:"placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"},x,{class:{"border-red-500":v.length},placeholder:"めい"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)])])])]),_:2},1024)]),_:1})]),l[20]||(l[20]=a("div",{class:"space"},null,-1)),a("div",Is,[e(p,{name:"phoneNumber"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"電話番号",class:"w-[145px]"}),a("div",$s,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"email"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"メールアドレス",class:"w-[145px]"}),a("div",Ts,[e(r,null,{default:s(()=>[e(c,f({disabled:"",type:"text"},o,{class:["bg-[#ccc]",{"border-red-500":n.length}]}),null,16,["class"]),l[13]||(l[13]=a("span",{class:"absolute text-[10px] pt-[2px]"},"認証済みのメールアドレス",-1))]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"password"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"パスワード",class:"w-[145px]"}),a("div",Us,[e(r,null,{default:s(()=>[a("div",As,[e(c,f({type:i(T)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"],modelValue:i(S),"onUpdate:modelValue":l[0]||(l[0]=x=>Q(S)?S.value=x:null)}),null,16,["type","class","modelValue"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:fe,"aria-label":"Toggle password visibility"},[i(T)?(b(),P(i(Z),{key:1,class:"h-5 w-3.5 text-black"})):(b(),P(i(Y),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(G,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(p,{name:"confirmPassword"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[l[14]||(l[14]=a("div",{class:"label w-[145px] flex gap-5 items-center"},[a("div",{class:"flex flex-col"},[a("span",{class:"text-xs"},"パスワード"),a("span",null,"（確認用）")]),a("span",{class:"text-red-500"},"※")],-1)),a("div",Ms,[e(r,null,{default:s(()=>[a("div",Ls,[e(c,f({type:i($)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length||!i(V)},"placeholder:text-[10px]"],modelValue:i(R),"onUpdate:modelValue":l[1]||(l[1]=x=>Q(R)?R.value=x:null)}),null,16,["type","class","modelValue"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:ue,"aria-label":"Toggle password visibility"},[i($)?(b(),P(i(Z),{key:1,class:"h-5 w-3.5 text-black"})):(b(),P(i(Y),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),!i(V)&&!n.length?(b(),L("span",Ds,oe(("MESSAGES"in u?u.MESSAGES:i(y)).ERR006),1)):J("",!0),e(G,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(p,{name:"kaigoSoftware"},{default:s(({componentField:o,errors:n,meta:x})=>[e(d,{class:"relative flex gap-5"},{default:s(()=>[e(g,{label:"介護ソフト選択",class:"w-[145px]"}),a("div",Bs,[e(r,null,{default:s(()=>[e(he,Je(Ye(o)),{default:s(()=>[e(ve,{class:W({"border-red-500":n.length&&!o.modelValue})},{default:s(()=>[e(ge,{placeholder:""})]),_:2},1032,["class"]),e(ye,null,{default:s(()=>[(b(!0),L(Ze,null,Qe(i(de),v=>(b(),P(be,{value:`${v.id}`},{default:s(()=>[M(oe(v.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:2},1040),e(G,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"kaipokeCompanyId"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"カイポケ法人ID",class:"w-[145px]"}),a("div",zs,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"kaipokeUserId"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"カイポケユーザーID",class:"w-[145px]"}),a("div",js,[e(r,null,{default:s(()=>[e(c,f({type:"text"},o,{class:{"border-red-500":n.length}}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{name:"kaipokeUserPassword"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"カイポケパスワード",class:"w-[145px]"}),a("div",qs,[e(r,null,{default:s(()=>[a("div",Os,[e(c,f({type:i(I)?"text":"password"},o,{placeholder:"英小文字、数字を含む、半角英数字８文字以上",class:[{"border-red-500":n.length},"placeholder:text-[10px]"]}),null,16,["type","class"]),a("button",{type:"button",class:"absolute right-[15px] top-1/2 transform -translate-y-1/2",onClick:xe,"aria-label":"Toggle password visibility"},[i(I)?(b(),P(i(Z),{key:1,class:"h-5 w-3.5 text-black"})):(b(),P(i(Y),{key:0,class:"h-5 w-3.5 text-black"}))])])]),_:2},1024),e(G,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})])]),_:2},1024)]),_:1}),e(p,{name:"registerReason"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[e(g,{label:"ご登録の切っ掛け",class:"w-[145px]"}),a("div",Hs,[e(r,null,{default:s(()=>[e(ae,f(o,{class:[{"border-red-500":n.length&&!o.modelValue},"reason-register relative resize-none"],placeholder:"1000文字以内"}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1})]),l[21]||(l[21]=a("div",{class:"space"},null,-1)),a("div",Js,[e(p,{name:"terms"},{default:s(({componentField:o,errors:n})=>[e(d,{class:"flex gap-5"},{default:s(()=>[l[15]||(l[15]=a("span",{class:"w-[145px] flex items-center"},"利用規約",-1)),a("div",Ys,[e(r,null,{default:s(()=>[e(ae,f({disabled:""},o,{class:[{"border-red-500":n.length&&!o.modelValue},"resize-none h-[100px] bg-[#fff] text-black disabled:opacity-80"]}),null,16,["class"])]),_:2},1024)])]),_:2},1024)]),_:1}),e(p,{type:"checkbox",name:"term"},{default:s(({value:o,handleChange:n,errors:x})=>[e(d,{class:"flex gap-5"},{default:s(()=>[l[18]||(l[18]=a("div",{class:"w-[145px]"},null,-1)),a("div",Zs,[a("div",Qs,[l[16]||(l[16]=a("span",{class:"label"},"利用規約確認",-1)),l[17]||(l[17]=a("span",{class:"text-red-500"},"※",-1)),e(we,{checked:o,"onUpdate:checked":n,class:W({"border-red-500":x.length})},null,8,["checked","onUpdate:checked","class"])])])]),_:2},1024)]),_:1})])]),a("div",Ws,[e(H,{type:"submit",class:"flex self-center"},{default:s(()=>[i(j)?(b(),P(i(re),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):J("",!0),l[22]||(l[22]=M(" アカウントを登録する "))]),_:1}),e(H,{variant:"cancel_btn",type:"button",class:"flex self-center min-w-[188px]",onClick:l[2]||(l[2]=o=>i(N)("/login"))},{default:s(()=>l[23]||(l[23]=[M(" キャンセル ")])),_:1})])],32)])])}}}),_a=ls(Xs,[["__scopeId","data-v-7e40ba41"]]);export{_a as default};
