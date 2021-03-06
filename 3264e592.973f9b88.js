(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||l;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},626:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),l=(n(0),n(3064)),a={id:"list",title:"pnpm list",original_id:"list"},o={unversionedId:"cli/list",id:"version-5.8/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/versioned_docs/version-5.8/cli/list.md",slug:"/cli/list",permalink:"/5.8/cli/list",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.8/cli/list.md",version:"5.8",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.8/docs",previous:{title:"pnpm audit",permalink:"/5.8/cli/audit"},next:{title:"pnpm outdated",permalink:"/5.8/cli/outdated"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Aliases: ",Object(l.b)("inlineCode",{parentName:"p"},"ls")),Object(l.b)("p",null,"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure."),Object(l.b)("p",null,"Positional arguments are ",Object(l.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named.\nFor example, ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm list babel-* eslint-* semver@5")),Object(l.b)("h2",{id:"synopsis"},"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"pnpm list [-r] [--filter &lt;package selector>] [--depth &lt;number>]\n          [&lt;package pattern> ...]\n\npnpm recursive list [--filter &lt;package selector>] [--depth &lt;number>]\n                    [&lt;package pattern> ...]\n")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(l.b)("p",null,"Perform command on every package in subdirectories\nor on every workspace package, when executed inside a workspace."),Object(l.b)("h3",{id:"--json"},"--json"),Object(l.b)("p",null,"Added in: 3.7.0"),Object(l.b)("p",null,"Show information in JSON format."),Object(l.b)("h3",{id:"--long"},"--long"),Object(l.b)("p",null,"Show extended information."),Object(l.b)("h3",{id:"--parseable"},"--parseable"),Object(l.b)("p",null,"Show parseable output instead of tree view."),Object(l.b)("h3",{id:"--global"},"--global"),Object(l.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(l.b)("h3",{id:"--depth-number"},"--depth ","<","number>"),Object(l.b)("p",null,"Max display depth of the dependency tree."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only.\n",Object(l.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",Object(l.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(l.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(l.b)("p",null,"Display only the dependency graph for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(l.b)("p",null,"Display only the dependency graph for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h3",{id:"--no-optional"},"--no-optional"),Object(l.b)("p",null,"Don't display packages from ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);