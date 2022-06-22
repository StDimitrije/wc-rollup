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
const ctaCardTemplate = document.createElement('template')
ctaCardTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<div part="cta-card">
  <div>
    <p class="title" part="title"></p>
    <p class="subtitle" part="subtitle"></p>
  </div>
  <slot name="cta-slot"/>
</div>
`
const userCardTemplate = document.createElement('template')
userCardTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<div part="user-card">
  <div part="user-info">
    <div part="user-initials" class="user-initials-bg">
      <p class="user-initials"></p>
    </div>
    <div part="user-info-text-wrapper">
      <div part="user-info-name-wrapper">
        <p part="user-name" class="user-name"></p>
        <p part="activity" class="activity"></p>
      </div>
      <p part="user-email" class="user-email"></p>
      <p part="user-roles" class="user-roles"></p>
    </div>
  </div>
  <div part="button-wrapper">
    <slot name="button-slot"/>
  </div>
</div>
`

export {
  cardContainerTemplate,
  statCardTemplate,
  productCardTemplate,
  ctaCardTemplate,
  userCardTemplate,
}