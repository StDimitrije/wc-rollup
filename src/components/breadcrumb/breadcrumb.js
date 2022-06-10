import {
  breadCrumbContainerTemplate,
  breadCrumbItemTemplate
} from '../breadcrumb/template.js'

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
    connectedCallback() {
      window.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('breadcrumb-item')
        const itemsList = []
        for (const item of items) {
          itemsList.push(item.shadowRoot.querySelector('a'))
        }
        const lastItem = itemsList[itemsList.length - 1]
        lastItem.removeChild(lastItem.lastChild)
        lastItem.part.add('breadcrumb-li-a-active')
        if (itemsList.length > 1) {
          const navWrapper = this.shadowRoot.querySelector('.breadcrumb-nav-wrapper')
          navWrapper.appendChild(lastItem)
          this.shadowRoot.querySelector('.breadcrumb-icon-wrapper').part.add('breadcrumb-icon-wrapper-start')
        } else {
          this.shadowRoot.querySelector('.breadcrumb-icon-wrapper').part.add('breadcrumb-icon-wrapper-center')
        }
      })
    }
  }
);

customElements.define('breadcrumb-item',
  class BreadCrumbItem extends HTMLElement {
    static get observedAttributes() {
      return ['href', 'title'];
    }
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(breadCrumbItemTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      const link = this.shadowRoot.querySelector('a')
      link.href = this.getAttribute('href')
      link.innerHTML = this.getAttribute('title') + `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path part="arrow-next" d="M7.833 15 6.583 13.75 10.333 10 6.583 6.25 7.833 5 12.833 10Z"/></svg>`
    }
    connectedCallback() {
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  }
);