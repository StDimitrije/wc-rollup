import {
  profileIconTemplate
} from './template.js'

customElements.define('profile-icon',
  class ProfileIcon extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(profileIconTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('.profile-icon').style.backgroundColor = this.getAttribute('color')
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('initials')
    }
  }
);