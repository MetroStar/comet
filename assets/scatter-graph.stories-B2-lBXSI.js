var k=Object.defineProperty;var B=(t,n,a)=>n in t?k(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;var l=(t,n,a)=>(B(t,typeof n!="symbol"?n+"":n,a),a);import{j as z}from"./jsx-runtime--26OcTxz.js";import{R as m}from"./index-BLgStI3F.js";import{I as J,_ as Q,o as X,p as u,q as Y,P as Z,m as A,i as tt,G as et,g as nt,a as at,b as st,c as ot,d as I,e as L,f as rt,h as G,H as it,y as ct,V as lt,r as ht,s as dt,w as mt,t as ut}from"./data-6j7KOtXK.js";import{l as C,V as gt}from"./victory-chart-Cna-n2Jh.js";import{d as $t}from"./default-transitions-BfLJ9QZ-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_baseAssignValue-C-YtspGc.js";import"./isPlainObject-BpwBpDME.js";import"./pickBy-DN9OZ1gh.js";function yt(t,n,a){return`M ${t}, ${n}
      m ${-a}, 0
      a ${a}, ${a} 0 1,0 ${a*2},0
      a ${a}, ${a} 0 1,0 ${-a*2},0`}function bt(t,n,a){const s=.87*a,e=t-s,r=n+s,o=t+s-e;return`M ${e}, ${r}
      h${o}
      v-${o}
      h-${o}
      z`}function ft(t,n,a){const s=.87*a,e=Math.sqrt(2*(s*s));return`M ${t}, ${n+e}
      l ${e}, -${e}
      l -${e}, -${e}
      l -${e}, ${e}
      l ${e}, ${e}
      z`}function xt(t,n,a){const s=a/2*Math.sqrt(3),e=t-a,r=t+a,o=n-a,i=n+s;return`M ${e}, ${o}
      L ${r}, ${o}
      L ${t}, ${i}
      z`}function zt(t,n,a){const s=a/2*Math.sqrt(3),e=t-a,r=t+a,o=n-s,i=n+a;return`M ${e}, ${i}
      L ${r}, ${i}
      L ${t}, ${o}
      z`}function Mt(t,n,a){const s=1.1*a,e=s/1.5;return`
      M ${t-e/2}, ${n+s}
      v-${e}
      h-${e}
      v-${e}
      h${e}
      v-${e}
      h${e}
      v${e}
      h${e}
      v${e}
      h-${e}
      v${e}
      z`}function Pt(t,n,a){const s=.8*a,e=s/1.5;return`
      M ${t-e/2}, ${n+s+e}
      v-${e*2}
      h-${e}
      v-${e}
      h${e}
      v-${e}
      h${e}
      v${e}
      h${e}
      v${e}
      h-${e}
      v${e*2}
      z`}function vt(t,n,a){const s=1.1*a,e=s-s*.3,r=t-s,o=n+e/2,i=t+s-r;return`M ${r}, ${o}
      h${i}
      v-${e}
      h-${i}
      z`}function pt(t,n,a){const s=1.35*a,e=Math.PI/5;return`M ${J(10).map(o=>{const i=o%2===0?s:s/2;return`${i*Math.sin(e*(o+1))+t},
        ${i*Math.cos(e*(o+1))+n}`}).join("L")} z`}const St=Object.freeze(Object.defineProperty({__proto__:null,circle:yt,cross:Pt,diamond:ft,minus:vt,plus:Mt,square:bt,star:pt,triangleDown:xt,triangleUp:zt},Symbol.toStringTag,{value:"Module"})),Ct=t=>{const{x:n,y:a,size:s,symbol:e}=t;if(t.getPath)return t.getPath(n,a,s);const r=St;return(typeof r[e]=="function"?r[e]:r.circle)(n,a,s)},Dt=t=>{const n=u(t.ariaLabel,t),a=u(t.desc,t),s=u(t.id,t),e=u(t.size,t),r=Y(t.style,t),o=u(t.symbol,t),i=u(t.tabIndex,t);return Object.assign({},t,{ariaLabel:n,desc:a,id:s,size:e,style:r,symbol:o,tabIndex:i})},jt={pathComponent:m.createElement(Z,null),role:"presentation",shapeRendering:"auto"},wt=t=>{const n=Dt(Q({},t,jt)),a=X(n);return m.cloneElement(n.pathComponent,{...n.events,"aria-label":n.ariaLabel,d:Ct(n),style:n.style,desc:n.desc,tabIndex:n.tabIndex,role:n.role,shapeRendering:n.shapeRendering,className:n.className,transform:n.transform,clipPath:n.clipPath,...a})},Rt=(t,n)=>n.bubbleProperty?"circle":t.symbol||n.symbol,Et=(t,n)=>{const{data:a,z:s,maxBubbleSize:e,minBubbleSize:r}=n,o=a.map(y=>y[s]),i=Math.min(...o),c=Math.max(...o),g=e||(()=>{const y=Math.min(...Object.values(ct(n)));return Math.max(y,5)})(),$=r||g*.1;if(c===i)return Math.max($,1);const M=Math.PI*Math.pow(g,2),P=Math.PI*Math.pow($,2),v=(t[s]-i)/(c-i)*M,f=Math.max(v,P),p=Math.sqrt(f/Math.PI);return Math.max(p,1)},It=(t,n)=>{const{size:a,z:s}=n;return t.size?typeof t.size=="function"?t.size:Math.max(t.size,1):typeof n.size=="function"?a:t[s]?Et(t,n):Math.max(a||0,1)},Lt=t=>{const n=st(t,"scatter"),a=ot(t.style,n),s={x:I(t,"x"),y:I(t,"y")},e={x:C(t,"x"),y:C(t,"y")},r={x:L(t,"x").domain(e.x).range(t.horizontal?s.y:s.x),y:L(t,"y").domain(e.y).range(t.horizontal?s.x:s.y)},o=t.polar?t.origin||rt(t):void 0,i=t.bubbleProperty||"z";let c=G(t);return c=it(c,e),{domain:e,data:c,scale:r,style:a,origin:o,z:i}},Ot=(t,n)=>{const a=A(t,n,"scatter"),s=Object.assign({},a,Lt(a)),{data:e,domain:r,events:o,height:i,origin:c,padding:D,polar:g,scale:$,name:M,sharedEvents:P,standalone:v,style:f,theme:p,width:y,labels:H,horizontal:j,disableInlineStyles:w}=s,K={parent:{style:f.parent,scale:$,domain:r,data:e,height:i,width:y,standalone:v,theme:p,origin:c,polar:g,padding:D,name:M,horizontal:j}};return e.reduce((S,d,x)=>{const R=tt(d.eventKey)?x:d.eventKey,{x:U,y:V}=et(s,d),W={x:U,y:V,datum:d,data:e,index:x,scale:$,polar:g,origin:c,horizontal:j,size:It(d,s),symbol:Rt(d,s),style:w?{}:f.data,disableInlineStyles:w};S[R]={data:W};const E=nt(s,d,x);return(E!=null||H&&(o||P))&&(S[R].labels=at(s,x)),S},K)},O={width:450,height:300,padding:50,size:3,symbol:"circle"};class h extends m.Component{static getBaseProps(n){return Ot(n,O)}shouldAnimate(){return!!this.props.animate}render(){const{animationWhitelist:n,role:a}=F,s=A(this.props,O,a);if(this.shouldAnimate())return this.animateComponent(s,n);const e=this.renderData(s),r=s.standalone?this.renderContainer(s.containerComponent,e):e;return mt(r,s)}}l(h,"animationWhitelist",["data","domain","height","maxBubbleSize","padding","samples","size","style","width"]),l(h,"displayName","VictoryScatter"),l(h,"role","scatter"),l(h,"defaultTransitions",$t()),l(h,"defaultProps",{containerComponent:m.createElement(lt,null),dataComponent:m.createElement(wt,null),labelComponent:m.createElement(ht,null),groupComponent:m.createElement("g",null),samples:50,sortOrder:"ascending",standalone:!0,theme:dt.grayscale}),l(h,"getDomain",C),l(h,"getData",G),l(h,"expectedComponents",["dataComponent","labelComponent","groupComponent","containerComponent"]);const F=ut(h),N=t=>z.jsx(gt,{...t.chart,children:t.data.map((n,a)=>z.jsx(F,{data:n,size:t.size,style:{data:{fill:t.colors?t.colors[a]?t.colors[a]:t.colors[0]:"#0d7ea2"}},animate:{duration:2e3,onLoad:{duration:1e3}}},`scatter-${a}`))}),Wt={title:"Data Viz/Scatter Graph",component:N,argTypes:{size:{control:"number"}}},_t=t=>z.jsx("div",{style:{width:"400px",height:"400px"},children:z.jsx(N,{...t})}),b=_t.bind({});b.args={chart:{title:"Scatter graph",width:400,height:400},size:7,colors:["#0d7ea2","#cd425b"],data:[[{x:0,y:3},{x:1,y:9},{x:2,y:5},{x:3,y:12}],[{x:0,y:1},{x:1,y:2},{x:2,y:7},{x:3,y:2}]]};var _,T,q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`(args: ScatterGraphProps) => <div style={{
  width: '400px',
  height: '400px'
}}>
    <ScatterGraph {...args} />
  </div>`,...(q=(T=b.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const kt=["Default"];export{b as Default,kt as __namedExportsOrder,Wt as default};
