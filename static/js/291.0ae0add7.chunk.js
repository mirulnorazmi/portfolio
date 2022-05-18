"use strict";(self.webpackChunkportfolio2=self.webpackChunkportfolio2||[]).push([[291],{456:function(n,t,e){e(2791);var a=e(4233),o=e(4270),r=e(267),i=e(1702),c=e(1458),s=e(184);t.Z=function(n){var t=(0,a.v9)((function(n){return n.redux})),e=((0,r.cw)(),(0,i.TH)());return(0,s.jsxs)("div",{id:"page_".concat(n.id),children:[(0,s.jsxs)(o.q,{children:[(0,s.jsx)("title",{children:n.title}),(0,s.jsx)("meta",{name:"description",content:"".concat(n.desc)}),(0,s.jsx)("link",{rel:"canonical",href:"".concat(c.v.CLIENT_ENDPOINT).concat(e.pathname)}),(0,s.jsx)("meta",{property:"og:url",content:"".concat(c.v.CLIENT_ENDPOINT).concat(e.pathname)}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:n.title}),(0,s.jsx)("meta",{property:"og:description",content:"".concat(n.desc)}),(0,s.jsx)("meta",{property:"og:image",content:"".concat(n.image?n.image:"/portfolio/assets/index/favicon-96x96.png")}),(0,s.jsx)("meta",{property:"og:image:alt",content:n.title}),(0,s.jsx)("meta",{property:"og:site_name",content:t.app.title}),(0,s.jsx)("meta",{property:"fb:app_id",content:"156594362596497"}),(0,s.jsx)("meta",{name:"twitter:site",content:"@mirulnorazmi"}),(0,s.jsx)("meta",{property:"og:url",content:"".concat(c.v.CLIENT_ENDPOINT).concat(e.pathname)}),(0,s.jsx)("meta",{name:"twitter:title",content:n.title}),(0,s.jsx)("meta",{name:"twitter:card",content:"".concat(n.desc)}),(0,s.jsx)("meta",{name:"twitter:description",content:"".concat(n.desc)}),(0,s.jsx)("meta",{name:"twitter:image",content:"".concat(n.image?n.image:"/portfolio/assets/index/favicon-96x96.png")}),(0,s.jsx)("meta",{name:"twitter:image:alt",content:n.title})]}),(0,s.jsxs)("div",{style:{display:"none"},children:[(0,s.jsx)("h1",{children:n.title}),(0,s.jsx)("h2",{children:n.desc})]}),n.children]})}},6291:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var a=e(2791),o=e(4233),r=e(1702),i=e(1721),c=e(7462),s=e(6645),u=e(6111);function f(n){return"/"===n.charAt(0)?n:"/"+n}function l(n){return"/"===n.charAt(0)?n.substr(1):n}function d(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function h(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function v(n){var t=n.pathname,e=n.search,a=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(o+="#"===a.charAt(0)?a:"#"+a),o}function p(n,t,e,a){var o;"string"===typeof n?(o=function(n){var t=n||"/",e="",a="",o=t.indexOf("#");-1!==o&&(a=t.substr(o),t=t.substr(0,o));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===a?"":a}}(n),o.state=t):(void 0===(o=(0,c.Z)({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(r){throw r instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):r}return e&&(o.key=e),a?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=(0,s.Z)(o.pathname,a.pathname)):o.pathname=a.pathname:o.pathname||(o.pathname="/"),o}function m(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,a,o){if(null!=n){var r="function"===typeof n?n(t,e):n;"string"===typeof r?"function"===typeof a?a(r,o):o(!0):o(!1!==r)}else o(!0)},appendListener:function(n){var e=!0;function a(){e&&n.apply(void 0,arguments)}return t.push(a),function(){e=!1,t=t.filter((function(n){return n!==a}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];t.forEach((function(n){return n.apply(void 0,e)}))}}}var w=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(n,t){t(window.confirm(n))}var x="popstate",y="hashchange";function j(){try{return window.history.state||{}}catch(n){return{}}}function P(n){void 0===n&&(n={}),w||(0,u.Z)(!1);var t=window.history,e=function(){var n=window.navigator.userAgent;return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),a=!(-1===window.navigator.userAgent.indexOf("Trident")),o=n,r=o.forceRefresh,i=void 0!==r&&r,s=o.getUserConfirmation,l=void 0===s?g:s,P=o.keyLength,O=void 0===P?6:P,b=n.basename?h(f(n.basename)):"";function k(n){var t=n||{},e=t.key,a=t.state,o=window.location,r=o.pathname+o.search+o.hash;return b&&(r=d(r,b)),p(r,a,e)}function E(){return Math.random().toString(36).substr(2,O)}var A=m();function T(n){(0,c.Z)(F,n),F.length=t.length,A.notifyListeners(F.location,F.action)}function C(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||Z(k(n.state))}function L(){Z(k(j()))}var N=!1;function Z(n){if(N)N=!1,T();else{A.confirmTransitionTo(n,"POP",l,(function(t){t?T({action:"POP",location:n}):function(n){var t=F.location,e=I.indexOf(t.key);-1===e&&(e=0);var a=I.indexOf(n.key);-1===a&&(a=0);var o=e-a;o&&(N=!0,U(o))}(n)}))}}var R=k(j()),I=[R.key];function S(n){return b+v(n)}function U(n){t.go(n)}var _=0;function H(n){1===(_+=n)&&1===n?(window.addEventListener(x,C),a&&window.addEventListener(y,L)):0===_&&(window.removeEventListener(x,C),a&&window.removeEventListener(y,L))}var D=!1;var F={length:t.length,action:"POP",location:R,createHref:S,push:function(n,a){var o="PUSH",r=p(n,a,E(),F.location);A.confirmTransitionTo(r,o,l,(function(n){if(n){var a=S(r),c=r.key,s=r.state;if(e)if(t.pushState({key:c,state:s},null,a),i)window.location.href=a;else{var u=I.indexOf(F.location.key),f=I.slice(0,u+1);f.push(r.key),I=f,T({action:o,location:r})}else window.location.href=a}}))},replace:function(n,a){var o="REPLACE",r=p(n,a,E(),F.location);A.confirmTransitionTo(r,o,l,(function(n){if(n){var a=S(r),c=r.key,s=r.state;if(e)if(t.replaceState({key:c,state:s},null,a),i)window.location.replace(a);else{var u=I.indexOf(F.location.key);-1!==u&&(I[u]=r.key),T({action:o,location:r})}else window.location.replace(a)}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(n){void 0===n&&(n=!1);var t=A.setPrompt(n);return D||(H(1),D=!0),function(){return D&&(D=!1,H(-1)),t()}},listen:function(n){var t=A.appendListener(n);return H(1),function(){H(-1),t()}}};return F}var O="hashchange",b={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+l(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:l,decodePath:f},slash:{encodePath:f,decodePath:f}};function k(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function E(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function A(n){window.location.replace(k(window.location.href)+"#"+n)}function T(n){void 0===n&&(n={}),w||(0,u.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),a=e.getUserConfirmation,o=void 0===a?g:a,r=e.hashType,i=void 0===r?"slash":r,s=n.basename?h(f(n.basename)):"",l=b[i],x=l.encodePath,y=l.decodePath;function j(){var n=y(E());return s&&(n=d(n,s)),p(n)}var P=m();function T(n){(0,c.Z)(F,n),F.length=t.length,P.notifyListeners(F.location,F.action)}var C=!1,L=null;function N(){var n,t,e=E(),a=x(e);if(e!==a)A(a);else{var r=j(),i=F.location;if(!C&&(t=r,(n=i).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(L===v(r))return;L=null,function(n){if(C)C=!1,T();else{var t="POP";P.confirmTransitionTo(n,t,o,(function(e){e?T({action:t,location:n}):function(n){var t=F.location,e=S.lastIndexOf(v(t));-1===e&&(e=0);var a=S.lastIndexOf(v(n));-1===a&&(a=0);var o=e-a;o&&(C=!0,U(o))}(n)}))}}(r)}}var Z=E(),R=x(Z);Z!==R&&A(R);var I=j(),S=[v(I)];function U(n){t.go(n)}var _=0;function H(n){1===(_+=n)&&1===n?window.addEventListener(O,N):0===_&&window.removeEventListener(O,N)}var D=!1;var F={length:t.length,action:"POP",location:I,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=k(window.location.href)),e+"#"+x(s+v(n))},push:function(n,t){var e="PUSH",a=p(n,void 0,void 0,F.location);P.confirmTransitionTo(a,e,o,(function(n){if(n){var t=v(a),o=x(s+t);if(E()!==o){L=t,function(n){window.location.hash=n}(o);var r=S.lastIndexOf(v(F.location)),i=S.slice(0,r+1);i.push(t),S=i,T({action:e,location:a})}else T()}}))},replace:function(n,t){var e="REPLACE",a=p(n,void 0,void 0,F.location);P.confirmTransitionTo(a,e,o,(function(n){if(n){var t=v(a),o=x(s+t);E()!==o&&(L=t,A(o));var r=S.indexOf(v(F.location));-1!==r&&(S[r]=t),T({action:e,location:a})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(n){void 0===n&&(n=!1);var t=P.setPrompt(n);return D||(H(1),D=!0),function(){return D&&(D=!1,H(-1)),t()}},listen:function(n){var t=P.appendListener(n);return H(1),function(){H(-1),t()}}};return F}var C=e(3366);a.Component;a.Component;var L=function(n,t){return"function"===typeof n?n(t):n},N=function(n,t){return"string"===typeof n?p(n,null,null,t):n},Z=function(n){return n},R=a.forwardRef;"undefined"===typeof R&&(R=Z);var I=R((function(n,t){var e=n.innerRef,o=n.navigate,r=n.onClick,i=(0,C.Z)(n,["innerRef","navigate","onClick"]),s=i.target,u=(0,c.Z)({},i,{onClick:function(n){try{r&&r(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||s&&"_self"!==s||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),o())}});return u.ref=Z!==R&&t||e,a.createElement("a",u)}));var S=R((function(n,t){var e=n.component,o=void 0===e?I:e,i=n.replace,s=n.to,f=n.innerRef,l=(0,C.Z)(n,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(n){n||(0,u.Z)(!1);var e=n.history,r=N(L(s,n.location),n.location),d=r?e.createHref(r):"",h=(0,c.Z)({},l,{href:d,navigate:function(){var t=L(s,n.location);(i?e.replace:e.push)(t)}});return Z!==R?h.ref=t||f:h.innerRef=f,a.createElement(o,h)}))})),U=function(n){return n},_=a.forwardRef;"undefined"===typeof _&&(_=U);_((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,i=n.activeClassName,s=void 0===i?"active":i,f=n.activeStyle,l=n.className,d=n.exact,h=n.isActive,v=n.location,p=n.sensitive,m=n.strict,w=n.style,g=n.to,x=n.innerRef,y=(0,C.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(n){n||(0,u.Z)(!1);var e=v||n.location,i=N(L(g,e),e),j=i.pathname,P=j&&j.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=P?(0,r.LX)(e.pathname,{path:P,exact:d,sensitive:p,strict:m}):null,b=!!(h?h(O,e):O),k=b?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(l,s):l,E=b?(0,c.Z)({},w,{},f):w,A=(0,c.Z)({"aria-current":b&&o||null,className:k,style:E,to:i},y);return U!==_?A.ref=t||x:A.innerRef=x,a.createElement(S,A)}))}));var H=e(456),D=e(184),F=function(){var n=(0,o.v9)((function(n){return n.redux}));return(0,D.jsx)(H.Z,{id:"pageNotFound",title:"Page not found | ".concat(n.app.title),desc:"Page not found || 404 ",children:(0,D.jsx)("div",{className:"i-x-center",children:(0,D.jsxs)("div",{className:"mainbox ",children:[(0,D.jsx)("div",{className:"i-x-center",children:(0,D.jsx)("div",{className:"err",children:"404"})}),(0,D.jsx)("div",{className:"i-x-center",children:(0,D.jsxs)("div",{className:"msg d-50 t-50 m-90",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",(0,D.jsxs)("p",{children:["Let's go ",(0,D.jsx)(S,{to:"/",children:"home"})," and try from there."]})]})})]})})})}}}]);
//# sourceMappingURL=291.0ae0add7.chunk.js.map