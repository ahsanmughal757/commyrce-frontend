(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{7607:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[slug]",function(){return t(5880)}])},5880:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(4051),o=t.n(r),s=t(5893),i=t(3412),c=(t(4715),t(1664),t(9669)),a=t.n(c),l=t(1163),d=t(7294),u=(t(2026),t(9473)),h=t(1850);function f(e,n,t,r,o,s,i){try{var c=e[s](i),a=c.value}catch(l){return void t(l)}c.done?n(a):Promise.resolve(a).then(r,o)}function m(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.cart.cartList})),t=(0,d.useState)({}),r=(t[0],t[1],(0,d.useState)(1)),i=r[0],c=r[1],m=(0,l.useRouter)(),x=m.query,p=x.name,v=x.price,g=x.description,w=x.category,j=x.image,k=(0,d.useState)("");k[0],k[1];(0,d.useEffect)((function(){console.log(n)}),[n]);var b=function(){var n,t=(n=o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a()({method:"POST",url:"http://localhost:3001/cart",headers:{token:sessionStorage.getItem("token")}}).then((function(n){if(413===n.data.status)return m.push("/login");e((0,h.Xq)({id:Math.floor(1e3*Math.random())+1,name:p,price:v,description:g,category:w,image:j,pieces:i}))})).catch((function(e){return console.log(e)}));case 2:n.sent;case 3:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var s=n.apply(e,t);function i(e){f(s,r,o,i,c,"next",e)}function c(e){f(s,r,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"flex flex-wrap h-screen justify-evenly lg:my-28 ",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)("img",{className:"rounded-md shadow-md",src:decodeURIComponent(j),width:300,alt:"product"})}),(0,s.jsxs)("div",{className:"w-96 bg-slate-100 p-8 rounded-md",children:[(0,s.jsx)("h1",{className:"text-2xl font-semibold mb-4",children:p}),(0,s.jsxs)("h2",{className:"text-xl mb-4",children:[v,"$"]}),(0,s.jsx)("p",{className:"",children:g}),(0,s.jsxs)("div",{className:"flex my-8 align-baseline",children:[(0,s.jsx)("button",{className:"bg-red-600 px-4 py-2 text-yellow-50 hover:bg-red-700 rounded-md mr-4",onClick:b,children:"ADD TO CART"}),(0,s.jsxs)("div",{className:"flex mt-1 select-none",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-left cursor-pointer mt-1 mx-2 hover:bg-red-100 rounded-full",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(){1!==i&&c(i-1)},children:[(0,s.jsx)("desc",{children:"Download more icon variants from https://tabler-icons.io/i/caret-left"}),(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(270 12 12)"})]}),(0,s.jsx)("span",{className:"bg-slate-300 rounded-full w-8 h-8 text-center align-middle font-medium",children:i}),(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-right cursor-pointer mt-1 mx-2 hover:bg-red-100 rounded-full",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(){c(i+1)},children:[(0,s.jsx)("desc",{children:"Download more icon variants from https://tabler-icons.io/i/caret-right"}),(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(90 12 12)"})]})]})]})]})]})}m.getLayout=function(e){return(0,s.jsx)(i.Z,{children:e})}}},function(e){e.O(0,[774,888,179],(function(){return n=7607,e(e.s=n);var n}));var n=e.O();_N_E=n}]);