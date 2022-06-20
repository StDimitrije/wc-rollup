const breadCrumbContainerTemplate = document.createElement('template');
breadCrumbContainerTemplate.innerHTML = `
<div part="breadcrumb-container">
  <ul part="breadcrumb-ul">
    <slot name="breadcrumb-item"/>
  </ul>
</div>
`

const breadCrumbItemTemplate = document.createElement('template');
breadCrumbItemTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<li>
  <a part="breadcrumb-li-a" href="">
  </a>
</li>
`

export {
  breadCrumbContainerTemplate,
  breadCrumbItemTemplate
}