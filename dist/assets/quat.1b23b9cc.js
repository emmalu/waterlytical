import{fp as z,fq as V,eZ as Y,fr as v,fs as D,ft as F,fu as L,fv as Z,fw as B,fx as N,fy as S,fz as W,eS as X,eT as I,fA as k,eO as C,a3 as G,A as P,fB as d}from"./index.ab15bc04.js";function b(){return[1,0,0,0,1,0,0,0,1]}function H(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]}function J(n,r,t,o,e,a,c,u,i){return[n,r,t,o,e,a,c,u,i]}function K(n,r){return new Float64Array(n,r,9)}Object.freeze({__proto__:null,create:b,clone:H,fromValues:J,createView:K});function A(){return[0,0,0,1]}function Q(n){return[n[0],n[1],n[2],n[3]]}function R(n,r,t,o){return[n,r,t,o]}function U(n,r){return new Float64Array(n,r,4)}const nn=A();Object.freeze({__proto__:null,create:A,clone:Q,fromValues:R,createView:U,IDENTITY:nn});function rn(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function j(n,r,t){t*=.5;const o=Math.sin(t);return n[0]=o*r[0],n[1]=o*r[1],n[2]=o*r[2],n[3]=Math.cos(t),n}function on(n,r){const t=2*Math.acos(r[3]),o=Math.sin(t/2);return o>z?(n[0]=r[0]/o,n[1]=r[1]/o,n[2]=r[2]/o):(n[0]=1,n[1]=0,n[2]=0),t}function w(n,r,t){const o=r[0],e=r[1],a=r[2],c=r[3],u=t[0],i=t[1],f=t[2],h=t[3];return n[0]=o*h+c*u+e*f-a*i,n[1]=e*h+c*i+a*u-o*f,n[2]=a*h+c*f+o*i-e*u,n[3]=c*h-o*u-e*i-a*f,n}function en(n,r,t){t*=.5;const o=r[0],e=r[1],a=r[2],c=r[3],u=Math.sin(t),i=Math.cos(t);return n[0]=o*i+c*u,n[1]=e*i+a*u,n[2]=a*i-e*u,n[3]=c*i-o*u,n}function tn(n,r,t){t*=.5;const o=r[0],e=r[1],a=r[2],c=r[3],u=Math.sin(t),i=Math.cos(t);return n[0]=o*i-a*u,n[1]=e*i+c*u,n[2]=a*i+o*u,n[3]=c*i-e*u,n}function an(n,r,t){t*=.5;const o=r[0],e=r[1],a=r[2],c=r[3],u=Math.sin(t),i=Math.cos(t);return n[0]=o*i+e*u,n[1]=e*i-o*u,n[2]=a*i+c*u,n[3]=c*i-a*u,n}function cn(n,r){const t=r[0],o=r[1],e=r[2];return n[0]=t,n[1]=o,n[2]=e,n[3]=Math.sqrt(Math.abs(1-t*t-o*o-e*e)),n}function m(n,r,t,o){const e=r[0],a=r[1],c=r[2],u=r[3];let i,f,h,M,l,$=t[0],_=t[1],q=t[2],p=t[3];return f=e*$+a*_+c*q+u*p,f<0&&(f=-f,$=-$,_=-_,q=-q,p=-p),1-f>z?(i=Math.acos(f),h=Math.sin(i),M=Math.sin((1-o)*i)/h,l=Math.sin(o*i)/h):(M=1-o,l=o),n[0]=M*e+l*$,n[1]=M*a+l*_,n[2]=M*c+l*q,n[3]=M*u+l*p,n}function un(n){const r=d(),t=d(),o=d(),e=Math.sqrt(1-r),a=Math.sqrt(r);return n[0]=e*Math.sin(2*Math.PI*t),n[1]=e*Math.cos(2*Math.PI*t),n[2]=a*Math.sin(2*Math.PI*o),n[3]=a*Math.cos(2*Math.PI*o),n}function fn(n,r){const t=r[0],o=r[1],e=r[2],a=r[3],c=t*t+o*o+e*e+a*a,u=c?1/c:0;return n[0]=-t*u,n[1]=-o*u,n[2]=-e*u,n[3]=a*u,n}function hn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=r[3],n}function E(n,r){const t=r[0]+r[4]+r[8];let o;if(t>0)o=Math.sqrt(t+1),n[3]=.5*o,o=.5/o,n[0]=(r[5]-r[7])*o,n[1]=(r[6]-r[2])*o,n[2]=(r[1]-r[3])*o;else{let e=0;r[4]>r[0]&&(e=1),r[8]>r[3*e+e]&&(e=2);const a=(e+1)%3,c=(e+2)%3;o=Math.sqrt(r[3*e+e]-r[3*a+a]-r[3*c+c]+1),n[e]=.5*o,o=.5/o,n[3]=(r[3*a+c]-r[3*c+a])*o,n[a]=(r[3*a+e]+r[3*e+a])*o,n[c]=(r[3*c+e]+r[3*e+c])*o}return n}function sn(n,r,t,o){const e=.5*Math.PI/180;r*=e,t*=e,o*=e;const a=Math.sin(r),c=Math.cos(r),u=Math.sin(t),i=Math.cos(t),f=Math.sin(o),h=Math.cos(o);return n[0]=a*i*h-c*u*f,n[1]=c*u*h+a*i*f,n[2]=c*i*f-a*u*h,n[3]=c*i*h+a*u*f,n}function Mn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const ln=V,$n=Y,_n=v,qn=w,pn=D,mn=F,An=L,O=Z,In=O,T=B,dn=T,g=N,gn=S,xn=W;function yn(n,r,t){const o=X(r,t);return o<-.999999?(I(s,zn,r),k(s)<1e-6&&I(s,Pn,r),C(s,s),j(n,s,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(I(s,r,t),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+o,g(n,n))}const s=G(),zn=P(1,0,0),Pn=P(0,1,0);function bn(n,r,t,o,e,a){return m(x,r,e,a),m(y,t,o,a),m(n,x,y,2*a*(1-a)),n}const x=A(),y=A();function jn(n,r,t,o){const e=wn;return e[0]=t[0],e[3]=t[1],e[6]=t[2],e[1]=o[0],e[4]=o[1],e[7]=o[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],g(n,E(n,e))}const wn=b();Object.freeze({__proto__:null,identity:rn,setAxisAngle:j,getAxisAngle:on,multiply:w,rotateX:en,rotateY:tn,rotateZ:an,calculateW:cn,slerp:m,random:un,invert:fn,conjugate:hn,fromMat3:E,fromEuler:sn,str:Mn,copy:ln,set:$n,add:_n,mul:qn,scale:pn,dot:mn,lerp:An,length:O,len:In,squaredLength:T,sqrLen:dn,normalize:g,exactEquals:gn,equals:xn,rotationTo:yn,sqlerp:bn,setAxes:jn});export{sn as C,j as I,gn as N,on as P,b as a,U as b,nn as c,A as e,Q as n,K as t,w as v,hn as w};