"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=t(function(I,a){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),n=require('@stdlib/math-base-assert-is-infinitef/dist'),f=require('@stdlib/math-base-special-exp/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),s=require('@stdlib/constants-float32-pinf/dist'),q=require('@stdlib/constants-float32-max-ln/dist'),c=i(0),o=i(1),O=i(2);function p(r){var e;return v(r)?r:(r<c&&(r=-r),n(r)||r>q?s:(e=i(f(i(r))),e=i(e+o/e),i(e/O)))}a.exports=p
});var E=u();module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
