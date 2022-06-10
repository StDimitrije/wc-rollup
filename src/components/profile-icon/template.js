const profileIconTemplate = document.createElement('template');
profileIconTemplate.innerHTML = `
  <div part="profile-icon" class="profile-icon">
    <p part="profile-icon-initials"></p>
    <div>
      <slot name="dropdown-container"/>
    </div>
  </div>
`;
export {
  profileIconTemplate
}