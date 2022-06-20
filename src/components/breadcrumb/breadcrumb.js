import {
  breadCrumbContainerTemplate,
  breadCrumbItemTemplate
} from './template.js';

customElements.define('breadcrumb-component',
  class BreadCrumbContainer extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(breadCrumbContainerTemplate.content.cloneNode(true));
    }
    toggleActiveItem() {
      const items = document.querySelectorAll('breadcrumb-item')
      const lastItem = items[items.length - 1]

      lastItem.shadowRoot.querySelector('path').part.add('arrow-hidden')
    }
    connectedCallback() {
      window.addEventListener(window.loadEventListener, () => this.toggleActiveItem())
    }
  }
);

customElements.define('breadcrumb-item',
  class BreadCrumbItem extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(breadCrumbItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const link = this.shadowRoot.querySelector('a')
      link.href = this.getAttribute('href')
      link.innerHTML = this.getAttribute('title') + `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path part="arrow-next" d="M7.833 15 6.583 13.75 10.333 10 6.583 6.25 7.833 5 12.833 10Z"/></svg>`
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  }
);