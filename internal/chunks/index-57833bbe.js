function B(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(O)}function K(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function Q(t){return Object.keys(t).length===0}function _t(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,u){if(r){const c=P(n,e,i,u);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){return t==null?"":t}let E=!1;function W(){E=!0}function U(){E=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const s=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=s?r+1:V(1,r,y=>n[e[y]].claim_order,s))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const u=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(c[l],f)}}function Y(t,n){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Z(t,n,e){t.insertBefore(n,e||null)}function tt(t,n,e){E&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function gt(){return k(" ")}function xt(){return k("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function wt(t,n,e){return et(t,n,e,D)}function it(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function Et(t){return it(t," ")}function C(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function At(t){const n=C(t,"HTML_TAG_START",0),e=C(t,"HTML_TAG_END",n);if(n===e)return new H;G(t);const i=t.splice(n,e-n+1);w(i[0]),w(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(r)}function Tt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n){t.value=n==null?"":n}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n=document.body){return Array.from(n.querySelectorAll(t))}class rt{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Z(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class H extends rt{constructor(n){super(),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}}let m;function h(t){m=t}function S(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){S().$$.on_mount.push(t)}function vt(t){S().$$.after_update.push(t)}function Mt(t,n){S().$$.context.set(t,n)}const d=[],L=[],b=[],q=[],F=Promise.resolve();let T=!1;function I(){T||(T=!0,F.then(R))}function Ct(){return I(),F}function N(t){b.push(t)}const A=new Set;let x=0;function R(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),lt(n.$$)}for(h(null),d.length=0,x=0;L.length;)L.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];A.has(e)||(A.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();T=!1,A.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const $=new Set;let _;function Ht(){_={r:0,c:[],p:_}}function Lt(){_.r||p(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=n[u];if(o){for(const l in c)l in o||(i[l]=1);for(const l in o)r[l]||(e[l]=o[l],r[l]=1);t[u]=o}else for(const l in c)r[l]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(n,e),i||N(()=>{const l=u.map(O).filter(K);c?c.push(...l):p(l),t.$$.on_mount=[]}),o.forEach(N)}function st(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,u,c,o=[-1]){const l=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:B,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};c&&c(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,y,...j)=>{const v=j.length?j[0]:y;return s.ctx&&r(s.ctx[a],s.ctx[a]=v)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](v),f&&ut(t,a)),y}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){W();const a=nt(n.target);s.fragment&&s.fragment.l(a),a.forEach(w)}else s.fragment&&s.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),U(),R()}h(l)}class zt{$destroy(){st(this,1),this.$destroy=B}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,st as B,J as C,B as D,Ct as E,_t as F,Y as G,ht as H,mt as I,dt as J,St as K,ft as L,pt as M,H as N,At as O,yt as P,Nt as Q,bt as R,zt as S,p as T,nt as a,$t as b,wt as c,w as d,D as e,kt as f,tt as g,it as h,Gt as i,Tt as j,gt as k,xt as l,Et as m,Ht as n,qt as o,Lt as p,ct as q,Mt as r,at as s,k as t,vt as u,jt as v,Pt as w,Dt as x,ot as y,Bt as z};
