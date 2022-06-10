import {
  mainSearch
} from './template.js'
customElements.define('main-search',
  class MainSearch extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(mainSearch.content.cloneNode(true));
    }
    connectedCallback() {
      const form = this.shadowRoot.querySelector('form')
      form.action = this.getAttribute('action');
      form.method = this.getAttribute('method')
      const input = this.shadowRoot.querySelector('input')
      input.placeholder = this.getAttribute('placeholder');
      input.name = this.getAttribute('name')
    }
  }
);