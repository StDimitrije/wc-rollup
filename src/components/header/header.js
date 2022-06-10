import {
  headerComponentTemplate
} from './template.js'

customElements.define('header-component',
  class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(headerComponentTemplate.content.cloneNode(true));
    }
  }
);