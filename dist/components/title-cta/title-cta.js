import{_ as t,a as e,c as a,b as o,d as n}from"../../_rollupPluginBabelHelpers-aa656846.js";import{t as r}from"../../template-4a0ab82b.js";customElements.define("title-cta",function(n){t(l,n);var i=e(l);function l(){var t;return a(this,l),(t=i.call(this)).showInfo=!0,t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(r.content.cloneNode(!0)),t}return o(l,[{key:"attributeChangedCallback",value:function(){}},{key:"connectedCallback",value:function(){this.shadowRoot.querySelector("p").innerText=this.getAttribute("title"),"true"==this.getAttribute("border")&&this.shadowRoot.querySelector(".title-cta-container").part.add("title-cta-container-border")}}]),l}(n(HTMLElement)));
