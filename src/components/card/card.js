import {
  cardContainerTemplate,
  statCardTemplate,
  productCardTemplate,
  ctaCardTemplate,
  userCardTemplate,
} from './template.js'

customElements.define('card-container',
  class CardContainer extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(cardContainerTemplate.content.cloneNode(true));
    }
  })

customElements.define('stat-card',
  class StatCard extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(statCardTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const text = this.shadowRoot.querySelectorAll('p');
      text[0].innerText = this.getAttribute('label')
      text[1].innerText = this.getAttribute('count')
    }
  });


customElements.define('product-card',
  class ProductCard extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'deployment-time', 'profile-icon-src', 'status-icon-src', 'issues', 'terms-conditions', 'licence'];
    }
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(productCardTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      this.shadowRoot.querySelector('.profile-icon').src = this.getAttribute('profile-icon-src')
      this.shadowRoot.querySelector('.card-holder-name').innerText = this.getAttribute('name')
      this.shadowRoot.querySelector('.deployment-time').innerText = this.getAttribute('deployment-time')
      this.shadowRoot.querySelector('.status-icon').src = this.getAttribute('status-icon-src');
      if (this.getAttribute('issues')) {
        const issues = this.shadowRoot.querySelector('.issues')
        issues.innerText = this.getAttribute('issues') + ' issues'
        issues.part.remove('card-holder-info-muted')
        issues.part.add('card-holder-info-medium')
      }
      if (this.getAttribute('terms-conditions')) {
        const termsConditions = this.shadowRoot.querySelector('.terms-conditions')
        termsConditions.innerText = this.getAttribute('terms-conditions')
        termsConditions.part.remove('card-holder-info-muted')
        termsConditions.part.add('card-holder-info-medium')
      }
      if (this.getAttribute('licence')) {
        const licence = this.shadowRoot.querySelector('.licence')
        licence.innerText = this.getAttribute('licence')
        licence.part.remove('card-holder-info-muted')
        licence.part.add('card-holder-info-medium')
      }
    }
  });

customElements.define('cta-card',
  class CtaCard extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(ctaCardTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title')
      this.shadowRoot.querySelector('.subtitle').innerText = this.getAttribute('subtitle')
    }
  });
customElements.define('user-card',
  class UserCard extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(userCardTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('.user-name').innerText = this.getAttribute('name')
      const activity = this.shadowRoot.querySelector('.activity')

      if (this.getAttribute('active') != 'false') {
        activity.innerText = 'Active'
        activity.part.add('activity-active')
      } else {
        activity.innerText = 'Inactive'
        activity.part.add('activity-inactive')
      }
      this.shadowRoot.querySelector('.user-email').innerText = this.getAttribute('email')
      this.shadowRoot.querySelector('.user-roles').innerText = this.getAttribute('roles')
      const fullName = this.getAttribute('name').split(' ');
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      initials.toUpperCase();
      this.shadowRoot.querySelector('.user-initials').innerText = initials;
      this.shadowRoot.querySelector('.user-initials-bg').style.backgroundColor = this.getAttribute('color')
    }
  }
)