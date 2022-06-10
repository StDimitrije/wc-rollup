const alertComponentTemplate = document.createElement('template');
alertComponentTemplate.innerHTML = `
  <div part="alert-component">
    <slot name="alert"/>
  </div>
`
const alertTemplate = document.createElement('template');;
alertTemplate.innerHTML = `
<div part="alert-wrapper" class="alert-wrapper"></div>
`

export {
  alertComponentTemplate,
  alertTemplate
}