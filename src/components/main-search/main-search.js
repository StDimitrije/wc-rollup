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
      if (this.getAttribute('action') != null) {
        form.action = this.getAttribute('action');
      }
      if (this.getAttribute('method') != null) {
        form.method = this.getAttribute('method')
      } else {
        form.method = 'POST'
      }
      const input = this.shadowRoot.querySelector('input')
      if (this.getAttribute('placeholder')) {
        input.placeholder = this.getAttribute('placeholder');
      }
      if (this.getAttribute('name') != null) {
        input.name = this.getAttribute('name')
      } else {
        input.name = 'query'
      }

    }
  }
);