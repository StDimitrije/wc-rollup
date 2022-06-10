import {
  alertComponentTemplate,
  alertTemplate
} from './template.js'

customElements.define('alert-component',
  class AlertComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(alertComponentTemplate.content.cloneNode(true));
    }
  });

customElements.define('custom-alert',
  class CustomAlert extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(alertTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const alertIcon = this.shadowRoot.querySelector('.alert-wrapper');
      switch (this.getAttribute('variant')) {
        case 'danger':
          alertIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20ZM18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9Z" fill="rgb(220 38 38)"/>
            </svg>
            ${this.getAttribute('count') != null ? '<p part="alert-text">' + this.getAttribute('count') + ' severe issues</p>' : '<p part="alert-text">No issues</p>'}
          `;
          break;
        case 'warning':
          alertIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0001 5.99005L19.5301 19.0001H4.47012L12.0001 5.99005ZM2.74012 18.0001C1.97012 19.3301 2.93012 21.0001 4.47012 21.0001H19.5301C21.0701 21.0001 22.0301 19.3301 21.2601 18.0001L13.7301 4.99005C12.9601 3.66005 11.0401 3.66005 10.2701 4.99005L2.74012 18.0001ZM11.0001 11.0001V13.0001C11.0001 13.5501 11.4501 14.0001 12.0001 14.0001C12.5501 14.0001 13.0001 13.5501 13.0001 13.0001V11.0001C13.0001 10.4501 12.5501 10.0001 12.0001 10.0001C11.4501 10.0001 11.0001 10.4501 11.0001 11.0001ZM11.0001 16.0001H13.0001V18.0001H11.0001V16.0001Z" fill="rgb(245 158 11)"/>
            </svg>
            ${this.getAttribute('count') != null ? '<p part="alert-text">' + this.getAttribute('count') + ' moderate issues</p>' : '<p part="alert-text">No issues</p>'}
          `;
          break;
        case 'success':
          alertIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="rgb(22 163 74)"/>
            </svg>
            ${this.getAttribute('count') != null ? '<p part="alert-text">' + this.getAttribute('count') + ' working properly</p>' : '<p part="alert-text">No issues</p>'}
            `
          break;
      }
    }
  }
);