import {
  logoComponentTemplate
} from './template.js'

customElements.define('logo-component',
  class LogoComponent extends HTMLElement {
    static get observedAttributes() {
      return ['imageSrc', 'link', 'organization'];
    }
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(logoComponentTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('link');
      this.shadowRoot.querySelector('img').src = this.getAttribute('imageSrc');
      this.shadowRoot.querySelector('img').alt = this.getAttribute('imageAlt');
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('organization');
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