"use strict";var b=function(c,v){return function(){try{return v||c((v={exports:{}}).exports,v),v.exports}catch(n){throw (v=0, n)}};};var R=b(function(M,x){
var L=require('@stdlib/ndarray-base-assert-is-row-major/dist'),y=require('@stdlib/blas-ext-base-dfill/dist').ndarray;function z(c,v,n,o,h,d,a,g,i,l){var m,s,e,u,r,q,f,w;if(L([g,i])){if(e=n,u=v,m=i,s=g-e*i,c>0){for(r=l,q=d,w=0;w<u;w++){for(a[r]=1,r+=m,f=1;f<e;f++)a[r]=a[r-m]*o[q],r+=m;q+=h,r+=s}return a}for(r=l+(u-1)*g+(e-1)*i,q=d+(u-1)*h,w=u-1;w>=0;w--){for(a[r]=1,r-=m,f=1;f<e;f++)a[r]=a[r+m]*o[q],r-=m;q-=h,r-=s}return a}if(e=v,u=n,m=g,s=i-e*g,c>0){for(y(e,1,a,g,l),r=l+i,w=1;w<u;w++){for(q=d,f=0;f<e;f++)a[r]=a[r-i]*o[q],q+=h,r+=m;r+=s}return a}for(y(e,1,a,g,l+(u-1)*i),r=l+(u-2)*i+(e-1)*g,w=u-2;w>=0;w--){for(q=d+(e-1)*h,f=e-1;f>=0;f--)a[r]=a[r+i]*o[q],q-=h,r-=m;r-=s}return a}x.exports=z
});var j=b(function(N,V){
var A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/blas-base-layout-resolve-str/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),H=R();function I(c,v,n,o,h,d,a,g){var i,l,m,s,e,u;if(u=B(c),u===null)throw new TypeError(E('2fPFx',c));if(n<0)throw new RangeError(E('2fPFz',n));if(o<0)throw new RangeError(E('2fPGH',o));if(i=A(u),i?e=n:e=o,g<G(1,e))throw new RangeError(E('2fPGM',e,g));return n===0||o===0?a:(s=D(n,d),i?(l=1,m=g):(l=g,m=1),H(v,n,o,h,d,s,a,l,m,0))}V.exports=I
});var T=b(function(X,S){
var t=require('@stdlib/error-tools-fmtprodmsg/dist'),J=R();function K(c,v,n,o,h,d,a,g,i,l){if(v<0)throw new RangeError(t('2fPGE',v));if(n<0)throw new RangeError(t('2fPFz',n));return v===0||n===0?a:J(c,v,n,o,h,d,a,g,i,l)}S.exports=K
});var k=b(function(O,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=j(),Q=T();P(F,"ndarray",Q);_.exports=F
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=k(),p,C=W(U(__dirname,"./native.js"));Y(C)?p=Z:p=C;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
