//noinspection JSUnresolvedVariable,UnterminatedStatementJS
module.exports = function(){
    !function(e,r){"use strict";function t(e,r){var t=new XMLHttpRequest;t.open("POST",e,!0),t.setRequestHeader("Content-Type","application/json"),t.send(r)}function n(e){var r=e.split("/");return r.includes("nl")||r.includes("fr")?r.slice(1,3).join("/"):r[1]}window.onerror=function(o,s,i,a,c){if(!(o.indexOf("Script error")>-1||r.host.indexOf("www.autoscout24")<0)){var u={httpUri:r.href,httpReferrer:document.referrer,pagePath:n(r.pathname),jsSrc:s||"",jsLine:i||"",jsColumn:a||"",browserOs:e.platform,browserUseragent:e.userAgent,errorStacktrace:c?c.stack:"",errorMessage:o||""};t("https://"+(r.host.indexOf("dev-www.")>-1?"dev-":"")+"js-error-logger.infinity.eu-west-1.s24cloud.net/log",JSON.stringify(u))}}}(navigator,location);
    
    if (window.location.hash.indexOf('systemfonts') < 0) {
    !function(){function e(e,t,n,o){function i(){document.write('<link rel="stylesheet" href="'+e+'">'),document.documentElement.className+=" "+o}function a(){try{localStorage["font-loaded-"+t]=Date.now()}catch(e){console.warn("Cannot save fonts to localStorage")}}function l(){f&&(s(f),f=null),f=c(function(){for(var e=!0,t=0;t<d.length;t+=r.length)e=e&&d[t].clientWidth===d[t+1].clientWidth&&d[t+1].clientWidth===d[t+2].clientWidth&&d[t].clientHeight===d[t+1].clientHeight&&d[t+1].clientHeight===d[t+2].clientHeight;e&&(document.documentElement.className+=" "+o,a(),d.forEach(function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}),l=function(){})})}var c=window.requestAnimationFrame||function(e){return setTimeout(e,50)},s=window.cancelAnimationFrame||clearTimeout,r=["sans-serif","serif","monospace"],d=[];try{if(Date.now()-localStorage["font-loaded-"+t]<864e5)return a(),void i();!function(t){var n=document.createElement("link");n.media="only x",n.rel="stylesheet",n.href=e,n.onload=function(){this.media="all",this.onload=null,function e(){if(!document.body)return c(e);t()}()};var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}(function(){n.forEach(function(e){r.forEach(function(n){var o=document.createElement("div");o.innerHTML='<object style="display:block;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;" type="text/html"></object>MXWmxwi0123',o.style.cssText="z-index:-1;overflow:hidden;pointer-events:none;position:absolute;visibility:hidden;display:inline-block;line-height:1;font-size:16px;font-family:"+n+";font-weight:"+e,document.body.appendChild(o),d.push(o);var i=o.querySelector("object");i.data="about:blank",i.onload=function(){this.contentDocument.defaultView.addEventListener("resize",l),l()},o.style.fontFamily=t+","+n})})})}catch(e){i()}var f}if(!(location.href.indexOf("web-font=no")>=0)){var t=document.createElement("style");t.innerHTML=".font-loaded body{font-family:Source Sans Pro,sans-serif;}";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),e("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&subset=latin,latin-ext","Source Sans Pro",[400,600],"font-loaded"),location.href.indexOf("web-font=opensans")>=0&&(e("https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=latin,latin-ext","Open Sans",[400,600],"font-loaded"),t.innerHTML=".font-loaded body{font-family:Open Sans,sans-serif;}")}}();
    } else {
        document.write('<style>body,[data-showcar-ui]{font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, "Segoe UI Symbol" !important; }</style>');
    }
    
    /*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e){"use strict";function t(){return c.createDocumentFragment()}function n(e){return c.createElement(e)}function r(e,t){if(!e)throw new Error("Failed to construct "+t+": 1 argument required, but only 0 present.")}function i(e){if(e.length===1)return s(e[0]);for(var n=t(),r=R.call(e),i=0;i<e.length;i++)n.appendChild(s(r[i]));return n}function s(e){return typeof e=="string"?c.createTextNode(e):e}for(var o,u,a,f,l,c=e.document,h=Object.prototype.hasOwnProperty,p=Object.defineProperty||function(e,t,n){return h.call(n,"value")?e[t]=n.value:(h.call(n,"get")&&e.__defineGetter__(t,n.get),h.call(n,"set")&&e.__defineSetter__(t,n.set)),e},d=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},v=function(e){if(!e)throw"SyntaxError";if(w.test(e))throw"InvalidCharacterError";return e},m=function(e){var t=typeof e.className=="undefined",n=t?e.getAttribute("class")||"":e.className,r=t||typeof n=="object",i=(r?t?n:n.baseVal:n).replace(b,"");i.length&&q.push.apply(this,i.split(w)),this._isSVG=r,this._=e},g={get:function(){return new m(this)},set:function(){}},y="dom4-tmp-".concat(Math.random()*+(new Date)).replace(".","-"),b=/^\s+|\s+$/g,w=/\s+/,E=" ",S="classList",x=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},T=e.DocumentFragment&&DocumentFragment.prototype,N=e.Node,C=(N||Element).prototype,k=e.CharacterData||N,L=k&&k.prototype,A=e.DocumentType,O=A&&A.prototype,M=(e.Element||N||e.HTMLElement).prototype,_=e.HTMLSelectElement||n("select").constructor,D=_.prototype.remove,P=e.ShadowRoot,H=e.SVGElement,B=/ /g,j="\\ ",F=function(e){var t=e==="querySelectorAll";return function(n){var r,i,s,o,u,a,f=this.parentNode;if(f){for(s=this.getAttribute("id")||y,o=s===y?s:s.replace(B,j),a=n.split(","),i=0;i<a.length;i++)a[i]="#"+o+" "+a[i];n=a.join(",")}s===y&&this.setAttribute("id",s),u=(f||this)[e](n),s===y&&this.removeAttribute("id");if(t){i=u.length,r=new Array(i);while(i--)r[i]=u[i]}else r=u;return r}},I=function(e){"query"in e||(e.query=M.query),"queryAll"in e||(e.queryAll=M.queryAll)},q=["matches",M.matchesSelector||M.webkitMatchesSelector||M.khtmlMatchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<d.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,n=i(arguments);t?this.insertBefore(n,t):this.appendChild(n)},"append",function(){this.appendChild(i(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},"after",function(){var t=this.parentNode,n=this.nextSibling,r=i(arguments);t&&(n?t.insertBefore(r,n):t.appendChild(r))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",F("querySelector"),"queryAll",F("querySelectorAll")],R=q.slice,U=q.length;U;U-=2){u=q[U-2],u in M||(M[u]=q[U-1]),u==="remove"&&(_.prototype[u]=function(){return 0<arguments.length?D.apply(this,arguments):M.remove.call(this)}),/^(?:before|after|replace|replaceWith|remove)$/.test(u)&&(k&&!(u in L)&&(L[u]=q[U-1]),A&&!(u in O)&&(O[u]=q[U-1]));if(/^(?:append|prepend)$/.test(u))if(T)u in T||(T[u]=q[U-1]);else try{t().constructor.prototype[u]=q[U-1]}catch(z){}}I(c);if(T)I(T);else try{I(t().constructor.prototype)}catch(z){}P&&I(P.prototype),n("a").matches("a")||(M[u]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(M[u])),m.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||q.push.call(this,u);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(n){return U=e.call(this,u=v(n)),-1<U}}([].indexOf||function(e){U=this.length;while(U--&&this[U]!==e);return U}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&q.splice.call(this,U,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:x,toString:function W(){return q.join.call(this,E)}},H&&!(S in H.prototype)&&p(H.prototype,S,g),S in c.documentElement?(f=n("div")[S],f.add("a","b","a"),"a b"!=f&&(a=f.constructor.prototype,"add"in a||(a=e.TemporaryTokenList.prototype),l=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},a.add=l(a.add),a.remove=l(a.remove),a.toggle=x)):p(M,S,g),"contains"in C||p(C,"contains",{value:function(e){while(e&&e!==this)e=e.parentNode;return this===e}}),"head"in c||p(c,"head",{get:function(){return o||(o=c.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],s=i.length;!r&&s--;)n=n||e[i[s]+"RequestAnimationFrame"],r=e[i[s]+"CancelAnimationFrame"]||e[i[s]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(z){e.CustomEvent=function(e,t){function n(n,i){var s=c.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(z){z=function(e){function t(e,t){r(arguments.length,"Event");var n=c.createEvent("Event");return t||(t={}),n.initEvent(e,!!t.bubbles,!!t.cancelable),n}return t.prototype=e.prototype,t}(e.Event||function(){}),p(e,"Event",{value:z}),Event!==z&&(Event=z)}try{new KeyboardEvent("_",{})}catch(z){z=function(t){function a(e){for(var t=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],r=0;r<n.length;r+=2)e[n[r]]&&t.push(n[r+1]);return t.join(" ")}function f(e,t){for(var n in t)t.hasOwnProperty(n)&&!t.hasOwnProperty.call(e,n)&&(e[n]=t[n]);return e}function l(e,t,n){try{t[e]=n[e]}catch(r){}}function h(t,o){r(arguments.length,"KeyboardEvent"),o=f(o||{},i);var u=c.createEvent(s),h=o.ctrlKey,p=o.shiftKey,d=o.altKey,v=o.metaKey,m=o.altGraphKey,g=n>3?a(o):null,y=String(o.key),b=String(o.char),w=o.location,E=o.keyCode||(o.keyCode=y)&&y.charCodeAt(0)||0,S=o.charCode||(o.charCode=b)&&b.charCodeAt(0)||0,x=o.bubbles,T=o.cancelable,N=o.repeat,C=o.locale,k=o.view||e,L;o.which||(o.which=o.keyCode);if("initKeyEvent"in u)u.initKeyEvent(t,x,T,k,h,d,p,v,E,S);else if(0<n&&"initKeyboardEvent"in u){L=[t,x,T,k];switch(n){case 1:L.push(y,w,h,p,d,v,m);break;case 2:L.push(h,d,p,v,E,S);break;case 3:L.push(y,w,h,d,p,v,m);break;case 4:L.push(y,w,g,N,C);break;default:L.push(char,y,w,g,N,C)}u.initKeyboardEvent.apply(u,L)}else u.initEvent(t,x,T);for(y in u)i.hasOwnProperty(y)&&u[y]!==o[y]&&l(y,u,o);return u}var n=0,i={"char":"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0},s;try{var o=c.createEvent("KeyboardEvent");o.initKeyboardEvent("keyup",!1,!1,e,"+",3,!0,!1,!0,!1,!1),n=(o.keyIdentifier||o.key)=="+"&&(o.keyLocation||o.location)==3&&(o.ctrlKey?o.altKey?1:3:o.shiftKey?2:4)||9}catch(u){}return s=0<n?"KeyboardEvent":"Event",h.prototype=t.prototype,h}(e.KeyboardEvent||function(){}),p(e,"KeyboardEvent",{value:z}),KeyboardEvent!==z&&(KeyboardEvent=z)}try{new MouseEvent("_",{})}catch(z){z=function(t){function n(t,n){r(arguments.length,"MouseEvent");var i=c.createEvent("MouseEvent");return n||(n={}),i.initMouseEvent(t,!!n.bubbles,!!n.cancelable,n.view||e,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),i}return n.prototype=t.prototype,n}(e.MouseEvent||function(){}),p(e,"MouseEvent",{value:z}),MouseEvent!==z&&(MouseEvent=z)}})(window),function(e){"use strict";function n(){}function r(e,t,n){function i(e){i.once&&(e.currentTarget.removeEventListener(e.type,t,i),i.removed=!0),i.passive&&(e.preventDefault=r.preventDefault),typeof i.callback=="function"?i.callback.call(this,e):i.callback&&i.callback.handleEvent(e),i.passive&&delete e.preventDefault}return i.type=e,i.callback=t,i.capture=!!n.capture,i.passive=!!n.passive,i.once=!!n.once,i.removed=!1,i}var t=e.WeakMap||function(){function s(e,i,s){n=s,t=!1,r=undefined,e.dispatchEvent(i)}function o(e){this.value=e}function u(){e++,this.__ce__=new i("@DOMMap:"+e+Math.random())}var e=0,t=!1,n=!1,r;return o.prototype.handleEvent=function(i){t=!0,n?i.currentTarget.removeEventListener(i.type,this,!1):r=this.value},u.prototype={constructor:u,"delete":function(n){return s(n,this.__ce__,!0),t},get:function(t){s(t,this.__ce__,!1);var n=r;return r=undefined,n},has:function(n){return s(n,this.__ce__,!1),t},set:function(t,n){return s(t,this.__ce__,!0),t.addEventListener(this.__ce__.type,new o(n),!1),this}},u}();n.prototype=(Object.create||Object)(null),r.preventDefault=function(){};var i=e.CustomEvent,s=Object.prototype.hasOwnProperty,o=e.dispatchEvent,u=e.addEventListener,a=e.removeEventListener,f=0,l=function(){f++},c=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},h=function(e){return"".concat(e.capture?"1":"0",e.passive?"1":"0",e.once?"1":"0")},p,d;try{u("_",l,{once:!0}),o(new i("_")),o(new i("_")),a("_",l,{once:!0})}catch(v){}f!==1&&function(){function s(e){return function(s,o,u){if(u&&typeof u!="boolean"){var a=i.get(this),f=h(u),l,p,d;a||i.set(this,a=new n),s in a||(a[s]={handler:[],wrap:[]}),p=a[s],l=c.call(p.handler,o),l<0?(l=p.handler.push(o)-1,p.wrap[l]=d=new n):d=p.wrap[l],f in d||(d[f]=r(s,o,u),e.call(this,s,d[f],d[f].capture))}else e.call(this,s,o,u)}}function o(e){return function(n,r,s){if(s&&typeof s!="boolean"){var o=i.get(this),u,a,f,l;if(o&&n in o){f=o[n],a=c.call(f.handler,r);if(-1<a){u=h(s),l=f.wrap[a];if(u in l){e.call(this,n,l[u],l[u].capture),delete l[u];for(u in l)return;f.handler.splice(a,1),f.wrap.splice(a,1),f.handler.length===0&&delete o[n]}}}}else e.call(this,n,r,s)}}var i=new t;p=function(e){if(!e)return;var t=e.prototype;t.addEventListener=s(t.addEventListener),t.removeEventListener=o(t.removeEventListener)},e.EventTarget?p(EventTarget):(p(e.Text),p(e.Element||e.HTMLElement),p(e.HTMLDocument),p(e.Window||{prototype:e}),p(e.XMLHttpRequest))}()}(self);
    /*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");
    Array.from||(Array.from=function(r){"use strict";return[].slice.call(r)}),Array.of||(Array.of=function(){return Array.prototype.slice.call(arguments)}),Array.prototype.includes||(Array.prototype.includes=function(r){"use strict";if(null==this)throw new TypeError("Array.prototype.includes called on null or undefined");var t=Object(this),e=parseInt(t.length,10)||0;if(0===e)return!1;var n,o=parseInt(arguments[1],10)||0;o>=0?n=o:(n=e+o)<0&&(n=0);for(var i;n<e;){if(i=t[n],r===i||r!==r&&i!==i)return!0;n++}return!1}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<e;){var i=t[o];if(r.call(n,i,o,t))return i;o++}}});
    String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)});
    "function"!=typeof Object.assign&&(Object.assign=function(n){"use strict";if(null==n)throw new TypeError("Cannot convert undefined or null to object");n=Object(n);for(var t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n});
    !function(e){function t(e,t){function i(e){if(!this||this.constructor!==i)return new i(e);this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,e&&n.call(this,e)}return t||g(e,"size",{get:_}),e.constructor=i,i.prototype=e,i}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function i(e){return this.has(e)&&(this._keys.splice(k,1),this._values.splice(k,1),this._itp.forEach(function(e){k<e[0]&&e[0]--})),-1<k}function s(e){return this.has(e)?this._values[k]:void 0}function u(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(k=e.length;k--&&!w(e[k],t););else k=e.indexOf(t);return-1<k}function a(e){return u.call(this,this._values,e)}function h(e){return u.call(this,this._keys,e)}function r(e,t){return this.has(e)?this._values[k]=t:this._values[this._keys.push(e)-1]=t,this}function o(e){return this.has(e)||this._values.push(e),this}function l(){(this._keys||0).length=this._values.length=0}function f(){return v(this._itp,this._keys)}function c(){return v(this._itp,this._values)}function d(){return v(this._itp,this._keys,this._values)}function p(){return v(this._itp,this._values,this._values)}function v(e,t,n){var i=[0],s=!1;return e.push(i),{next:function(){var u,a=i[0];return!s&&a<t.length?(u=n?[t[a],n[a]]:t[a],i[0]++):(s=!0,e.splice(e.indexOf(i),1)),{done:s,value:u}}}}function _(){return this._values.length}function y(e,t){for(var n=this.entries();;){var i=n.next();if(i.done)break;e.call(t,i.value[1],i.value[0],this)}}var k,g=Object.defineProperty,w=function(e,t){return isNaN(e)?isNaN(t):e===t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:i,clear:l,get:s,has:h,set:r},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:i,has:h,get:s,set:r,keys:f,values:c,entries:d,forEach:y,clear:l})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:o,delete:i,clear:l,keys:c,values:c,entries:p,forEach:y})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:i,add:o,clear:l,has:a},!0))}("undefined"!=typeof exports&&"undefined"!=typeof global?global:window);
    !function(){function e(e){global.setImmediate?setImmediate(e):global.importScripts?setTimeout(e):(n++,r[n]=e,global.postMessage(n,"*"))}function t(n){"use strict";function r(e,t,n,r){if(2==f)return r();if("object"!=typeof a&&"function"!=typeof a||"function"!=typeof e)r();else try{var o=0;e.call(a,function(e){o++||(a=e,t())},function(e){o++||(a=e,n())})}catch(e){a=e,n()}}function o(){var e;try{e=a&&a.then}catch(e){return a=e,f=2,o()}r(e,function(){f=1,o()},function(){f=2,o()},function(){try{1==f&&"function"==typeof i?a=i(a):2==f&&"function"==typeof c&&(a=c(a),f=1)}catch(e){return a=e,l()}a==u?(a=TypeError(),l()):r(e,function(){l(3)},l,function(){l(1==f&&3)})})}if("function"!=typeof n&&void 0!=n)throw TypeError();if("object"!=typeof this||this&&this.then)throw TypeError();var i,c,u=this,f=0,a=0,s=[];u.promise=u,u.resolve=function(t){return i=u.fn,c=u.er,f||(a=t,f=1,e(o)),u},u.reject=function(t){return i=u.fn,c=u.er,f||(a=t,f=2,e(o)),u},u._d=1,u.then=function(e,n){if(1!=this._d)throw TypeError();var r=new t;return r.fn=e,r.er=n,3==f?r.resolve(a):4==f?r.reject(a):s.push(r),r},u.catch=function(e){return u.then(null,e)};var l=function(e){f=e||4,s.map(function(e){3==f&&e.resolve(a)||e.reject(a)})};try{"function"==typeof n&&n(u.resolve,u.reject)}catch(e){u.reject(e)}return u}global=this;var n=1,r={},o=!1;global.setImmediate||global.addEventListener("message",function(t){if(t.source==global)if(o)e(r[t.data]);else{o=!0;try{r[t.data]()}catch(t){}delete r[t.data],o=!1}}),t.resolve=function(e){if(1!=this._d)throw TypeError();return e instanceof t?e:new t(function(t){t(e)})},t.reject=function(e){if(1!=this._d)throw TypeError();return new t(function(t,n){n(e)})},t.all=function(e){function n(t,o){return o?r.resolve(o):t?r.reject(t):(0==e.reduce(function(e,t){return t&&t.then?e+1:e},0)&&r.resolve(e),void e.map(function(t,r){t&&t.then&&t.then(function(t){return e[r]=t,n(),t},n)}))}if(1!=this._d)throw TypeError();if(!(e instanceof Array))return t.reject(TypeError());var r=new t;return n(),r},t.race=function(e){function n(t,o){return o?r.resolve(o):t?r.reject(t):(0==e.reduce(function(e,t){return t&&t.then?e+1:e},0)&&r.resolve(e),void e.map(function(e,t){e&&e.then&&e.then(function(e){n(null,e)},n)}))}if(1!=this._d)throw TypeError();if(!(e instanceof Array))return t.reject(TypeError());if(0==e.length)return new t;var r=new t;return n(),r},t._d=1,"undefined"!=typeof module?module.exports=t:global.Promise=global.Promise||t}();
    !function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function f(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&v(t))this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!B(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=h(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(c)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function l(t,e){e=e||{};var r=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function c(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function p(t){var e=new n;return t.split("\r\n").forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},B=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];n||(n=[],this.map[t]=n),n.push(o)},n.prototype.delete=function(t){delete this.map[e(t)]},n.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},n.prototype.getAll=function(t){return this.map[e(t)]||[]},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=[r(o)]},n.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},m.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},d.call(l.prototype),d.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];b.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=l,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,o){var n=new l(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),n.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===n._bodyInit?null:n._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);
    
    (function(w) {
        if(!w.__proto__){l('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')}
        if(!w.HTMLPictureElement){l('https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js',1)}
        function l(url,a){document.write('<script '+(a&&'async')+' src="'+url+'"></'+'script>')}
    }(window))
}
