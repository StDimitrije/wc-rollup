const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
  <a href="" part="custom-button">
    <slot name="icon-slot"/>
  </a>
`;

const utilButtonTemplate = document.createElement('template');;
utilButtonTemplate.innerHTML = `
<a part="util-button" href=""></a>
`;

export {
  buttonTemplate,
  utilButtonTemplate
}