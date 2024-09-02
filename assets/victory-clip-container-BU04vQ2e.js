var nn=Object.defineProperty;var en=(t,n,i)=>n in t?nn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i;var R=(t,n,i)=>en(t,typeof n!="symbol"?n+"":n,i);import{w as Y,c as f,s as p,m as Z,t as B,p as $,b as vt,d as O,e as ht,a as sn}from"./arc-HBYzQ_7A.js";import{a as j,s as on,p as rn}from"./pie-Bnf5nD2v.js";import{a3 as hn,aj as _n,y as _t,ak as lt,o as ln,d as at,_ as an}from"./line-segment-DjfrSo4q.js";import{d as cn}from"./_getPrototype-B2NkHwh7.js";import{R as m}from"./index-mfbfsM12.js";import{C as un}from"./victory-chart-DrQHwmoJ.js";function bt(t){this._context=t}bt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);break}}};function P(t){return new bt(t)}function tt(t){return t[0]}function nt(t){return t[1]}function q(t,n){var i=f(!0),e=null,s=P,o=null,r=Y(h);t=typeof t=="function"?t:t===void 0?tt:f(t),n=typeof n=="function"?n:n===void 0?nt:f(n);function h(_){var l,u=(_=j(_)).length,a,c=!1,y;for(e==null&&(o=s(y=r())),l=0;l<=u;++l)!(l<u&&i(a=_[l],l,_))===c&&((c=!c)?o.lineStart():o.lineEnd()),c&&o.point(+t(a,l,_),+n(a,l,_));if(y)return o=null,y+""||null}return h.x=function(_){return arguments.length?(t=typeof _=="function"?_:f(+_),h):t},h.y=function(_){return arguments.length?(n=typeof _=="function"?_:f(+_),h):n},h.defined=function(_){return arguments.length?(i=typeof _=="function"?_:f(!!_),h):i},h.curve=function(_){return arguments.length?(s=_,e!=null&&(o=s(e)),h):s},h.context=function(_){return arguments.length?(_==null?e=o=null:o=s(e=_),h):e},h}function Tt(t,n,i){var e=null,s=f(!0),o=null,r=P,h=null,_=Y(l);t=typeof t=="function"?t:t===void 0?tt:f(+t),n=typeof n=="function"?n:n===void 0?f(0):f(+n),i=typeof i=="function"?i:i===void 0?nt:f(+i);function l(a){var c,y,d,T=(a=j(a)).length,v,b=!1,N,W=new Array(T),H=new Array(T);for(o==null&&(h=r(N=_())),c=0;c<=T;++c){if(!(c<T&&s(v=a[c],c,a))===b)if(b=!b)y=c,h.areaStart(),h.lineStart();else{for(h.lineEnd(),h.lineStart(),d=c-1;d>=y;--d)h.point(W[d],H[d]);h.lineEnd(),h.areaEnd()}b&&(W[c]=+t(v,c,a),H[c]=+n(v,c,a),h.point(e?+e(v,c,a):W[c],i?+i(v,c,a):H[c]))}if(N)return h=null,N+""||null}function u(){return q().defined(s).curve(r).context(o)}return l.x=function(a){return arguments.length?(t=typeof a=="function"?a:f(+a),e=null,l):t},l.x0=function(a){return arguments.length?(t=typeof a=="function"?a:f(+a),l):t},l.x1=function(a){return arguments.length?(e=a==null?null:typeof a=="function"?a:f(+a),l):e},l.y=function(a){return arguments.length?(n=typeof a=="function"?a:f(+a),i=null,l):n},l.y0=function(a){return arguments.length?(n=typeof a=="function"?a:f(+a),l):n},l.y1=function(a){return arguments.length?(i=a==null?null:typeof a=="function"?a:f(+a),l):i},l.lineX0=l.lineY0=function(){return u().x(t).y(n)},l.lineY1=function(){return u().x(t).y(i)},l.lineX1=function(){return u().x(e).y(n)},l.defined=function(a){return arguments.length?(s=typeof a=="function"?a:f(!!a),l):s},l.curve=function(a){return arguments.length?(r=a,o!=null&&(h=r(o)),l):r},l.context=function(a){return arguments.length?(a==null?o=h=null:h=r(o=a),l):o},l}var kt=it(P);function wt(t){this._curve=t}wt.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};function it(t){function n(i){return new wt(t(i))}return n._curve=t,n}function S(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(i){return arguments.length?n(it(i)):n()._curve},t}function J(){return S(q().curve(kt))}function ct(){var t=Tt().curve(kt),n=t.curve,i=t.lineX0,e=t.lineX1,s=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return S(i())},delete t.lineX0,t.lineEndAngle=function(){return S(e())},delete t.lineX1,t.lineInnerRadius=function(){return S(s())},delete t.lineY0,t.lineOuterRadius=function(){return S(o())},delete t.lineY1,t.curve=function(r){return arguments.length?n(it(r)):n()._curve},t}function E(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}class Ct{constructor(n,i){this._context=n,this._x=i}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,i){switch(n=+n,i=+i,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,i):this._context.moveTo(n,i);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,i,n,i):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+i)/2,n,this._y0,n,i);break}}this._x0=n,this._y0=i}}class fn{constructor(n){this._context=n}lineStart(){this._point=0}lineEnd(){}point(n,i){if(n=+n,i=+i,this._point===0)this._point=1;else{const e=E(this._x0,this._y0),s=E(this._x0,this._y0=(this._y0+i)/2),o=E(n,this._y0),r=E(n,i);this._context.moveTo(...e),this._context.bezierCurveTo(...s,...o,...r)}this._x0=n,this._y0=i}}function Nt(t){return new Ct(t,!0)}function St(t){return new Ct(t,!1)}function pn(t){return new fn(t)}function dn(t){return t.source}function mn(t){return t.target}function I(t){let n=dn,i=mn,e=tt,s=nt,o=null,r=null,h=Y(_);function _(){let l;const u=on.call(arguments),a=n.apply(this,u),c=i.apply(this,u);if(o==null&&(r=t(l=h())),r.lineStart(),u[0]=a,r.point(+e.apply(this,u),+s.apply(this,u)),u[0]=c,r.point(+e.apply(this,u),+s.apply(this,u)),r.lineEnd(),l)return r=null,l+""||null}return _.source=function(l){return arguments.length?(n=l,_):n},_.target=function(l){return arguments.length?(i=l,_):i},_.x=function(l){return arguments.length?(e=typeof l=="function"?l:f(+l),_):e},_.y=function(l){return arguments.length?(s=typeof l=="function"?l:f(+l),_):s},_.context=function(l){return arguments.length?(l==null?o=r=null:r=t(o=l),_):o},_}function yn(){return I(Nt)}function xn(){return I(St)}function gn(){const t=I(pn);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}const vn=p(3),Et={draw(t,n){const i=p(n+Z(n/28,.75))*.59436,e=i/2,s=e*vn;t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-s,-e),t.lineTo(s,e),t.moveTo(-s,e),t.lineTo(s,-e)}},z={draw(t,n){const i=p(n/$);t.moveTo(i,0),t.arc(0,0,i,0,B)}},Pt={draw(t,n){const i=p(n/5)/2;t.moveTo(-3*i,-i),t.lineTo(-i,-i),t.lineTo(-i,-3*i),t.lineTo(i,-3*i),t.lineTo(i,-i),t.lineTo(3*i,-i),t.lineTo(3*i,i),t.lineTo(i,i),t.lineTo(i,3*i),t.lineTo(-i,3*i),t.lineTo(-i,i),t.lineTo(-3*i,i),t.closePath()}},Rt=p(1/3),bn=Rt*2,Ot={draw(t,n){const i=p(n/bn),e=i*Rt;t.moveTo(0,-i),t.lineTo(e,0),t.lineTo(0,i),t.lineTo(-e,0),t.closePath()}},Mt={draw(t,n){const i=p(n)*.62625;t.moveTo(0,-i),t.lineTo(i,0),t.lineTo(0,i),t.lineTo(-i,0),t.closePath()}},At={draw(t,n){const i=p(n-Z(n/7,2))*.87559;t.moveTo(-i,0),t.lineTo(i,0),t.moveTo(0,i),t.lineTo(0,-i)}},Xt={draw(t,n){const i=p(n),e=-i/2;t.rect(e,e,i,i)}},Yt={draw(t,n){const i=p(n)*.4431;t.moveTo(i,i),t.lineTo(i,-i),t.lineTo(-i,-i),t.lineTo(-i,i),t.closePath()}},Tn=.8908130915292852,Bt=O($/10)/O(7*$/10),kn=O(B/10)*Bt,wn=-vt(B/10)*Bt,qt={draw(t,n){const i=p(n*Tn),e=kn*i,s=wn*i;t.moveTo(0,-i),t.lineTo(e,s);for(let o=1;o<5;++o){const r=B*o/5,h=vt(r),_=O(r);t.lineTo(_*i,-h*i),t.lineTo(h*e-_*s,_*e+h*s)}t.closePath()}},D=p(3),It={draw(t,n){const i=-p(n/(D*3));t.moveTo(0,i*2),t.lineTo(-D*i,-i),t.lineTo(D*i,-i),t.closePath()}},Cn=p(3),zt={draw(t,n){const i=p(n)*.6824,e=i/2,s=i*Cn/2;t.moveTo(0,-i),t.lineTo(s,e),t.lineTo(-s,e),t.closePath()}},x=-.5,g=p(3)/2,K=1/p(12),Nn=(K/2+1)*3,Vt={draw(t,n){const i=p(n/Nn),e=i/2,s=i*K,o=e,r=i*K+i,h=-o,_=r;t.moveTo(e,s),t.lineTo(o,r),t.lineTo(h,_),t.lineTo(x*e-g*s,g*e+x*s),t.lineTo(x*o-g*r,g*o+x*r),t.lineTo(x*h-g*_,g*h+x*_),t.lineTo(x*e+g*s,x*s-g*e),t.lineTo(x*o+g*r,x*r-g*o),t.lineTo(x*h+g*_,x*_-g*h),t.closePath()}},Q={draw(t,n){const i=p(n-Z(n/6,1.7))*.6189;t.moveTo(-i,-i),t.lineTo(i,i),t.moveTo(-i,i),t.lineTo(i,-i)}},ut=[z,Pt,Ot,Xt,qt,It,Vt],Sn=[z,At,Q,zt,Et,Yt,Mt];function En(t,n){let i=null,e=Y(s);t=typeof t=="function"?t:f(t||z),n=typeof n=="function"?n:f(n===void 0?64:+n);function s(){let o;if(i||(i=o=e()),t.apply(this,arguments).draw(i,+n.apply(this,arguments)),o)return i=null,o+""||null}return s.type=function(o){return arguments.length?(t=typeof o=="function"?o:f(o),s):t},s.size=function(o){return arguments.length?(n=typeof o=="function"?o:f(+o),s):n},s.context=function(o){return arguments.length?(i=o??null,s):i},s}function k(){}function M(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function V(t){this._context=t}V.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:M(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:M(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function Pn(t){return new V(t)}function Lt(t){this._context=t}Lt.prototype={areaStart:k,areaEnd:k,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:M(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function Rn(t){return new Lt(t)}function Wt(t){this._context=t}Wt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var i=(this._x0+4*this._x1+t)/6,e=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(i,e):this._context.moveTo(i,e);break;case 3:this._point=4;default:M(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function On(t){return new Wt(t)}function Ht(t,n){this._basis=new V(t),this._beta=n}Ht.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,i=t.length-1;if(i>0)for(var e=t[0],s=n[0],o=t[i]-e,r=n[i]-s,h=-1,_;++h<=i;)_=h/i,this._basis.point(this._beta*t[h]+(1-this._beta)*(e+_*o),this._beta*n[h]+(1-this._beta)*(s+_*r));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};const Mn=function t(n){function i(e){return n===1?new V(e):new Ht(e,n)}return i.beta=function(e){return t(+e)},i}(.85);function A(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function et(t,n){this._context=t,this._k=(1-n)/6}et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:A(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:A(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const An=function t(n){function i(e){return new et(e,n)}return i.tension=function(e){return t(+e)},i}(0);function st(t,n){this._context=t,this._k=(1-n)/6}st.prototype={areaStart:k,areaEnd:k,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:A(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const Xn=function t(n){function i(e){return new st(e,n)}return i.tension=function(e){return t(+e)},i}(0);function ot(t,n){this._context=t,this._k=(1-n)/6}ot.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:A(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const Yn=function t(n){function i(e){return new ot(e,n)}return i.tension=function(e){return t(+e)},i}(0);function rt(t,n,i){var e=t._x1,s=t._y1,o=t._x2,r=t._y2;if(t._l01_a>ht){var h=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,_=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*h-t._x0*t._l12_2a+t._x2*t._l01_2a)/_,s=(s*h-t._y0*t._l12_2a+t._y2*t._l01_2a)/_}if(t._l23_a>ht){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,u=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*l+t._x1*t._l23_2a-n*t._l12_2a)/u,r=(r*l+t._y1*t._l23_2a-i*t._l12_2a)/u}t._context.bezierCurveTo(e,s,o,r,t._x2,t._y2)}function Dt(t,n){this._context=t,this._alpha=n}Dt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:rt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const Bn=function t(n){function i(e){return n?new Dt(e,n):new et(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function Gt(t,n){this._context=t,this._alpha=n}Gt.prototype={areaStart:k,areaEnd:k,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:rt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const qn=function t(n){function i(e){return n?new Gt(e,n):new st(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function Ft(t,n){this._context=t,this._alpha=n}Ft.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:rt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const In=function t(n){function i(e){return n?new Ft(e,n):new ot(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function Ut(t){this._context=t}Ut.prototype={areaStart:k,areaEnd:k,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};function zn(t){return new Ut(t)}function ft(t){return t<0?-1:1}function pt(t,n,i){var e=t._x1-t._x0,s=n-t._x1,o=(t._y1-t._y0)/(e||s<0&&-0),r=(i-t._y1)/(s||e<0&&-0),h=(o*s+r*e)/(e+s);return(ft(o)+ft(r))*Math.min(Math.abs(o),Math.abs(r),.5*Math.abs(h))||0}function dt(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function G(t,n,i){var e=t._x0,s=t._y0,o=t._x1,r=t._y1,h=(o-e)/3;t._context.bezierCurveTo(e+h,s+h*n,o-h,r-h*i,o,r)}function X(t){this._context=t}X.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:G(this,this._t0,dt(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(t=+t,n=+n,!(t===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,G(this,dt(this,i=pt(this,t,n)),i);break;default:G(this,this._t0,i=pt(this,t,n));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}};function $t(t){this._context=new Jt(t)}($t.prototype=Object.create(X.prototype)).point=function(t,n){X.prototype.point.call(this,n,t)};function Jt(t){this._context=t}Jt.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,s,o){this._context.bezierCurveTo(n,t,e,i,o,s)}};function Vn(t){return new X(t)}function Ln(t){return new $t(t)}function Kt(t){this._context=t}Kt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),i===2)this._context.lineTo(t[1],n[1]);else for(var e=mt(t),s=mt(n),o=0,r=1;r<i;++o,++r)this._context.bezierCurveTo(e[0][o],s[0][o],e[1][o],s[1][o],t[r],n[r]);(this._line||this._line!==0&&i===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};function mt(t){var n,i=t.length-1,e,s=new Array(i),o=new Array(i),r=new Array(i);for(s[0]=0,o[0]=2,r[0]=t[0]+2*t[1],n=1;n<i-1;++n)s[n]=1,o[n]=4,r[n]=4*t[n]+2*t[n+1];for(s[i-1]=2,o[i-1]=7,r[i-1]=8*t[i-1]+t[i],n=1;n<i;++n)e=s[n]/o[n-1],o[n]-=e,r[n]-=e*r[n-1];for(s[i-1]=r[i-1]/o[i-1],n=i-2;n>=0;--n)s[n]=(r[n]-s[n+1])/o[n];for(o[i-1]=(t[i]+s[i-1])/2,n=0;n<i-1;++n)o[n]=2*t[n+1]-s[n+1];return[s,o]}function Wn(t){return new Kt(t)}function L(t,n){this._context=t,this._t=n}L.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,n)}break}}this._x=t,this._y=n}};function Hn(t){return new L(t,.5)}function Dn(t){return new L(t,0)}function Gn(t){return new L(t,1)}function w(t,n){if((r=t.length)>1)for(var i=1,e,s,o=t[n[0]],r,h=o.length;i<r;++i)for(s=o,o=t[n[i]],e=0;e<h;++e)o[e][1]+=o[e][0]=isNaN(s[e][1])?s[e][0]:s[e][1]}function C(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n;return i}function Fn(t,n){return t[n]}function Un(t){const n=[];return n.key=t,n}function $n(){var t=f([]),n=C,i=w,e=Fn;function s(o){var r=Array.from(t.apply(this,arguments),Un),h,_=r.length,l=-1,u;for(const a of o)for(h=0,++l;h<_;++h)(r[h][l]=[0,+e(a,r[h].key,l,o)]).data=a;for(h=0,u=j(n(r));h<_;++h)r[u[h]].index=h;return i(r,u),r}return s.keys=function(o){return arguments.length?(t=typeof o=="function"?o:f(Array.from(o)),s):t},s.value=function(o){return arguments.length?(e=typeof o=="function"?o:f(+o),s):e},s.order=function(o){return arguments.length?(n=o==null?C:typeof o=="function"?o:f(Array.from(o)),s):n},s.offset=function(o){return arguments.length?(i=o??w,s):i},s}function Jn(t,n){if((e=t.length)>0){for(var i,e,s=0,o=t[0].length,r;s<o;++s){for(r=i=0;i<e;++i)r+=t[i][s][1]||0;if(r)for(i=0;i<e;++i)t[i][s][1]/=r}w(t,n)}}function Kn(t,n){if((_=t.length)>0)for(var i,e=0,s,o,r,h,_,l=t[n[0]].length;e<l;++e)for(r=h=0,i=0;i<_;++i)(o=(s=t[n[i]][e])[1]-s[0])>0?(s[0]=r,s[1]=r+=o):o<0?(s[1]=h,s[0]=h+=o):(s[0]=0,s[1]=o)}function Qn(t,n){if((s=t.length)>0){for(var i=0,e=t[n[0]],s,o=e.length;i<o;++i){for(var r=0,h=0;r<s;++r)h+=t[r][i][1]||0;e[i][1]+=e[i][0]=-h/2}w(t,n)}}function Zn(t,n){if(!(!((r=t.length)>0)||!((o=(s=t[n[0]]).length)>0))){for(var i=0,e=1,s,o,r;e<o;++e){for(var h=0,_=0,l=0;h<r;++h){for(var u=t[n[h]],a=u[e][1]||0,c=u[e-1][1]||0,y=(a-c)/2,d=0;d<h;++d){var T=t[n[d]],v=T[e][1]||0,b=T[e-1][1]||0;y+=v-b}_+=a,l+=y*a}s[e-1][1]+=s[e-1][0]=i,_&&(i-=l/_)}s[e-1][1]+=s[e-1][0]=i,w(t,n)}}function Qt(t){var n=t.map(jn);return C(t).sort(function(i,e){return n[i]-n[e]})}function jn(t){for(var n=-1,i=0,e=t.length,s,o=-1/0;++n<e;)(s=+t[n][1])>o&&(o=s,i=n);return i}function Zt(t){var n=t.map(jt);return C(t).sort(function(i,e){return n[i]-n[e]})}function jt(t){for(var n=0,i=-1,e=t.length,s;++i<e;)(s=+t[i][1])&&(n+=s);return n}function ti(t){return Zt(t).reverse()}function ni(t){var n=t.length,i,e,s=t.map(jt),o=Qt(t),r=0,h=0,_=[],l=[];for(i=0;i<n;++i)e=o[i],r<h?(r+=s[e],_.push(e)):(h+=s[e],l.push(e));return l.reverse().concat(_)}function ii(t){return C(t).reverse()}const ei=Object.freeze(Object.defineProperty({__proto__:null,arc:sn,area:Tt,areaRadial:ct,curveBasis:Pn,curveBasisClosed:Rn,curveBasisOpen:On,curveBumpX:Nt,curveBumpY:St,curveBundle:Mn,curveCardinal:An,curveCardinalClosed:Xn,curveCardinalOpen:Yn,curveCatmullRom:Bn,curveCatmullRomClosed:qn,curveCatmullRomOpen:In,curveLinear:P,curveLinearClosed:zn,curveMonotoneX:Vn,curveMonotoneY:Ln,curveNatural:Wn,curveStep:Hn,curveStepAfter:Gn,curveStepBefore:Dn,line:q,lineRadial:J,link:I,linkHorizontal:yn,linkRadial:gn,linkVertical:xn,pie:rn,pointRadial:E,radialArea:ct,radialLine:J,stack:$n,stackOffsetDiverging:Kn,stackOffsetExpand:Jn,stackOffsetNone:w,stackOffsetSilhouette:Qn,stackOffsetWiggle:Zn,stackOrderAppearance:Qt,stackOrderAscending:Zt,stackOrderDescending:ti,stackOrderInsideOut:ni,stackOrderNone:C,stackOrderReverse:ii,symbol:En,symbolAsterisk:Et,symbolCircle:z,symbolCross:Pt,symbolDiamond:Ot,symbolDiamond2:Mt,symbolPlus:At,symbolSquare:Xt,symbolSquare2:Yt,symbolStar:qt,symbolTimes:Q,symbolTriangle:It,symbolTriangle2:zt,symbolWye:Vt,symbolX:Q,symbols:ut,symbolsFill:ut,symbolsStroke:Sn},Symbol.toStringTag,{value:"Module"})),yt=t=>{const n=t._y1!==void 0?t._y1:t._y;return n!=null&&t._y0!==null},xt=t=>n=>t.x(n._x1!==void 0?n._x1:n._x),F=t=>n=>t.y(n._y1!==void 0?n._y1:n._y),si=t=>n=>-1*t.x(n._x1!==void 0?n._x1:n._x)+Math.PI/2,tn=t=>`curve${(i=>i&&i[0].toUpperCase()+i.slice(1))(t)}`,oi=t=>`${tn(t)}Closed`,gt=t=>{const{interpolation:n}=t;if(typeof n=="function")return n;if(typeof n=="string"){const{polar:i,openCurve:e=!i}=t,s=e?tn(n):oi(n);return ei[s]}return P},pi=t=>{const{polar:n,scale:i,horizontal:e}=t;return n?J().defined(yt).curve(gt(t)).angle(si(i)).radius(F(i)):q().defined(yt).curve(gt(t)).x(e?F(i):xt(i)).y(e?xt(i):F(i))},ri=t=>{var n;return m.createElement("defs",null,m.createElement("clipPath",{id:(n=t.clipId)==null?void 0:n.toString()},t.children))};class U extends m.Component{constructor(n){super(n),this.clipId=!cn(n)||n.clipId===void 0?_n("victory-clip-"):n.clipId}calculateAttributes(n){const{polar:i,origin:e,clipWidth:s=0,clipHeight:o=0,translateX:r=0,translateY:h=0}=n,_=_t({padding:n.clipPadding}),l=n.radius||lt(n);return{x:(i?e.x:r)-_.left,y:(i?e.y:h)-_.top,width:Math.max((i?l:s)+_.left+_.right,0),height:Math.max((i?l:o)+_.top+_.bottom,0)}}renderClippedGroup(n,i){const e=ln(n),{style:s,events:o,transform:r,children:h,className:_,groupComponent:l,tabIndex:u}=n,a=this.renderClipComponent(n,i),c=Object.assign({className:_,style:s,transform:r,key:`clipped-group-${i}`,clipPath:`url(#${i})`},o);return m.cloneElement(l,{...c,tabIndex:u,...e},[a,...m.Children.toArray(h)])}renderGroup(n){const{style:i,events:e,transform:s,children:o,className:r,groupComponent:h,tabIndex:_}=n;return m.cloneElement(h,Object.assign({className:r,style:i,transform:s,"aria-label":n["aria-label"],tabIndex:_},e),o)}renderClipComponent(n,i){const{polar:e,origin:s,clipWidth:o=0,clipHeight:r=0,translateX:h=0,translateY:_=0,circleComponent:l,rectComponent:u,clipPathComponent:a}=n,{top:c,bottom:y,left:d,right:T}=_t({padding:n.clipPadding});let v;if(e){const b=n.radius||lt(n),N={r:Math.max(b+d+T,b+c+y,0),cx:s.x-d,cy:s.y-c};v=m.cloneElement(l,N)}else{const b={x:h-d,y:_-c,width:Math.max(o+d+T,0),height:Math.max(r+c+y,0)};v=m.cloneElement(u,b)}return m.cloneElement(a,Object.assign({key:`clip-path-${i}`},n,{clipId:i}),v)}getClipValue(n,i){const e={x:n.clipWidth,y:n.clipHeight};if(e[i]!==void 0)return e[i];const s=at(n,i);return s&&Math.abs(s[0]-s[1])||void 0}getTranslateValue(n,i){const e={x:n.translateX,y:n.translateY};if(e[i]!==void 0)return e[i];const s=at(n,i);return s?Math.min(...s):void 0}render(){const n=this.getClipValue(this.props,"y"),i=this.getClipValue(this.props,"x");if(i===void 0||n===void 0)return this.renderGroup(this.props);const e=this.getTranslateValue(this.props,"x"),s=this.getTranslateValue(this.props,"y"),o=an({},this.props,{clipHeight:n,clipWidth:i,translateX:e,translateY:s});return this.renderClippedGroup(o,this.clipId)}}R(U,"displayName","VictoryClipContainer"),R(U,"role","container"),R(U,"defaultProps",{circleComponent:m.createElement(un,null),rectComponent:m.createElement(hn,null),clipPathComponent:m.createElement(ri,null),groupComponent:m.createElement("g",null)});export{U as V,gt as a,ct as b,Tt as c,pi as g};
