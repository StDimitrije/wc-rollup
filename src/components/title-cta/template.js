const titleCTAComponentTemplate = document.createElement('template');
titleCTAComponentTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
<div class="title-cta-container" part="title-cta-container">
  <p part="title-cta-text"></p>
  <slot name="cta-slot"/>
</div>
`

export {
  titleCTAComponentTemplate
}