(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(394)),i={id:"continuous-integration",title:"Continuous Integration",original_id:"continuous-integration"},p={unversionedId:"continuous-integration",id:"version-4.x/continuous-integration",isDocsHomePage:!1,title:"Continuous Integration",description:"pnpm can easily be used in various continuous integration systems.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/continuous-integration.md",slug:"/continuous-integration",permalink:"/zh/4.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"Command line tab-completion",permalink:"/zh/4.x/completion"},next:{title:"Only allow pnpm",permalink:"/zh/4.x/only-allow-pnpm"}},c=[{value:"Travis",id:"travis",children:[]},{value:"Semaphore",id:"semaphore",children:[]},{value:"AppVeyor",id:"appveyor",children:[]},{value:"Sail CI",id:"sail-ci",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"pnpm can easily be used in various continuous integration systems."),Object(a.b)("h2",{id:"travis"},"Travis"),Object(a.b)("p",null,"On ",Object(a.b)("a",{parentName:"p",href:"https://travis-ci.org/"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this to your ",Object(a.b)("inlineCode",{parentName:"p"},".travis.yml")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -L https://unpkg.com/@pnpm/self-installer | node\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),Object(a.b)("h2",{id:"semaphore"},"Semaphore"),Object(a.b)("p",null,"On ",Object(a.b)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by adding this to your ",Object(a.b)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -L https://unpkg.com/@pnpm/self-installer | node\n            - checkout\n            - cache restore node-modules-$SEMAPHORE_GIT_BRANCH-$(checksum package-lock.json),node-modules-$SEMAPHORE_GIT_BRANCH,node-modules-master\n            - pnpm install\n            - cache store node-modules-$SEMAPHORE_GIT_BRANCH-$(checksum package-lock.json) node_modules\n")),Object(a.b)("h2",{id:"appveyor"},"AppVeyor"),Object(a.b)("p",null,"On ",Object(a.b)("a",{parentName:"p",href:"https://www.appveyor.com/"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this to your ",Object(a.b)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -L https://unpkg.com/@pnpm/self-installer | node\n  - pnpm install\n")),Object(a.b)("h2",{id:"sail-ci"},"Sail CI"),Object(a.b)("p",null,"On ",Object(a.b)("a",{parentName:"p",href:"https://sail.ci/"},"Sail CI"),", you can use pnpm for installing your dependencies by adding this to your ",Object(a.b)("inlineCode",{parentName:"p"},".sail.yml")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),Object(a.b)("p",null,"To get the exact Node version and pnpm version you require you can always make your own Docker image and push to ",Object(a.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."))}s.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?o.a.createElement(b,p(p({ref:n},l),{},{components:t})):o.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);