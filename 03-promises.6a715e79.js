!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("h6c0i"),u={form:document.querySelector(".form"),firstDelayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')};u.submitBtn.addEventListener("click",(function(e){e.preventDefault(),r=Number(u.amountInput.value),a=Number(u.firstDelayInput.value),c=Number(u.stepInput.value);for(var t=1;t<=r;t+=1)l(t,a).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),{clickToClose:!0})})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),{clickToClose:!0})})),a+=c}));var r=0,c=0,a=0;function l(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}}();
//# sourceMappingURL=03-promises.6a715e79.js.map