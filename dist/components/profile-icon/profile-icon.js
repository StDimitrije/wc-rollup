import{_ as t,a as e,c as o,b as a,d as n}from"../../_rollupPluginBabelHelpers-aa656846.js";import{p as i}from"../../template-384b6122.js";customElements.define("profile-icon",function(n){t(l,n);var r=e(l);function l(){var t;return o(this,l),(t=r.call(this)).showInfo=!0,t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(i.content.cloneNode(!0)),t}return a(l,[{key:"connectedCallback",value:function(){this.shadowRoot.querySelector(".profile-icon").style.backgroundColor=this.getAttribute("color"),this.shadowRoot.querySelector("p").innerText=this.getAttribute("initials")}}]),l}(n(HTMLElement)));
