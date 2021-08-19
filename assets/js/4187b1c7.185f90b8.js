(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[9627],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(a),m=i,u=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2924:function(e,t,a){"use strict";var n=a(7294).createContext(void 0);t.Z=n},5350:function(e,t,a){"use strict";var n=a(7294),i=a(2924);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1232:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(7294),i=a(6010),o={specContainer:"specContainer_3QmF",specTitleWrapper:"specTitleWrapper_3l3P",specTitle:"specTitle_1y8p",specSubtitle:"specSubtitle_2144",specContent:"specContent_21W2",specTable:"specTable_y2B1"},r=a(5350),l=function(e){var t=void 0===e?props:e,a=t.title,l=t.subtitle,s=t.items,d=t.children,c=(0,r.Z)();c.isDarkTheme,c.setLightTheme,c.setDarkTheme;return n.createElement("div",{className:(0,i.Z)(o.specContainer)},a&&n.createElement("div",{className:(0,i.Z)(o.specTitleWrapper)},n.createElement("span",{className:(0,i.Z)(o.specTitle)},a),l&&n.createElement("span",{className:(0,i.Z)(o.specSubtitle)},l)),s&&n.createElement("div",{className:(0,i.Z)(o.specTable)},n.createElement("table",{width:"100%"},n.createElement("tbody",null,s.map((function(e,t){return n.createElement("tr",{key:e.key},n.createElement("th",{className:(0,i.Z)(o.specKey)},e.key),n.createElement("td",{className:(0,i.Z)(o.specValue)},e.value))}))))),d?n.createElement("div",{className:(0,i.Z)(o.specContent)},d):null)}},8309:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var n=a(4034),i=a(9973),o=(a(7294),a(3905)),r=a(1232),l={id:"theme_settings",title:"Theme Settings",sidebar_label:"Theme Settings"},s={unversionedId:"administering/configuring/theme_settings",id:"administering/configuring/theme_settings",isDocsHomePage:!1,title:"Theme Settings",description:'const defaultImageFormats = "GIF, JPEG, JPG, PNG";',source:"@site/docs/administering/configuring/theme_settings.md",sourceDirName:"administering/configuring",slug:"/administering/configuring/theme_settings",permalink:"/manifold-docusaurus/docs/administering/configuring/theme_settings",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/theme_settings.md",version:"current",sidebar_label:"Theme Settings",frontMatter:{id:"theme_settings",title:"Theme Settings",sidebar_label:"Theme Settings"},sidebar:"docs",previous:{title:"Properties",permalink:"/manifold-docusaurus/docs/administering/configuring/properties"},next:{title:"Integration Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/integration_settings"}},d="GIF, JPEG, JPG, PNG",c=[{value:"Branding",id:"branding",children:[{value:"Website URL",id:"website-url",children:[]},{value:"Header Logo",id:"header-logo",children:[]},{value:"Mobile Header Logo",id:"mobile-header-logo",children:[]},{value:"Footer Logo",id:"footer-logo",children:[]},{value:"Favicon",id:"favicon",children:[]},{value:"Logo Styles",id:"logo-styles",children:[]},{value:"Header Navigation Offset",id:"header-navigation-offset",children:[]},{value:"Accent Color",id:"accent-color",children:[]},{value:"Header Colors",id:"header-colors",children:[]}]},{value:"Typography",id:"typography",children:[{value:"Typekit ID",id:"typekit-id",children:[]},{value:"Custom Fonts",id:"custom-fonts",children:[]}]},{value:"Top Bar",id:"top-bar",children:[{value:"Text",id:"text",children:[]},{value:"Color",id:"color",children:[]},{value:"URL",id:"url",children:[]},{value:"Top Bar Display Mode",id:"top-bar-display-mode",children:[]}]}],p={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-location"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"location")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The fields discussed in this section can be accessed from the Manifold backend by selecting ",(0,o.kt)("strong",{parentName:"p"},"Settings")," from the main menu and then ",(0,o.kt)("strong",{parentName:"p"},"Theme")," in the submenu."),(0,o.kt)("p",{parentName:"div"},"Only users logged in with ",(0,o.kt)("strong",{parentName:"p"},"Admin")," credentials can access this view."))),(0,o.kt)("h2",{id:"branding"},"Branding"),(0,o.kt)("p",null,"Manifold allows you to adjust the logos and colors of your instance as a means to match your existing visual identity on the web."),(0,o.kt)("p",null,"The options described in this section globally affect your instance. More localized opportunities for branding are possible within individual Projects, Project Collections, Pages, and Features."),(0,o.kt)("h3",{id:"website-url"},"Website URL"),(0,o.kt)("p",null,"This field works in concert with the Footer Logo described below. When a URL is entered here, the Footer Logo opens a new browser tab to that location. If this field is left blank, the Footer Logo will render as a static graphic."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When there is no Footer Logo present, the URL described here will have no effect."))),(0,o.kt)("h3",{id:"header-logo"},"Header Logo"),(0,o.kt)("p",null,"This field is intended to capture your primary logo or brand mark. The image saved here replaces the default Manifold icon that appears on the left side of the Manifold Header."),(0,o.kt)(r.Z,{title:"Header Logo Specs",items:[{key:"Width",value:"flexible"},{key:"Max-Height",value:"60px"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("h3",{id:"mobile-header-logo"},"Mobile Header Logo"),(0,o.kt)("p",null,"The logo saved to this space serves the same function as the Header Logo; in this case, however, it is expected to be formatted for viewing on mobile devices and systems with smaller screens."),(0,o.kt)("p",null,"When a reader\u2019s viewport is less than 760 px wide, the image saved here will replace the Header Logo in the Manifold Header."),(0,o.kt)(r.Z,{title:"Mobile Header Logo Specs",items:[{key:"Max-Width",value:"175px"},{key:"Max-Height",value:"26px"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mobile Logos are best prepared as graphic-only elements, without text, in a 1:1 ratio, though Manifold does not restrict files to those recommendations."))),(0,o.kt)("h3",{id:"footer-logo"},"Footer Logo"),(0,o.kt)("p",null,"The Footer Logo appears on the right side of the Manifold Footer. This logo can replicate the Header Logo or serve as a distinct branding element."),(0,o.kt)(r.Z,{title:"Footer Logo Specs",items:[{key:"Max-Width",value:"325px"},{key:"Max-Height",value:"200px"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("h3",{id:"favicon"},"Favicon"),(0,o.kt)("p",null,"The favicon is the square icon that appears in your browser\u2019s title bar or the page\u2019s tab. This icon can mimic that of the Mobile Header Logo or be of its own distinct design."),(0,o.kt)(r.Z,{title:"Favicon Specs",items:[{key:"Dimensions",value:"1:1"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We suggest designing your favicon at either 16 \xd7 16 px or 32 \xd7 32 px and seeing which works best. It is important to note that ",(0,o.kt)("strong",{parentName:"p"},"Manifold will crop the favicon to a square.")))),(0,o.kt)("h3",{id:"logo-styles"},"Logo Styles"),(0,o.kt)("p",null,"You can adjust the placement of the Header Logo by entering a JSON style object in this field. This gives you the ability to visually balance the logo with the navigation elements of the Manifold Header."),(0,o.kt)(r.Z,{title:"Logo Styles Syntax",mdxType:"Spec"},(0,o.kt)("p",null,"The instruction should be surrounded by braces, with the parameters enclosed in quote marks and separated by a comma. Units are in pixels, with both positive and negative values accepted."),(0,o.kt)("p",null,"For example,\xa0",(0,o.kt)("inlineCode",{parentName:"p"},'{"left": 100, "top": 100}'),"\xa0would push the logo 100 pixels to the right and 100 pixels down from its default location in the header.")),(0,o.kt)("h3",{id:"header-navigation-offset"},"Header Navigation Offset"),(0,o.kt)("p",null,"The Manifold header comprises the Header Logo and a series of navigational elements, beginning with the home link and continuing toward the right through the user avatar."),(0,o.kt)("p",null,"Those nav elements all maintain the same vertical position. By entering a numeric value in this field, you can adjust how close or far away they are from the top of the page."),(0,o.kt)("p",null,"This control is meant to provide you with another means to adjust the visual balance of the items contained in the Header."),(0,o.kt)(r.Z,{title:"Header Navigation Offset Syntax",mdxType:"Spec"},(0,o.kt)("p",null,"An entry of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"5"),"\xa0will move the nav elements down five pixels. Entering\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"-5")," will move them them up five pixels from their default position.")),(0,o.kt)("h3",{id:"accent-color"},"Accent Color"),(0,o.kt)("p",null,"The Accent Color is your instance\u2019s primary color and the base upon which secondary colors in the application are derived. By default the value is Manifold green: ",(0,o.kt)("inlineCode",{parentName:"p"},"#52E3AC"),"."),(0,o.kt)("p",null,"You can override that here and use a color that matches your existing visual identity. When you do so, links, icons, and buttons throughout the instance will change to either match the accent color you input exactly or, for the sake of contrast, be selected by the system to pair well with your choice."),(0,o.kt)(r.Z,{title:"Accepted Color Formats",subtitle:"Color values can be supplied in one of the following formats.",mdxType:"Spec"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Example Input"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CSS Color Keyword"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Red"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Green"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Blue"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hexadecimal"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#00FF00"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RGB"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rgb(0,0,255)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RGBA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rgba(255, 99, 71, 0.8)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HSL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hsl(0, 100%, 25%)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HSLA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hsla(9, 100%, 64%, 0.6)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HWB"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hwb(50, 35%, 2%)")))))),(0,o.kt)("h3",{id:"header-colors"},"Header Colors"),(0,o.kt)("p",null,"You can adjust the colors of the links, icons, and background of the Manifold header using the same syntax as the Accent Color, described above."),(0,o.kt)("h4",{id:"header-foreground-color"},"Header Foreground Color"),(0,o.kt)("p",null,"The colors of the links and icons in the Header display the color assigned here. By default they will render as light gray with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"#696969"),"."),(0,o.kt)("h4",{id:"header-foreground-active-color"},"Header Foreground Active Color"),(0,o.kt)("p",null,"The text of the page name (Home, Projects, Following) a reader is currently viewing ",(0,o.kt)("em",{parentName:"p"},"or")," hovering over displays with the color assigned here. The default is dark gray with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"#363636"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If no value is entered here, the hover color for links in the Header defaults to the Accent Color value."))),(0,o.kt)("h4",{id:"header-background-color"},"Header Background Color"),(0,o.kt)("p",null,"The Header Background defaults to white, ",(0,o.kt)("inlineCode",{parentName:"p"},"ffffff"),". The color saved here will span the entire width of the Header."),(0,o.kt)("h2",{id:"typography"},"Typography"),(0,o.kt)("h3",{id:"typekit-id"},"Typekit ID"),(0,o.kt)("p",null,"Manifold was designed to employ two specific TypeKit fonts throughout the application:\xa0Freight Text Pro\xa0and\xa0Sofia Pro."),(0,o.kt)("p",null,"If you have a valid Typekit account, select the following options from your Typekit dashboard and then save your Typekit ID to this field."),(0,o.kt)(r.Z,{title:"Typekit Account Settings",mdxType:"Spec"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Font"),(0,o.kt)("th",{parentName:"tr",align:null},"Font Selection"),(0,o.kt)("th",{parentName:"tr",align:null},"Character Set"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Freight Text Pro"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Light"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Book"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Book Italic")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Default"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"OpenType Features"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sofia Pro"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Light"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Regular"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Medium"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Semi Bold"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Bold")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Default"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"OpentType Features"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Diacritics"),". Selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"All Characters"),"\xa0instead of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Default"),"\xa0will make available to Manifold the full range of diacritical characters included in each font. This will cause pages to load slower, but in most cases the effect will be negligible.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When this field is left blank, Manifold will default to the open SIL fonts Trueno and Aleo."))),(0,o.kt)("h3",{id:"custom-fonts"},"Custom Fonts"),(0,o.kt)("p",null,"There are currently no means to load custom fonts into the application."),(0,o.kt)("h2",{id:"top-bar"},"Top Bar"),(0,o.kt)("p",null,"The Top Bar is an optional navigation element that sits atop the Header. The Bar is made up of a ribbon that spans the width of the screen and one line of text, all of which functions as a hyperlink. You can configure the Bar to display generally throughout your instance, for only select Projects, or for those Projects configured for Standalone Mode."),(0,o.kt)("p",null,"You can use the Top Bar to point readers to a policy page, a Project Collection, a class syllabus, a sale on your website, your Manifold homepage, site news\u2014wherever you want to call special attention."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Top Bar won't display unless both the text and URL are provided."))),(0,o.kt)("h3",{id:"text"},"Text"),(0,o.kt)("p",null,"What text you enter here will serve as the default Top Bar message for your instance. This text can be altered on a Project-by-Project basis in cases where this general notice may not suit. See the ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects"},"Project settings")," page for more."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This field is\xa0",(0,o.kt)("em",{parentName:"p"},"not"),"\xa0Markdown/HTML enabled and only accepts one line of text."))),(0,o.kt)("h3",{id:"color"},"Color"),(0,o.kt)("p",null,"You can customize the color of the Top Bar using the same syntax described above for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accent Color"),": CSS color keyword, Hexadecimal, RGB, RGBA, HSL, HSLA, or HWB. When left blank the color will revert to the default, Manifold green: ",(0,o.kt)("inlineCode",{parentName:"p"},"#H2E3AC"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unlike the text, the Top Bar's color value ",(0,o.kt)("em",{parentName:"p"},"cannot")," be adjusted for individual projects."))),(0,o.kt)("h3",{id:"url"},"URL"),(0,o.kt)("p",null,"The Top Bar is meant to function as a hyperlink. The URL you enter here will serve as the target link for any reader who clicks on the Bar."),(0,o.kt)("p",null,"Like the Top Bar text, the URL entered here can be adjusted on a per-Project basis."),(0,o.kt)("h3",{id:"top-bar-display-mode"},"Top Bar Display Mode"),(0,o.kt)("p",null,"This dropdown is where you configure if and where the Top Bar will display on your instance."),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Disabled")," state the Top Bar will not display. However you can override this setting and set the Top Bar to appear for individual projects."),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Always Visible")," is selected, so long as ",(0,o.kt)("em",{parentName:"p"},"both")," the text and URL have been provided, the Top Bar will display throughout your instance. Project-level Top Bar settings will override the settings entered here."),(0,o.kt)("p",null,"The Top Bar will appear on just those projects that are enabled for\xa0",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects"},"Standalone Mode")," when ",(0,o.kt)("strong",{parentName:"p"},"Only Visible in Standalone Mode")," is chosen. Project-level overrides are still possible with this setting selected."))}h.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);