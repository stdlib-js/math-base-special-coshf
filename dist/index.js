"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=v(function(N,a){
var n=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-assert-is-infinitef/dist'),s=require('@stdlib/math-base-special-exp/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/constants-float32-pinf/dist'),c=require('@stdlib/constants-float32-max-ln/dist'),o=i(0),O=i(1),p=i(2);function E(e){var r;return n(e)?e:(e<o&&(e=-e),f(e)||e>c?q:(r=i(s(i(e))),r=i(r+O/r),i(r/p)))}a.exports=E
});var F=u();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
