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
      const headingWrapper = this.shadowRoot.querySelector('.title-wrapper');
      switch (this.getAttribute('variant')) {
        case 'h1':
          let h1 = document.createElement('h1')
          h1.innerText = this.getAttribute('title')
          h1.part.add('h1')
          headingWrapper.appendChild(h1)
          break;
        case 'h2':
          let h2 = document.createElement('h2')
          h2.innerText = this.getAttribute('title')
          h2.part.add('h2')
          headingWrapper.appendChild(h2)
          break;
        case 'h3':
          let h3 = document.createElement('h3')
          h3.innerText = this.getAttribute('title')
          h3.part.add('h3')
          headingWrapper.appendChild(h3)
          break;
        case 'h4':
          let h4 = document.createElement('h4')
          h4.innerText = this.getAttribute('title')
          h4.part.add('h4')
          headingWrapper.appendChild(h4)
          break;
        case 'h5':
          let h5 = document.createElement('h5')
          h5.innerText = this.getAttribute('title')
          h5.part.add('h5')
          headingWrapper.appendChild(h5)
          break;
        case 'h6':
          let h6 = document.createElement('h6')
          h6.innerText = this.getAttribute('title')
          h6.part.add('h6')
          headingWrapper.appendChild(h6)
          break;
        case 'p':
          let p = document.createElement('p')
          p.innerText = this.getAttribute('title')
          p.part.add('p')
          headingWrapper.appendChild(p)
          break;
        default:
          let paragraph = document.createElement('p')
          paragraph.innerText = this.getAttribute('title')
          paragraph.part.add('p')
          headingWrapper.appendChild(paragraph)
      }
      if (this.getAttribute('border') == 'true') {
        this.shadowRoot.querySelector('.title-cta-container').part.add('title-cta-container-border')
      }
    }
  });