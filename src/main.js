
// src/main.js
window.onload = function () {
  const content = document.querySelector('html')
  const myStorage = window.localStorage
  const mode = myStorage.getItem('mode')

  mode ? content.classList.add(mode) : myStorage.setItem('mode', 'light')

  function setMode (mode) {
    console.log("set mode")
    content.classList.remove('dark', 'light')
    content.classList.add(mode)
    myStorage.setItem('mode', mode)
  }
  // Toggle between dark and light modes
  document.querySelector('#toggleMode').onclick = function () {
    content.classList.contains('dark') ?
      setMode('light') :
      setMode('dark')
  }
}
  const headerComponentTemplate = document.createElement('template');
headerComponentTemplate.innerHTML = `
<header part="header-component">
  <slot name="header-slot"/>
</header>
`
customElements.define('header-component', 
  class HeaderComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(headerComponentTemplate.content.cloneNode(true));
    }
  }
);
const profileIconTemplate = document.createElement('template');
profileIconTemplate.innerHTML = `
  <div part="profile-icon" class="profile-icon">
    <p part="profile-icon-initials"></p>
    <div>
      <slot name="dropdown-container"/>
    </div>
  </div>
`;
customElements.define('profile-icon', 
  class ProfileIcon extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(profileIconTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('.profile-icon').style.backgroundColor = this.getAttribute('color')
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('initials')
    }
  }
);
const customDropdownComponentTemplate = document.createElement('template');
customDropdownComponentTemplate.innerHTML = `
<div class="dropdown-modal" part="dropdown-modal dropdown-modal-hidden">
  <ul part="dropdown-component" class="dropdown-component" >
    <slot name="dropdown-item"/>
  </ul>
</div>
`
customElements.define('dropdown-component', 
  class CustomDropdownComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
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
const customDropdownItemTemplate = document.createElement('template');
customDropdownItemTemplate.innerHTML = `
  <li part="profile-dropdown-item">
    <a part="profile-dropdown-item-a" href=""></a>
  </li>
`
customElements.define('dropdown-item', 
  class CustomDropdownItem extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'href'];
    }
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(customDropdownItemTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      const link = this.shadowRoot.querySelector('a')
      link.href = this.getAttribute('href');
      link.innerText = this.getAttribute('title')
    }
  }
);
const mainSearch = document.createElement('template');
mainSearch.innerHTML = `
  <form part="main-search-form" action="">
    <input part="main-search-input" type="text">
    <div part="main-search-input-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" part="main-search-input-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </div>
  </form>
`;
customElements.define('main-search', 
  class MainSearch extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(mainSearch.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('form').action = this.getAttribute('action');
      this.shadowRoot.querySelector('input').placeholder = this.getAttribute('placeholder');
    }
  }
);
const logoComponentTemplate = document.createElement('template');
logoComponentTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
  <a part="logo" href="">
    <img src="" width="60px" alt="">
    <p></p>
  </a>
`;
customElements.define('logo-component', 
  class LogoComponent extends HTMLElement {
    static get observedAttributes() {
      return ['imageSrc', 'link', 'organization'];
    }
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(logoComponentTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('link');
      this.shadowRoot.querySelector('img').src = this.getAttribute('imageSrc');
      this.shadowRoot.querySelector('img').alt = this.getAttribute('imageAlt');
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('organization');
    }
  }
);
const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
  <a href="" part="custom-button"></a>
`;
customElements.define('custom-button', 
  class CustomButton extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'show-icon', 'href'];
    }
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      const customBtn = this.shadowRoot.querySelector('a')
      customBtn.href = this.getAttribute('href')
      customBtn.innerHTML = this.getAttribute('title')
      
      switch(this.getAttribute('variant')) {
        case 'fill':
          customBtn.part.add('custom-button-fill')
          if(this.getAttribute('show-icon') == "true") {
            customBtn.innerHTML = `
            <svg class="button-icon" width="11" height="11" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path part="custom-button-svg-path-dark" d="M13 8.5H8V13.5C8 14.05 7.55 14.5 7 14.5C6.45 14.5 6 14.05 6 13.5V8.5H1C0.45 8.5 0 8.05 0 7.5C0 6.95 0.45 6.5 1 6.5H6V1.5C6 0.95 6.45 0.5 7 0.5C7.55 0.5 8 0.95 8 1.5V6.5H13C13.55 6.5 14 6.95 14 7.5C14 8.05 13.55 8.5 13 8.5Z" fill="white"/>
            </svg>` + this.getAttribute('title');
          }
          break;
        case 'outline':
          customBtn.part.add('custom-button-outline')
          if(this.getAttribute('show-icon') == "true") {
            customBtn.innerHTML = `
            <svg class="button-icon" width="11" height="11" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path part="custom-button-svg-path-outline" d="M13 8.5H8V13.5C8 14.05 7.55 14.5 7 14.5C6.45 14.5 6 14.05 6 13.5V8.5H1C0.45 8.5 0 8.05 0 7.5C0 6.95 0.45 6.5 1 6.5H6V1.5C6 0.95 6.45 0.5 7 0.5C7.55 0.5 8 0.95 8 1.5V6.5H13C13.55 6.5 14 6.95 14 7.5C14 8.05 13.55 8.5 13 8.5Z" fill="white"/>
            </svg>` + this.getAttribute('title');
          }
          break;
        default:
          customBtn.part.add('custom-button-fill')
          if(this.getAttribute('show-icon') == "true") {
            customBtn.innerHTML = `
            <svg class="button-icon" width="11" height="11" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path part="custom-button-svg-path-dark" d="M13 8.5H8V13.5C8 14.05 7.55 14.5 7 14.5C6.45 14.5 6 14.05 6 13.5V8.5H1C0.45 8.5 0 8.05 0 7.5C0 6.95 0.45 6.5 1 6.5H6V1.5C6 0.95 6.45 0.5 7 0.5C7.55 0.5 8 0.95 8 1.5V6.5H13C13.55 6.5 14 6.95 14 7.5C14 8.05 13.55 8.5 13 8.5Z" fill="white"/>
            </svg>` + this.getAttribute('title');
          }
      }
    }
  }
);
const utilButtonTemplate = document.createElement('template');;
utilButtonTemplate.innerHTML = `
<a part="util-button" href=""></a>
`
customElements.define('util-button', 
  class UtilButton extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(utilButtonTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      let button = this.shadowRoot.querySelector('a')
      button.href = this.getAttribute('href')
      switch(this.getAttribute('variant')) {
        case 'share':
          button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#90C058"/>
            </svg>
          ` + 'Share';
          break;
        case 'manage':
          button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5398 5.05 19.2698 4.97 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.71984 4.96 4.45984 5.05 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.45984 18.95 4.72984 19.03 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.2798 19.04 19.5398 18.95 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM11.9998 15.5C10.0698 15.5 8.49984 13.93 8.49984 12C8.49984 10.07 10.0698 8.5 11.9998 8.5C13.9298 8.5 15.4998 10.07 15.4998 12C15.4998 13.93 13.9298 15.5 11.9998 15.5Z" fill="#90C058"/>
            </svg>
          ` + 'Manage';
          break;
      }
    }
  }
);
const sideNavComponentTemplate = document.createElement('template');
sideNavComponentTemplate.innerHTML = `
  <div part="sidenav-container sidenav-container-expanded sidenav-container-gap" class="sidenav-container">
    <div part="sidenav-arrow sidenav-arrow-visible" class="sidenav-arrow">
      <span part="sidenav-arrow-span-1"></span>
      <span part="sidenav-arrow-span-2"></span>
    </div>
    <div>
      <slot name="sidenav-ul-component"/>
    </div>
    <div>
      <slot name="sidenav-util-component"/>
    </div>
  </div> 
`;
customElements.define('sidenav-component', 
  class SideNavComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(sideNavComponentTemplate.content.cloneNode(true));
    }
    toggleSideNav(sideNavArrow, sideNavContainer) {
      sideNavContainer.part.toggle('sidenav-container-expanded')
      sideNavContainer.part.toggle('sidenav-container-collapsed')
      if (this.getAttribute('util') == "true") {
        const utilComponent = document.querySelectorAll('sidenav-util-component')
        for(let i=0; i < utilComponent.length; i++) {
          utilComponent[i].shadowRoot.querySelector('.sidenav-util-component').part.toggle('sidenav-util-component-visible');
          utilComponent[i].shadowRoot.querySelector('.sidenav-util-component').part.toggle('sidenav-util-component-hidden');
        }
        sideNavArrow.part.toggle('sidenav-arrow-start')
        sideNavArrow.part.toggle('sidenav-arrow-center')
        sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-left')
        sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-left')
        sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-right')
        sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-right')
      } else {
        const ulComponentItems = document.querySelectorAll('sidenav-ul-item');
        for(let i=0; i < ulComponentItems.length; i++) {
          let sideNavItemText = ulComponentItems[i].shadowRoot.querySelector('.sidenav-ul-item-a-text')
          sideNavItemText.part.toggle('sidenav-ul-item-a-text-visible')
          sideNavItemText.part.toggle('sidenav-ul-item-a-text-hidden')
        }
        sideNavArrow.part.toggle('sidenav-arrow-end')
        sideNavArrow.part.toggle('sidenav-arrow-center')
        sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-left')
        sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-left')
        sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-right')
        sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-right')
      }
    }
    connectedCallback() {
      const isUtil = this.getAttribute('util');
      const sideNavArrow = this.shadowRoot.querySelector('.sidenav-arrow')
      const sideNavContainer = this.shadowRoot.querySelector('.sidenav-container');
      if(isUtil == 'true') {
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
      if(this.getAttribute('expandable') != "true") {
        sideNavArrow.part.toggle('sidenav-arrow-visible')
        sideNavArrow.part.toggle('sidenav-arrow-hidden')
        sideNavContainer.part.toggle('sidenav-container-gap');
      }
      sideNavArrow.addEventListener('click', () => this.toggleSideNav(sideNavArrow, sideNavContainer));
    }
  }
);
const sideNavUlComponentTemplate = document.createElement('template');
sideNavUlComponentTemplate.innerHTML = `
  <div part="sidenav-ul-component-wrapper">
    <ul part="sidenav-ul-component">
      <slot name="sidenav-ul-item"/>
    </ul> 
  </div>
`;
customElements.define('sidenav-ul-component', 
  class SideNavUlComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(sideNavUlComponentTemplate.content.cloneNode(true));
    }
    toggleActiveSideNavItem() {
      const sideNavUlItems = document.querySelectorAll('sidenav-ul-item')
      for(let i = 0; i < sideNavUlItems.length; i++){
        const sideNavLiItem = sideNavUlItems[i].shadowRoot.querySelector('.sidenav-ul-item');
        if(window.location.pathname.includes(sideNavLiItem.children[0].pathname)){
          sideNavLiItem.part.add('sidenav-ul-item-active');
          sideNavLiItem.part.remove('sidenav-ul-item-hover');
        }
      }
    }
    connectedCallback() {
      window.addEventListener('load', () => this.toggleActiveSideNavItem())
    }
});
const sideNavUlItemTemplate = document.createElement('template');
sideNavUlItemTemplate.innerHTML = `
  <style>
    p {margin: 0}
  </style>
  <li part="sidenav-ul-item sidenav-ul-item-hover" class="sidenav-ul-item">
    <a part="sidenav-ul-item-a" href="">
      <div class="sidenav-ul-item-icon" style="display:flex">
        <slot name="icon-slot"/>
      </div>
      <div part="sidenav-ul-item-a-text sidenav-ul-item-a-text-visible" class="sidenav-ul-item-a-text">
        <p class="sidenav-item-text"></p>
        <p class="sidenav-item-text"></p>
      </div>
    </a>
  </li>
`;
customElements.define('sidenav-ul-item', 
  class SideNavUlItem extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(sideNavUlItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      let sidenavLinkText  = this.shadowRoot.querySelector('.sidenav-ul-item-a-text');
      sidenavLinkText.children[0].innerText = this.getAttribute('name');
      sidenavLinkText.children[1].innerText = this.getAttribute('count');
    }
});
const sideNavUtilComponentTemplate = document.createElement('template');
sideNavUtilComponentTemplate.innerHTML = `
  <style>
    p {margin: 0}
  </style>
  <div class="sidenav-util-component" part="sidenav-util-component">
    <p></p>
    <ul part="sidenav-util-component-ul">
      <slot name="sidenav-util-item"/>
    </ul>
    <button part="sidenav-util-component-button"></button>
  </div>
`;
customElements.define('sidenav-util-component', 
  class SideNavUtilComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(sideNavUtilComponentTemplate.content.cloneNode(true));
      this.toggleList = true;
    }
    viewMore(sideNavUtilItems, viewMoreButton){
      if(this.toggleList) {
        for(let i = 4; i < sideNavUtilItems.length; i++) {
          sideNavUtilItems[i].style.display = 'block'
        }
        viewMoreButton.innerText = 'View Less'
        this.toggleList = !this.toggleList
      } else {
        for(let i = 4; i < sideNavUtilItems.length; i++) {
          sideNavUtilItems[i].style.display = 'none'
        }
        viewMoreButton.innerText = 'View More'
        this.toggleList = !this.toggleList
      }
    }
    connectedCallback() {
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
      const viewMoreButton = this.shadowRoot.querySelector('button');
      
      setTimeout(()=>{
        const sideNavUtilItems = this.querySelectorAll('sidenav-util-item')
        for(let i = 4; i < sideNavUtilItems.length; i++) {
          sideNavUtilItems[i].style.display = 'none'
        }
        viewMoreButton.innerText = this.getAttribute('buttonText');
        viewMoreButton.addEventListener('click', () => this.viewMore(sideNavUtilItems, viewMoreButton));
      }, 10)
    }
});
const sideNavUtilItem = document.createElement('template');
sideNavUtilItem.innerHTML = `
  <style>
  p {margin: 0}
  </style>
  <li class=sidenav-util-li">
    <a part="sidenav-util-item" href="">
      <div part="sidenav-util-item-info">
        <img part="sidenav-util-item-img" src="" alt="" width="50px" height="50px">
        <div part="sidenav-util-item-text">
          <div part="sidenav-util-item-title" class="sidenav-util-item-title">
            <p part="sidenav-util-item-title-name"></p>
            <p part="sidenav-util-item-last-active"></p>
          </div>
          <p part="sidenav-util-item-deployment" class="sidenav-util-item-deployment"></p>
        </div>
      </div>
      <svg style="min-width: 24px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          <path part="sidenav-util-item-svg-path" d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" fill="#323232"/>
        </g>
      </svg>
    </a>
  </li>
`;
customElements.define('sidenav-util-item', 
  class SideNavUtilItem extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(sideNavUtilItem.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      if(this.getAttribute('imgSrc') == null ) {
        this.shadowRoot.querySelector('img').style.display = 'none'
      } else {
        this.shadowRoot.querySelector('img').src = this.getAttribute('imgSrc');
        this.shadowRoot.querySelector('img').alt = this.getAttribute('imgAlt');
      }
      this.shadowRoot.querySelector('.sidenav-util-item-title').children[0].innerText = this.getAttribute('name');
      this.shadowRoot.querySelector('.sidenav-util-item-title').children[1].innerText = this.getAttribute('last-active');
      this.shadowRoot.querySelector('.sidenav-util-item-deployment').innerText = this.getAttribute('deployment');
    }
});
const gridContainerTemplate = document.createElement('template')
gridContainerTemplate.innerHTML = `
  <div part="grid-container">
    <slot name="grid-item"/>
  </div>
`
customElements.define('grid-container',
  class GridContainer extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(gridContainerTemplate.content.cloneNode(true));
    }
})
const gridItemTemplate = document.createElement('template')
gridItemTemplate.innerHTML = `
  <style>
    p {margin:0}
  </style>
  <a part="grid-item" href="">
    <img part=""grid-item-img" src="" alt="" width="50px" height="50px">
    <div class="grid-item-text" part="grid-item-text">
      <p></p>
      <p part="grid-item-deployments"></p>
    </div>
  </a>
`
customElements.define('grid-item',
  class StatGridItem extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(gridItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      const img = this.shadowRoot.querySelector('img')
      img.src = this.getAttribute('imgSrc');
      img.alt = this.getAttribute('imgAlt');
      const text = this.shadowRoot.querySelector('.grid-item-text');
      text.children[0].innerText = this.getAttribute('name');
      text.children[1].innerText = this.getAttribute('deployments') + ' Deployments';

    }
})
const StatGridContainerTemplate = document.createElement('template')
StatGridContainerTemplate.innerHTML = `
  <div part="stat-grid">
    <slot name="grid-item"/>
  </div>
`
customElements.define('stat-grid',
  class GridContainer extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(StatGridContainerTemplate.content.cloneNode(true));
    }
})
const statGridItemTemplate = document.createElement('template')
statGridItemTemplate.innerHTML = `
  <style>
    p {margin:0}
  </style>
  <div part="stat-grid-item">
    <p part="stat-grid-item-label"></p>
    <p part="stat-grid-item-count"></p>
  </div>
`
customElements.define('stat-grid-item',
  class StatGridItem extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(statGridItemTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const text = this.shadowRoot.querySelectorAll('p');
      text[0].innerText = this.getAttribute('label')
      text[1].innerText = this.getAttribute('count')
    }
});
const cardGridTemplate = document.createElement('template');
cardGridTemplate.innerHTML = `
  <div part="card-grid-container">
    <slot name="card-item"/>
  </div>
`;
customElements.define('card-grid',
  class CardGrid extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(cardGridTemplate.content.cloneNode(true));
    }
    connectedCallback() {}
});
const cardTemplate = document.createElement('template')
cardTemplate.innerHTML = `
  <style>
    p {margin:0}
  </style>
  <div part="card-container">
    <div part="card-holder">
      <div part="card-holder-header">
        <img part="card-profile-icon" class="profile-icon" src="" alt="" width="50px" height="50px">
        <div part="card-holder-header-text">
          <p part="card-holder-name" class="card-holder-name"></p>
          <p part="deployment-time" class="deployment-time"></p>
        </div>
      </div>
      <img class="status-icon" src=""/>
    </div>
    <div part="card-holder-info">
      <p class="activity">Active, no issues</p>
      <p class="terms-conditions">T&C accepted</p>
      <p class="licence">License expired</p>
    </div>
  </div>
`;
customElements.define('card-item',
  class CardItem extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'deployment-time', 'profile-icon-src', 'status-icon-src', 'activity', 'terms-conditions', 'licence'];
    }
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      this.shadowRoot.querySelector('.profile-icon').src = this.getAttribute('profile-icon-src')
      this.shadowRoot.querySelector('.card-holder-name').innerText = this.getAttribute('name')
      this.shadowRoot.querySelector('.deployment-time').innerText = this.getAttribute('deployment-time')
      this.shadowRoot.querySelector('.status-icon').src = this.getAttribute('status-icon-src');
      if(this.getAttribute('activity')) {
        this.shadowRoot.querySelector('.activity').innerText = this.getAttribute('activity')
      }
      if(this.getAttribute('terms-conditions')) {
        this.shadowRoot.querySelector('.terms-conditions').innerText = this.getAttribute('terms-conditions')
      }
      if(this.getAttribute('licence')) {
        this.shadowRoot.querySelector('.licence').innerText = this.getAttribute('licence')
      }
    }
});
const titleCTAComponentTemplate = document.createElement('template');
titleCTAComponentTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<div class="title-cta-container" part="title-cta-container">
  <p part="title-cta-text"></p>
  <slot name="button-slot"/>
</div>
`
customElements.define('title-cta',
  class TitleCTAComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(titleCTAComponentTemplate.content.cloneNode(true));
    }
    attributeChangedCallback() {
      
    }
    connectedCallback() {
      this.shadowRoot.querySelector('p').innerText = this.getAttribute('title')
      if(this.getAttribute('border-bottom') == 'true') {
        this.shadowRoot.querySelector('.title-cta-container').part.add('title-cta-container-border')
      }
    }
});
const alertComponentTemplate = document.createElement('template');
alertComponentTemplate.innerHTML = `
  <div part="alert-component">
    <slot name="alert"/>
  </div>
`
customElements.define('alert-component',
  class AlertComponent extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(alertComponentTemplate.content.cloneNode(true));
    }
});
const alertTemplate = document.createElement('template');;
alertTemplate.innerHTML = `
<div part="alert-wrapper" class="alert-wrapper"></div>
`
customElements.define('custom-alert', 
  class CustomAlert extends HTMLElement {
    constructor(){
      super();
      this.showInfo = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(alertTemplate.content.cloneNode(true));
    }
    connectedCallback() {
      const alertIcon = this.shadowRoot.querySelector('.alert-wrapper');
      switch(this.getAttribute('variant')) {
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