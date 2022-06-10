const cardContainerTemplate = document.createElement('template')
cardContainerTemplate.innerHTML = `
  <div part="card-container">
    <slot name="card-item"/>
  </div>
`
const statCardTemplate = document.createElement('template')
statCardTemplate.innerHTML = `
  <style>
    p {margin:0}
  </style>
  <div part="stat-card">
    <p part="stat-card-label"></p>
    <p part="stat-card-count"></p>
  </div>
`
const productCardTemplate = document.createElement('template')
productCardTemplate.innerHTML = `
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
      <p part="card-holder-info-muted" class="issues">Active, no issues</p>
      <p part="card-holder-info-muted" class="terms-conditions">T&C accepted</p>
      <p part="card-holder-info-muted" class="licence">License valid</p>
    </div>
  </div>
`;
const ctaCardtemplate = document.createElement('template')
ctaCardtemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<div part="cta-card">
  <p class="title" part="title"></p>
  <p class="subtitle" part="subtitle"></p>
  <slot name="cta-slot"/>
</div>
`

export {
  cardContainerTemplate,
  statCardTemplate,
  productCardTemplate,
  ctaCardtemplate
}