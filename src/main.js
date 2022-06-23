import './main.css';

import './components/breadcrumb/breadcrumb.js';
import './components/header/header.js';
import './components/profile-icon/profile-icon.js';
import './components/dropdown/dropdown.js';
import './components/main-search/main-search.js';
import './components/logo/logo.js';
import './components/button/button.js';
import './components/sidenav/sidenav.js';
import './components/grid/grid.js';
import './components/card/card.js';
import './components/title-cta/title-cta.js';
import './components/filter/filter.js';
import './components/alert/alert.js';
import './components/drawer/drawer.js';

window.loadEventListener = "DOMContentLoaded"

function libConfig(options) {
  if (options.loadEventListener) {
    window.loadEventListener = options.loadEventListener;    
  }
  window.addEventListener(window.loadEventListener, () => {
  const content = document.querySelector('html')
  const myStorage = window.localStorage
  const mode = myStorage.getItem('mode')

  mode ? content.classList.add(mode) : myStorage.setItem('mode', 'light')

  function setMode(mode) {
    content.classList.remove('dark', 'light')
    content.classList.add(mode)
    myStorage.setItem('mode', mode)
  }
  document.querySelector('#toggleMode').onclick = function () {
    content.classList.contains('dark') ?
      setMode('light') :
      setMode('dark')
  }
})
};
window.libConfig = libConfig;



