(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(304)),a={id:"faq-extending",title:"FAQ: Extending"},c={id:"faq-extending",title:"FAQ: Extending",description:"## How do I use my own Java models?",source:"@site/../docs/faq-extending.md",permalink:"/docs/faq-extending",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/faq-extending.md",lastUpdatedBy:"D\xe9nes Harmath",lastUpdatedAt:1603679313,sidebar:"faq-sidebar",previous:{title:"FAQ: General",permalink:"/docs/faq"},next:{title:"FAQ: Contributing",permalink:"/docs/faq-contributing"}},l=[{value:"How do I use my own Java models?",id:"how-do-i-use-my-own-java-models",children:[]},{value:"How do I disable certificate verification?",id:"how-do-i-disable-certificate-verification",children:[]},{value:"How do I skip files during code generation?",id:"how-do-i-skip-files-during-code-generation",children:[]},{value:"How can I customize the auto-generated code?",id:"how-can-i-customize-the-auto-generated-code",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-do-i-use-my-own-java-models"},"How do I use my own Java models?"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/customization#bringing-your-own-models"}),"Bringing your own Models"),"."),Object(i.b)("h2",{id:"how-do-i-disable-certificate-verification"},"How do I disable certificate verification?"),Object(i.b)("p",null,"Please add ",Object(i.b)("inlineCode",{parentName:"p"},"-Dio.swagger.v3.parser.util.RemoteUrl.trustAll=true")," when generating the code."),Object(i.b)("h2",{id:"how-do-i-skip-files-during-code-generation"},"How do I skip files during code generation?"),Object(i.b)("p",null,"OpenAPI Generator has a built-in ignore file processor."),Object(i.b)("p",null,"For example, to skip ",Object(i.b)("inlineCode",{parentName:"p"},"git_push.sh"),", one can create a file named ",Object(i.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," in the root of the output directory with the contents:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"# Prevent generator from creating these files:\ngit_push.sh\n")),Object(i.b)("p",null,"The ignore file works just like .gitignore, and it is auto-generated by default."),Object(i.b)("p",null,"If you need this functionality on initial generation, you can provide the option ",Object(i.b)("inlineCode",{parentName:"p"},"--ignore-file-override")," (CLI) or ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreFileOverride")," (Maven and Gradle plugins) with a value targeting any existing file. The contents of that file will be evaluated relative to the output directory."),Object(i.b)("h2",{id:"how-can-i-customize-the-auto-generated-code"},"How can I customize the auto-generated code?"),Object(i.b)("p",null,"Variants:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"How can I add a header/footer to generated code?"'),Object(i.b)("li",{parentName:"ul"},'"How can I add my own logging to generated code?"'),Object(i.b)("li",{parentName:"ul"},'"How can I add my license to the top of files?"')),Object(i.b)("p",null,"OpenAPI Generator supports user-defined templates without need to recompile the artifact. We also support custom generators (templates and logic) if those generators are accessible on the classpath."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/templating#modifying-templates"}),"templating: Modifying Templates")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/customization"}),"customization")," docs for more details."))}p.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||s[b]||i;return n?o.a.createElement(f,c({ref:t},d,{components:n})):o.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);