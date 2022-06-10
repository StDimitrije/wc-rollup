const headerComponentTemplate = document.createElement('template');
headerComponentTemplate.innerHTML = `
<header part="header-component">
  <slot name="header-slot"/>
</header>
`
export {
    headerComponentTemplate
}