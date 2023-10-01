"use strict";(self.webpackChunkdapp_documentation=self.webpackChunkdapp_documentation||[]).push([[5728],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5757:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"Get Started"},i="Get started in minutes, not hours",p={type:"mdx",permalink:"/react-dapp-template-documentation/get-started",source:"@site/src/pages/get-started.md",title:"Get Started",description:"Boilerplate your dApp frontend in a few simple steps.",frontMatter:{title:"Get Started"}},o=[{value:"Benefits",id:"benefits",level:2},{value:"Features",id:"features",level:2},{value:"What&#39;s Included and Preconfigured",id:"whats-included-and-preconfigured",level:2},{value:"Web3 Packages",id:"web3-packages",level:3},{value:"Testing Infrastucture",id:"testing-infrastucture",level:3},{value:"Other Packages",id:"other-packages",level:3},{value:"Installation",id:"installation",level:2},{value:"CRA Version",id:"cra-version",level:3},{value:"Vite Version",id:"vite-version",level:3},{value:"App Features",id:"app-features",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:o},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started-in-minutes-not-hours"},"Get started in minutes, not hours"),(0,r.kt)("p",null,"Boilerplate your dApp frontend in a few simple steps."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CRA Template")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app mydapp --template @huseyindeniz/dapp\ncd mydapp\nnpm start\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vite Template")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit huseyindeniz/vite-react-dapp-template mydapp\ncd mydapp\n\nnpm install\nnpm run dev\n")),(0,r.kt)("p",null,"Are you tired of searching for and configuring numerous React packages? Do you get tired of writing the same boilerplate for each new dApp?"),(0,r.kt)("p",null,"One of the challenges of building applications with pure React is the need to identify and configure a large number of packages to get the desired functionality. This can be time-consuming and error-prone, especially for developers who are new to React or who are building their first dApp application."),(0,r.kt)("p",null,"The React dApp Template helps developers avoid this challenge by including a wide range of preconfigured packages that are ready to use out of the box. This includes packages for core functionality such as routing and state management, as well as packages for specialized features like internationalization. All of these packages are carefully selected and integrated to work seamlessly together, making it easy for developers to build powerful and feature-rich applications without the need to spend time researching and configuring individual packages."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decentralized Hosting"),(0,r.kt)("li",{parentName:"ul"},"Greater Flexibility")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authentication with Metamask Wallet"),(0,r.kt)("li",{parentName:"ul"},"Internationalization"),(0,r.kt)("li",{parentName:"ul"},"Dark Theme"),(0,r.kt)("li",{parentName:"ul"},"Page load optimizations"),(0,r.kt)("li",{parentName:"ul"},"SEO support")),(0,r.kt)("h2",{id:"whats-included-and-preconfigured"},"What's Included and Preconfigured"),(0,r.kt)("h3",{id:"web3-packages"},"Web3 Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ethers.js"),(0,r.kt)("li",{parentName:"ul"},"typechain")),(0,r.kt)("h3",{id:"testing-infrastucture"},"Testing Infrastucture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit Tests: jest"),(0,r.kt)("li",{parentName:"ul"},"Component Unit Tests: React Testing Library + Storybook"),(0,r.kt)("li",{parentName:"ul"},"Integration Tests: React Testing Library + Storybook"),(0,r.kt)("li",{parentName:"ul"},"E2E Tests: Cypress + Synpress + Cucumber")),(0,r.kt)("h3",{id:"other-packages"},"Other Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chakra-UI"),(0,r.kt)("li",{parentName:"ul"},"React Router"),(0,r.kt)("li",{parentName:"ul"},"Redux Toolkit"),(0,r.kt)("li",{parentName:"ul"},"Redux Saga"),(0,r.kt)("li",{parentName:"ul"},"React Error Boundary"),(0,r.kt)("li",{parentName:"ul"},"React Helmet"),(0,r.kt)("li",{parentName:"ul"},"I18Next"),(0,r.kt)("li",{parentName:"ul"},"React Icon All Files"),(0,r.kt)("li",{parentName:"ul"},"React Cookie Consent")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"cra-version"},"CRA Version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app mydapp --template @huseyindeniz/dapp\n")),(0,r.kt)("h3",{id:"vite-version"},"Vite Version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit huseyindeniz/vite-react-dapp-template mydapp\ncd mydapp\n\nnpm install\nnpm run dev\n")),(0,r.kt)("h2",{id:"app-features"},"App Features"),(0,r.kt)("p",null,"React dApp Template is using feature based directory structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"features",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"i18n"),(0,r.kt)("li",{parentName:"ul"},"ui"),(0,r.kt)("li",{parentName:"ul"},"wallet"),(0,r.kt)("li",{parentName:"ul"},"your features...")))))),(0,r.kt)("p",null,"i18n, ui and wallet features are ready to use."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"./docs/intro"},"Tutorial")," page to start your dApp frontend development journey with React dApp Template."))}c.isMDXComponent=!0}}]);