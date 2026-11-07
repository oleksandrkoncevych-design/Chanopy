(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
		var B={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
		E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
		H.constructor=G;C(H,E.prototype);H.isPureReactComponent=true;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:true,ref:true,__self:true,__source:true};
		function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
		function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l:case n:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
		a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
		function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
		var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
		react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
		react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
		for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
		react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
		react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
		react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
		return react_production_min;
	}

	var hasRequiredReact;

	function requireReact () {
		if (hasRequiredReact) return react.exports;
		hasRequiredReact = 1;
		{
		  react.exports = requireReact_production_min();
		}
		return react.exports;
	}

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;
		{
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	var reactExports = requireReact();

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports$1) {
	function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
			function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports$1.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports$1.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=false,A=false,B=false,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
			"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=false;G(a);if(!A)if(null!==h(r))A=true,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
			function J(a,b){A=false;B&&(B=false,E(L),L=-1);z=true;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports$1.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=false;}}var N=false,O=null,L=-1,P=5,Q=-1;
			function M(){return exports$1.unstable_now()-Q<P?false:true}function R(){if(null!==O){var a=exports$1.unstable_now();Q=a;var b=true;try{b=O(!0,a);}finally{b?S():(N=false,O=null);}}else N=false;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=true,S());}function K(a,b){L=D(function(){a(exports$1.unstable_now());},b);}
			exports$1.unstable_IdlePriority=5;exports$1.unstable_ImmediatePriority=1;exports$1.unstable_LowPriority=4;exports$1.unstable_NormalPriority=3;exports$1.unstable_Profiling=null;exports$1.unstable_UserBlockingPriority=2;exports$1.unstable_cancelCallback=function(a){a.callback=null;};exports$1.unstable_continueExecution=function(){A||z||(A=true,I(J));};
			exports$1.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports$1.unstable_getCurrentPriorityLevel=function(){return y};exports$1.unstable_getFirstCallbackNode=function(){return h(r)};exports$1.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports$1.unstable_pauseExecution=function(){};
			exports$1.unstable_requestPaint=function(){};exports$1.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
			exports$1.unstable_scheduleCallback=function(a,b,c){var d=exports$1.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=true,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=true,I(J)));return a};
			exports$1.unstable_shouldYield=M;exports$1.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
		} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;
		{
		  scheduler.exports = requireScheduler_production_min();
		}
		return scheduler.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;
	var aa=requireReact(),ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
		function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
		var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
		{},ma={};function oa(a){if(ja.call(ma,a))return  true;if(ja.call(la,a))return  false;if(ka.test(a))return ma[a]=true;la[a]=true;return  false}function pa(a,b,c,d){if(null!==c&&0===c.type)return  false;switch(typeof b){case "function":case "symbol":return  true;case "boolean":if(d)return  false;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return  false}}
		function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return  true;if(d)return  false;if(null!==c)switch(c.type){case 3:return !b;case 4:return  false===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return  false}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,false,a.toLowerCase(),null,false,false);});
		["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,false,a.toLowerCase(),null,false,false);});
		["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new v(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,false,a.toLowerCase(),null,false,false);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
		sa);z[b]=new v(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,false,false);});
		z.xlinkHref=new v("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,true,true);});
		function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?false:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&true===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
		var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=false;
		function Oa(a,b){if(!a||Na)return "";Na=true;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
		f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=false,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
		function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,false),a;case 11:return a=Oa(a.type.render,false),a;case 1:return a=Oa(a.type,true),a;default:return ""}}
		function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
		b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
		function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
		case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
		function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
		function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:true,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
		null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return  false;var b=a._valueTracker;if(!b)return  true;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),true):false}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
		function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,false);}
		function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
		function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
		function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
		function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=true;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=true);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=true;d&&(a[e].defaultSelected=true);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=true);}}
		function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
		function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
		function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
		var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
		function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
		var pb={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,
		zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
		function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});
		function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
		function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
		function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=false;function Jb(a,b,c){if(Ib)return a(b,c);Ib=true;try{return Gb(a,b,c)}finally{if(Ib=false,null!==zb||null!==Ab)Hb(),Fb();}}
		function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=false;}if(a)return null;if(c&&"function"!==
		typeof c)throw Error(p(231,b,typeof c));return c}var Lb=false;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=false;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=false,Pb=null,Qb=false,Rb=null,Sb={onError:function(a){Ob=true;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=false;Pb=null;Nb.apply(Sb,arguments);}
		function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=false;Pb=null;}else throw Error(p(198));Qb||(Qb=true,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
		function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=false,h=e.child;h;){if(h===c){g=true;c=e;d=f;break}if(h===d){g=true;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
		c){g=true;c=f;d=e;break}if(h===d){g=true;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
		var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
		var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
		function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
		default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
		function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}
		function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
		function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
		function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=false,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
		function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
		function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),true;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),true;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),true;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return  true;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),true}return  false}
		function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
		function Xc(a){if(null!==a.blockedOn)return  false;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,false;b.shift();}return  true}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=false;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
		function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=true,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
		function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=true;
		function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
		function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
		function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
		function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
		case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
		function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return  true}function qd(){return  false}
		function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:false===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=true;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
		(a.returnValue=false),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=true),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
		var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
		a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
		Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
		119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:false}function zd(){return Pd}
		var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
		a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
		deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=false;
		function ge(a,b){switch(a){case "keyup":return  -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=false;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=true;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
		function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=false,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
		var le={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?true:false}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
		function ve(a,b){if("change"===a)return b}var we=false;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=false;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
		function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
		function Ie(a,b){if(He(a,b))return  true;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return  false;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return  false;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return  false}return  true}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
		function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?true:a&&3===a.nodeType?false:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):false:false}
		function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=false;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
		function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
		d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
		var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=false;
		function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
		function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
		ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
		ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
		function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=false,Rb=null,a;}
		function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,false),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=true;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,false,a),qf(b,true,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=true,qf("selectionchange",false,b));}}
		function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=true);d?void 0!==e?a.addEventListener(b,c,{capture:true,passive:e}):a.addEventListener(b,c,true):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,false);}
		function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
		a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
		Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
		w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
		n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
		vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,false);null!==n&&null!==J&&wf(g,J,n,t,true);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
		xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=true;break;case "contextmenu":case "mouseup":case "dragend":Te=false;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
		break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=true)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
		0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
		function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
		var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
		var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
		function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
		function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
		function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
		function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(false),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
		function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
		function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return  true}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=false,gg=false;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=true;hg(a);}
		function jg(){if(!gg&&null!==eg){gg=true;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=false;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
		function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=false,zg=null;
		function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
		function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),true):false;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,true):false;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
		null,true):false;default:return  false}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=false,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=false;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
		function Gg(a){if(a!==xg)return  false;if(!I)return Fg(a),I=true,false;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
		null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return  true}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=false;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
		function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
		function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
		function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
		null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
		b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
		c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
		b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
		function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
		x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
		m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
		f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
		d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
		(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(true),Vg=Og(false),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
		function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=true),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
		function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=false;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
		function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
		function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
		b;c.lastBaseUpdate=b;}
		function qh(a,b,c,d){var e=a.updateQueue;jh=false;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
		next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=true;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
		h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
		function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
		function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
		function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
		function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=false,Jh=false,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return  false;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return  false;return  true}
		function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=false;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=false;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
		function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
		function Vh(a,b){return "function"===typeof b?b(a):b}
		function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
		eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=true);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
		function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=true);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
		function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=true);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
		function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return  true}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
		function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
		function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
		function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
		function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
		function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=false,dh=true),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=true);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(true);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
		function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
		function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
		function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=true;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:false},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
		4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
		Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(false),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
		f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:false},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
		useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
		N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
		var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:false},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
		yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):true}
		function Gi(a,b,c){var d=false,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
		function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
		function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
		"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
		function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=true,Pi=d);Li(a,b);};return c}
		function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
		function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?true:false:true;if(b)return a;a=a.return;}while(null!==a);return null}
		function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=false;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
		function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
		function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
		function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=false,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=true);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
		function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
		f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
		function hj(a,b,c,d,e){if(Zf(c)){var f=true;cg(b);}else f=false;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=true;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
		(h!==d||k!==l)&&Hi(b,g,d,l);jh=false;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
		("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=false);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
		"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=false;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||false)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
		g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
		a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=false);}return jj(a,b,c,d,f,e)}
		function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,false),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,true);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,false);yh(a,b.containerInfo);}
		function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
		function oj(a,b,c){var d=b.pendingProps,e=L.current,f=false,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?false:0!==(e&2));if(h)f=true,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
		g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
		b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
		function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
		function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
		if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
		0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=true;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
		function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
		function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
		null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,false,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,true,c,null,f);break;case "together":wj(b,false,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
		function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
		function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
		b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
		zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
		Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
		(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
		c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
		function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
		function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
		function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
		c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
		d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,
		h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,true);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
		"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=true:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,false,false);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
		a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
		c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,false);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,false):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
		true);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=true;break a;default:d=false;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
		xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:true!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=false;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
		a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=false;}else null!==zg&&(Fj(zg),zg=null),f=true;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
		Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,false);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,false);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
		g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
		a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=true,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,true),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
		b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
		function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
		null;case 24:return null;default:return null}}var Jj=false,U=false,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=false;
		function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
		q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=false;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
		case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=false;return n}
		function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
		function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
		function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
		function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
		function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=false;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
		function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=true;
		Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
		c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
		function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
		function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
		a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
		f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
		null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
		b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
		rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
		a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
		function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
		function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
		b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
		default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
		function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
		var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=false,Pi=null,Ri=null,vk=false,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
		function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
		function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
		function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
		else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
		d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
		function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
		function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return  false}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return  true;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return  true}
		function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
		function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
		function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
		0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
		function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
		m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
		b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
		function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
		function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
		function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=true,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
		var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=false,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=false,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
		function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
		l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
		u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return  false}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
		function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
		function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
		function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
		Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=true;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=false,yj(a,b,c);dh=0!==(a.flags&131072)?true:false;}else dh=false,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
		null,Zf(d)?(f=true,cg(b)):f=false,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,true,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
		d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:false,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
		f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=true,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
		gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
		g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
		c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
		b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=true,cg(b)):a=false,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,true,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
		function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
		function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
		function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
		c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
		function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
		break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:false};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
		function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
		function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
		null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,true===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
		function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
		function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,true,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
		function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
		ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
		ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
		function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,false,false,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,false,null,null,false,false,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
		function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
		Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
		yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,false);}};Gb=Qk;Hb=Rk;
		var sl={usingClientEntryPoint:false,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
		var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
		jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
		reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=false,d="",e=kl;null!==b&&void 0!==b&&(true===b.unstable_strictMode&&(c=true),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,false,null,null,c,false,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
		reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,true,c)};
		reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=false,f="",g=kl;null!==c&&void 0!==c&&(true===c.unstable_strictMode&&(e=true),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,false,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
		e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,false,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),true):false};reactDom_production_min.unstable_batchedUpdates=Qk;
		reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,false,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
		return reactDom_production_min;
	}

	var hasRequiredReactDom;

	function requireReactDom () {
		if (hasRequiredReactDom) return reactDom.exports;
		hasRequiredReactDom = 1;
		function checkDCE() {
		  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
		    return;
		  }
		  try {
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    console.error(err);
		  }
		}
		{
		  checkDCE();
		  reactDom.exports = requireReactDom_production_min();
		}
		return reactDom.exports;
	}

	var reactDomExports = requireReactDom();
	const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

	var client = {};

	var hasRequiredClient;

	function requireClient () {
		if (hasRequiredClient) return client;
		hasRequiredClient = 1;
		var m = requireReactDom();
		{
		  client.createRoot = m.createRoot;
		  client.hydrateRoot = m.hydrateRoot;
		}
		return client;
	}

	var clientExports = requireClient();

	/**
	 * Structured logger for YouTube Subscription Manager.
	 * All modules use this for consistent, traceable output.
	 * 
	 * Usage: import { log } from './logger.js';
	 *        log.info('ModuleName', 'message', { optional: 'data' });
	 *        log.error('ModuleName', 'message', error);
	 */

	const PREFIX = 'YTSM';

	function fmt(module, level, msg) {
	  return `[${PREFIX}:${module}] [${level.toUpperCase()}] ${msg}`;
	}

	const log = {
	  info(module, msg, data) {
	    try { console.log(fmt(module, 'info', msg), data !== undefined ? data : ''); } catch (_) { /* context dead */ }
	  },
	  warn(module, msg, data) {
	    try { console.warn(fmt(module, 'warn', msg), data !== undefined ? data : ''); } catch (_) { /* context dead */ }
	  },
	  error(module, msg, data) {
	    try { console.error(fmt(module, 'error', msg), data !== undefined ? data : ''); } catch (_) { /* context dead */ }
	  },
	  debug(module, msg, data) {
	    try { console.debug(fmt(module, 'debug', msg), data !== undefined ? data : ''); } catch (_) { /* context dead */ }
	  },
	  /** Log a timed operation */
	  async time(module, label, fn) {
	    const start = performance.now();
	    try {
	      const result = await fn();
	      const ms = (performance.now() - start).toFixed(1);
	      log.info(module, `${label} completed in ${ms}ms`);
	      return result;
	    } catch (err) {
	      const ms = (performance.now() - start).toFixed(1);
	      log.error(module, `${label} failed after ${ms}ms`, err);
	      throw err;
	    }
	  },
	};

	/**
	 * Storage utility — thin wrapper around chrome.runtime.sendMessage.
	 * Handles extension runtime messaging with context invalidation protection.
	 * Returns fallback values on lost connections.
	 * All console calls are wrapped in try/catch because console itself fails
	 * after context invalidation.
	 */

	const MOD$9 = 'Storage';
	const INVALIDATED = { error: 'context_invalidated' };

	function isContextAlive() {
	  try {
	    return !!chrome?.runtime?.id;
	  } catch (_) {
	    return false;
	  }
	}

	function send(type, payload = {}) {
	  return new Promise((resolve) => {
	    // Guard: if runtime is gone, return fallback — never reject
	    if (!isContextAlive()) {
	      resolve(INVALIDATED);
	      return;
	    }

	    try {
	      chrome.runtime.sendMessage({ type, payload }, (response) => {
	        try {
	          if (chrome.runtime.lastError) {
	            const msg = chrome.runtime.lastError.message || '';
	            if (msg.includes('Extension context invalidated') || msg.includes('message port closed')) {
	              resolve(INVALIDATED);
	              return;
	            }
	            log.warn(MOD$9, `Runtime error on ${type}`, msg);
	            resolve({ error: msg });
	            return;
	          }
	          resolve(response || {});
	        } catch (_) {
	          resolve(INVALIDATED);
	        }
	      });
	    } catch (_) {
	      // Synchronous throw — runtime is truly dead
	      resolve(INVALIDATED);
	    }
	  });
	}

	/** Direct chrome.storage.local access (works even when service worker is asleep) */
	function storageError(error) {
	  const message = error?.message || String(error);
	  log.error(MOD$9, message);
	  if (typeof document !== 'undefined' && document.body) {
	    let notice = document.getElementById('ts-storage-error');
	    if (!notice) {
	      notice = document.createElement('div');
	      notice.id = 'ts-storage-error';
	      notice.setAttribute('role', 'alert');
	      notice.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;z-index:2147483647;background:#842020;color:white;padding:16px;border-radius:8px;font:14px sans-serif;cursor:pointer';
	      notice.onclick = () => notice.remove();
	      document.body.appendChild(notice);
	    }
	    notice.textContent = 'Chanopy: ' + message;
	  }
	  return error instanceof Error ? error : new Error(message);
	}
	async function checkedSend(type, payload = {}) {
	  const result = await send(type, payload);
	  if (!result || result.error || result.success === false) throw storageError(new Error(result?.error || 'Не вдалося зберегти дані. Оновіть сторінку та повторіть дію.'));
	  return result;
	}
	function localGet(keys) {
	  return new Promise((resolve, reject) => {
	    if (!isContextAlive()) { reject(storageError(new Error('Контекст розширення втрачено. Оновіть сторінку.'))); return; }
	    try {
	      chrome.storage.local.get(keys, (result) => {
	        if (chrome.runtime.lastError) { reject(storageError(new Error(chrome.runtime.lastError.message))); return; }
	        resolve(result || {});
	      });
	    } catch (error) { reject(storageError(error)); }
	  });
	}
	async function localSet(data) {
	  await checkedSend('SET_LOCAL_DATA', { data });
	  return true;
	}

	const StorageAPI = {
	  getGroups: () => send('GET_GROUPS'),
	  saveGroups: (groups, expectedGroups) => send('SAVE_GROUPS', { groups, expectedGroups }),
	  getChannelMap: () => send('GET_CHANNEL_MAP'),
	  saveChannelMap: (channelMap) => send('SAVE_CHANNEL_MAP', { channelMap }),
	  getSettings: () => send('GET_SETTINGS'),
	  saveSettings: (settings) => send('SAVE_SETTINGS', { settings }),
	  getWatched: () => send('GET_WATCHED'),
	  toggleWatched: (videoId) => send('TOGGLE_WATCHED', { videoId }),
	  exportData: () => send('EXPORT_DATA'),
	  importData: (data) => send('IMPORT_DATA', { data }),

	  // Direct storage access (bypasses service worker)
	  localGet,
	  localSet,

	  // Check if the extension context is still alive
	  isAlive: isContextAlive,
	};

	/**
	 * YouTube Internal API — Fetches video feeds and channel data.
	 * 
	 * Architecture:
	 *  1. RSS feed (PRIMARY) — /feeds/videos.xml?channel_id=UC… — no auth, up to 15 recent, instant
	 *  2. InnerTube browse (FALLBACK) — youtubei/v1/browse — auth via cookies, pagination
	 *  3. Handle resolution — youtubei/v1/navigation/resolve_url — converts @handle to UC ID
	 */

	const MOD$8 = 'YouTubeAPI';

	// ── In-memory caches ──────────────────────────────────────────────────────────
	const _cache = new Map();
	const CACHE_TTL = 3 * 60 * 1000; // 3 min for video data
	const _resolvedIds = new Map(); // handle/slug → UC ID (persists for session)

	function _cacheGet(key) {
	  const entry = _cache.get(key);
	  if (!entry) return null;
	  if (Date.now() - entry.ts > CACHE_TTL) { _cache.delete(key); return null; }
	  return entry.data;
	}

	function _cacheSet(key, data) {
	  if (_cache.size > 300) {
	    const oldest = _cache.keys().next().value;
	    _cache.delete(oldest);
	  }
	  _cache.set(key, { data, ts: Date.now() });
	}

	// ── InnerTube Configuration ───────────────────────────────────────────────────
	function _getConfig() {
	  try {
	    const d = window.ytcfg?.data_ || {};
	    return {
	      apiKey: d.INNERTUBE_API_KEY || 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
	      clientVersion: d.INNERTUBE_CLIENT_VERSION || '2.20250101.01.00',
	      hl: d.HL || 'en',
	      gl: d.GL || 'US',
	      visitorData: d.VISITOR_DATA || '',
	      sessionIndex: d.SESSION_INDEX || '',
	    };
	  } catch {
	    return {
	      apiKey: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
	      clientVersion: '2.20250101.01.00',
	      hl: 'en', gl: 'US', visitorData: '', sessionIndex: '',
	    };
	  }
	}

	function _buildContext(cfg) {
	  return {
	    client: {
	      hl: cfg.hl,
	      gl: cfg.gl,
	      clientName: 'WEB',
	      clientVersion: cfg.clientVersion,
	      ...(cfg.visitorData && { visitorData: cfg.visitorData }),
	    },
	  };
	}

	// ── Core InnerTube POST ───────────────────────────────────────────────────────
	function _sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

	async function _post(endpoint, body, retries = 2) {
	  const cfg = _getConfig();
	  const url = `https://www.youtube.com/youtubei/v1/${endpoint}?prettyPrint=false`;

	  for (let attempt = 0; attempt <= retries; attempt++) {
	    try {
	      const resp = await fetch(url, {
	        method: 'POST',
	        headers: {
	          'Content-Type': 'application/json',
	          'X-YouTube-Client-Name': '1',
	          'X-YouTube-Client-Version': cfg.clientVersion,
	          'X-Goog-AuthUser': cfg.sessionIndex,
	          'Origin': 'https://www.youtube.com',
	        },
	        credentials: 'include',
	        body: JSON.stringify({ context: _buildContext(cfg), ...body }),
	      });

	      if (resp.status === 429 && attempt < retries) {
	        log.warn(MOD$8, `Rate limited on /${endpoint}, backing off`, { attempt });
	        await _sleep(1000 * (attempt + 1));
	        continue;
	      }
	      if (!resp.ok) throw new Error(`Innertube /${endpoint} HTTP ${resp.status}`);
	      return await resp.json();
	    } catch (err) {
	      if (attempt === retries) throw err;
	      await _sleep(500);
	    }
	  }
	}

	// ── Handle/Slug → UC ID Resolution ────────────────────────────────────────────
	/**
	 * Resolves a YouTube URL, @handle, or /c/ slug to a UC channel ID.
	 * Uses InnerTube resolve_url endpoint.
	 */
	async function resolveChannelId(input) {
	  if (!input) return null;

	  // Already a UC ID
	  if (input.startsWith('UC') && input.length >= 24) return input;

	  // Check cache
	  const cached = _resolvedIds.get(input);
	  if (cached) return cached;

	  // Build URL for resolution
	  let resolveUrl = input;
	  if (input.startsWith('@')) {
	    resolveUrl = `https://www.youtube.com/${input}`;
	  } else if (!input.startsWith('http')) {
	    resolveUrl = `https://www.youtube.com/c/${input}`;
	  }

	  try {
	    const data = await _post('navigation/resolve_url', { url: resolveUrl });
	    const channelId = data?.endpoint?.browseEndpoint?.browseId;
	    if (channelId && channelId.startsWith('UC')) {
	      _resolvedIds.set(input, channelId);
	      log.info(MOD$8, `Resolved ${input} → ${channelId}`);
	      return channelId;
	    }
	    log.warn(MOD$8, `Could not resolve ${input}`, data);
	    return null;
	  } catch (err) {
	    log.error(MOD$8, `Failed to resolve ${input}`, err.message);
	    return null;
	  }
	}

	// ── Channel Detail Fetching ───────────────────────────────────────────────────
	/**
	 * Fetch channel details (name, avatar) using InnerTube browse endpoint.
	 * Returns { name, avatar } or null on failure.
	 */
	async function fetchChannelDetails(channelId) {
	  if (!channelId || !channelId.startsWith('UC')) return null;

	  const cacheKey = `details:${channelId}`;
	  const cached = _cacheGet(cacheKey);
	  if (cached) return cached;

	  try {
	    const data = await _post('browse', { browseId: channelId });

	    // Extract from C4 header
	    const header = data?.header?.c4TabbedHeaderRenderer
	      || data?.header?.pageHeaderRenderer;
	    
	    let name = null;
	    let avatar = null;

	    if (header?.title) {
	      name = header.title;
	    }
	    if (header?.avatar?.thumbnails?.length) {
	      // Pick the smallest that's at least 88px
	      const thumbs = header.avatar.thumbnails;
	      avatar = (thumbs.find(t => t.width >= 88) || thumbs[thumbs.length - 1])?.url || null;
	    }

	    // Fallback: pageHeaderRenderer (newer format)
	    if (!name && data?.header?.pageHeaderRenderer?.pageTitle) {
	      name = data.header.pageHeaderRenderer.pageTitle;
	    }
	    if (!avatar && data?.header?.pageHeaderRenderer?.content?.pageHeaderViewModel?.image?.decoratedAvatarViewModel?.avatar?.avatarViewModel?.image?.sources?.length) {
	      avatar = data.header.pageHeaderRenderer.content.pageHeaderViewModel.image.decoratedAvatarViewModel.avatar.avatarViewModel.image.sources[0]?.url || null;
	    }

	    // Another fallback: metadata
	    if (!name && data?.metadata?.channelMetadataRenderer?.title) {
	      name = data.metadata.channelMetadataRenderer.title;
	    }
	    if (!avatar && data?.metadata?.channelMetadataRenderer?.avatar?.thumbnails?.length) {
	      avatar = data.metadata.channelMetadataRenderer.avatar.thumbnails[0]?.url || null;
	    }

	    if (name || avatar) {
	      const result = { name: name || channelId, avatar: avatar || null };
	      _cacheSet(cacheKey, result);
	      return result;
	    }

	    return null;
	  } catch (err) {
	    log.debug(MOD$8, `Failed to fetch details for ${channelId}`, err.message);
	    return null;
	  }
	}

	/**
	 * Batch fetch channel details. Processes in chunks of CONCURRENCY.
	 * Returns Map<channelId, { name, avatar }>.
	 * Calls onProgress(completed, total) periodically.
	 */
	async function fetchChannelDetailsBatch(channelIds, onProgress) {
	  const CONCURRENCY = 4;
	  const results = new Map();
	  let completed = 0;

	  const chunks = [];
	  for (let i = 0; i < channelIds.length; i += CONCURRENCY) {
	    chunks.push(channelIds.slice(i, i + CONCURRENCY));
	  }

	  for (const chunk of chunks) {
	    const promises = chunk.map(async (chId) => {
	      const details = await fetchChannelDetails(chId);
	      if (details) results.set(chId, details);
	      completed++;
	      onProgress?.(completed, channelIds.length);
	    });
	    await Promise.all(promises);
	    await _sleep(100); // Rate limit courtesy
	  }

	  log.info(MOD$8, `Batch fetch complete: ${results.size}/${channelIds.length} channels enriched`);
	  return results;
	}

	// ── YouTube RSS Feed ──────────────────────────────────────────────────────────
	// Primary source — no auth, instant, up to 15 most recent videos.
	async function _fetchRSS(channelId) {
	  const cacheKey = `rss:${channelId}`;
	  const cached = _cacheGet(cacheKey);
	  if (cached) return cached;

	  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
	  const resp = await fetch(url);
	  if (!resp.ok) throw new Error(`RSS fetch failed for ${channelId}: ${resp.status}`);

	  const text = await resp.text();
	  const parser = new DOMParser();
	  const xml = parser.parseFromString(text, 'application/xml');

	  const parseErr = xml.querySelector('parsererror');
	  if (parseErr) throw new Error(`RSS parse error for ${channelId}`);

	  const entries = xml.querySelectorAll('entry');
	  const channelName = xml.querySelector('author > name')?.textContent || '';

	  const videos = Array.from(entries).map((entry) => {
	    const videoId = entry.querySelector('videoId')?.textContent || '';
	    const title = entry.querySelector('title')?.textContent || '';
	    const published = entry.querySelector('published')?.textContent || '';
	    const updated = entry.querySelector('updated')?.textContent || '';
	    const viewCount = parseInt(
	      entry.querySelector('statistics')?.getAttribute('views') || '0'
	    );

	    // Extract thumbnail from media:group > media:thumbnail
	    const mediaThumbnail = entry.getElementsByTagName('media:thumbnail')[0];
	    const thumbnail = mediaThumbnail?.getAttribute('url') || '';

	    return {
	      videoId,
	      title,
	      channelName,
	      channelId,
	      publishedAt: published || updated,
	      viewCount,
	      duration: 0,
	      isLive: false,
	      isShort: false,
	      isPremiere: false,
	      thumbnail,
	      source: 'rss',
	    };
	  });

	  _cacheSet(cacheKey, videos);
	  return videos;
	}

	// ── Channel Browse via InnerTube (fallback) ───────────────────────────────────
	async function _browseChannelVideos(channelId, maxCount = 30) {
	  const cacheKey = `ch:${channelId}:${maxCount}`;
	  const cached = _cacheGet(cacheKey);
	  if (cached) return cached;

	  const VIDEOS_TAB_PARAMS = 'EgZ2aWRlb3MyCRAC';

	  let data;
	  try {
	    data = await _post('browse', { browseId: channelId, params: VIDEOS_TAB_PARAMS });
	  } catch (err) {
	    log.warn(MOD$8, `Browse failed for ${channelId}, trying without params`, err.message);
	    data = await _post('browse', { browseId: channelId });
	  }

	  let videos = _parseChannelBrowseResponse(data, channelId);

	  // Paginate with continuation tokens
	  let continuation = _extractContinuationToken(data);
	  while (videos.length < maxCount && continuation) {
	    const more = await _post('browse', { continuation });
	    const newVideos = _parseChannelBrowseResponse(more, channelId);
	    if (newVideos.length === 0) break;
	    videos = videos.concat(newVideos);
	    continuation = _extractContinuationToken(more);
	    await _sleep(80);
	  }

	  const result = videos.slice(0, maxCount);
	  _cacheSet(cacheKey, result);
	  return result;
	}

	// ── Parse Browse Response ─────────────────────────────────────────────────────
	function _parseChannelBrowseResponse(data, channelId) {
	  const videos = [];
	  if (!data) return videos;

	  try {
	    const tabs = data.contents?.twoColumnBrowseResultsRenderer?.tabs || [];
	    for (const tab of tabs) {
	      const tr = tab.tabRenderer;
	      if (!tr?.content) continue;

	      // Modern layout: richGridRenderer
	      const rgr = tr.content.richGridRenderer;
	      if (rgr) {
	        for (const item of rgr.contents || []) {
	          const vr = item?.richItemRenderer?.content?.videoRenderer;
	          if (vr) {
	            const parsed = _parseVideoRenderer(vr, channelId);
	            if (parsed) videos.push(parsed);
	          }
	        }
	        if (videos.length > 0) return videos;
	      }

	      // Legacy layout: sectionListRenderer
	      const slr = tr.content.sectionListRenderer;
	      if (slr) {
	        for (const section of slr.contents || []) {
	          for (const inner of section.itemSectionRenderer?.contents || []) {
	            for (const gi of inner.gridRenderer?.items || []) {
	              const vr = gi.gridVideoRenderer;
	              if (vr) {
	                const parsed = _parseGridVideoRenderer(vr, channelId);
	                if (parsed) videos.push(parsed);
	              }
	            }
	          }
	        }
	        if (videos.length > 0) return videos;
	      }
	    }

	    // Continuation response
	    for (const action of data.onResponseReceivedActions || []) {
	      for (const item of action.appendContinuationItemsAction?.continuationItems || []) {
	        const vr = item?.richItemRenderer?.content?.videoRenderer;
	        if (vr) {
	          const parsed = _parseVideoRenderer(vr, channelId);
	          if (parsed) videos.push(parsed);
	        }
	        const gvr = item?.gridVideoRenderer;
	        if (gvr) {
	          const parsed = _parseGridVideoRenderer(gvr, channelId);
	          if (parsed) videos.push(parsed);
	        }
	      }
	    }
	  } catch (err) {
	    log.error(MOD$8, '_parseChannelBrowseResponse error', err);
	  }

	  return videos;
	}

	function _parseVideoRenderer(vr, channelId) {
	  if (!vr?.videoId) return null;

	  const durationText = vr.thumbnailOverlays
	    ?.find((o) => o.thumbnailOverlayTimeStatusRenderer)
	    ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText || '';

	  const isShort = vr.navigationEndpoint?.reelWatchEndpoint != null ||
	    vr.thumbnailOverlays?.some((o) =>
	      o.thumbnailOverlayTimeStatusRenderer?.style === 'SHORTS'
	    );

	  const isLive = vr.badges?.some((b) =>
	    b.metadataBadgeRenderer?.style === 'BADGE_STYLE_TYPE_LIVE_NOW' ||
	    b.metadataBadgeRenderer?.label === 'LIVE'
	  ) || vr.thumbnailOverlays?.some((o) =>
	    o.thumbnailOverlayTimeStatusRenderer?.style === 'LIVE'
	  );

	  const isPremiere = vr.upcomingEventData != null ||
	    vr.thumbnailOverlays?.some((o) =>
	      o.thumbnailOverlayTimeStatusRenderer?.style === 'UPCOMING'
	    );

	  const relativeTime = _getText(vr.publishedTimeText) || '';
	  const publishedAt = relativeTime ? _relativeToApproxDate(relativeTime) : '';

	  // Best thumbnail
	  const thumbs = vr.thumbnail?.thumbnails || [];
	  const thumbnail = thumbs.length > 0 ? thumbs[thumbs.length - 1].url : '';

	  return {
	    videoId: vr.videoId,
	    title: _getText(vr.title) || '',
	    channelId,
	    channelName: _getText(vr.ownerText) || _getText(vr.longBylineText) || '',
	    publishedAt,
	    publishedRelative: relativeTime,
	    duration: _parseDurationText(durationText),
	    viewCount: _parseViewText(_getText(vr.viewCountText) || _getText(vr.shortViewCountText) || ''),
	    isLive,
	    isShort,
	    isPremiere,
	    thumbnail,
	    source: 'innertube',
	  };
	}

	function _parseGridVideoRenderer(vr, channelId) {
	  if (!vr?.videoId) return null;

	  const durationText = vr.thumbnailOverlays
	    ?.find((o) => o.thumbnailOverlayTimeStatusRenderer)
	    ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText || '';

	  const relativeTime = _getText(vr.publishedTimeText) || '';
	  const thumbs = vr.thumbnail?.thumbnails || [];
	  const thumbnail = thumbs.length > 0 ? thumbs[thumbs.length - 1].url : '';

	  return {
	    videoId: vr.videoId,
	    title: _getText(vr.title) || '',
	    channelId,
	    channelName: '',
	    publishedAt: relativeTime ? _relativeToApproxDate(relativeTime) : '',
	    publishedRelative: relativeTime,
	    duration: _parseDurationText(durationText),
	    viewCount: _parseViewText(_getText(vr.viewCountText) || _getText(vr.shortViewCountText) || ''),
	    isLive: vr.thumbnailOverlays?.some((o) => o.thumbnailOverlayTimeStatusRenderer?.style === 'LIVE') || false,
	    isShort: false,
	    isPremiere: vr.thumbnailOverlays?.some((o) => o.thumbnailOverlayTimeStatusRenderer?.style === 'UPCOMING') || false,
	    thumbnail,
	    source: 'innertube',
	  };
	}

	function _extractContinuationToken(data) {
	  if (!data) return null;

	  const tabs = data.contents?.twoColumnBrowseResultsRenderer?.tabs || [];
	  for (const tab of tabs) {
	    const contents = tab.tabRenderer?.content?.richGridRenderer?.contents || [];
	    for (const item of contents) {
	      const token = item?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
	      if (token) return token;
	    }
	  }
	  for (const tab of tabs) {
	    for (const section of tab.tabRenderer?.content?.sectionListRenderer?.contents || []) {
	      const token = section?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
	      if (token) return token;
	    }
	  }
	  for (const action of data.onResponseReceivedActions || []) {
	    for (const item of action.appendContinuationItemsAction?.continuationItems || []) {
	      const token = item?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
	      if (token) return token;
	    }
	  }
	  return null;
	}

	// ── Public API ────────────────────────────────────────────────────────────────

	/**
	 * Get latest videos for a single channel.
	 * RSS is primary (instant, no auth). InnerTube is fallback.
	 */
	async function getChannelVideos(channelId, maxCount = 15, channelName = '') {
	  // Resolve handle to UC ID if needed
	  const resolvedId = await resolveChannelId(channelId);
	  if (!resolvedId) {
	    log.warn(MOD$8, `Cannot resolve channel: ${channelId}`);
	    return [];
	  }

	  let videos;

	  // Always try RSS first — it's instant and near-realtime
	  try {
	    videos = await _fetchRSS(resolvedId);
	    if (videos.length > 0) {
	      // If we need more than RSS provides, supplement with InnerTube
	      if (maxCount > 15 && videos.length < maxCount) {
	        try {
	          const itVideos = await _browseChannelVideos(resolvedId, maxCount);
	          // Merge: use RSS videos (more accurate timestamps) + InnerTube extras
	          const rssIds = new Set(videos.map(v => v.videoId));
	          const extras = itVideos.filter(v => !rssIds.has(v.videoId));
	          videos = [...videos, ...extras];
	        } catch (_) { /* RSS data is sufficient */ }
	      }
	      videos = videos.slice(0, maxCount);
	    }
	  } catch {
	    // RSS failed — fall back to InnerTube
	    log.debug(MOD$8, `RSS failed for ${resolvedId}, falling back to InnerTube`);
	    try {
	      videos = await _browseChannelVideos(resolvedId, maxCount);
	    } catch (err) {
	      log.error(MOD$8, `InnerTube also failed for ${resolvedId}`, err.message);
	      return [];
	    }
	  }

	  // Apply channel name from our stored map
	  if (channelName) {
	    videos.forEach((v) => { if (!v.channelName) v.channelName = channelName; });
	  }

	  return videos;
	}

	/**
	 * Get latest videos for ALL channels in a group, concurrently.
	 * NO channel cap — fetches from every channel.
	 * Returns flat array sorted by publishedAt (newest first).
	 */
	async function getGroupVideos(channelIds, channelMap = {}, maxPerChannel = 15) {
	  const CONCURRENCY = 6;
	  const allVideos = [];
	  const results = { success: 0, failed: 0, channels: {} };

	  // Process in concurrent chunks
	  const chunks = [];
	  for (let i = 0; i < channelIds.length; i += CONCURRENCY) {
	    chunks.push(channelIds.slice(i, i + CONCURRENCY));
	  }

	  for (const chunk of chunks) {
	    const promises = chunk.map(async (chId) => {
	      const chName = channelMap[chId]?.name || chId;
	      const start = performance.now();
	      try {
	        const videos = await getChannelVideos(chId, maxPerChannel, chName);
	        const ms = (performance.now() - start).toFixed(0);
	        results.success++;
	        results.channels[chId] = { status: 'ok', count: videos.length, ms };
	        return videos;
	      } catch (err) {
	        const ms = (performance.now() - start).toFixed(0);
	        results.failed++;
	        results.channels[chId] = { status: 'fail', error: err.message, ms };
	        return [];
	      }
	    });

	    const batchResults = await Promise.all(promises);
	    for (const batch of batchResults) {
	      for (const video of batch) {
	        // Ensure channel name from our map
	        const mapEntry = channelMap[video.channelId];
	        if (mapEntry?.name && mapEntry.name !== video.channelId) {
	          video.channelName = mapEntry.name;
	        }
	        allVideos.push(video);
	      }
	    }
	    await _sleep(30);
	  }

	  log.info(MOD$8, `Group fetch complete: ${results.success} ok, ${results.failed} failed, ${allVideos.length} videos total`);

	  // Sort by published date — newest first
	  allVideos.sort((a, b) => {
	    const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
	    const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
	    return db - da;
	  });

	  return allVideos;
	}

	/**
	 * Parse the channel ID from the current video page.
	 */
	function parseCurrentVideoChannelId() {
	  // Method 1: Channel link in the owner section (most reliable in content scripts)
	  const ownerLinks = document.querySelectorAll(
	    '#owner a[href*="/channel/"], #owner a[href*="/@"], ytd-video-owner-renderer a[href*="/channel/"], ytd-video-owner-renderer a[href*="/@"]'
	  );
	  for (const link of ownerLinks) {
	    const href = link.getAttribute('href') || '';
	    const channelMatch = href.match(/\/channel\/(UC[\w-]+)/);
	    if (channelMatch) return channelMatch[1];
	  }

	  // Method 2: Meta tag
	  const metaChannelId = document.querySelector('meta[itemprop="channelId"]');
	  if (metaChannelId) {
	    const val = metaChannelId.getAttribute('content');
	    if (val && val.startsWith('UC')) return val;
	  }

	  // Method 3: Any channel link on the page
	  const links = document.querySelectorAll('a[href*="/channel/UC"]');
	  for (const link of links) {
	    const match = link.href.match(/\/channel\/(UC[\w-]+)/);
	    if (match) return match[1];
	  }

	  // Method 4: Script tag text (ytInitialPlayerResponse might be server-rendered)
	  for (const s of document.querySelectorAll('script:not([src])')) {
	    const t = s.textContent;
	    if (t && t.includes('channelId')) {
	      const m = t.match(/"channelId"\s*:\s*"(UC[\w-]+)"/);
	      if (m) return m[1];
	    }
	  }

	  log.debug(MOD$8, 'Could not find channel ID on video page');
	  return null;
	}

	/**
	 * Parse channel handle from the current channel page URL.
	 */
	function parseCurrentChannelInfo() {
	  const path = location.pathname;
	  if (path.startsWith('/@')) {
	    return { handle: path.split('/')[1], type: 'handle' };
	  }
	  if (path.startsWith('/channel/')) {
	    return { channelId: path.split('/')[2], type: 'id' };
	  }
	  if (path.startsWith('/c/') || path.startsWith('/user/')) {
	    return { slug: path.split('/')[2], type: 'slug' };
	  }
	  return null;
	}

	// ── Utility Functions ─────────────────────────────────────────────────────────

	function _getText(obj) {
	  if (!obj) return '';
	  if (typeof obj === 'string') return obj;
	  if (obj.simpleText) return obj.simpleText;
	  if (obj.runs) return obj.runs.map((r) => r.text).join('');
	  return '';
	}

	function _parseDurationText(text) {
	  if (!text || text === 'LIVE') return text === 'LIVE' ? -1 : 0;
	  const parts = text.split(':').map(Number);
	  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
	  if (parts.length === 2) return parts[0] * 60 + parts[1];
	  return parseInt(parts[0]) || 0;
	}

	function _parseViewText(text) {
	  if (!text) return 0;
	  const clean = text.toLowerCase().replace(/[, views]/g, '').trim();
	  if (clean.includes('k')) return Math.round(parseFloat(clean) * 1_000);
	  if (clean.includes('m')) return Math.round(parseFloat(clean) * 1_000_000);
	  if (clean.includes('b')) return Math.round(parseFloat(clean) * 1_000_000_000);
	  return parseInt(clean) || 0;
	}

	function _relativeToApproxDate(text) {
	  if (!text) return '';
	  if (text.includes('just now') || text.includes('second')) return new Date().toISOString();

	  const now = Date.now();
	  const match = text.match(/(\d+)\s+(second|minute|hour|day|week|month|year)/i);
	  if (!match) return '';

	  const n = parseInt(match[1]);
	  const unit = match[2].toLowerCase();
	  const ms = {
	    second: 1_000, minute: 60_000, hour: 3_600_000,
	    day: 86_400_000, week: 7 * 86_400_000,
	    month: 30 * 86_400_000, year: 365 * 86_400_000,
	  }[unit] || 0;

	  return new Date(now - n * ms).toISOString();
	}

	/**
	 * Format seconds into human-readable duration string.
	 */
	function formatDuration(seconds) {
	  if (!seconds || seconds <= 0) return '';
	  const h = Math.floor(seconds / 3600);
	  const m = Math.floor((seconds % 3600) / 60);
	  const s = seconds % 60;
	  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
	  return `${m}:${String(s).padStart(2, '0')}`;
	}

	/**
	 * Format view count into human-readable string.
	 */
	function formatViews(count) {
	  if (!count) return '0 views';
	  if (count >= 1_000_000_000) return `${(count / 1_000_000_000).toFixed(1)}B views`;
	  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
	  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K views`;
	  return `${count} views`;
	}

	/**
	 * Format a date into a relative time string.
	 */
	function formatTimeAgo(dateStr) {
	  if (!dateStr) return '';
	  const diff = Date.now() - new Date(dateStr).getTime();
	  const seconds = Math.floor(diff / 1000);
	  if (seconds < 60) return 'just now';
	  const minutes = Math.floor(seconds / 60);
	  if (minutes < 60) return `${minutes} min ago`;
	  const hours = Math.floor(minutes / 60);
	  if (hours < 24) return `${hours} hr ago`;
	  const days = Math.floor(hours / 24);
	  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
	  if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
	  if (days < 365) return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
	  return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? 's' : ''} ago`;
	}

	const youtubeApi = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
		__proto__: null,
		fetchChannelDetails,
		fetchChannelDetailsBatch,
		formatDuration,
		formatTimeAgo,
		formatViews,
		getChannelVideos,
		getGroupVideos,
		parseCurrentChannelInfo,
		parseCurrentVideoChannelId,
		resolveChannelId
	}, Symbol.toStringTag, { value: 'Module' }));

	/**
	 * useStorageSync — Custom hook that syncs React state with chrome.storage.
	 * Fetches all data once at startup, then listens to chrome.storage.onChanged.
	 * 
	 * Hooks into custom events to persist data across DOM contexts.
	 * Data: groups (array), channelMap (object), settings (object), watchedVideos (Set).
	 */

	const MOD$7 = 'useStorageSync';

	function useStorageSync() {
	  const [groups, setGroups] = reactExports.useState([]);
	  const [channelMap, setChannelMap] = reactExports.useState({});
	  const [settings, setSettings] = reactExports.useState({});
	  const [watchedVideos, setWatchedVideos] = reactExports.useState({});
	  const [loading, setLoading] = reactExports.useState(true);
	  const [enrichmentStatus, setEnrichmentStatus] = reactExports.useState(null); // null | 'running' | { done: N, total: N }
	  const [localizedCatalog, setLocalizedCatalog] = reactExports.useState({ byId: {}, aliasesById: {}, byUkName: {} });
	  const refreshLocalizedCatalog = reactExports.useCallback(async (locale) => {
	    const result = await send('GET_LOCALIZED_GROUP_NAMES', { locale: locale || 'uk' });
	    if (result && !result.error) setLocalizedCatalog(result);
	  }, []);
	  const localizedGroupName = reactExports.useCallback((group) => {
	    if (!group || !group.name) return group?.name || '';
	    const rawName = String(group.name).trim().toLocaleLowerCase();
	    const categoryId = group.catalogCategoryId;
	    if (categoryId && localizedCatalog.byId?.[categoryId]) {
	      const aliases = localizedCatalog.aliasesById?.[categoryId] || [];
	      if (aliases.includes(rawName)) return localizedCatalog.byId[categoryId];
	    }
	    return localizedCatalog.byUkName?.[rawName] || group.name;
	  }, [localizedCatalog]);
	  
	  // Keep a ref to the latest channelMap so we never use stale closures
	  const channelMapRef = reactExports.useRef({});
	  const loadedRef = reactExports.useRef(false);
	  const enrichingRef = reactExports.useRef(false);

	  // Keep ref in sync
	  reactExports.useEffect(() => {
	    channelMapRef.current = channelMap;
	  }, [channelMap]);

	  // Initial load
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    
	    async function load() {
	      log.info(MOD$7, 'Loading initial data from storage...');
	      
	      // Use direct storage access for reliability
	      const data = await StorageAPI.localGet(['groups', 'channelMap', 'settings', 'watchedVideos', 'tsLang']);
	      
	      if (cancelled) return;
	      
	      const loadedGroups = data.groups || [];
	      const loadedChannelMap = data.channelMap || {};
	      const loadedSettings = data.settings || {};
	      const loadedWatched = data.watchedVideos || {};

	      setGroups(loadedGroups);
	      setChannelMap(loadedChannelMap);
	      channelMapRef.current = loadedChannelMap;
	      setSettings(loadedSettings);
	      setWatchedVideos(loadedWatched);
	      await refreshLocalizedCatalog(data.tsLang || 'uk');
	      setLoading(false);
	      loadedRef.current = true;
	      
	      log.info(MOD$7, 'Initial data loaded', {
	        groups: loadedGroups.length,
	        channels: Object.keys(loadedChannelMap).length,
	      });
	    }

	    load().catch(() => { if (!cancelled) setLoading(false); });
	    return () => { cancelled = true; };
	  }, [refreshLocalizedCatalog]);

	  // Listen for storage changes
	  reactExports.useEffect(() => {
	    if (!StorageAPI.isAlive()) return;

	    function handleChanges(changes, area) {
	      if (area !== 'local') return;
	      
	      if (changes.groups) {
	        setGroups(changes.groups.newValue || []);
	        log.debug(MOD$7, 'Groups updated from storage');
	      }
	      if (changes.channelMap) {
	        const newMap = changes.channelMap.newValue || {};
	        setChannelMap(newMap);
	        channelMapRef.current = newMap;
	        log.debug(MOD$7, `ChannelMap updated from storage (${Object.keys(newMap).length} channels)`);
	      }
	      if (changes.settings) {
	        setSettings(changes.settings.newValue || {});
	        log.debug(MOD$7, 'Settings updated from storage');
	      }
	      if (changes.watchedVideos) {
	        setWatchedVideos(changes.watchedVideos.newValue || {});
	      }
	      if (changes.tsLang) refreshLocalizedCatalog(changes.tsLang.newValue || 'uk');
	    }

	    try {
	      chrome.storage.onChanged.addListener(handleChanges);
	      return () => {
	        try { chrome.storage.onChanged.removeListener(handleChanges); } catch (_) {}
	      };
	    } catch (_) {
	      log.warn(MOD$7, 'Cannot listen to storage changes — context may be invalidated');
	    }
	  }, [refreshLocalizedCatalog]);

	  // Persist before displaying success; reject stale whole-tree edits.
	  const updateGroups = reactExports.useCallback(async (newGroups) => {
	    await checkedSend('SAVE_GROUPS', { groups: newGroups, expectedGroups: groups });
	  }, [groups]);

	  const updateChannelMap = reactExports.useCallback(async (changes, removeIds = []) => {
	    if (!loadedRef.current) throw storageError(new Error('Дані ще завантажуються. Повторіть дію.'));
	    const patches = {};
	    for (const [id, entry] of Object.entries(changes || {})) {
	      const { groups: nextGroups, ...fields } = entry;
	      patches[id] = fields;
	      if (nextGroups) {
	        const prevGroups = channelMapRef.current[id]?.groups || [];
	        patches[id].addGroups = nextGroups.filter(g => !prevGroups.includes(g));
	        patches[id].removeGroups = prevGroups.filter(g => !nextGroups.includes(g));
	      }
	    }
	    await checkedSend('PATCH_CHANNEL_MAP', { changes: patches, removeIds });
	  }, []);

	  const updateSettings = reactExports.useCallback(async (newSettings) => {
	    await checkedSend('SAVE_SETTINGS', { settings: newSettings });
	  }, []);

	  const toggleWatched = reactExports.useCallback(async (videoId) => {
	    await checkedSend('TOGGLE_WATCHED', { videoId });
	  }, []);

	  /**
	   * Enrich channels that are missing names or avatars.
	   * Can be called manually from Dashboard or runs automatically after load.
	   */
	  const enrichChannels = reactExports.useCallback(async (force = false) => {
	    if (enrichingRef.current) return;
	    enrichingRef.current = true;
	    setEnrichmentStatus('running');

	    try {
	      const stored = await StorageAPI.localGet(['channelMap']);
	      const current = stored.channelMap || {};
	      
	      // Find channels needing enrichment
	      const needsEnrich = Object.entries(current).filter(([id, entry]) => {
	        if (force) return !entry.avatar; // Force: re-fetch all missing avatars
	        // Auto: only fetch if name equals ID or no avatar
	        const nameIsId = !entry.name || entry.name === id || entry.name.startsWith('UC');
	        return nameIsId || !entry.avatar;
	      }).map(([id]) => id);

	      if (needsEnrich.length === 0) {
	        log.info(MOD$7, 'All channels already enriched');
	        setEnrichmentStatus({ done: 0, total: 0 });
	        enrichingRef.current = false;
	        return;
	      }

	      log.info(MOD$7, `Enriching ${needsEnrich.length} channels...`);

	      const results = await fetchChannelDetailsBatch(needsEnrich, (done, total) => {
	        setEnrichmentStatus({ done, total });
	      });

	      // Update metadata without restoring deleted channels or old memberships.
	      if (results.size > 0) {
	        const patches = {};
	        for (const [chId, details] of results) {
	          const patch = { existingOnly: true };
	          const entry = channelMapRef.current[chId];
	          if (details.name && entry && (!entry.name || entry.name === chId || entry.name.startsWith('UC'))) patch.name = details.name;
	          if (details.avatar) patch.avatar = details.avatar;
	          patches[chId] = patch;
	        }
	        await checkedSend('PATCH_CHANNEL_MAP', { changes: patches });
	      }

	      setEnrichmentStatus({ done: needsEnrich.length, total: needsEnrich.length });
	    } catch (err) {
	      log.error(MOD$7, 'Enrichment failed', err.message);
	      setEnrichmentStatus(null);
	    } finally {
	      enrichingRef.current = false;
	    }
	  }, []);

	  // Auto-enrich after initial load (3s delay to not block UI)
	  reactExports.useEffect(() => {
	    if (loading) return;
	    const timer = setTimeout(() => {
	      enrichChannels(false);
	    }, 3000);
	    return () => clearTimeout(timer);
	  }, [loading, enrichChannels]);

	  return {
	    groups, channelMap, settings, watchedVideos, loading,
	    enrichmentStatus, enrichChannels, localizedGroupName,
	    updateGroups, updateChannelMap, updateSettings, toggleWatched,
	  };
	}

	const GroupsContext = reactExports.createContext(null);
	function GroupsProvider({ children }) {
	  const store = useStorageSync();
	  return /* @__PURE__ */ jsxRuntimeExports.jsx(GroupsContext.Provider, { value: store, children });
	}
	function useGroups() {
	  const ctx = reactExports.useContext(GroupsContext);
	  if (!ctx) throw new Error("useGroups must be used within GroupsProvider");
	  return ctx;
	}

	const MOD$6 = "Sidebar";
	function countGroupChannels(group, channelMap) {
	  let count = 0;
	  for (const entry of Object.values(channelMap)) {
	    if (entry.groups?.includes(group.id)) count++;
	  }
	  return count;
	}
	function flattenGroups(groups, depth = 0) {
	  const result = [];
	  for (const g of groups) {
	    result.push({ ...g, depth });
	    if (g.children?.length > 0) {
	      result.push(...flattenGroups(g.children, depth + 1));
	    }
	  }
	  return result;
	}
	function parseCsvLine(line) {
	  const out = [];
	  let cur = "";
	  let inQ = false;
	  for (let i = 0; i < line.length; i++) {
	    const c = line[i];
	    if (inQ) {
	      if (c === '"') {
	        if (line[i + 1] === '"') { cur += '"'; i++; } else inQ = false;
	      } else cur += c;
	    } else if (c === '"') inQ = true;
	    else if (c === ",") { out.push(cur); cur = ""; }
	    else cur += c;
	  }
	  out.push(cur);
	  return out;
	}
	function parseTakeoutSubscriptionsCsv(text) {
	  const rows = [];
	  const seen = new Set();
	  let header = null;
	  let idIndex = -1, nameIndex = -1, handleIndex = -1, urlIndex = -1;
	  const normalize = value => String(value || "").trim().replace(/^\uFEFF/, "").toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	  const isUrl = value => /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\//i.test(String(value || "").trim());
	  for (const line of String(text || "").replace(/^\uFEFF/, "").split(/\r?\n/)) {
	    if (!line.trim()) continue;
	    const cols = parseCsvLine(line);
	    const labels = cols.map(normalize);
	    if (!header && labels.some(label => ["channel id", "channel name", "channel title", "channel url", "channel handle"].includes(label))) {
	      header = labels;
	      idIndex = labels.findIndex(label => label === "channel id");
	      nameIndex = labels.findIndex(label => ["channel name", "channel title"].includes(label));
	      handleIndex = labels.findIndex(label => label === "channel handle");
	      urlIndex = labels.findIndex(label => label === "channel url");
	      continue;
	    }
	    const idCell = idIndex >= 0 ? String(cols[idIndex] || "").trim() : "";
	    const idMatch = idCell.match(/UC[\w-]{22}/) || line.match(/UC[\w-]{22}/);
	    if (!idMatch) continue;
	    const id = idMatch[0];
	    if (seen.has(id)) continue;
	    seen.add(id);
	    let name = nameIndex >= 0 ? String(cols[nameIndex] || "").trim() : "";
	    if (!name || name === id || isUrl(name) || /^(?:UC[\w-]{22})$/.test(name)) {
	      name = "";
	      for (let i = 0; i < cols.length; i++) {
	        const candidate = String(cols[i] || "").trim();
	        if (!candidate || i === idIndex || i === urlIndex || i === handleIndex || isUrl(candidate) || /^UC[\w-]{22}$/.test(candidate)) continue;
	        name = candidate;
	        break;
	      }
	    }
	    rows.push({ id, name: name || id });
	  }
	  return rows;
	}
	function visibleGroups(groups, expanded, depth = 0) {
	  return groups.flatMap(group => [
	    { ...group, depth },
	    ...(group.children?.length && expanded[group.id] ? visibleGroups(group.children, expanded, depth + 1) : [])
	  ]);
	}
	function SidebarSection({ onOpenFeed, onOpenDashboard }) {
	  const { groups, channelMap, loading, localizedGroupName } = useGroups();
	  const [expanded, setExpanded] = reactExports.useState(true);
	  const [expandedGroups, setExpandedGroups] = reactExports.useState({});
	  const handleGroupClick = reactExports.useCallback((group) => {
	    log.info(MOD$6, `Group clicked: ${group.name} (${group.id})`);
	    onOpenFeed?.(group);
	  }, [onOpenFeed]);
	  if (loading) return null;
	  const sidebarGroups = visibleGroups(groups, expandedGroups);
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `ytsm-reset ytsm-sidebar-section ${expanded ? "expanded" : ""}`, children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "div",
	      {
	        className: "ytsm-sidebar-header",
	        onClick: () => setExpanded(!expanded),
	        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-sidebar-header-left", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "ytsm-sidebar-chevron", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 10l5 5 5-5z" }) }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-sidebar-title", children: "Chanopy" })
	        ] })
	      }
	    ),
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-sidebar-groups", children: [
	      sidebarGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
	        "div",
	        {
	          className: "ytsm-sidebar-tree-row",
	          style: { "--ytsm-group-depth": group.depth },
	          children: [
	            group.children?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
	              className: `ytsm-sidebar-disclosure ${expandedGroups[group.id] ? "expanded" : ""}`,
	              type: "button",
	              "aria-label": window.__tsT ? window.__tsT(expandedGroups[group.id] ? "Collapse subgroups" : "Expand subgroups") : (expandedGroups[group.id] ? "Collapse subgroups" : "Expand subgroups"),
	              "aria-expanded": !!expandedGroups[group.id],
	              onClick: (event) => { event.stopPropagation(); setExpandedGroups((state) => ({ ...state, [group.id]: !state[group.id] })); },
	              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 6l6 6-6 6z" }) })
	            }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-sidebar-disclosure-space", "aria-hidden": true }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
	              className: "ytsm-sidebar-group-item",
	              type: "button",
	              "data-depth": group.depth,
	              onClick: () => handleGroupClick(group),
	              children: [
	                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ytsm-group-icon ${group.iconType === "emoji" ? "emoji" : ""}`, children: group.icon || localizedGroupName(group).charAt(0).toUpperCase() }),
	                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-group-name", children: localizedGroupName(group) }),
	                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-group-count", children: countGroupChannels(group, channelMap) })
	              ]
	            })
	          ]
	        },
	        group.id
	      )),
	      /* @__PURE__ */ jsxRuntimeExports.jsxs(
	        "button",
	        {
	          className: "ytsm-sidebar-add-btn",
	          onClick: () => onOpenDashboard?.(),
	          children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) }),
	            "Manage Groups"
	          ]
	        }
	      )
	    ] })
	  ] });
	}

	function VideoCard({ video, watched, onToggleWatched }) {
	  const thumbnail = video.thumbnail || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;
	  const duration = formatDuration(video.duration);
	  const views = formatViews(video.viewCount);
	  const timeAgo = formatTimeAgo(video.publishedAt);
	  const handleClick = (e) => {
	    if (e.target.closest(".ytsm-video-watched-btn")) return;
	    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank");
	  };
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-video-card", onClick: handleClick, children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-video-thumb-wrapper", children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsx(
	        "img",
	        {
	          src: thumbnail,
	          alt: video.title,
	          loading: "lazy"
	        }
	      ),
	      duration && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-video-duration", children: duration }),
	      video.isLive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-video-duration", style: { background: "#c00" }, children: "LIVE" }),
	      onToggleWatched && /* @__PURE__ */ jsxRuntimeExports.jsx(
	        "button",
	        {
	          className: `ytsm-video-watched-btn ${watched ? "watched" : ""}`,
	          onClick: (e) => {
	            e.stopPropagation();
	            onToggleWatched(video.videoId);
	          },
	          title: watched ? "Mark as unwatched" : "Mark as watched",
	          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }) })
	        }
	      )
	    ] }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "a",
	      {
	        className: "ytsm-video-title",
	        href: `https://www.youtube.com/watch?v=${video.videoId}`,
	        onClick: (e) => e.stopPropagation(),
	        title: video.title,
	        children: video.title
	      }
	    ),
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-video-meta", children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsx(
	        "a",
	        {
	          className: "ytsm-video-channel-link",
	          href: video.channelId ? `https://www.youtube.com/channel/${video.channelId}` : "#",
	          onClick: (e) => e.stopPropagation(),
	          children: video.channelName || "Unknown Channel"
	        }
	      ),
	      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
	        " • ",
	        views
	      ] }),
	      timeAgo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
	        " • ",
	        timeAgo
	      ] })
	    ] })
	  ] });
	}
	function VideoCardSkeleton() {
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-video-card", children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-skeleton ytsm-skeleton-thumb" }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-skeleton ytsm-skeleton-text" }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-skeleton ytsm-skeleton-text-sm" })
	  ] });
	}

	const MOD$5 = "GroupFeed";
	function GroupFeed({ group, onClose, onSwitchGroup }) {
	  const { groups, channelMap, watchedVideos, toggleWatched, settings, localizedGroupName } = useGroups();
	  const [videos, setVideos] = reactExports.useState([]);
	  const [loading, setLoading] = reactExports.useState(true);
	  const [error, setError] = reactExports.useState(null);
	  const [showDropdown, setShowDropdown] = reactExports.useState(false);
	  const [gridCols, setGridCols] = reactExports.useState(settings.defaultGridColumns || 4);
	  const dropdownRef = reactExports.useRef(null);
	  const channelMapRef = reactExports.useRef(channelMap);
	  channelMapRef.current = channelMap;
	  const channelIdsKey = Object.entries(channelMap).filter(([, entry]) => entry.groups?.includes(group.id)).map(([id]) => id).sort().join("\n");
	  const getGroupChannelIds = reactExports.useCallback((g) => {
	    const ids = [];
	    for (const [chId, entry] of Object.entries(channelMap)) {
	      if (entry.groups?.includes(g.id)) {
	        ids.push(chId);
	      }
	    }
	    return ids;
	  }, []);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    setLoading(true);
	    setError(null);
	    setVideos([]);
	    async function fetchVideos() {
	      const channelIds = getGroupChannelIds(group);
	      log.info(MOD$5, `Fetching videos for "${group.name}" (${channelIds.length} channels)`);
	      if (channelIds.length === 0) {
	        setLoading(false);
	        setError("No channels in this group. Add channels from channel pages or the Dashboard.");
	        return;
	      }
	      try {
	        const maxPerCh = Math.max(5, Math.ceil((settings.defaultFetchVolume || 100) / channelIds.length));
	        const result = await getGroupVideos(channelIds, channelMapRef.current, maxPerCh);
	        if (!cancelled) {
	          setVideos(result);
	          setLoading(false);
	          log.info(MOD$5, `Loaded ${result.length} videos for "${group.name}"`);
	        }
	      } catch (err) {
	        if (!cancelled) {
	          setError(`Failed to load videos: ${err.message}`);
	          setLoading(false);
	          log.error(MOD$5, `Feed fetch failed for "${group.name}"`, err);
	        }
	      }
	    }
	    fetchVideos();
	    return () => {
	      cancelled = true;
	    };
	  }, [group, channelIdsKey, getGroupChannelIds, settings.defaultFetchVolume]);
	  reactExports.useEffect(() => {
	    const handleKey = (e) => {
	      if (e.key === "Escape") {
	        if (showDropdown) setShowDropdown(false);
	        else onClose?.();
	      }
	    };
	    document.addEventListener("keydown", handleKey);
	    return () => document.removeEventListener("keydown", handleKey);
	  }, [onClose, showDropdown]);
	  reactExports.useEffect(() => {
	    const handleClick = (e) => {
	      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
	        setShowDropdown(false);
	      }
	    };
	    if (showDropdown) document.addEventListener("mousedown", handleClick);
	    return () => document.removeEventListener("mousedown", handleClick);
	  }, [showDropdown]);
	  const allGroups = flattenGroups(groups);
	  const colsClass = `cols-${gridCols}`;
	  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-reset ytsm-overlay open", onClick: (e) => {
	    if (e.target === e.currentTarget) onClose?.();
	  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-feed-container", style: {
	    position: "fixed",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    background: "var(--ytsm-bg-primary)",
	    zIndex: 1e4,
	    overflow: "auto"
	  }, children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-feed-topbar", children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-feed-close-btn", onClick: onClose, title: "Close (ESC)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }) }) }),
	      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-feed-group-switcher", ref: dropdownRef, children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsxs(
	          "button",
	          {
	            className: "ytsm-feed-group-name-btn",
	            onClick: () => setShowDropdown(!showDropdown),
	            children: [
	              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-feed-group-name-text", style: { minWidth: "max-content" }, children: localizedGroupName(group) }),
	              /* @__PURE__ */ jsxRuntimeExports.jsx(
	                "svg",
	                {
	                  className: "ytsm-feed-group-chevron",
	                  width: "20",
	                  height: "20",
	                  viewBox: "0 0 24 24",
	                  style: { transform: showDropdown ? "rotate(180deg)" : "none" },
	                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 10l5 5 5-5z" })
	                }
	              )
	            ]
	          }
	        ),
	        showDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-feed-group-dropdown visible", children: allGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
	          "div",
	          {
	            className: `ytsm-feed-group-dropdown-item ${g.id === group.id ? "active" : ""}`,
	            onClick: () => {
	              setShowDropdown(false);
	              if (g.id !== group.id) onSwitchGroup?.(g);
	            },
	            children: [
	              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizedGroupName(g) }),
	              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--ytsm-text-disabled)" }, children: [
	                getGroupChannelIds(g).length,
	                " ch"
	              ] })
	            ]
	          },
	          g.id
	        )) })
	      ] }),
	      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: "auto", display: "flex", gap: 8 }, children: [4, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
	        "button",
	        {
	          className: `ytsm-btn ytsm-btn-sm ${gridCols === n ? "ytsm-btn-primary" : "ytsm-btn-secondary"}`,
	          onClick: () => setGridCols(n),
	          children: [
	            n,
	            " cols"
	          ]
	        },
	        n
	      )) })
	    ] }),
	    !loading && !error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 24px 16px", fontSize: 14, color: "var(--ytsm-text-secondary)" }, children: [
	      videos.length,
	      " videos from ",
	      getGroupChannelIds(group).length,
	      " channels"
	    ] }),
	    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "40px 24px", textAlign: "center", color: "var(--ytsm-text-secondary)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 16 }, children: error }) }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 24px 24px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `ytsm-video-grid ${colsClass}`, children: [
	      loading && Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCardSkeleton, {}, i)),
	      !loading && videos.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsx(
	        VideoCard,
	        {
	          video,
	          watched: !!watchedVideos[video.videoId],
	          onToggleWatched: toggleWatched
	        },
	        video.videoId
	      ))
	    ] }) })
	  ] }) });
	}
	const EMOJI_CATEGORIES = {
	  "Smileys": ["😀", "😎", "🤓", "🔥", "⭐", "💡", "❤️", "💪", "🎯", "🚀"],
	  "Tech": ["💻", "🖥️", "⌨️", "🎮", "📱", "🔧", "⚙️", "🤖", "🧠", "📡"],
	  "Media": ["🎬", "🎵", "📺", "🎨", "📸", "🎙️", "📻", "🎧", "🎭", "📰"],
	  "Nature": ["🌍", "🌊", "🌲", "🌸", "🐱", "🐕", "🦊", "🐸", "🦅", "🌙"],
	  "Objects": ["💰", "💎", "🏆", "🎓", "📚", "✏️", "🔬", "🧪", "⚡", "🛡️"],
	  "Symbols": ["✅", "❌", "⚠️", "💬", "🏷️", "📌", "🔖", "🏁", "♻️", "🔔"]
	};
	function EmojiPicker({ onSelect, onClose }) {
	  const [activeCategory, setActiveCategory] = reactExports.useState("Smileys");
	  const pickerRef = reactExports.useRef(null);
	  reactExports.useEffect(() => {
	    const handleClick = (e) => {
	      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
	        onClose?.();
	      }
	    };
	    document.addEventListener("mousedown", handleClick);
	    return () => document.removeEventListener("mousedown", handleClick);
	  }, [onClose]);
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-emoji-picker", ref: pickerRef, children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-emoji-categories", children: Object.keys(EMOJI_CATEGORIES).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "button",
	      {
	        className: `ytsm-emoji-cat-btn ${activeCategory === cat ? "active" : ""}`,
	        onClick: () => setActiveCategory(cat),
	        title: cat,
	        children: EMOJI_CATEGORIES[cat][0]
	      },
	      cat
	    )) }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-emoji-grid", children: EMOJI_CATEGORIES[activeCategory].map((emoji) => /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "button",
	      {
	        className: "ytsm-emoji-btn",
	        onClick: () => {
	          onSelect?.(emoji);
	          onClose?.();
	        },
	        children: emoji
	      },
	      emoji
	    )) }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "button",
	      {
	        className: "ytsm-emoji-clear-btn",
	        onClick: () => {
	          onSelect?.(null);
	          onClose?.();
	        },
	        children: "Reset to letter"
	      }
	    )
	  ] });
	}

	const MOD$4 = "Dashboard";
	const SIDEBAR_POSITIONS = [
	  { value: "after-home", label: "After Home & Shorts" },
	  { value: "after-subscriptions", label: "After Subscriptions" },
	  { value: "after-you", label: "After You (History/Playlists)" },
	  { value: "before-explore", label: "Before Explore" },
	  { value: "after-explore", label: "After Explore" },
	  { value: "bottom", label: "Bottom (default)" }
	];

	function editGroupTree(list, id, edit) {
	  return list.map(g => g.id === id ? edit(g) : { ...g, children: editGroupTree(g.children || [], id, edit) });
	}
	function moveGroupRelative(list, sourceId, targetId, after = false) {
	  if (sourceId === targetId) return list;
	  const contains = (node, id) => node.id === id || (node.children || []).some(child => contains(child, id));
	  let moved = null;
	  const remove = nodes => nodes.flatMap(node => {
	    if (node.id === sourceId) { moved = node; return []; }
	    return [{ ...node, children: remove(node.children || []) }];
	  });
	  const sourceContainsTarget = nodes => nodes.some(node => node.id === sourceId ? contains(node, targetId) : sourceContainsTarget(node.children || []));
	  if (sourceContainsTarget(list)) return list;
	  const withoutSource = remove(list);
	  if (!moved) return list;
	  let inserted = false;
	  const insert = nodes => {
	    const result = [];
	    for (const node of nodes) {
	      if (node.id === targetId) {
	        if (!after) result.push(moved);
	        result.push(node);
	        if (after) result.push(moved);
	        inserted = true;
	      } else result.push({ ...node, children: insert(node.children || []) });
	    }
	    return result;
	  };
	  const result = insert(withoutSource);
	  return inserted ? result : list;
	}
	function Dashboard({ onClose }) {
	  const { groups, channelMap, settings, updateGroups, updateChannelMap, updateSettings, enrichChannels, enrichmentStatus, localizedGroupName } = useGroups();
	  const [activeTab, setActiveTab] = reactExports.useState("channels");
	  const [workspaceGroup, setWorkspaceGroup] = reactExports.useState(null);
	  const [visibleCount, setVisibleCount] = reactExports.useState(100);
	  const [workspaceGroupsCollapsed, setWorkspaceGroupsCollapsed] = reactExports.useState(false);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    StorageAPI.localGet(["workspaceGroupsCollapsed"]).then(stored => {
	      if (!cancelled && typeof stored.workspaceGroupsCollapsed === "boolean") setWorkspaceGroupsCollapsed(stored.workspaceGroupsCollapsed);
	    }).catch(() => {});
	    return () => { cancelled = true; };
	  }, []);
	  const workspaceGroups = reactExports.useMemo(() => flattenGroups(groups), [groups]);
	  const [expandedWorkspaceGroups, setExpandedWorkspaceGroups] = reactExports.useState({});
	  const [expandedManagementGroups, setExpandedManagementGroups] = reactExports.useState({});
	  const [selectedManagementGroup, setSelectedManagementGroup] = reactExports.useState(() => groups[0]?.id || null);
	  const navigationGroups = reactExports.useMemo(() => visibleGroups(groups, expandedWorkspaceGroups), [groups, expandedWorkspaceGroups]);
	  const managementGroups = reactExports.useMemo(() => visibleGroups(groups, expandedManagementGroups), [groups, expandedManagementGroups]);
	  reactExports.useEffect(() => {
	    if (!workspaceGroups.some(g => g.id === selectedManagementGroup)) setSelectedManagementGroup(workspaceGroups[0]?.id || null);
	  }, [groups, selectedManagementGroup]);
	  reactExports.useEffect(() => {
	    if (workspaceGroup && workspaceGroup !== "ungrouped" && !workspaceGroups.some(g => g.id === workspaceGroup)) setWorkspaceGroup(null);
	  }, [groups, workspaceGroup]);
	  const [newGroupName, setNewGroupName] = reactExports.useState("");
	  const [searchQuery, setSearchQuery] = reactExports.useState("");
	  const [channelSort, setChannelSort] = reactExports.useState("name-asc");
	  const [activityFilter, setActivityFilter] = reactExports.useState("all");
	  reactExports.useEffect(() => { setVisibleCount(100); }, [workspaceGroup, searchQuery, channelSort, activityFilter]);
	  const [importStatus, setImportStatus] = reactExports.useState(null);
	  const [emojiPickerGroup, setEmojiPickerGroup] = reactExports.useState(null);
	  const fileInputRef = reactExports.useRef(null);
	  const [activityMap, setActivityMap] = reactExports.useState({});
	  const [auditState, setAuditState] = reactExports.useState({ running: false, done: 0, total: 0 });
	  const [auditMsg, setAuditMsg] = reactExports.useState(null);
	  const [autoState, setAutoState] = reactExports.useState({ running: false, msg: "", undo: false, replaceUndo: false });
	  reactExports.useEffect(() => {
	    StorageAPI.localGet(["autoGroupUndo", "catalogReplaceUndo"]).then((r) => setAutoState((st) => ({ ...st, undo: !!(r && r.autoGroupUndo), replaceUndo: !!(r && r.catalogReplaceUndo) }))).catch(() => {});
	  }, []);
	  const [selectedChannels, setSelectedChannels] = reactExports.useState({});
	  const [unsubState, setUnsubState] = reactExports.useState({ running: false, done: 0, total: 0 });
	  const auditCancelRef = reactExports.useRef(false);
	  const [inactiveSel, setInactiveSel] = reactExports.useState(false);
	  const lastInactiveRef = reactExports.useRef([]);
	  const [shareInput, setShareInput] = reactExports.useState("");
	  const [shareLoading, setShareLoading] = reactExports.useState(false);
	  const subFileRef = reactExports.useRef(null);
	  const [unsubLog, setUnsubLog] = reactExports.useState([]);
	  const [unsubSearch, setUnsubSearch] = reactExports.useState("");
	  const [showHistory, setShowHistory] = reactExports.useState(false);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    StorageAPI.localGet(["activityAudit"]).then((stored) => {
	      if (!cancelled && stored && stored.activityAudit) setActivityMap(stored.activityAudit);
	    }).catch(() => {});
	    return () => { cancelled = true; };
	  }, []);
	  reactExports.useEffect(() => {
	    if (!showHistory) return;
	    StorageAPI.localGet(["unsubHistory"]).then((stored) => {
	      setUnsubLog((stored && stored.unsubHistory) || []);
	    }).catch(() => {});
	  }, [showHistory]);
	  reactExports.useEffect(() => {
	    setShowHistory(false);
	  }, [activeTab]);
	  const exportUnsubCsv = () => {
	    if (!unsubLog.length) return;
	    const esc = (s) => '"' + String(s).replace(/"/g, '""') + '"';
	    const lines = ["Name,Channel ID,URL,Groups,Date"];
	    unsubLog.forEach((j) => {
	      lines.push([esc(j.name || j.id), esc(j.id), esc("https://www.youtube.com/channel/" + j.id), esc((j.groupNames || j.groups || []).join("; ")), esc(j.date || "")].join(","));
	    });
	    const blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
	    const url = URL.createObjectURL(blob);
	    const a = document.createElement("a");
	    a.href = url;
	    a.download = "chanopy-unsubscribed.csv";
	    a.click();
	    setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 10000);
	  };
	  const clearUnsubLog = () => {
	    if (!confirm(window.__tsT ? window.__tsT("Clear unsubscribe history?") : "Clear unsubscribe history?")) return;
	    checkedSend('CLEAR_UNSUB_HISTORY').then(() => setUnsubLog([])).catch((err) => setAuditMsg(err.message));
	  };
	  const tsSleep = (ms) => new Promise((r) => setTimeout(r, ms));
	  const tsRelative = (iso) => {
	    const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
	    try {
	      const rt = new Intl.RelativeTimeFormat(window.__tsLang || "uk", { numeric: "auto" });
	      if (days >= 365) return rt.format(-Math.round(days / 365), "year");
	      if (days >= 30) return rt.format(-Math.round(days / 30), "month");
	      return rt.format(-Math.max(days, 1), "day");
	    } catch (e) { return days + " d"; }
	  };
	  const tsFormatLocale = (template, values) => String(template || "").replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
  const tsAuditLabels = async () => {
    let lang = window.__tsLang || "uk";
    try { const stored = await StorageAPI.localGet(["tsLang"]); if (stored?.tsLang) lang = stored.tsLang; } catch (e) {}
    const data = globalThis.TUBESTACK_LOCALES.audit;
    const L = data[lang] || data.uk || data.en;
    return {
      conf: n => n === 1 ? L.confirmOne : tsFormatLocale(L.confirmMany, { count: n }),
      done: (unsubscribed, failed, removed) => tsFormatLocale(L.done, { unsubscribed, failed }) + (removed ? tsFormatLocale(L.removed, { removed }) : ""),
      sum: (inactive, deleted) => tsFormatLocale(L.sum, { inactive, deleted }),
      more: count => tsFormatLocale(L.more, { count })
    };
  };
  const TS_DEAD_CONFIRM_MS = 6 * 3600 * 1000;
	  const tsDeadConfirmed = (a) => !!(a && a.dead && (a.deadRuns || 1) >= 2);
	  // YouTube's feed endpoint intermittently answers 404/5xx for live channels (documented since Dec 2025),
	  // so a single 404 is not evidence: retry, then re-check in a second pass, then require a second run hours later.
	  const tsFetchFeed = async (id) => {
	    let status = 0;
	    for (let k = 0; k < 3; k++) {
	      try {
	        const resp = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}`, { cache: "no-store" });
	        status = resp.status;
	        if (resp.ok) return { status, text: await resp.text(), tries: k + 1 };
	        if (status === 429) return { status, text: "", tries: k + 1 };
	      } catch (e) { status = 0; }
	      if (k < 2) await tsSleep(1200 * (k + 1));
	    }
	    return { status, text: "", tries: 3 };
	  };
	  const runActivityAudit = async () => {
	    if (auditState.running) return;
	    const ids = Object.keys(channelMap);
	    if (!ids.length) return;
	    auditCancelRef.current = false;
	    setAuditState({ running: true, done: 0, total: ids.length });
	    const fresh = { ...activityMap };
	    let stale = 0, rateLimited = false;
	    const missing = [];
	    const store = (id, r) => {
	      const now = Date.now();
	      if (r.status === 429) return "429";
	      if (r.status === 404) return "404";
	      if (r.status >= 200 && r.status < 300) {
	        const doc = new DOMParser().parseFromString(r.text, "application/xml");
	        const entry = doc.querySelector("entry");
	        if (entry) {
	          const last = entry.querySelector("published")?.textContent || "";
	          const title = entry.querySelector("title")?.textContent || "";
	          fresh[id] = { last, title, dead: false, checkedAt: now };
	          if (last && (now - new Date(last).getTime()) / 86400000 > 730) stale++;
	        } else fresh[id] = { empty: true, checkedAt: now };
	        return "ok";
	      }
	      fresh[id] = activityMap[id] ? { ...activityMap[id], err: true, checkedAt: now } : { err: true, checkedAt: now };
	      return "err";
	    };
	    const markMissing = (id) => {
	      const now = Date.now();
	      const prev = activityMap[id];
	      let runs = 1, at = now;
	      if (prev && prev.dead) {
	        const since = prev.deadAt || prev.checkedAt || 0;
	        const r0 = prev.deadRuns || 1;
	        if (now - since >= TS_DEAD_CONFIRM_MS) { runs = r0 + 1; at = now; } else { runs = r0; at = since; }
	      }
	      fresh[id] = { dead: true, deadRuns: runs, deadAt: at, checkedAt: now };
	    };
	    for (let i = 0; i < ids.length; i++) {
	      if (auditCancelRef.current) break;
	      const id = ids[i];
	      if (!/^UC[\w-]{22}$/.test(id)) continue;
	      let r = await tsFetchFeed(id);
	      if (r.status === 429) {
	        await tsSleep(30000);
	        r = await tsFetchFeed(id);
	        if (r.status === 429) { auditCancelRef.current = true; rateLimited = true; break; }
	      }
	      if (store(id, r) === "404") missing.push(id);
	      if (r.tries > 1) await tsSleep(1500);
	      setActivityMap({ ...fresh });
	      setAuditState({ running: true, done: i + 1, total: ids.length });
	      await checkedSend('PATCH_ACTIVITY_AUDIT', { changes: { [id]: fresh[id] } });
	      await tsSleep(350);
	    }
	    // second pass: channels whose feed stayed 404 are re-checked after a pause
	    if (!auditCancelRef.current && missing.length) {
	      await tsSleep(15000);
	      for (const id of missing) {
	        if (auditCancelRef.current) break;
	        const r = await tsFetchFeed(id);
	        if (r.status === 429) { auditCancelRef.current = true; rateLimited = true; break; }
	        if (store(id, r) === "404") {
	          markMissing(id);
	          await checkedSend('PATCH_ACTIVITY_AUDIT', { changes: { [id]: fresh[id] } });
	        } else if (fresh[id]) await checkedSend('PATCH_ACTIVITY_AUDIT', { changes: { [id]: fresh[id] } });
	        await tsSleep(600);
	      }
	    }
	    setActivityMap({ ...fresh });
	    setAuditState({ running: false, done: 0, total: 0 });
	    const confirmedDead = ids.filter((id) => tsDeadConfirmed(fresh[id])).length;
	    const unconfirmed = missing.filter((id) => fresh[id] && fresh[id].dead && !tsDeadConfirmed(fresh[id])).length;
	    const lb = await tsAuditLabels();
	    const t404 = window.__tsT ? window.__tsT("Feed unavailable (404), re-check later") : "Feed unavailable (404), re-check later";
	    setAuditMsg(lb.sum(stale, confirmedDead) + (unconfirmed ? " \u00B7 " + unconfirmed + " \u00D7 " + t404 : "") + (rateLimited ? " \u00B7 HTTP 429: stopped" : ""));
	  };
	  const tsT = (k) => (window.__tsT ? window.__tsT(k) : k);
	  const tsSendBg = (msg) => new Promise((resolve) => {
	    try {
	      chrome.runtime.sendMessage(msg, (resp) => {
	        if (chrome.runtime.lastError) resolve({ success: false, error: chrome.runtime.lastError.message });
	        else resolve(resp || { success: false, error: "no-response" });
	      });
	    } catch (e) { resolve({ success: false, error: String(e) }); }
	  });
	  const tsAgLabels = async () => {
    const data = globalThis.TUBESTACK_LOCALES.autoGroup;
    const L = data[window.__tsLang || "uk"] || data.uk || data.en;
    return {
      done: values => tsFormatLocale(L.done, values),
      none: L.none,
      undone: values => tsFormatLocale(L.undone, values),
      err: error => tsFormatLocale(L.error, { error }),
      replaceConfirm: values => tsFormatLocale(L.replaceConfirm, values),
      replaceDone: values => tsFormatLocale(L.replaceDone, values),
      replaceUndone: L.replaceUndone,
      replaceStateChanged: L.replaceStateChanged,
      replaceNoMatches: L.replaceNoMatches
    };
  };
	  const runAutoGroup = async () => {
	    if (autoState.running) return;
	    setAutoState((st) => ({ ...st, running: true, msg: "" }));
	    const r = await tsSendBg({ type: "TS_AUTOGROUP" });
	    const lb = await tsAgLabels();
	    if (!r.success) { setAutoState((st) => ({ ...st, running: false, msg: lb.err(r.error) })); return; }
	    setAutoState((st) => ({ ...st, running: false, msg: r.targeted ? lb.done(r) : lb.none, undo: r.assigned > 0 ? true : st.undo }));
	  };
	  const runAutoUndo = async () => {
	    if (autoState.running) return;
	    setAutoState((st) => ({ ...st, running: true, msg: "" }));
	    const r = await tsSendBg({ type: "TS_AUTOGROUP_UNDO" });
	    const lb = await tsAgLabels();
	    if (!r.success) {
	      setAutoState((st) => ({ ...st, running: false, msg: r.error === "nothing-to-undo" ? "" : lb.err(r.error), undo: r.error === "nothing-to-undo" ? false : st.undo }));
	      return;
	    }
	    setAutoState((st) => ({ ...st, running: false, msg: lb.undone(r), undo: false }));
	  };
	  const runCatalogReplacement = async () => {
	    if (autoState.running) return;
	    setAutoState(st => ({ ...st, running: true, msg: "" }));
	    const lb = await tsAgLabels();
	    const preview = await tsSendBg({ type: "TS_CATALOG_PREVIEW" });
	    if (!preview.success) { setAutoState(st => ({ ...st, running: false, msg: lb.err(preview.error) })); return; }
	    if (!preview.matched) { setAutoState(st => ({ ...st, running: false, msg: lb.replaceNoMatches })); return; }
	    const message = lb.replaceConfirm({ matched: preview.matched, grouped: preview.legacyMemberships });
	    if (!confirm(message)) { setAutoState(st => ({ ...st, running: false })); return; }
	    const result = await tsSendBg({ type: "TS_CATALOG_REPLACE" });
	    if (!result.success) { setAutoState(st => ({ ...st, running: false, msg: lb.err(result.error) })); return; }
	    setAutoState(st => ({ ...st, running: false, msg: lb.replaceDone(result), undo: false, replaceUndo: true }));
	  };
	  const runCatalogReplacementUndo = async () => {
	    if (autoState.running) return;
	    setAutoState(st => ({ ...st, running: true, msg: "" }));
	    const result = await tsSendBg({ type: "TS_CATALOG_REPLACE_UNDO" });
	    const lb = await tsAgLabels();
	    if (!result.success) {
	      setAutoState(st => ({ ...st, running: false, msg: result.error === "state-changed" ? lb.replaceStateChanged : lb.err(result.error), replaceUndo: result.error === "nothing-to-undo" ? false : st.replaceUndo }));
	      return;
	    }
	    setAutoState(st => ({ ...st, running: false, msg: lb.replaceUndone, replaceUndo: false }));
	  };
	  const tsGetInnertube = async () => {
	    try {
	      const html = await fetch(location.origin + "/", { credentials: "same-origin" }).then((r) => r.text());
	      const key = (html.match(/"INNERTUBE_API_KEY":"([^"]+)"/) || [])[1];
	      const ver = (html.match(/"INNERTUBE_CONTEXT_CLIENT_VERSION":"([^"]+)"/) || [])[1] || "2.20240101.00.00";
	      return key ? { key, ver } : null;
	    } catch (e) { return null; }
	  };
	  const tsUnsubscribeOne = async (chId, cfg) => {
	    const t = Math.floor(Date.now() / 1000).toString();
	    const origin = location.origin;
	    const headers = { "Content-Type": "application/json", "X-Goog-AuthUser": "0", "X-Origin": origin, "X-Youtube-Client-Name": "1", "X-Youtube-Client-Version": cfg.ver, "X-Youtube-Bootstrap-Logged-In": "true" };
	    const tsHash = async (s) => {
	      const b = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(s));
	      return Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
	    };
	    try {
	      const cookies = document.cookie;
	      const variants = [
	        ["SAPISIDHASH", (cookies.match(/(?:^|;\s*)SAPISID=([^;]+)/) || [])[1]],
	        ["SAPISID1PHASH", (cookies.match(/(?:^|;\s*)__Secure-1PAPISID=([^;]+)/) || [])[1]],
	        ["SAPISID3PHASH", (cookies.match(/(?:^|;\s*)__Secure-3PAPISID=([^;]+)/) || [])[1]]
	      ];
	      const authParts = [];
	      for (const v of variants) {
	        if (!v[1]) continue;
	        authParts.push(v[0] + " " + t + "_" + (await tsHash(t + " " + v[1] + " " + origin)));
	      }
	      if (authParts.length) headers.Authorization = authParts.join(" ");
	      else { try { console.warn("[Chanopy] no SAPISID cookies visible to JS — unsubscribe may fail"); } catch (e) {} }
	    } catch (e) {}
	    const bodyObj = { context: { client: { clientName: "WEB", clientVersion: cfg.ver, hl: "uk" } }, channelIds: [chId] };
	    try {
	      return await new Promise((resolve) => {
	        try {
	          chrome.runtime.sendMessage({ type: "TS_UNSUB", key: cfg.key, headers, body: bodyObj }, (response) => {
	            if (chrome.runtime.lastError) resolve({ ok: false, status: 0, body: chrome.runtime.lastError.message });
	            else resolve(response || { ok: false, status: 0, body: "No response from extension service worker" });
	          });
	        } catch (e) { resolve({ ok: false, status: 0, body: String((e && e.message) || e) }); }
	      });
	    } catch (e) {
	      return { ok: false, status: 0, body: String((e && e.message) || e) };
	    }
	  };
	  const runUnsubscribe = async () => {
	    const ids = Object.keys(selectedChannels).filter((id) => selectedChannels[id]);
	    if (!ids.length || unsubState.running) return;
	    const lb = await tsAuditLabels();
	    const preStore = await StorageAPI.localGet(["channelMap"]);
	    const preMap = preStore.channelMap || {};
	    const gname = (gid) => { const g = groups.find((g2) => g2.id === gid); return g ? localizedGroupName(g) : gid; };
	    const journal = ids.map((id) => { const ent = preMap[id] || {}; const gr = ent.groups || []; return { id, name: ent.name || id, groups: gr, groupNames: gr.map(gname), date: new Date().toISOString() }; });
	    const names = journal.map((j) => j.name);
	    const shown = names.slice(0, 20).join("\n");
	    const namesBlock = "\n\n" + shown + (names.length > 20 ? "\n" + lb.more(names.length - 20) : "");
	    if (!confirm(lb.conf(ids.length) + namesBlock)) return;
	    setUnsubState({ running: true, done: 0, total: ids.length });
	    const cfg = await tsGetInnertube();
	    let ok = 0, fail = 0, firstErr = "";
	    const removedOk = [];
	    for (let i = 0; i < ids.length; i++) {
	      if (!cfg) { fail = ids.length - i; firstErr = "no INNERTUBE_API_KEY"; break; }
	      try {
	        const r = await tsUnsubscribeOne(ids[i], cfg);
	        if (r.ok) { ok++; removedOk.push(ids[i]); }
	        else {
	          fail++;
	          if (!firstErr) firstErr = "HTTP " + r.status;
	          try { console.error("[Chanopy] unsubscribe failed", ids[i], r.status, (r.body || "").slice(0, 300)); } catch (e) {}
	        }
	      } catch (e) { fail++; if (!firstErr) firstErr = String((e && e.message) || e); }
	      setUnsubState({ running: true, done: i + 1, total: ids.length });
	      await tsSleep(600);
	    }
	    if (removedOk.length) {
	      try {
	        const okSet0 = {};
	        removedOk.forEach((id) => { okSet0[id] = true; });
	        await checkedSend('APPEND_UNSUB_HISTORY', { entries: journal.filter((j) => okSet0[j.id]) });
	      } catch (e) {}
	      try {
	        await updateChannelMap(null, removedOk);
	        const storedA = await StorageAPI.localGet(["activityAudit"]);
	        const freshActivity = storedA.activityAudit || {};
	        removedOk.forEach((id) => { delete freshActivity[id]; });
	        setActivityMap({ ...freshActivity });
	        try { await StorageAPI.localSet({ activityAudit: freshActivity }); } catch (e) {}
	      } catch (e) { try { console.error("[Chanopy] post-unsubscribe cleanup failed", e); } catch (e2) {} }
	      try {
	        const okSet = {};
	        removedOk.forEach((id) => { okSet[id] = true; });
	        const doneJournal = journal.filter((j) => okSet[j.id]);
	        const d0 = new Date();
	        const pad0 = (n) => (n < 10 ? "0" : "") + n;
	        const blob = new Blob([JSON.stringify(doneJournal, null, 2)], { type: "application/json" });
	        const url = URL.createObjectURL(blob);
	        const a = document.createElement("a");
	        a.href = url;
	        a.download = "chanopy-unsubscribed-" + d0.getFullYear() + "-" + pad0(d0.getMonth() + 1) + "-" + pad0(d0.getDate()) + ".json";
	        document.documentElement.appendChild(a);
	        a.click();
	        a.remove();
	        setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e2) {} }, 10000);
	      } catch (e) {}
	    }
	    setUnsubState({ running: false, done: 0, total: 0 });
	    setSelectedChannels({});
	    lastInactiveRef.current = [];
	    setInactiveSel(false);
	    setAuditMsg(lb.done(ok, fail, removedOk.length) + (firstErr ? " \u00B7 " + firstErr : ""));
	  };
	  const toggleInactive = () => {
	    if (inactiveSel) {
	      const ids = lastInactiveRef.current.slice();
	      lastInactiveRef.current = [];
	      setInactiveSel(false);
	      setSelectedChannels((p) => {
	        const next = { ...p };
	        ids.forEach((id) => { delete next[id]; });
	        return next;
	      });
	      return;
	    }
	    const sel = {};
	    Object.keys(channelMap).forEach((id) => {
	      const a = activityMap[id];
	      if (a && (tsDeadConfirmed(a) || (a.last && (Date.now() - new Date(a.last).getTime()) > 730 * 86400000))) sel[id] = true;
	    });
	    lastInactiveRef.current = Object.keys(sel);
	    setSelectedChannels((p) => ({ ...p, ...sel }));
	    if (lastInactiveRef.current.length > 0) setInactiveSel(true);
	  };
	  const handleMoveGroupTo = (sourceGroupId, targetGroupId, after = false) => {
	    if (sourceGroupId === targetGroupId) return;
	    updateGroups(moveGroupRelative(groups, sourceGroupId, targetGroupId, after));
	  };
	  const handleSubImport = async (e) => {
	    const file = e.target.files && e.target.files[0];
	    if (!file) return;
	    try {
	      let text = await file.text();
	      if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
	      const rows = parseTakeoutSubscriptionsCsv(text);
	      if (!rows.length) {
	        setImportStatus({ type: "error", msg: "No channels found in the CSV" });
	        return;
	      }
	      const stored = await StorageAPI.localGet(["channelMap"]);
	      const current = stored.channelMap || {};
	      let added = 0, already = 0;
	      const changes = {};
	      for (const r of rows) {
	        if (current[r.id]) { already++; continue; }
	        changes[r.id] = { name: r.name, groups: [] };
	        added++;
	      }
	      await updateChannelMap(changes, []);
	      setImportStatus({ type: "success", msg: `Import complete! Added ${added} new, already present: ${already}` });
	    } catch (err) {
	      setImportStatus({ type: "error", msg: String((err && err.message) || err) });
	    } finally {
	      e.target.value = "";
	    }
	  };
	  const handleMoveChannelToGroup = async (chId, targetGroupId) => {
	    const stored = await StorageAPI.localGet(["channelMap"]);
	    const current = stored.channelMap || {};
	    const entry = current[chId];
	    if (!entry) return;
	    const gr = entry.groups || [];
	    if (gr.length === 1 && gr[0] === targetGroupId) return;
	    await updateChannelMap({ [chId]: { groups: [targetGroupId] } });
	    log.info(MOD$4, "Channel moved to group", chId, targetGroupId);
	  };
	  const parseShareHtml = (html) => {
	    let title = "Imported";
	    const channels = [];
	    try {
	      const doc = new DOMParser().parseFromString(html, "text/html");
	      title = (doc.title || "").trim().replace(/^you\w*tube groups\s*/i, "") || "Imported";
	      const seen = {};
	      const links = doc.querySelectorAll('li a[href*="youtube.com/channel/"]');
	      for (const a of links) {
	        const href = a.getAttribute("href") || "";
	        const m2 = href.match(/channel\/(UC[\w-]{22})/);
	        if (!m2 || seen[m2[1]]) continue;
	        seen[m2[1]] = true;
	        channels.push({ id: m2[1], name: (a.textContent || "").trim() });
	      }
	    } catch (e) {}
	    return { title, channels };
	  };
	  const handleShareImport = async () => {
	    if (shareLoading) return;
	    const val = shareInput.trim();
	    const m = val.match(/pockettube\.io\/share\?id=([\w-]+)/) || (val.match(/^[\w-]+$/) ? [null, val] : null);
	    if (!m) {
	      setImportStatus({ type: "error", msg: "Invalid PocketTube share link" });
	      return;
	    }
	    setShareLoading(true);
	    try {
	      const resp = await new Promise((resolve) => {
	        try {
	          chrome.runtime.sendMessage({ type: "TS_SHARE_FETCH", id: m[1] }, (r) => {
	            if (chrome.runtime.lastError) resolve(null);
	            else resolve(r || null);
	          });
	        } catch (e) { resolve(null); }
	      });
	      if (!resp || !resp.ok || !resp.html) {
	        setImportStatus({ type: "error", msg: "Failed to fetch share page" + (resp && resp.error ? " — " + resp.error : resp ? " (HTTP " + resp.status + ")" : "") });
	        return;
	      }
	      const parsed = parseShareHtml(resp.html);
	      if (!parsed.channels.length) {
	        setImportStatus({ type: "error", msg: "No channels found in the share page" });
	        return;
	      }
	      const groupName = parsed.title;
	      let gid = groups.find((g) => g.name.toLowerCase() === groupName.toLowerCase())?.id;
	      if (!gid) {
	        gid = "g_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
	        await updateGroups([...groups, { id: gid, name: groupName, children: [] }]);
	      }
	      const stored = await StorageAPI.localGet(["channelMap"]);
	      const current = stored.channelMap || {};
	      let added = 0, already = 0;
	      const changes = {};
	      for (const ch of parsed.channels) {
	        const ex = current[ch.id];
	        if (ex && (ex.groups || []).includes(gid)) { already++; continue; }
	        if (ex) changes[ch.id] = { groups: [...(ex.groups || []), gid] };
	        else { added++; changes[ch.id] = { name: ch.name, groups: [gid] }; }
	      }
	      await updateChannelMap(changes, []);
	      setImportStatus({ type: "success", msg: `Import complete! Added ${added}, already in group: ${already} — "${groupName}"` });
	    } catch (e) {
	      setImportStatus({ type: "error", msg: String((e && e.message) || e) });
	    } finally {
	      setShareLoading(false);
	    }
	  };
	  const handleCreateGroup = reactExports.useCallback(async () => {
	    const name = newGroupName.trim();
	    if (!name) return;
	    if (groups.some((g) => g.name.toLowerCase() === name.toLowerCase())) {
	      setImportStatus({ type: "error", msg: `Group "${name}" already exists` });
	      return;
	    }
	    const id = "g_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
	    const newGroup = { id, name, children: [] };
	    await updateGroups([...groups, newGroup]);
	    setNewGroupName("");
	    log.info(MOD$4, `Created group: ${name}`);
	  }, [newGroupName, groups, updateGroups]);
	  const handleDeleteGroup = reactExports.useCallback(async (groupId) => {
	    const confirmText = window.__tsT ? window.__tsT('Delete this group? Channels will not be removed.') : 'Delete this group? Channels will not be removed.';
	    if (!confirm(confirmText)) return;
	    await checkedSend('DELETE_GROUP', { groupId });
	  }, []);

	  const handleRenameGroup = reactExports.useCallback(async (groupId, newName) => {
	    const updated = editGroupTree(groups, groupId, g => ({ ...g, name: newName }));
	    await updateGroups(updated);
	  }, [groups, updateGroups]);
	  const handleSetGroupIcon = reactExports.useCallback(async (groupId, emoji) => {
	    const updated = editGroupTree(groups, groupId, (g) => {
	      if (emoji) {
	        return { ...g, icon: emoji, iconType: "emoji" };
	      } else {
	        const { icon, iconType, ...rest } = g;
	        return rest;
	      }
	    });
	    await updateGroups(updated);
	    setEmojiPickerGroup(null);
	  }, [groups, updateGroups]);
	  const channelEntries = Object.entries(channelMap).filter(([id, entry]) => {
	    if (workspaceGroup === "ungrouped" && entry.groups?.length) return false;
	    if (workspaceGroup && workspaceGroup !== "ungrouped" && !entry.groups?.includes(workspaceGroup)) return false;
	    if (searchQuery) {
	      const q = searchQuery.toLowerCase();
	      if (!id.toLowerCase().includes(q) && !(entry.name || "").toLowerCase().includes(q)) return false;
	    }
	    const activity = activityMap[id] || {};
	    const hasDate = !!(activity.last && Number.isFinite(new Date(activity.last).getTime()));
	    const ageDays = hasDate ? (Date.now() - new Date(activity.last).getTime()) / 86400000 : null;
	    if (activityFilter === "recent" && !(hasDate && ageDays >= 0 && ageDays <= 365 && !activity.dead && !activity.err)) return false;
	    if (activityFilter === "inactive" && !((hasDate && ageDays > 730) || tsDeadConfirmed(activity))) return false;
	    if (activityFilter === "nodate" && (hasDate || activity.dead || activity.err)) return false;
	    if (activityFilter === "unavailable" && !(activity.dead || activity.err)) return false;
	    return true;
	  }).sort((a, b) => {
	    const nameOrder = (a[1].name || a[0]).localeCompare(b[1].name || b[0]);
	    const dateOf = id => { const value = activityMap[id]?.last; const time = value ? new Date(value).getTime() : NaN; return Number.isFinite(time) ? time : 0; };
	    if (inactiveSel) {
	      const selectedOrder = Number(!!selectedChannels[b[0]]) - Number(!!selectedChannels[a[0]]);
	      if (selectedOrder) return selectedOrder;
	      if (selectedChannels[a[0]]) return dateOf(a[0]) - dateOf(b[0]) || nameOrder;
	      return nameOrder;
	    }
	    if (channelSort === "name-desc") return -nameOrder;
	    if (channelSort === "newest") return dateOf(b[0]) - dateOf(a[0]) || nameOrder;
	    if (channelSort === "oldest") return (dateOf(a[0]) || Number.MAX_SAFE_INTEGER) - (dateOf(b[0]) || Number.MAX_SAFE_INTEGER) || nameOrder;
	    return nameOrder;
	  });
	  const selectedManagementGroupData = workspaceGroups.find(g => g.id === selectedManagementGroup) || null;
	  const selectedManagementChannels = selectedManagementGroupData ? Object.entries(channelMap).filter(([, entry]) => entry.groups?.includes(selectedManagementGroupData.id)).sort((a, b) => (a[1].name || a[0]).localeCompare(b[1].name || b[0])) : [];
	  const getGroupName = reactExports.useCallback((groupId) => {
	    const g = workspaceGroups.find((g2) => g2.id === groupId);
	    return g ? localizedGroupName(g) : groupId;
	  }, [workspaceGroups, localizedGroupName]);
	  const handleExport = reactExports.useCallback(async () => {
	    const result = await StorageAPI.exportData();
	    if (result.error) {
	      setImportStatus({ type: "error", msg: "Export failed — extension context lost" });
	      return;
	    }
	    const blob = new Blob([JSON.stringify(result.exportData, null, 2)], { type: "application/json" });
	    const url = URL.createObjectURL(blob);
	    const a = document.createElement("a");
	    a.href = url;
	    a.download = `yt-groups-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
	    a.click();
	    setTimeout(() => URL.revokeObjectURL(url), 10000);
	    setImportStatus({ type: "success", msg: "Backup exported successfully!" });
	  }, []);
	  const handleImport = reactExports.useCallback(async (e) => {
	    const file = e.target.files?.[0];
	    if (!file) return;
	    try {
	      const text = await file.text();
	      const data = JSON.parse(text);
	      setImportStatus({ type: "info", msg: "Importing..." });
	      const result = await StorageAPI.importData(data);
	      if (result.error) {
	        setImportStatus({ type: "error", msg: `Import failed: ${result.error}` });
	      } else {
	        const fmt = result.format === "pockettube" ? `PocketTube format detected! ${result.newGroups} new groups imported.` : "Import complete!";
	        setImportStatus({ type: "success", msg: fmt });
	        log.info(MOD$4, "Import result", result);
	        setTimeout(() => enrichChannels(false), 2e3);
	      }
	    } catch (err) {
	      setImportStatus({ type: "error", msg: `Invalid JSON file: ${err.message}` });
	      log.error(MOD$4, "Import error", err);
	    }
	    if (fileInputRef.current) fileInputRef.current.value = "";
	  }, [enrichChannels]);
	  const enrichStatusText = () => {
	    if (!enrichmentStatus) return null;
	    if (enrichmentStatus === "running") return "Starting channel enrichment...";
	    if (enrichmentStatus.total === 0) return "All channels are up to date!";
	    return `Enriched ${enrichmentStatus.done} / ${enrichmentStatus.total} channels`;
	  };
	  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-reset ytsm-overlay open", onClick: (e) => {
	    if (e.target === e.currentTarget) onClose?.();
	  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-dashboard", onClick: (e) => e.stopPropagation(), children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-dash-header", children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsx(
	          "img",
	          {
	            src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%20role%3D%22img%22%20aria-label%3D%22Chanopy%3A%20grouped%20video%20cards%22%3E%0A%20%20%3Crect%20width%3D%22128%22%20height%3D%22128%22%20rx%3D%2229%22%20fill%3D%22%23172554%22%2F%3E%0A%20%20%3Crect%20x%3D%2221%22%20y%3D%2225%22%20width%3D%2266%22%20height%3D%2258%22%20rx%3D%2212%22%20fill%3D%22%233B82F6%22%2F%3E%0A%20%20%3Crect%20x%3D%2231%22%20y%3D%2235%22%20width%3D%2266%22%20height%3D%2258%22%20rx%3D%2212%22%20fill%3D%22%2360A5FA%22%2F%3E%0A%20%20%3Crect%20x%3D%2241%22%20y%3D%2245%22%20width%3D%2266%22%20height%3D%2258%22%20rx%3D%2212%22%20fill%3D%22%232DD4BF%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M64%2062.5a3.5%203.5%200%200%201%205.3-3l17%2010.5a3.5%203.5%200%200%201%200%206l-17%2010.5a3.5%203.5%200%200%201-5.3-3z%22%20fill%3D%22%23172554%22%2F%3E%0A%3C%2Fsvg%3E",
	            style: { width: 28, height: 28, marginRight: 10, borderRadius: "6px" },
	            alt: "Chanopy Icon"
	          }
	        ),
	        "Chanopy"
	      ] }),
	      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-dash-close", "aria-label": "Close Chanopy", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }) })
	    ] }),
	    jsxRuntimeExports.jsxs("nav", { className: "ytsm-dash-tabs", "aria-label": "Chanopy", children: [
	      ...[ [null, "All channels"], ["ungrouped", "Ungrouped"] ].map(([id, name]) => jsxRuntimeExports.jsx("button", { className: "ytsm-dash-tab " + (activeTab === "channels" && workspaceGroup === id ? "active" : ""), onClick: () => { setWorkspaceGroup(id); setActiveTab("channels"); }, children: tsT(name) }, String(id))),
	    jsxRuntimeExports.jsxs("button", { className: "ts-workspace-label", type: "button", "aria-expanded": !workspaceGroupsCollapsed, onClick: () => { const next = !workspaceGroupsCollapsed; setWorkspaceGroupsCollapsed(next); StorageAPI.localSet({ workspaceGroupsCollapsed: next }).catch(() => {}); }, children: [jsxRuntimeExports.jsx("span", { children: tsT("Subscription groups") }), jsxRuntimeExports.jsx("span", { className: "ts-workspace-chevron", "aria-hidden": true, children: workspaceGroupsCollapsed ? "›" : "⌄" })] }),
	      ...(!workspaceGroupsCollapsed ? navigationGroups.map(g => jsxRuntimeExports.jsxs("div", { className: "ts-workspace-group", style: { paddingLeft: g.depth * 14 }, children: [
        g.children?.length ? jsxRuntimeExports.jsx("button", { className: "ts-group-disclosure", "aria-expanded": !!expandedWorkspaceGroups[g.id], "aria-label": expandedWorkspaceGroups[g.id] ? "Collapse subgroups" : "Expand subgroups", onClick: () => setExpandedWorkspaceGroups(p => ({ ...p, [g.id]: !p[g.id] })), children: jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: expandedWorkspaceGroups[g.id] ? "▾" : "▸" }) }) : jsxRuntimeExports.jsx("span", { className: "ts-group-disclosure-space", "aria-hidden": true }),
        jsxRuntimeExports.jsxs("button", { className: "ytsm-dash-tab " + (activeTab === "channels" && workspaceGroup === g.id ? "active" : ""), "aria-current": activeTab === "channels" && workspaceGroup === g.id ? "page" : undefined, onClick: () => { setWorkspaceGroup(g.id); setActiveTab("channels"); }, children: [jsxRuntimeExports.jsx("span", { children: localizedGroupName(g) }), jsxRuntimeExports.jsx("small", { children: Object.values(channelMap).filter(e => e.groups?.includes(g.id)).length })] })
	      ] }, g.id)) : []),
	    jsxRuntimeExports.jsx("div", { className: "ts-workspace-label", children: tsT("Management") }),
	      ...[["groups", "Manage groups"], ["settings", "Settings"], ["import", "Import & backups"]].map(([tab,name]) => jsxRuntimeExports.jsx("button", { className: "ytsm-dash-tab " + (activeTab === tab ? "active" : ""), onClick: () => setActiveTab(tab), children: tsT(name) }, tab))
	    ] }),
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-dash-body", children: [
	      jsxRuntimeExports.jsx("h3", { className: "ts-workspace-title", children: activeTab === "channels" ? (workspaceGroup === "ungrouped" ? tsT("Ungrouped") : localizedGroupName(workspaceGroups.find(g => g.id === workspaceGroup)) || tsT("All channels")) : tsT(({groups:"Manage groups",settings:"Settings",import:"Import & backups"})[activeTab]) }),
	      activeTab === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-group-create-bar", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx(
	            "input",
	            {
	              className: "ytsm-input",
	              placeholder: "New group name...",
	              value: newGroupName,
	              onChange: (e) => setNewGroupName(e.target.value),
	              onKeyDown: (e) => e.key === "Enter" && handleCreateGroup()
	            }
	          ),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "ytsm-btn ytsm-btn-primary", onClick: handleCreateGroup, children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) }),
	            "Create group"
	          ] })
	        ] }),
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-group-manager", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "ts-group-tree", "aria-label": "Group tree", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-group-tree-heading", children: [jsxRuntimeExports.jsx("span", { children: "Groups" }), jsxRuntimeExports.jsx("span", { className: "ts-group-tree-count", children: workspaceGroups.length })] }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-group-list", children: [
	              groups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-groups-empty", children: "Your groups will appear here. Create the first group or import a backup." }),
	              managementGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(
	                GroupRow,
	                {
	                  group, depth: group.depth,
                  localizedName: localizedGroupName(group),
	                  selected: selectedManagementGroup === group.id,
	                  onSelect: () => setSelectedManagementGroup(group.id),
	                  hasChildren: !!group.children?.length,
	                  treeExpanded: !!expandedManagementGroups[group.id],
	                  onToggleTree: () => setExpandedManagementGroups(p => ({ ...p, [group.id]: !p[group.id] })),
	                  channelCount: countGroupChannels(group, channelMap),
	                  onDelete: () => handleDeleteGroup(group.id),
	                  onRename: (name) => handleRenameGroup(group.id, name),
	                  onSetIcon: () => setEmojiPickerGroup(emojiPickerGroup === group.id ? null : group.id),
	                  showEmojiPicker: emojiPickerGroup === group.id,
	                  onEmojiSelect: (emoji) => handleSetGroupIcon(group.id, emoji),
	                  onMoveChannel: handleMoveChannelToGroup,
	                  onMoveGroup: handleMoveGroupTo
	                },
	                group.id
	              ))
	            ] })
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "ts-group-details", "aria-labelledby": "ts-group-details-title", children: selectedManagementGroupData ? [
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "ts-group-details-header", children: [
	              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-group-details-icon", children: selectedManagementGroupData.icon || localizedGroupName(selectedManagementGroupData).charAt(0).toUpperCase() }),
	              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                jsxRuntimeExports.jsx("h4", { id: "ts-group-details-title", children: localizedGroupName(selectedManagementGroupData) }),
	                jsxRuntimeExports.jsxs("p", { children: [selectedManagementChannels.length, selectedManagementChannels.length === 1 ? " channel" : " channels"] })
	              ] })
	            ] }),
	            selectedManagementChannels.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-group-detail-channels", children: selectedManagementChannels.map(([id, entry]) => jsxRuntimeExports.jsxs("a", {
	              className: "ytsm-group-channel-link",
	              href: "https://www.youtube.com/channel/" + id,
	              target: "_blank",
	              rel: "noreferrer",
	              title: entry.name || id,
	              draggable: true,
	              onDragStart: (e) => { e.dataTransfer.setData("text/ts-channel-id", id); e.dataTransfer.effectAllowed = "move"; },
	              children: [
	                entry.avatar ? jsxRuntimeExports.jsx("img", { className: "ytsm-group-channel-avatar", src: entry.avatar, alt: "", loading: "lazy" }) : jsxRuntimeExports.jsx("span", { className: "ytsm-group-channel-avatar ytsm-group-channel-avatar-fallback", children: (entry.name || "?").charAt(0).toUpperCase() }),
	                jsxRuntimeExports.jsx("span", { className: "ytsm-group-channel-name", children: entry.name || id })
	              ]
	            }, id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-group-details-empty", children: "This group has no channels yet." }),
	            selectedManagementChannels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ts-group-detail-hint", children: "Drag a channel to another group to change its assignment." })
	          ] : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-group-details-empty", children: "Create a group or select one in the tree to view its channels." }) })
	        ] })
	      ] }),
	      activeTab === "channels" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-channels-controls", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channels-toolbar ts-channels-actions", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-action-row ts-action-primary", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx(
	            "button",
	            {
	              className: "ytsm-btn ytsm-btn-secondary",
	              onClick: () => enrichChannels(true),
	              disabled: enrichmentStatus === "running",
	              children: enrichmentStatus === "running" ? (window.__tsT ? window.__tsT("Fetching...") : "Fetching...") : (window.__tsT ? window.__tsT("Refresh Details") : "Refresh Details")
	            }
	          )
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-action-row ts-action-utility", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsxs(
	            "button",
	            {
	              className: "ytsm-btn ytsm-btn-secondary",
	              style: { fontSize: 12, padding: "4px 10px", whiteSpace: "nowrap" },
	              onClick: () => { if (auditState.running) { auditCancelRef.current = true; } else { runActivityAudit(); } },
	              title: auditState.running ? tsT("Stop activity check") : tsT("Check activity"),
	              children: auditState.running ? [tsT("Stop activity check"), ` ${auditState.done} / ${auditState.total}`] : tsT("Check activity")
	            }
	          ),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs(
	            "button",
	            {
	              className: "ytsm-btn ytsm-btn-secondary" + (inactiveSel ? " active" : ""),
	              style: { fontSize: 12, padding: "4px 10px", whiteSpace: "nowrap", minWidth: 140, justifyContent: "center" },
	              onClick: toggleInactive,
	              title: inactiveSel ? "Clear selection" : "Select channels inactive for more than 2 years",
	              children: inactiveSel ? "Clear selection" : "Select inactive"
	            }
	          ),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs(
	            "button",
	            {
	              className: "ytsm-btn ytsm-btn-danger",
	              style: { fontSize: 12, padding: "4px 10px", whiteSpace: "nowrap" },
	              onClick: runUnsubscribe,
	              disabled: unsubState.running || !Object.keys(selectedChannels).some((k) => selectedChannels[k]),
	              children: unsubState.running ? [`${unsubState.done} / ${unsubState.total}`] : ["Unsubscribe", ` (${Object.keys(selectedChannels).filter((k) => selectedChannels[k]).length})`]
	            }
	          ),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs(
	            "button",
	            {
	              className: "ytsm-btn ytsm-btn-secondary",
	              style: { fontSize: 12, padding: "4px 12px", whiteSpace: "nowrap" },
	              onClick: () => { const bd = document.querySelector(".ytsm-dash-body"); if (bd) bd.scrollTop = 0; setShowHistory(true); },
	              title: "Unsubscribe history",
	              children: "History"
	            }
	          )
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-action-row ts-action-sorting", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-btn ytsm-btn-secondary ts-ag", onClick: runAutoGroup, disabled: autoState.running, title: tsT("Put channels without a group into groups using the channel catalog"), children: [autoState.running ? "… " : "", tsT("Auto-sort into groups")] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-btn ytsm-btn-secondary ts-ag ts-catalog-apply", onClick: runCatalogReplacement, disabled: autoState.running, title: tsT("Replace sort with catalog"), children: [autoState.running ? "… " : "", tsT("Replace sort with catalog")] }),
	          autoState.replaceUndo && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-btn ytsm-btn-secondary ts-ag", onClick: runCatalogReplacementUndo, disabled: autoState.running, children: tsT("Undo catalog replacement") }),
	          autoState.undo && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-btn ytsm-btn-secondary ts-ag", onClick: runAutoUndo, disabled: autoState.running, children: tsT("Undo auto-sort") })
	          ] }),
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-channels-search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
	            "input",
	            {
	              className: "ytsm-input ytsm-search-input",
	              placeholder: "Search channels...",
	              value: searchQuery,
	              onChange: (e) => setSearchQuery(e.target.value)
	            }
	          ) }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-channel-controls", children: [
	            jsxRuntimeExports.jsxs("label", { children: [
	              jsxRuntimeExports.jsx("span", { children: tsT("Sort by") }),
	              jsxRuntimeExports.jsxs("select", { className: "ytsm-input", value: channelSort, onChange: e => setChannelSort(e.target.value), "aria-label": tsT("Sort by"), children: [
	                jsxRuntimeExports.jsx("option", { value: "name-asc", children: tsT("Channel name (A–Z)") }),
	                jsxRuntimeExports.jsx("option", { value: "name-desc", children: tsT("Channel name (Z–A)") }),
	                jsxRuntimeExports.jsx("option", { value: "newest", children: tsT("Most recent video") }),
	                jsxRuntimeExports.jsx("option", { value: "oldest", children: tsT("Oldest video") })
	              ] })
	            ] }),
	            jsxRuntimeExports.jsxs("label", { children: [
	              jsxRuntimeExports.jsx("span", { children: tsT("Filter by activity") }),
	              jsxRuntimeExports.jsxs("select", { className: "ytsm-input", value: activityFilter, onChange: e => setActivityFilter(e.target.value), "aria-label": tsT("Filter by activity"), children: [
	                jsxRuntimeExports.jsx("option", { value: "all", children: tsT("All activity") }),
	                jsxRuntimeExports.jsx("option", { value: "recent", children: tsT("Video in the last year") }),
	                jsxRuntimeExports.jsx("option", { value: "inactive", children: tsT("No video for 2+ years") }),
	                jsxRuntimeExports.jsx("option", { value: "nodate", children: tsT("No upload date") }),
	                jsxRuntimeExports.jsx("option", { value: "unavailable", children: tsT("Feed unavailable") })
	              ] })
	            ] }),
	            (channelSort === "newest" || channelSort === "oldest" || activityFilter !== "all") && !Object.keys(activityMap).length && jsxRuntimeExports.jsx("span", { className: "ts-channel-controls-hint", children: tsT("Run activity check to sort by upload date.") })
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-status-row", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ts-count", children: [
	              channelEntries.length,
	              " channels"
	            ] }),
	            enrichStatusText() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-enrich-note", children: enrichStatusText() }),
	            auditMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-audit-note", children: auditMsg }),
	            autoState.msg && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-audit-note", children: autoState.msg })
	          ] })
	        ] }),
	        showHistory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-history-overlay", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-history-head", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "ytsm-btn ytsm-btn-secondary", style: { fontSize: 13, padding: "6px 14px", whiteSpace: "nowrap" }, onClick: () => setShowHistory(false), children: ["← ", "Back"] }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { margin: 0, fontSize: 17, fontWeight: 600, color: "var(--ytsm-text-primary)" }, children: ["Unsubscribe history", ` (${unsubLog.length})`] })
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-history-tools", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "ytsm-input ytsm-search-input", style: { maxWidth: 280 }, placeholder: "Search...", value: unsubSearch, onChange: (e) => setUnsubSearch(e.target.value) }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "ytsm-btn ytsm-btn-secondary", style: { fontSize: 12, padding: "4px 12px", whiteSpace: "nowrap" }, onClick: exportUnsubCsv, disabled: !unsubLog.length, children: ["💾 ", "Export CSV"] }),
	            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-btn ytsm-btn-danger", style: { fontSize: 12, padding: "4px 12px", whiteSpace: "nowrap" }, onClick: clearUnsubLog, disabled: !unsubLog.length, children: ["🗑 ", "Clear history"] })
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--ytsm-text-secondary)", margin: "10px 0" }, children: "Restore a channel by opening its link and subscribing again." }),
	          unsubLog.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: 40, color: "var(--ytsm-text-disabled)" }, children: "No unsubscribed channels yet." }),
	          unsubLog.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6px 14px", padding: 4 }, children: unsubLog.slice().reverse().filter((j) => {
	            if (!unsubSearch) return true;
	            const q = unsubSearch.toLowerCase();
	            return (j.name || "").toLowerCase().includes(q) || j.id.toLowerCase().includes(q) || (j.groupNames || []).some((g) => g.toLowerCase().includes(q));
	          }).slice(0, 200).map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-row", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-channel-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-channel-avatar-placeholder", children: (j.name || "?").charAt(0).toUpperCase() }) }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-info", children: [
	              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "ytsm-channel-name", href: "https://www.youtube.com/channel/" + j.id, target: "_blank", rel: "noreferrer", children: j.name || j.id }),
	              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-groups", children: [
	                (j.groupNames || []).length > 0 ? (j.groupNames || []).map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-channel-group-chip", children: g }, gi)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 12, color: "var(--ytsm-text-disabled)" }, children: "Ungrouped" }),
	                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--ytsm-text-disabled)", marginLeft: 4 }, children: new Date(j.date).toLocaleDateString() })
	              ] })
	            ] })
	          ] }, j.id + j.date)) })
	        ] }),
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-list", children: [
	          channelEntries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-full-width", style: { textAlign: "center", padding: 40, color: "var(--ytsm-text-disabled)" }, children: searchQuery ? "No channels match your search." : "No channels mapped yet. Visit channel pages and add them to groups!" }),
	          channelEntries.slice(0, visibleCount).map(([chId, entry]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-row", style: { cursor: "pointer" }, onClick: (e) => { if (e.target.closest("input, a, button")) return; window.open("https://www.youtube.com/channel/" + chId, "_blank"); }, children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "ytsm-channel-check", "aria-label": "Select channel", checked: !!selectedChannels[chId], onClick: (e) => e.stopPropagation(), onChange: (e) => setSelectedChannels((p) => ({ ...p, [chId]: e.target.checked })) }),
	            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-channel-avatar", children: entry.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: entry.avatar, alt: "" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-channel-avatar-placeholder", children: (entry.name || chId).charAt(0).toUpperCase() }) }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-info", children: [
	              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "ytsm-channel-name", href: "https://www.youtube.com/channel/" + chId, target: "_blank", rel: "noreferrer", title: entry.name || chId, children: entry.name || chId }),
	              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-groups", children: [
	                (entry.groups || []).map((gid) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-channel-group-chip", children: getGroupName(gid) }, gid)),
	                (!entry.groups || entry.groups.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 12, color: "var(--ytsm-text-disabled)" }, children: "Ungrouped" })
	              ] }),
	              activityMap[chId] && (() => {
	                const a = activityMap[chId];
	                if (a.dead && (a.deadRuns || 1) >= 2) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-activity dead", children: ["☠ ", "Channel deleted or hidden"] });
	                if (a.dead) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-activity warn", children: ["⚠ ", "Feed unavailable (404), re-check later"] });
	                if (a.err) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channel-activity dead", children: ["⚠ ", "Activity check failed"] });
	                if (!a.last) return null;
	                const days = (Date.now() - new Date(a.last).getTime()) / 86400000;
	                const cls = days > 730 ? "dead" : days > 365 ? "warn" : "fresh";
	                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-channel-activity " + cls, title: a.title || "", children: `🕒 ${tsRelative(a.last)}` });
	              })()
	            ] })
	          ] }, chId)),
	          channelEntries.length > visibleCount && jsxRuntimeExports.jsx("button", { className: "ytsm-btn ts-show-more", onClick: () => setVisibleCount(n => n + 100), children: "Show 100 more" })
	        ] })
	      ] }),
	      activeTab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-section", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Feed Settings" }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-row", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Default fetch volume (total videos)" }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs(
	              "select",
	              {
	                className: "ytsm-select",
	                value: settings.defaultFetchVolume || 100,
	                onChange: (e) => updateSettings({ defaultFetchVolume: parseInt(e.target.value) }),
	                children: [
	                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "50", children: "50" }),
	                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "100", children: "100" }),
	                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "200", children: "200" }),
	                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "400", children: "400" })
	                ]
	              }
	            )
	          ] }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-row", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Default grid columns" }),
	            /* @__PURE__ */ jsxRuntimeExports.jsxs(
	              "select",
	              {
	                className: "ytsm-select",
	                value: settings.defaultGridColumns || 4,
	                onChange: (e) => updateSettings({ defaultGridColumns: parseInt(e.target.value) }),
	                children: [
	                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "4", children: "4 columns" }),
	                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6", children: "6 columns" })
	                ]
	              }
	            )
	          ] })
	        ] }),
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-section", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Sidebar Position" }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--ytsm-text-secondary)", marginBottom: 12 }, children: "Choose where the Groups section appears in YouTube's sidebar menu. Changes take effect on next page reload." }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-row", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position in guide menu" }),
	            /* @__PURE__ */ jsxRuntimeExports.jsx(
	              "select",
	              {
	                className: "ytsm-select",
	                value: settings.sidebarPosition || "bottom",
	                onChange: (e) => updateSettings({ sidebarPosition: e.target.value }),
	                children: SIDEBAR_POSITIONS.map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: pos.value, children: pos.label }, pos.value))
	              }
	            )
	          ] })
	        ] })
	      ] }),
	      activeTab === "import" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-section", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Export Backup" }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--ytsm-text-secondary)", marginBottom: 12 }, children: "Download all your groups, channel mappings, and settings as a JSON file." }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "ytsm-btn ytsm-btn-primary", onClick: handleExport, children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" }) }),
	            "Export Backup"
	          ] })
	        ] }),
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-section", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Import Backup" }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--ytsm-text-secondary)", marginBottom: 12 }, children: "Import a backup file. Supports our native format AND PocketTube exports. Existing groups will be preserved — only new groups are added." }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx(
	            "input",
	            {
	              ref: fileInputRef,
	              type: "file",
	              accept: ".json",
	              onChange: handleImport,
	              style: { display: "none" }
	            }
	          ),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs(
	            "button",
	            {
	              className: "ytsm-btn ytsm-btn-secondary",
	              onClick: () => fileInputRef.current?.click(),
	              children: [
	                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" }) }),
	                "Choose File"
	              ]
	            }
	          )
	        ] }),
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-section", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Import from PocketTube share link" }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--ytsm-text-secondary)", marginBottom: 12 }, children: "Paste a pockettube.io/share link. A group named after the share will be created or merged." }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-channels-toolbar", children: [
	            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "ytsm-input", placeholder: "https://pockettube.io/share?id=...", value: shareInput, onChange: (e) => setShareInput(e.target.value) }),
	            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-btn ytsm-btn-primary", style: { marginLeft: 8, whiteSpace: "nowrap" }, onClick: handleShareImport, disabled: shareLoading, children: shareLoading ? "⏳ Fetching..." : ["📥 ", "Import link"] })
	          ] })
	        ] }),
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-settings-section", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Import YouTube subscriptions (Takeout CSV)" }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--ytsm-text-secondary)", marginBottom: 12 }, children: "Select the subscriptions.csv from Google Takeout. New channels are added without a group." }),
	          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: subFileRef, type: "file", accept: ".csv,text/csv", onChange: handleSubImport, style: { display: "none" } }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "ytsm-btn ytsm-btn-secondary", onClick: () => subFileRef.current?.click(), children: ["📄 ", "Choose CSV"] })
	        ] }),
	        importStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `ytsm-toast ${importStatus.type}`, style: { position: "relative", marginTop: 16 }, children: importStatus.msg })
	      ] })
	    ] })
	  ] }) });
	}
	function GroupRow({ group, depth = 0, localizedName = group.name, channelCount, onMoveChannel, onMoveGroup, onDelete, onRename, onSetIcon, showEmojiPicker, onEmojiSelect, hasChildren, treeExpanded, onToggleTree, selected, onSelect }) {
	  const [editing, setEditing] = reactExports.useState(false);
	  const [dragOver, setDragOver] = reactExports.useState(false);
	  const [name, setName] = reactExports.useState(localizedName);
	  const handleSave = () => {
	    const trimmed = name.trim();
	    if (trimmed && trimmed !== localizedName) {
	      onRename(trimmed);
	    } else {
	      setName(localizedName);
	    }
	    setEditing(false);
	  };
	  const displayIcon = group.icon || localizedName.charAt(0).toUpperCase();
	  const isEmoji = group.iconType === "emoji";
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-group-row" + (selected ? " ts-group-selected" : "") + (dragOver ? " ytsm-drop-target" : ""), style: { marginLeft: Math.min(depth * 14, 70) }, onDragOver: (e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; if (!dragOver) setDragOver(true); }, onDragLeave: (e) => { if (!e.currentTarget.contains(e.relatedTarget)) setDragOver(false); }, onDrop: (e) => { e.preventDefault(); setDragOver(false); const chId = e.dataTransfer.getData("text/ts-channel-id"); if (chId && onMoveChannel) { onMoveChannel(chId, group.id); return; } const grId = e.dataTransfer.getData("text/ts-group-id"); if (grId && grId !== group.id && onMoveGroup) onMoveGroup(grId, group.id, e.clientY > e.currentTarget.getBoundingClientRect().top + e.currentTarget.offsetHeight / 2); }, children: [
	    hasChildren ? jsxRuntimeExports.jsx("button", { className: "ts-management-disclosure", "aria-label": treeExpanded ? "Collapse subgroups" : "Expand subgroups", "aria-expanded": treeExpanded, onClick: onToggleTree, children: treeExpanded ? "▾" : "▸" }) : jsxRuntimeExports.jsx("span", { className: "ts-management-disclosure-space", "aria-hidden": true }),
	    /* @__PURE__ */ jsxRuntimeExports.jsxs(
	      "div",
	      {
	        className: `ytsm-group-icon-edit ${isEmoji ? "emoji" : ""}`,
	        onClick: onSetIcon,
	        title: "Change icon",
	        style: { cursor: "pointer", position: "relative" },
	        children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: isEmoji ? 20 : 14, fontWeight: isEmoji ? 400 : 700, color: isEmoji ? "inherit" : "var(--ytsm-primary)" }, children: displayIcon }),
	          showEmojiPicker && /* @__PURE__ */ jsxRuntimeExports.jsx(
	            EmojiPicker,
	            {
	              onSelect: onEmojiSelect,
	              onClose: () => onSetIcon?.()
	            }
	          )
	        ]
	      }
	    ),
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-group-row-info", children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "input",
	      {
	        className: "ytsm-input",
	        style: { height: 32, fontSize: 14 },
	        value: name,
	        onChange: (e) => setName(e.target.value),
	        onBlur: handleSave,
	        onKeyDown: (e) => e.key === "Enter" && handleSave(),
	        autoFocus: true
	      }
	    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "ytsm-group-row-header", draggable: true, "aria-current": selected ? "page" : undefined, onClick: onSelect, onDragStart: (e) => { e.stopPropagation(); e.dataTransfer.setData("text/ts-group-id", group.id); e.dataTransfer.effectAllowed = "move"; }, title: "Select group · Drag to reorder", children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ytsm-group-row-titles", children: [
	          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ytsm-group-row-name", children: localizedName }),
	          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ytsm-group-row-meta", children: [
	            channelCount,
	            channelCount === 1 ? " channel" : " channels"
	          ] })
	        ] })
	      ] })
	    ] }) }),
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-group-row-actions", children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-icon-btn", onClick: () => {
	        setEditing(true);
	        setName(localizedName);
	      }, title: "Rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }) }) }),
	      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ytsm-icon-btn danger", onClick: onDelete, title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }) }) })
	    ] })
	  ] });
	}

	function MastheadButton({ onClick }) {
	  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-reset ysm-tags", style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
	    "button",
	    {
	      className: "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading-trailing yt-spec-button-shape-next--disable-text-ellipsis yt-spec-button-shape-next--enable-backdrop-filter-experiment chanopy-masthead-btn",
	      onClick,
	      title: "Manage Subscription Groups",
	      style: { cursor: "pointer" },
	      children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsx(
	          "img",
	          {
	            src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%20role%3D%22img%22%20aria-label%3D%22Chanopy%3A%20grouped%20video%20cards%22%3E%0A%20%20%3Crect%20width%3D%22128%22%20height%3D%22128%22%20rx%3D%2229%22%20fill%3D%22%23172554%22%2F%3E%0A%20%20%3Crect%20x%3D%2221%22%20y%3D%2225%22%20width%3D%2266%22%20height%3D%2258%22%20rx%3D%2212%22%20fill%3D%22%233B82F6%22%2F%3E%0A%20%20%3Crect%20x%3D%2231%22%20y%3D%2235%22%20width%3D%2266%22%20height%3D%2258%22%20rx%3D%2212%22%20fill%3D%22%2360A5FA%22%2F%3E%0A%20%20%3Crect%20x%3D%2241%22%20y%3D%2245%22%20width%3D%2266%22%20height%3D%2258%22%20rx%3D%2212%22%20fill%3D%22%232DD4BF%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M64%2062.5a3.5%203.5%200%200%201%205.3-3l17%2010.5a3.5%203.5%200%200%201%200%206l-17%2010.5a3.5%203.5%200%200%201-5.3-3z%22%20fill%3D%22%23172554%22%2F%3E%0A%3C%2Fsvg%3E",
	            style: { width: 24, height: 24, marginRight: 6, borderRadius: "4px" },
	            alt: "Chanopy"
	          }
	        ),
	        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "yt-spec-button-shape-next__button-text-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
	          "span",
	          {
	            className: "yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap",
	            role: "text",
	            style: { color: "var(--iron-icon-fill-color, var(--yt-spec-text-primary))" },
	            children: "Chanopy"
	          }
	        ) })
	      ]
	    }
	  ) });
	}

	function groupPickerContainsSelection(group, selected) {
	  return selected.has(group.id) || (group.children || []).some(child => groupPickerContainsSelection(child, selected));
	}
	function groupPickerPlacements(groups, memberGroups, localizedGroupName = (group) => group.name) {
	  const selected = new Set(memberGroups || []);
	  const placements = [];
	  const visit = (group, names, ids) => {
	    const nextNames = [...names, localizedGroupName(group)];
	    const nextIds = [...ids, group.id];
	    if (selected.has(group.id) && !(group.children || []).some(child => groupPickerContainsSelection(child, selected))) {
	      placements.push({ id: group.id, names: nextNames, ids: nextIds });
	    }
	    for (const child of group.children || []) visit(child, nextNames, nextIds);
	  };
	  for (const group of groups) visit(group, [], []);
	  return placements;
	}
	function groupPickerFindPath(groups, groupId, parents = []) {
	  for (const group of groups) {
	    const path = [...parents, group];
	    if (group.id === groupId) return path;
	    const nested = groupPickerFindPath(group.children || [], groupId, path);
	    if (nested) return nested;
	  }
	  return null;
	}
	function groupPickerNextSelection(groups, memberGroups, groupId) {
	  const path = groupPickerFindPath(groups, groupId);
	  if (!path) return memberGroups;
	  const selected = new Set(memberGroups || []);
	  const target = path[path.length - 1];
	  const descendants = [];
	  const collect = group => { for (const child of group.children || []) { descendants.push(child.id); collect(child); } };
	  collect(target);
	  const isSelectedPlacement = selected.has(groupId) && !descendants.some(id => selected.has(id));
	  if (isSelectedPlacement) {
	    selected.delete(groupId);
	    for (const ancestor of path.slice(0, -1).reverse()) {
	      if (!(ancestor.children || []).some(child => groupPickerContainsSelection(child, selected))) selected.delete(ancestor.id);
	    }
	  } else {
	    for (const id of descendants) selected.delete(id);
	    for (const group of path) selected.add(group.id);
	  }
	  return [...selected];
	}
	function GroupAssignmentPicker({ groups, memberGroups, onChange, emptyText, localizedGroupName = (group) => group.name }) {
	  const [showMenu, setShowMenu] = reactExports.useState(false);
	  const [expanded, setExpanded] = reactExports.useState({});
	  const [busy, setBusy] = reactExports.useState(false);
	  const wrapperRef = reactExports.useRef(null);
	  const triggerRef = reactExports.useRef(null);
	  const placements = groupPickerPlacements(groups, memberGroups, localizedGroupName);
	  reactExports.useEffect(() => {
	    if (!showMenu) return;
	    const closeOnOutside = event => { if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setShowMenu(false); };
	    const closeOnEscape = event => { if (event.key === "Escape") { setShowMenu(false); triggerRef.current?.focus(); } };
	    document.addEventListener("mousedown", closeOnOutside);
	    document.addEventListener("keydown", closeOnEscape);
	    return () => { document.removeEventListener("mousedown", closeOnOutside); document.removeEventListener("keydown", closeOnEscape); };
	  }, [showMenu]);
	  const openMenu = () => {
	    if (showMenu) { setShowMenu(false); return; }
	    const nextExpanded = {};
	    for (const placement of placements) for (const id of placement.ids.slice(0, -1)) nextExpanded[id] = true;
	    setExpanded(nextExpanded);
	    setShowMenu(true);
	  };
	  const togglePlacement = async groupId => {
	    if (busy) return;
	    const next = groupPickerNextSelection(groups, memberGroups, groupId);
	    setBusy(true);
	    try { await onChange(next); } finally { setBusy(false); }
	  };
	  const option = (group, label, pathNames, key) => {
	    const isSelected = placements.some(placement => placement.id === group.id);
	    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
	      type: "button", className: "ts-picker-option" + (isSelected ? " is-selected" : ""),
	      "aria-pressed": isSelected, title: pathNames.join(" › "), disabled: busy,
	      onClick: () => togglePlacement(group.id), children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-check", "aria-hidden": true }),
	        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-option-label", children: label })
	      ]
	    }, key);
	  };
	  const renderGroup = (group, parentNames = []) => {
	    const displayName = localizedGroupName(group);
	    const names = [...parentNames, displayName];
	    const children = group.children || [];
	    if (!children.length) return option(group, displayName, names, group.id);
	    const selectedCount = placements.filter(placement => placement.ids.includes(group.id)).length;
	    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-picker-section", children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "ts-picker-parent", "aria-expanded": !!expanded[group.id], onClick: () => setExpanded(previous => ({ ...previous, [group.id]: !previous[group.id] })), children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-chevron", "aria-hidden": true, children: expanded[group.id] ? "▾" : "▸" }),
	        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-parent-label", children: displayName }),
	        selectedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-count", children: selectedCount })
	      ] }),
	      expanded[group.id] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-picker-children", children: [
	        option(group, "Group only", names, group.id + "-only"),
	        ...children.map(child => renderGroup(child, names))
	      ] })
	    ] }, group.id);
	  };
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-reset ytsm-group-dropdown-wrapper", ref: wrapperRef, children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", ref: triggerRef, className: "ytsm-group-dropdown-trigger", "aria-expanded": showMenu, "aria-haspopup": "dialog", title: placements.map(placement => placement.names.join(" › ")).join(", ") || undefined, onClick: openMenu, children: [
	      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" }) }),
	      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-trigger-label", children: placements.length === 0 ? "Add to Group" : placements.length === 1 ? placements[0].names.join(" › ") : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Groups" }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `: ${placements.length}` })] }) }),
	      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", width: "14", height: "14", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 10l5 5 5-5z" }) })
	    ] }),
	    showMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-group-dropdown-menu visible", role: "dialog", "aria-label": "Groups", children: [
	      placements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-picker-current", children: [
	        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-current-title", children: "Selected" }),
	        ...placements.map(placement => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-picker-current-path", children: placement.names.join(" › ") }, placement.id))
	      ] }),
	      groups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-picker-empty", children: emptyText }),
	      ...groups.map(group => renderGroup(group))
	    ] })
	  ] });
	}

	function ChannelPageButton() {
	  const { groups, channelMap, loading: dataLoading, updateChannelMap, localizedGroupName } = useGroups();
	  const [channelId, setChannelId] = reactExports.useState(null);
	  const [loading, setLoading] = reactExports.useState(true);
	  reactExports.useEffect(() => {
	    if (dataLoading) return;
	    let cancelled = false;
	    async function resolve() {
	      setLoading(true);
	      try {
	        const info = parseCurrentChannelInfo();
	        if (!info) return;
	        let id = null;
	        if (info.type === "id") id = info.channelId;
	        else if (info.type === "handle") id = await resolveChannelId(info.handle);
	        else if (info.type === "slug") id = await resolveChannelId(info.slug);
	        if (!cancelled && id) {
	          setChannelId(id);
	          if (!channelMap[id] || !channelMap[id]?.avatar) {
	            const name = document.querySelector("#channel-name yt-formatted-string, #channel-header ytd-channel-name yt-formatted-string")?.textContent || channelMap[id]?.name || id;
	            const avatar = document.querySelector("yt-page-header-renderer yt-img-shadow img, #channel-header-container yt-img-shadow img, ytd-c4-tabbed-header-renderer #avatar img")?.src || channelMap[id]?.avatar || null;
	            await updateChannelMap({ [id]: { name, avatar } });
	          }
	        }
	      } catch (err) {
	        log.error('ChannelPageButton', 'Channel page setup failed', err);
	      } finally {
	        if (!cancelled) setLoading(false);
	      }
	    }
	    resolve();
	    return () => {
	      cancelled = true;
	    };
	  }, [dataLoading, updateChannelMap]);
	  if (loading || !channelId) return null;
	  const entry = channelMap[channelId] || { groups: [] };
	  return /* @__PURE__ */ jsxRuntimeExports.jsx(GroupAssignmentPicker, {
	    groups, memberGroups: entry.groups || [], emptyText: "No groups yet. Create one in the Dashboard.", localizedGroupName,
	    onChange: nextGroups => updateChannelMap({ [channelId]: { ...entry, groups: nextGroups } })
	  });
	}

	const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
	  let promise = Promise.resolve();
	  if (false              && deps && deps.length > 0) {
	    let allSettled2 = function(promises) {
	      return Promise.all(
	        promises.map(
	          (p) => Promise.resolve(p).then(
	            (value) => ({ status: "fulfilled", value }),
	            (reason) => ({ status: "rejected", reason })
	          )
	        )
	      );
	    };
	    document.getElementsByTagName("link");
	    const cspNonceMeta = document.querySelector(
	      "meta[property=csp-nonce]"
	    );
	    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
	    promise = allSettled2(
	      deps.map((dep) => {
	        dep = assetsURL(dep);
	        if (dep in seen) return;
	        seen[dep] = true;
	        const isCss = dep.endsWith(".css");
	        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
	        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
	          return;
	        }
	        const link = document.createElement("link");
	        link.rel = isCss ? "stylesheet" : scriptRel;
	        if (!isCss) {
	          link.as = "script";
	        }
	        link.crossOrigin = "";
	        link.href = dep;
	        if (cspNonce) {
	          link.setAttribute("nonce", cspNonce);
	        }
	        document.head.appendChild(link);
	        if (isCss) {
	          return new Promise((res, rej) => {
	            link.addEventListener("load", res);
	            link.addEventListener(
	              "error",
	              () => rej(new Error(`Unable to preload CSS for ${dep}`))
	            );
	          });
	        }
	      })
	    );
	  }
	  function handlePreloadError(err) {
	    const e = new Event("vite:preloadError", {
	      cancelable: true
	    });
	    e.payload = err;
	    window.dispatchEvent(e);
	    if (!e.defaultPrevented) {
	      throw err;
	    }
	  }
	  return promise.then((res) => {
	    for (const item of res || []) {
	      if (item.status !== "rejected") continue;
	      handlePreloadError(item.reason);
	    }
	    return baseModule().catch(handlePreloadError);
	  });
	};

	function VideoPageButton() {
	  const { groups, channelMap, updateChannelMap, localizedGroupName } = useGroups();
	  const [channelId, setChannelId] = reactExports.useState(null);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    async function resolve() {
	      let id = parseCurrentVideoChannelId();
	      if (id) {
	        if (!cancelled) setChannelId(id);
	        return;
	      }
	      const ownerLink = document.querySelector(
	        '#owner a[href*="/@"], ytd-video-owner-renderer a[href*="/@"]'
	      );
	      if (ownerLink) {
	        const href = ownerLink.getAttribute("href") || "";
	        const handleMatch = href.match(/\/@([\w.-]+)/);
	        if (handleMatch) {
	          const { resolveChannelId } = await __vitePreload(async () => { const { resolveChannelId } = await Promise.resolve().then(() => youtubeApi);return { resolveChannelId }},false             ?__VITE_PRELOAD__:void 0);
	          id = await resolveChannelId("@" + handleMatch[1]);
	          if (id && !cancelled) {
	            setChannelId(id);
	            return;
	          }
	        }
	      }
	      setTimeout(async () => {
	        if (cancelled) return;
	        id = parseCurrentVideoChannelId();
	        if (id) {
	          setChannelId(id);
	          return;
	        }
	        const link = document.querySelector('#owner a[href*="/@"]');
	        if (link) {
	          const m = link.getAttribute("href")?.match(/\/@([\w.-]+)/);
	          if (m) {
	            const { resolveChannelId } = await __vitePreload(async () => { const { resolveChannelId } = await Promise.resolve().then(() => youtubeApi);return { resolveChannelId }},false             ?__VITE_PRELOAD__:void 0);
	            id = await resolveChannelId("@" + m[1]);
	            if (id) setChannelId(id);
	          }
	        }
	      }, 3e3);
	    }
	    resolve();
	    return () => {
	      cancelled = true;
	    };
	  }, []);
	  if (!channelId) return null;
	  const entry = channelMap[channelId] || { groups: [] };
	  return /* @__PURE__ */ jsxRuntimeExports.jsx(GroupAssignmentPicker, {
	    groups, memberGroups: entry.groups || [], emptyText: "No groups yet.", localizedGroupName,
	    onChange: nextGroups => {
	      const channelName = document.querySelector("#owner #channel-name a, ytd-channel-name a")?.textContent?.trim() || entry.name || channelId;
	      return updateChannelMap({ [channelId]: { ...entry, name: channelName, groups: nextGroups } });
	    }
	  });
	}

	function SubscriptionsFilter() {
	  const { groups, channelMap, localizedGroupName } = useGroups();
	  const [activeGroup, setActiveGroup] = reactExports.useState(null);
	  const handleChipClick = reactExports.useCallback((group) => {
	    if (activeGroup === group.id) {
	      setActiveGroup(null);
	      showAllSubscriptionVideos();
	    } else {
	      setActiveGroup(group.id);
	      filterSubscriptionVideos(group, channelMap);
	    }
	  }, [activeGroup, channelMap]);
	  reactExports.useEffect(() => {
	    const group = groups.find(g => g.id === activeGroup);
	    if (!group) { showAllSubscriptionVideos(); return; }
	    let timer;
	    const apply = () => filterSubscriptionVideos(group, channelMap);
	    const observer = new MutationObserver(() => {
	      if (timer) return;
	      timer = setTimeout(() => { timer = null; apply(); }, 60);
	    });
	    const root = document.querySelector('ytd-browse[page-subtype="subscriptions"]') || document.body;
	    observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['href'] });
	    apply();
	    return () => { observer.disconnect(); clearTimeout(timer); showAllSubscriptionVideos(); };
	  }, [activeGroup, groups, channelMap]);
	  if (groups.length === 0) return null;
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ytsm-reset ytsm-sub-filter-bar", children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "button",
	      {
	        className: `ytsm-filter-chip ${activeGroup === null ? "active" : ""}`,
	        onClick: () => {
	          setActiveGroup(null);
	          showAllSubscriptionVideos();
	        },
	        children: "All"
	      }
	    ),
	    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ytsm-filter-separator" }),
	    groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(
	      "button",
	      {
	        className: `ytsm-filter-chip ${activeGroup === group.id ? "active" : ""}`,
	        onClick: () => handleChipClick(group),
	        children: localizedGroupName(group)
	      },
	      group.id
	    ))
	  ] });
	}
	function filterSubscriptionVideos(group, channelMap) {
	  const groupChannelIds = /* @__PURE__ */ new Set();
	  for (const [chId, entry] of Object.entries(channelMap)) {
	    if (entry.groups?.includes(group.id)) {
	      groupChannelIds.add(chId);
	    }
	  }
	  const items = document.querySelectorAll("ytd-rich-item-renderer, ytd-grid-video-renderer");
	  const setDisplay = (item, value) => { if (item.style.display !== value) item.style.display = value; };
	  for (const item of items) {
	    const channelLink = item.querySelector('a[href*="/channel/"], a[href*="/@"]');
	    if (!channelLink) {
	      setDisplay(item, "");
	      continue;
	    }
	    const href = channelLink.getAttribute("href") || "";
	    let match = false;
	    for (const chId of groupChannelIds) {
	      if (href.includes(chId)) {
	        match = true;
	        break;
	      }
	    }
	    if (!match) {
	      const nameEl = item.querySelector("#channel-name, ytd-channel-name");
	      const name = nameEl?.textContent?.trim();
	      if (name) {
	        for (const [chId, entry] of Object.entries(channelMap)) {
	          if (entry.name === name && groupChannelIds.has(chId)) {
	            match = true;
	            break;
	          }
	        }
	      }
	    }
	    setDisplay(item, match ? "" : "none");
	  }
	}
	function showAllSubscriptionVideos() {
	  const items = document.querySelectorAll("ytd-rich-item-renderer, ytd-grid-video-renderer");
	  for (const item of items) {
	    if (item.style.display !== "") item.style.display = "";
	  }
	}

	/**
	 * DOM Observer — YouTube SPA navigation and element detection.
	 */

	const MOD$1 = 'DOMObserver';

	const listeners = [];
	let currentUrl = location.href;
	let initialized = false;

	/** Get structured context about the current YouTube page */
	function getPageContext() {
	  const url = new URL(location.href);
	  const path = url.pathname;

	  let pageType = 'unknown';
	  let channelId = null;
	  let channelHandle = null;
	  let videoId = null;

	  if (path === '/' || path === '') {
	    pageType = 'home';
	  } else if (path === '/feed/subscriptions') {
	    pageType = 'subscriptions';
	  } else if (path.startsWith('/watch')) {
	    pageType = 'watch';
	    videoId = url.searchParams.get('v');
	  } else if (path.startsWith('/@')) {
	    pageType = 'channel';
	    channelHandle = path.split('/')[1];
	  } else if (path.startsWith('/channel/')) {
	    pageType = 'channel';
	    channelId = path.split('/')[2];
	  } else if (path.startsWith('/c/') || path.startsWith('/user/')) {
	    pageType = 'channel';
	    channelHandle = path.split('/')[2];
	  } else if (path.startsWith('/feed/')) {
	    pageType = 'feed';
	  }

	  return { pageType, channelId, channelHandle, videoId, path, url: location.href };
	}

	/** Register a callback for URL/page changes */
	function onPageChange(callback) {
	  listeners.push(callback);
	  callback(getPageContext());
	}

	/** Notify all registered listeners */
	function notifyListeners() {
	  const ctx = getPageContext();
	  for (const cb of listeners) {
	    try { cb(ctx); } catch (err) {
	      log.error(MOD$1, 'Page change listener error', err);
	    }
	  }
	}

	/** Initialize the observer system */
	function init() {
	  if (initialized) return;
	  initialized = true;

	  // YouTube emits this after its SPA history transition; popstate covers browser back/forward.
	  const checkNavigation = () => {
	    const newUrl = location.href;
	    if (newUrl !== currentUrl) {
	      currentUrl = newUrl;
	      log.info(MOD$1, 'Navigation detected', newUrl);
	      setTimeout(notifyListeners, 300);
	    }
	  };
	  document.addEventListener('yt-navigate-finish', checkNavigation);
	  window.addEventListener('popstate', checkNavigation);

	  // Guide panel open/close
	  document.addEventListener('yt-guide-toggle', () => {
	    setTimeout(notifyListeners, 500);
	  });

	  log.info(MOD$1, 'Initialized');
	}

	const MOD = "ContentMain";
	function AppController() {
	  const [feedGroup, setFeedGroup] = reactExports.useState(null);
	  const [showDashboard, setShowDashboard] = reactExports.useState(false);
	  const [pageContext, setPageContext] = reactExports.useState(getPageContext());
	  reactExports.useEffect(() => {
	    onPageChange((ctx) => {
	      setPageContext(ctx);
	      setFeedGroup(null);
	      setShowDashboard(false);
	    });
	  }, []);
	  reactExports.useEffect(() => {
	    function handleMessage(msg, sender, sendResponse) {
	      if (msg.type === "OPEN_DASHBOARD") {
	        setShowDashboard(true);
	        sendResponse?.({ ok: true });
	      }
	      if (msg.type === "CHECK_SESSION") {
	        const signedIn = !!document.querySelector("ytd-topbar-menu-button-renderer #avatar-btn");
	        const username = document.querySelector("#account-name")?.textContent?.trim() || "";
	        sendResponse?.({ signedIn, username });
	      }
	    }
	    try {
	      chrome.runtime.onMessage.addListener(handleMessage);
	      return () => {
	        try {
	          chrome.runtime.onMessage.removeListener(handleMessage);
	        } catch (_) {
	        }
	      };
	    } catch (_) {
	    }
	  }, []);
	  reactExports.useEffect(() => {
	    if (location.hash === "#ytsubmgr-dashboard") {
	      setShowDashboard(true);
	      history.replaceState(null, "", location.pathname + location.search);
	    }
	  }, []);
	  const handleOpenFeed = reactExports.useCallback((group) => {
	    log.info(MOD, `Opening feed for group: ${group.name}`);
	    setFeedGroup(group);
	  }, []);
	  const handleSwitchGroup = reactExports.useCallback((group) => {
	    log.info(MOD, `Switching to group: ${group.name}`);
	    setFeedGroup(group);
	  }, []);
	  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
	    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarInjector, { onOpenFeed: handleOpenFeed, onOpenDashboard: () => setShowDashboard(true) }),
	    /* @__PURE__ */ jsxRuntimeExports.jsx(MastheadInjector, { onOpenDashboard: () => setShowDashboard(true) }),
	    pageContext.pageType === "channel" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelPageInjector, {}, pageContext.url),
	    pageContext.pageType === "watch" && /* @__PURE__ */ jsxRuntimeExports.jsx(VideoPageInjector, {}, pageContext.videoId),
	    pageContext.pageType === "subscriptions" && /* @__PURE__ */ jsxRuntimeExports.jsx(SubscriptionsInjector, {}),
	    feedGroup && /* @__PURE__ */ jsxRuntimeExports.jsx(
	      GroupFeed,
	      {
	        group: feedGroup,
	        onClose: () => setFeedGroup(null),
	        onSwitchGroup: handleSwitchGroup
	      }
	    ),
	    showDashboard && /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { onClose: () => setShowDashboard(false) })
	  ] });
	}
	function SidebarInjector({ onOpenFeed, onOpenDashboard }) {
	  const [container, setContainer] = reactExports.useState(null);
	  const { settings, loading } = useGroups();
	  reactExports.useEffect(() => {
	    if (loading) return;
	    let cancelled = false;
	    let retryTimer = null;
	    let attempts = 0;
	    function getInsertionPoint(guideEl) {
	      const position = settings.sidebarPosition || "bottom";
	      const sections = guideEl.querySelectorAll("ytd-guide-renderer > #sections > ytd-guide-section-renderer");
	      if (!sections || sections.length === 0) return null;
	      const posMap = {
	        "after-home": 1,
	        // After section 0 → before section 1
	        "after-subscriptions": 2,
	        // After section 1 → before section 2
	        "after-you": 3,
	        // After section 2 → before section 3
	        "before-explore": 3,
	        // Same as after-you
	        "after-explore": 4,
	        // After section 3 → before section 4
	        "bottom": null
	        // Before footer
	      };
	      const targetIndex = posMap[position];
	      if (targetIndex !== null && targetIndex !== void 0 && sections[targetIndex]) {
	        return sections[targetIndex];
	      }
	      return null;
	    }
	    function tryInject() {
	      const guides = Array.from(document.querySelectorAll("ytd-guide-renderer #guide-inner-content, tp-yt-app-drawer #guide-inner-content, #guide-content #guide-inner-content"));
	      const activeGuide = guides.find((el2) => {
	        const rect = el2.getBoundingClientRect();
	        return rect.width > 0 && rect.height > 0;
	      });
	      if (!activeGuide) return false;
	      const sectionsContainer = activeGuide.querySelector("ytd-guide-renderer > #sections") || activeGuide.querySelector("#sections");
	      const insertBefore = getInsertionPoint(activeGuide);
	      function placeElement(el2) {
	        if (insertBefore && sectionsContainer) {
	          if (el2.nextElementSibling !== insertBefore) {
	            sectionsContainer.insertBefore(el2, insertBefore);
	          }
	        } else {
	          const footer = activeGuide.querySelector("#footer");
	          if (footer) {
	            if (el2.nextElementSibling !== footer) {
	              footer.parentElement.insertBefore(el2, footer);
	            }
	          } else {
	            if (el2.parentElement !== activeGuide || el2.nextElementSibling) {
	              activeGuide.appendChild(el2);
	            }
	          }
	        }
	      }
	      let el = document.getElementById("ytsm-sidebar-root");
	      let isNew = false;
	      if (!el) {
	        el = document.createElement("div");
	        el.id = "ytsm-sidebar-root";
	        isNew = true;
	      }
	      placeElement(el);
	      if (!cancelled) {
	        setContainer((prev) => prev === el ? prev : el);
	      }
	      if (isNew) {
	        log.info(MOD, `Sidebar injected at position: ${settings.sidebarPosition || "bottom"}`);
	      }
	      return true;
	    }
	    function stopRetry() { if (retryTimer) { clearInterval(retryTimer); retryTimer = null; } }
	    function scheduleRetry() {
	      if (cancelled) return;
	      if (tryInject()) { stopRetry(); return; }
	      if (retryTimer) return;
	      attempts = 0;
	      retryTimer = setInterval(() => {
	        if (cancelled || tryInject() || ++attempts >= 20) stopRetry();
	      }, 500);
	    }
	    const onNavigate = () => scheduleRetry();
	    document.addEventListener("yt-navigate-finish", onNavigate);
	    scheduleRetry();
	    return () => {
	      cancelled = true;
	      stopRetry();
	      document.removeEventListener("yt-navigate-finish", onNavigate);
	    };
	  }, [settings.sidebarPosition, loading]);
	  if (!container) return null;
	  return ReactDOM.createPortal(
	    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarSection, { onOpenFeed, onOpenDashboard }),
	    container
	  );
	}
	function MastheadInjector({ onOpenDashboard }) {
	  const [container, setContainer] = reactExports.useState(null);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    let retryTimer = null;
	    let attempts = 0;
	    let scheduled = false;
	    function tryInject() {
	      const mastheadEnd = document.querySelector("ytd-masthead #end #buttons") || document.querySelector("ytd-masthead #end");
	      if (!mastheadEnd) return false;
	      if (mastheadEnd.querySelector("#ytsm-masthead-root")) {
	        const existing = mastheadEnd.querySelector("#ytsm-masthead-root");
	        if (existing.parentElement !== mastheadEnd || mastheadEnd.firstChild !== existing) {
	          mastheadEnd.insertBefore(existing, mastheadEnd.firstChild);
	        }
	        if (!cancelled) setContainer(existing);
	        return true;
	      }
	      let el = document.getElementById("ytsm-masthead-root");
	      let isNew = false;
	      if (!el) {
	        el = document.createElement("div");
	        el.id = "ytsm-masthead-root";
	        el.style.display = "flex";
	        el.style.alignItems = "center";
	        isNew = true;
	      }
	      mastheadEnd.insertBefore(el, mastheadEnd.firstChild);
	      if (!cancelled) setContainer(el);
	      if (isNew) log.info(MOD, "Masthead container injected");
	      return true;
	    }
	    function stopRetry() { if (retryTimer) { clearInterval(retryTimer); retryTimer = null; } }
	    function scheduleRetry() {
	      if (cancelled) return;
	      if (tryInject()) { stopRetry(); return; }
	      if (retryTimer) return;
	      attempts = 0;
	      retryTimer = setInterval(() => {
	        if (cancelled || tryInject() || ++attempts >= 20) stopRetry();
	      }, 500);
	    }
	    function scheduleReconcile() {
	      if (cancelled || scheduled) return;
	      scheduled = true;
	      requestAnimationFrame(() => {
	        scheduled = false;
	        scheduleRetry();
	      });
	    }
	    const onNavigate = () => scheduleRetry();
	    const mastheadObserver = new MutationObserver(records => {
	      const relevant = records.some(record => {
	        const target = record.target.nodeType === 1 ? record.target : record.target.parentElement;
	        if (target && target.closest && target.closest("ytd-masthead")) return true;
	        return [...record.addedNodes, ...record.removedNodes].some(node => node.nodeType === 1 &&
	          (node.matches("ytd-masthead") || node.querySelector("ytd-masthead")));
	      });
	      if (relevant) scheduleReconcile();
	    });
	    mastheadObserver.observe(document.querySelector("ytd-app") || document.body, { childList: true, subtree: true });
	    document.addEventListener("yt-navigate-finish", onNavigate);
	    scheduleRetry();
	    return () => {
	      cancelled = true;
	      stopRetry();
	      mastheadObserver.disconnect();
	      document.removeEventListener("yt-navigate-finish", onNavigate);
	    };
	  }, []);
	  if (!container) return null;
	  return ReactDOM.createPortal(
	    /* @__PURE__ */ jsxRuntimeExports.jsx(MastheadButton, { onClick: onOpenDashboard }),
	    container
	  );
	}
	function ChannelPageInjector() {
	  const [container, setContainer] = reactExports.useState(null);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    let retryTimer;
	    function tryInject() {
	      const selectors = [
	        "yt-flexible-actions-view-model",
	        "ytd-c4-tabbed-header-renderer #inner-header-container #buttons",
	        "ytd-c4-tabbed-header-renderer #channel-header #buttons",
	        "#channel-header-container #buttons",
	        "ytd-c4-tabbed-header-renderer #buttons"
	      ];
	      let target = null;
	      for (const sel of selectors) {
	        target = document.querySelector(sel);
	        if (target) {
	          log.info(MOD, `Channel page: found target with selector "${sel}"`);
	          break;
	        }
	      }
	      if (!target) return false;
	      if (target.querySelector("#ytsm-channel-btn-root")) {
	        const existing = target.querySelector("#ytsm-channel-btn-root");
	        if (!cancelled) setContainer(existing);
	        return true;
	      }
	      const wrapper = document.createElement("div");
	      wrapper.className = "ytFlexibleActionsViewModelAction";
	      const el = document.createElement("div");
	      el.id = "ytsm-channel-btn-root";
	      el.style.display = "inline-flex";
	      el.style.alignItems = "center";
	      wrapper.appendChild(el);
	      target.appendChild(wrapper);
	      if (!cancelled) setContainer(el);
	      log.info(MOD, "Channel page button injected");
	      return true;
	    }
	    if (!tryInject()) {
	      let attempts = 0;
	      retryTimer = setInterval(() => {
	        if (tryInject() || ++attempts > 20) clearInterval(retryTimer);
	      }, 1e3);
	    }
	    return () => {
	      cancelled = true;
	      clearInterval(retryTimer);
	    };
	  }, []);
	  if (!container) return null;
	  return ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(ChannelPageButton, {}), container);
	}
	function VideoPageInjector() {
	  const [container, setContainer] = reactExports.useState(null);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    let retryTimer;
	    function tryInject() {
	      const selectors = [
	        "ytd-watch-metadata #top-row #owner",
	        "#above-the-fold #top-row #owner",
	        "#top-row #owner"
	      ];
	      let owner = null;
	      for (const sel of selectors) {
	        owner = document.querySelector(sel);
	        if (owner) {
	          log.info(MOD, `Video page: found target with selector "${sel}"`);
	          break;
	        }
	      }
	      if (!owner) return false;
	      if (owner.querySelector("#ytsm-video-btn-root")) {
	        const existing = owner.querySelector("#ytsm-video-btn-root");
	        if (!cancelled) setContainer(existing);
	        return true;
	      }
	      const el = document.createElement("div");
	      el.id = "ytsm-video-btn-root";
	      el.style.display = "flex";
	      el.style.alignItems = "center";
	      el.style.marginLeft = "8px";
	      el.style.flexShrink = "0";
	      owner.appendChild(el);
	      if (!cancelled) setContainer(el);
	      log.info(MOD, "Video page button injected into #owner");
	      return true;
	    }
	    if (!tryInject()) {
	      let attempts = 0;
	      retryTimer = setInterval(() => {
	        if (tryInject() || ++attempts > 20) clearInterval(retryTimer);
	      }, 1e3);
	    }
	    return () => {
	      cancelled = true;
	      clearInterval(retryTimer);
	    };
	  }, []);
	  if (!container) return null;
	  return ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(VideoPageButton, {}), container);
	}
	function SubscriptionsInjector() {
	  const [container, setContainer] = reactExports.useState(null);
	  reactExports.useEffect(() => {
	    let cancelled = false;
	    let retryTimer;
	    function tryInject() {
	      const target = document.querySelector('ytd-browse[page-subtype="subscriptions"] #header, ytd-browse[page-subtype="subscriptions"] ytd-rich-grid-renderer');
	      if (target && !document.querySelector("#ytsm-sub-filter-root")) {
	        const el = document.createElement("div");
	        el.id = "ytsm-sub-filter-root";
	        target.insertBefore(el, target.firstChild);
	        if (!cancelled) setContainer(el);
	        log.info(MOD, "Subscriptions filter injected");
	        return true;
	      }
	      return false;
	    }
	    if (!tryInject()) {
	      let attempts = 0;
	      retryTimer = setInterval(() => {
	        if (tryInject() || ++attempts > 10) clearInterval(retryTimer);
	      }, 1e3);
	    }
	    return () => {
	      cancelled = true;
	      clearInterval(retryTimer);
	      container?.remove();
	    };
	  }, []);
	  if (!container) return null;
	  return ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(SubscriptionsFilter, {}), container);
	}
	function bootstrap() {
	  log.info(MOD, "Bootstrapping extension...");
	  init();
	  const rootEl = document.createElement("div");
	  rootEl.id = "ytsm-app-root";
	  rootEl.style.position = "fixed";
	  rootEl.style.top = "0";
	  rootEl.style.left = "0";
	  rootEl.style.width = "0";
	  rootEl.style.height = "0";
	  rootEl.style.overflow = "visible";
	  rootEl.style.zIndex = "99999";
	  rootEl.style.pointerEvents = "none";
	  document.body.appendChild(rootEl);
	  const root = clientExports.createRoot(rootEl);
	  root.render(
	    /* @__PURE__ */ jsxRuntimeExports.jsx(GroupsProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { pointerEvents: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppController, {}) }) })
	  );
	  log.info(MOD, "React tree mounted");
	}
	if (document.body) {
	  bootstrap();
	} else {
	  document.addEventListener("DOMContentLoaded", bootstrap);
	}

})();



/* ═══ Local patch: multi-language UI (UA/ES/PT/DE/FR/PL/IT) + selector ═══ */
(function () {
  if (window.__TS_I18N__) return;
  window.__TS_I18N__ = true;
  var LOCALE_DATA = globalThis.TUBESTACK_LOCALES || {};
  var DICTS = LOCALE_DATA.dictionaries || {};
  var NAMES = LOCALE_DATA.names || {};
  var ORDER = LOCALE_DATA.order || ["uk"];
  var PLURAL = {};
  var ALLW = [];
  for (var pi = 0; pi < ORDER.length; pi++) {
    (function (code) {
      var forms = (LOCALE_DATA.plurals || {})[code] || { one: "channel", other: "channels" };
      PLURAL[code] = function (n) {
        var abs = Math.abs(Number(n) || 0);
        if (forms.rule === "intl") {
          var category = new Intl.PluralRules(code).select(abs);
          return forms[category] || forms.other || forms.many || forms.few || forms.one;
        }
        if (forms.rule === "slavic") {
          var last = abs % 10, lastTwo = abs % 100;
          if (last === 1 && lastTwo !== 11) return forms.one;
          if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return forms.few;
          return forms.many;
        }
        return abs === 1 ? forms.one : forms.other;
      };
      Object.keys(forms).forEach(function (key) { var word = key === "rule" ? "" : forms[key]; if (word && ALLW.indexOf(word) < 0) ALLW.push(word); });
    })(ORDER[pi]);
  }
  function escapePatternPart(text) {
    var slash = String.fromCharCode(92);
    return text.split("").map(function (ch) { return ch === slash || ".^$*+?()[]{}|".indexOf(ch) >= 0 ? slash + ch : ch; }).join("");
  }
  function compileLocalePattern(pattern) {
    var source = String(pattern || "").replace(/\{(?:done|total|count|username)\}/g, "__TS_PLACEHOLDER__");
    return new RegExp("^" + source.split("__TS_PLACEHOLDER__").map(escapePatternPart).join("(.+)") + "$");
  }
  function renderLocalePattern(pattern, values) {
    return String(pattern || "").replace(/\{(done|total|count|username)\}/g, function (_, key) { return values[key]; });
  }
  var EXTRA = {};
  for (var ei = 0; ei < ORDER.length; ei++) {
    (function (code) {
      var p = (LOCALE_DATA.extra || {})[code] || {};
      EXTRA[code] = {
        enrRe: compileLocalePattern(p.enriched),
        enr: function (a, b) { return renderLocalePattern(p.enriched, { done: a, total: b }); },
        showRe: compileLocalePattern(p.showing),
        show: function (n) { return renderLocalePattern(p.showing, { count: n }); },
        signedInAsRe: compileLocalePattern(p.signedInAs),
        signedInAs: function (username) { return renderLocalePattern(p.signedInAs, { username: username }); }
      };
    })(ORDER[ei]);
  }
var REV = {};
  for (var lg in DICTS) {
    var r = {};
    for (var k2 in DICTS[lg]) r[DICTS[lg][k2]] = k2;
    REV[lg] = r;
  }
  var lang = "uk", cur = "uk";
  window.__tsLang = lang;
  var scheduled = false;
  function toEN(t) {
    if (REV[cur] && REV[cur][t]) return REV[cur][t];
    var ex = EXTRA[cur], m;
    if (ex) {
      m = t.match(ex.enrRe);
      if (m) return "Enriched " + m[1] + " / " + m[2] + " channels";
      m = t.match(ex.showRe);
      if (m) return "Showing first " + m[1] + " of";
      m = t.match(ex.signedInAsRe);
      if (m) return "Signed in as " + m[1];
    }
    return null;
  }
  function step(t) {
    var en = toEN(t) || t;
    var d = DICTS[lang];
    if (d && d[en]) return d[en];
    if (lang === "en") return en !== t ? en : null;
    var m = en.match(/^Enriched (\d+) \/ (\d+) channels$/);
    if (m) return EXTRA[lang].enr(m[1], m[2]);
    m = en.match(/^Showing first (\d+) of$/);
    if (m) return EXTRA[lang].show(m[1]);
    m = en.match(/^Signed in as (.+)$/);
    if (m) return EXTRA[lang].signedInAs(m[1]);
    return null;
  }
  function isYtsm(el) {
    if (location.protocol === "chrome-extension:") return true;
    return !!(el.closest && el.closest(".ytsm-reset, .ytsm-dashboard, .ytsm-overlay, .ytsm-sidebar-section, .ytsm-sub-filter-bar, .ytsm-feed-topbar, .ytsm-feed-container, .ysm-tags"));
  }
  function walkText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var v = n.nodeValue || "";
      var t = v.trim();
      if (!t) continue;
      if (n.parentNode && !isYtsm(n.parentNode)) continue;
      var sib = n.nextSibling;
      if (/^\d+$/.test(t) && sib && sib.nodeType === 3) {
        var st = (sib.nodeValue || "").trim();
        if (st === "channels" || ALLW.indexOf(st) !== -1) { sib.nodeValue = " " + (PLURAL[lang](+t)); continue; }
      }
      var tr = step(t);
      if (tr && tr !== t) n.nodeValue = v.replace(t, tr);
    }
  }
  function walkAttrs(root) {
    if (!root.querySelectorAll) return;
    var els = root.querySelectorAll("[placeholder],[title],[aria-label]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!isYtsm(el)) continue;
      var a = ["placeholder", "title", "aria-label"];
      for (var j = 0; j < a.length; j++) {
        var v = el.getAttribute(a[j]);
        if (!v) continue;
        var tr = step(v);
        if (tr && tr !== v) el.setAttribute(a[j], tr);
      }
    }
  }
  function scopes() {
    if (location.protocol === "chrome-extension:") return [document.body];
    return Array.prototype.slice.call(document.querySelectorAll(".ytsm-reset, .ytsm-dashboard, .ytsm-overlay, .ytsm-sidebar-section, .ytsm-sub-filter-bar, .ytsm-feed-topbar, .ytsm-feed-container, .ysm-tags"));
  }
  var LANG_LABEL = LOCALE_DATA.languageLabels || {};
  function ensureSelector(anchorSel, beforeSel) {
    var section = document.querySelector(".ytsm-settings-section");
    if (!section) return;
    var row = document.querySelector(".ts-lang-row");
    var sel = document.querySelector(".ts-lang-select");
    if (sel) {
      sel.value = lang;
      if (row) {
        var lab = row.querySelector("label");
        if (lab && lab.textContent !== (LANG_LABEL[lang] || "Language")) lab.textContent = LANG_LABEL[lang] || "Language";
      }
      return;
    }
    row = document.createElement("div");
    row.className = "ytsm-settings-row ts-lang-row";
    var lab = document.createElement("label");
    lab.textContent = LANG_LABEL[lang] || "Language";
    row.appendChild(lab);
    sel = document.createElement("select");
    sel.className = "ytsm-select ts-lang-select";
    for (var i = 0; i < ORDER.length; i++) {
      var option = document.createElement("option");
      option.value = ORDER[i];
      option.textContent = NAMES[ORDER[i]] || ORDER[i];
      sel.appendChild(option);
    }
    sel.value = lang;
    sel.addEventListener("change", function () {
      try { chrome.storage.local.set({ tsLang: sel.value }); } catch (e) {}
    });
    row.appendChild(sel);
    section.insertBefore(row, section.firstChild);
  }
  function applyAll() {
    if (location.protocol === "chrome-extension:") document.documentElement.lang = lang;
    var srows = document.querySelectorAll(".ytsm-settings-row");
    for (var s = 0; s < srows.length; s++) {
      var lb = srows[s].querySelector("label"), sl = srows[s].querySelector("select");
      if (lb && sl) { if (!sl.id) sl.id = "ts-set-" + s; lb.setAttribute("for", sl.id); }
    }
    if (document.querySelector(".ytsm-dash-header")) ensureSelector(".ytsm-dash-header", ".ytsm-dash-close");
    else if (document.querySelector(".popup-footer")) ensureSelector(".popup-header, body", null);
    var list = scopes();
    for (var i = 0; i < list.length; i++) { walkText(list[i]); walkAttrs(list[i]); }
    cur = lang;
  }
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    setTimeout(function () { scheduled = false; applyAll(); }, 60);
  }
  try {
    chrome.storage.local.get(["tsLang"], function (res) {
      if (res && res.tsLang && ORDER.indexOf(res.tsLang) !== -1) lang = res.tsLang;
      window.__tsLang = lang;
      applyAll();
    });
    chrome.storage.onChanged.addListener(function (ch) {
      if (ch.tsLang && ORDER.indexOf(ch.tsLang.newValue) !== -1) { lang = ch.tsLang.newValue; window.__tsLang = lang; applyAll(); }
    });
  } catch (e) {}
  window.__tsT = function (s) { try { var r = step(s); return r || s; } catch (e) { return s; } };
  var observerOptions = { childList: true, subtree: true, attributes: true, attributeFilter: ["placeholder", "title", "aria-label"] };
  if (location.protocol === "chrome-extension:") observerOptions.characterData = true;
  new MutationObserver(schedule).observe(document.documentElement, observerOptions);
})();

/* ═══ Local patch: weekly auto-backup ═══ */
(function () {
  if (window.__TS_AUTO_BACKUP__) return;
  window.__TS_AUTO_BACKUP__ = true;
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function sendBackupState(type, payload) {
    return new Promise(function (resolve, reject) {
      try {
        chrome.runtime.sendMessage({ type: type, payload: payload || {} }, function (response) {
          if (chrome.runtime.lastError) return reject(new Error(chrome.runtime.lastError.message));
          if (!response || response.error) return reject(new Error(response && response.error || "No response"));
          resolve(response);
        });
      } catch (e) { reject(e); }
    });
  }
  function run() {
    sendBackupState("CLAIM_WEEKLY_BACKUP").then(function (claim) {
      if (!claim.claimed) return;
      chrome.storage.local.get(["groups", "channelMap", "settings", "watchedVideos", "unsubHistory", "activityAudit", "tsLang"], function (res) {
        if (chrome.runtime.lastError) {
          sendBackupState("FINISH_WEEKLY_BACKUP", { success: false }).catch(function () {});
          return;
        }
        var hasData = (res.groups && res.groups.length) || (res.channelMap && Object.keys(res.channelMap).length);
        if (!hasData) { sendBackupState("FINISH_WEEKLY_BACKUP", { success: true }).catch(function () {}); return; }
        var data = {
          exportVersion: 3,
          exportTimestamp: new Date().toISOString(),
          groups: res.groups || [],
          channelMap: res.channelMap || {},
          settings: res.settings || {},
          watchedVideos: res.watchedVideos || {},
          unsubHistory: res.unsubHistory || [],
          activityAudit: res.activityAudit || {},
          tsLang: res.tsLang || "uk"
        };
        var d = new Date();
        var name = "chanopy-backup-" + d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + ".json";
        try {
          var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = name;
          document.documentElement.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { try { URL.revokeObjectURL(url); } catch (e) {} }, 10000);
          sendBackupState("FINISH_WEEKLY_BACKUP", { success: true }).catch(function (e) { console.warn("[Chanopy] backup timestamp save failed:", e); });
          console.log("[Chanopy] weekly auto-backup saved:", name);
        } catch (e) {
          console.warn("[Chanopy] auto-backup failed:", e);
          sendBackupState("FINISH_WEEKLY_BACKUP", { success: false }).catch(function () {});
        }
      });
    }).catch(function (e) { console.warn("[Chanopy] auto-backup lock failed:", e); });
  }
  setTimeout(run, 8000);
})();

/* ═══ Local patch: subscriptions harvest — SW-orchestrated (tab + join + close) ═══ */
(function () {
  if (window.__TS_HARVEST_UI__) return;
  window.__TS_HARVEST_UI__ = true;
  var LBL = (globalThis.TUBESTACK_LOCALES || {}).sync || {};
  var lang = "uk";
  function lbl() { return LBL[lang] || LBL.uk || LBL.en; }
  try {
    chrome.storage.local.get(["tsLang"], function (r) { if (r && r.tsLang && LBL[r.tsLang]) { lang = r.tsLang; updateBtnLabel(); } });
    chrome.storage.onChanged.addListener(function (ch) { if (ch.tsLang && LBL[ch.tsLang.newValue]) { lang = ch.tsLang.newValue; updateBtnLabel(); } });
  } catch (e) {}
  function updateBtnLabel() {
    var b = document.getElementById("ts-harvest-btn");
    var want = lbl().button;
    if (b && b.textContent !== want) b.textContent = want;
  }
  var running = false;
  var statusEl = null;
  function setStatus(text, autohideMs) {
    if (!statusEl) {
      statusEl = document.createElement("div");
      statusEl.className = "ytsm-reset";
      statusEl.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:100002;padding:12px 18px;border-radius:10px;background:var(--ytsm-bg-elevated,#212121);color:var(--ytsm-text-primary,#f1f1f1);border:1px solid var(--ytsm-border,#3e3e3e);box-shadow:0 4px 16px rgba(0,0,0,.4);font-size:13px;max-width:360px";
      document.documentElement.appendChild(statusEl);
    }
    statusEl.textContent = text;
    statusEl.style.display = "block";
    if (statusEl._t) { clearTimeout(statusEl._t); statusEl._t = null; }
    if (autohideMs) statusEl._t = setTimeout(function () { statusEl.style.display = "none"; }, autohideMs);
  }
  function hideStatus() { if (statusEl) statusEl.style.display = "none"; }
  function runHarvest() {
    if (running) { setStatus("\u23F3 " + lbl().busy, 3000); return; }
    running = true;
    setStatus("\uD83D\uDD01 " + lbl().waiting);
    var guard = setTimeout(function () {
      if (running) {
        running = false;
        setStatus("\u26A0 " + (lbl().timeout || "Timed out — reload the page and try again"), 8000);
      }
    }, 960000);
    try {
      chrome.runtime.sendMessage({ type: "TS_HARVEST_START" }, function (r) {
        clearTimeout(guard);
        running = false;
        if (chrome.runtime.lastError) { setStatus("\u26A0 " + String(chrome.runtime.lastError.message || "error"), 6000); return; }
        if (!r || !r.ok) { setStatus("\u26A0 " + ((r && r.error) || "error"), 6000); return; }
        setStatus("\u2705 " + lbl().done.replace("{added}", r.added).replace("{renamed}", r.renamed).replace("{total}", r.total), 10000);
        console.log("[Chanopy] harvest:", r.total, "channels,", r.added, "new,", r.renamed, "renamed");
      });
    } catch (e) { clearTimeout(guard); running = false; setStatus("\u26A0 " + String(e), 6000); }
  }
  function ensureButton() {
    var bars = document.querySelectorAll(".ytsm-channels-toolbar");
    var bar = null;
    for (var i = 0; i < bars.length; i++) {
      if (bars[i].classList.contains("ts-channels-actions") && !bars[i].closest(".ts-history-overlay")) { bar = bars[i]; break; }
    }
    if (!bar) return;
    var primaryRow = bar.querySelector(".ts-action-primary") || bar;
    var existing = document.getElementById("ts-harvest-btn");
    if (existing) {
      if (existing.parentElement === primaryRow) {
        var want = lbl().button;
        if (existing.textContent !== want) existing.textContent = want;
        return;
      }
      existing.remove();
    }
    var btn = document.createElement("button");
    btn.id = "ts-harvest-btn";
    btn.className = "ytsm-btn ytsm-btn-primary ts-action-sync";
    btn.textContent = lbl().button;
    btn.addEventListener("click", function (e) { e.stopPropagation(); runHarvest(); });
    primaryRow.appendChild(btn);
  }
  var sched = false;
  function schedule() {
    if (sched) return;
    sched = true;
    setTimeout(function () { sched = false; ensureButton(); }, 200);
  }
  var appRoot = document.getElementById("ytsm-app-root") || document.body;
  if (appRoot) new MutationObserver(schedule).observe(appRoot, { childList: true, subtree: true });
})();
