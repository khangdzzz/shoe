import{t as $,o as w,s as T,f as C,u as M,F as k,_ as B,a as L,b as N,c as P}from"./Lyl1o9s0.js";import{L as V,_ as z}from"./BU0Xm4fz.js";import{_ as A}from"./uQZuqk6e.js";import{m as G,u as I,n as j,s as O,r as h,M as i,T as q,c as D,a as t,b as s,p as a,w as o,F as Y,o as d,q as H,v as J,x as K,d as _}from"./CbXXyIg_.js";import{u as Q}from"./D3j4oGQf.js";import"./DPST4t1e.js";const U={class:"login-page flex flex-col items-center justify-center h-[100vh]"},W={class:"flex flex-col min-w-[500px] bg-white px-12 pt-4 pb-8"},ne=G({__name:"index",setup(X){const x=I(),f=j(),{redirectPage:c}=Q(),{notify:g}=O(f),n=h(!1),S=$(w({email:T(C(i.ERR001,Y.email)).email({message:i.ERR004})})),{handleSubmit:b}=M({validationSchema:S}),p=b(async r=>{var m;if(n.value=!0,!/^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$/i.test(r.email)){f.setNotify({type:q.error,message:i.ERR004}),n.value=!1;return}await x.verifyEmail(r.email),(m=g.value)!=null&&m.message||c("/invite-member-success"),n.value=!1});return(r,e)=>{const m=B,v=z,y=L,E=N,F=P,R=k,u=A;return d(),D("div",U,[e[7]||(e[7]=t("div",{class:"logo"},"LOGO",-1)),t("div",W,[s(m),e[5]||(e[5]=t("h1",{class:"text-sm font-bold mt-[10px] mb-[20px]"},"会員登録メール認証",-1)),e[6]||(e[6]=t("div",{class:"flex flex-col gap-2 mb-[20px]"},[t("p",{class:"text-xs"},"会員登録のメールアドレスを入力してください。")],-1)),t("form",{class:"flex flex-col gap-8",onSubmit:e[1]||(e[1]=(...l)=>a(p)&&a(p)(...l))},[s(R,{name:"email"},{default:o(({componentField:l})=>[s(F,{class:"relative"},{default:o(()=>[e[2]||(e[2]=t("span",{class:"font-medium"},"メールアドレス",-1)),s(y,null,{default:o(()=>[s(v,H({type:"text",placeholder:"メールアドレス"},l),null,16)]),_:2},1024),s(E,{class:"absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"})]),_:2},1024)]),_:1}),s(u,{type:"submit",class:"flex self-center"},{default:o(()=>[a(n)?(d(),J(a(V),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):K("",!0),e[3]||(e[3]=_(" メールを送信 "))]),_:1}),s(u,{class:"w-[132px]",variant:"cancel_btn",type:"button",onClick:e[0]||(e[0]=l=>a(c)("/login"))},{default:o(()=>e[4]||(e[4]=[_(" キャンセル ")])),_:1})],32)])])}}});export{ne as default};
