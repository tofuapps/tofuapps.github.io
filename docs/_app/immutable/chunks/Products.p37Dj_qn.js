import{s as F,n as D,b as z}from"./scheduler.p0AqKxME.js";import{S as J,i as K,e as u,a as d,o as w,j as m,l as c,f as X,v as L,s as b,n as C,H as Q,b as k,p as G,x as U,y as M,q as p,w as O}from"./index.8s7mkh6A.js";import{e as R}from"./each.6w4Ej4nR.js";const Y={products:[{title:"loci",link:"https://loci.ink",image:"/assets/products/loci-icon-rounded.png",description:"A responsive, real-time collaborative whiteboarding webapp that works and behaves like a native app on every device you have."},{title:"hoard",link:"https://github.com/tofuapps/hoard",image:"/assets/products/hoard-thumbnail.png",description:"An open source terminal directory session manager. Bookmark locations and save sessions in most compatible POSIX compliant shells."},{title:"tofu-bot",link:"https://github.com/l-yc/discord-tofu",image:"/assets/products/tofu-bot-msg-alt.png",description:"A just-for-fun open source Discord bot with a suite of miscellaneous features, plus an AI module with sentiment analysis that provides message reactions and opinionated suggestions."},{title:"news-reader",image:"/assets/products/news-reader-thumbnail.png",description:"Proof-of-concept news reader site, created as a school project, that gathers news of similar topics from multiple sources and presents them in summarized paragraphs."},{title:"e2ee-chat",wip:!0,description:"An open source, proof-of-concept, end-to-end encrypted chat app and protocol capable of operating with your own encryption key pairs."}]};function T(l,e,i){const s=l.slice();return s[2]=e[i],s}function V(l){let e,i,s,t,n,a,h=l[2].title+"",P,N,f,_=l[2].description+"",y,j,E,S,g,v,A=l[2].link?"<span class='link'>Explore &gt;</span>":l[2].wip?"<strong>Work in Progress</strong>":"",H,I;return{c(){e=u("a"),i=u("img"),n=b(),a=u("h3"),P=C(h),N=b(),f=u("span"),y=C(_),j=b(),E=u("br"),S=b(),g=u("span"),v=new Q(!1),H=b(),this.h()},l(r){e=d(r,"A",{href:!0,target:!0,class:!0});var o=w(e);i=d(o,"IMG",{src:!0,alt:!0,class:!0}),n=k(o),a=d(o,"H3",{});var W=w(a);P=G(W,h),W.forEach(m),N=k(o),f=d(o,"SPAN",{class:!0});var q=w(f);y=G(q,_),q.forEach(m),j=k(o),E=d(o,"BR",{}),S=k(o),g=d(o,"SPAN",{class:!0});var B=w(g);v=U(B,!1),B.forEach(m),H=k(o),o.forEach(m),this.h()},h(){z(i.src,s=l[2].image||(l[2].wip?"https://via.placeholder.com/256x144?text=WIP":"https://via.placeholder.com/256x144?text=No+Image"))||c(i,"src",s),c(i,"alt",t=l[2].title+" thumbnail"),c(i,"class","svelte-1eolj4m"),c(f,"class","description svelte-1eolj4m"),v.a=null,c(g,"class","footer"),c(e,"href",I=l[2].link),c(e,"target","_blank"),c(e,"class","product svelte-1eolj4m"),M(e,"disabled",!l[2].link)},m(r,o){X(r,e,o),p(e,i),p(e,n),p(e,a),p(a,P),p(e,N),p(e,f),p(f,y),p(e,j),p(e,E),p(e,S),p(e,g),v.m(A,g),p(e,H)},p(r,o){o&1&&!z(i.src,s=r[2].image||(r[2].wip?"https://via.placeholder.com/256x144?text=WIP":"https://via.placeholder.com/256x144?text=No+Image"))&&c(i,"src",s),o&1&&t!==(t=r[2].title+" thumbnail")&&c(i,"alt",t),o&1&&h!==(h=r[2].title+"")&&O(P,h),o&1&&_!==(_=r[2].description+"")&&O(y,_),o&1&&A!==(A=r[2].link?"<span class='link'>Explore &gt;</span>":r[2].wip?"<strong>Work in Progress</strong>":"")&&v.p(A),o&1&&I!==(I=r[2].link)&&c(e,"href",I),o&3&&M(e,"disabled",!r[2].link)},d(r){r&&m(e)}}}function Z(l){let e,i=R(+l[0]==-1||isNaN(+l[0])?l[1]:l[1].slice(0,+l[0])),s=[];for(let t=0;t<i.length;t+=1)s[t]=V(T(l,i,t));return{c(){e=u("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=d(t,"DIV",{id:!0,class:!0});var n=w(e);for(let a=0;a<s.length;a+=1)s[a].l(n);n.forEach(m),this.h()},h(){c(e,"id","products-container"),c(e,"class","svelte-1eolj4m")},m(t,n){X(t,e,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(t,[n]){if(n&3){i=R(+t[0]==-1||isNaN(+t[0])?t[1]:t[1].slice(0,+t[0]));let a;for(a=0;a<i.length;a+=1){const h=T(t,i,a);s[a]?s[a].p(h,n):(s[a]=V(h),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},i:D,o:D,d(t){t&&m(e),L(s,t)}}}function $(l,e,i){let{limit:s=-1}=e;const t=Y.products;return l.$$set=n=>{"limit"in n&&i(0,s=n.limit)},[s,t]}class se extends J{constructor(e){super(),K(this,e,$,Z,F,{limit:0})}}export{se as P};