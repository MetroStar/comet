var gt=Object.defineProperty;var ht=(t,e,n)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>ht(t,typeof e!="symbol"?e+"":e,n);import{j as X}from"./jsx-runtime-Bxcv0yjW.js";import{R as m,r as B}from"./index-mfbfsM12.js";import{i as ft}from"./isPlainObject-CYVBBrud.js";import{m as ot,_ as N,B as T,i as V,p as f,b as mt,c as bt,y as yt,h as rt,C as Y,q as it,D as At,x as pt,E as R,F as Ct,P as xt,r as Rt,V as Pt,s as Ot,w as vt,t as St,L as wt}from"./data-OCZXtohS.js";import{p as Et}from"./pie-Bnf5nD2v.js";import{a as lt}from"./arc-HBYzQ_7A.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_getPrototype-B2NkHwh7.js";import"./pickBy-0YiQoQtx.js";const It=t=>t==null||Y(t)?t:`${t}`,jt=(t,e,n)=>t&&t.data&&t.data.fill?t.data.fill:e&&e[n%e.length],Lt=(t,e)=>typeof t.radius=="number"?t.radius:Math.min(t.width-e.left-e.right,t.height-e.top-e.bottom)/2,_t=(t,e)=>{const{width:n,height:a}=t,s=ft(t.origin)?t.origin:{};return{x:s.x!==void 0?s.x:(e.left-e.right+n)/2,y:s.y!==void 0?s.y:(e.top-e.bottom+a)/2}},Tt=(t,e)=>{const n=Y(t.padAngle)?0:t.padAngle;return Et().sort(null).startAngle(R(t.startAngle)).endAngle(R(t.endAngle)).padAngle(R(n)).value(s=>s._y)(e)},Ft=t=>{const{colorScale:e}=t,n=mt(t,"pie"),a=bt(t.style,n),s=Array.isArray(e)?e:Ct(e),r=yt(t),o=Lt(t,r),g=_t(t,r),l=rt(t),c=Tt(t,l);return Object.assign({},t,{style:a,colors:s,padding:r,defaultRadius:o,data:l,slices:c,origin:g})},Dt=(t,e)=>{const{style:n,colors:a}=e,s=jt(n,a,t);return Object.assign({fill:s},n.data)},Kt=(t,e,n)=>{let a;return e.label?a=e.label:Array.isArray(t.labels)?a=t.labels[n]:a=Y(t.labels)?t.labels:e.xName||e._x,It(a)},Mt=t=>lt().outerRadius(t).innerRadius(t),Nt=(t,e,n)=>{const a=n&&n.padding||0;return e||t+a},Xt=(t,e,n)=>{const a={startAngle:n==="startAngle"?e.startAngle:e.endAngle,endAngle:n==="endAngle"?e.endAngle:e.startAngle},s=Object.assign({},e,a);return t.centroid(s)},Yt=(t,e)=>e==="perpendicular"?t>90&&t<270?"bottom":"top":e==="parallel"?t>=0&&t<=180?"right":"left":t<45||t>315?"top":t>=45&&t<135?"right":t>=135&&t<225?"bottom":"left",kt=t=>t==="top"||t==="bottom"?"middle":t==="right"?"start":"end",Vt=t=>t==="left"||t==="right"?"middle":t==="bottom"?"start":"end",$t=(t,e,n)=>{let a=0;return e.angle!==void 0?a=n.angle:e==="centroid"?a=T((t.startAngle+t.endAngle)/2):a=e==="startAngle"?T(t.startAngle):T(t.endAngle),(a<0?360-a:a)%360},qt=(t,e)=>e==="vertical"?0:e==="parallel"?t>180&&t<360?t+90:t-90:t>90&&t<270?t-180:t,Bt=(t,e,n)=>{const{index:a,datum:s,data:r,slice:o,labelComponent:g,theme:l}=e,{style:c,defaultRadius:i,origin:d,width:y,height:h}=n,u=f(n.labelRadius,Object.assign({text:t},e)),P=f(n.labelPosition,Object.assign({text:t},e))||"centroid",O=f(n.labelPlacement,Object.assign({text:t},e))||"vertical",b=Object.assign({padding:0},c.labels),I=it(b,Object.assign({labelRadius:u,text:t},e)),v=Nt(i,u,I),F=Mt(v),S=Xt(F,o,P),j=$t(o,P,b),A=qt(j,O),p=Yt(j,O),w=b.textAnchor||kt(p),L=b.verticalAnchor||Vt(p),E={width:y,height:h,index:a,datum:s,data:r,slice:o,orientation:p,text:t,style:b,x:Math.round(S[0])+d.x,y:Math.round(S[1])+d.y,textAnchor:w,verticalAnchor:L,angle:A,calculatedLabelRadius:v};if(!At(g))return E;const _=l&&l.tooltip||{};return N({},E,pt(_,["style"]))},Wt=t=>Math.cos(t-R(90)),zt=t=>Math.sin(t-R(90)),W=(t,e)=>t*Wt(e),z=(t,e)=>t*zt(e),H=t=>t.reduce((e,n)=>e+n,0)/t.length,Ht=(t,e,n)=>{const{innerRadius:a,radius:s,slice:{startAngle:r,endAngle:o},labelIndicatorInnerOffset:g,labelIndicatorOuterOffset:l,index:c}=t,{height:i,width:d}=e,{calculatedLabelRadius:y}=n,h=H([a,s]),u=H([o,r]),P=d/2,O=i/2,b=h+g,I=y-l,v=P+W(b,u),F=O+z(b,u),S=P+W(I,u),j=O+z(I,u);return N({},{x1:v,y1:F,x2:S,y2:j,index:c})},Ut=(t,e)=>{const n=ot(t,e,"pie"),a=Ft(n),{slices:s,style:r,data:o,origin:g,defaultRadius:l,labels:c,events:i,sharedEvents:d,height:y,width:h,standalone:u,name:P,innerRadius:O,cornerRadius:b,padAngle:I,disableInlineStyles:v,labelIndicator:F}=a,S=n.radius||l,j={parent:{standalone:u,height:y,width:h,slices:s,name:P,style:r.parent}};return s.reduce((A,p,w)=>{const L=N({},o[w],{startAngle:T(p.startAngle),endAngle:T(p.endAngle),padAngle:T(p.padAngle)}),E=V(L.eventKey)?w:L.eventKey,_={index:w,slice:p,datum:L,data:o,origin:g,innerRadius:O,radius:S,cornerRadius:b,padAngle:I,style:v?{}:Dt(w,a),disableInlineStyles:v};A[E]={data:_};const k=Kt(n,L,w);if(k!=null||c&&(i||d)){const ut=f(k,_);if(A[E].labels=Bt(ut,Object.assign({},n,_),a),F){const q=A[E].labels;q.calculatedLabelRadius>S&&(A[E].labelIndicators=Ht(Object.assign({},n,_),a,q))}}return A},j)},Gt=t=>{const{slice:e,radius:n,innerRadius:a,cornerRadius:s}=t;if(Y(t.pathFunction))return t.pathFunction(e);const r=R(t.padAngle),o=R(t.sliceStartAngle),g=R(t.sliceEndAngle);return lt().cornerRadius(s).outerRadius(n).innerRadius(a||0)(N({startAngle:o,endAngle:g,padAngle:r},e))},Jt=t=>{const e=it(t.style,t),n=f(t.radius,Object.assign({},t,{style:e})),a=f(t.innerRadius,Object.assign({},t,{style:e,radius:n})),s=f(t.ariaLabel,t),r=f(t.id,t),o=f(t.cornerRadius,t),g=f(t.padAngle,t),l=f(t.sliceStartAngle,t),c=f(t.sliceEndAngle,t),i=f(t.tabIndex,t);return Object.assign({},t,{ariaLabel:s,style:e,radius:n,innerRadius:a,id:r,cornerRadius:o,padAngle:g,sliceStartAngle:l,sliceEndAngle:c,tabIndex:i})},Qt={pathComponent:m.createElement(xt,null),role:"presentation",shapeRendering:"auto"},Zt=t=>{const e=Jt(N({},t,Qt)),n=e.origin?`translate(${e.origin.x}, ${e.origin.y})`:void 0;return m.cloneElement(e.pathComponent,{...e.events,"aria-label":e.ariaLabel,d:Gt(e),style:e.style,transform:e.transform||n,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath,tabIndex:e.tabIndex})},U={endAngle:360,height:400,innerRadius:0,cornerRadius:0,padAngle:0,padding:30,width:400,startAngle:0,colorScale:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],labelPosition:"centroid",labelIndicatorInnerOffset:15,labelIndicatorOuterOffset:5},te=t=>!V(t._x)&&!V(t._y);class x extends m.Component{static getBaseProps(e){return Ut(e,U)}shouldAnimate(){return!!this.props.animate}renderComponents(e,n){n===void 0&&(n=te);const{dataComponent:a,labelComponent:s,groupComponent:r,labelIndicator:o,labelPosition:g}=e;if(!r)throw new Error("VictoryPie expects a groupComponent prop");const l=o&&g==="centroid",c=[];if(a){const i=this.dataKeys.reduce((d,y,h)=>{const u=this.getComponentProps(a,"data",h);return n(u.datum)&&d.push(m.cloneElement(a,u)),d},[]);c.push(...i)}if(s){const i=this.dataKeys.map((d,y)=>{const h=this.getComponentProps(s,"labels",y);if(h.text!==void 0&&h.text!==null)return m.cloneElement(s,h)}).filter(d=>d!==void 0);c.push(...i)}if(l&&o){let i=m.createElement(wt,null);typeof o=="object"&&(i=o);const d=this.dataKeys.map((y,h)=>{const u=this.getComponentProps(i,"labelIndicators",h);return m.cloneElement(i,u)});c.push(...d)}return this.renderContainer(r,c)}render(){const{animationWhitelist:e,role:n}=ct,a=ot(this.props,U,n);if(this.shouldAnimate())return this.animateComponent(a,e);const s=this.renderComponents(a),r=a.standalone?this.renderContainer(a.containerComponent,s):s;return vt(r,a)}}C(x,"animationWhitelist",["data","endAngle","height","innerRadius","cornerRadius","padAngle","padding","colorScale","startAngle","style","width"]),C(x,"displayName","VictoryPie"),C(x,"role","pie"),C(x,"defaultTransitions",{onExit:{duration:500,before:()=>({_y:0,label:" "})},onEnter:{duration:500,before:()=>({_y:0,label:" "}),after:e=>({y_:e._y,label:e.label})}}),C(x,"defaultProps",{data:[{x:"A",y:1},{x:"B",y:2},{x:"C",y:3},{x:"D",y:1},{x:"E",y:2}],standalone:!0,dataComponent:m.createElement(Zt,null),labelComponent:m.createElement(Rt,null),containerComponent:m.createElement(Pt,null),groupComponent:m.createElement("g",null),sortOrder:"ascending",theme:Ot.grayscale}),C(x,"getData",rt),C(x,"expectedComponents",["dataComponent","labelComponent","groupComponent","containerComponent","labelIndicatorComponent"]);const ct=St(x),dt=t=>{const e=B.useRef(null);return B.useEffect(()=>{var a;const n=e.current;(a=n==null?void 0:n.querySelector("svg"))==null||a.setAttribute("title",t.title)}),X.jsx("div",{ref:e,children:X.jsx(ct,{colorScale:t.colors,data:t.data,innerRadius:t.innerRadius,height:t.height,width:t.width,animate:{duration:2e3,onLoad:{duration:1e3}}})})},ue={title:"Data Viz/Pie Chart",component:dt},$=t=>X.jsx("div",{style:{width:"400px",height:"400px"},children:X.jsx(dt,{...t})}),D=$.bind({});D.args={title:"Pie Chart",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1},{x:"snake",y:3},{x:"rabbit",y:4}],colors:"warm",innerRadius:0};const K=$.bind({});K.args={title:"Pie Chart as Donut",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:"warm",innerRadius:100};const M=$.bind({});M.args={title:"Pie Chart with Custom Colors",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:["#0d7ea2","#cd425b","#00a871"],innerRadius:0};var G,J,Q;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,tt,et;K.parameters={...K.parameters,docs:{...(Z=K.parameters)==null?void 0:Z.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(et=(tt=K.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,at,st;M.parameters={...M.parameters,docs:{...(nt=M.parameters)==null?void 0:nt.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <PieChart {...args} />
  </div>`,...(st=(at=M.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};const ge=["Default","DonutChart","CustomColors"];export{M as CustomColors,D as Default,K as DonutChart,ge as __namedExportsOrder,ue as default};