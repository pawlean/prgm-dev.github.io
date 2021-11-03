var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var X=(l,e,t)=>e in l?pe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,Y=(l,e)=>{for(var t in e||(e={}))he.call(e,t)&&X(l,t,e[t]);if(U)for(var t of U(e))me.call(e,t)&&X(l,t,e[t]);return l};import{S as Z,i as x,s as ee,e as v,t as P,k as O,c as b,a as y,g as T,d as p,n as V,b as s,f as R,F as c,h as te,l as ae,M as le,j as se,m as re,o as oe,x as H,u as W,v as ne,E as _e,w as ge,R as ve,r as be}from"../../chunks/vendor-d32fd47d.js";import{metadata as we}from"./posts/our-tech-stack-2021.svelte.md-d5167fb7.js";import{metadata as ke}from"./posts/our-tech-stack-2020.svelte.md-73026199.js";import{metadata as ye}from"./posts/understanding-cardano-rewards.svelte.md-a2dc7e73.js";import{N as $e}from"../../chunks/BlogLayout-ec1d2ca7.js";import"../../chunks/routes-c138df12.js";import"../../chunks/stores-a255a23f.js";function ie(l){let e,t,a,r,o,f,g,$,k,w,E,M,N,A,h=l[0].description&&ce(l);return{c(){e=v("a"),t=v("h2"),a=P(l[1]),o=O(),h&&h.c(),f=O(),g=v("div"),$=O(),k=v("a"),w=P("Read on..."),this.h()},l(_){e=b(_,"A",{"sveltekit:prefetch":!0,href:!0,"aria-labelledby":!0,"aria-describedby":!0,class:!0});var d=y(e);t=b(d,"H2",{id:!0,class:!0});var B=y(t);a=T(B,l[1]),B.forEach(p),o=V(d),h&&h.l(d),f=V(d),g=b(d,"DIV",{class:!0}),y(g).forEach(p),$=V(d),k=b(d,"A",{href:!0,class:!0});var D=y(k);w=T(D,"Read on..."),D.forEach(p),d.forEach(p),this.h()},h(){s(t,"id",r=""+(l[0].slug+"-title")),s(t,"class","text-xl font-semibold"),s(g,"class","flex-grow"),s(k,"href",E="/blog/posts/"+l[0].slug+"/"),s(k,"class","mt-2 highlight-on-hover svelte-1qyv8ru"),s(e,"sveltekit:prefetch",""),s(e,"href",M="/blog/posts/"+l[0].slug+"/"),s(e,"aria-labelledby",N=""+(l[0].slug+"-title")),s(e,"aria-describedby",A=""+(l[0].slug+"-description")),s(e,"class","w-full h-full p-4 bg-light-alt dark:bg-dark-alt rounded-lg hoverable:hover:shadow-lg transition-shadow duration-300 flex flex-col svelte-1qyv8ru")},m(_,d){R(_,e,d),c(e,t),c(t,a),c(e,o),h&&h.m(e,null),c(e,f),c(e,g),c(e,$),c(e,k),c(k,w)},p(_,d){d&2&&te(a,_[1]),d&1&&r!==(r=""+(_[0].slug+"-title"))&&s(t,"id",r),_[0].description?h?h.p(_,d):(h=ce(_),h.c(),h.m(e,f)):h&&(h.d(1),h=null),d&1&&E!==(E="/blog/posts/"+_[0].slug+"/")&&s(k,"href",E),d&1&&M!==(M="/blog/posts/"+_[0].slug+"/")&&s(e,"href",M),d&1&&N!==(N=""+(_[0].slug+"-title"))&&s(e,"aria-labelledby",N),d&1&&A!==(A=""+(_[0].slug+"-description"))&&s(e,"aria-describedby",A)},d(_){_&&p(e),h&&h.d()}}}function ce(l){let e,t=l[0].description+"",a,r;return{c(){e=v("p"),a=P(t),this.h()},l(o){e=b(o,"P",{id:!0,class:!0});var f=y(e);a=T(f,t),f.forEach(p),this.h()},h(){s(e,"id",r=""+(l[0].slug+"-description")),s(e,"class","mt-2 text-sm opacity-60")},m(o,f){R(o,e,f),c(e,a)},p(o,f){f&1&&t!==(t=o[0].description+"")&&te(a,t),f&1&&r!==(r=""+(o[0].slug+"-description"))&&s(e,"id",r)},d(o){o&&p(e)}}}function Ee(l){let e,t=l[0]&&ie(l);return{c(){t&&t.c(),e=ae()},l(a){t&&t.l(a),e=ae()},m(a,r){t&&t.m(a,r),R(a,e,r)},p(a,[r]){a[0]?t?t.p(a,r):(t=ie(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:le,o:le,d(a){t&&t.d(a),a&&p(e)}}}function Ae(l,e,t){let a;var r;let{post:o=null}=e;return l.$$set=f=>{"post"in f&&t(0,o=f.post)},l.$$.update=()=>{l.$$.dirty&5&&t(1,a=t(2,r=o.title)!==null&&r!==void 0?r:"\u2014")},[o,a,r]}class je extends Z{constructor(e){super();x(this,e,Ae,Ee,ee,{post:0})}}function de(l,e,t){const a=l.slice();return a[2]=e[t],a}function ue(l){let e,t;return e=new je({props:{post:l[2]}}),{c(){se(e.$$.fragment)},l(a){re(e.$$.fragment,a)},m(a,r){oe(e,a,r),t=!0},p(a,r){const o={};r&1&&(o.post=a[2]),e.$set(o)},i(a){t||(H(e.$$.fragment,a),t=!0)},o(a){W(e.$$.fragment,a),t=!1},d(a){ne(e,a)}}}function Me(l){let e,t,a,r,o,f,g,$,k,w,E,M,N,A,h,_,d,B,D,I,S,C;document.title=e=F,$=new $e({});let q=l[0],u=[];for(let n=0;n<q.length;n+=1)u[n]=ue(de(l,q,n));const fe=n=>W(u[n],1,1,()=>{u[n]=null});return{c(){t=v("meta"),a=v("meta"),r=v("meta"),o=v("meta"),f=O(),g=v("div"),se($.$$.fragment),k=O(),w=v("h2"),E=v("span"),M=P("What we think"),N=P(`,
		`),A=v("span"),h=P("what we\u2019re working on"),_=P(`,
		`),d=v("span"),B=P("and how we\u2019re building it."),D=O(),I=v("div"),S=v("div");for(let n=0;n<u.length;n+=1)u[n].c();this.h()},l(n){const m=_e('[data-svelte="svelte-ad6ykk"]',document.head);t=b(m,"META",{name:!0,property:!0,content:!0}),a=b(m,"META",{property:!0,content:!0}),r=b(m,"META",{property:!0,content:!0}),o=b(m,"META",{name:!0,property:!0,content:!0}),m.forEach(p),f=V(n),g=b(n,"DIV",{class:!0});var i=y(g);re($.$$.fragment,i),k=V(i),w=b(i,"H2",{class:!0});var j=y(w);E=b(j,"SPAN",{class:!0});var z=y(E);M=T(z,"What we think"),z.forEach(p),N=T(j,`,
		`),A=b(j,"SPAN",{class:!0});var G=y(A);h=T(G,"what we\u2019re working on"),G.forEach(p),_=T(j,`,
		`),d=b(j,"SPAN",{class:!0});var J=y(d);B=T(J,"and how we\u2019re building it."),J.forEach(p),j.forEach(p),D=V(i),I=b(i,"DIV",{class:!0});var K=y(I);S=b(K,"DIV",{class:!0});var Q=y(S);for(let L=0;L<u.length;L+=1)u[L].l(Q);Q.forEach(p),K.forEach(p),i.forEach(p),this.h()},h(){s(t,"name","title"),s(t,"property","title"),s(t,"content",F),s(a,"property","og:title"),s(a,"content",F),s(r,"property","og:type"),s(r,"content","website"),s(o,"name","description"),s(o,"property","og:description"),s(o,"content","Official blog of prgm.dev, a Paris-based company crafting delightful software."),s(E,"class","whitespace-nowrap"),s(A,"class","whitespace-nowrap"),s(d,"class","whitespace-nowrap"),s(w,"class","mt-2 text-xl opacity-60 w-full md:w-4/6"),s(S,"class","grid grid-cols-1 sm:grid-cols-2 gap-4"),s(I,"class","mt-5 h-screen"),s(g,"class","mx-auto max-w-screen-md px-4 md:px-0 my-5")},m(n,m){c(document.head,t),c(document.head,a),c(document.head,r),c(document.head,o),R(n,f,m),R(n,g,m),oe($,g,null),c(g,k),c(g,w),c(w,E),c(E,M),c(w,N),c(w,A),c(A,h),c(w,_),c(w,d),c(d,B),c(g,D),c(g,I),c(I,S);for(let i=0;i<u.length;i+=1)u[i].m(S,null);C=!0},p(n,[m]){if((!C||m&0)&&e!==(e=F)&&(document.title=e),m&1){q=n[0];let i;for(i=0;i<q.length;i+=1){const j=de(n,q,i);u[i]?(u[i].p(j,m),H(u[i],1)):(u[i]=ue(j),u[i].c(),H(u[i],1),u[i].m(S,null))}for(be(),i=q.length;i<u.length;i+=1)fe(i);ge()}},i(n){if(!C){H($.$$.fragment,n);for(let m=0;m<q.length;m+=1)H(u[m]);C=!0}},o(n){W($.$$.fragment,n),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)W(u[m]);C=!1},d(n){p(t),p(a),p(r),p(o),n&&p(f),n&&p(g),ne($),ve(u,n)}}}const Ce=!0,Ne=[{slug:"our-tech-stack-2021",metadata:we},{slug:"our-tech-stack-2020",metadata:ke},{slug:"understanding-cardano-rewards",metadata:ye}],F="prgm.dev / Blog";function Pe(l,e,t){let a=Object.fromEntries(Ne.map(({slug:o,metadata:f})=>[o,Y({slug:o},f)])),r=[];return t(0,r=Object.values(a)),[r]}class Re extends Z{constructor(e){super();x(this,e,Pe,Me,ee,{})}}export{Re as default,Ce as prerender,Ne as slugMapping};
