!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()}(this,function(){"use strict";var e,t={};e=t,"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});const d="error";return document.addEventListener("DOMContentLoaded",e=>{{const o=document.body,n=o.querySelector("[data-menu]"),r=o.querySelectorAll("[data-menu-toggle]");n&&r.length&&r.forEach(e=>{e.addEventListener("click",()=>{o.classList.toggle("no-scroll"),n.classList.toggle("active")})})}var t;(t=document.body.querySelectorAll("[data-input-required]")).length&&t.forEach(t=>{var e,o=t.querySelector(".input__main");o&&(o.addEventListener("input",e=e=>{e.target.value.trim()?t.classList.remove(d):t.classList.add(d)}),o.addEventListener("focusout",e))})}),t});