const gridContainerTemplate = document.createElement('template')
gridContainerTemplate.innerHTML = `
  <div part="grid-container">
    <slot name="grid-item"/>
  </div>
`
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
export {
  gridContainerTemplate,
  gridItemTemplate
}