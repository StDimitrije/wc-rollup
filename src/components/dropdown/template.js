const customDropdownComponentTemplate = document.createElement('template');
customDropdownComponentTemplate.innerHTML = `
<div class="dropdown-modal" part="dropdown-modal dropdown-modal-hidden">
  <ul part="dropdown-component" class="dropdown-component" >
    <slot name="dropdown-item"/>
  </ul>
</div>
`
const customDropdownItemTemplate = document.createElement('template');
customDropdownItemTemplate.innerHTML = `
  <li part="profile-dropdown-item">
    <a part="profile-dropdown-item-a"></a>
  </li>
`

export {
  customDropdownComponentTemplate,
  customDropdownItemTemplate
}