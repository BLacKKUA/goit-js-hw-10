!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,y=function(){return s.Date.now()};function g(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(g(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=g(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var f=u.test(n);return f||a.test(n)?c(n.slice(2),f?2:8):r.test(n)?NaN:+n}e=function(t,n,e){var o,i,r,u,a,c,f=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function h(t){return f=t,a=setTimeout(x,n),l?b(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=r}function x(){var t=y();if(j(t))return w(t);a=setTimeout(x,function(t){var e=n-(t-c);return s?v(e,r-(t-f)):e}(t))}function w(t){return a=void 0,p&&o?b(t):(o=i=void 0,u)}function T(){var t=y(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(x,n),b(c)}return void 0===a&&(a=setTimeout(x,n)),u}return n=m(n)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(m(e.maxWait)||0,n):r,p="trailing"in e?!!e.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?u:w(y())},T};var b={inputValue:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};b.inputValue.addEventListener("input",t(e)((function(t){var n,e=b.inputValue.value.trim();e.length>=2?(n=e,fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(t){return t.json()}))).then((function(t){console.log(t),b.countryList.innerHTML=function(t){var n="";if(t.length>1){var e=!0,o=!1,i=void 0;try{for(var r,u=t[Symbol.iterator]();!(e=(r=u.next()).done);e=!0){var a=r.value;n+='<li class="styleForCoutryList"><img src="'.concat(a.flags.svg,'" width\n="36px" height="30px">').concat(a.name.official,"</li>")}}catch(t){o=!0,i=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}n='<li class="styleForCoutryList"><img src="'.concat(t[0].flags.svg,'" width\n="36px" height="30px">').concat(t[0].name.official,"</li>\n<p>Capital: ").concat(t[0].capital,"</p>\n<p>Population: ").concat(t[0].population,"</p>\n<p>Languages: ").concat(t[0].languages,"</p>");return n}(t)})):b.countryList.innerHTML=""}),300))}();
//# sourceMappingURL=index.b15cf671.js.map
