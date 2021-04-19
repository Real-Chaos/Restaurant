(()=>{"use strict";var n,e,t,r={908:(n,e,t)=>{n.exports=t.p+"18b1c92603261acc5ce5.jpg"},475:(n,e,t)=>{n.exports=t.p+"e3da808a30673db4568d.jpg"},156:(n,e,t)=>{n.exports=t.p+"e9f1e530aa123928322e.jpg"},50:(n,e,t)=>{n.exports=t.p+"4dd2a973638884caee55.jpg"},917:(n,e,t)=>{n.exports=t.p+"91ac2ecda1ca44581370.jpg"},791:(n,e,t)=>{n.exports=t.p+"78a103cb810e3de6c6fb.jpg"},341:(n,e,t)=>{n.exports=t.p+"ce08917b039053361c6c.jpg"},162:(n,e,t)=>{n.exports=t.p+"4ebd5257d12dbc778c52.jpg"},974:(n,e,t)=>{t.d(e,{Z:()=>C});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),p=t(475),c=t(156),d=t(917),s=t(908),l=t(162),g=t(341),u=t(791),f=t(50),b=o()((function(n){return n[1]})),h=i()(p),m=i()(c),x=i()(d),v=i()(s),y=i()(l),w=i()(g),k=i()(u),j=i()(f);b.push([n.id,"* {\n    border: 0;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody::-webkit-scrollbar {\n    width: 1em;\n  }\n   \nbody::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: black;\n}\n   \nbody::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n}\n\nbody {\n    background-color: #e6e6e6;\n    background-attachment: fixed;\n}\n.nav-hero {\n    height: 100vh;\n    background: url("+h+");\n    background-attachment: fixed;\n}\n\n/* NavBar -----------------------------------------------------------------------------------------------------------------------------------------------*/\nnav {\n    display: grid;\n    justify-content: end;\n    align-items: center;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 2% 20%;\n    font-size: 35px;\n    color: white;\n}\n\nnav ul {\n    display: flex;\n    list-style-type: none;\n    font-family: 'Karantina', cursive;\n}\n\nnav li {\n    padding: 0 20px;\n}\n\n.heroText {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    text-align: center;\n    padding: 10%;\n    color: white;\n}\n\n.heroText h1 {\n    font-size: 60px;\n    margin: 20px;\n}\n\n.heroText h4 {\n    color: #e75b1e;\n    font-size: 30px;\n    margin: 20px;\n    font-family: 'Lobster', cursive;\n}\n\n.heroText p {\n    font-size: 25px;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.book-table {\n    padding: 25px 4%;\n    background-color: #e75b1e;\n    border: 2px solid #e75b1e;\n    color: white;\n    margin: 4%;\n    transition: 500ms;\n    font-size: 100%;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-weight: 900;\n    outline: none;\n}\n.book-table:hover {\n    background-color: transparent;\n}\n\n.aboutUsOne {\n    position: relative;\n    display: grid;\n    grid-template-columns: 60% 30%;\n    padding: 4% 13%;\n    background: url("+m+");\n    background-attachment: fixed;\n}\n\n.aboutUsOne h1, .specialMenu h1, .newsletter h1 {\n    color: #e75b1e;\n    font-family: 'Lobster', cursive;\n    font-size: 50px;\n    padding: 10px;\n}\n\n.aboutUsOne h6 {\n    font-size: 20px;\n    color: white;\n    font-weight: 900;\n    margin: 20px 0px;\n}\n\n.aboutUsOne p{\n    padding: 20px 0;\n    margin: 2% 0%;\n}\n\n.aboutUsOne .aboutUsText {\n    color: white;\n    background: rgba(0, 0, 0, 0.5);\n    padding: 2%;\n    \n}\n\n.aboutUsOne .aboutUsImg img {\n    position: absolute;\n    border-radius: 50%;\n    right: 10%;\n}\n\n/* Menu -----------------------------------------------------------------------------------------------------------------------------------------------*/\n\n.menu {\n    background-image:\n    linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.53)),\n    url("+x+");\n    background-attachment: fixed;\n}\n\n.menu h1, .team h1, .reservation h1 {\n    display: block;\n    color: #e75b1e;\n    font-family: 'Lobster', cursive;\n    font-size: 50px;\n    text-align: center;\n    padding: 2% 0 1%;\n}\n\n.menu p {\n    color: white;\n    padding: 0 20% 3%;\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.menuTabs {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    justify-items: center;\n    padding: 0 23%;\n}\n.menuTabs div {\n    background: rgba(0, 0, 0, 0.73);\n    width: 100%;\n    display: grid;\n    justify-items: center;\n    padding: 0 0 5%;\n    margin: 0 0 30px;\n}\n\n.menuTabs h6 {\n    color: white;\n    font-size: 20px;\n    font-family:'Courier New', Courier, monospace;\n    padding: 15px 0 8px;\n    display: inline;\n    border-bottom: 1px solid white;\n}\n\n.menuTabs hr {\n    color: white;\n    width: 50%;\n    height: 1px;\n}\n\n.menuTabs img {\n    height: 50px;\n    width: 50px;\n    display: block;\n    margin: auto;\n    margin: 10px 0;\n}\n\n/* Special Menu -----------------------------------------------------------------------------------------------------------------------------------------------*/\n\n.specialMenu {\n    background-image:\n    linear-gradient(to bottom, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.73)),\n    url("+v+");\n    background-attachment: fixed;\n    background-position: center;\n    text-align: center;\n    padding: 8%;\n    padding-bottom: 0;\n\n}\n\n.specialMenuImg {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    overflow-x: auto;\n    transition: 2s;\n}\n\n.specialMenuImg::-webkit-scrollbar {\n    display: none;\n}\n\n.specialMenu img {\n    height: 400px;\n    width: 300px;\n    margin: 10px;\n}\n\n\n.specialMenu p, .newsletter p {\n    padding: 0 20% 2%;\n    color: white;\n    font-size: 20px;\n}\n\n\n/* ----------------------------------------------------------------Team -----------------------------------------------------------------*/\n\n.team {\n    background-image:\n    linear-gradient(to bottom, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.73)),\n    url("+y+");\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.team h1 {\n    color: white\n}\n\n.chefs {\n    display: grid;\n    grid-template-columns: repeat(3,  1fr);\n    padding: 2% 20%;\n}\n\n.chefInfo {\n    background: rgba(0, 0, 0, 0.73);\n    margin: auto;\n}\n\n.chefInfo img {\n    width: 100%;\n}\n\n.chefInfo h1 {\n    font-size: 25px;\n}\n\n.chefInfo p {\n    color: white;\n    margin: 20px;\n    padding-bottom: 15px;\n    text-align: center;\n    display: inline-block;\n    border-bottom: 1px solid white;\n}\n\n\n\n.chefInfo .icon {\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n\n}\n\n.chefInfo .icon .iconE {\n    border: 1px solid white;\n    border-radius: 50%;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 2px 6px;\n}\n\n/* ----------------------------------------------------------------Reservation -----------------------------------------------------------------*/\n\n.reservation {\n    background-image:\n    linear-gradient(to bottom, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.73)),\n    url("+w+");\n    background-attachment: fixed;\n}\n\n.reservation h1 {\n    color: white;\n}\n\n.inputs {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    padding: 0 30%;\n    margin: 20px;\n}\n\n.inputs input {\n    background: #f5f5f5;\n    border: 2px dotted #ccc;\n    width: 97%;\n    height: 50px;\n    outline: none;\n    margin: 10px;\n}\n.reservation button {\n    display: block;\n    text-align: center;\n    margin: 30px auto;\n}\n/* ----------------------------------------------------------------NewsLetter -----------------------------------------------------------------*/\n\n.newsletter {\n    background-image:\n    linear-gradient(to bottom, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.73)),\n    url("+k+");\n    text-align: center;\n    padding: 5% 0;\n    background-attachment: fixed;\n}\n\n.newsletter p {\n    font-size: 16px;\n}\n\n.newsletter input {\n    width: 35%;\n    height: 50px;   \n    border: 1px dashed black;\n    padding-left: 20px;\n}\n\n/* ----------------------------------------------------------------- Footer ------------------------------------------------------------- */\nfooter {\n    background-image:\n    linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.53)),\n    url("+j+");\n    background-attachment: fixed;\n\n}\n\nfooter img {\n    display: block;\n    text-align: center;\n    margin: auto;\n}\n\n.footerContent {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    padding: 2% 15% 2%;\n\n}\n\n.footerContent .h1 {\n    color: #e75b1e;\n    font-family: 'Lobster', cursive;\n    font-size: 28px;\n    font-weight: 100;\n    padding: 10px;\n}\n\n.footerContent p {\n    color: white;\n    padding: 4px 15% 0 10px;\n    font-size: 18px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    cursor: pointer;\n    transition: 200ms;\n}\n\n.footerContent p:hover {\n    color: #e75b1e;\n    transform: translate3d(2px, -3px, -5px);\n}\n\n.footerContent i {\n    color: white;\n    font-size: 18px;\n    display: inline-block;\n    line-height: 25px;\n    padding-top: 20px;\n}\n\n.footerContent .address::after {\n    content: '6 E Esplanade, St Albans VIC 3021, Australia';\n    padding: 10px;\n}\n\n.footerContent .phone::after {\n    content: '+1  (234) 567-8910';\n    padding: 10px;\n}\n\n.footerContent .envelop::after {\n    content: 'food@food.com';\n    padding: 10px;\n}\n\n.openingHours h6 {\n    color: white;\n    padding: 4px 15% 0 10px;\n    font-size: 18px;\n}\n\n.openingHours .timing {\n    color: #666;\n    padding: 4px 15% 0 30px;\n    font-size: 12px;\n}",""]);const C=b},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function p(n,e){for(var t={},r=[],o=0;o<n.length;o++){var p=n[o],c=e.base?p[0]+e.base:p[0],d=t[c]||0,s="".concat(c," ").concat(d);t[c]=d+1;var l=i(s),g={css:p[1],media:p[2],sourceMap:p[3]};-1!==l?(a[l].references++,a[l].updater(g)):a.push({identifier:s,updater:b(g,e),references:1}),r.push(s)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function l(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function g(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var u=null,f=0;function b(n,e){var t,r,o;if(e.singleton){var a=f++;t=u||(u=c(e)),r=l.bind(null,t,a,!1),o=l.bind(null,t,a,!0)}else t=c(e),r=g.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=p(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var c=p(n,e),d=0;d<t.length;d++){var s=i(t[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=c}}}},153:(n,e,t)=>{n.exports=t.p+"e9f1e530aa123928322e.jpg"},132:(n,e,t)=>{n.exports=t.p+"7341f609dcb21051732a.jpg"},556:(n,e,t)=>{n.exports=t.p+"58c02a4dfeb251c79874.jpg"},459:(n,e,t)=>{n.exports=t.p+"8125fca1e6ff6e8881f8.jpeg"},205:(n,e,t)=>{n.exports=t.p+"30ff24ae18a426232df0.jpg"},380:(n,e,t)=>{n.exports=t.p+"4dd2a973638884caee55.jpg"},133:(n,e,t)=>{n.exports=t.p+"e3da808a30673db4568d.jpg"},665:(n,e,t)=>{n.exports=t.p+"d425261b035dfb26beff.png"},602:(n,e,t)=>{n.exports=t.p+"91ac2ecda1ca44581370.jpg"},137:(n,e,t)=>{n.exports=t.p+"78a103cb810e3de6c6fb.jpg"},653:(n,e,t)=>{n.exports=t.p+"1843aeeed83a2beb2a08.jpg"},352:(n,e,t)=>{n.exports=t.p+"c940f421e5ce7a2b2c0d.jpg"},185:(n,e,t)=>{n.exports=t.p+"ce08917b039053361c6c.jpg"},776:(n,e,t)=>{n.exports=t.p+"18b1c92603261acc5ce5.jpg"},35:(n,e,t)=>{n.exports=t.p+"4ebd5257d12dbc778c52.jpg"},789:(n,e,t)=>{n.exports=t.p+"1f3735a29b3f7264b606.jpg"},883:(n,e,t)=>{n.exports=t.p+"732dc720db70d5ad3539.jpg"}},o={};function a(n){var e=o[n];if(void 0!==e)return e.exports;var t=o[n]={id:n,exports:{}};return r[n](t,t.exports,a),t.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var e=a.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),n=a(379),e=a.n(n),t=a(974),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,a(665),a(133),a(153),a(132),a(556),a(776),a(459),a(352),a(883),a(789),a(653),a(137),a(602),a(380),a(35),a(185),a(205),window.onload(document.body.style.background="black")})();