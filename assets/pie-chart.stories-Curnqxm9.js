var gt=Object.defineProperty;var ht=(t,e,n)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var x=(t,e,n)=>ht(t,typeof e!="symbol"?e+"":e,n);import{j as X}from"./jsx-runtime-DPda6Ybg.js";import{R as m,r as q}from"./index-DhrokLn_.js";import{m as ot,_ as N,B as T,i as B,p as f,b as ft,c as mt,C as bt,y as yt,h as rt,D as Y,q as it,E as At,x as Ct,F as xt,G as R,P as pt,r as Rt,V as Pt,s as Ot,w as vt,t as St,L as Et}from"./line-segment-Db8bXPQn.js";import{p as It}from"./pie-Bnf5nD2v.js";import{a as lt}from"./arc-HBYzQ_7A.js";import"./_commonjsHelpers-Cpj98o6Y.js";const wt=t=>t==null||Y(t)?t:`${t}`,jt=(t,e,n)=>t&&t.data&&t.data.fill?t.data.fill:e&&e[n%e.length],Lt=(t,e)=>typeof t.radius=="number"?t.radius:Math.min(t.width-e.left-e.right,t.height-e.top-e.bottom)/2,_t=(t,e)=>{const{width:n,height:a}=t,s=xt(t.origin)?t.origin:{};return{x:s.x!==void 0?s.x:(e.left-e.right+n)/2,y:s.y!==void 0?s.y:(e.top-e.bottom+a)/2}},Tt=(t,e)=>{const n=Y(t.padAngle)?0:t.padAngle;return It().sort(null).startAngle(R(t.startAngle)).endAngle(R(t.endAngle)).padAngle(R(n)).value(s=>s._y)(e)},Ft=t=>{var e;return Array.isArray(t.categories)?t.categories:((e=t==null?void 0:t.categories)==null?void 0:e.x)??[]},Dt=(t,e)=>{const n=[];return Ft(t).forEach(a=>{const s=e.findIndex(r=>{let{x:o}=r;return o===a});if(s>=0){const r=e.splice(s,1)[0];n.push(r)}}),[...n,...e]},Kt=t=>{const{colorScale:e,theme:n}=t,a=ft(t,"pie"),s=mt(t.style,a),r=Array.isArray(e)?e:bt(e,n),o=yt(t),u=Lt(t,o),g=_t(t,o),l=Dt(t,rt(t)),i=Tt(t,l);return Object.assign({},t,{style:s,colors:r,padding:o,defaultRadius:u,data:l,slices:i,origin:g})},Mt=(t,e)=>{const{style:n,colors:a}=e,s=jt(n,a,t);return Object.assign({fill:s},n.data)},Nt=(t,e,n)=>{let a;return e.label?a=e.label:Array.isArray(t.labels)?a=t.labels[n]:a=Y(t.labels)?t.labels:e.xName||e._x,wt(a)},Xt=t=>lt().outerRadius(t).innerRadius(t),Yt=(t,e,n)=>{const a=n&&n.padding||0;return e||t+a},kt=(t,e,n)=>{const a={startAngle:n==="startAngle"?e.startAngle:e.endAngle,endAngle:n==="endAngle"?e.endAngle:e.startAngle},s=Object.assign({},e,a);return t.centroid(s)},Bt=(t,e)=>e==="perpendicular"?t>90&&t<270?"bottom":"top":e==="parallel"?t>=0&&t<=180?"right":"left":t<45||t>315?"top":t>=45&&t<135?"right":t>=135&&t<225?"bottom":"left",Vt=t=>t==="top"||t==="bottom"?"middle":t==="right"?"start":"end",$t=t=>t==="left"||t==="right"?"middle":t==="bottom"?"start":"end",qt=(t,e,n)=>{let a=0;return e.angle!==void 0?a=n.angle:e==="centroid"?a=T((t.startAngle+t.endAngle)/2):a=e==="startAngle"?T(t.startAngle):T(t.endAngle),(a<0?360-a:a)%360},Wt=(t,e)=>e==="vertical"?0:e==="parallel"?t>180&&t<360?t+90:t-90:t>90&&t<270?t-180:t,zt=(t,e,n)=>{const{index:a,datum:s,data:r,slice:o,labelComponent:u,theme:g}=e,{style:l,defaultRadius:i,origin:c,width:y,height:h}=n,d=f(n.labelRadius,Object.assign({text:t},e)),P=f(n.labelPosition,Object.assign({text:t},e))||"centroid",O=f(n.labelPlacement,Object.assign({text:t},e))||"vertical",b=Object.assign({padding:0},l.labels),w=it(b,Object.assign({labelRadius:d,text:t},e)),v=Yt(i,d,w),F=Xt(v),S=kt(F,o,P),j=qt(o,P,b),A=Wt(j,O),C=Bt(j,O),E=b.textAnchor||Vt(C),L=b.verticalAnchor||$t(C),I={width:y,height:h,index:a,datum:s,data:r,slice:o,orientation:C,text:t,style:b,x:Math.round(S[0])+c.x,y:Math.round(S[1])+c.y,textAnchor:E,verticalAnchor:L,angle:A,calculatedLabelRadius:v};if(!At(u))return I;const _=g&&g.tooltip||{};return N({},I,Ct(_,["style"]))},Gt=t=>Math.cos(t-R(90)),Ht=t=>Math.sin(t-R(90)),W=(t,e)=>t*Gt(e),z=(t,e)=>t*Ht(e),G=t=>t.reduce((e,n)=>e+n,0)/t.length,Ut=(t,e,n)=>{const{innerRadius:a,radius:s,slice:{startAngle:r,endAngle:o},labelIndicatorInnerOffset:u,labelIndicatorOuterOffset:g,index:l}=t,{height:i,width:c}=e,{calculatedLabelRadius:y}=n,h=G([a,s]),d=G([o,r]),P=c/2,O=i/2,b=h+u,w=y-g,v=P+W(b,d),F=O+z(b,d),S=P+W(w,d),j=O+z(w,d);return N({},{x1:v,y1:F,x2:S,y2:j,index:l})},Jt=(t,e)=>{const n=ot(t,e,"pie"),a=Kt(n),{slices:s,style:r,data:o,origin:u,defaultRadius:g,labels:l,events:i,sharedEvents:c,height:y,width:h,standalone:d,name:P,innerRadius:O,cornerRadius:b,padAngle:w,disableInlineStyles:v,labelIndicator:F}=a,S=n.radius||g,j={parent:{standalone:d,height:y,width:h,slices:s,name:P,style:r.parent}};return s.reduce((A,C,E)=>{const L=N({},o[E],{startAngle:T(C.startAngle),endAngle:T(C.endAngle),padAngle:T(C.padAngle)}),I=B(L.eventKey)?E:L.eventKey,_={index:E,slice:C,datum:L,data:o,origin:u,innerRadius:O,radius:S,cornerRadius:b,padAngle:w,style:v?{}:Mt(E,a),disableInlineStyles:v};A[I]={data:_};const k=Nt(n,L,E);if(k!=null||l&&(i||c)){const ut=f(k,_);if(A[I].labels=zt(ut,Object.assign({},n,_),a),F){const $=A[I].labels;$.calculatedLabelRadius>S&&(A[I].labelIndicators=Ut(Object.assign({},n,_),a,$))}}return A},j)},Qt=t=>{const{slice:e,radius:n,innerRadius:a,cornerRadius:s}=t;if(Y(t.pathFunction))return t.pathFunction(e);const r=R(t.padAngle),o=R(t.sliceStartAngle),u=R(t.sliceEndAngle);return lt().cornerRadius(s).outerRadius(n).innerRadius(a||0)(N({startAngle:o,endAngle:u,padAngle:r},e))},Zt=t=>{const e=it(t.style,t),n=f(t.radius,Object.assign({},t,{style:e})),a=f(t.innerRadius,Object.assign({},t,{style:e,radius:n})),s=f(t.ariaLabel,t),r=f(t.id,t),o=f(t.cornerRadius,t),u=f(t.padAngle,t),g=f(t.sliceStartAngle,t),l=f(t.sliceEndAngle,t),i=f(t.tabIndex,t);return Object.assign({},t,{ariaLabel:s,style:e,radius:n,innerRadius:a,id:r,cornerRadius:o,padAngle:u,sliceStartAngle:g,sliceEndAngle:l,tabIndex:i})},te={pathComponent:m.createElement(pt,null),role:"presentation",shapeRendering:"auto"},ee=t=>{const e=Zt(N({},t,te)),n=e.origin?`translate(${e.origin.x}, ${e.origin.y})`:void 0;return m.cloneElement(e.pathComponent,{...e.events,"aria-label":e.ariaLabel,d:Qt(e),style:e.style,transform:e.transform||n,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath,tabIndex:e.tabIndex})},H={endAngle:360,height:400,innerRadius:0,cornerRadius:0,padAngle:0,padding:30,width:400,startAngle:0,colorScale:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],labelPosition:"centroid",labelIndicatorInnerOffset:15,labelIndicatorOuterOffset:5},ne=t=>!B(t._x)&&!B(t._y);class p extends m.Component{static getBaseProps(e){return Jt(e,H)}shouldAnimate(){return!!this.props.animate}renderComponents(e,n){n===void 0&&(n=ne);const{dataComponent:a,labelComponent:s,groupComponent:r,labelIndicator:o,labelPosition:u}=e;if(!r)throw new Error("VictoryPie expects a groupComponent prop");const g=o&&u==="centroid",l=[];if(a){const i=this.dataKeys.reduce((c,y,h)=>{const d=this.getComponentProps(a,"data",h);return n(d.datum)&&c.push(m.cloneElement(a,d)),c},[]);l.push(...i)}if(s){const i=this.dataKeys.map((c,y)=>{const h=this.getComponentProps(s,"labels",y);if(h.text!==void 0&&h.text!==null)return m.cloneElement(s,h)}).filter(c=>c!==void 0);l.push(...i)}if(g&&o){let i=m.createElement(Et,null);typeof o=="object"&&(i=o);const c=this.dataKeys.map((y,h)=>{const d=this.getComponentProps(i,"labelIndicators",h);return m.cloneElement(i,d)});l.push(...c)}return this.renderContainer(r,l)}render(){const{animationWhitelist:e,role:n}=ct,a=ot(this.props,H,n);if(this.shouldAnimate())return this.animateComponent(a,e);const s=this.renderComponents(a),r=a.standalone?this.renderContainer(a.containerComponent,s):s;return vt(r,a)}}x(p,"animationWhitelist",["data","endAngle","height","innerRadius","cornerRadius","padAngle","padding","colorScale","startAngle","style","width"]),x(p,"displayName","VictoryPie"),x(p,"role","pie"),x(p,"defaultTransitions",{onExit:{duration:500,before:()=>({_y:0,label:" "})},onEnter:{duration:500,before:()=>({_y:0,label:" "}),after:e=>({y_:e._y,label:e.label})}}),x(p,"defaultProps",{data:[{x:"A",y:1},{x:"B",y:2},{x:"C",y:3},{x:"D",y:1},{x:"E",y:2}],standalone:!0,dataComponent:m.createElement(ee,null),labelComponent:m.createElement(Rt,null),containerComponent:m.createElement(Pt,null),groupComponent:m.createElement("g",null),sortOrder:"ascending",theme:Ot.grayscale}),x(p,"getData",rt),x(p,"expectedComponents",["dataComponent","labelComponent","groupComponent","containerComponent","labelIndicatorComponent"]);const ct=St(p),dt=t=>{const e=q.useRef(null);return q.useEffect(()=>{var a;const n=e.current;(a=n==null?void 0:n.querySelector("svg"))==null||a.setAttribute("title",t.title)}),X.jsx("div",{ref:e,children:X.jsx(ct,{colorScale:t.colors,data:t.data,innerRadius:t.innerRadius,height:t.height,width:t.width,animate:{duration:2e3,onLoad:{duration:1e3}}})})},de={title:"Data Viz/Pie Chart",component:dt},V=t=>X.jsx("div",{style:{width:"400px",height:"400px"},children:X.jsx(dt,{...t})}),D=V.bind({});D.args={title:"Pie Chart",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1},{x:"snake",y:3},{x:"rabbit",y:4}],colors:"warm",innerRadius:0};const K=V.bind({});K.args={title:"Pie Chart as Donut",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:"warm",innerRadius:100};const M=V.bind({});M.args={title:"Pie Chart with Custom Colors",height:400,width:400,data:[{x:"dogs",y:8},{x:"cats",y:5},{x:"fish",y:1}],colors:["#0d7ea2","#cd425b","#00a871"],innerRadius:0};var U,J,Q;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`(args: PieChartProps) => <div style={{
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
  </div>`,...(st=(at=M.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};const ue=["Default","DonutChart","CustomColors"];export{M as CustomColors,D as Default,K as DonutChart,ue as __namedExportsOrder,de as default};
