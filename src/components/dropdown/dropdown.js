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
    toggleDropdown(dropDownModal, dropDownComponent) {
      dropDownModal.part.toggle('dropdown-modal-hidden')
      dropDownModal.part.toggle('dropdown-modal-visible')
      dropDownComponent.part.toggle('dropdown-modal-hidden')
      dropDownComponent.part.toggle('dropdown-modal-visible')
    }
    connectedCallback() {
      const dropDownModal = this.shadowRoot.querySelector('.dropdown-modal');
      const dropDownComponent = this.shadowRoot.querySelector('.dropdown-component')
      this.parentElement.addEventListener('click', () => this.toggleDropdown(dropDownModal, dropDownComponent))
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