import {
  titleCTAComponentTemplate
} from './template.js'

customElements.define('title-cta',
  class TitleCTAComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(titleCTAComponentTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title')
      if (this.getAttribute('border') == 'true') {
        this.shadowRoot.querySelector('.title-cta-container').part.add('title-cta-container-border')
      }
    }
  });