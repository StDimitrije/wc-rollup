const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
  <a part="custom-button">
    <slot name="icon-slot"/>
  </a>
`;

const utilButtonTemplate = document.createElement('template');;
utilButtonTemplate.innerHTML = `
<a part="util-button"></a>
`;

export {
  buttonTemplate,
  utilButtonTemplate
}