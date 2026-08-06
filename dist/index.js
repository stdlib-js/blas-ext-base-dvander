"use strict";var d=function(w,v){return function(){try{return v||w((v={exports:{}}).exports,v),v.exports}catch(n){throw (v=0, n)}};};var R=d(function(M,x){
var L=require('@stdlib/ndarray-base-assert-is-row-major/dist'),y=require('@stdlib/blas-ext-base-dfill/dist').ndarray;function z(w,v,n,u,h,s,a,g,i,o){var m,b,e,c,r,q,l,f;if(L([g,i])){if(e=n,c=v,m=i,b=g-e*i,w>0){for(r=o,q=s,f=0;f<c;f++){for(a[r]=1,r+=m,l=1;l<e;l++)a[r]=a[r-m]*u[q],r+=m;q+=h,r+=b}return a}for(r=o+(c-1)*g+(e-1)*i,q=s+(c-1)*h,f=c-1;f>=0;f--){for(a[r]=1,r-=m,l=1;l<e;l++)a[r]=a[r+m]*u[q],r-=m;q-=h,r-=b}return a}if(e=v,c=n,m=g,b=i-e*g,w>0){for(y(e,1,a,g,o),r=o+i,f=1;f<c;f++){for(q=s,l=0;l<e;l++)a[r]=a[r-i]*u[q],q+=h,r+=m;r+=b}return a}for(y(e,1,a,g,o+(c-1)*i),r=o+(c-2)*i+(e-1)*g,f=c-2;f>=0;f--){for(q=s+(e-1)*h,l=e-1;l>=0;l--)a[r]=a[r+i]*u[q],q-=h,r-=m;r-=b}return a}x.exports=z
});var j=d(function(N,V){
var A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/blas-base-assert-is-layout/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),H=R();function I(w,v,n,u,h,s,a,g){var i,o,m,b,e;if(!B(w))throw new TypeError(E('2fPFx',w));if(n<0)throw new RangeError(E('2fPFz',n));if(u<0)throw new RangeError(E('2fPGH',u));if(i=A(w),i?e=n:e=u,g<G(1,e))throw new RangeError(E('2fPGM',e,g));return n===0||u===0?a:(b=D(n,s),i?(o=1,m=g):(o=g,m=1),H(v,n,u,h,s,b,a,o,m,0))}V.exports=I
});var T=d(function(X,S){
var t=require('@stdlib/error-tools-fmtprodmsg/dist'),J=R();function K(w,v,n,u,h,s,a,g,i,o){if(v<0)throw new RangeError(t('2fPGE',v));if(n<0)throw new RangeError(t('2fPFz',n));return v===0||n===0?a:J(w,v,n,u,h,s,a,g,i,o)}S.exports=K
});var k=d(function(O,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=j(),Q=T();P(F,"ndarray",Q);_.exports=F
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=k(),p,C=W(U(__dirname,"./native.js"));Y(C)?p=Z:p=C;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
