import {
  buttonTemplate,
  utilButtonTemplate
} from './template.js'

customElements.define('custom-button',
  class CustomButton extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
      const customBtn = this.shadowRoot.querySelector('a')
      customBtn.href = this.getAttribute('href')
      customBtn.innerHTML += this.getAttribute('title')

      const variant = this.getAttribute('variant')
      const color = this.getAttribute('color')

      if (variant == 'fill') {
        if (color == 'success') {
          customBtn.part.add('custom-button-success-fill')
        } else if (color == 'neutral') {
          customBtn.part.add('custom-button-neutral-fill')
        } else if (color == 'danger') {
          customBtn.part.add('custom-button-danger-fill')
        }
      } else if (variant == 'outline') {
        if (color == 'success') {
          customBtn.part.add('custom-button-success-outline')
        } else if (color == 'neutral') {
          customBtn.part.add('custom-button-neutral-outline')
        } else if (color == 'danger') {
          customBtn.part.add('custom-button-danger-outline')
        }
      } else {
        customBtn.part.add('custom-button-success-fill')
        if (color == 'success') {
          customBtn.part.add('custom-button-success-outline')
        } else if (color == 'neutral') {
          customBtn.part.add('custom-button-neutral-outline')
        } else if (color == 'danger') {
          customBtn.part.add('custom-button-danger-outline')
        } else {
          customBtn.part.add('custom-button-neutral-outline')
        }
      }
    }
  }
);
customElements.define('util-button',
  class UtilButton extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(utilButtonTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      let button = this.shadowRoot.querySelector('a')
      button.href = this.getAttribute('href')
      switch (this.getAttribute('variant')) {
        case 'share':
          button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#90C058"/>
            </svg>
          ` + this.getAttribute('title');
          break;
        case 'settings':
          button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5398 5.05 19.2698 4.97 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.71984 4.96 4.45984 5.05 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.45984 18.95 4.72984 19.03 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.2798 19.04 19.5398 18.95 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM11.9998 15.5C10.0698 15.5 8.49984 13.93 8.49984 12C8.49984 10.07 10.0698 8.5 11.9998 8.5C13.9298 8.5 15.4998 10.07 15.4998 12C15.4998 13.93 13.9298 15.5 11.9998 15.5Z" fill="#90C058"/>
            </svg>
          ` + this.getAttribute('title');
          break;
      }
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  }
);