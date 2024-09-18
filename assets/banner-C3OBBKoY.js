import{j as e}from"./jsx-runtime-Bxcv0yjW.js";import{r}from"./index-mfbfsM12.js";import{t as f,a as c}from"./index-BPeBj1-_.js";import{g as v}from"./_commonjsHelpers-BosuxZz1.js";import{b as p,s as b,c as x}from"./config-BXli1stc.js";import{e as _}from"./events-C6LRLXdn.js";const A=p,j=b,{CLICK:w}=_,{prefix:h}=x,g=f,m=`.${h}-banner__header`,u=`${h}-banner__header--expanded`,o=`${m} [aria-controls]`,y=function(a){a.preventDefault();const n=a.target.closest(o);g(n),this.closest(m).classList.toggle(u)};var N=A({[w]:{[o]:y}},{init(s){j(o,s).forEach(a=>{const n=a.getAttribute(u)==="true";g(a,n)})}});const t=v(N),B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsBAMAAAAncaPMAAAAAXNSR0IArs4c6QAAABtQTFRF////4EAg2z8g2z8f2z4f2j4fHjSyHjOxHTOxQEYPwgAAAIdJREFUeNrNkUENxDAMBEOhFJaCKZiCKZhCKBj2ebV3rdR71+pIq+Qxj1GyqjJ3U8VlHkc07hFm0awBYe91juq6MSI0yhSAEgkzJ4TMKiXyzFw3pgR9lmIBJlqj2AmBedf+IycExmlKZVzvZEJ4A0oBrjBl/m6PCy95B3fFAN6YuQPxhbcB4QMkEj04wQXD5wAAAABJRU5ErkJggg==",E="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3ctitle%3eicon-https%3c/title%3e%3cpath%20fill='%23719F2A'%20fill-rule='evenodd'%20d='M32%200c17.673%200%2032%2014.327%2032%2032%200%2017.673-14.327%2032-32%2032C14.327%2064%200%2049.673%200%2032%200%2014.327%2014.327%200%2032%200zm0%201.208C14.994%201.208%201.208%2014.994%201.208%2032S14.994%2062.792%2032%2062.792%2062.792%2049.006%2062.792%2032%2049.006%201.208%2032%201.208zm0%2018.886a7.245%207.245%200%200%201%207.245%207.245v3.103h.52c.86%200%201.557.698%201.557%201.558v9.322c0%20.86-.697%201.558-1.557%201.558h-15.53c-.86%200-1.557-.697-1.557-1.558V32c0-.86.697-1.558%201.557-1.558h.52V27.34A7.245%207.245%200%200%201%2032%2020.094zm0%203.103a4.142%204.142%200%200%200-4.142%204.142v3.103h8.284V27.34A4.142%204.142%200%200%200%2032%2023.197z'/%3e%3c/svg%3e",k="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3ctitle%3eicon-dot-gov%3c/title%3e%3cpath%20fill='%232378C3'%20fill-rule='evenodd'%20d='m32%200c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032-32-14.3-32-32%2014.3-32%2032-32zm0%201.2c-17%200-30.8%2013.8-30.8%2030.8s13.8%2030.8%2030.8%2030.8%2030.8-13.8%2030.8-30.8-13.8-30.8-30.8-30.8zm11.4%2038.9c.5%200%20.9.4.9.8v1.6h-24.6v-1.6c0-.5.4-.8.9-.8zm-17.1-12.3v9.8h1.6v-9.8h3.3v9.8h1.6v-9.8h3.3v9.8h1.6v-9.8h3.3v9.8h.8c.5%200%20.9.4.9.8v.8h-21.4v-.8c0-.5.4-.8.9-.8h.8v-9.8zm5.7-8.2%2012.3%204.9v1.6h-1.6c0%20.5-.4.8-.9.8h-19.6c-.5%200-.9-.4-.9-.8h-1.6v-1.6s12.3-4.9%2012.3-4.9z'/%3e%3c/svg%3e",z={gov:"government",mil:"U.S. Department of Defense"},d=({id:s,type:a="gov"})=>{const[n]=r.useState(!1),l=r.useRef(null);return r.useEffect(()=>{const i=l.current;return t.on(i),c.on(i),()=>{t.off(i),c.off(i)}}),e.jsx("section",{id:s,className:"usa-banner","aria-label":"Official government website",ref:l,children:e.jsxs("div",{className:"usa-accordion",children:[e.jsx("header",{className:"usa-banner__header",children:e.jsxs("div",{className:"usa-banner__inner",children:[e.jsx("div",{className:"grid-col-auto",children:e.jsx("img",{className:"usa-banner__header-flag",src:B,alt:"U.S. flag"})}),e.jsxs("div",{className:"grid-col-fill tablet:grid-col-auto",children:[e.jsx("p",{className:"usa-banner__header-text",children:"An official website of the United States government"}),e.jsx("p",{className:"usa-banner__header-action","aria-hidden":"true",children:"Here’s how you know"})]}),e.jsx("button",{className:"usa-accordion__button usa-banner__button","aria-expanded":"false","aria-controls":"gov-banner-default",children:e.jsx("span",{className:"usa-banner__button-text",children:"Here’s how you know"})})]})}),e.jsx("div",{className:"usa-banner__content usa-accordion__content",id:"gov-banner-default",hidden:!n,children:e.jsxs("div",{className:"grid-row grid-gap-lg",children:[e.jsxs("div",{className:"usa-banner__guidance tablet:grid-col-6",children:[e.jsx("img",{className:"usa-banner__icon usa-media-block__img",src:k,role:"img",alt:"","aria-hidden":"true"}),e.jsx("div",{className:"usa-media-block__body",children:e.jsxs("p",{children:[e.jsxs("strong",{children:[" Official websites use .",a," "]}),e.jsx("br",{}),"A ",e.jsxs("strong",{children:[".",a]})," website belongs to an official"," ",z[a]," organization in the United States."]})})]}),e.jsxs("div",{className:"usa-banner__guidance tablet:grid-col-6",children:[e.jsx("img",{className:"usa-banner__icon usa-media-block__img",src:E,role:"img",alt:"","aria-hidden":"true"}),e.jsx("div",{className:"usa-media-block__body",children:e.jsxs("p",{children:[e.jsx("strong",{children:" Secure .gov websites use HTTPS "}),e.jsx("br",{}),"A ",e.jsx("strong",{children:"lock"})," (",e.jsx("span",{className:"icon-lock",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"64",viewBox:"0 0 52 64",className:"usa-banner__lock-image",role:"img","aria-labelledby":"banner-lock-title-default banner-lock-description-default",focusable:"false",children:[e.jsx("title",{id:"banner-lock-title-default",children:"Lock"}),e.jsx("desc",{id:"banner-lock-description-default",children:"A locked padlock"}),e.jsx("path",{fill:"#000000",fillRule:"evenodd",d:"M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"})]})}),") or ",e.jsx("strong",{children:"https://"})," means you’ve safely connected to the .",a," ","website. Share sensitive information only on official, secure websites."]})})]})]})})]})})};try{d.displayName="Banner",d.__docgenInfo={description:"Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.",displayName:"Banner",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:{value:"gov"},description:"The type of banner to display",name:"type",required:!1,type:{name:"enum",value:[{value:'"gov"'},{value:'"mil"'}]}}}}}catch{}try{t.displayName="banner",t.__docgenInfo={description:"Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.",displayName:"banner",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:{value:"gov"},description:"The type of banner to display",name:"type",required:!1,type:{name:"enum",value:[{value:'"gov"'},{value:'"mil"'}]}}}}}catch{}export{d as B};
