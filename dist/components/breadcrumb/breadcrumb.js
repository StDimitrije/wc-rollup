import{_ as e,a as t,c as a,b as r,e as o,d as n}from"../../_rollupPluginBabelHelpers-aa656846.js";import{b as c,a as d}from"../../template-626a10f5.js";customElements.define("breadcrumb-component",function(n){e(i,n);var d=t(i);function i(){var e;return a(this,i),(e=d.call(this)).showInfo=!0,e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(c.content.cloneNode(!0)),e}return r(i,[{key:"connectedCallback",value:function(){var e=this;window.addEventListener("DOMContentLoaded",(function(){var t,a=document.querySelectorAll("breadcrumb-item"),r=[],n=o(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;r.push(c.shadowRoot.querySelector("a"))}}catch(e){n.e(e)}finally{n.f()}var d=r[r.length-1];(d.removeChild(d.lastChild),d.part.add("breadcrumb-li-a-active"),r.length>1)?(e.shadowRoot.querySelector(".breadcrumb-nav-wrapper").appendChild(d),e.shadowRoot.querySelector(".breadcrumb-icon-wrapper").part.add("breadcrumb-icon-wrapper-start")):e.shadowRoot.querySelector(".breadcrumb-icon-wrapper").part.add("breadcrumb-icon-wrapper-center")}))}}]),i}(n(HTMLElement))),customElements.define("breadcrumb-item",function(n){e(i,n);var c=t(i);function i(){var e;return a(this,i),(e=c.call(this)).showInfo=!0,e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(d.content.cloneNode(!0)),e}return r(i,[{key:"attributeChangedCallback",value:function(){var e=this.shadowRoot.querySelector("a");e.href=this.getAttribute("href"),e.innerHTML=this.getAttribute("title")+'<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path part="arrow-next" d="M7.833 15 6.583 13.75 10.333 10 6.583 6.25 7.833 5 12.833 10Z"/></svg>'}},{key:"connectedCallback",value:function(){var e,t=this.getAttributeNames(),a=o(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;r.includes("data")&&this.shadowRoot.querySelector("a").setAttribute(r,this.getAttribute(r))}}catch(e){a.e(e)}finally{a.f()}}}],[{key:"observedAttributes",get:function(){return["href","title"]}}]),i}(n(HTMLElement)));
