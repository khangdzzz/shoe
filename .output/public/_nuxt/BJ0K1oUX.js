import{t as w,o as C,s as R,f as k,u as B,F as L,_ as M,a as T,b as N,c as V}from"./DJTH-4_G.js";import{_ as h}from"./XzmxFO_G.js";import{_ as I}from"./Dt26sB8u.js";import{m as j,u as A,n as G,p as O,s as q,r as D,M as p,c as P,a as t,b as s,q as n,w as o,F as z,o as f,v as H,x as J,y as K,d as c}from"./E8qkm6Hx.js";import{L as Q}from"./DJ8Voqlg.js";import"./Wwe2uIF1.js";import"./eynlMIZc.js";const U={class:"login-page flex flex-col items-center justify-center h-[100vh]"},W={class:"flex flex-col min-w-[500px] bg-white px-12 pt-4 pb-8"},ne=j({__name:"index",setup(X){const u=A(),d=G(),_=O(),{notify:x}=q(d),m=D(!1),b=w(C({email:R(k(p.ERR001,z.email)).email({message:p.ERR004})})),{handleSubmit:g}=B({validationSchema:b}),r=g(async l=>{var e;m.value=!0,await u.verifyEmail(l.email),(e=x.value)!=null&&e.message||_.push("/invite-member-success"),m.value=!1});return(l,e)=>{const v=M,S=h,y=T,F=N,E=V,$=L,i=I;return f(),P("div",U,[e[7]||(e[7]=t("div",{class:"logo"},"LOGO",-1)),t("div",W,[s(v),e[5]||(e[5]=t("h1",{class:"text-sm font-bold mt-[10px] mb-[20px]"},"会員登録メール認証",-1)),e[6]||(e[6]=t("div",{class:"flex flex-col gap-2 mb-[20px]"},[t("p",{class:"text-xs"},"会員登録のメールアドレスを入力してください。")],-1)),t("form",{class:"flex flex-col gap-8",onSubmit:e[1]||(e[1]=(...a)=>n(r)&&n(r)(...a))},[s($,{name:"email"},{default:o(({componentField:a})=>[s(E,{class:"relative"},{default:o(()=>[e[2]||(e[2]=t("span",{class:"font-medium"},"メールアドレス",-1)),s(y,null,{default:o(()=>[s(S,H({type:"text",placeholder:"メールアドレス"},a),null,16)]),_:2},1024),s(F,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)]),_:1}),s(i,{type:"submit",class:"flex self-center"},{default:o(()=>[n(m)?(f(),J(n(Q),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):K("",!0),e[3]||(e[3]=c(" メールを送信 "))]),_:1}),s(i,{class:"w-[132px]",variant:"cancel_btn",onClick:e[0]||(e[0]=a=>l.$router.push("/login"))},{default:o(()=>e[4]||(e[4]=[c(" キャンセル ")])),_:1})],32)])])}}});export{ne as default};
