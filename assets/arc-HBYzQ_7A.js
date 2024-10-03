function Z(i){return function(){return i}}const hn=Math.abs,m=Math.atan2,D=Math.cos,fn=Math.max,en=Math.min,b=Math.sin,k=Math.sqrt,A=1e-12,B=Math.PI,U=B/2,cn=2*B;function pn(i){return i>1?0:i<-1?B:Math.acos(i)}function on(i){return i>=1?U:i<=-1?-U:Math.asin(i)}const sn=Math.PI,an=2*sn,O=1e-6,dn=an-O;function ln(i){this._+=i[0];for(let t=1,a=i.length;t<a;++t)this._+=arguments[t]+i[t]}function $n(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return ln;const a=10**t;return function(e){this._+=e[0];for(let o=1,l=e.length;o<l;++o)this._+=Math.round(arguments[o]*a)/a+e[o]}}class yn{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?ln:$n(t)}moveTo(t,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+a}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,a){this._append`L${this._x1=+t},${this._y1=+a}`}quadraticCurveTo(t,a,e,o){this._append`Q${+t},${+a},${this._x1=+e},${this._y1=+o}`}bezierCurveTo(t,a,e,o,l,y){this._append`C${+t},${+a},${+e},${+o},${this._x1=+l},${this._y1=+y}`}arcTo(t,a,e,o,l){if(t=+t,a=+a,e=+e,o=+o,l=+l,l<0)throw new Error(`negative radius: ${l}`);let y=this._x1,r=this._y1,_=e-t,h=o-a,n=y-t,d=r-a,s=n*n+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=a}`;else if(s>O)if(!(Math.abs(d*_-h*n)>O)||!l)this._append`L${this._x1=t},${this._y1=a}`;else{let c=e-y,$=o-r,g=_*_+h*h,q=c*c+$*$,p=Math.sqrt(g),M=Math.sqrt(s),x=l*Math.tan((sn-Math.acos((g+s-q)/(2*p*M)))/2),v=x/M,R=x/p;Math.abs(v-1)>O&&this._append`L${t+v*n},${a+v*d}`,this._append`A${l},${l},0,0,${+(d*c>n*$)},${this._x1=t+R*_},${this._y1=a+R*h}`}}arc(t,a,e,o,l,y){if(t=+t,a=+a,e=+e,y=!!y,e<0)throw new Error(`negative radius: ${e}`);let r=e*Math.cos(o),_=e*Math.sin(o),h=t+r,n=a+_,d=1^y,s=y?o-l:l-o;this._x1===null?this._append`M${h},${n}`:(Math.abs(this._x1-h)>O||Math.abs(this._y1-n)>O)&&this._append`L${h},${n}`,e&&(s<0&&(s=s%an+an),s>dn?this._append`A${e},${e},0,1,${d},${t-r},${a-_}A${e},${e},0,1,${d},${this._x1=h},${this._y1=n}`:s>O&&this._append`A${e},${e},0,${+(s>=sn)},${d},${this._x1=t+e*Math.cos(l)},${this._y1=a+e*Math.sin(l)}`)}rect(t,a,e,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+a}h${e=+e}v${+o}h${-e}Z`}toString(){return this._}}function gn(i){let t=3;return i.digits=function(a){if(!arguments.length)return t;if(a==null)t=null;else{const e=Math.floor(a);if(!(e>=0))throw new RangeError(`invalid digits: ${a}`);t=e}return i},()=>new yn(t)}function _n(i){return i.innerRadius}function xn(i){return i.outerRadius}function mn(i){return i.startAngle}function Mn(i){return i.endAngle}function vn(i){return i&&i.padAngle}function An(i,t,a,e,o,l,y,r){var _=a-i,h=e-t,n=y-o,d=r-l,s=d*_-n*h;if(!(s*s<A))return s=(n*(t-l)-d*(i-o))/s,[i+s*_,t+s*h]}function N(i,t,a,e,o,l,y){var r=i-a,_=t-e,h=(y?l:-l)/k(r*r+_*_),n=h*_,d=-h*r,s=i+n,c=t+d,$=a+n,g=e+d,q=(s+$)/2,p=(c+g)/2,M=$-s,x=g-c,v=M*M+x*x,R=o-l,P=s*g-$*c,C=(x<0?-1:1)*k(fn(0,R*R*v-P*P)),I=(P*x-M*C)/v,S=(-P*M-x*C)/v,E=(P*x+M*C)/v,T=(-P*M+x*C)/v,w=I-q,u=S-p,f=E-q,z=T-p;return w*w+u*u>f*f+z*z&&(I=E,S=T),{cx:I,cy:S,x01:-n,y01:-d,x11:I*(o/R-1),y11:S*(o/R-1)}}function Rn(){var i=_n,t=xn,a=Z(0),e=null,o=mn,l=Mn,y=vn,r=null,_=gn(h);function h(){var n,d,s=+i.apply(this,arguments),c=+t.apply(this,arguments),$=o.apply(this,arguments)-U,g=l.apply(this,arguments)-U,q=hn(g-$),p=g>$;if(r||(r=n=_()),c<s&&(d=c,c=s,s=d),!(c>A))r.moveTo(0,0);else if(q>cn-A)r.moveTo(c*D($),c*b($)),r.arc(0,0,c,$,g,!p),s>A&&(r.moveTo(s*D(g),s*b(g)),r.arc(0,0,s,g,$,p));else{var M=$,x=g,v=$,R=g,P=q,C=q,I=y.apply(this,arguments)/2,S=I>A&&(e?+e.apply(this,arguments):k(s*s+c*c)),E=en(hn(c-s)/2,+a.apply(this,arguments)),T=E,w=E,u,f;if(S>A){var z=on(S/s*b(I)),F=on(S/c*b(I));(P-=z*2)>A?(z*=p?1:-1,v+=z,R-=z):(P=0,v=R=($+g)/2),(C-=F*2)>A?(F*=p?1:-1,M+=F,x-=F):(C=0,M=x=($+g)/2)}var Q=c*D(M),j=c*b(M),G=s*D(R),H=s*b(R);if(E>A){var J=c*D(x),K=c*b(x),V=s*D(v),W=s*b(v),L;if(q<B)if(L=An(Q,j,V,W,J,K,G,H)){var X=Q-L[0],Y=j-L[1],nn=J-L[0],tn=K-L[1],un=1/b(pn((X*nn+Y*tn)/(k(X*X+Y*Y)*k(nn*nn+tn*tn)))/2),rn=k(L[0]*L[0]+L[1]*L[1]);T=en(E,(s-rn)/(un-1)),w=en(E,(c-rn)/(un+1))}else T=w=0}C>A?w>A?(u=N(V,W,Q,j,c,w,p),f=N(J,K,G,H,c,w,p),r.moveTo(u.cx+u.x01,u.cy+u.y01),w<E?r.arc(u.cx,u.cy,w,m(u.y01,u.x01),m(f.y01,f.x01),!p):(r.arc(u.cx,u.cy,w,m(u.y01,u.x01),m(u.y11,u.x11),!p),r.arc(0,0,c,m(u.cy+u.y11,u.cx+u.x11),m(f.cy+f.y11,f.cx+f.x11),!p),r.arc(f.cx,f.cy,w,m(f.y11,f.x11),m(f.y01,f.x01),!p))):(r.moveTo(Q,j),r.arc(0,0,c,M,x,!p)):r.moveTo(Q,j),!(s>A)||!(P>A)?r.lineTo(G,H):T>A?(u=N(G,H,J,K,s,-T,p),f=N(Q,j,V,W,s,-T,p),r.lineTo(u.cx+u.x01,u.cy+u.y01),T<E?r.arc(u.cx,u.cy,T,m(u.y01,u.x01),m(f.y01,f.x01),!p):(r.arc(u.cx,u.cy,T,m(u.y01,u.x01),m(u.y11,u.x11),!p),r.arc(0,0,s,m(u.cy+u.y11,u.cx+u.x11),m(f.cy+f.y11,f.cx+f.x11),p),r.arc(f.cx,f.cy,T,m(f.y11,f.x11),m(f.y01,f.x01),!p))):r.arc(0,0,s,R,v,p)}if(r.closePath(),n)return r=null,n+""||null}return h.centroid=function(){var n=(+i.apply(this,arguments)+ +t.apply(this,arguments))/2,d=(+o.apply(this,arguments)+ +l.apply(this,arguments))/2-B/2;return[D(d)*n,b(d)*n]},h.innerRadius=function(n){return arguments.length?(i=typeof n=="function"?n:Z(+n),h):i},h.outerRadius=function(n){return arguments.length?(t=typeof n=="function"?n:Z(+n),h):t},h.cornerRadius=function(n){return arguments.length?(a=typeof n=="function"?n:Z(+n),h):a},h.padRadius=function(n){return arguments.length?(e=n==null?null:typeof n=="function"?n:Z(+n),h):e},h.startAngle=function(n){return arguments.length?(o=typeof n=="function"?n:Z(+n),h):o},h.endAngle=function(n){return arguments.length?(l=typeof n=="function"?n:Z(+n),h):l},h.padAngle=function(n){return arguments.length?(y=typeof n=="function"?n:Z(+n),h):y},h.context=function(n){return arguments.length?(r=n??null,h):r},h}export{Rn as a,D as b,Z as c,b as d,A as e,en as m,B as p,k as s,cn as t,gn as w};