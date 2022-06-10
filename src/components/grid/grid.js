import {
  gridContainerTemplate,
  gridItemTemplate
} from './template.js'

customElements.define('grid-container',
  class GridContainer extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(gridContainerTemplate.content.cloneNode(true));
    }
  })

customElements.define('grid-item',
  class StatGridItem extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(gridItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      const img = this.shadowRoot.querySelector('img')
      img.src = this.getAttribute('imgSrc');
      img.alt = this.getAttribute('imgAlt');
      const text = this.shadowRoot.querySelector('.grid-item-text');
      text.children[0].innerText = this.getAttribute('name');
      text.children[1].innerText = this.getAttribute('deployments') + ' Deployments';
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  })