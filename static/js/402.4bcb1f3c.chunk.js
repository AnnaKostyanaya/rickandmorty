"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[402],{402:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var a=t(433),n=t(439),s=t(791),c=t(87),i=t(689),o=t(690),l="Filter_container__L5eml",u="Filter_field__IlYZE",_="Filter_text__uqQRu",h="Filter_iconContainer__rVlMA",m="Filter_icon_search__iY3xd",d=t(184),f=function(e){var r=e.value,t=e.onChange;return(0,d.jsx)("div",{className:l,children:(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("span",{className:h,children:(0,d.jsx)("svg",{className:m,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z",fill:"black",fillOpacity:"0.54"})})}),(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:_,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Filter by name...",value:r,onChange:t})})]})})},p=t(405),v={picture:"Characters_picture__WTKwM",container:"Characters_container__pLArP",gallery:"Characters_gallery__Xdkt9",list:"Characters_list__ZLTyH",item:"Characters_item__SWoud",hero:"Characters_hero__WafPG",avatar:"Characters_avatar__fs2qF",about:"Characters_about__8XDhL",title_elements:"Characters_title_elements__ZyTlM",text_name:"Characters_text_name__h0fwR",text_species:"Characters_text_species__KJ-kZ",btnPart:"Characters_btnPart__5HSob",loadMoreBtn:"Characters_loadMoreBtn__VwkoJ",icon_from:"Characters_icon_from__sA75I",error:"Characters_error__ALGN5"},x=function(){var e=(0,p.Z)("characters",[]),r=(0,n.Z)(e,2),t=r[0],l=r[1],u=(0,p.Z)("pageNumber","1"),_=(0,n.Z)(u,2),h=_[0],m=_[1],x=(0,p.Z)("filter",""),C=(0,n.Z)(x,2),g=C[0],N=C[1],j=(0,s.useState)(""),w=(0,n.Z)(j,2),Z=w[0],b=w[1],y=(0,i.TH)();(0,s.useEffect)((function(){if(!(Number(h)>42))try{(0,o.q)(h).then((function(e){var r=e.map((function(e){var r=e.id,t=e.name,a=e.status,n=e.species,s=e.gender,c=e.origin,i=e.type;return{id:r,name:t,status:a,species:n,gender:s,image:e.image,origin:c,type:i}}));l((function(e){var t=[].concat((0,a.Z)(e),(0,a.Z)(r)).reduce((function(e,r){return e.find((function(e){return e.id===r.id}))||e.push(r),e}),[]);return console.log(t),(0,a.Z)(t)}))}))}catch(Z){b(Z)}}),[h,b,l]);var L=function(){var e=g.toLowerCase(),r=t.filter((function(r){return r.name.toLowerCase().includes(e)}));return(0,a.Z)(r).sort((function(e,r){return e.name.localeCompare(r.name)}))}();return(0,d.jsxs)("div",{className:v.container,children:[(0,d.jsx)("div",{className:v.picture}),(0,d.jsx)(f,{value:g,onChange:function(e){N(e.currentTarget.value)}}),(0,d.jsx)("div",{className:v.gallery,children:(0,d.jsx)("ul",{className:v.list,children:L.map((function(e){var r=e.id,t=e.name,a=e.species,n=e.image;return(0,d.jsx)("li",{className:v.item,children:(0,d.jsx)(c.rU,{className:v.link,to:"character/".concat(r),state:{from:y},children:(0,d.jsxs)("div",{className:v.hero,children:[(0,d.jsx)("div",{style:{"--bg-image":"url(".concat(n,")")},className:v.avatar}),(0,d.jsx)("div",{className:v.about,children:(0,d.jsxs)("div",{className:v.title_elements,children:[(0,d.jsx)("p",{className:v.text_name,children:t}),(0,d.jsx)("p",{className:v.text_species,children:a})]})})]})})},function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,r="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&t[e];r+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return r}())}))})}),Number(h)<=41&&""===g&&(0,d.jsxs)("div",{className:v.btnPart,children:[(0,d.jsx)("button",{type:"button",onClick:function(){m((function(e){return Number(e)+1}))},className:v.loadMoreBtn,children:"Load more"}),(0,d.jsx)("svg",{className:v.icon_from,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"black"})})]}),42===h&&t&&(0,d.jsx)("p",{className:v.error,children:"You've reached the end of search results."}),Z&&(0,d.jsx)("p",{children:"Error"})]})}},690:function(e,r,t){t.d(r,{q:function(){return i},z:function(){return o}});var a=t(861),n=t(757),s=t.n(n),c=t(243);c.Z.defaults.baseURL="https://rickandmortyapi.com/api";var i=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/character/?page=".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/character/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},405:function(e,r,t){var a=t(439),n=t(791);r.Z=function(e,r){var t=(0,n.useState)((function(){try{var t=JSON.parse(localStorage.getItem(e));return t||r}catch(a){return r}})),s=(0,a.Z)(t,2),c=s[0],i=s[1];return(0,n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[c,e]),[c,i]}}}]);
//# sourceMappingURL=402.4bcb1f3c.chunk.js.map