"use strict";var d=function(w,v){return function(){return v||w((v={exports:{}}).exports,v),v.exports}};var R=d(function(M,x){
var L=require('@stdlib/ndarray-base-assert-is-row-major/dist'),y=require('@stdlib/blas-ext-base-dfill/dist').ndarray;function z(w,v,g,u,h,s,a,i,n,o){var m,b,e,c,r,q,l,f;if(L([i,n])){if(e=g,c=v,m=n,b=i-e*n,w>0){for(r=o,q=s,f=0;f<c;f++){for(a[r]=1,r+=m,l=1;l<e;l++)a[r]=a[r-m]*u[q],r+=m;q+=h,r+=b}return a}for(r=o+(c-1)*i+(e-1)*n,q=s+(c-1)*h,f=c-1;f>=0;f--){for(a[r]=1,r-=m,l=1;l<e;l++)a[r]=a[r+m]*u[q],r-=m;q-=h,r-=b}return a}if(e=v,c=g,m=i,b=n-e*i,w>0){for(y(e,1,a,i,o),r=o+n,f=1;f<c;f++){for(q=s,l=0;l<e;l++)a[r]=a[r-n]*u[q],q+=h,r+=m;r+=b}return a}for(y(e,1,a,i,o+(c-1)*n),r=o+(c-2)*n+(e-1)*i,f=c-2;f>=0;f--){for(q=s+(e-1)*h,l=e-1;l>=0;l--)a[r]=a[r+n]*u[q],q-=h,r-=m;r-=b}return a}x.exports=z
});var j=d(function(N,V){
var A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/blas-base-assert-is-layout/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),H=R();function I(w,v,g,u,h,s,a,i){var n,o,m,b,e;if(!B(w))throw new TypeError(E('nullFx',w));if(g<0)throw new RangeError(E('nullFz',g));if(u<0)throw new RangeError(E('nullGH',u));if(n=A(w),n?e=g:e=u,i<G(1,e))throw new RangeError(E('nullGM',e,i));return g===0||u===0?a:(b=D(g,s),n?(o=1,m=i):(o=i,m=1),H(v,g,u,h,s,b,a,o,m,0))}V.exports=I
});var T=d(function(X,S){
var t=require('@stdlib/error-tools-fmtprodmsg/dist'),J=R();function K(w,v,g,u,h,s,a,i,n,o){if(v<0)throw new RangeError(t('nullGE',v));if(g<0)throw new RangeError(t('nullFz',g));return v===0||g===0?a:J(w,v,g,u,h,s,a,i,n,o)}S.exports=K
});var k=d(function(O,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=j(),Q=T();P(F,"ndarray",Q);_.exports=F
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=k(),p,C=W(U(__dirname,"./native.js"));Y(C)?p=Z:p=C;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
