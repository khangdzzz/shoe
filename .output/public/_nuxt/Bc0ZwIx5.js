import{t as R,o as $,s as C,f as L,u as k,F as B,_ as M,a as T,b as N,c as P}from"./z2XR0PSa.js";import{_ as V}from"./BY_db9kn.js";import{_ as I}from"./4N-h7OfL.js";import{m as j,u as A,n as G,s as O,r as h,M as p,c as q,a as s,b as t,p as o,w as a,F as D,o as u,q as U,v as z,x as H,d}from"./CgayG4oP.js";import{u as J}from"./BQWFrECw.js";import{L as K}from"./DNeCRE_z.js";import"./BrF3EEg-.js";const Q={class:"login-page flex flex-col items-center justify-center h-[100vh]"},W={class:"flex flex-col min-w-[500px] bg-white px-12 pt-4 pb-8"},ne=j({__name:"index",setup(X){const _=A(),x=G(),{redirectPage:r}=J(),{notify:g}=O(x),l=h(!1),b=R($({email:C(L(p.ERR001,D.email)).email({message:p.ERR004})})),{handleSubmit:S}=k({validationSchema:b}),i=S(async c=>{var n;const e=c.email;l.value=!0,await _.forgotPassword(e),(n=g.value)!=null&&n.message||r("/confirm-email-reset-password"),l.value=!1});return(c,e)=>{const n=M,v=V,y=T,F=N,w=P,E=B,f=I;return u(),q("div",Q,[e[7]||(e[7]=s("div",{class:"logo"},"LOGO",-1)),s("div",W,[t(n),e[5]||(e[5]=s("h1",{class:"text-sm font-bold mb-[20px] mt-2"},"パスワードを忘れた場合",-1)),e[6]||(e[6]=s("div",{class:"flex flex-col gap-2 mb-[20px]"},[s("p",{class:"text-xs"},"登録済みのメールアドレスを入力してください。"),s("p",{class:"text-xs"},"パスワード再設定用のURLを送信します。")],-1)),s("form",{class:"flex flex-col gap-8",onSubmit:e[1]||(e[1]=(...m)=>o(i)&&o(i)(...m))},[t(E,{name:"email"},{default:a(({componentField:m})=>[t(w,{class:"relative"},{default:a(()=>[e[2]||(e[2]=s("span",{class:"font-medium"},"メールアドレス",-1)),t(y,null,{default:a(()=>[t(v,U({type:"text",placeholder:"メールアドレス"},m),null,16)]),_:2},1024),t(F,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)]),_:1}),t(f,{type:"submit",class:"flex self-center"},{default:a(()=>[o(l)?(u(),z(o(K),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):H("",!0),e[3]||(e[3]=d(" メールを送信 "))]),_:1}),t(f,{class:"w-[132px]",variant:"cancel_btn",type:"button",onClick:e[0]||(e[0]=m=>o(r)("/login"))},{default:a(()=>e[4]||(e[4]=[d(" キャンセル ")])),_:1})],32)])])}}});export{ne as default};
