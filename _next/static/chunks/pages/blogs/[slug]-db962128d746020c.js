(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{5106:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[slug]",function(){return n(1009)}])},2284:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),i=n(9008),o=n.n(i),a=n(5675),l=n.n(a),c=n(1664),s=n.n(c),u=n(1163),d=n(4184),f=n.n(d),g=n(2010),h=n(3569),m=n(3382);function p(e){var t=e.href,n=e.text,i=(0,u.useRouter)().asPath===t;return(0,r.jsx)(s(),{href:t,children:(0,r.jsx)("a",{className:f()(i?"font-semibold text-gray-800 dark:text-gray-200":"font-normal text-gray-600 dark:text-gray-400","hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"),children:(0,r.jsx)("span",{className:"capsize",children:n})})})}function v(e){var t={title:e.title||"ZC - just a coder",description:"frontend developer, ",type:"website"},n=(0,g.F)(),i=n.resolvedTheme,a=n.setTheme;return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col",children:[(0,r.jsxs)("div",{className:"py-8 grow",style:{paddingLeft:"18vw",paddingRight:"18vw"},children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"description",content:t.description}),(0,r.jsx)("meta",{property:"og:type",content:t.type})]}),(0,r.jsxs)("div",{className:"flex justify-between align-middle mb-8",children:[(0,r.jsxs)("nav",{className:"flex align-middle",children:[(0,r.jsx)(l(),{alt:"zc avatar",className:"rounded-full",src:"/avatar.png",width:40,height:40}),(0,r.jsx)(p,{href:"/",text:"Blog"}),(0,r.jsx)(p,{href:"/links",text:"Links"}),(0,r.jsx)(p,{href:"/about",text:"About"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(h.zx,{height:"40px",width:"40px",borderRadius:"20px",iconSpacing:0,leftIcon:"dark"===i?(0,r.jsx)(m.NW,{}):(0,r.jsx)(m.kL,{}),onClick:function(){a("dark"===i?"light":"dark")}})})]}),e.children]}),(0,r.jsx)("footer",{className:"w-full mb-4 text-center text-gray-800 dark:text-gray-200",children:"make with NextJS by zc"})]})}},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l,c=e.src,b=e.sizes,x=e.unoptimized,j=void 0!==x&&x,S=e.priority,k=void 0!==S&&S,C=e.loading,z=e.className,E=e.quality,O=e.width,I=e.height,_=e.fill,N=e.style,L=e.onLoadingComplete,P=e.placeholder,R=void 0===P?"empty":P,M=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoadingComplete","placeholder","blurDataURL"]),Z=u.useContext(h.ImageConfigContext),T=u.useMemo(function(){var e=m||Z||g.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[Z]),q=y;if("loader"in D){if(D.loader){var A=D.loader;q=function(e){e.config;var t=s(e,["config"]);return A(t)}}delete D.loader}var W="",B=v(O),F=v(I);if(function(e){var t;return"object"==typeof e&&(p(e)||void 0!==e.src)}(c)){var U=p(c)?c.default:c;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,n=U.blurHeight,M=M||U.blurDataURL,W=U.src,!_){if(B||F){if(B&&!F){var X=B/U.width;F=Math.round(U.height*X)}else if(!B&&F){var G=F/U.height;B=Math.round(U.width*G)}}else B=U.width,F=U.height}}c="string"==typeof c?c:W;var H=!k&&("lazy"===C||void 0===C);(c.startsWith("data:")||c.startsWith("blob:"))&&(j=!0,H=!1),T.unoptimized&&(j=!0);var J=i(u.useState(!1),2),V=J[0],$=J[1],K=i(u.useState(!1),2),Q=K[0],Y=K[1],ee=v(E),et=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},Q?{}:{color:"transparent"},N),en="blur"===R&&M&&!V?{backgroundSize:et.objectFit||"cover",backgroundPosition:et.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(f.getImageBlurSvg({widthInt:B,heightInt:F,blurWidth:t,blurHeight:n,blurDataURL:M}),'")')}:{},er=function(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.width,a=e.quality,l=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n){var r=e.deviceSizes,i=e.allSizes;if(n){for(var a=/(^|\s)(1?\d?\d)vw/g,l=[];c=a.exec(n);c)l.push(parseInt(c[2]));if(l.length){var c,s,u=.01*(s=Math).min.apply(s,o(l));return{widths:i.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return i.find(function(t){return t>=e})||i[i.length-1]}))),kind:"x"}}(t,i,l),u=s.widths,d=s.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map(function(e,r){return"".concat(c({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:r+1).concat(d)}).join(", "),src:c({config:t,src:n,quality:a,width:u[f]})}}({config:T,src:c,unoptimized:j,width:B,quality:ee,sizes:b,loader:q}),ei=c,eo="imagesizes";eo="imageSizes";var ea=(r(l={},"imageSrcSet",er.srcSet),r(l,eo,er.sizes),r(l,"crossOrigin",D.crossOrigin),l),el=u.useRef(L);u.useEffect(function(){el.current=L},[L]);var ec=a({isLazy:H,imgAttributes:er,heightInt:F,widthInt:B,qualityInt:ee,className:z,imgStyle:et,blurStyle:en,loading:C,config:T,fill:_,unoptimized:j,placeholder:R,loader:q,srcString:ei,onLoadingCompleteRef:el,setBlurComplete:$,setShowAltText:Y},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement(w,Object.assign({},ec)),k?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},ea))):null)};var a=n(6495).Z,l=n(2648).Z,c=n(1598).Z,s=n(7273).Z,u=c(n(7294)),d=l(n(5443)),f=n(2730),g=n(9309),h=n(9977);n(3794);var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t,n,r,i){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){e.parentNode&&("blur"===n&&i(!0),(null==r?void 0:r.current)&&r.current(e))}))}var w=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=(e.qualityInt,e.className),o=e.imgStyle,l=e.blurStyle,c=e.isLazy,d=e.fill,f=e.placeholder,g=e.loading,h=e.srcString,m=(e.config,e.unoptimized,e.loader,e.onLoadingCompleteRef),p=e.setBlurComplete,v=e.setShowAltText,w=e.onLoad,y=e.onError,x=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=c?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{width:r,height:n,decoding:"async","data-nimg":"future".concat(d?"-fill":""),className:i,loading:g,style:a({},o,l),ref:u.useCallback(function(e){e&&(y&&(e.src=e.src),e.complete&&b(e,h,f,m,p))},[h,f,m,p,y,]),onLoad:function(e){b(e.currentTarget,h,f,m,p),w&&w(e)},onError:function(e){v(!0),"blur"===f&&p(!0),y&&y(e)}})))};function y(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,n=e.heightInt,r=e.blurWidth,i=e.blurHeight,o=e.blurDataURL,a=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r||t," ").concat(i||n,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(a,"%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},1009:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return C}});var r={};n.r(r),n.d(r,{MDXContext:function(){return s},MDXProvider:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var i=n(1799);function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var a=n(5893),l=n(7294),c=n(2746);let s=l.createContext({});function u(e){return function(t){let n=d(t.components);return l.createElement(e,{...t,allComponents:n})}}function d(e){let t=l.useContext(s);return l.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let f={};function g({components:e,children:t,disableParentContext:n}){let r=d(e);return n&&(r=e||f),l.createElement(s.Provider,{value:r},t)}function h({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:o}){let[a,s]=(0,l.useState)(!o||"undefined"==typeof window);(0,l.useEffect)(()=>{if(o){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,l.useMemo)(()=>{let i=Object.assign({opts:{...r,...c.c}},{frontmatter:t},n),o=Object.keys(i),a=Object.values(i),l=Reflect.construct(Function,o.concat(`${e}`));return l.apply(l,a).default},[n,e]);if(!a)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=l.createElement(g,{components:i},l.createElement(u,null));return o?l.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=n(2284);function p(e){var t=e.children,n=e.post,r=n.title;return n.date,n.wordCount,n.readingTime,(0,a.jsx)(m.Z,{title:"".concat(r," - ZC"),children:(0,a.jsx)("div",{className:"w-full mt-4 prose dark:prose-dark max-w-none",children:t})})}var v,b=n(1664),w=n.n(b),y=n(1608),x=n.n(y),j=n(3569),S={Image:function(e){return(0,a.jsx)(x(),(0,i.Z)({alt:e.alt,className:"rounded-lg"},e))},a:function(e){var t=e.href;return t&&(t.startsWith("/")||t.startsWith("#"))?(0,a.jsx)(w(),{href:t,children:(0,a.jsx)("a",o((0,i.Z)({},e),{children:e.children}))}):(0,a.jsx)("a",(0,i.Z)({target:"_blank",rel:"noopener noreferrer"},e))},Button:j.zx},k=!0,C=function(e){var t=e.post;return(0,a.jsx)(p,{post:t,children:(0,a.jsx)(h,o((0,i.Z)({},t.content),{components:(0,i.Z)({},S)}))})}},1608:function(e,t,n){e.exports=n(8461)},2746:function(e,t,n){let r=n(5893);e.exports.c=r}},function(e){e.O(0,[944,774,888,179],function(){return e(e.s=5106)}),_N_E=e.O()}]);