import{r as C,g as _,Y as N,C as k,l as E,m as I,S as J,U as O,q as S,o as T,c as U,A as $,I as B}from"./44PrbAiV.js";import{c as D}from"./Dfpzai34.js";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const F=t=>typeof t<"u";function G(t){return JSON.parse(JSON.stringify(t))}function M(t,o,s,m={}){var n,c,i;const{clone:a=!1,passive:h=!1,eventName:w,deep:p=!1,defaultValue:y,shouldEmit:b}=m,l=E(),g=s||(l==null?void 0:l.emit)||((n=l==null?void 0:l.$emit)==null?void 0:n.bind(l))||((i=(c=l==null?void 0:l.proxy)==null?void 0:c.$emit)==null?void 0:i.bind(l==null?void 0:l.proxy));let u=w;u=u||`update:${o.toString()}`;const v=e=>a?typeof a=="function"?a(e):G(e):e,x=()=>F(t[o])?v(t[o]):y,V=e=>{b?b(e)&&g(u,e):g(u,e)};if(h){const e=x(),f=C(e);let r=!1;return _(()=>t[o],d=>{r||(r=!0,f.value=v(d),N(()=>r=!1))}),_(f,d=>{!r&&(d!==t[o]||p)&&V(d)},{deep:p}),f}else return k({get(){return x()},set(e){V(e)}})}const z=I({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(t,{emit:o}){const s=t,n=M(s,"modelValue",o,{passive:!0,defaultValue:s.defaultValue});return(c,i)=>J((T(),U("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>$(n)?n.value=a:null),class:B(S(D)("flex h-[30px] w-full rounded-md border border-input bg-white px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border focus-visible:border-black  disabled:cursor-not-allowed disabled:opacity-50",s.class))},null,2)),[[O,S(n)]])}});export{z as _,M as u};
