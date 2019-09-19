!function(e){var o={};function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)t.d(n,a,function(o){return e[o]}.bind(null,a));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=2)}([function(e,o,t){e.exports.BVFormGenerator=new class{constructor(){}newForm(e){let o=e.FormName;const t=window.document.getElementsByTagName("body")[0],n=window.document.createElement("form");n.name=o;let a=e.Insert,r=window.document.getElementById(a),l=""===a||null==r,m=e.FormConponents;void 0===e.FormAction?n.setAttribute("id",o):n.action=e.FormAction,m.forEach((e,o,t)=>{const a=window.document.createElement("div"),r=window.document.createElement("label");switch(a.setAttribute("class","form-component"),a.dataset.component=`component-${o}`,e.FormConponent){case"input":!function(e){const o=window.document.createElement("input");let t=""===e.id,l=""===e.class,m=t&&l,p=l;o.setAttribute("class","BV-input"),o.name=e.FormComponentName,o.setAttribute("type",e.type),o.setAttribute("placeholder",e.placeholder),m||o.setAttribute("id",e.id),p||o.setAttribute("class",e.class),o.setAttribute("value",e.value),r.innerHTML=e.FormLabel+" ",a.appendChild(r),a.appendChild(o),n.appendChild(a)}(e);break;case"textarea":!function(e){const o=window.document.createElement("textarea");o.name=e.FormComponentName,o.setAttribute("rows",e.rows),o.setAttribute("cols",e.cols),o.setAttribute("value",e.value),o.setAttribute("maxlength",e.maxlength),o.setAttribute("class",e.class),o.setAttribute("id",e.id),r.innerHTML=e.FormLabel+" ",o.setAttribute("placeholder",e.placeholder),a.appendChild(r),a.appendChild(o),n.appendChild(a)}(e);break;case"select":!function(o){const t=window.document.createElement("select");o.options.forEach((e,o,n)=>{const a=window.document.createElement("option");a.text=e,t.add(a)}),t.name=e.FormComponentName,t.setAttribute("id",o.id),t.setAttribute("class",o.class),t.setAttribute("value",o.value),r.innerHTML=o.FormLabel+" ",a.appendChild(r),a.appendChild(t),n.appendChild(a)}(e)}}),l?t.appendChild(n):r.appendChild(n)}}},function(e,o){e.exports={FormName:"BVForgotPassword",FormAction:"some-action",Insert:"BV-form",payload:{},FormConponents:[{FormComponentName:"BVUserName",FormConponent:"input",FormLabel:"Input:",id:"BV-input",class:"BV-input",placeholder:"sample placeholder",value:"",type:"text"},{FormComponentName:"BVCheckBox",FormConponent:"input",FormLabel:"Check Box:",id:"BV-checkbox",class:"BV-checkbox",placeholder:"",value:"sampleCheckbox",type:"checkbox"},{FormComponentName:"BVRadio",FormConponent:"input",FormLabel:"Radio:",id:"BV-radio",class:"BV-checkbox",placeholder:"",value:"sampleRadio",type:"radio"},{FormComponentName:"BVColor",FormConponent:"input",FormLabel:"Color:",id:"BV-color",class:"BV-color",placeholder:"",value:"#353535",type:"color"},{FormComponentName:"BVDate",FormConponent:"input",FormLabel:"Date:",id:"BV-date",class:"BV-date",placeholder:"",value:"",type:"date"},{FormComponentName:"BVDateTimeLocal",FormConponent:"input",FormLabel:"Date Time Local:",id:"BV-datetime-local",class:"BV-datetime-local",placeholder:"",value:"",type:"datetime-local"},{FormComponentName:"BVEmail",FormConponent:"input",FormLabel:"Email:",id:"BV-email",class:"BV-email",placeholder:"",value:"",type:"email"},{FormComponentName:"BVFile",FormConponent:"input",FormLabel:"File:",id:"BV-file",class:"BV-file",placeholder:"",value:"",type:"file"},{FormComponentName:"BVHidden",FormConponent:"input",FormLabel:"Hidden:",id:"BV-hidden",class:"BV-hidden",placeholder:"",value:"",type:"hidden"},{FormComponentName:"BVImage",FormConponent:"input",FormLabel:"Image:",id:"BV-image",class:"BV-image",placeholder:"",value:"",type:"image"},{FormComponentName:"BVMonth",FormConponent:"input",FormLabel:"Month:",id:"BV-month",class:"BV-month",placeholder:"",value:"",type:"month"},{FormComponentName:"BVNumber",FormConponent:"input",FormLabel:"Number:",id:"BV-number",class:"BV-number",placeholder:"",value:"",type:"number"},{FormComponentName:"BVPassword",FormConponent:"input",FormLabel:"Password:",id:"BV-password",class:"BV-password",placeholder:"",value:"",type:"password"},{FormComponentName:"BVRange",FormConponent:"input",FormLabel:"Range",id:"BV-range",class:"BV-range",placeholder:"",value:"",type:"range"},{FormComponentName:"BVSearch",FormConponent:"input",FormLabel:"Search",id:"BV-search",class:"BV-search",placeholder:"",value:"",type:"search"},{FormComponentName:"BVTel",FormConponent:"input",FormLabel:"Tel",id:"BV-tel",class:"BV-tel",placeholder:"",value:"",type:"tel"},{FormComponentName:"BVTime",FormConponent:"input",FormLabel:"Time",id:"BV-time",class:"BV-time",placeholder:"",value:"",type:"time"},{FormComponentName:"BVUrl",FormConponent:"input",FormLabel:"URL",id:"BV-url",class:"BV-url",placeholder:"",value:"",type:"url"},{FormComponentName:"BVWeek",FormConponent:"input",FormLabel:"Week",id:"BV-week",class:"BV-week",placeholder:"",value:"",type:"week"},{FormComponentName:"BVSelect",FormConponent:"select",FormLabel:"Select",id:"BV-select",class:"BV-select",value:"",options:["Opt1","Opt2","Opt3"]},{FormComponentName:"BVTextarea",FormConponent:"textarea",FormLabel:"Textarea",id:"BV-textarea",placeholder:"Textarea",class:"BV-textarea",value:"",rows:"10",cols:"50",maxlength:"100"},{FormComponentName:"BVButton",FormConponent:"input",FormLabel:"Button",id:"BV-button",class:"BV-button",placeholder:"Please enter email here...",value:"Button",type:"button"},{FormComponentName:"BVReset",FormConponent:"input",FormLabel:"Reset",id:"BV-reset",class:"BV-reset",placeholder:"",value:"Reset",type:"reset"},{FormComponentName:"BVSubmit",FormConponent:"input",FormLabel:"Submit",id:"BV-submit",class:"BV-submit",placeholder:"",value:"Submit",type:"submit"}]}},function(e,o,t){"use strict";t.r(o);var n=t(0),a=t.n(n),r=t(1),l=t.n(r);a.a.BVFormGenerator.newForm(l.a)}]);