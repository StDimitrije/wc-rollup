import {
  filterComponentTemplate
} from './template.js'

customElements.define('custom-filter',
  class FilterComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(filterComponentTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('input').placeholder = this.getAttribute('placeholder')
    }
  });