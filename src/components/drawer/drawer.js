import {
  drawerComponentTemplate
} from "./template.js";

customElements.define('drawer-component',
  class DrawerComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(drawerComponentTemplate.content.cloneNode(true));
    }

    toggleDrawer() {
      const drawerComponent = this.shadowRoot.querySelector('.drawer-component');
      drawerComponent.part.remove('visible')
      drawerComponent.part.add('hidden')
    }

    connectedCallback() {
      this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title');
      this.shadowRoot.querySelector('.subtitle').innerText = this.getAttribute('subtitle')
      this.shadowRoot.querySelector('.close-icon-wrapper').addEventListener('click', () => this.toggleDrawer())
    }
  }
);