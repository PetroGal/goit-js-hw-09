import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"./assets/vendor-10cb7c31.js";let t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const r={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector(".form-input"),textAreaEl:document.querySelector(".form-textarea")};o();function a(e){e.preventDefault(),t[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}function l(e){e.preventDefault(),r.inputEl.value.length===0&&r.textAreaEl.value.length===0?alert("Please fill all the fields"):console.log(t),e.currentTarget.reset("feedback-form-state"),localStorage.removeItem("feedback-form-state"),t={}}function o(){r.inputEl.value=t.email||"",r.textAreaEl.value=t.message||""}r.formEl.addEventListener("submit",l);r.formEl.addEventListener("input",a);
//# sourceMappingURL=commonHelpers2.js.map