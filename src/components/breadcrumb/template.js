const breadCrumbContainerTemplate = document.createElement('template');
breadCrumbContainerTemplate.innerHTML = `
<div part="breadcrumb-container">
  <div part="breadcrumb-nav-wrapper" class="breadcrumb-nav-wrapper">
    <div part="breadcrumb-nav-inline-items-wrapper">
      <div part="breadcrumb-icon-wrapper" class="breadcrumb-icon-wrapper">
        <slot name="breadcrumb-icon"/>
      </div>
      <ul part="breadcrumb-ul">
        <slot name="breadcrumb-item"/>
      </ul>
    </div>
  </div>
  <div part="breadcrumb-button-wrapper">
    <slot name="button-slot"/>
  </div>
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