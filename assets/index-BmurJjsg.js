import{j as ge}from"./jsx-runtime-D_zvdyIk.js";import{g as ye}from"./_commonjsHelpers-Cpj98o6Y.js";import{a as be,r as Te}from"./select-or-matches-Ry_FXvm3.js";import{r as ve,a as $e,b as Ce}from"./config-jVN7-cmM.js";import{r as Ne}from"./sanitizer-BDKKlE4O.js";import{r as he}from"./index-CtQTiInQ.js";import{F as Ie}from"./form-group-UbmrzRll.js";import{r as Re,a as qe}from"./index-ULqyV3G8.js";import{r as xe,a as Pe}from"./index-B10PtKfh.js";import{r as De}from"./events-CleOcHg4.js";var pe,_e;function we(){if(_e)return pe;_e=1;const h=be(),B=ve(),y=Ne(),{prefix:i}=$e(),_=`${i}-file-input`,m=`.${_}`,R=`${i}-file-input__input`,b=`${i}-file-input__target`,c=`.${R}`,ee=`${i}-file-input__box`,M=`${i}-file-input__instructions`,L=`${i}-file-input__preview`,j=`${i}-file-input__preview-heading`,T=`${i}-file-input--disabled`,te=`${i}-file-input__choose`,w=`${i}-file-input__accepted-files-message`,Y=`${i}-file-input__drag-text`,q=`${i}-file-input--drag`,H="is-loading",x="has-invalid-file",C=`${i}-file-input__preview-image`,se=`${C}--generic`,re=`${C}--pdf`,ne=`${C}--word`,ae=`${C}--video`,X=`${C}--excel`,k=`${i}-sr-only`,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",A="Error: This is not a valid file type.";let S=!0,N="",O="";const P=e=>{const t=e.closest(m);if(!t)throw new Error(`Element is missing outer ${m}`);const s=t.querySelector(c);return{dropZoneEl:t,inputEl:s}},Z=e=>{const{dropZoneEl:t,inputEl:s}=P(e);s.disabled=!0,t.classList.add(T)},z=e=>{const{dropZoneEl:t}=P(e);t.classList.add(T)},oe=e=>{const{dropZoneEl:t,inputEl:s}=P(e);s.disabled=!1,t.classList.remove(T),t.removeAttribute("aria-disabled")},ie=e=>{const t=e.charCodeAt(0);return t===32?"-":t>=65&&t<=90?`img_${e.toLowerCase()}`:`__${t.toString(16).slice(-4)}`},ce=e=>e.replace(/[^a-z0-9]/g,ie),le=e=>`${e}-${Math.floor(Date.now().toString()/1e3)}`,K=e=>e.hasAttribute("multiple")?"files":"file",G=e=>{const t=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div");return e.classList.remove(_),e.classList.add(R),t.classList.add(_),r.classList.add(ee),s.classList.add(b),s.prepend(r),e.parentNode.insertBefore(s,e),e.parentNode.insertBefore(t,s),s.appendChild(e),t.appendChild(s),s},U=e=>{const t=e.closest(m),s=K(e),r=document.createElement("div"),a=`Drag ${s} here or`,f="choose from folder";return N=`${a} ${f}`,r.classList.add(M),r.setAttribute("aria-hidden","true"),e.setAttribute("aria-label",N),r.innerHTML=y.escapeHTML`<span class="${Y}">${a}</span> <span class="${te}">${f}</span>`,e.parentNode.insertBefore(r,e),(/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.querySelector(`.${Y}`).outerHTML=""),r},de=e=>{const t=document.createElement("div"),s=K(e),r=e.closest(m),a=e.closest(`.${b}`);O=`No ${s} selected.`,t.classList.add(k),t.setAttribute("aria-live","polite"),t.textContent=O,r.insertBefore(t,a)},V=e=>{const t=e.hasAttribute("aria-disabled")||e.hasAttribute("disabled"),s=G(e),r=U(e),{dropZoneEl:a}=P(e);return t?a.classList.add(T):de(e),{instructions:r,dropTarget:s}},Q=(e,t)=>{const s=e.querySelectorAll(`.${L}`),r=e.querySelector(`.${j}`),a=e.querySelector(`.${w}`),f=l=>{l.parentNode.removeChild(l)};r&&(r.outerHTML=""),a&&(a.outerHTML="",e.classList.remove(x)),s!==null&&(t&&t.removeAttribute("hidden"),Array.prototype.forEach.call(s,f))},ue=(e,t,s)=>{const r=e;let a=O;t.length===1?a=`You have selected the file: ${s}`:t.length>1&&(a=`You have selected ${t.length} files: ${s.join(", ")}`),setTimeout(()=>{r.textContent=a},1e3)},n=(e,t)=>{const s=document.createElement("div"),r=e.closest(`.${b}`),a=r.querySelector(`.${M}`);let f="Change file",l="";t.length===1?l=y.escapeHTML`Selected file <span class="usa-file-input__choose">${f}</span>`:t.length>1&&(f="Change files",l=y.escapeHTML`${t.length} files selected <span class="usa-file-input__choose">${f}</span>`),a.setAttribute("hidden","true"),s.classList.add(j),s.innerHTML=l,r.insertBefore(s,a),e.setAttribute("aria-label",f)},o=(e,t)=>{e.addEventListener("error",()=>{const s=e;s.src=u,s.classList.add(t)},{once:!0})},p=(e,t,s,r)=>{const a=e.target.files,l=r.closest(`.${_}`).querySelector(`.${k}`),E=[];Q(r,s);for(let v=0;v<a.length;v+=1){const I=new FileReader,$=a[v].name;let F;E.push($),I.onloadstart=function(){F=le(ce($)),s.insertAdjacentHTML("afterend",y.escapeHTML`<div class="${L}" aria-hidden="true">
          <img id="${F}" src="${u}" alt="" class="${C} ${H}"/>${$}
        <div>`)},I.onloadend=function(){const g=document.getElementById(F),d=$.split(".").pop();d==="pdf"?o(g,re):d==="doc"||d==="docx"||d==="pages"?o(g,ne):d==="xls"||d==="xlsx"||d==="numbers"?o(g,X):d==="mov"||d==="mp4"?o(g,ae):o(g,se),g.classList.remove(H),g.src=I.result},a[v]&&I.readAsDataURL(a[v])}a.length===0?t.setAttribute("aria-label",N):n(t,a),ue(l,a,E)},J=(e,t,s,r)=>{const a=t.getAttribute("accept");r.classList.remove(x);const f=(l,E)=>{let v=!1;return l.indexOf(E)>=0&&(v=!0),v};if(a){const l=a.split(","),E=document.createElement("div"),I=t.dataset.errormessage||A;E.setAttribute("aria-hidden",!0);let $=!0;const F=e.target.files||e.dataTransfer.files;for(let D=0;D<F.length;D+=1){const g=F[D];if($)for(let d=0;d<l.length;d+=1){const Ae=l[d];if($=g.name.indexOf(Ae)>0||f(g.type,Ae.replace(/\*/g,"")),$){S=!0;break}}else break}if(!$){Q(r,s),t.value="",E.textContent=I,r.insertBefore(E,t);const D=`${I} ${N}`;t.setAttribute("aria-label",D),E.classList.add(w),r.classList.add(x),S=!1,e.preventDefault(),e.stopPropagation()}}},W=(e,t,s,r)=>{J(e,t,s,r),S===!0&&p(e,t,s,r)};return pe=B({},{init(e){h(m,e).forEach(t=>{const{instructions:s,dropTarget:r}=V(t);r.addEventListener("dragover",function(){this.classList.add(q)},!1),r.addEventListener("dragleave",function(){this.classList.remove(q)},!1),r.addEventListener("drop",function(){this.classList.remove(q)},!1),t.addEventListener("change",a=>W(a,t,s,r),!1)})},teardown(e){h(c,e).forEach(t=>{const s=t.parentElement.parentElement;s.parentElement.replaceChild(t,s),t.className=_})},getFileInputContext:P,disable:Z,ariaDisable:z,enable:oe}),pe}var Oe=we();const Le=ye(Oe),Se=({id:h,required:B,label:y,helperText:i,errors:_,...m})=>{const R=he.useRef(null);return he.useLayoutEffect(()=>{const b=R.current;return Le.on(b),()=>Le.off(b)},[]),ge.jsx(Ie,{id:`form-group-${h}`,required:B,label:y,helperText:i,errors:_,fieldControl:ge.jsx("input",{className:"usa-file-input",type:"file",ref:R,id:h,...m})})};try{Se.displayName="FileInput",Se.__docgenInfo={description:"File input allows users to attach one or multiple files.",displayName:"FileInput",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name for the file input field",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"A boolean indicating whether or not the field is required",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label text to display with the input",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text to display with the input",name:"helperText",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:"An array of string error messages",name:"errors",required:!1,type:{name:"string | string[]"}}}}}catch{}try{fileinput.displayName="fileinput",fileinput.__docgenInfo={description:"File input allows users to attach one or multiple files.",displayName:"fileinput",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name for the file input field",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"A boolean indicating whether or not the field is required",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label text to display with the input",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text to display with the input",name:"helperText",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:"An array of string error messages",name:"errors",required:!1,type:{name:"string | string[]"}}}}}catch{}var fe,Ee;function Ve(){if(Ee)return fe;Ee=1;const h=Te(),B=ve(),y=Ce(),i=qe(),_=xe(),m=Re(),R=Pe(),{CLICK:b}=De(),{prefix:c}=$e(),ee="body",M=`.${c}-header`,L=`.${c}-nav`,j=`.${c}-nav-container`,T=`.${c}-nav__primary`,te=`.${c}-nav__primary-item`,w=`button.${c}-nav__link`,Y=`${L} a`,q="data-nav-hidden",H=`.${c}-menu-btn`,x=`.${c}-nav__close`,C=`.${c}-overlay`,se=`${x}, .${c}-overlay`,re=[L,C].join(", "),ne=`body *:not(${M}, ${j}, ${L}, ${L} *):not([aria-hidden])`,ae=`[${q}]`,X="usa-js-mobile-nav--active",k="is-visible";let u,A,S;const N=()=>document.body.classList.contains(X),O=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),P=R(),Z=window.getComputedStyle(document.body).getPropertyValue("padding-right"),z=`${parseInt(Z.replace(/px/,""),10)+parseInt(P.replace(/px/,""),10)}px`,oe=()=>{const n=document.querySelector(`${M}`).parentNode;S=document.querySelectorAll(ne),S.forEach(o=>{o!==n&&(o.setAttribute("aria-hidden",!0),o.setAttribute(q,""))})},ie=()=>{S=document.querySelectorAll(ae),S&&S.forEach(n=>{n.removeAttribute("aria-hidden"),n.removeAttribute(q)})},ce=n=>{n?oe():ie()},le=()=>{O&&document.body.classList.add("is-safari")},K=n=>{const o=`-${window.scrollY}px`;O&&n.style.setProperty("--scrolltop",o)},G=n=>{const{body:o}=document,p=typeof n=="boolean"?n:!N();K(o),o.classList.toggle(X,p),y(re).forEach(me=>me.classList.toggle(k,p)),u.focusTrap.update(p);const J=o.querySelector(x),W=document.querySelector(H);return o.style.paddingRight=o.style.paddingRight===z?Z:z,ce(p),p&&J?J.focus():!p&&W&&getComputedStyle(W).display!=="none"&&W.focus(),p},U=()=>{const n=document.body.querySelector(x);N()&&n&&n.getBoundingClientRect().width===0&&u.toggleNav.call(n,!1)},de=()=>u.toggleNav.call(u,!1),V=()=>{A&&(i(A,!1),A=null)},Q=n=>{const o=n.target.closest(te);if(!n.target.matches(w)){const p=o.querySelector(w);p&&p.focus()}},ue=n=>{V(),Q(n)};return u=B({[b]:{[w](){return A!==this&&V(),A||(A=this,i(A,!0)),!1},[ee]:V,[H]:G,[se]:G,[Y](){const n=this.closest(m.ACCORDION);n&&m.getButtons(n).forEach(o=>m.hide(o)),N()&&u.toggleNav.call(u,!1)}},keydown:{[T]:h({Escape:ue})},focusout:{[T](n){n.target.closest(T).contains(n.relatedTarget)||V()}}},{init(n){const o=n.matches(L)?n:n.querySelector(L);o&&(u.focusTrap=_(o,{Escape:de})),le(),U(),window.addEventListener("resize",U,!1)},teardown(){window.removeEventListener("resize",U,!1),A=!1},focusTrap:null,toggleNav:G}),fe=u,fe}Ve();export{Se as F};