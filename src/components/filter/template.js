const filterComponentTemplate = document.createElement('template')
filterComponentTemplate.innerHTML = `
<div part="custom-filter-container">
  <div part="custom-filter-input-container">
    <input part="custom-filter-input" type="text" placeholder="Search...">
    <div part="custom-filter-input-icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" part="custom-filter-input-icon" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    </div>
  </div>
  <button part="custom-filter-button-container">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path part="custom-filter-button-icon-svg-path" d="M4.25018 5.61C6.57018 8.59 10.0002 13 10.0002 13V18C10.0002 19.1 10.9002 20 12.0002 20C13.1002 20 14.0002 19.1 14.0002 18V13C14.0002 13 17.4302 8.59 19.7502 5.61C20.2602 4.95 19.7902 4 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z"/>
    </svg>
  </button>
</div>
`

export {
  filterComponentTemplate
}