import{_ as e,a as t,c as o,b as n,d as a,e as r}from"../../_rollupPluginBabelHelpers-aa656846.js";import{c as i,a as l}from"../../template-62f695e7.js";customElements.define("dropdown-component",function(a){e(l,a);var r=t(l);function l(){var e;return o(this,l),(e=r.call(this)).showInfo=!0,e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(i.content.cloneNode(!0)),e}return n(l,[{key:"toggleDropdown",value:function(e){e.part.toggle("dropdown-modal-hidden"),e.part.toggle("dropdown-modal-visible")}},{key:"connectedCallback",value:function(){var e=this,t=this.shadowRoot.querySelector(".dropdown-modal");document.querySelector("profile-icon").addEventListener("click",(function(){return e.toggleDropdown(t)}))}}]),l}(a(HTMLElement))),customElements.define("dropdown-item",function(a){e(d,a);var i=t(d);function d(){var e;return o(this,d),(e=i.call(this)).showInfo=!0,e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(l.content.cloneNode(!0)),e}return n(d,[{key:"attributeChangedCallback",value:function(){var e=this.shadowRoot.querySelector("a");e.href=this.getAttribute("href"),e.innerText=this.getAttribute("title")}},{key:"connectedCallback",value:function(){var e,t=this.getAttributeNames(),o=r(t);try{for(o.s();!(e=o.n()).done;){var n=e.value;n.includes("data")&&this.shadowRoot.querySelector("a").setAttribute(n,this.getAttribute(n))}}catch(e){o.e(e)}finally{o.f()}}}],[{key:"observedAttributes",get:function(){return["title","href"]}}]),d}(a(HTMLElement)));
