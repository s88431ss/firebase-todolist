(self["webpackChunkfirebase_todolist"]=self["webpackChunkfirebase_todolist"]||[]).push([[998],{1001:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:l}}n.d(t,{Z:function(){return r}})},9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),l=o(c),u=i(s,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},206:function(e,t,n){var r=n(1702);e.exports=r([].slice)},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,l="Arguments"==o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(e,t,n){var r=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(e,t,n){var r=n(4326),i=n(7854);e.exports="process"==r(i.process)},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(u=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(e,t,n){var r=n(1470),i=n(9662),o=n(4374),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1470:function(e,t,n){var r=n(4326),i=n(1702);e.exports=function(e){if("Function"===r(e))return i(e)}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),l=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,v=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new v);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw m(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw m(p);return t.facade=e,l(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},o=function(e){return u(e,b)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:_}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=Object.defineProperty,f=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&o(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=u(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(e,t,n){var r,i,o,s,a=n(7854),c=n(2104),l=n(9974),u=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),m=n(317),v=n(8053),g=n(6833),_=n(5268),y=a.setImmediate,b=a.clearImmediate,w=a.process,C=a.Dispatch,k=a.Function,I=a.MessageChannel,E=a.String,T=0,S={},x="onreadystatechange";try{r=a.location}catch(A){}var O=function(e){if(h(S,e)){var t=S[e];delete S[e],t()}},N=function(e){return function(){O(e)}},P=function(e){O(e.data)},R=function(e){a.postMessage(E(e),r.protocol+"//"+r.host)};y&&b||(y=function(e){v(arguments.length,1);var t=u(e)?e:k(e),n=p(arguments,1);return S[++T]=function(){c(t,void 0,n)},i(T),T},b=function(e){delete S[e]},_?i=function(e){w.nextTick(N(e))}:C&&C.now?i=function(e){C.now(N(e))}:I&&!g?(o=new I,s=o.port2,o.port1.onmessage=P,i=l(s.postMessage,s)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,a.addEventListener("message",P,!1)):i=x in m("script")?function(e){f.appendChild(m("script"))[x]=function(){f.removeChild(this),O(e)}}:function(e){setTimeout(N(e),0)}),e.exports={set:y,clear:b}},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||s;e.exports=function(e){if(!o(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&o(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||u},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),l=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||u},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var l=n;while(l--){var u=l+r;l in t?t[u]=t[l]:a(t,u)}for(var h=0;h<r;h++)t[h]=arguments[h]}return s(t,n+r)}})},1091:function(e,t,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),l=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),v="DOMException",g=o("Error"),_=o(v),y=function(){l(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new _(t,n),i=g(t);return i.name=v,a(r,"stack",s(1,f(i.stack,1))),u(r,this,y),r},b=y.prototype=_.prototype,w="stack"in g(v),C="stack"in new _(1,2),k=_&&p&&Object.getOwnPropertyDescriptor(i,v),I=!!k&&!(k.writable&&k.configurable),E=w&&!I&&!C;r({global:!0,constructor:!0,forced:m||E},{DOMException:E?y:_});var T=o(v),S=T.prototype;if(S.constructor!==T)for(var x in m||a(S,"constructor",s(1,T)),d)if(c(d,x)){var O=d[x],N=O.s;c(T,N)||a(T,N,s(6,O.c))}},4633:function(e,t,n){n(1091),n(2986)},2986:function(e,t,n){var r=n(2109),i=n(7854),o=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==o},{setImmediate:o})},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return R},DV:function(){return V},GJ:function(){return W},L:function(){return u},LL:function(){return L},P0:function(){return O},Pz:function(){return P},Sg:function(){return A},UI:function(){return Y},US:function(){return c},Wl:function(){return $},Yr:function(){return b},ZR:function(){return M},aH:function(){return N},b$:function(){return _},cI:function(){return U},dS:function(){return oe},eu:function(){return C},g5:function(){return o},gK:function(){return ie},gQ:function(){return Z},h$:function(){return l},hl:function(){return w},hu:function(){return i},m9:function(){return ae},ne:function(){return ee},p$:function(){return d},pd:function(){return X},q4:function(){return x},r3:function(){return H},ru:function(){return g},tV:function(){return h},uI:function(){return v},ug:function(){return se},vZ:function(){return K},w1:function(){return y},w9:function(){return q},xO:function(){return J},xb:function(){return B},z$:function(){return m},zd:function(){return Q}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==u)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=s(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function w(){return"object"===typeof indexedDB}function C(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function k(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=()=>k().__FIREBASE_DEFAULTS__,E=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/firebase-todolist/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},T=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&h(e[1]);return t&&JSON.parse(t)},S=()=>{try{return I()||E()||T()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},x=e=>{var t,n;return null===(n=null===(t=S())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},O=e=>{const t=x(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},N=()=>{var e;return null===(e=S())||void 0===e?void 0:e.config},P=e=>{var t;return null===(t=S())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="FirebaseError";class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?j(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new M(r,s,n);return a}}function j(e,t){return e.replace(F,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return JSON.parse(e)}function $(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=U(h(o[0])||""),n=U(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},q=function(e){const t=z(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},W=function(e){const t=z(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Y(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function K(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(G(n)&&G(o)){if(!K(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function G(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function X(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function ee(e,t){const n=new te(e,t);return n.subscribe.bind(n)}class te{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=ne(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=re),void 0===r.error&&(r.error=re),void 0===r.complete&&(r.complete=re);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ne(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function re(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},se=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){return e&&e._delegate?e._delegate:e}},7749:function(e,t,n){"use strict";n.d(t,{GN:function(){return N}});n(7658);var r=n(3494);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function l(e,t){if(null==e)return{};var n,r,i=c(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e){return h(e)||d(e)||f(e)||m()}function h(e){if(Array.isArray(e))return p(e)}function d(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},g={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||h(t)||d(t)||f(t)||c(t))return t;var i,o=0,s=0;if(u(t))for(i=[],s=t.length;o<s;o++)i.push(n(e,t[o],r));else for(var a in i={},t)Object.prototype.hasOwnProperty.call(t,a)&&(i[e(a,r)]=n(e,t[a],r));return i},r=function(e,t){t=t||{};var n=t.separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},o=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},s=function(e,t){return r(e,t).toLowerCase()},a=Object.prototype.toString,c=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},u=function(e){return"[object Array]"==a.call(e)},h=function(e){return"[object Date]"==a.call(e)},d=function(e){return"[object RegExp]"==a.call(e)},f=function(e){return"[object Boolean]"==a.call(e)},p=function(e){return e-=0,e===e},m=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!==typeof n?e:function(t,r){return n(t,e,r)}},v={camelize:i,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(e,t){return n(m(i,t),e)},decamelizeKeys:function(e,t){return n(m(s,t),e,t)},pascalizeKeys:function(e,t){return n(m(o,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=v:t.humps=v})(v)})(g);var _=g.exports,y=["class","style","attrs"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n=t.indexOf(":"),r=_.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return e[r]=i,e}),{})}function w(e){return e.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{})}function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return Array.isArray(t)?e=e.concat(t):e.push(t),e}),[])}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=(t.children||[]).map(k.bind(null,e)),s=Object.keys(t.attributes||{}).reduce((function(e,n){var r=t.attributes[n];switch(n){case"class":e["class"]=w(r);break;case"style":e["style"]=b(r);break;default:e.attrs[n]=r}return e}),{class:{},style:{},attrs:{}}),a=r.class,c=void 0===a?{}:a,u=r.style,h=void 0===u?{}:u,d=r.attrs,f=void 0===d?{}:d,p=l(r,y);return"string"===typeof t?t:e(t.tag,o(o({class:C(s.class,c),style:o(o({},s.style),h),attrs:o(o({},s.attrs),f)},p),{},{props:n}),i)}var I=!1;try{I=!0}catch(P){}function E(){var e;!I&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function T(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?a({},e,t):{}}function S(e){var t,n=(t={"fa-spin":e.spin,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse,"fa-pulse":e.pulse,"fa-beat":e.beat,"fa-fade":e.fade,"fa-flash":e.flash,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},a(t,"fa-".concat(e.size),null!==e.size),a(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),a(t,"fa-pull-".concat(e.pull),null!==e.pull),a(t,"fa-swap-opacity",e.swapOpacity),a(t,"fa-bounce",e.bounce),a(t,"fa-shake",e.shake),a(t,"fa-beat-fade",e.beatFade),t);return Object.keys(n).map((function(e){return n[e]?e:null})).filter((function(e){return e}))}function x(e,t){var n=0===(e||"").length?[]:[e];return n.concat(t).join(" ")}function O(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var N={name:"FontAwesomeIcon",functional:!0,props:{beat:{type:Boolean,default:!1},border:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1}},render:function(e,t){var n=t.props,i=n.icon,s=n.mask,a=n.symbol,c=n.title,l=O(i),u=T("classes",S(n)),h=T("transform","string"===typeof n.transform?r.Qc.transform(n.transform):n.transform),d=T("mask",O(s)),f=(0,r.qv)(l,o(o(o(o({},u),h),d),{},{symbol:a,title:c}));if(!f)return E("Could not find one or more icon(s)",l,d);var p=f.abstract,m=k.bind(null,e);return m(p[0],{},t.data)}};Boolean,Boolean},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",o="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},5155:function(e,t,n){"use strict";n.d(t,{hJ:function(){return nt},v0:function(){return br},Aj:function(){return pt},F6:function(){return Cn}});n(7658);var r=n(223),i=n(7077),o=n(5168);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function _(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function C(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return j(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function j(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},A),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw z(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw z(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r.ZR)throw o;f(e,"network-request-failed")}}async function F(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=Y(i);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(B(o.auth_time)),issuedAtTime:H(B(o.iat)),expirationTime:H(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function Y(e){var t;const[n,i,o]=e.split(".");if(void 0===n||void 0===i||void 0===o)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function K(e){const t=Y(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,W(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ne(o.providerUserInfo):[],a=te(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ee(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await j(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ie;return n&&(_("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:k}=t;_(y&&k,e,"internal-error");const I=ie.fromJSON(this.name,k);_("string"===typeof y,e,"internal-error"),oe(u,e.name),oe(h,e.name),_("boolean"===typeof b,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),oe(d,e.name),oe(f,e.name),oe(p,e.name),oe(m,e.name),oe(v,e.name),oe(g,e.name);const E=new se({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:g});return C&&Array.isArray(C)&&(E.providerData=C.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new ie;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const ce=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(C(ce),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||C(ce);const o=le(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=se._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(_e(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function _e(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function Ce(e=(0,r.z$)()){return ye(e)||ve(e)||_e(e)||ge(e)||/windows phone/i.test(e)||me(e)}function ke(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=he((0,r.z$)());break;case"Worker":n=`${he((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xe(this),this.idTokenSubscription=new xe(this),this.beforeStateQueue=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Z(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return(0,r.m9)(e)}class xe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Oe(e,t,n){const r=Se(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Ne(t),{host:s,port:a}=Pe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ae()}function Ne(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pe(e){const t=Ne(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Re(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Re(t)}}}function Re(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ae(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Me(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="http://localhost";class qe extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new qe(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",M(e,t))}async function He(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t))}async function Ve(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const Be={["USER_NOT_FOUND"]:"user-not-found"};async function Ye(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,n),Be)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ke({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ke({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ve(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ye(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ke({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Qe{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Ge(null!==(i=c["mode"])&&void 0!==i?i:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qe.parseLink(t);return _(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends et{constructor(){super("facebook.com")}static credential(e){return qe._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch(t){return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com",tt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qe._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nt.credential(t,n)}catch(r){return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com",nt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends et{constructor(){super("github.com")}static credential(e){return qe._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch(t){return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com",rt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends et{constructor(){super("twitter.com")}static credential(e,t){return qe._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return it.credential(t,n)}catch(r){return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com",it.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),o=st(n),s=new ot({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=st(n);return new ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function st(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await G(e,ct(i,o,t,e),n);_(r.idToken,i,"internal-error");const s=Y(r.idToken);_(s,i,"internal-error");const{sub:a}=s;return _(e.uid===a,i,"user-mismatch"),ot._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r="signIn",i=await ct(e,r,t),o=await ot._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function dt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function ft(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function pt(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",M(e,t))}function vt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",M(e,t))}new WeakMap;const gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gt,"1"),this.storage.removeItem(gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){const e=(0,r.z$)();return fe(e)||ye(e)}const bt=1e3,wt=10;class Ct extends _t{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yt()&&ke(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,wt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ct.type="LOCAL";const kt=Ct;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends _t{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}It.type="SESSION";const Et=It;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new St(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Tt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.receivers=[];class Ot{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=xt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function Pt(e){Nt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return"undefined"!==typeof Nt()["WorkerGlobalScope"]&&"function"===typeof Nt()["importScripts"]}async function At(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Dt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Mt(){return Rt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="firebaseLocalStorageDb",jt=1,Ft="firebaseLocalStorage",Ut="fbase_key";class $t{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function zt(e,t){return e.transaction([Ft],t?"readwrite":"readonly").objectStore(Ft)}function qt(){const e=indexedDB.deleteDatabase(Lt);return new $t(e).toPromise()}function Wt(){const e=indexedDB.open(Lt,jt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ft,{keyPath:Ut})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ft)?t(n):(n.close(),await qt(),t(await Wt()))}))}))}async function Ht(e,t,n){const r=zt(e,!0).put({[Ut]:t,value:n});return new $t(r).toPromise()}async function Vt(e,t){const n=zt(e,!1).get(t),r=await new $t(n).toPromise();return void 0===r?null:r.value}function Bt(e,t){const n=zt(e,!0).delete(t);return new $t(n).toPromise()}const Yt=800,Kt=3;class Gt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Kt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=St._getInstance(Mt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await At(),!this.activeServiceWorker)return;this.sender=new Ot(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Dt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await Ht(e,gt,"1"),await Bt(e,gt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ht(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Vt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Bt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=zt(e,!1).getAll();return new $t(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gt.type="LOCAL";const Jt=Gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",M(e,t))}function Xt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function en(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Zt().appendChild(r)}))}function tn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nn="recaptcha";async function rn(e,t,n){var r;const i=await n.verify();try{let o;if(_("string"===typeof i,e,"argument-error"),_(n.type===nn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;_(n,e,"missing-multi-factor-info");const s=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await We(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(e){this.providerId=on.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return rn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ke._fromVerification(e,t)}static credentialFromResult(e){const t=e;return on.credentialFromTaggedObject(t)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ke._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e,t){return t?C(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.PROVIDER_ID="phone",on.PHONE_SIGN_IN_METHOD="phone";class an extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cn(e){return ht(e.auth,new an(e),e.bypassAuthState)}function ln(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),ut(n,new an(e),e.bypassAuthState)}async function un(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),lt(n,new an(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cn;case"linkViaPopup":case"linkViaRedirect":return un;case"reauthViaPopup":case"reauthViaRedirect":return ln;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new N(2e3,1e4);class fn extends hn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,dn.get())};e()}}fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="pendingRedirect",mn=new Map;class vn extends hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const t=await gn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function gn(e,t){const n=wn(t),r=bn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function _n(e,t){return bn(e)._set(wn(t),"true")}function yn(e,t){mn.set(e._key(),t)}function bn(e){return C(e._redirectPersistence)}function wn(e){return le(pn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e,t,n){return kn(e,t,n)}async function kn(e,t,n){const r=Se(e);v(e,t,Ze);const i=sn(r,n);return await _n(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function In(e,t,n=!1){const r=Se(e),i=sn(r,t),o=new vn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const En=6e5;class Tn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!On(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=En&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sn(e))}saveEventToCache(e){this.cachedEventUids.add(Sn(e)),this.lastProcessedEventTime=Date.now()}}function Sn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function xn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function On(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rn=/^https?/;async function An(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Nn(e);for(const r of t)try{if(Dn(r))return}catch(n){}f(e,"unauthorized-domain")}function Dn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Rn.test(n))return!1;if(Pn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new N(3e4,6e4);function Ln(){const e=Nt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Ln(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ln(),n(p(e,"network-request-failed"))},timeout:Mn.get()})}if(null===(i=null===(r=Nt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Nt().gapi)||void 0===o?void 0:o.load)){const t=tn("iframefcb");return Nt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},en(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Fn=null,e}))}let Fn=null;function Un(e){return Fn=Fn||jn(e),Fn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new N(5e3,15e3),zn="__/auth/iframe",qn="emulator/auth/iframe",Wn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,qn):`https://${e.config.authDomain}/${zn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=Hn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Bn(e){const t=await Un(e),n=Nt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:Vn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Nt().setTimeout((()=>{r(i)}),$n.get());function s(){Nt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kn=500,Gn=600,Jn="_blank",Qn="http://localhost";class Xn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Zn(e,t,n,i=Kn,o=Gn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Yn),{width:i.toString(),height:o.toString(),top:s,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=pe(u)?Jn:n),de(u)&&(t=t||Qn,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(u)&&"_self"!==c)return er(t||"",c),new Xn(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Xn(d)}function er(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="__/auth/handler",nr="emulator/auth/handler";function rr(e,t,n,o,s,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof Ze){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${ir(e)}?${(0,r.xO)(l).slice(1)}`}function ir({config:e}){return e.emulator?P(e,nr):`https://${e.authDomain}/${tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Et,this._completeRedirectFn=In,this._overrideRedirectResult=yn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rr(e,t,n,E(),r);return Zn(e,o,xt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Pt(rr(e,t,n,E(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Bn(e),n=new Tn(e);return t.register("authEvent",(t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=An(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||fe()||ye()}}const ar=sr;class cr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class lr extends cr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new lr(e)}_finalizeEnroll(e,t,n){return vt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Xt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ur{constructor(){}static assertion(e){return lr._fromCredential(e)}}ur.FACTOR_ID="phone";var hr="@firebase/auth",dr="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{_(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new Te(t,r,i);return I(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new fr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(hr,dr,pr(e)),(0,i.KN)(hr,dr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=300,gr=(0,r.Pz)("authIdTokenMaxAge")||vr;let _r=null;const yr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gr)return;const i=null===n||void 0===n?void 0:n.token;_r!==i&&(_r=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function br(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=k(e,{popupRedirectResolver:ar,persistence:[Jt,kt,Et]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=yr(o);ft(n,e,(()=>e(n.currentUser))),dt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Oe(n,`http://${s}`),n}mr("Browser")},1178:function(e,t,n){"use strict";n.d(t,{iU:function(){return Bs},U2:function(){return Qs},N8:function(){return aa},VF:function(){return Ys},iH:function(){return Vs},Od:function(){return Ks},t8:function(){return Gs},Vx:function(){return Js}});n(7658);var r=n(7077),i=n(7142),o=n(223),s=n(5168);const a="@firebase/database",c="0.13.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),v=new s.Yd("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),_=function(e){const t=(0,o.dS)(e),n=new o.gQ;n.update(t);const r=n.digest();return o.US.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,o.Wl)(r):r,t+=" "}return t};let b=null,w=!0;const C=function(e,t){(0,o.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=s["in"].VERBOSE,b=v.log.bind(v),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},k=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const t=y.apply(null,e);b(t)}},I=function(e){return function(...t){k(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);v.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw v.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);v.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if((0,o.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",R="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=B(e),r=B(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.Wl)(t))},L=function(e){if("object"!==typeof e||null===e)return(0,o.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.Wl)(t[r]),n+=":",n+=L(e[t[r]]);return n+="}",n},j=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,o.hu)(!O(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,l;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},z=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function q(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const W=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,V=2147483647,B=function(e){if(W.test(e)){const t=Number(e);if(t>=H&&t<=V)return t}return null},Y=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,o.hu)("string"===typeof t,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function ve(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Y((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",be="close",we="pLPCommand",Ce="pRTLPCB",ke="id",Ie="pw",Ee="ser",Te="cb",Se="seg",xe="ts",Oe="d",Ne="dframe",Pe=1870,Re=30,Ae=Pe-Re,De=25e3,Me=3e4;class Le{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=ve(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),N((()=>{if(this.isClosed_)return;this.scriptTagHolder=new je(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Ee]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!z())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.h$)(t),r=j(n,Ae);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[ke]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class je{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=je.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){k("frame writing exception"),i.stack&&k(i.stack),k(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||k("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ke]=this.myID,e[Ie]=this.myPW,e[Ee]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+r+"="+e.seg+"&"+xe+r+"="+e.ts+"&"+Oe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(De)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ue=45e3;let $e=null;"undefined"!==typeof MozWebSocket?$e=MozWebSocket:"undefined"!==typeof WebSocket&&($e=WebSocket);class ze{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=ve(t),this.connURL=ze.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[ee]=Z,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[ne]=re),t&&(s[te]=t),n&&(s[oe]=n),r&&(s[ae]=r),i&&(s[se]=i),de(e,ce,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/firebase-todolist/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new $e(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$e&&!ze.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=j(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2,ze.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ze&&ze["isAvailable"]();let n=t&&!ze.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ze];else{const e=this.transports_=[];for(const t of qe.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);qe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qe.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We=6e4,He=5e3,Ve=10240,Be=102400,Ye="t",Ke="d",Ge="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=G((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Be?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ye in e){const t=e[Ye];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ye,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?E("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(We))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,o.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function vt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=vt(e,0),r=vt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=A(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function kt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);St(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.ug)(t),St(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=(0,o.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+xt(e))}function xt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ot}getInitialEvent(e){return(0,o.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,Pt=3e5,Rt=3e4,At=1.3,Dt=3e4,Mt="server_kill",Lt=3;class jt extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ot.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.Wl)(i)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];jt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.r3)(e,"w")){const n=(0,o.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,o.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*At)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+jt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),i))}catch(E){this.log_("Failed to get token: "+E),s||(this.repoInfo_.nodeAdmin&&S(E),c())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,o.uI)()?e["framework.cordova"]=1:(0,o.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0,jt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(P,e),r=new Ft(P,t);return 0!==this.compare(n,r)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;class zt extends Ut{static get __EMPTY_NODE(){return $t}static set __EMPTY_NODE(e){$t=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(R,$t)}makePost(e,t){return(0,o.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,$t)}toString(){return".key"}}const qt=new zt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:Bt.EMPTY_NODE,this.right=null!=i?i:Bt.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Bt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class Vt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,t=Bt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e,t){return A(e.name,t.name)}function Kt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Jt(e){Gt=e}Bt.EMPTY_NODE=new Vt;const Qt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.r3)(t,".sv"),"Priority must be a string or number.")}else(0,o.hu)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,o.hu)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,o.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(r>=0,"Unknown leaf type: "+t),(0,o.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(R,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ft(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new Ht(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return o},s=new ln(e.length),a=o(s);return new Bt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.hu)(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=(0,o.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bt?t:null}hasIndex(e){return(0,o.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.hu)(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ft.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?un(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=s,new fn(u,l)}addToIndexes(e,t){const n=(0,o.UI)(this.indexes_,((n,r)=>{const i=(0,o.DV)(this.indexSet_,r);if((0,o.hu)(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ft.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),un(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ft(e.name,r))),i.insert(e,e.node)}}));return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.UI)(this.indexes_,(n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Ft(e.name,r)):n}}));return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new mn(new Bt(Kt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new mn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,o.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,((o,s)=>{t[o]=s.val(e),n++,i&&mn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vn extends mn{constructor(){super(new Bt(Kt),mn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const gn=new vn;Object.defineProperties(Ft,{MIN:{value:new Ft(P,mn.EMPTY_NODE)},MAX:{value:new Ft(R,gn)}}),zt.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Jt(gn),on(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=!0;function yn(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,yn(t))}if(e instanceof Array||!_n){let n=mn.EMPTY_NODE;return F(e,((t,r)=>{if((0,o.r3)(e,t)&&"."!==t.substring(0,1)){const e=yn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(yn(t))}{const n=[];let r=!1;const i=e;if(F(i,((e,t)=>{if("."!==e.substring(0,1)){const i=yn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ft(e,i)))}})),0===n.length)return mn.EMPTY_NODE;const o=un(n,Yt,(e=>e.name),Kt);if(r){const e=un(n,an.getCompare());return new mn(o,yn(t),new fn({".priority":e},{".priority":an}))}return new mn(o,yn(t),fn.Default)}}rn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends Ut{constructor(e){super(),this.indexPath_=e,(0,o.hu)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}makePost(e,t){const n=yn(e),r=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,r)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Ft(R,e)}toString(){return vt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=yn(e);return new Ft(t,n)}toString(){return".value"}}const Cn=new wn,kn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",In=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=kn.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=kn.charAt(t[i]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Sn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function On(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Sn(t,a)):(0,o.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Tn(t,n)):s.trackChildChange(xn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,((e,r)=>{t.hasChild(e)||n.trackChildChange(Sn(e,r))})),t.isLeafNode()||t.forEachChild(an,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(xn(t,r,i))}else n.trackChildChange(Tn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.indexedFilter_=new Nn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pn.getStartPost_(e),this.endPost_=Pn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(mn.EMPTY_NODE);const i=this;return t.forEachChild(an,((e,t)=>{i.matches(new Ft(e,t))||(r=r.updateImmediateChild(e,mn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.rangedFilter_=new Pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(mn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.hu)(a.numChildren()===this.limit_,"");const c=new Ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(xn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Sn(t,e));const n=a.updateImmediateChild(t,mn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(Tn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(Sn(l.name,l.node)),i.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,mn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new An;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dn(e){return e.loadsAllData()?new Nn(e.getIndex()):e.hasLimit()?new Rn(e):new Pn(e)}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===qt?n="$key":((0,o.hu)(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.Wl)(n),e.startSet_&&(t["startAt"]=(0,o.Wl)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,o.Wl)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,o.Wl)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,o.Wl)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ln(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=jn.getListenId_(e,n),a={};this.listens_[s]=a;const c=Mn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.DV)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=jn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),r=new o.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.xO)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.cI)(a.responseText)}catch(e){S("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return{value:null,children:new Map}}function $n(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Un());const i=e.children.get(r);t=ft(t),$n(i,t,n)}}function zn(e,t,n){null!==e.value?n(t,e.value):qn(e,((e,r)=>{const i=new lt(t.toString()+"/"+e);zn(r,i,n)}))}function qn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=1e4,Vn=3e4,Bn=3e5;class Yn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=Hn+(Vn-Hn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,r)=>{r>0&&(0,o.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn;function Gn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Kn||(Kn={}));class Xn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Kn.ACK_USER_WRITE,this.source=Gn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Xn(ut(),t,this.revert)}}return(0,o.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Xn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.source=e,this.path=t,this.type=Kn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Zn(this.source,ut()):new Zn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Kn.OVERWRITE}operationForChild(e){return yt(this.path)?new er(this.source,ut(),this.snap.getImmediateChild(e)):new er(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Kn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new er(this.source,ut(),t.value):new tr(this.source,ut(),t)}return(0,o.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ir(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(On(t.childName,t.snapshotNode))})),or(e,i,"child_removed",t,r,n),or(e,i,"child_added",t,r,n),or(e,i,"child_moved",o,r,n),or(e,i,"child_changed",t,r,n),or(e,i,"value",t,r,n),i}function or(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>ar(e,t,n))),s.forEach((n=>{const r=sr(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function sr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ar(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const r=new Ft(t.childName,t.snapshotNode),i=new Ft(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e,t){return{eventCache:e,serverCache:t}}function lr(e,t,n,r){return cr(new nr(t,n,r),e.serverCache)}function ur(e,t,n,r){return cr(e.eventCache,new nr(t,n,r))}function hr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function dr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const pr=()=>(fr||(fr=new Bt(D)),fr);class mr{constructor(e,t=pr()){this.value=e,this.children=t}static fromObject(e){let t=new mr(null);return F(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=_t(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new mr(null)}}set(e,t){if(yt(e))return new mr(t,this.children);{const n=ht(e),r=this.children.get(n)||new mr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new mr(this.value,o)}}remove(e){if(yt(e))return this.children.isEmpty()?new mr(null):new mr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new mr(null):new mr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new mr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new mr(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(_t(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),_t(t,r),n):new mr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(_t(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.writeTree_=e}static empty(){return new vr(new mr(null))}}function gr(e,t,n){if(yt(t))return new vr(new mr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=bt(i,t);return o=o.updateChild(s,n),new vr(e.writeTree_.set(i,o))}{const r=new mr(n),i=e.writeTree_.setTree(t,r);return new vr(i)}}}function _r(e,t,n){let r=e;return F(n,((e,n)=>{r=gr(r,_t(t,e),n)})),r}function yr(e,t){if(yt(t))return vr.empty();{const n=e.writeTree_.setTree(t,new mr(null));return new vr(n)}}function br(e,t){return null!=wr(e,t)}function wr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function Cr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new Ft(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))})),t}function kr(e,t){if(yt(t))return e;{const n=wr(e,t);return new vr(null!=n?new mr(n):e.writeTree_.subtree(t))}}function Ir(e){return e.writeTree_.isEmpty()}function Er(e,t){return Tr(ut(),e.writeTree_,t)}function Tr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Tr(_t(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t){return Jr(t,e)}function xr(e,t,n,r,i){(0,o.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=gr(e.visibleWrites,t,n)),e.lastWriteId=r}function Or(e,t,n,r){(0,o.hu)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=_r(e.visibleWrites,t,n),e.lastWriteId=r}function Nr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Pr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Rr(t,r.path)?i=!1:kt(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Ar(e),!0;if(r.snap)e.visibleWrites=yr(e.visibleWrites,r.path);else{const t=r.children;F(t,(t=>{e.visibleWrites=yr(e.visibleWrites,_t(r.path,t))}))}return!0}return!1}function Rr(e,t){if(e.snap)return kt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&kt(_t(e.path,n),t))return!0;return!1}function Ar(e){e.visibleWrites=Mr(e.allWrites,Dr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Dr(e){return e.visible}function Mr(e,t,n){let r=vr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)kt(n,e)?(t=bt(n,e),r=gr(r,t,s.snap)):kt(e,n)&&(t=bt(e,n),r=gr(r,ut(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(kt(n,e))t=bt(n,e),r=_r(r,t,s.children);else if(kt(e,n))if(t=bt(e,n),yt(t))r=_r(r,ut(),s.children);else{const e=(0,o.DV)(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=gr(r,ut(),n)}}}}}return r}function Lr(e,t,n,r,i){if(r||i){const o=kr(e.visibleWrites,t);if(!i&&Ir(o))return n;if(i||null!=n||br(o,ut())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(kt(e.path,t)||kt(t,e.path))},s=Mr(e.allWrites,o,t),a=n||mn.EMPTY_NODE;return Er(s,a)}return null}{const r=wr(e.visibleWrites,t);if(null!=r)return r;{const r=kr(e.visibleWrites,t);if(Ir(r))return n;if(null!=n||br(r,ut())){const e=n||mn.EMPTY_NODE;return Er(r,e)}return null}}}function jr(e,t,n){let r=mn.EMPTY_NODE;const i=wr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=kr(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=Er(kr(i,new lt(e)),t);r=r.updateImmediateChild(e,n)})),Cr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=kr(e.visibleWrites,t);return Cr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Fr(e,t,n,r,i){(0,o.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(br(e.visibleWrites,s))return null;{const t=kr(e.visibleWrites,s);return Ir(t)?i.getChild(n):Er(t,i.getChild(n))}}function Ur(e,t,n,r){const i=_t(t,n),o=wr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=kr(e.visibleWrites,i);return Er(t,r.getNode().getImmediateChild(n))}return null}function $r(e,t){return wr(e.visibleWrites,t)}function zr(e,t,n,r,i,o,s){let a;const c=kr(e.visibleWrites,t),l=wr(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Er(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function qr(){return{visibleWrites:vr.empty(),allWrites:[],lastWriteId:-1}}function Wr(e,t,n,r){return Lr(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return jr(e.writeTree,e.treePath,t)}function Vr(e,t,n,r){return Fr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return $r(e.writeTree,_t(e.treePath,t))}function Yr(e,t,n,r,i,o){return zr(e.writeTree,e.treePath,t,n,r,i,o)}function Kr(e,t,n){return Ur(e.writeTree,e.treePath,t,n)}function Gr(e,t){return Jr(_t(e.treePath,t),e.writeTree)}function Jr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,xn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Sn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,xn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Zr=new Xr;class ei{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:dr(this.viewCache_),i=Yr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e){return{filter:e}}function ni(e,t){(0,o.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ri(e,t,n,r,i){const s=new Qr;let a,c;if(n.type===Kn.OVERWRITE){const l=n;l.source.fromUser?a=ai(e,t,l.path,l.snap,r,i,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=si(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===Kn.MERGE){const l=n;l.source.fromUser?a=li(e,t,l.path,l.children,r,i,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=hi(e,t,l.path,l.children,r,i,c,s))}else if(n.type===Kn.ACK_USER_WRITE){const o=n;a=o.revert?pi(e,t,o.path,r,i,s):di(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Kn.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=fi(e,t,n.path,r,s)}const l=s.getChanges();return ii(t,a,l),{viewCache:a,changes:l}}function ii(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=hr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(En(hr(t)))}}function oi(e,t,n,r,i,s){const a=t.eventCache;if(null!=Br(r,n))return t;{let c,l;if(yt(n))if((0,o.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=dr(t),i=n instanceof mn?n:mn.EMPTY_NODE,o=Hr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Wr(r,dr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ht(n);if(".priority"===u){(0,o.hu)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=Vr(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Vr(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=Kr(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return lr(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function si(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,Zr,null)}const h=ur(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new ei(i,h,o);return oi(e,h,n,i,d,a)}function ai(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new ei(i,t,o);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=lr(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=lr(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),l=a.getNode().getImmediateChild(i);let h;if(yt(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,r):mn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,u,s);c=lr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ci(e,t){return e.eventCache.isCompleteForChild(t)}function li(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const l=_t(n,r);ci(t,ht(l))&&(a=ai(e,a,l,c,i,o,s))})),r.foreach(((r,c)=>{const l=_t(n,r);ci(t,ht(l))||(a=ai(e,a,l,c,i,o,s))})),a}function ui(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function hi(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?r:new mr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=ui(e,c,r);l=si(e,l,new lt(n),u,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=ui(e,c,r);l=si(e,l,new lt(n),u,i,o,s,a)}})),l}function di(e,t,n,r,i,o,s){if(null!=Br(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return si(e,t,n,c.getNode().getChild(n),i,o,a,s);if(yt(n)){let r=new mr(null);return c.getNode().forEachChild(qt,((e,t)=>{r=r.set(new lt(e),t)})),hi(e,t,n,r,i,o,a,s)}return t}{let l=new mr(null);return r.foreach(((e,t)=>{const r=_t(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),hi(e,t,n,l,i,o,a,s)}}function fi(e,t,n,r,i){const o=t.serverCache,s=ur(t,o.getNode(),o.isFullyInitialized()||yt(n),o.isFiltered());return oi(e,s,n,r,Zr,i)}function pi(e,t,n,r,i,s){let a;if(null!=Br(r,n))return t;{const c=new ei(r,t,i),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wr(r,dr(t));else{const e=t.serverCache.getNode();(0,o.hu)(e instanceof mn,"serverChildren would be complete if leaf node"),n=Hr(r,e)}u=e.filter.updateFullNode(l,n,s)}else{const i=ht(n);let o=Kr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,mn.EMPTY_NODE,ft(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wr(r,dr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Br(r,ut()),lr(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Nn(n.getIndex()),i=Dn(n);this.processor_=ti(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),l=new nr(a,o.isFullyInitialized(),r.filtersNodes()),u=new nr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=cr(u,l),this.eventGenerator_=new rr(this.query_)}get query(){return this.query_}}function vi(e){return e.viewCache_.serverCache.getNode()}function gi(e){return hr(e.viewCache_)}function _i(e,t){const n=dr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function yi(e){return 0===e.eventRegistrations_.length}function bi(e,t){e.eventRegistrations_.push(t)}function wi(e,t,n){const r=[];if(n){(0,o.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ci(e,t,n,r){t.type===Kn.MERGE&&null!==t.source.queryId&&((0,o.hu)(dr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(hr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ri(e.processor_,i,t,n,r);return ni(e.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ii(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ki(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,((e,t)=>{r.push(Tn(e,t))}))}return n.isFullyInitialized()&&r.push(En(n.getNode())),Ii(e,r,n.getNode(),t)}function Ii(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return ir(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei,Ti;class Si{constructor(){this.views=new Map}}function xi(e){(0,o.hu)(!Ei,"__referenceConstructor has already been defined"),Ei=e}function Oi(){return(0,o.hu)(Ei,"Reference.ts has not been loaded"),Ei}function Ni(e){return 0===e.views.size}function Pi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),Ci(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Ci(o,t,n,r));return i}}function Ri(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Wr(n,i?r:null),o=!1;e?o=!0:r instanceof mn?(e=Hr(n,r),o=!1):(e=mn.EMPTY_NODE,o=!1);const s=cr(new nr(e,o,!1),new nr(r,i,!1));return new mi(t,s)}return s}function Ai(e,t,n,r,i,o){const s=Ri(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),bi(s,n),ki(s,n)}function Di(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Ui(e);if("default"===i)for(const[c,l]of e.views.entries())s=s.concat(wi(l,n,r)),yi(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const t=e.views.get(i);t&&(s=s.concat(wi(t,n,r)),yi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Ui(e)&&o.push(new(Oi())(t._repo,t._path)),{removed:o,events:s}}function Mi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Li(e,t){let n=null;for(const r of e.views.values())n=n||_i(r,t);return n}function ji(e,t){const n=t._queryParams;if(n.loadsAllData())return $i(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Fi(e,t){return null!=ji(e,t)}function Ui(e){return null!=$i(e)}function $i(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){(0,o.hu)(!Ti,"__referenceConstructor has already been defined"),Ti=e}function qi(){return(0,o.hu)(Ti,"Reference.ts has not been loaded"),Ti}let Wi=1;class Hi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mr(null),this.pendingWriteTree_=qr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vi(e,t,n,r,i){return xr(e.pendingWriteTree_,t,n,r,i),i?io(e,new er(Gn(),t,n)):[]}function Bi(e,t,n,r){Or(e.pendingWriteTree_,t,n,r);const i=mr.fromObject(n);return io(e,new tr(Gn(),t,i))}function Yi(e,t,n=!1){const r=Nr(e.pendingWriteTree_,t),i=Pr(e.pendingWriteTree_,t);if(i){let t=new mr(null);return null!=r.snap?t=t.set(ut(),!0):F(r.children,(e=>{t=t.set(new lt(e),!0)})),io(e,new Xn(r.path,t,n))}return[]}function Ki(e,t,n){return io(e,new er(Jn(),t,n))}function Gi(e,t,n){const r=mr.fromObject(n);return io(e,new tr(Jn(),t,r))}function Ji(e,t){return io(e,new Zn(Jn(),t))}function Qi(e,t,n){const r=uo(e,n);if(r){const n=ho(r),i=n.path,o=n.queryId,s=bt(i,t),a=new Zn(Qn(o),s);return fo(e,i,a)}return[]}function Xi(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Fi(s,t))){const c=Di(s,t,n,r);Ni(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Ui(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=po(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=ao(e,r);e.listenProvider_.startListening(mo(i),co(e,i),o.hashFn,o.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(mo(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(lo(t));e.listenProvider_.stopListening(mo(t),n)}))}vo(e,l)}return a}function Zi(e,t,n,r){const i=uo(e,r);if(null!=i){const r=ho(i),o=r.path,s=r.queryId,a=bt(o,t),c=new er(Qn(s),a,n);return fo(e,o,c)}return[]}function eo(e,t,n,r){const i=uo(e,r);if(i){const r=ho(i),o=r.path,s=r.queryId,a=bt(o,t),c=mr.fromObject(n),l=new tr(Qn(s),a,c);return fo(e,o,l)}return[]}function to(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=bt(e,i);s=s||Li(t,n),a=a||Ui(t)}));let c,l=e.syncPointTree_.get(i);if(l?(a=a||Ui(l),s=s||Li(l,ut())):(l=new Si,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)c=!0;else{c=!1,s=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Li(t,ut());n&&(s=s.updateImmediateChild(e,n))}))}const u=Fi(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=lo(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=go();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Sr(e.pendingWriteTree_,i);let d=Ai(l,t,n,h,s,c);if(!u&&!a&&!r){const n=ji(l,t);d=d.concat(_o(e,t,n))}return d}function no(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=bt(e,t),i=Li(n,r);if(i)return i}));return Lr(i,t,o,n,r)}function ro(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=bt(e,n);r=r||Li(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Li(i,ut()):(i=new Si,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new nr(r,!0,!1):null,a=Sr(e.pendingWriteTree_,t._path),c=Ri(i,t,a,o?s.getNode():mn.EMPTY_NODE,o);return gi(c)}function io(e,t){return oo(t,e.syncPointTree_,null,Sr(e.pendingWriteTree_,ut()))}function oo(e,t,n,r){if(yt(e.path))return so(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Li(i,ut()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Gr(r,s);o=o.concat(oo(a,c,e,t))}return i&&(o=o.concat(Pi(i,e,r,n))),o}}function so(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Li(i,ut()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Gr(r,t),c=e.operationForChild(t);c&&(o=o.concat(so(c,i,s,a)))})),i&&(o=o.concat(Pi(i,e,r,n))),o}function ao(e,t){const n=t.query,r=co(e,n);return{hashFn:()=>{const e=vi(t)||mn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Qi(e,n._path,r):Ji(e,n._path);{const r=q(t,n);return Xi(e,n,null,r)}}}}function co(e,t){const n=lo(t);return e.queryToTagMap.get(n)}function lo(e){return e._path.toString()+"$"+e._queryIdentifier}function uo(e,t){return e.tagToQueryMap.get(t)}function ho(e){const t=e.indexOf("$");return(0,o.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function fo(e,t,n){const r=e.syncPointTree_.get(t);(0,o.hu)(r,"Missing sync point for query tag that we're tracking");const i=Sr(e.pendingWriteTree_,t);return Pi(r,n,i,null)}function po(e){return e.fold(((e,t,n)=>{if(t&&Ui(t)){const e=$i(t);return[e]}{let e=[];return t&&(e=Mi(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}function mo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qi())(e._repo,e._path):e}function vo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=lo(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function go(){return Wi++}function _o(e,t,n){const r=t._path,i=co(e,t),s=ao(e,n),a=e.listenProvider_.startListening(mo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,o.hu)(!Ui(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&Ui(t))return[$i(t).query];{let e=[];return t&&(e=e.concat(Mi(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(mo(r),co(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yo(t)}node(){return this.node_}}class bo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new bo(this.syncTree_,t)}node(){return no(this.syncTree_,this.path_)}}const wo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Co=function(e,t,n){return e&&"object"===typeof e?((0,o.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ko(e[".sv"],t,n):"object"===typeof e[".sv"]?Io(e[".sv"],t):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ko=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+e)}},Io=function(e,t,n){e.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Eo=function(e,t,n,r){return So(t,new bo(n,e),r)},To=function(e,t,n){return So(e,new yo(t),n)};function So(e,t,n){const r=e.getPriority().val(),i=Co(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Co(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,yn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,((e,r)=>{const i=So(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Oo(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=(0,o.DV)(r.node.children,i)||{children:{},childCount:0};r=new xo(i,r,e),n=ft(n),i=ht(n)}return r}function No(e){return e.node.value}function Po(e,t){e.node.value=t,Fo(e)}function Ro(e){return e.node.childCount>0}function Ao(e){return void 0===No(e)&&!Ro(e)}function Do(e,t){F(e.node.children,((n,r)=>{t(new xo(n,e,r))}))}function Mo(e,t,n,r){n&&!r&&t(e),Do(e,(e=>{Mo(e,t,!0,r)})),n&&r&&t(e)}function Lo(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function jo(e){return new lt(null===e.parent?e.name:jo(e.parent)+"/"+e.name)}function Fo(e){null!==e.parent&&Uo(e.parent,e.name,e)}function Uo(e,t,n){const r=Ao(n),i=(0,o.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Fo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Fo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=/[\[\].#$\/\u0000-\u001F\u007F]/,zo=/[\[\].#$\u0000-\u001F\u007F]/,qo=10485760,Wo=function(e){return"string"===typeof e&&0!==e.length&&!$o.test(e)},Ho=function(e){return"string"===typeof e&&0!==e.length&&!zo.test(e)},Vo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ho(e)},Bo=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!O(e)||e&&"object"===typeof e&&(0,o.r3)(e,".sv")},Yo=function(e,t,n,r){r&&void 0===t||Ko((0,o.gK)(e,"value"),t,n)},Ko=function(e,t,n){const r=n instanceof lt?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xt(r));if("function"===typeof t)throw new Error(e+"contains a function "+xt(r)+" with contents = "+t.toString());if(O(t))throw new Error(e+"contains "+t.toString()+" "+xt(r));if("string"===typeof t&&t.length>qo/3&&(0,o.ug)(t)>qo)throw new Error(e+"contains a string greater than "+qo+" utf8 bytes "+xt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Wo(t)))throw new Error(e+" contains an invalid key ("+t+") "+xt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(r,t),Ko(e,o,r),Tt(r)})),n&&i)throw new Error(e+' contains ".value" child '+xt(r)+" in addition to actual children.")}},Go=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=vt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Wo(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&kt(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Jo=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,o.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];F(t,((e,t)=>{const r=new lt(e);if(Ko(i,t,_t(n,r)),".priority"===pt(r)&&!Bo(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),Go(i,s)},Qo=function(e,t,n,r){if((!r||void 0!==n)&&!Ho(n))throw new Error((0,o.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Xo=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qo(e,t,n,r)},Zo=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},es=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Wo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Vo(n))throw new Error((0,o.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ns(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Ct(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function rs(e,t,n){ns(e,n),is(e,(e=>kt(e,t)||kt(t,e)))}function is(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(os(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function os(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&k("event: "+n.toString()),Y(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="repo_interrupt",as=25;class cs{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ts,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Un(),this.transactionQueueTree_=new xo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ls(e,t,n){if(e.stats_=ve(e.repoInfo_),e.forceRestClient_||K())e.server_=new jn(e.repoInfo_,((t,n,r,i)=>{ds(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fs(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new jt(e.repoInfo_,t,((t,n,r,i)=>{ds(e,t,n,r,i)}),(t=>{fs(e,t)}),(t=>{ps(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Yn(e.stats_,e.server_))),e.infoData_=new Fn,e.infoSyncTree_=new Hi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Ki(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),ms(e,"connected",!1),e.serverSyncTree_=new Hi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);rs(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function us(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function hs(e){return wo({timestamp:us(e)})}function ds(e,t,n,r,i){e.dataUpdateCount++;const s=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.UI)(n,(e=>yn(e)));a=eo(e.serverSyncTree_,s,t,i)}else{const t=yn(n);a=Zi(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.UI)(n,(e=>yn(e)));a=Gi(e.serverSyncTree_,s,t)}else{const t=yn(n);a=Ki(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Ss(e,s)),rs(e.eventQueue_,c,a)}function fs(e,t){ms(e,"connected",t),!1===t&&bs(e)}function ps(e,t){F(t,((t,n)=>{ms(e,t,n)}))}function ms(e,t,n){const r=new lt("/.info/"+t),i=yn(n);e.infoData_.updateSnapshot(r,i);const o=Ki(e.infoSyncTree_,r,i);rs(e.eventQueue_,r,o)}function vs(e){return e.nextWriteId_++}function gs(e,t,n){const r=ro(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=yn(r).withIndex(t._queryParams.getIndex());let o;if(to(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Ki(e.serverSyncTree_,t._path,i);else{const n=co(e.serverSyncTree_,t);o=Zi(e.serverSyncTree_,t._path,i,n)}return rs(e.eventQueue_,t._path,o),Xi(e.serverSyncTree_,t,n,null,!0),i}),(n=>(Cs(e,"get for query "+(0,o.Wl)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function _s(e,t,n,r,i){Cs(e,"set",{path:t.toString(),value:n,priority:r});const o=hs(e),s=yn(n,r),a=no(e.serverSyncTree_,t),c=To(s,a,o),l=vs(e),u=Vi(e.serverSyncTree_,t,c,l,!0);ns(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||S("set at "+t+" failed: "+n);const s=Yi(e.serverSyncTree_,l,!o);rs(e.eventQueue_,t,s),ks(e,i,n,r)}));const h=As(e,t);Ss(e,h),rs(e.eventQueue_,h,[])}function ys(e,t,n,r){Cs(e,"update",{path:t.toString(),value:n});let i=!0;const o=hs(e),s={};if(F(n,((n,r)=>{i=!1,s[n]=Eo(_t(t,n),yn(r),e.serverSyncTree_,o)})),i)k("update() called with empty data.  Don't do anything."),ks(e,r,"ok",void 0);else{const i=vs(e),o=Bi(e.serverSyncTree_,t,s,i);ns(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||S("update at "+t+" failed: "+n);const a=Yi(e.serverSyncTree_,i,!s),c=a.length>0?Ss(e,t):t;rs(e.eventQueue_,c,a),ks(e,r,n,o)})),F(n,(n=>{const r=As(e,_t(t,n));Ss(e,r)})),rs(e.eventQueue_,t,[])}}function bs(e){Cs(e,"onDisconnectEvents");const t=hs(e),n=Un();zn(e.onDisconnect_,ut(),((r,i)=>{const o=Eo(r,i,e.serverSyncTree_,t);$n(n,r,o)}));let r=[];zn(n,ut(),((t,n)=>{r=r.concat(Ki(e.serverSyncTree_,t,n));const i=As(e,t);Ss(e,i)})),e.onDisconnect_=Un(),rs(e.eventQueue_,ut(),r)}function ws(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ss)}function Cs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),k(n,...t)}function ks(e,t,n,r){t&&Y((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function Is(e,t,n){return no(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function Es(e,t=e.transactionQueueTree_){if(t||Rs(e,t),No(t)){const n=Ns(e,t);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Ts(e,jo(t),n)}else Ro(t)&&Do(t,(t=>{Es(e,t)}))}function Ts(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Is(e,t,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,o.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,(r=>{Cs(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Yi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Rs(e,Oo(e.transactionQueueTree_,t)),Es(e,e.transactionQueueTree_),rs(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Y(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ss(e,t)}}),a)}function Ss(e,t){const n=Os(e,t),r=jo(n),i=Ns(e,n);return xs(e,i,r),r}function xs(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const s=t[c],l=bt(n,s.path);let u,h=!1;if((0,o.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(Yi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=as)h=!0,u="maxretry",i=i.concat(Yi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Is(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Ko("transaction failed: Data returned ",r,s.path);let t=yn(r);const c="object"===typeof r&&null!=r&&(0,o.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=hs(e),h=To(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=vs(e),a.splice(a.indexOf(l),1),i=i.concat(Vi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Yi(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Yi(e.serverSyncTree_,s.currentWriteId,!0))}rs(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Rs(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)Y(r[o]);Es(e,e.transactionQueueTree_)}function Os(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===No(r))r=Oo(r,n),t=ft(t),n=ht(t);return r}function Ns(e,t){const n=[];return Ps(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ps(e,t,n){const r=No(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Do(t,(t=>{Ps(e,t,n)}))}function Rs(e,t){const n=No(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Po(t,n.length>0?n:void 0)}Do(t,(t=>{Rs(e,t)}))}function As(e,t){const n=jo(Os(e,t)),r=Oo(e.transactionQueueTree_,t);return Lo(r,(t=>{Ds(e,t)})),Ds(e,r),Mo(r,(t=>{Ds(e,t)})),n}function Ds(e,t){const n=No(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Yi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Po(t,void 0):n.length=s+1,rs(e.eventQueue_,jo(t),i);for(let e=0;e<r.length;e++)Y(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Ls(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const js=function(e,t){const n=Fs(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},Fs=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Ms(e.substring(u,h)));const d=Ls(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Wl)(this.snapshot.exportVal())}}class $s{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Ws(this._repo,this._path)}get _queryIdentifier(){const e=Ln(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return Ln(this._queryParams)}isEqual(e){if(e=(0,o.m9)(e),!(e instanceof qs))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Ws extends qs{constructor(e,t){super(e,t,new An,!1)}get parent(){const e=gt(this._path);return null===e?null:new Ws(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Hs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Bs(this.ref,e);return new Hs(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Hs(n,Bs(this.ref,t),an))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vs(e,t){return e=(0,o.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Bs(e._root,t):e._root}function Bs(e,t){return e=(0,o.m9)(e),null===ht(e._path)?Xo("child","path",t,!1):Qo("child","path",t,!1),new Ws(e._repo,_t(e._path,t))}function Ys(e,t){e=(0,o.m9)(e),Zo("push",e._path),Yo("push",t,e._path,!0);const n=us(e._repo),r=In(n),i=Bs(e,r),s=Bs(e,r);let a;return a=null!=t?Gs(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Ks(e){return Zo("remove",e._path),Gs(e,null)}function Gs(e,t){e=(0,o.m9)(e),Zo("set",e._path),Yo("set",t,e._path,!1);const n=new o.BH;return _s(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Js(e,t){Jo("update",t,e._path,!1);const n=new o.BH;return ys(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Qs(e){e=(0,o.m9)(e);const t=new zs((()=>{})),n=new Xs(t);return gs(e._repo,e,n).then((t=>new Hs(t,new Ws(e._repo,e._path),e._queryParams.getIndex())))}class Xs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Us("value",this,new Hs(e.snapshotNode,new Ws(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $s(this,e,t):null}matches(e){return e instanceof Xs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}xi(Ws),zi(Ws);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zs="FIREBASE_DATABASE_EMULATOR_HOST",ea={};let ta=!1;function na(e,t,n,r){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function ra(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=js(o,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/firebase-todolist/"}[Zs]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=js(o,i),l=c.repoInfo):s=!c.repoInfo.secure;const u=i&&s?new X(X.OWNER):new Q(e.name,e.options,t);es("Invalid Firebase Database URL",c),yt(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oa(l,e,u,new J(e.name,n));return new sa(h,e)}function ia(e,t){const n=ea[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ws(e),delete n[e.key]}function oa(e,t,n,r){let i=ea[t.name];i||(i={},ea[t.name]=i);let o=i[e.toURLString()];return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new cs(e,ta,n,r),i[e.toURLString()]=o,o}class sa{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ls(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ws(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ia(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function aa(e=(0,r.Mq)(),t){const n=(0,r.qX)(e,"database").getImmediate({identifier:t}),i=(0,o.P0)("database");return i&&ca(n,...i),n}function ca(e,t,n,r={}){e=(0,o.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,o.Sg)(r.mockUserToken,e.app.options.projectId);s=new X(t)}na(i,t,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function la(e){u(r.Jn),(0,r.Xd)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ra(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,e),(0,r.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};la()},6369:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Jr}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function l(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function v(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function g(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function _(e){var t=parseFloat(e);return isNaN(t)?e:t}function y(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}y("slot,component",!0);var b=y("key,ref,slot,slot-scope,is");function w(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var C=Object.prototype.hasOwnProperty;function k(e,t){return C.call(e,t)}function I(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var E=/-(\w)/g,T=I((function(e){return e.replace(E,(function(e,t){return t?t.toUpperCase():""}))})),S=I((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),x=/\B([A-Z])/g,O=I((function(e){return e.replace(x,"-$1").toLowerCase()}));function N(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function P(e,t){return e.bind(t)}var R=Function.prototype.bind?P:N;function A(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function D(e,t){for(var n in t)e[n]=t[n];return e}function M(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function L(e,t,n){}var j=function(e,t,n){return!1},F=function(e){return e};function U(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return U(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return U(e[n],t[n])}))}catch(c){return!1}}function $(e,t){for(var n=0;n<e.length;n++)if(U(e[n],t))return n;return-1}function z(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function q(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var W="data-server-rendered",H=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:L,parsePlatformTagName:F,mustUseProp:j,async:!0,_lifecycleHooks:V},Y=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function G(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(Y.source,".$_\\d]"));function Q(e){if(!J.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var X="__proto__"in{},Z="undefined"!==typeof window,ee=Z&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var oe,se=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(Z)try{var le={};Object.defineProperty(le,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,le)}catch(Qs){}var ue=function(){return void 0===oe&&(oe=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},he=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ve(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ge=function(){function e(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),_e=function(e){void 0===e&&(e="");var t=new ge;return t.text=e,t.isComment=!0,t};function ye(e){return new ge(void 0,void 0,void 0,String(e))}function be(e){var t=new ge(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var we=0,Ce=[],ke=function(){for(var e=0;e<Ce.length;e++){var t=Ce[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ce.length=0},Ie=function(){function e(){this._pending=!1,this.id=we++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ce.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Ie.target=null;var Ee=[];function Te(e){Ee.push(e),Ie.target=e}function Se(){Ee.pop(),Ie.target=Ee[Ee.length-1]}var xe=Array.prototype,Oe=Object.create(xe),Ne=["push","pop","shift","unshift","splice","sort","reverse"];Ne.forEach((function(e){var t=xe[e];G(Oe,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Pe=Object.getOwnPropertyNames(Oe),Re={},Ae=!0;function De(e){Ae=e}var Me={notify:L,depend:L,addSub:L,removeSub:L},Le=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Me:new Ie,this.vmCount=0,G(e,"__ob__",this),i(e)){if(!n)if(X)e.__proto__=Oe;else for(var r=0,o=Pe.length;r<o;r++){var s=Pe[r];G(e,s,Oe[s])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){s=a[r];Fe(e,s,Re,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)je(e[t],!1,this.mock)},e}();function je(e,t,n){return e&&k(e,"__ob__")&&e.__ob__ instanceof Le?e.__ob__:!Ae||!n&&ue()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||Ve(e)||e instanceof ge?void 0:new Le(e,t,n)}function Fe(e,t,n,r,o,s){var a=new Ie,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var l=c&&c.get,u=c&&c.set;l&&!u||n!==Re&&2!==arguments.length||(n=e[t]);var h=!o&&je(n,!1,s);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=l?l.call(e):n;return Ie.target&&(a.depend(),h&&(h.dep.depend(),i(t)&&ze(t))),Ve(t)&&!o?t.value:t},set:function(t){var r=l?l.call(e):n;if(q(r,t)){if(u)u.call(e,t);else{if(l)return;if(!o&&Ve(r)&&!Ve(t))return void(r.value=t);n=t}h=!o&&je(t,!1,s),a.notify()}}}),a}}function Ue(e,t,n){if(!He(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&je(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(Fe(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function $e(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||He(e)||k(e,t)&&(delete e[t],n&&n.dep.notify())}}function ze(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&ze(t)}function qe(e){return We(e,!0),G(e,"__v_isShallow",!0),e}function We(e,t){if(!He(e)){je(e,t,ue());0}}function He(e){return!(!e||!e.__v_isReadonly)}function Ve(e){return!(!e||!0!==e.__v_isRef)}function Be(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(Ve(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];Ve(r)&&!Ve(e)?r.value=e:t[n]=e}})}var Ye="watcher";"".concat(Ye," callback"),"".concat(Ye," getter"),"".concat(Ye," cleanup");var Ke;var Ge=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ke;try{return Ke=this,e()}finally{Ke=t}}else 0},e.prototype.on=function(){Ke=this},e.prototype.off=function(){Ke=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Je(e,t){void 0===t&&(t=Ke),t&&t.active&&t.effects.push(e)}function Qe(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Xe=I((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Ze(e,t){function n(){var e=n.fns;if(!i(e))return Gt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Gt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,r,i,s){var c,l,u,h;for(c in e)l=e[c],u=t[c],h=Xe(c),o(l)||(o(u)?(o(l.fns)&&(l=e[c]=Ze(l,s)),a(h.once)&&(l=e[c]=i(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,e[c]=u));for(c in t)o(e[c])&&(h=Xe(c),r(h.name,t[c],h.capture))}function tt(e,t,n){var r;e instanceof ge&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),w(r.fns,c)}o(i)?r=Ze([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Ze([i,c]),r.merged=!0,e[t]=r}function nt(e,t,n){var r=t.options.props;if(!o(r)){var i={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var l in r){var u=O(l);rt(i,c,l,u,!0)||rt(i,a,l,u,!1)}return i}}function rt(e,t,n,r,i){if(s(t)){if(k(t,n))return e[n]=t[n],i||delete t[n],!0;if(k(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function it(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function ot(e){return l(e)?[ye(e)]:i(e)?at(e):void 0}function st(e){return s(e)&&s(e.text)&&c(e.isComment)}function at(e,t){var n,r,c,u,h=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=h.length-1,u=h[c],i(r)?r.length>0&&(r=at(r,"".concat(t||"","_").concat(n)),st(r[0])&&st(u)&&(h[c]=ye(u.text+r[0].text),r.shift()),h.push.apply(h,r)):l(r)?st(u)?h[c]=ye(u.text+r):""!==r&&h.push(ye(r)):st(r)&&st(u)?h[c]=ye(u.text+r.text):(a(e._isVList)&&s(r.tag)&&o(r.key)&&s(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function ct(e,t){var n,r,o,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var l=e[Symbol.iterator](),u=l.next();while(!u.done)c.push(t(u.value,c.length)),u=l.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=t(e[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function lt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=D(D({},r),n)),i=o(n)||(u(t)?t():t)):i=this.$slots[e]||(u(t)?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ut(e){return kr(this.$options,"filters",e,!0)||F}function ht(e,t){return i(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,r,i){var o=B.keyCodes[t]||n;return i&&r&&!B.keyCodes[t]?ht(i,r):o?ht(o,e):r?O(r)!==t:void 0===e}function ft(e,t,n,r,o){if(n)if(h(n)){i(n)&&(n=M(n));var s=void 0,a=function(i){if("class"===i||"style"===i||b(i))s=e;else{var a=e.attrs&&e.attrs.type;s=r||B.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=T(i),l=O(i);if(!(c in s)&&!(l in s)&&(s[i]=n[i],o)){var u=e.on||(e.on={});u["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function pt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),vt(r,"__static__".concat(e),!1)),r}function mt(e,t,n){return vt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function vt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&gt(e[r],"".concat(t,"_").concat(r),n);else gt(e,t,n)}function gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function _t(e,t){if(t)if(f(t)){var n=e.on=e.on?D({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function yt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var s=e[o];i(s)?yt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function bt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function wt(e,t){return"string"===typeof e?t+e:e}function Ct(e){e._o=mt,e._n=_,e._s=g,e._l=ct,e._t=lt,e._q=U,e._i=$,e._m=pt,e._f=ut,e._k=dt,e._b=ft,e._v=ye,e._e=_e,e._u=yt,e._g=_t,e._d=bt,e._p=wt}function kt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(It)&&delete n[l];return n}function It(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Et(e){return e.isComment&&e.asyncFactory}function Tt(e,t,n,i){var o,s=Object.keys(n).length>0,a=t?!!t.$stable:!s,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var l in o={},t)t[l]&&"$"!==l[0]&&(o[l]=St(e,n,l,t[l]))}else o={};for(var u in n)u in o||(o[u]=xt(n,u));return t&&Object.isExtensible(t)&&(t._normalized=o),G(o,"$stable",a),G(o,"$key",c),G(o,"$hasNormal",s),o}function St(e,t,n,r){var o=function(){var t=me;ve(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ot(n);var o=n&&n[0];return ve(t),n&&(!o||1===n.length&&o.isComment&&!Et(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function xt(e,t){return function(){return e[t]}}function Ot(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Nt(e);ve(e),Te();var i=Gt(n,null,[e._props||qe({}),r],e,"setup");if(Se(),ve(),u(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var s in i)"__sfc"!==s&&Be(o,i,s)}else for(var s in i)K(s)||Be(e,i,s);else 0}}function Nt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};G(t,"_v_attr_proxy",!0),Pt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Pt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return At(e)},emit:R(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return Be(e,t,n)}))}}}function Pt(e,t,n,r,i){var o=!1;for(var s in t)s in e?t[s]!==n[s]&&(o=!0):(o=!0,Rt(e,s,r,i));for(var s in e)s in t||(o=!0,delete e[s]);return o}function Rt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function At(e){return e._slotsProxy||Dt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Dt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Mt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=kt(t._renderChildren,i),e.$scopedSlots=n?Tt(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Ht(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ht(e,t,n,r,i,!0)};var o=n&&n.data;Fe(e,"$attrs",o&&o.attrs||r,null,!0),Fe(e,"$listeners",t._parentListeners||r,null,!0)}var Lt=null;function jt(e){Ct(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Tt(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Dt(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{ve(t),Lt=t,e=r.call(t._renderProxy,t.$createElement)}catch(Qs){Kt(Qs,t,"render"),e=t._vnode}finally{Lt=null,ve()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ge||(e=_e()),e.parent=o,e}}function Ft(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Ut(e,t,n,r,i){var o=_e();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function $t(e,t){if(a(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=Lt;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],i=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var u=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=z((function(n){e.resolved=Ft(n,t),i?r.length=0:u(!0)})),f=z((function(t){s(e.errorComp)&&(e.error=!0,u(!0))})),p=e(d,f);return h(p)&&(v(p)?o(e.resolved)&&p.then(d,f):v(p.component)&&(p.component.then(d,f),s(p.error)&&(e.errorComp=Ft(p.error,t)),s(p.loading)&&(e.loadingComp=Ft(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,u(!1))}),p.delay||200)),s(p.timeout)&&(l=setTimeout((function(){l=null,o(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function zt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Et(n)))return n}}var qt=1,Wt=2;function Ht(e,t,n,r,o,s){return(i(n)||l(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Wt),Vt(e,t,n,r,o)}function Vt(e,t,n,r,o){if(s(n)&&s(n.__ob__))return _e();if(s(n)&&s(n.is)&&(t=n.is),!t)return _e();var a,c;if(i(r)&&u(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Wt?r=ot(r):o===qt&&(r=it(r)),"string"===typeof t){var l=void 0;c=e.$vnode&&e.$vnode.ns||B.getTagNamespace(t),a=B.isReservedTag(t)?new ge(B.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(l=kr(e.$options,"components",t))?new ge(t,n,r,void 0,void 0,e):sr(l,n,e,r,t)}else a=sr(t,n,e,r);return i(a)?a:s(a)?(s(c)&&Bt(a,c),s(n)&&Yt(n),a):_e()}function Bt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Bt(c,t,n)}}function Yt(e){h(e.style)&&fn(e.style),h(e.class)&&fn(e.class)}function Kt(e,t,n){Te();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Qs){Jt(Qs,r,"errorCaptured hook")}}}Jt(e,t,n)}finally{Se()}}function Gt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(e){return Kt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Qs){Kt(Qs,r,i)}return o}function Jt(e,t,n){if(B.errorHandler)try{return B.errorHandler.call(null,e,t,n)}catch(Qs){Qs!==e&&Qt(Qs,null,"config.errorHandler")}Qt(e,t,n)}function Qt(e,t,n){if(!Z||"undefined"===typeof console)throw e;console.error(e)}var Xt,Zt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Xt=function(){rn.then(nn),ie&&setTimeout(L)},Zt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,sn=new MutationObserver(nn),an=document.createTextNode(String(on));sn.observe(an,{characterData:!0}),Xt=function(){on=(on+1)%2,an.data=String(on)},Zt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Qs){Kt(Qs,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Xt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function ln(e){return function(t,n){if(void 0===n&&(n=me),n)return un(n,e,t)}}function un(e,t,n){var r=e.$options;r[t]=mr(r[t],n)}ln("beforeMount"),ln("mounted"),ln("beforeUpdate"),ln("updated"),ln("beforeDestroy"),ln("destroyed"),ln("activated"),ln("deactivated"),ln("serverPrefetch"),ln("renderTracked"),ln("renderTriggered"),ln("errorCaptured");var hn="2.7.14";var dn=new fe;function fn(e){return pn(e,dn),dn.clear(),e}function pn(e,t){var n,r,o=i(e);if(!(!o&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ge)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(o){n=e.length;while(n--)pn(e[n],t)}else if(Ve(e))pn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)pn(e[r[n]],t)}}}var mn,vn=0,gn=function(){function e(e,t,n,r,i){Je(this,Ke&&!Ke._vm?Ke:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",u(t)?this.getter=t:(this.getter=Q(t),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Te(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Qs){if(!this.user)throw Qs;Kt(Qs,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&fn(e),Se(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Gt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function _n(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Cn(e,t)}function yn(e,t){mn.$on(e,t)}function bn(e,t){mn.$off(e,t)}function wn(e,t){var n=mn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Cn(e,t,n){mn=e,et(t,n||{},yn,bn,wn,e),mn=void 0}function kn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,s=e.length;o<s;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var s,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?A(n):n;for(var r=A(arguments,1),i='event handler for "'.concat(e,'"'),o=0,s=n.length;o<s;o++)Gt(n[o],t,r,t,i)}return t}}var In=null;function En(e){var t=In;return In=e,function(){In=t}}function Tn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Sn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=En(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){An(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||w(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),An(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function xn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=_e),An(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&An(e,"beforeUpdate")}};new gn(e,r,L,i,!0),n=!1;var o=e._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==e.$vnode&&(e._isMounted=!0,An(e,"mounted")),e}function On(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),l=!!(o||e.$options._renderChildren||c),u=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||r;e._attrsProxy&&Pt(e._attrsProxy,h,u.data&&u.data.attrs||r,e,"$attrs")&&(l=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&Pt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,Cn(e,n,d),t&&e.$options.props){De(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var v=p[m],g=e.$options.props;f[v]=Ir(v,g,t,e)}De(!0),e.$options.propsData=t}l&&(e.$slots=kt(o,i.context),e.$forceUpdate())}function Nn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pn(e,t){if(t){if(e._directInactive=!1,Nn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);An(e,"activated")}}function Rn(e,t){if((!t||(e._directInactive=!0,!Nn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Rn(e.$children[n]);An(e,"deactivated")}}function An(e,t,n,r){void 0===r&&(r=!0),Te();var i=me;r&&ve(e);var o=e.$options[t],s="".concat(t," hook");if(o)for(var a=0,c=o.length;a<c;a++)Gt(o[a],e,n||null,e,s);e._hasHookEvent&&e.$emit("hook:"+t),r&&ve(i),Se()}var Dn=[],Mn=[],Ln={},jn=!1,Fn=!1,Un=0;function $n(){Un=Dn.length=Mn.length=0,Ln={},jn=Fn=!1}var zn=0,qn=Date.now;if(Z&&!te){var Wn=window.performance;Wn&&"function"===typeof Wn.now&&qn()>document.createEvent("Event").timeStamp&&(qn=function(){return Wn.now()})}var Hn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Vn(){var e,t;for(zn=qn(),Fn=!0,Dn.sort(Hn),Un=0;Un<Dn.length;Un++)e=Dn[Un],e.before&&e.before(),t=e.id,Ln[t]=null,e.run();var n=Mn.slice(),r=Dn.slice();$n(),Kn(n),Bn(r),ke(),he&&B.devtools&&he.emit("flush")}function Bn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&An(r,"updated")}}function Yn(e){e._inactive=!1,Mn.push(e)}function Kn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Pn(e[t],!0)}function Gn(e){var t=e.id;if(null==Ln[t]&&(e!==Ie.target||!e.noRecurse)){if(Ln[t]=!0,Fn){var n=Dn.length-1;while(n>Un&&Dn[n].id>e.id)n--;Dn.splice(n+1,0,e)}else Dn.push(e);jn||(jn=!0,cn(Vn))}}function Jn(e){var t=e.$options.provide;if(t){var n=u(t)?t.call(e):t;if(!h(n))return;for(var r=Qe(e),i=pe?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Qn(e){var t=Xn(e.$options.inject,e);t&&(De(!1),Object.keys(t).forEach((function(n){Fe(e,n,t[n])})),De(!0))}function Xn(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from;if(s in t._provided)n[o]=t._provided[s];else if("default"in e[o]){var a=e[o].default;n[o]=u(a)?a.call(t):a}else 0}}return n}}function Zn(e,t,n,o,s){var c,l=this,u=s.options;k(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(u._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=Xn(u.inject,o),this.slots=function(){return l.$slots||Tt(o,e.scopedSlots,l.$slots=kt(n,o)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Tt(o,e.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Tt(o,e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var s=Ht(c,e,t,n,r,d);return s&&!i(s)&&(s.fnScopeId=u._scopeId,s.fnContext=o),s}:this._c=function(e,t,n,r){return Ht(c,e,t,n,r,d)}}function er(e,t,n,o,a){var c=e.options,l={},u=c.props;if(s(u))for(var h in u)l[h]=Ir(h,u,t||r);else s(n.attrs)&&nr(l,n.attrs),s(n.props)&&nr(l,n.props);var d=new Zn(n,l,a,o,e),f=c.render.call(null,d._c,d);if(f instanceof ge)return tr(f,n,d.parent,c,d);if(i(f)){for(var p=ot(f)||[],m=new Array(p.length),v=0;v<p.length;v++)m[v]=tr(p[v],n,d.parent,c,d);return m}}function tr(e,t,n,r,i){var o=be(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nr(e,t){for(var n in t)e[T(n)]=t[n]}function rr(e){return e.name||e.__name||e._componentTag}Ct(Zn.prototype);var ir={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ir.prepatch(n,n)}else{var r=e.componentInstance=ar(e,In);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;On(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,An(n,"mounted")),e.data.keepAlive&&(t._isMounted?Yn(n):Pn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Rn(t,!0):t.$destroy())}},or=Object.keys(ir);function sr(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var l;if(o(e.cid)&&(l=e,e=$t(l,c),void 0===e))return Ut(l,t,n,r,i);t=t||{},Kr(e),s(t.model)&&ur(e.options,t);var u=nt(t,e,i);if(a(e.options.functional))return er(e,u,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cr(t);var p=rr(e.options)||i,m=new ge("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:u,listeners:d,tag:i,children:r},l);return m}}}function ar(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cr(e){for(var t=e.hook||(e.hook={}),n=0;n<or.length;n++){var r=or[n],i=t[r],o=ir[r];i===o||i&&i._merged||(t[r]=i?lr(o,i):o)}}function lr(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ur(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],c=t.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var hr=L,dr=B.optionMergeStrategies;function fr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,o,s=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=e[r],o=t[r],n&&k(e,r)?i!==o&&f(i)&&f(o)&&fr(i,o):Ue(e,r,o));return e}function pr(e,t,n){return n?function(){var r=u(t)?t.call(n,n):t,i=u(e)?e.call(n,n):e;return r?fr(r,i):i}:t?e?function(){return fr(u(t)?t.call(this,this):t,u(e)?e.call(this,this):e)}:t:e}function mr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?vr(n):n}function vr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function gr(e,t,n,r){var i=Object.create(e||null);return t?D(i,t):i}dr.data=function(e,t,n){return n?pr(e,t,n):t&&"function"!==typeof t?e:pr(e,t)},V.forEach((function(e){dr[e]=mr})),H.forEach((function(e){dr[e+"s"]=gr})),dr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var s in D(o,e),t){var a=o[s],c=t[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},dr.props=dr.methods=dr.inject=dr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return D(i,e),t&&D(i,t),i},dr.provide=function(e,t){return e?function(){var n=Object.create(null);return fr(n,u(e)?e.call(this):e),t&&fr(n,u(t)?t.call(this):t,!1),n}:t};var _r=function(e,t){return void 0===t?e:t};function yr(e,t){var n=e.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=T(o),a[s]={type:null})}else if(f(n))for(var c in n)o=n[c],s=T(c),a[s]=f(o)?o:{type:o};else 0;e.props=a}}function br(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var s in n){var a=n[s];r[s]=f(a)?D({from:s},a):{from:a}}else 0}}function wr(e){var t=e.directives;if(t)for(var n in t){var r=t[n];u(r)&&(t[n]={bind:r,update:r})}}function Cr(e,t,n){if(u(t)&&(t=t.options),yr(t,n),br(t,n),wr(t),!t._base&&(t.extends&&(e=Cr(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Cr(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)k(e,o)||a(o);function a(r){var i=dr[r]||_r;s[r]=i(e[r],t[r],n,r)}return s}function kr(e,t,n,r){if("string"===typeof n){var i=e[t];if(k(i,n))return i[n];var o=T(n);if(k(i,o))return i[o];var s=S(o);if(k(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Ir(e,t,n,r){var i=t[e],o=!k(n,e),s=n[e],a=Or(Boolean,i.type);if(a>-1)if(o&&!k(i,"default"))s=!1;else if(""===s||s===O(e)){var c=Or(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Er(r,i,e);var l=Ae;De(!0),je(s),De(l)}return s}function Er(e,t,n){if(k(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:u(r)&&"Function"!==Sr(t.type)?r.call(e):r}}var Tr=/^\s*function (\w+)/;function Sr(e){var t=e&&e.toString().match(Tr);return t?t[1]:""}function xr(e,t){return Sr(e)===Sr(t)}function Or(e,t){if(!i(t))return xr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(xr(t[n],e))return n;return-1}var Nr={enumerable:!0,configurable:!0,get:L,set:L};function Pr(e,t,n){Nr.get=function(){return this[t][n]},Nr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Nr)}function Rr(e){var t=e.$options;if(t.props&&Ar(e,t.props),Ot(e),t.methods&&zr(e,t.methods),t.data)Dr(e);else{var n=je(e._data={});n&&n.vmCount++}t.computed&&jr(e,t.computed),t.watch&&t.watch!==ae&&qr(e,t.watch)}function Ar(e,t){var n=e.$options.propsData||{},r=e._props=qe({}),i=e.$options._propKeys=[],o=!e.$parent;o||De(!1);var s=function(o){i.push(o);var s=Ir(o,t,n,e);Fe(r,o,s),o in e||Pr(e,"_props",o)};for(var a in t)s(a);De(!0)}function Dr(e){var t=e.$options.data;t=e._data=u(t)?Mr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&k(r,o)||K(o)||Pr(e,"_data",o)}var s=je(t);s&&s.vmCount++}function Mr(e,t){Te();try{return e.call(t,t)}catch(Qs){return Kt(Qs,t,"data()"),{}}finally{Se()}}var Lr={lazy:!0};function jr(e,t){var n=e._computedWatchers=Object.create(null),r=ue();for(var i in t){var o=t[i],s=u(o)?o:o.get;0,r||(n[i]=new gn(e,s||L,L,Lr)),i in e||Fr(e,i,o)}}function Fr(e,t,n){var r=!ue();u(n)?(Nr.get=r?Ur(t):$r(n),Nr.set=L):(Nr.get=n.get?r&&!1!==n.cache?Ur(t):$r(n.get):L,Nr.set=n.set||L),Object.defineProperty(e,t,Nr)}function Ur(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Ie.target&&t.depend(),t.value}}function $r(e){return function(){return e.call(this,this)}}function zr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?L:R(t[n],e)}function qr(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)Wr(e,n,r[o]);else Wr(e,n,r)}}function Wr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Hr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ue,e.prototype.$delete=$e,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return Wr(r,e,t,n);n=n||{},n.user=!0;var i=new gn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Te(),Gt(t,r,[i.value],r,o),Se()}return function(){i.teardown()}}}var Vr=0;function Br(e){e.prototype._init=function(e){var t=this;t._uid=Vr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ge(!0),t._scope._vm=!0,e&&e._isComponent?Yr(t,e):t.$options=Cr(Kr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Tn(t),_n(t),Mt(t),An(t,"beforeCreate",void 0,!1),Qn(t),Rr(t),Jn(t),An(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Yr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Kr(e){var t=e.options;if(e.super){var n=Kr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Gr(e);i&&D(e.extendOptions,i),t=e.options=Cr(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Gr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Jr(e){this._init(e)}function Qr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),u(e.install)?e.install.apply(e,n):u(e)&&e.apply(null,n),t.push(e),this}}function Xr(e){e.mixin=function(e){return this.options=Cr(this.options,e),this}}function Zr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=rr(e)||rr(n.options);var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Cr(n.options,e),s["super"]=n,s.options.props&&ei(s),s.options.computed&&ti(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,H.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=D({},s.options),i[r]=s,s}}function ei(e){var t=e.options.props;for(var n in t)Pr(e.prototype,"_props",n)}function ti(e){var t=e.options.computed;for(var n in t)Fr(e.prototype,n,t[n])}function ni(e){H.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&u(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ri(e){return e&&(rr(e.Ctor.options)||e.tag)}function ii(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function oi(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&si(n,o,r,i)}}}function si(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,w(n,t)}Br(Jr),Hr(Jr),kn(Jr),Sn(Jr),jt(Jr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:ri(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&si(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)si(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){oi(e,(function(e){return ii(t,e)}))})),this.$watch("exclude",(function(t){oi(e,(function(e){return!ii(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=ri(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ii(o,r))||s&&r&&ii(s,r))return t;var a=this,c=a.cache,l=a.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[u]?(t.componentInstance=c[u].componentInstance,w(l,u),l.push(u)):(this.vnodeToCache=t,this.keyToCache=u),t.data.keepAlive=!0}return t||e&&e[0]}},li={KeepAlive:ci};function ui(e){var t={get:function(){return B}};Object.defineProperty(e,"config",t),e.util={warn:hr,extend:D,mergeOptions:Cr,defineReactive:Fe},e.set=Ue,e.delete=$e,e.nextTick=cn,e.observable=function(e){return je(e),e},e.options=Object.create(null),H.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,D(e.options.components,li),Qr(e),Xr(e),Zr(e),ni(e)}ui(Jr),Object.defineProperty(Jr.prototype,"$isServer",{get:ue}),Object.defineProperty(Jr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Jr,"FunctionalRenderContext",{value:Zn}),Jr.version=hn;var hi=y("style,class"),di=y("input,textarea,option,select,progress"),fi=function(e,t,n){return"value"===n&&di(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},pi=y("contenteditable,draggable,spellcheck"),mi=y("events,caret,typing,plaintext-only"),vi=function(e,t){return wi(t)||"false"===t?"false":"contenteditable"===e&&mi(t)?t:"true"},gi=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),_i="http://www.w3.org/1999/xlink",yi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},bi=function(e){return yi(e)?e.slice(6,e.length):""},wi=function(e){return null==e||!1===e};function Ci(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=ki(r.data,t));while(s(n=n.parent))n&&n.data&&(t=ki(t,n.data));return Ii(t.staticClass,t.class)}function ki(e,t){return{staticClass:Ei(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Ii(e,t){return s(e)||s(t)?Ei(e,Ti(t)):""}function Ei(e,t){return e?t?e+" "+t:e:t||""}function Ti(e){return Array.isArray(e)?Si(e):h(e)?xi(e):"string"===typeof e?e:""}function Si(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=Ti(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function xi(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Oi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ni=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Pi=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ri=function(e){return Ni(e)||Pi(e)};function Ai(e){return Pi(e)?"svg":"math"===e?"math":void 0}var Di=Object.create(null);function Mi(e){if(!Z)return!0;if(Ri(e))return!1;if(e=e.toLowerCase(),null!=Di[e])return Di[e];var t=document.createElement(e);return e.indexOf("-")>-1?Di[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Di[e]=/HTMLUnknownElement/.test(t.toString())}var Li=y("text,number,password,search,email,tel,url");function ji(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Fi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Ui(e,t){return document.createElementNS(Oi[e],t)}function $i(e){return document.createTextNode(e)}function zi(e){return document.createComment(e)}function qi(e,t,n){e.insertBefore(t,n)}function Wi(e,t){e.removeChild(t)}function Hi(e,t){e.appendChild(t)}function Vi(e){return e.parentNode}function Bi(e){return e.nextSibling}function Yi(e){return e.tagName}function Ki(e,t){e.textContent=t}function Gi(e,t){e.setAttribute(t,"")}var Ji=Object.freeze({__proto__:null,createElement:Fi,createElementNS:Ui,createTextNode:$i,createComment:zi,insertBefore:qi,removeChild:Wi,appendChild:Hi,parentNode:Vi,nextSibling:Bi,tagName:Yi,setTextContent:Ki,setStyleScope:Gi}),Qi={create:function(e,t){Xi(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Xi(e,!0),Xi(t))},destroy:function(e){Xi(e,!0)}};function Xi(e,t){var n=e.data.ref;if(s(n)){var r=e.context,o=e.componentInstance||e.elm,a=t?null:o,c=t?void 0:o;if(u(n))Gt(n,r,[a],r,"template ref function");else{var l=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Ve(n),f=r.$refs;if(h||d)if(l){var p=h?f[n]:n.value;t?i(p)&&w(p,o):i(p)?p.includes(o)||p.push(o):h?(f[n]=[o],Zi(r,n,f[n])):n.value=[o]}else if(h){if(t&&f[n]!==o)return;f[n]=c,Zi(r,n,a)}else if(d){if(t&&n.value!==o)return;n.value=a}else 0}}}function Zi(e,t,n){var r=e._setupState;r&&k(r,t)&&(Ve(r[t])?r[t].value=n:r[t]=n)}var eo=new ge("",{},[]),to=["create","activate","update","remove","destroy"];function no(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&ro(e,t)||a(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function ro(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||Li(r)&&Li(i)}function io(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function oo(e){var t,n,r={},c=e.modules,u=e.nodeOps;for(t=0;t<to.length;++t)for(r[to[t]]=[],n=0;n<c.length;++n)s(c[n][to[t]])&&r[to[t]].push(c[n][to[t]]);function h(e){return new ge(u.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=u.parentNode(e);s(t)&&u.removeChild(t,e)}function p(e,t,n,r,i,o,c){if(s(e.elm)&&s(o)&&(e=o[c]=be(e)),e.isRootInsert=!i,!m(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),k(e),b(e,h,t),s(l)&&C(e,t),_(n,e.elm,r)):a(e.isComment)?(e.elm=u.createComment(e.text),_(n,e.elm,r)):(e.elm=u.createTextNode(e.text),_(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(s(i)){var o=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return v(e,t),_(n,e.elm,r),a(o)&&g(e,t,n,r),!0}}function v(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(C(e,t),k(e)):(Xi(e),t.push(e))}function g(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,a);t.push(a);break}_(n,e.elm,i)}function _(e,t,n){s(e)&&(s(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else l(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function C(e,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(eo,e),s(t.insert)&&n.push(e))}function k(e){var t;if(s(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}s(t=In)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function I(e,t,n,r,i,o){for(;r<=i;++r)p(n[r],o,e,t,!1,n,r)}function E(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)E(e.children[n])}function T(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(S(r),E(r)):f(r.elm))}}function S(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=d(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&S(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else f(e.elm)}function x(e,t,n,r,i){var a,c,l,h,d=0,f=0,m=t.length-1,v=t[0],g=t[m],_=n.length-1,y=n[0],b=n[_],w=!i;while(d<=m&&f<=_)o(v)?v=t[++d]:o(g)?g=t[--m]:no(v,y)?(N(v,y,r,n,f),v=t[++d],y=n[++f]):no(g,b)?(N(g,b,r,n,_),g=t[--m],b=n[--_]):no(v,b)?(N(v,b,r,n,_),w&&u.insertBefore(e,v.elm,u.nextSibling(g.elm)),v=t[++d],b=n[--_]):no(g,y)?(N(g,y,r,n,f),w&&u.insertBefore(e,g.elm,v.elm),g=t[--m],y=n[++f]):(o(a)&&(a=io(t,d,m)),c=s(y.key)?a[y.key]:O(y,t,d,m),o(c)?p(y,r,e,v.elm,!1,n,f):(l=t[c],no(l,y)?(N(l,y,r,n,f),t[c]=void 0,w&&u.insertBefore(e,l.elm,v.elm)):p(y,r,e,v.elm,!1,n,f)),y=n[++f]);d>m?(h=o(n[_+1])?null:n[_+1].elm,I(e,h,n,f,_,r)):f>_&&T(t,d,m)}function O(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&no(e,o))return i}}function N(e,t,n,i,c,l){if(e!==t){s(t.elm)&&s(i)&&(t=i[c]=be(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?A(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(s(f)&&w(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);s(d=f.hook)&&s(d=d.update)&&d(e,t)}o(t.text)?s(p)&&s(m)?p!==m&&x(h,p,m,n,l):s(m)?(s(e.text)&&u.setTextContent(h,""),I(h,null,m,0,m.length-1,n)):s(p)?T(p,0,p.length-1):s(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(e,t)}}}function P(e,t,n){if(a(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var R=y("attrs,class,staticClass,staticStyle,key");function A(e,t,n,r){var i,o=t.tag,c=t.data,l=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return v(t,n),!0;if(s(o)){if(s(l))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var u=!0,h=e.firstChild,d=0;d<l.length;d++){if(!h||!A(h,l[d],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(t,l,n);if(s(c)){var f=!1;for(var p in c)if(!R(p)){f=!0,C(t,n);break}!f&&c["class"]&&fn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,l=[];if(o(e))c=!0,p(t,l);else{var d=s(e.nodeType);if(!d&&no(e,t))N(e,t,l,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(W)&&(e.removeAttribute(W),n=!0),a(n)&&A(e,t,l))return P(t,l,!0),e;e=h(e)}var f=e.elm,m=u.parentNode(f);if(p(t,l,f._leaveCb?null:m,u.nextSibling(f)),s(t.parent)){var v=t.parent,g=w(t);while(v){for(var _=0;_<r.destroy.length;++_)r.destroy[_](v);if(v.elm=t.elm,g){for(var y=0;y<r.create.length;++y)r.create[y](eo,v);var b=v.data.hook.insert;if(b.merged)for(var C=1;C<b.fns.length;C++)b.fns[C]()}else Xi(v);v=v.parent}}s(m)?T([e],0,0):s(e.tag)&&E(e)}}return P(t,l,c),t.elm}s(e)&&E(e)}}var so={create:ao,update:ao,destroy:function(e){ao(e,eo)}};function ao(e,t){(e.data.directives||t.data.directives)&&co(e,t)}function co(e,t){var n,r,i,o=e===eo,s=t===eo,a=uo(e.data.directives,e.context),c=uo(t.data.directives,t.context),l=[],u=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fo(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(fo(i,"bind",t,e),i.def&&i.def.inserted&&l.push(i));if(l.length){var h=function(){for(var n=0;n<l.length;n++)fo(l[n],"inserted",t,e)};o?tt(t,"insert",h):h()}if(u.length&&tt(t,"postpatch",(function(){for(var n=0;n<u.length;n++)fo(u[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||fo(a[n],"unbind",e,e,s)}var lo=Object.create(null);function uo(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=lo),i[ho(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||kr(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||kr(t.$options,"directives",r.name,!0)}return i}function ho(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function fo(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Qs){Kt(Qs,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var po=[Qi,so];function mo(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,l=t.elm,u=e.data.attrs||{},h=t.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=D({},h)),h)i=h[r],c=u[r],c!==i&&vo(l,r,i,t.data.pre);for(r in(te||re)&&h.value!==u.value&&vo(l,"value",h.value),u)o(h[r])&&(yi(r)?l.removeAttributeNS(_i,bi(r)):pi(r)||l.removeAttribute(r))}}function vo(e,t,n,r){r||e.tagName.indexOf("-")>-1?go(e,t,n):gi(t)?wi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):pi(t)?e.setAttribute(t,vi(t,n)):yi(t)?wi(n)?e.removeAttributeNS(_i,bi(t)):e.setAttributeNS(_i,t,n):go(e,t,n)}function go(e,t,n){if(wi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var _o={create:mo,update:mo};function yo(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ci(t),c=n._transitionClasses;s(c)&&(a=Ei(a,Ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var bo,wo={create:yo,update:yo},Co="__r",ko="__c";function Io(e){if(s(e[Co])){var t=te?"change":"input";e[t]=[].concat(e[Co],e[t]||[]),delete e[Co]}s(e[ko])&&(e.change=[].concat(e[ko],e.change||[]),delete e[ko])}function Eo(e,t,n){var r=bo;return function i(){var o=t.apply(null,arguments);null!==o&&xo(e,i,n,r)}}var To=Zt&&!(se&&Number(se[1])<=53);function So(e,t,n,r){if(To){var i=zn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}bo.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function xo(e,t,n,r){(r||bo).removeEventListener(e,t._wrapper||t,n)}function Oo(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};bo=t.elm||e.elm,Io(n),et(n,r,So,xo,Eo,t.context),bo=void 0}}var No,Po={create:Oo,update:Oo,destroy:function(e){return Oo(e,eo)}};function Ro(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},l=t.data.domProps||{};for(n in(s(l.__ob__)||a(l._v_attr_proxy))&&(l=t.data.domProps=D({},l)),c)n in l||(i[n]="");for(n in l){if(r=l[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var u=o(r)?"":String(r);Ao(i,u)&&(i.value=u)}else if("innerHTML"===n&&Pi(i.tagName)&&o(i.innerHTML)){No=No||document.createElement("div"),No.innerHTML="<svg>".concat(r,"</svg>");var h=No.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Qs){}}}}function Ao(e,t){return!e.composing&&("OPTION"===e.tagName||Do(e,t)||Mo(e,t))}function Do(e,t){var n=!0;try{n=document.activeElement!==e}catch(Qs){}return n&&e.value!==t}function Mo(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return _(n)!==_(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Lo={create:Ro,update:Ro},jo=I((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function Fo(e){var t=Uo(e.style);return e.staticStyle?D(e.staticStyle,t):t}function Uo(e){return Array.isArray(e)?M(e):"string"===typeof e?jo(e):e}function $o(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Fo(i.data))&&D(r,n)}(n=Fo(e.data))&&D(r,n);var o=e;while(o=o.parent)o.data&&(n=Fo(o.data))&&D(r,n);return r}var zo,qo=/^--/,Wo=/\s*!important$/,Ho=function(e,t,n){if(qo.test(t))e.style.setProperty(t,n);else if(Wo.test(n))e.style.setProperty(O(t),n.replace(Wo,""),"important");else{var r=Bo(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Vo=["Webkit","Moz","ms"],Bo=I((function(e){if(zo=zo||document.createElement("div").style,e=T(e),"filter"!==e&&e in zo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Vo.length;n++){var r=Vo[n]+t;if(r in zo)return r}}));function Yo(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=t.elm,l=r.staticStyle,u=r.normalizedStyle||r.style||{},h=l||u,d=Uo(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?D({},d):d;var f=$o(t,!0);for(a in h)o(f[a])&&Ho(c,a,"");for(a in f)i=f[a],i!==h[a]&&Ho(c,a,null==i?"":i)}}var Ko={create:Yo,update:Yo},Go=/\s+/;function Jo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Go).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Qo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Go).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Xo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&D(t,Zo(e.name||"v")),D(t,e),t}return"string"===typeof e?Zo(e):void 0}}var Zo=I((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),es=Z&&!ne,ts="transition",ns="animation",rs="transition",is="transitionend",os="animation",ss="animationend";es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(rs="WebkitTransition",is="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(os="WebkitAnimation",ss="webkitAnimationEnd"));var as=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function cs(e){as((function(){as(e)}))}function ls(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Jo(e,t))}function us(e,t){e._transitionClasses&&w(e._transitionClasses,t),Qo(e,t)}function hs(e,t,n){var r=fs(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===ts?is:ss,c=0,l=function(){e.removeEventListener(a,u),n()},u=function(t){t.target===e&&++c>=s&&l()};setTimeout((function(){c<s&&l()}),o+1),e.addEventListener(a,u)}var ds=/\b(transform|all)(,|$)/;function fs(e,t){var n,r=window.getComputedStyle(e),i=(r[rs+"Delay"]||"").split(", "),o=(r[rs+"Duration"]||"").split(", "),s=ps(i,o),a=(r[os+"Delay"]||"").split(", "),c=(r[os+"Duration"]||"").split(", "),l=ps(a,c),u=0,h=0;t===ts?s>0&&(n=ts,u=s,h=o.length):t===ns?l>0&&(n=ns,u=l,h=c.length):(u=Math.max(s,l),n=u>0?s>l?ts:ns:null,h=n?n===ts?o.length:c.length:0);var d=n===ts&&ds.test(r[rs+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function ps(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ms(t)+ms(e[n])})))}function ms(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function vs(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Xo(e.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,v=r.beforeEnter,g=r.enter,y=r.afterEnter,b=r.enterCancelled,w=r.beforeAppear,C=r.appear,k=r.afterAppear,I=r.appearCancelled,E=r.duration,T=In,S=In.$vnode;while(S&&S.parent)T=S.context,S=S.parent;var x=!T._isMounted||!e.isRootInsert;if(!x||C||""===C){var O=x&&f?f:c,N=x&&m?m:d,P=x&&p?p:l,R=x&&w||v,A=x&&u(C)?C:g,D=x&&k||y,M=x&&I||b,L=_(h(E)?E.enter:E);0;var j=!1!==i&&!ne,F=ys(A),U=n._enterCb=z((function(){j&&(us(n,P),us(n,N)),U.cancelled?(j&&us(n,O),M&&M(n)):D&&D(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),A&&A(n,U)})),R&&R(n),j&&(ls(n,O),ls(n,N),cs((function(){us(n,O),U.cancelled||(ls(n,P),F||(_s(L)?setTimeout(U,L):hs(n,a,U)))}))),e.data.show&&(t&&t(),A&&A(n,U)),j||F||U()}}}function gs(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Xo(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,u=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,g=r.duration,y=!1!==i&&!ne,b=ys(f),w=_(h(g)?g.leave:g);0;var C=n._leaveCb=z((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(us(n,l),us(n,u)),C.cancelled?(y&&us(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(k):k()}function k(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(ls(n,c),ls(n,u),cs((function(){us(n,c),C.cancelled||(ls(n,l),b||(_s(w)?setTimeout(C,w):hs(n,a,C)))}))),f&&f(n,C),y||b||C())}}function _s(e){return"number"===typeof e&&!isNaN(e)}function ys(e){if(o(e))return!1;var t=e.fns;return s(t)?ys(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function bs(e,t){!0!==t.data.show&&vs(t)}var ws=Z?{create:bs,activate:bs,remove:function(e,t){!0!==e.data.show?gs(e,t):t()}}:{},Cs=[_o,wo,Po,Lo,Ko,ws],ks=Cs.concat(po),Is=oo({nodeOps:Ji,modules:ks});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Rs(e,"input")}));var Es={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?tt(n,"postpatch",(function(){Es.componentUpdated(e,t,n)})):Ts(e,t,n.context),e._vOptions=[].map.call(e.options,Os)):("textarea"===n.tag||Li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Ns),e.addEventListener("compositionend",Ps),e.addEventListener("change",Ps),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ts(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Os);if(i.some((function(e,t){return!U(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return xs(e,i)})):t.value!==t.oldValue&&xs(t.value,i);o&&Rs(e,"change")}}}};function Ts(e,t,n){Ss(e,t,n),(te||re)&&setTimeout((function(){Ss(e,t,n)}),0)}function Ss(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=$(r,Os(s))>-1,s.selected!==o&&(s.selected=o);else if(U(Os(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function xs(e,t){return t.every((function(t){return!U(t,e)}))}function Os(e){return"_value"in e?e._value:e.value}function Ns(e){e.target.composing=!0}function Ps(e){e.target.composing&&(e.target.composing=!1,Rs(e.target,"input"))}function Rs(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function As(e){return!e.componentInstance||e.data&&e.data.transition?e:As(e.componentInstance._vnode)}var Ds={bind:function(e,t,n){var r=t.value;n=As(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,vs(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=As(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?vs(n,(function(){e.style.display=e.__vOriginalDisplay})):gs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ms={model:Es,show:Ds},Ls={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function js(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?js(zt(t.children)):e}function Fs(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[T(r)]=i[r];return t}function Us(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function $s(e){while(e=e.parent)if(e.data.transition)return!0}function zs(e,t){return t.key===e.key&&t.tag===e.tag}var qs=function(e){return e.tag||Et(e)},Ws=function(e){return"show"===e.name},Hs={name:"transition",props:Ls,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(qs),n.length)){0;var r=this.mode;0;var i=n[0];if($s(this.$vnode))return i;var o=js(i);if(!o)return i;if(this._leaving)return Us(e,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:l(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Fs(this),c=this._vnode,u=js(c);if(o.data.directives&&o.data.directives.some(Ws)&&(o.data.show=!0),u&&u.data&&!zs(o,u)&&!Et(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=D({},a);if("out-in"===r)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Us(e,i);if("in-out"===r){if(Et(o))return c;var d,f=function(){d()};tt(a,"afterEnter",f),tt(a,"enterCancelled",f),tt(h,"delayLeave",(function(e){d=e}))}}return i}}},Vs=D({tag:String,moveClass:String},Ls);delete Vs.mode;var Bs={props:Vs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=En(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Fs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var l=[],u=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?l.push(c):u.push(c)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Ys),e.forEach(Ks),e.forEach(Gs),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;ls(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(is,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(is,e),n._moveCb=null,us(n,t))})}})))},methods:{hasMove:function(e,t){if(!es)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Qo(n,e)})),Jo(n,t),n.style.display="none",this.$el.appendChild(n);var r=fs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Ys(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ks(e){e.data.newPos=e.elm.getBoundingClientRect()}function Gs(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Js={Transition:Hs,TransitionGroup:Bs};Jr.config.mustUseProp=fi,Jr.config.isReservedTag=Ri,Jr.config.isReservedAttr=hi,Jr.config.getTagNamespace=Ai,Jr.config.isUnknownElement=Mi,D(Jr.options.directives,Ms),D(Jr.options.components,Js),Jr.prototype.__patch__=Z?Is:L,Jr.prototype.$mount=function(e,t){return e=e&&Z?ji(e):void 0,xn(this,e,t)},Z&&setTimeout((function(){B.devtools&&he&&he.emit("init",Jr)}),0)},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return ue},Mq:function(){return ge},ZF:function(){return ve},KN:function(){return _e}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(C(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let _={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){_=e(_)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(k(this),t),C(h.get(this))}:function(...t){return C(e.apply(k(this),t))}:function(t,...n){const r=e.call(k(this),t,...n);return f.set(r,t.sort?t.sort():[t]),C(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),s(e,l())?new Proxy(e,_):e)}function C(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const k=e=>m.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=C(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(C(s.result),e.oldVersion,e.newVersion,C(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],S=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return S.set(t,o),o}y((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",R="0.8.4",A=new i.Yd("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",j="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",$="@firebase/auth-compat",z="@firebase/database",q="@firebase/database-compat",W="@firebase/functions",H="@firebase/functions-compat",V="@firebase/installations",B="@firebase/installations-compat",Y="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.14.0",oe="[DEFAULT]",se={[P]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[F]:"fire-app-check",[j]:"fire-app-check-compat",[U]:"fire-auth",[$]:"fire-auth-compat",[z]:"fire-rtdb",[q]:"fire-rtdb-compat",[W]:"fire-fn",[H]:"fire-fn-compat",[V]:"fire-iid",[B]:"fire-iid-compat",[Y]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw fe.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw fe.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const l=new pe(n,i,c);return ae.set(s,l),l}function ge(e=oe){const t=ae.get(e);if(!t&&e===oe)return ve();if(!t)throw fe.create("no-app",{appName:e});return t}function _e(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}ue(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ce=null;function ke(){return Ce||(Ce=I(ye,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Ie(e){var t;try{const t=await ke();return t.transaction(we).objectStore(we).get(Te(e))}catch(n){if(n instanceof o.ZR)A.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});A.warn(e.message)}}}async function Ee(e,t){var n;try{const n=await ke(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Te(e)),r.done}catch(r){if(r instanceof o.ZR)A.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});A.warn(e.message)}}}function Te(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,xe=2592e6;class Oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Se){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ae(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ae(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ae(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){ue(new r.wA("platform-logger",(e=>new O(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new Oe(e)),"PRIVATE")),_e(P,R,e),_e(P,R,"esm2017"),_e("fire-js","")}De("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},3494:function(e,t,n){"use strict";n.d(t,{Qc:function(){return hr},fL:function(){return fr},qv:function(){return dr},vI:function(){return ur},vc:function(){return lr}});n(7658);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return f(e)||m(e,t)||v(e,t)||y()}function h(e){return d(e)||p(e)||v(e)||_()}function d(e){if(Array.isArray(e))return g(e)}function f(e){if(Array.isArray(e))return e}function p(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}function v(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var b=function(){},w={},C={},k=null,I={mark:b,measure:b};try{"undefined"!==typeof window&&(w=window),"undefined"!==typeof document&&(C=document),"undefined"!==typeof MutationObserver&&(k=MutationObserver),"undefined"!==typeof performance&&(I=performance)}catch(pr){}var E,T,S,x,O,N=w.navigator||{},P=N.userAgent,R=void 0===P?"":P,A=w,D=C,M=k,L=I,j=(A.document,!!D.documentElement&&!!D.head&&"function"===typeof D.addEventListener&&"function"===typeof D.createElement),F=~R.indexOf("MSIE")||~R.indexOf("Trident/"),U="___FONT_AWESOME___",$=16,z="fa",q="svg-inline--fa",W="data-fa-i2svg",H="data-fa-pseudo-element",V="data-fa-pseudo-element-pending",B="data-prefix",Y="data-icon",K="fontawesome-i2svg",G="async",J=["HTML","HEAD","STYLE","SCRIPT"],Q=function(){try{return!0}catch(pr){return!1}}(),X="classic",Z="sharp",ee=[X,Z];function te(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[X]}})}var ne=te((E={},l(E,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),l(E,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),E)),re=te((T={},l(T,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),l(T,Z,{solid:"fass"}),T)),ie=te((S={},l(S,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),l(S,Z,{fass:"fa-solid"}),S)),oe=te((x={},l(x,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),l(x,Z,{"fa-solid":"fass"}),x)),se=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ae="fa-layers-text",ce=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,le=te((O={},l(O,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),l(O,Z,{900:"fass"}),O)),ue=[1,2,3,4,5,6,7,8,9,10],he=ue.concat([11,12,13,14,15,16,17,18,19,20]),de=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pe=new Set;Object.keys(re[X]).map(pe.add.bind(pe)),Object.keys(re[Z]).map(pe.add.bind(pe));var me=[].concat(ee,h(pe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(ue.map((function(e){return"".concat(e,"x")}))).concat(he.map((function(e){return"w-".concat(e)}))),ve=A.FontAwesomeConfig||{};function ge(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function _e(e){return""===e||"false"!==e&&("true"===e||e)}if(D&&"function"===typeof D.querySelector){var ye=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ye.forEach((function(e){var t=u(e,2),n=t[0],r=t[1],i=_e(ge(n));void 0!==i&&null!==i&&(ve[r]=i)}))}var be={styleDefault:"solid",familyDefault:"classic",cssPrefix:z,replacementClass:q,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ve.familyPrefix&&(ve.cssPrefix=ve.familyPrefix);var we=i(i({},be),ve);we.autoReplaceSvg||(we.observeMutations=!1);var Ce={};Object.keys(be).forEach((function(e){Object.defineProperty(Ce,e,{enumerable:!0,set:function(t){we[e]=t,ke.forEach((function(e){return e(Ce)}))},get:function(){return we[e]}})})),Object.defineProperty(Ce,"familyPrefix",{enumerable:!0,set:function(e){we.cssPrefix=e,ke.forEach((function(e){return e(Ce)}))},get:function(){return we.cssPrefix}}),A.FontAwesomeConfig=Ce;var ke=[];function Ie(e){return ke.push(e),function(){ke.splice(ke.indexOf(e),1)}}var Ee=$,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Se(e){if(e&&j){var t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=D.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return D.head.insertBefore(t,r),e}}var xe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oe(){var e=12,t="";while(e-- >0)t+=xe[62*Math.random()|0];return t}function Ne(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pe(e){return e.classList?Ne(e.classList):(e.getAttribute("class")||"").split(" ").filter((function(e){return e}))}function Re(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ae(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(Re(e[n]),'" ')}),"").trim()}function De(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")}),"")}function Me(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function Le(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function je(e){var t=e.transform,n=e.width,r=void 0===n?$:n,i=e.height,o=void 0===i?$:i,s=e.startCentered,a=void 0!==s&&s,c="";return c+=a&&F?"translate(".concat(t.x/Ee-r/2,"em, ").concat(t.y/Ee-o/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/Ee,"em), calc(-50% + ").concat(t.y/Ee,"em)) "):"translate(".concat(t.x/Ee,"em, ").concat(t.y/Ee,"em) "),c+="scale(".concat(t.size/Ee*(t.flipX?-1:1),", ").concat(t.size/Ee*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Fe=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function Ue(){var e=z,t=q,n=Ce.cssPrefix,r=Ce.replacementClass,i=Fe;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var $e=!1;function ze(){Ce.autoAddCss&&!$e&&(Se(Ue()),$e=!0)}var qe={mixout:function(){return{dom:{css:Ue,insertCss:ze}}},hooks:function(){return{beforeDOMElementCreation:function(){ze()},beforeI2svg:function(){ze()}}}},We=A||{};We[U]||(We[U]={}),We[U].styles||(We[U].styles={}),We[U].hooks||(We[U].hooks={}),We[U].shims||(We[U].shims=[]);var He=We[U],Ve=[],Be=function e(){D.removeEventListener("DOMContentLoaded",e),Ye=1,Ve.map((function(e){return e()}))},Ye=!1;function Ke(e){j&&(Ye?setTimeout(e,0):Ve.push(e))}function Ge(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,o=void 0===i?[]:i;return"string"===typeof e?Re(e):"<".concat(t," ").concat(Ae(r),">").concat(o.map(Ge).join(""),"</").concat(t,">")}function Je(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}j&&(Ye=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Ye||D.addEventListener("DOMContentLoaded",Be));var Qe=function(e,t){return function(n,r,i,o){return e.call(t,n,r,i,o)}},Xe=function(e,t,n,r){var i,o,s,a=Object.keys(e),c=a.length,l=void 0!==r?Qe(t,r):t;for(void 0===n?(i=1,s=e[a[0]]):(i=0,s=n);i<c;i++)o=a[i],s=l(s,e[o],o,e);return s};function Ze(e){var t=[],n=0,r=e.length;while(n<r){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&i)<<10)+(1023&o)+65536):(t.push(i),n--)}else t.push(i)}return t}function et(e){var t=Ze(e);return 1===t.length?t[0].toString(16):null}function tt(e,t){var n,r=e.length,i=e.charCodeAt(t);return i>=55296&&i<=56319&&r>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?1024*(i-55296)+n-56320+65536:i}function nt(e){return Object.keys(e).reduce((function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t}),{})}function rt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,s=nt(t);"function"!==typeof He.hooks.addPack||o?He.styles[e]=i(i({},He.styles[e]||{}),s):He.hooks.addPack(e,nt(t)),"fas"===e&&rt("fa",t)}var it,ot,st,at=He.styles,ct=He.shims,lt=(it={},l(it,X,Object.values(ie[X])),l(it,Z,Object.values(ie[Z])),it),ut=null,ht={},dt={},ft={},pt={},mt={},vt=(ot={},l(ot,X,Object.keys(ne[X])),l(ot,Z,Object.keys(ne[Z])),ot);function gt(e){return~me.indexOf(e)}function _t(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r!==e||""===i||gt(i)?null:i}var yt=function(){var e=function(e){return Xe(at,(function(t,n,r){return t[r]=Xe(n,e,{}),t}),{})};ht=e((function(e,t,n){if(t[3]&&(e[t[3]]=n),t[2]){var r=t[2].filter((function(e){return"number"===typeof e}));r.forEach((function(t){e[t.toString(16)]=n}))}return e})),dt=e((function(e,t,n){if(e[n]=n,t[2]){var r=t[2].filter((function(e){return"string"===typeof e}));r.forEach((function(t){e[t]=n}))}return e})),mt=e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in at||Ce.autoFetchSvg,n=Xe(ct,(function(e,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||t||(i="fas"),"string"===typeof r&&(e.names[r]={prefix:i,iconName:o}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:i,iconName:o}),e}),{names:{},unicodes:{}});ft=n.names,pt=n.unicodes,ut=St(Ce.styleDefault,{family:Ce.familyDefault})};function bt(e,t){return(ht[e]||{})[t]}function wt(e,t){return(dt[e]||{})[t]}function Ct(e,t){return(mt[e]||{})[t]}function kt(e){return ft[e]||{prefix:null,iconName:null}}function It(e){var t=pt[e],n=bt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Et(){return ut}Ie((function(e){ut=St(e.styleDefault,{family:Ce.familyDefault})})),yt();var Tt=function(){return{prefix:null,iconName:null,rest:[]}};function St(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.family,r=void 0===n?X:n,i=ne[r][e],o=re[r][e]||re[r][i],s=e in He.styles?e:null;return o||s||null}var xt=(st={},l(st,X,Object.keys(ie[X])),l(st,Z,Object.keys(ie[Z])),st);function Ot(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.skipLookups,i=void 0!==r&&r,o=(t={},l(t,X,"".concat(Ce.cssPrefix,"-").concat(X)),l(t,Z,"".concat(Ce.cssPrefix,"-").concat(Z)),t),s=null,a=X;(e.includes(o[X])||e.some((function(e){return xt[X].includes(e)})))&&(a=X),(e.includes(o[Z])||e.some((function(e){return xt[Z].includes(e)})))&&(a=Z);var c=e.reduce((function(e,t){var n=_t(Ce.cssPrefix,t);if(at[t]?(t=lt[a].includes(t)?oe[a][t]:t,s=t,e.prefix=t):vt[a].indexOf(t)>-1?(s=t,e.prefix=St(t,{family:a})):n?e.iconName=n:t!==Ce.replacementClass&&t!==o[X]&&t!==o[Z]&&e.rest.push(t),!i&&e.prefix&&e.iconName){var r="fa"===s?kt(e.iconName):{},c=Ct(e.prefix,e.iconName);r.prefix&&(s=null),e.iconName=r.iconName||c||e.iconName,e.prefix=r.prefix||e.prefix,"far"!==e.prefix||at["far"]||!at["fas"]||Ce.autoFetchSvg||(e.prefix="fas")}return e}),Tt());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),c.prefix||a!==Z||!at["fass"]&&!Ce.autoFetchSvg||(c.prefix="fass",c.iconName=Ct(c.prefix,c.iconName)||c.iconName),"fa"!==c.prefix&&"fa"!==s||(c.prefix=Et()||"fas"),c}var Nt=function(){function e(){s(this,e),this.definitions={}}return c(e,[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=i(i({},e.definitions[t]||{}),o[t]),rt(t,o[t]);var n=ie[X][t];n&&rt(n,o[t]),yt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,o=r.iconName,s=r.icon,a=s[2];e[i]||(e[i]={}),a.length>0&&a.forEach((function(t){"string"===typeof t&&(e[i][t]=s)})),e[i][o]=s})),e}}]),e}(),Pt=[],Rt={},At={},Dt=Object.keys(At);function Mt(e,t){var n=t.mixoutsTo;return Pt=e,Rt={},Object.keys(At).forEach((function(e){-1===Dt.indexOf(e)&&delete At[e]})),Pt.forEach((function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((function(e){"function"===typeof t[e]&&(n[e]=t[e]),"object"===o(t[e])&&Object.keys(t[e]).forEach((function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){var r=e.hooks();Object.keys(r).forEach((function(e){Rt[e]||(Rt[e]=[]),Rt[e].push(r[e])}))}e.provides&&e.provides(At)})),n}function Lt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Rt[e]||[];return o.forEach((function(e){t=e.apply(null,[t].concat(r))})),t}function jt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Rt[e]||[];i.forEach((function(e){e.apply(null,n)}))}function Ft(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function Ut(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Et();if(t)return t=Ct(n,t)||t,Je($t.definitions,n,t)||Je(He.styles,n,t)}var $t=new Nt,zt=function(){Ce.autoReplaceSvg=!1,Ce.observeMutations=!1,jt("noAuto")},qt={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j?(jt("beforeI2svg",e),Ft("pseudoElements2svg",e),Ft("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot;!1===Ce.autoReplaceSvg&&(Ce.autoReplaceSvg=!0),Ce.observeMutations=!0,Ke((function(){Vt({autoReplaceSvgRoot:t}),jt("watch",e)}))}},Wt={icon:function(e){if(null===e)return null;if("object"===o(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ct(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=St(e[0]);return{prefix:n,iconName:Ct(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(Ce.cssPrefix,"-"))>-1||e.match(se))){var r=Ot(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Et(),iconName:Ct(r.prefix,r.iconName)||r.iconName}}if("string"===typeof e){var i=Et();return{prefix:i,iconName:Ct(i,e)||e}}}},Ht={noAuto:zt,config:Ce,dom:qt,parse:Wt,library:$t,findIconDefinition:Ut,toHtml:Ge},Vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot,n=void 0===t?D:t;(Object.keys(He.styles).length>0||Ce.autoFetchSvg)&&j&&Ce.autoReplaceSvg&&Ht.dom.i2svg({node:n})};function Bt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Ge(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(j){var t=D.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Yt(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,s=e.styles,a=e.transform;if(Me(a)&&n.found&&!r.found){var c=n.width,l=n.height,u={x:c/l/2,y:.5};o["style"]=De(i(i({},s),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Kt(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,s=e.symbol,a=!0===s?"".concat(t,"-").concat(Ce.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},o),{},{id:a}),children:r}]}]}function Gt(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,s=e.iconName,a=e.transform,c=e.symbol,l=e.title,u=e.maskId,h=e.titleId,d=e.extra,f=e.watchable,p=void 0!==f&&f,m=r.found?r:n,v=m.width,g=m.height,_="fak"===o,y=[Ce.replacementClass,s?"".concat(Ce.cssPrefix,"-").concat(s):""].filter((function(e){return-1===d.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(d.classes).join(" "),b={children:[],attributes:i(i({},d.attributes),{},{"data-prefix":o,"data-icon":s,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(g)})},w=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/g*16*.0625,"em")}:{};p&&(b.attributes[W]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(h||Oe())},children:[l]}),delete b.attributes.title);var C=i(i({},b),{},{prefix:o,iconName:s,main:n,mask:r,maskId:u,transform:a,symbol:c,styles:i(i({},w),d.styles)}),k=r.found&&n.found?Ft("generateAbstractMask",C)||{children:[],attributes:{}}:Ft("generateAbstractIcon",C)||{children:[],attributes:{}},I=k.children,E=k.attributes;return C.children=I,C.attributes=E,c?Kt(C):Yt(C)}function Jt(e){var t=e.content,n=e.width,r=e.height,o=e.transform,s=e.title,a=e.extra,c=e.watchable,l=void 0!==c&&c,u=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(u[W]="");var h=i({},a.styles);Me(o)&&(h["transform"]=je({transform:o,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h["transform"]);var d=De(h);d.length>0&&(u["style"]=d);var f=[];return f.push({tag:"span",attributes:u,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function Qt(e){var t=e.content,n=e.title,r=e.extra,o=i(i(i({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=De(r.styles);s.length>0&&(o["style"]=s);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Xt=He.styles;function Zt(e){var t=e[0],n=e[1],r=e.slice(4),i=u(r,1),o=i[0],s=null;return s=Array.isArray(o)?{tag:"g",attributes:{class:"".concat(Ce.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ce.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Ce.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var en={found:!1,width:512,height:512};function tn(e,t){Q||Ce.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nn(e,t){var n=t;return"fa"===t&&null!==Ce.styleDefault&&(t=Et()),new Promise((function(r,o){Ft("missingIconAbstract");if("fa"===n){var s=kt(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Xt[t]&&Xt[t][e]){var a=Xt[t][e];return r(Zt(a))}tn(e,t),r(i(i({},en),{},{icon:Ce.showMissingIcons&&e&&Ft("missingIconAbstract")||{}}))}))}var rn=function(){},on=Ce.measurePerformance&&L&&L.mark&&L.measure?L:{mark:rn,measure:rn},sn='FA "6.2.1"',an=function(e){return on.mark("".concat(sn," ").concat(e," begins")),function(){return cn(e)}},cn=function(e){on.mark("".concat(sn," ").concat(e," ends")),on.measure("".concat(sn," ").concat(e),"".concat(sn," ").concat(e," begins"),"".concat(sn," ").concat(e," ends"))},ln={begin:an,end:cn},un=function(){};function hn(e){var t=e.getAttribute?e.getAttribute(W):null;return"string"===typeof t}function dn(e){var t=e.getAttribute?e.getAttribute(B):null,n=e.getAttribute?e.getAttribute(Y):null;return t&&n}function fn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Ce.replacementClass)}function pn(){if(!0===Ce.autoReplaceSvg)return yn.replace;var e=yn[Ce.autoReplaceSvg];return e||yn.replace}function mn(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function vn(e){return D.createElement(e)}function gn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ceFn,r=void 0===n?"svg"===e.tag?mn:vn:n;if("string"===typeof e)return D.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach((function(t){i.setAttribute(t,e.attributes[t])}));var o=e.children||[];return o.forEach((function(e){i.appendChild(gn(e,{ceFn:r}))})),i}function _n(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yn={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach((function(e){t.parentNode.insertBefore(gn(e),t)})),null===t.getAttribute(W)&&Ce.keepOriginalSource){var n=D.createComment(_n(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Pe(t).indexOf(Ce.replacementClass))return yn.replace(e);var r=new RegExp("".concat(Ce.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(e,t){return t===Ce.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(e){return Ge(e)})).join("\n");t.setAttribute(W,""),t.innerHTML=o}};function bn(e){e()}function wn(e,t){var n="function"===typeof t?t:un;if(0===e.length)n();else{var r=bn;Ce.mutateApproach===G&&(r=A.requestAnimationFrame||bn),r((function(){var t=pn(),r=ln.begin("mutate");e.map(t),r(),n()}))}}var Cn=!1;function kn(){Cn=!0}function In(){Cn=!1}var En=null;function Tn(e){if(M&&Ce.observeMutations){var t=e.treeCallback,n=void 0===t?un:t,r=e.nodeCallback,i=void 0===r?un:r,o=e.pseudoElementsCallback,s=void 0===o?un:o,a=e.observeMutationsRoot,c=void 0===a?D:a;En=new M((function(e){if(!Cn){var t=Et();Ne(e).forEach((function(e){if("childList"===e.type&&e.addedNodes.length>0&&!hn(e.addedNodes[0])&&(Ce.searchPseudoElements&&s(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&Ce.searchPseudoElements&&s(e.target.parentNode),"attributes"===e.type&&hn(e.target)&&~de.indexOf(e.attributeName))if("class"===e.attributeName&&dn(e.target)){var r=Ot(Pe(e.target)),o=r.prefix,a=r.iconName;e.target.setAttribute(B,o||t),a&&e.target.setAttribute(Y,a)}else fn(e.target)&&i(e.target)}))}})),j&&En.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sn(){En&&En.disconnect()}function xn(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((function(e,t){var n=t.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(":").trim()),e}),{})),n}function On(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"",i=Ot(Pe(e));return i.prefix||(i.prefix=Et()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=wt(i.prefix,e.innerText)||bt(i.prefix,et(e.innerText))),!i.iconName&&Ce.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Nn(e){var t=Ne(e.attributes).reduce((function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e}),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Ce.autoA11y&&(n?t["aria-labelledby"]="".concat(Ce.replacementClass,"-title-").concat(r||Oe()):(t["aria-hidden"]="true",t["focusable"]="false")),t}function Pn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=On(e),r=n.iconName,o=n.prefix,s=n.rest,a=Nn(e),c=Lt("parseNodeAttributes",{},e),l=t.styleParser?xn(e):[];return i({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},c)}var An=He.styles;function Dn(e){var t="nest"===Ce.autoReplaceSvg?Rn(e,{styleParser:!1}):Rn(e);return~t.extra.classes.indexOf(ae)?Ft("generateLayersText",e,t):Ft("generateSvgReplacementMutation",e,t)}var Mn=new Set;function Ln(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!j)return Promise.resolve();var n=D.documentElement.classList,r=function(e){return n.add("".concat(K,"-").concat(e))},i=function(e){return n.remove("".concat(K,"-").concat(e))},o=Ce.autoFetchSvg?Mn:ee.map((function(e){return"fa-".concat(e)})).concat(Object.keys(An));o.includes("fa")||o.push("fa");var s=[".".concat(ae,":not([").concat(W,"])")].concat(o.map((function(e){return".".concat(e,":not([").concat(W,"])")}))).join(", ");if(0===s.length)return Promise.resolve();var a=[];try{a=Ne(e.querySelectorAll(s))}catch(pr){}if(!(a.length>0))return Promise.resolve();r("pending"),i("complete");var c=ln.begin("onTree"),l=a.reduce((function(e,t){try{var n=Dn(t);n&&e.push(n)}catch(pr){Q||"MissingIcon"===pr.name&&console.error(pr)}return e}),[]);return new Promise((function(e,n){Promise.all(l).then((function(n){wn(n,(function(){r("active"),r("complete"),i("pending"),"function"===typeof t&&t(),c(),e()}))})).catch((function(e){c(),n(e)}))}))}function jn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Dn(e).then((function(e){e&&wn([e],t)}))}function Fn(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t||{}).icon?t:Ut(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Ut(o||{})),e(r,i(i({},n),{},{mask:o}))}}ee.map((function(e){Mn.add("fa-".concat(e))})),Object.keys(ne[X]).map(Mn.add.bind(Mn)),Object.keys(ne[Z]).map(Mn.add.bind(Mn)),Mn=h(Mn);var Un=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Te:n,o=t.symbol,s=void 0!==o&&o,a=t.mask,c=void 0===a?null:a,l=t.maskId,u=void 0===l?null:l,h=t.title,d=void 0===h?null:h,f=t.titleId,p=void 0===f?null:f,m=t.classes,v=void 0===m?[]:m,g=t.attributes,_=void 0===g?{}:g,y=t.styles,b=void 0===y?{}:y;if(e){var w=e.prefix,C=e.iconName,k=e.icon;return Bt(i({type:"icon"},e),(function(){return jt("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ce.autoA11y&&(d?_["aria-labelledby"]="".concat(Ce.replacementClass,"-title-").concat(p||Oe()):(_["aria-hidden"]="true",_["focusable"]="false")),Gt({icons:{main:Zt(k),mask:c?Zt(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:C,transform:i(i({},Te),r),symbol:s,title:d,maskId:u,titleId:p,extra:{attributes:_,styles:b,classes:v}})}))}},$n={mixout:function(){return{icon:Fn(Un)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Ln,e.nodeCallback=jn,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?D:t,r=e.callback,i=void 0===r?function(){}:r;return Ln(n,i)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.title,i=t.titleId,o=t.prefix,s=t.transform,a=t.symbol,c=t.mask,l=t.maskId,h=t.extra;return new Promise((function(t,d){Promise.all([nn(n,o),c.iconName?nn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(c){var d=u(c,2),f=d[0],p=d[1];t([e,Gt({icons:{main:f,mask:p},prefix:o,iconName:n,transform:s,symbol:a,maskId:l,title:r,titleId:i,extra:h,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){var t,n=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,a=De(s);return a.length>0&&(r["style"]=a),Me(o)&&(t=Ft("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(t||i.icon),{children:n,attributes:r}}}},zn={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,r=void 0===n?[]:n;return Bt({type:"layer"},(function(){jt("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e((function(e){Array.isArray(e)?e.map((function(e){n=n.concat(e.abstract)})):n=n.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(Ce.cssPrefix,"-layers")].concat(h(r)).join(" ")},children:n}]}))}}}},qn={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,r=void 0===n?null:n,i=t.classes,o=void 0===i?[]:i,s=t.attributes,a=void 0===s?{}:s,c=t.styles,l=void 0===c?{}:c;return Bt({type:"counter",content:e},(function(){return jt("beforeDOMElementCreation",{content:e,params:t}),Qt({content:e.toString(),title:r,extra:{attributes:a,styles:l,classes:["".concat(Ce.cssPrefix,"-layers-counter")].concat(h(o))}})}))}}}},Wn={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Te:n,o=t.title,s=void 0===o?null:o,a=t.classes,c=void 0===a?[]:a,l=t.attributes,u=void 0===l?{}:l,d=t.styles,f=void 0===d?{}:d;return Bt({type:"text",content:e},(function(){return jt("beforeDOMElementCreation",{content:e,params:t}),Jt({content:e,transform:i(i({},Te),r),title:s,extra:{attributes:u,styles:f,classes:["".concat(Ce.cssPrefix,"-layers-text")].concat(h(c))}})}))}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.title,r=t.transform,i=t.extra,o=null,s=null;if(F){var a=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/a,s=c.height/a}return Ce.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Jt({content:e.innerHTML,width:o,height:s,transform:r,title:n,extra:i,watchable:!0})])}}},Hn=new RegExp('"',"ug"),Vn=[1105920,1112319];function Bn(e){var t=e.replace(Hn,""),n=tt(t,0),r=n>=Vn[0]&&n<=Vn[1],i=2===t.length&&t[0]===t[1];return{value:et(i?t[0]:t),isSecondary:r||i}}function Yn(e,t){var n="".concat(V).concat(t.replace(":","-"));return new Promise((function(r,o){if(null!==e.getAttribute(n))return r();var s=Ne(e.children),a=s.filter((function(e){return e.getAttribute(H)===t}))[0],c=A.getComputedStyle(e,t),l=c.getPropertyValue("font-family").match(ce),u=c.getPropertyValue("font-weight"),h=c.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&"none"!==h&&""!==h){var d=c.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Z:X,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?re[f][l[2].toLowerCase()]:le[f][u],m=Bn(d),v=m.value,g=m.isSecondary,_=l[0].startsWith("FontAwesome"),y=bt(p,v),b=y;if(_){var w=It(v);w.iconName&&w.prefix&&(y=w.iconName,p=w.prefix)}if(!y||g||a&&a.getAttribute(B)===p&&a.getAttribute(Y)===b)r();else{e.setAttribute(n,b),a&&e.removeChild(a);var C=Pn(),k=C.extra;k.attributes[H]=t,nn(y,p).then((function(o){var s=Gt(i(i({},C),{},{icons:{main:o,mask:Tt()},prefix:p,iconName:b,extra:k,watchable:!0})),a=D.createElement("svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=s.map((function(e){return Ge(e)})).join("\n"),e.removeAttribute(n),r()})).catch(o)}}else r()}))}function Kn(e){return Promise.all([Yn(e,"::before"),Yn(e,"::after")])}function Gn(e){return e.parentNode!==document.head&&!~J.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(H)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function Jn(e){if(j)return new Promise((function(t,n){var r=Ne(e.querySelectorAll("*")).filter(Gn).map(Kn),i=ln.begin("searchPseudoElements");kn(),Promise.all(r).then((function(){i(),In(),t()})).catch((function(){i(),In(),n()}))}))}var Qn={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Jn,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?D:t;Ce.searchPseudoElements&&Jn(n)}}},Xn=!1,Zn={mixout:function(){return{dom:{unwatch:function(){kn(),Xn=!0}}}},hooks:function(){return{bootstrap:function(){Tn(Lt("mutationObserverCallbacks",{}))},noAuto:function(){Sn()},watch:function(e){var t=e.observeMutationsRoot;Xn?In():Tn(Lt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},er=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i;break}return e}),t)},tr={mixout:function(){return{parse:{transform:function(e){return er(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=er(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(a," ").concat(c," ").concat(l)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:u,path:h};return{tag:"g",attributes:i({},d.outer),children:[{tag:"g",attributes:i({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:i(i({},t.icon.attributes),d.path)}]}]}}}},nr={x:0,y:0,width:"100%",height:"100%"};function rr(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ir(e){return"g"===e.tag?e.children:[e]}var or={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?Ot(n.split(" ").map((function(e){return e.trim()}))):Tt();return r.prefix||(r.prefix=Et()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,o=e.mask,s=e.maskId,a=e.transform,c=r.width,l=r.icon,u=o.width,h=o.icon,d=Le({transform:a,containerWidth:u,iconWidth:c}),f={tag:"rect",attributes:i(i({},nr),{},{fill:"white"})},p=l.children?{children:l.children.map(rr)}:{},m={tag:"g",attributes:i({},d.inner),children:[rr(i({tag:l.tag,attributes:i(i({},l.attributes),d.path)},p))]},v={tag:"g",attributes:i({},d.outer),children:[m]},g="mask-".concat(s||Oe()),_="clip-".concat(s||Oe()),y={tag:"mask",attributes:i(i({},nr),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,v]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:ir(h)},y]};return t.push(b,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(g,")")},nr)}),{children:t,attributes:n}}}},sr={provides:function(e){var t=!1;A.matchMedia&&(t=A.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:i(i({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=i(i({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:i(i({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:i(i({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:i(i({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:i(i({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:i(i({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},ar={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e["symbol"]=r,e}}}},cr=[qe,$n,zn,qn,Wn,Qn,Zn,tr,or,sr,ar];Mt(cr,{mixoutsTo:Ht});Ht.noAuto;var lr=Ht.config,ur=Ht.library,hr=(Ht.dom,Ht.parse),dr=(Ht.findIconDefinition,Ht.toHtml,Ht.icon),fr=(Ht.layer,Ht.text);Ht.counter},8429:function(e,t,n){"use strict";n.d(t,{pL1:function(){return r}});var r={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"]}},8539:function(e,t,n){"use strict";n.d(t,{$aW:function(){return s},IwR:function(){return o},LEp:function(){return u},S6C:function(){return a},chG:function(){return i},g82:function(){return l},mXR:function(){return r},r8p:function(){return c}});var r={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"]},i={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},o={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},s={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},a={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"]},c={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},l={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},u={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]}}}]);
//# sourceMappingURL=chunk-vendors.654ca07b.js.map