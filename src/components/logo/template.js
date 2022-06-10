const logoComponentTemplate = document.createElement('template');
logoComponentTemplate.innerHTML = `
<style>
  p {margin:0}
</style>
  <a part="logo" href="">
    <img src="" width="60px" alt="">
    <p part="logo-title"></p>
  </a>
`;
export {
  logoComponentTemplate
}