import {
  sideNavComponentTemplate,
  sideNavUlComponentTemplate,
  sideNavUlItemTemplate,
  sideNavUtilComponentTemplate,
  sideNavUtilItem,
  sideNavSubmenuComponentTemplate,
  sideNavSubmenuUlComponentTemplate,
  sideNavSubmenuItemTemplate
} from './template.js'

customElements.define('sidenav-component',
  class SideNavComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavComponentTemplate.content.cloneNode(true));
    }
    expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable) {
      if (isExpandable != 'false') {
        if (isUtil == 'true' && localStorage.getItem('sidenav-util-expanded') != 'false') {
          sideNavContainer.part.remove('sidenav-container-collapsed')
          sideNavContainer.part.add('sidenav-container-expanded')
          const utilComponent = document.querySelectorAll('sidenav-util-component')
          for (const item of utilComponent) {
            item.shadowRoot.querySelector('.sidenav-util-component').part.remove('sidenav-util-component-hidden');
            item.shadowRoot.querySelector('.sidenav-util-component').part.add('sidenav-util-component-visible');
          }
          sideNavArrow.part.add('sidenav-arrow-start')
          sideNavArrow.part.remove('sidenav-arrow-center')
          sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-left')
          sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-left')
          sideNavArrow.children[0].part.add('sidenav-arrow-span-1-right')
          sideNavArrow.children[1].part.add('sidenav-arrow-span-2-right')
        }
        if (isUtil != 'true' && localStorage.getItem('sidenav-expanded') != 'false') {
          sideNavContainer.part.remove('sidenav-container-collapsed')
          sideNavContainer.part.add('sidenav-container-expanded')
          const ulComponentItems = document.querySelectorAll('sidenav-ul-item');
          for (const item of ulComponentItems) {
            let sideNavItemText = item.shadowRoot.querySelector('.sidenav-ul-item-a-text')
            sideNavItemText.part.add('sidenav-ul-item-a-text-visible')
            sideNavItemText.part.remove('sidenav-ul-item-a-text-hidden')
          }
          sideNavArrow.part.add('sidenav-arrow-end')
          sideNavArrow.part.remove('sidenav-arrow-center')
          sideNavArrow.children[0].part.add('sidenav-arrow-span-1-left')
          sideNavArrow.children[1].part.add('sidenav-arrow-span-2-left')
          sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-right')
          sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-right')
        }
      }
    }
    collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable) {
      if (isExpandable != 'false') {
        if (isUtil == 'true' && localStorage.getItem('sidenav-util-expanded') == 'false') {
          sideNavContainer.part.remove('sidenav-container-expanded')
          sideNavContainer.part.add('sidenav-container-collapsed')
          const utilComponent = document.querySelectorAll('sidenav-util-component')
          for (const item of utilComponent) {
            item.shadowRoot.querySelector('.sidenav-util-component').part.add('sidenav-util-component-hidden');
            item.shadowRoot.querySelector('.sidenav-util-component').part.remove('sidenav-util-component-visible');
          }
          sideNavArrow.part.remove('sidenav-arrow-start')
          sideNavArrow.part.add('sidenav-arrow-center')
          sideNavArrow.children[0].part.add('sidenav-arrow-span-1-left')
          sideNavArrow.children[1].part.add('sidenav-arrow-span-2-left')
          sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-right')
          sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-right')
        }
        if (isUtil != 'true' && localStorage.getItem('sidenav-expanded') == 'false') {
          sideNavContainer.part.remove('sidenav-container-expanded')
          sideNavContainer.part.add('sidenav-container-collapsed')
          const ulComponentItems = document.querySelectorAll('sidenav-ul-item');
          for (const item of ulComponentItems) {
            let sideNavItemText = item.shadowRoot.querySelector('.sidenav-ul-item-a-text')
            sideNavItemText.part.add('sidenav-ul-item-a-text-hidden')
            sideNavItemText.part.remove('sidenav-ul-item-a-text-visible')
          }
          sideNavArrow.part.remove('sidenav-arrow-end')
          sideNavArrow.part.add('sidenav-arrow-center')
          sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-left')
          sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-left')
          sideNavArrow.children[0].part.add('sidenav-arrow-span-1-right')
          sideNavArrow.children[1].part.add('sidenav-arrow-span-2-right')
        }
      }
    }
    toggleSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable) {
      if (isUtil != 'true') {
        if (localStorage.getItem('sidenav-expanded') != 'false') {
          localStorage.setItem('sidenav-expanded', false)
          this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
        } else {
          localStorage.setItem('sidenav-expanded', true)
          this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
        }
      } else {
        if (localStorage.getItem('sidenav-util-expanded') != 'false') {
          localStorage.setItem('sidenav-util-expanded', false)
          this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
        } else {
          localStorage.setItem('sidenav-util-expanded', true)
          this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
        }
      }
    }
    connectedCallback() {
      const isUtil = this.getAttribute('util');
      // const isExpandable = this.getAttribute('expandable');
      const sideNavArrow = this.shadowRoot.querySelector('.sidenav-arrow')
      const sideNavContainer = this.shadowRoot.querySelector('.sidenav-container');
      if (isUtil == 'true') {
        sideNavArrow.part.add('sidenav-arrow-start')
        sideNavArrow.children[0].part.add('sidenav-arrow-span-1-right')
        sideNavArrow.children[1].part.add('sidenav-arrow-span-2-right')
        sideNavContainer.part.add('sidenav-container-border-l')
      } else {
        sideNavArrow.part.add('sidenav-arrow-end')
        sideNavArrow.children[0].part.add('sidenav-arrow-span-1-left')
        sideNavArrow.children[1].part.add('sidenav-arrow-span-2-left')
        sideNavContainer.part.add('sidenav-container-border-r')
      }
      // if (isExpandable == "false") {
      //   sideNavArrow.part.replace('sidenav-arrow-visible', 'sidenav-arrow-hidden')
      //   sideNavContainer.part.toggle('sidenav-container-gap');
      // }
      // window.addEventListener('DOMContentLoaded', () => {
      //   if (window.innerWidth <= 1024) {
      //     if (isExpandable != 'false') {
      //       localStorage.setItem('sidenav-expanded', false)
      //       localStorage.setItem('sidenav-util-expanded', false)
      //     }
      //     this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
      //   }
      //   if (localStorage.getItem('sidenav-expanded') != 'false') {
      //     this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
      //   } else {
      //     this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
      //     console.log('asd')
      //   }
      //   if (localStorage.getItem('sidenav-util-expanded') != 'false') {
      //     this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
      //   } else {
      //     this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
      //   }
      // });
      sideNavArrow.addEventListener('click', () => this.toggleSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable));
    }
  }
);

customElements.define('sidenav-ul-component',
  class SideNavUlComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavUlComponentTemplate.content.cloneNode(true));
    }
    toggleActiveSideNavItem() {
      const sideNavUlItems = document.querySelectorAll('sidenav-ul-item')
      for (const item of sideNavUlItems) {
        const sideNavLiItem = item.shadowRoot.querySelector('.sidenav-ul-item');
        if (window.location.pathname.includes(sideNavLiItem.children[0].pathname)) {
          sideNavLiItem.part.add('sidenav-ul-item-active');
          sideNavLiItem.part.remove('sidenav-ul-item-hover');
        }
      }
    }
    connectedCallback() {
      window.addEventListener('load', () => this.toggleActiveSideNavItem())
    }
  });

customElements.define('sidenav-ul-item',
  class SideNavUlItem extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavUlItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');

      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  });

customElements.define('sidenav-util-component',
  class SideNavUtilComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavUtilComponentTemplate.content.cloneNode(true));
      this.toggleList = true;
    }
    viewMore(sideNavUtilItems, viewMoreButton) {
      if (this.toggleList) {
        for (let i = 4; i < sideNavUtilItems.length; i++) {
          sideNavUtilItems[i].style.display = 'block'
        }
        viewMoreButton.innerText = 'View Less'
        this.toggleList = !this.toggleList
      } else {
        for (let i = 4; i < sideNavUtilItems.length; i++) {
          sideNavUtilItems[i].style.display = 'none'
        }
        viewMoreButton.innerText = 'View More'
        this.toggleList = !this.toggleList
      }
    }
    connectedCallback() {
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
      const viewMoreButton = this.shadowRoot.querySelector('button');
      window.addEventListener('load', () => {
        const sideNavUtilItems = this.querySelectorAll('sidenav-util-item')
        for (let i = 4; i < sideNavUtilItems.length; i++) {
          sideNavUtilItems[i].style.display = 'none'
        }
        viewMoreButton.innerText = this.getAttribute('buttonText');
        viewMoreButton.addEventListener('click', () => this.viewMore(sideNavUtilItems, viewMoreButton));
      })
    }
  });

customElements.define('sidenav-util-item',
  class SideNavUtilItem extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavUtilItem.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      if (this.getAttribute('imgSrc') == null) {
        this.shadowRoot.querySelector('img').style.display = 'none'
      } else {
        this.shadowRoot.querySelector('img').src = this.getAttribute('imgSrc');
        this.shadowRoot.querySelector('img').alt = this.getAttribute('imgAlt');
      }
      this.shadowRoot.querySelector('.sidenav-util-item-title').children[0].innerText = this.getAttribute('name');
      this.shadowRoot.querySelector('.sidenav-util-item-title').children[1].innerText = this.getAttribute('last-active');
      this.shadowRoot.querySelector('.sidenav-util-item-deployment').innerText = this.getAttribute('deployment');
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  });

customElements.define('submenu-component',
  class SideNavSubmenuComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavSubmenuComponentTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('img').src = this.getAttribute('imgSrc')
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title')
    }
  });

customElements.define('submenu-ul-component',
  class SideNavSubmenuUlComponent extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavSubmenuUlComponentTemplate.content.cloneNode(true));
    }
    toggleActiveItem() {
      const submenuItems = document.querySelectorAll('submenu-item')
      for (const item of submenuItems) {
        const submenuItem = item.shadowRoot.querySelector('.submenu-item');
        if (window.location.pathname.includes(submenuItem.children[0].pathname)) {
          submenuItem.part.add('submenu-item-active');
          submenuItem.part.remove('submenu-item-hover');
        }
      }
    }
    connectedCallback() {
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title')
      window.addEventListener('load', () => this.toggleActiveItem())
    }
  });

customElements.define('submenu-item',
  class SideNavSubmenuItem extends HTMLElement {
    constructor() {
      super();
      this.showInfo = true;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(sideNavSubmenuItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const link = this.shadowRoot.querySelector('a')
      link.href = this.getAttribute('href')
      link.innerText = this.getAttribute('title')
      const attrNames = this.getAttributeNames();
      for (const attr of attrNames) {
        if (attr.includes('data')) {
          link.setAttribute(attr, this.getAttribute(attr))
        }
      }
    }
  });