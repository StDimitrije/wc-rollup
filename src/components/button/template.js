const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
  <a part="custom-button">
    <slot name="icon-slot"/>
  </a>
`;

const utilButtonTemplate = document.createElement('template');
utilButtonTemplate.innerHTML = `
<a part="util-button"></a>
`;

const kebabButtonTemplate = document.createElement('template');
kebabButtonTemplate.innerHTML = `
  <button part="kebab-button-container">
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path part="kebab-button-icon-svg-path" fill-rule="evenodd" clip-rule="evenodd" d="M4.25004 7.08333C3.47087 7.08333 2.83337 7.72083 2.83337 8.5C2.83337 9.27917 3.47087 9.91667 4.25004 9.91667C5.02921 9.91667 5.66671 9.27917 5.66671 8.5C5.66671 7.72083 5.02921 7.08333 4.25004 7.08333ZM12.75 7.08333C11.9709 7.08333 11.3334 7.72083 11.3334 8.5C11.3334 9.27917 11.9709 9.91667 12.75 9.91667C13.5292 9.91667 14.1667 9.27917 14.1667 8.5C14.1667 7.72083 13.5292 7.08333 12.75 7.08333ZM8.50004 7.08333C7.72087 7.08333 7.08337 7.72083 7.08337 8.5C7.08337 9.27917 7.72087 9.91667 8.50004 9.91667C9.27921 9.91667 9.91671 9.27917 9.91671 8.5C9.91671 7.72083 9.27921 7.08333 8.50004 7.08333Z" fill="#1D2B39"/>
    </svg>
    <div>
      <slot name="dropdown-container"/>
    </div>
  </button>
`
export {
  buttonTemplate,
  utilButtonTemplate,
  kebabButtonTemplate,
}