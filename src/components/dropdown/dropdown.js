import {
  customDropdownComponentTemplate,
  customDropdownItemTemplate
} from './template.js'

customElements.define('dropdown-component',
  class CustomDropdownComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(customDropdownComponentTemplate.content.cloneNode(true));
    }
    toggleDropdown(profileDropdown) {
      profileDropdown.part.toggle('dropdown-modal-hidden')
      profileDropdown.part.toggle('dropdown-modal-visible')
    }
    connectedCallback() {
      const profileDropdown = this.shadowRoot.querySelector('.dropdown-modal');
      document.querySelector('profile-icon').addEventListener('click', () => this.toggleDropdown(profileDropdown))
    }
  }
);
customElements.define('dropdown-item',
  class CustomDropdownItem extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'href'];
    }
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(customDropdownItemTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      const link = this.shadowRoot.querySelector('a')
      link.href = this.getAttribute('href');
      link.innerText = this.getAttribute('title')
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