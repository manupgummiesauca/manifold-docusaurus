(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[1315],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5828:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var o=n(4034),r=n(9973),a=(n(7294),n(3905)),i={slug:"atechnicalintroductiontomanifold",title:"A Technical Introduction to Manifold"},c={permalink:"/manifold-docusaurus/blog/atechnicalintroductiontomanifold",source:"@site/blog/2015-12-03-a-technical-introduction-to-manifold.md",title:"A Technical Introduction to Manifold",description:"Hello Manifoldians!",date:"2015-12-03T00:00:00.000Z",formattedDate:"December 3, 2015",tags:[],truncated:!0,prevItem:{title:"Thoughts from Editors and Authors on What Makes a Good Manifold Project",permalink:"/manifold-docusaurus/blog/thoughtsfromeditorsandauthorsonwhatmakesagoodmanifoldproject"},nextItem:{title:"Opening Access: The Reinvention of the Academic Book",permalink:"/manifold-docusaurus/blog/openingaccessthereinventionoftheacademicbook"}},l=[],u={toc:l};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello Manifoldians!"),(0,a.kt)("p",null,"I'm Zach Davis, principle at ",(0,a.kt)("a",{parentName:"p",href:"http://castironcoding.com"},"Cast Iron Coding"),", a web development studio in Portland, Oregon. My team and I are responsible for UX design, visual design, and development of Manifold over the course of the grant, and it is my hope that I'll be able to post regular updates here detailing development and design decisions, challenges, and milestones over the course of the project."),(0,a.kt)("p",null,"For now, however, I'd like to walk through the technology stack we've settled on, and the reasoning behind some of these choices. If anyone has any questions, please don't hesitate to post a comment!"))}s.isMDXComponent=!0}}]);