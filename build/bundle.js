!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="pwNi")}({"3mJm":function(t,e,n){var r=n("9pyw");"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n("BMrJ")(r,o);r.locals&&(t.exports=r.locals)},"9pyw":function(t,e,n){e=t.exports=n("lcwS")(!0),e.push([t.i,"body,html{font:14px/1.21 Helvetica Neue,arial,sans-serif;font-weight:400}h1{text-align:center}.white-key:active{background-color:#d3d3d3}.black-key{background-color:#000}.black-key:active{background-color:#e61b1b}","",{version:3,sources:["/Users/Carolina/Documents/code/piano-preact/src/style.scss"],names:[],mappings:"AAAA,UACC,+CACA,eAAgB,CAChB,GAGA,iBAAkB,CAClB,kBAGA,wBAA0B,CAC1B,WAGA,qBAAsB,CACtB,kBAGA,wBAAiC,CACjC",file:"style.scss",sourcesContent:["html, body {\n\tfont: 14px/1.21 'Helvetica Neue', arial, sans-serif;\n\tfont-weight: 400;\n}\n\nh1 {\n\ttext-align: center;\n}\n\n.white-key:active {\n\tbackground-color:lightgrey;  \n}\n\n.black-key {\n\tbackground-color:black; \n}\n\n.black-key:active {\n\tbackground-color:rgb(230, 27, 27);  \n}"],sourceRoot:""}])},BMrJ:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var c=[],i=0;i<r.parts.length;i++)c.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:c}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],u=i[1],a=i[2],s=i[3],f={css:u,media:a,sourceMap:s};r[c]?r[c].parts.push(f):n.push(r[c]={id:c,parts:[f]})}return n}function i(t,e){var n=y(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function c(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function u(t){var e=document.createElement("style");return t.attrs.type="text/css",s(e,t.attrs),i(t,e),e}function a(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",s(e,t.attrs),i(t,e),e}function s(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function f(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=_++;n=b||(b=u(e)),r=l.bind(null,n,s,!1),o=l.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(e),r=d.bind(null,n,e),o=function(){c(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),r=p.bind(null,n),o=function(){c(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(c),u&&URL.revokeObjectURL(u)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),b=null,_=0,m=[],w=n("DRTY");t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],c=0;c<n.length;c++){var u=n[c],a=h[u.id];a.refs--,i.push(a)}if(t){r(o(t,e),e)}for(var c=0;c<i.length;c++){var a=i[c];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete h[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},BtxX:function(t){!function(e){function n(){}function r(t,e){return function(){t.apply(e,arguments)}}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function i(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,o._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?c:u)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void u(e.promise,t)}c(e.promise,r)})}function c(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void a(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,a(t)}catch(e){u(t,e)}}function u(t,e){t._state=2,t._value=e,a(t)}function a(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)i(t,t._deferreds[e]);t._deferreds=null}function s(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,c(e,t))},function(t){n||(n=!0,u(e,t))})}catch(t){if(n)return;n=!0,u(e,t)}}var l=setTimeout;o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var r=new this.constructor(n);return i(this,new s(t,e,r)),r},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var u=c.then;if("function"==typeof u)return void u.call(c,function(t){r(i,t)},n)}e[i]=c,0==--o&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var o=e.length,i=0;i<e.length;i++)r(i,e[i])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},o._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){l(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o._setImmediateFn=function(t){o._immediateFn=t},o._setUnhandledRejectionFn=function(t){o._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},DRTY:function(t){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},JkW7:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var h,v=n("KM04"),y=n.n(v),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(t){return t.replace(/-([a-z])/gi,function(t,e){return e.toUpperCase()})},m=function(){return document.currentScript||function(){var t=document.getElementsByTagName("script");return t[t.length-1]}()},w=function(t,e){void 0===e&&(e={});var n=t.attributes;return Object.keys(n).forEach(function(t){if(n.hasOwnProperty(t)){var r=n[t].name;if(!r||"string"!=typeof r)return!1;var o=r.split(/(data-props?-)/).pop()||"";if(o=_(o),r!==o){e[o]=n[t].nodeValue}}}),[].forEach.call(t.getElementsByTagName("script"),function(t){var n={};if(t.hasAttribute("type")){if("text/props"!==t.getAttribute("type"))return;try{n=JSON.parse(t.innerHTML)}catch(t){throw new Error(t)}b(e,n)}}),e},g=function(t){var e=t.attributes,n=null;return Object.keys(e).forEach(function(t){if(e.hasOwnProperty(t)){"data-mount-in"===e[t].name&&(n=e[t].nodeValue)}}),n},C=function(t){var e=t.selector,n=t.inline,r=t.clientSpecified,o=[],i=m();if(!0===n){o.push(i.parentNode)}return!0!==r||e||(e="[data-widget='"+g(i)+"']"),e&&[].forEach.call(document.querySelectorAll(e),function(t){o.push(t)}),o},x=function(t,e,n,r,o){e.forEach(function(e){var i=e;if(!i._habitat){i._habitat=!0;var c=w(e,o)||o;return r&&(i.innerHTML=""),y.a.render(y.a.h(t,c),i,n)}})},O=function(t){var e=t;return{render:function(t){void 0===t&&(t={});var n=t.selector;void 0===n&&(n=null);var r=t.inline;void 0===r&&(r=!1);var o=t.clean;void 0===o&&(o=!1);var i=t.clientSpecified;void 0===i&&(i=!1);var c=t.defaultProps;void 0===c&&(c={});var u=C({selector:n,inline:r,clientSpecified:i}),a=function(){if(u.length>0){var t=C({selector:n,inline:r,clientSpecified:i});return x(e,t,null,o,c)}};a(),document.addEventListener("DOMContentLoaded",a),document.addEventListener("load",a)}}},A=O,j=n("OA8u"),E=(n("3mJm"),{position:"relative",white:{display:"flex"},black1:{position:"absolute",display:"flex",left:30},black2:{position:"absolute",left:200,display:"flex"}}),S=E,k=["C","D","E","F","G","A","B"],T=["C#","D#","F#","G#","A#"],N=(h={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6},h.F=7,h.G=8,h["G#"]=9,h.A=10,h["A#"]=11,h.B=12,{C0:16.35,"C#0":17.32,Db0:17.32,D0:18.35,"D#0":19.45,Eb0:19.45,E0:20.6,F0:21.83,"F#0":23.12,Gb0:23.12,G0:24.5,"G#0":25.96,Ab0:25.96,A0:27.5,"A#0":29.14,Bb0:29.14,B0:30.87,C1:32.7,"C#1":34.65,Db1:34.65,D1:36.71,"D#1":38.89,Eb1:38.89,E1:41.2,F1:43.65,"F#1":46.25,Gb1:46.25,G1:49,"G#1":51.91,Ab1:51.91,A1:55,"A#1":58.27,Bb1:58.27,B1:61.74,C2:65.41,"C#2":69.3,Db2:69.3,D2:73.42,"D#2":77.78,Eb2:77.78,E2:82.41,F2:87.31,"F#2":92.5,Gb2:92.5,G2:98,"G#2":103.83,Ab2:103.83,A2:110,"A#2":116.54,Bb2:116.54,B2:123.47,C3:130.81,"C#3":138.59,Db3:138.59,D3:146.83,"D#3":155.56,Eb3:155.56,E3:164.81,F3:174.61,"F#3":185,Gb3:185,G3:196,"G#3":207.65,Ab3:207.65,A3:220,"A#3":233.08,Bb3:233.08,B3:246.94,C4:261.63,"C#4":277.18,Db4:277.18,D4:293.66,"D#4":311.13,Eb4:311.13,E4:329.63,F4:349.23,"F#4":369.99,Gb4:369.99,G4:392,"G#4":415.3,Ab4:415.3,A4:440,"A#4":466.16,Bb4:466.16,B4:493.88,C5:523.25,"C#5":554.37,Db5:554.37,D5:587.33,"D#5":622.25,Eb5:622.25,E5:659.26,F5:698.46,"F#5":739.99,Gb5:739.99,G5:783.99,"G#5":830.61,Ab5:830.61,A5:880,"A#5":932.33,Bb5:932.33,B5:987.77,C6:1046.5,"C#6":1108.73,Db6:1108.73,D6:1174.66,"D#6":1244.51,Eb6:1244.51,E6:1318.51,F6:1396.91,"F#6":1479.98,Gb6:1479.98,G6:1567.98,"G#6":1661.22,Ab6:1661.22,A6:1760,"A#6":1864.66,Bb6:1864.66,B6:1975.53,C7:2093,"C#7":2217.46,Db7:2217.46,D7:2349.32,"D#7":2489.02,Eb7:2489.02,E7:2637.02,F7:2793.83,"F#7":2959.96,Gb7:2959.96,G7:3135.96,"G#7":3322.44,Ab7:3322.44,A7:3520,"A#7":3729.31,Bb7:3729.31,B7:3951.07,C8:4186.01}),B={height:"300px",width:"50px",border:"2px solid black",margin:"0.5px"},P=B,U=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(){return Object(v.h)("div",{class:"white-key",style:P,onClick:this.playKey.bind(this)})},e.prototype.playKey=function(){var t=this.props.pianoKey+this.props.octave,e=new AudioContext,n=e.createOscillator();n.frequency.setValueAtTime(N[t],e.currentTime),n.connect(e.destination),n.start(),n.stop(e.currentTime+3)},e}(v.Component),D=U,G={width:"50px",height:"200px",margin:"0.5px"},L=G,R=Object(v.h)("div",{class:"black-key",style:L}),M=function(t){function e(){return i(this,e),c(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){return R},e}(v.Component),F=M,I=function(t){function e(){return a(this,e),s(this,t.apply(this,arguments))}return f(e,t),e.prototype.render=function(){var t=this,e=k.map(function(e){return Object(v.h)(D,{pianoKey:e,octave:t.props.octave})}),n=T.map(function(t,e){if(e<2)return Object(v.h)(F,{pianoKey:t})}),r=T.map(function(t,e){if(e>1)return Object(v.h)(F,{pianoKey:t})});return Object(v.h)("div",{style:S},Object(v.h)("div",{style:S.black1},n),Object(v.h)("div",{style:S.black2},r),Object(v.h)("div",{style:S.white},e))},e}(v.Component),J=I,W=n("L0+G"),V=n.n(W),H=n("u+cz"),K=n("jy5e"),q={count:1,loading:!1,payload:{}},X=q,z={counter:X},$=K.connect?Object(H.applyMiddleware)(Object(K.connect)(z)):[],Q=V()(z,$),Y=Q,Z=(n("m+Gh"),Object(v.h)("div",null,Object(v.h)(j.Provider,{store:Y},Object(v.h)(J,{octave:3}))));A(function(t){function e(){return l(this,e),p(this,t.apply(this,arguments))}return d(e,t),e.prototype.render=function(){return Z},e}(v.Component)).render({selector:'[data-app="app"]',clean:!0})},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,c,u=P;for(c=arguments.length;c-- >2;)B.push(arguments[c]);for(n&&null!=n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((o=B.pop())&&void 0!==o.pop)for(c=o.length;c--;)B.push(o[c]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?u[u.length-1]+=o:u===P?u=[o]:u.push(o),r=i;var a=new e;return a.nodeName=t,a.children=u,a.attributes=null==n?void 0:n,a.key=null==n?void 0:n.key,void 0!==N.vnode&&N.vnode(a),a}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==G.push(t)&&(N.debounceRendering||U)(c)}function c(){var t,e=G;for(G=[];t=e.pop();)t.__d&&j(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&a(t,e.nodeName):n||t._componentConstructor===e.nodeName}function a(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function s(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function f(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function l(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===D.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var c=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,h,c):t.removeEventListener(e,h,c),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)d(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var u=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?u?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(u?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function d(t,e,n){try{t[e]=n}catch(t){}}function h(t){return this.__l[t.type](N.event&&N.event(t)||t)}function v(){for(var t;t=L.pop();)N.afterMount&&N.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(t,e,n,r,o,i){R++||(M=null!=o&&void 0!==o.ownerSVGElement,F=null!=t&&!("__preactattr_"in t));var c=b(t,e,n,r,i);return o&&c.parentNode!==o&&o.appendChild(c),--R||(F=!1,i||v()),c}function b(t,e,n,r,o){var i=t,c=M;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),m(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return E(t,e,n,r);if(M="svg"===u||"foreignObject"!==u&&M,u+="",(!t||!a(t,u))&&(i=f(u,M),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),m(t,!0)}var s=i.firstChild,l=i.__preactattr_,p=e.children;if(null==l){l=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)l[d[h].name]=d[h].value}return!F&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&_(i,p,n,r,F||null!=l.dangerouslySetInnerHTML),g(i,e.attributes,l),M=c,i}function _(t,e,n,r,o){var i,c,a,s,f,p=t.childNodes,d=[],h={},v=0,y=0,_=p.length,w=0,g=e?e.length:0;if(0!==_)for(var C=0;C<_;C++){var x=p[C],O=x.__preactattr_,A=g&&O?x._component?x._component.__k:O.key:null;null!=A?(v++,h[A]=x):(O||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(d[w++]=x)}if(0!==g)for(var C=0;C<g;C++){s=e[C],f=null;var A=s.key;if(null!=A)v&&void 0!==h[A]&&(f=h[A],h[A]=void 0,v--);else if(!f&&y<w)for(i=y;i<w;i++)if(void 0!==d[i]&&u(c=d[i],s,o)){f=c,d[i]=void 0,i===w-1&&w--,i===y&&y++;break}f=b(f,s,n,r),a=p[C],f&&f!==t&&f!==a&&(null==a?t.appendChild(f):f===a.nextSibling?l(a):t.insertBefore(f,a))}if(v)for(var C in h)void 0!==h[C]&&m(h[C],!1);for(;y<=w;)void 0!==(f=d[w--])&&m(f,!1)}function m(t,e){var n=t._component;n?S(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||l(t),w(t))}function w(t){for(t=t.lastChild;t;){var e=t.previousSibling;m(t,!0),t=e}}function g(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,M);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],M)}function C(t){var e=t.constructor.name;(I[e]||(I[e]=[])).push(t)}function x(t,e,n){var r,o=I[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),k.call(r,e,n)):(r=new k(e,n),r.constructor=t,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function O(t,e,n){return this.constructor(t,n)}function A(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===N.syncComponentUpdates&&t.base?i(t):j(t,1,o)),t.__r&&t.__r(t))}function j(t,e,n,o){if(!t.__x){var i,c,u,a=t.props,f=t.state,l=t.context,p=t.__p||a,d=t.__s||f,h=t.__c||l,b=t.base,_=t.__b,w=b||_,g=t._component,C=!1;if(b&&(t.props=p,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,f,l)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(a,f,l),t.props=a,t.state=f,t.context=l),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!C){i=t.render(a,f,l),t.getChildContext&&(l=r(r({},l),t.getChildContext()));var O,E,k=i&&i.nodeName;if("function"==typeof k){var T=s(i);c=g,c&&c.constructor===k&&T.key==c.__k?A(c,T,1,l,!1):(O=c,t._component=c=x(k,T,l),c.__b=c.__b||_,c.__u=t,A(c,T,0,l,!1),j(c,1,n,!0)),E=c.base}else u=w,O=g,O&&(u=t._component=null),(w||1===e)&&(u&&(u._component=null),E=y(u,i,l,n||!b,w&&w.parentNode,!0));if(w&&E!==w&&c!==g){var B=w.parentNode;B&&E!==B&&(B.replaceChild(E,w),O||(w._component=null,m(w,!1)))}if(O&&S(O),t.base=E,E&&!o){for(var P=t,U=t;U=U.__u;)(P=U).base=E;E._component=P,E._componentConstructor=P.constructor}}if(!b||n?L.unshift(t):C||(t.componentDidUpdate&&t.componentDidUpdate(p,d,h),N.afterUpdate&&N.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);R||o||v()}}function E(t,e,n,r){for(var o=t&&t._component,i=o,c=t,u=o&&t._componentConstructor===e.nodeName,a=u,f=s(e);o&&!a&&(o=o.__u);)a=o.constructor===e.nodeName;return o&&a&&(!r||o._component)?(A(o,f,3,n,r),t=o.base):(i&&!u&&(S(i),t=c=null),o=x(e.nodeName,f,n),t&&!o.__b&&(o.__b=t,c=null),A(o,f,1,n,r),t=o.base,c&&t!==c&&(c._component=null,m(c,!1))),t}function S(t){N.beforeUnmount&&N.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?S(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,l(e),C(t),w(e)),t.__r&&t.__r(null)}function k(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function T(t,e,n){return y(n,t,{},!1,e,!1)}var N={},B=[],P=[],U="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,D=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,G=[],L=[],R=0,M=!1,F=!1,I={};r(k.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),j(this,2)},render:function(){}});var J={h:n,createElement:n,cloneElement:o,Component:k,render:T,rerender:c,options:N};t.exports=J}()},"L0+G":function(t){"use strict";function e(t,e){void 0===t&&(t={}),void 0===e&&(e=null);var r=[];return{middleware:e,setState:function(e){t="function"==typeof e?n({},t,e(t)):n({},t,e),r.forEach(function(e){return e(t)})},subscribe:function(t){return r.push(t),function(){r.splice(r.indexOf(t),1)}},getState:function(){return t}}}var n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};t.exports=e},OA8u:function(t,e,n){"use strict";function r(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e){for(var n in t)if(t[n]!==e[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}function i(t,e){if(null!=e){if(e.then)return e.then(t.setState);t.setState(e)}}function c(t,e){t="function"==typeof t?t(e):t;var n={};for(var r in t)!function(r){n[r]=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var c=t[r];return"function"==typeof e.middleware?e.middleware(e,c,n):i(e,c.apply(void 0,[e.getState()].concat(n)))}}(r);return n}function u(t,e){return void 0===e&&(e={}),function(n){return function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return r(i,o),i.prototype.render=function(){var r=this.props;return a.h(p,f({},r,{mapToProps:t,actions:e}),function(t){return a.h(n,f({},t,r))})},i}(a.Component)}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("KM04"),s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state=e.getProps(),e.actions=e.getActions(),e.update=function(){var t=e.getProps();o(t,e.state)||e.setState(t)},e}return r(e,t),e.prototype.componentWillMount=function(){this.unsubscribe=this.context.store.subscribe(this.update)},e.prototype.componentWillUnmount=function(){this.unsubscribe(this.update)},e.prototype.getProps=function(){var t=this.props.mapToProps,e=this.context.store&&this.context.store.getState()||{};return t?t(e,this.props):e},e.prototype.getActions=function(){return c(this.props.actions,this.context.store)},e.prototype.render=function(t,e,n){return t.children[0](f({store:n.store},e,this.actions))},e}(a.Component),p=l,d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getChildContext=function(){return{store:this.props.store}},e.prototype.render=function(){return this.props.children[0]},e}(a.Component);e.connect=u,e.Provider=d,e.Connect=l},QAmr:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="function"==typeof fetch?fetch.bind():function(t,e){return e=e||{},new Promise(function(n,r){function o(){var t,e=[],n=[],r={};return i.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,i,c){e.push(i=i.toLowerCase()),n.push([i,c]),t=r[i],r[i]=t?t+","+c:c}),{ok:1==(i.status/200|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:o,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return e},entries:function(){return n},get:function(t){return r[t.toLowerCase()]},has:function(t){return t.toLowerCase()in r}}}}var i=new XMLHttpRequest;i.open(e.method||"get",t);for(var c in e.headers)i.setRequestHeader(c,e.headers[c]);i.withCredentials="include"==e.credentials,i.onload=function(){n(o())},i.onerror=r,i.send(e.body)})}},VS7n:function(t,e,n){t.exports=window.fetch||(window.fetch=n("QAmr").default||n("QAmr"))},h6ac:function(t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},jy5e:function(t,e){"use strict";function n(t,e){var n=u.find(function(e){return t.name===e.key});return n||(n={key:t.name,fn:e},u.push(n)),n}function r(t,e){var n=JSON.parse(e.state),r=function(e){if("initialState"===e.type)t.setState(n.computedStates[0].state);else{var r=u.find(function(t){return e.type===t.key});r&&r.fn()}},o=Object.keys(n.actionsById).filter(function(t){return parseInt(t,10)<=e.payload.id}),i=0;setTimeout(function t(){r(n.actionsById[o[i]].action),++i>=o.length||setTimeout(t,a)},0)}function o(t){"DISPATCH"===t.type&&("JUMP_TO_ACTION"===t.payload.type||"JUMP_TO_STATE"===t.payload.type?this.setState(JSON.parse(t.state)):"TOGGLE_ACTION"===t.payload.type&&r(this,t))}function i(t,e){if(!e.initialized){var n=o.bind(t);c.instance.subscribe(n),e.initialized=!0}}Object.defineProperty(e,"__esModule",{value:!0});var c={instance:null},u=[],a=10,s=function t(e){return function(r){return function(o){var u=r(o);return i(e,t),n(o,function(){return r(o)}),u&&u.then?u.then(function(){return c.instance.send(o.name,e.getState())}):(c.instance.send(o.name,e.getState()),u)}}};void 0!==window&&window.__REDUX_DEVTOOLS_EXTENSION__&&(e.connect=function(t){return c.instance=window.__REDUX_DEVTOOLS_EXTENSION__.connect(),c.instance.send("initialState",t),s})},lcwS:function(t){function e(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="("+c[2]+") and ("+e+")"),n.push(c))}},n}},"m+Gh":function(t,e,n){"use strict";(function(t){t.Promise||(t.Promise=n("BtxX")),t.fetch||(t.fetch=n("VS7n"))}).call(e,n("h6ac"))},pwNi:function(t,e,n){"use strict";var r=n("KM04"),o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,c=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};c()}},"u+cz":function(t,e){"use strict";function n(t,e){if(null!=e){if(e.then)return e.then(t.setState);t.setState(e)}}function r(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.reverse(),function(e,r,i){return t.length<1?n(e,r.apply(void 0,[e.getState()].concat(i))):t.map(function(t){return t(e)}).reduce(function(t,e){return e(t)},o(e,i))(r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){return function(r){return n(t,r.apply(void 0,[t.getState()].concat(e)))}};e.applyMiddleware=r}})});
//# sourceMappingURL=bundle.js.map