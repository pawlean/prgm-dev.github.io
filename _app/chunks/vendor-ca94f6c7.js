function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,c,i){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(a){const r=s(n,e,o,i);t.p(r,a)}}let l,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const t=d(1,r+1,(t=>n[e[t]].claim_order),n[s].claim_order)-1;o[s]=e[t]+1;const c=t+1;e[c]=s,r=Math.max(c,r)}const c=[],i=[];let a=n.length-1;for(let s=e[r]+1;0!=s;s=o[s-1]){for(c.push(n[s-1]);a>=s;a--)i.push(n[a]);a--}for(;a>=0;a--)i.push(n[a]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,u=0;s<i.length;s++){for(;u<c.length&&i[s].claim_order>=c[u].claim_order;)u++;const n=u<c.length?c[u]:null;t.insertBefore(i[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){f&&!e?h(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function y(){return g("")}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function w(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c))return e(c),t.splice(o,1),r||(t.claim_info.last_index=o),c}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c))return e(c),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,c}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function k(t,n,e,o){return w(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):_(n)))}function v(t,n){return w(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>g(n)),!0)}function E(t){return v(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n=document.body){return Array.from(n.querySelectorAll(t))}function N(t){l=t}function j(){if(!l)throw new Error("Function called outside component initialization");return l}function M(t){j().$$.on_mount.push(t)}function B(t){j().$$.after_update.push(t)}function C(t,n){j().$$.context.set(t,n)}const O=[],q=[],I=[],T=[],z=Promise.resolve();let F=!1;function D(t){I.push(t)}let G=!1;const H=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];N(n),P(n.$$)}for(N(null),O.length=0;q.length;)q.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];H.has(n)||(H.add(n),n())}I.length=0}while(O.length);for(;T.length;)T.pop()();F=!1,G=!1,H.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const K=new Set;let L;function Q(){L={r:0,c:[],p:L}}function R(){L.r||r(L.c),L=L.p}function U(t,n){t&&t.i&&(K.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),L.c.push((()=>{K.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function W(t,n){V(t,1,1,(()=>{n.delete(t.key)}))}function X(t,n,e,o,r,c,i,a,s,u,l,f){let d=t.length,h=c.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const _=[],g=new Map,$=new Map;for(p=h;p--;){const t=f(r,c,p),a=e(t);let s=i.get(a);s?o&&s.p(t,n):(s=u(a,t),s.c()),g.set(a,_[p]=s),a in m&&$.set(a,Math.abs(p-m[a]))}const y=new Set,b=new Set;function x(t){U(t,1),t.m(a,l),i.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=_[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,h--):g.has(r)?!i.has(o)||y.has(o)?x(n):b.has(r)?d--:$.get(o)>$.get(r)?(b.add(o),x(n)):(y.add(r),d--):(s(e,i),d--)}for(;d--;){const n=t[d];g.has(n.key)||s(n,i)}for(;h;)x(_[h-1]);return _}function Y(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],a=n[c];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,i){const{fragment:a,on_mount:s,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,o),i||D((()=>{const n=s.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(D)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(O.push(t),F||(F=!0,z.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(n,e,c,i,a,s,u=[-1]){const d=l;N(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(h.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&rt(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),e.target){if(e.hydrate){f=!0;const t=x(e.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();e.intro&&U(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),f=!1,J()}N(d)}class it{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function st(n,e=t){let o;const r=[];function c(t){if(i(n,t)&&(n=t,o)){const t=!at.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),at.push(t,n)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,a=t){const s=[i,a];return r.push(s),1===r.length&&(o=e(c)||t),i(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,Q as B,st as C,a as D,S as E,h as F,u as G,t as H,X as I,W as J,it as S,x as a,b,k as c,m as d,_ as e,p as f,v as g,A as h,ct as i,tt as j,$ as k,y as l,nt as m,E as n,et as o,Y as p,Z as q,V as r,i as s,g as t,R as u,U as v,ot as w,C as x,B as y,M as z};
