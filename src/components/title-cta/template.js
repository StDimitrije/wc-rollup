const titleCTAComponentTemplate = document.createElement('template');
titleCTAComponentTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<div class="title-cta-container" part="title-cta-container">
  <div class="title-wrapper">
  </div>
  <div part="button-wrapper">
    <slot name="cta-slot"/>
  </div>
</div>
`

export {
  titleCTAComponentTemplate
}