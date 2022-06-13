const sideNavComponentTemplate = document.createElement('template');
sideNavComponentTemplate.innerHTML = `
  <div part="sidenav-container" class="sidenav-container">
    <div part="sidenav-arrow sidenav-arrow-hidden" class="sidenav-arrow">
      <span part="sidenav-arrow-span-1"></span>
      <span part="sidenav-arrow-span-2"></span>
    </div>
    <div>
      <slot name="sidenav-component"/>
    </div>
  </div> 
`;
const sideNavUlComponentTemplate = document.createElement('template');
sideNavUlComponentTemplate.innerHTML = `
  <div part="sidenav-ul-component-wrapper">
    <ul part="sidenav-ul-component">
      <slot name="sidenav-ul-item"/>
    </ul> 
  </div>
`;
const sideNavUlItemTemplate = document.createElement('template');
sideNavUlItemTemplate.innerHTML = `
  <style>
    p {margin: 0}
  </style>
  <li part="sidenav-ul-item sidenav-ul-item-hover" class="sidenav-ul-item">
    <a part="sidenav-ul-item-a" href="">
      <div class="sidenav-ul-item-icon">
        <slot name="icon-slot"/>
      </div>
      <p class="sidenav-item-text"></p>
    </a>
  </li>
`;
const sideNavUtilComponentTemplate = document.createElement('template');
sideNavUtilComponentTemplate.innerHTML = `
  <style>
    p {margin: 0}
  </style>
  <div class="sidenav-util-component" part="sidenav-util-component">
    <p part="sidenav-util-component-title"></p>
    <ul part="sidenav-util-component-ul">
      <slot name="sidenav-util-item"/>
    </ul>
    <button part="sidenav-util-component-button"></button>
  </div>
`;
const sideNavUtilItem = document.createElement('template');
sideNavUtilItem.innerHTML = `
  <style>
  p {margin: 0}
  </style>
  <li class=sidenav-util-li">
    <a part="sidenav-util-item" href="">
      <div part="sidenav-util-item-info">
        <img part="sidenav-util-item-img" src="" alt="" width="45px" height="45px">
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
const sideNavSubmenuComponentTemplate = document.createElement('template')
sideNavSubmenuComponentTemplate.innerHTML = `
<style>
  p {margin: 0}
</style>
<div>
  <div part="submenu-component-img-title-wrapper">
    <img src="" width="45px" height="45px" part="submenu-component-img"/>
    <p></p>
  </div>
  <slot name="submenu-container"/>
</div>
`
const sideNavSubmenuUlComponentTemplate = document.createElement('template');
sideNavSubmenuUlComponentTemplate.innerHTML = `
<style>
  p {margin: 0}
</style>
<div class="submenu-ul-component" part="submenu-ul-component">
  <p part="submenu-ul-component-title"></p>
  <ul part="submenu-ul-component-ul">
    <slot name="submenu-item"/>
  </ul>
</div>
`
const sideNavSubmenuItemTemplate = document.createElement('template');
sideNavSubmenuItemTemplate.innerHTML = `
<li part="submenu-item submenu-item-hover" class="submenu-item">
  <a href="" part="submenu-item-a"></a>
</li>
`

export {
  sideNavComponentTemplate,
  sideNavUlComponentTemplate,
  sideNavUlItemTemplate,
  sideNavUtilComponentTemplate,
  sideNavUtilItem,
  sideNavSubmenuComponentTemplate,
  sideNavSubmenuUlComponentTemplate,
  sideNavSubmenuItemTemplate
}