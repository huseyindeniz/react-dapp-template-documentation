(()=>{"use strict";var e,a,c,t,r,f={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=f,b.c=d,e=[],b.O=(a,c,t,r)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&r||f>=r)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,r<f&&(f=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var f={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(r,f),r},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",267:"d091d5e0",362:"38df4b4a",454:"a5fd7985",698:"bac9ecda",770:"197682e7",800:"7cea0c07",994:"37fe733e",1187:"478c4c76",1612:"bd7c2d5f",1655:"7b3dca85",1914:"d9f32620",2535:"814f3328",2554:"4257733a",3085:"1f391b9e",3089:"a6aa9e1f",3335:"ef2fcf79",3342:"aa81c0ab",3608:"9e4087bc",4013:"01a85c17",4041:"a9b50c4d",4195:"c4f5d8e4",4274:"5fc994c2",4825:"ac760156",5404:"1cfb0e0b",5589:"5c868d36",5728:"cb29d425",5996:"14bc54c2",5999:"969f7a7a",6103:"ccc49370",6230:"47099922",6486:"6c699262",6880:"4f4a403d",6901:"782f04bc",7293:"3f1650d0",7918:"17896441",8021:"b9974938",8091:"c914a145",8406:"2abcfb80",8610:"6875c492",8832:"7802d14b",9049:"c6e02d89",9090:"4b223e51",9135:"11974ad4",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9813:"d4cb8013",9817:"14eb3368",9972:"c083ba96"}[e]||e)+"."+{53:"7e210e3e",267:"6c5b3aa2",362:"daf04c3f",454:"7be4b1bb",698:"ad87489b",770:"0b5155b9",800:"c0c801eb",994:"b93e0c33",1187:"4ab5b154",1612:"99656a81",1655:"6e4a0ef1",1914:"0e28b609",2529:"d43db627",2535:"8b9ca27e",2554:"5cedee44",3085:"71a61e36",3089:"5e7b5675",3335:"8bb9ca0c",3342:"1035d12b",3608:"262a818d",3946:"0a4c1d16",4013:"f596eccc",4041:"49631e94",4195:"e4641099",4274:"013d517b",4825:"e538963c",4972:"3da56476",5404:"a4d431d0",5589:"584c7f7b",5728:"fc8caf40",5996:"df31f2c1",5999:"a9342491",6103:"1bc8272c",6230:"569c7ae6",6486:"a49788f1",6880:"c8c97b53",6901:"c6734251",7293:"90c1fd95",7918:"ab02ff36",8021:"582a9d33",8091:"9606f720",8406:"534a31a2",8610:"8916b9cf",8832:"2a95b6c3",9049:"669a35f5",9090:"883ca990",9135:"6752bfd0",9514:"8ca37454",9642:"2c458994",9671:"abd25ad6",9813:"7fe31912",9817:"5692759a",9972:"62e984cb"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="dapp-documentation:",b.l=(e,a,c,f)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/cra-template-dapp-documentation/",b.gca=function(e){return e={17896441:"7918",47099922:"6230","935f2afb":"53",d091d5e0:"267","38df4b4a":"362",a5fd7985:"454",bac9ecda:"698","197682e7":"770","7cea0c07":"800","37fe733e":"994","478c4c76":"1187",bd7c2d5f:"1612","7b3dca85":"1655",d9f32620:"1914","814f3328":"2535","4257733a":"2554","1f391b9e":"3085",a6aa9e1f:"3089",ef2fcf79:"3335",aa81c0ab:"3342","9e4087bc":"3608","01a85c17":"4013",a9b50c4d:"4041",c4f5d8e4:"4195","5fc994c2":"4274",ac760156:"4825","1cfb0e0b":"5404","5c868d36":"5589",cb29d425:"5728","14bc54c2":"5996","969f7a7a":"5999",ccc49370:"6103","6c699262":"6486","4f4a403d":"6880","782f04bc":"6901","3f1650d0":"7293",b9974938:"8021",c914a145:"8091","2abcfb80":"8406","6875c492":"8610","7802d14b":"8832",c6e02d89:"9049","4b223e51":"9090","11974ad4":"9135","1be78505":"9514","7661071f":"9642","0e384e19":"9671",d4cb8013:"9813","14eb3368":"9817",c083ba96:"9972"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var f=b.p+b.u(a),d=new Error;b.l(f,(c=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",d.name="ChunkLoadError",d.type=r,d.request=f,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,f=c[0],d=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(c);n<f.length;n++)r=f[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},c=self.webpackChunkdapp_documentation=self.webpackChunkdapp_documentation||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();