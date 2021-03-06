(window.webpackJsonp=window.webpackJsonp||[]).push([[2447],{2519:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(3064)),s={id:"using-changesets",title:"Using Changesets with pnpm",original_id:"using-changesets"},o={unversionedId:"using-changesets",id:"version-5.14/using-changesets",isDocsHomePage:!1,title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was v5.5.12. The latest Changesets version was v2.10.2",source:"@site/versioned_docs/version-5.14/using-changesets.md",slug:"/using-changesets",permalink:"/5.14/using-changesets",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.14/using-changesets.md",version:"5.14",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.14/docs",previous:{title:"Command line tab-completion",permalink:"/5.14/completion"},next:{title:"Continuous Integration",permalink:"/5.14/continuous-integration"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Adding new changesets",id:"adding-new-changesets",children:[]},{value:"Releasing changes",id:"releasing-changes",children:[]},{value:"Using GitHub Actions",id:"using-github-actions",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"At the time of writing this documentation, the latest pnpm version was v5.5.12. The latest Changesets version was v2.10.2")),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency in the root of the workspace:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm add -DW @changesets/cli\n")),Object(i.b)("p",null,"Then run the init command of changesets:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpx changeset init\n")),Object(i.b)("h2",{id:"adding-new-changesets"},"Adding new changesets"),Object(i.b)("p",null,"To generate a new changeset, run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. The generated markdown files in the ",Object(i.b)("inlineCode",{parentName:"p"},".changeset")," directory should be committed to the repository."),Object(i.b)("h2",{id:"releasing-changes"},"Releasing changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump all the package versions in the monorepo and update the changelog files."),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile."),Object(i.b)("li",{parentName:"ol"},"Commit the changes."),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),Object(i.b)("h2",{id:"using-github-actions"},"Using GitHub Actions"),Object(i.b)("p",null,"To automate the process, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),Object(i.b)("p",null,"In a nuthshell, the action will detect for new changesets in the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch and open a Pull Request and will bump up all your packages, you could also publish your packages, more info can be read it ",Object(i.b)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2-beta\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}l.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||b[h]||i;return t?r.a.createElement(m,o(o({ref:n},p),{},{components:t})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);