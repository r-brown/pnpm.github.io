(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{387:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),i=r(8),c=(r(0),r(446)),o={id:"unlink",title:"pnpm unlink"},a={unversionedId:"cli/unlink",id:"version-5.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/cli/unlink.md",slug:"/cli/unlink",permalink:"/es/5.x/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/es",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"pnpm link",permalink:"/es/5.x/cli/link"},next:{title:"pnpm import",permalink:"/es/5.x/cli/import"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Unlinks a system-wide package (inverse of ",Object(c.b)("a",{parentName:"p",href:"/es/5.x/cli/link"},Object(c.b)("inlineCode",{parentName:"a"},"pnpm link")),")."),Object(c.b)("p",null,"If called without arguments, all linked dependencies will be unlinked."),Object(c.b)("p",null,"This is similar to ",Object(c.b)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(c.b)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",Object(c.b)("a",{parentName:"p",href:"/es/5.x/workspaces"},"workspace"),"."),Object(c.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/es/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},446:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),i=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=t,b=s["".concat(o,".").concat(d)]||s[d]||f[d]||c;return r?i.a.createElement(b,a(a({ref:n},p),{},{components:r})):i.a.createElement(b,a({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var p=2;p<c;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);