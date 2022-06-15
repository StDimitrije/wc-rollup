(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n     color-adjust: unset;\n          print-color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n\n[type='radio']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\n\n[type='file']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\nbreadcrumb-component::part(breadcrumb-container) {\n  display: flex;\n  min-height: 32px;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 0.875rem;\n  border-width: 1px;\n  border-left-width: 0px;\n  border-top-width: 0px;\n  border-right-width: 0px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.dark breadcrumb-component::part(breadcrumb-container) {\n  border-color: rgb(209 213 219 / .20);\n}\n@media (min-width: 640px) {\n\n  breadcrumb-component::part(breadcrumb-container) {\n    flex-direction: row;\n  }\n}\nbreadcrumb-component::part(breadcrumb-nav-wrapper) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\nbreadcrumb-component::part(breadcrumb-ul) {\n  margin: 0px;\n  display: flex;\n  list-style-type: none;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0px;\n}\n@media (min-width: 640px) {\n\n  breadcrumb-component::part(breadcrumb-ul) {\n    gap: 0px;\n  }\n}\nbreadcrumb-component::part(breadcrumb-nav-inline-items-wrapper) {\n  display: flex;\n  gap: 0.25rem;\n}\nbreadcrumb-component::part(breadcrumb-button-wrapper) {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\nbreadcrumb-component::part(breadcrumb-icon-wrapper) {\n  display: flex;\n}\nbreadcrumb-component::part(breadcrumb-icon-wrapper-start) {\n  align-items: flex-start;\n}\nbreadcrumb-component::part(breadcrumb-icon-wrapper-center) {\n  align-items: center;\n}\nbreadcrumb-component::part(breadcrumb-li-a), breadcrumb-item::part(breadcrumb-li-a) {\n  margin-right: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  white-space: nowrap;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.dark breadcrumb-component::part(breadcrumb-li-a), .dark breadcrumb-item::part(breadcrumb-li-a) {\n  color: rgb(255 255 255 / .60);\n}\nbreadcrumb-component::part(breadcrumb-li-a-active), breadcrumb-item::part(breadcrumb-li-a-active) {\n  margin: 0px;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(29 43 57 / var(--tw-text-opacity));\n}\n.dark breadcrumb-component::part(breadcrumb-li-a-active), .dark breadcrumb-item::part(breadcrumb-li-a-active) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nbreadcrumb-item::part(arrow-next) {\n  fill: #4b5563;\n}\n.dark breadcrumb-item::part(arrow-next) {\n  fill: rgb(255 255 255 / 0.6);\n}\ndropdown-component::part(dropdown-modal) {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100vh;\n  width: 100vw;\n}\ndropdown-component::part(dropdown-modal-hidden) {\n  display: none;\n}\ndropdown-component::part(dropdown-modal-visible) {\n  display: block;\n}\ndropdown-component::part(dropdown-component) {\n  position: absolute;\n  top: 50px;\n  right: 20px;\n  z-index: 30;\n  margin: 0px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  list-style-type: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-shadow: 0px 8px 16px 0px rgba(0,0,0,0.12);\n  --tw-shadow-colored: 0px 8px 16px 0px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.dark dropdown-component::part(dropdown-component) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\ndropdown-item::part(profile-dropdown-item) {\n  display: flex;\n  border-radius: 0.25rem;\n}\ndropdown-item::part(profile-dropdown-item):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.dark dropdown-item::part(profile-dropdown-item):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 43 57 / var(--tw-bg-opacity));\n}\ndropdown-item::part(profile-dropdown-item-a) {\n  flex: 1 1 0%;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(39 53 67 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.dark dropdown-item::part(profile-dropdown-item-a) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nheader-component::part(header-component) {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  max-width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.dark header-component::part(header-component) {\n  border-color: rgb(209 213 219 / .20);\n  --tw-bg-opacity: 1;\n  background-color: rgb(32 43 56 / var(--tw-bg-opacity));\n}\nmain-search {\n  display: flex;\n  flex: 1 1 0%;\n  justify-content: center;\n}\nmain-search::part(main-search-form) {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n}\nmain-search::part(main-search-input) {\n  position: relative;\n  display: block;\n  width: calc(100% - 50px);\n  min-width: 45px;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 2.25rem;\n  padding-right: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\nmain-search::part(main-search-input):focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.dark main-search::part(main-search-input) {\n  border-color: rgb(209 213 219 / .20);\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.dark main-search::part(main-search-input)::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.dark main-search::part(main-search-input):-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.dark main-search::part(main-search-input)::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\nmain-search::part(main-search-input-icon) {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 0.5rem;\n  fill: #9ca3af;\n}\nprofile-icon::part(profile-icon) {\n  display: flex;\n  height: 2rem;\n  width: 2rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nprofile-icon::part(profile-icon-initials) {\n  margin: 0px;\n  --tw-text-opacity: 1;\n  color: rgb(19 33 47 / var(--tw-text-opacity));\n}\nlogo-component::part(logo) {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  gap: 0.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(39 53 67 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.dark logo-component::part(logo) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nlogo-component::part(logo-title) {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.button-success-fill, .button-success-outline, .button-neutral-fill, .button-neutral-outline, .button-danger-fill, .button-danger-outline, custom-button::part(custom-button) {\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n  border-radius: 0.375rem;\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(19 33 47 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.button-success-fill, custom-button::part(custom-button-success-fill) {\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 192 88 / var(--tw-bg-opacity));\n}\n.button-success-fill:hover, custom-button::part(custom-button-success-fill):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(134 182 78 / var(--tw-bg-opacity));\n}\n.button-success-outline, custom-button::part(custom-button-success-outline) {\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(134 182 78 / var(--tw-border-opacity));\n  background-color: transparent;\n}\n.button-success-outline:hover, custom-button::part(custom-button-success-outline):hover {\n  background-color: rgb(144 192 88 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}\n.dark .button-success-outline, .dark custom-button::part(custom-button-success-outline) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.button-neutral-fill, custom-button::part(custom-button-neutral-fill) {\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: rgb(125 192 255 / var(--tw-bg-opacity));\n}\n.button-neutral-fill:hover, custom-button::part(custom-button-neutral-fill):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(119 184 244 / var(--tw-bg-opacity));\n}\n.button-neutral-outline, custom-button::part(custom-button-neutral-outline) {\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(125 192 255 / var(--tw-border-opacity));\n  background-color: transparent;\n}\n.button-neutral-outline:hover, custom-button::part(custom-button-neutral-outline):hover {\n  background-color: rgb(125 192 255 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}\n.dark .button-neutral-outline, .dark custom-button::part(custom-button-neutral-outline) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.button-danger-fill, custom-button::part(custom-button-danger-fill) {\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.button-danger-fill:hover, custom-button::part(custom-button-danger-fill):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n.button-danger-outline, custom-button::part(custom-button-danger-outline) {\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(239 68 68 / var(--tw-border-opacity));\n  background-color: transparent;\n}\n.button-danger-outline:hover, custom-button::part(custom-button-danger-outline):hover {\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}\n.dark .button-danger-outline, .dark custom-button::part(custom-button-danger-outline) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nutil-button::part(util-button) {\n  display: flex;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-items: center;\n  gap: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(29 43 57 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.dark util-button::part(util-button) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nsidenav-component {\n  display: flex;\n}\nsidenav-component::part(sidenav-container) {\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  flex-direction: column;\n  overflow-y: scroll;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.dark sidenav-component::part(sidenav-container) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(32 43 56 / var(--tw-bg-opacity));\n}\nsidenav-component::part(sidenav-container-gap) {\n  gap: 0.5rem;\n}\nsidenav-component::part(sidenav-container-collapsed) {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 40px;\n}\nsidenav-component::part(sidenav-container-expanded) {\n  min-width: 200px;\n}\nsidenav-component::part(sidenav-container-border-r) {\n  border-width: 1px;\n  border-left-width: 0px;\n  border-top-width: 0px;\n  border-bottom-width: 0px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.dark sidenav-component::part(sidenav-container-border-r) {\n  border-color: rgb(209 213 219 / .20);\n}\nsidenav-component::part(sidenav-container-border-l) {\n  border-width: 1px;\n  border-right-width: 0px;\n  border-top-width: 0px;\n  border-bottom-width: 0px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.dark sidenav-component::part(sidenav-container-border-l) {\n  border-color: rgb(209 213 219 / .20);\n}\nsidenav-component::part(sidenav-arrow) {\n  height: 27px;\n  min-height: 27px;\n  width: 16px;\n  cursor: pointer;\n  flex-direction: column;\n}\nsidenav-component::part(sidenav-arrow-visible) {\n  display: flex;\n}\nsidenav-component::part(sidenav-arrow-hidden) {\n  display: none;\n}\nsidenav-component::part(sidenav-arrow-start) {\n  align-self: flex-start;\n}\nsidenav-component::part(sidenav-arrow-end) {\n  align-self: flex-end;\n}\nsidenav-component::part(sidenav-arrow-center) {\n  align-self: center;\n}\nsidenav-component::part(sidenav-arrow-span-1), sidenav-component::part(sidenav-arrow-span-2) {\n  display: block;\n  height: 2px;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 73 113 / var(--tw-bg-opacity));\n}\n.dark sidenav-component::part(sidenav-arrow-span-1), .dark sidenav-component::part(sidenav-arrow-span-2) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\nsidenav-component::part(sidenav-arrow-span-1-left) {\n  --tw-translate-y: 9px;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\nsidenav-component::part(sidenav-arrow-span-2-left) {\n  --tw-translate-y: 17px;\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\nsidenav-component::part(sidenav-arrow-span-1-right) {\n  --tw-translate-y: 9px;\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\nsidenav-component::part(sidenav-arrow-span-2-right) {\n  --tw-translate-y: 17px;\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\nsidenav-ul-component::part(sidenav-ul-component) {\n  margin: 0px;\n  display: flex;\n  list-style-type: none;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0px;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\nsidenav-ul-component::part(sidenav-ul-component-wrapper) {\n  display: flex;\n  flex-direction: column;\n}\nsidenav-ul-item::part(sidenav-ul-item) {\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\nsubmenu-item::part(submenu-item-hover):hover, sidenav-ul-item::part(sidenav-ul-item-hover):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n.dark submenu-item::part(submenu-item-hover):hover, .dark sidenav-ul-item::part(sidenav-ul-item-hover):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\nsubmenu-item::part(submenu-item-active), sidenav-ul-item::part(sidenav-ul-item-active) {\n  background-color: #90C05826;\n}\n.dark submenu-item::part(submenu-item-active), .dark sidenav-ul-item::part(sidenav-ul-item-active) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 83 123 / var(--tw-bg-opacity));\n}\nsidenav-ul-item::part(sidenav-ul-item-a) {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.dark sidenav-ul-item::part(sidenav-ul-item-a) {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\nsidenav-ul-item::part(sidenav-ul-item-a-text) {\n  margin-left: 0.5rem;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\nsidenav-ul-item::part(sidenav-ul-item-a-text-visible) {\n  display: flex;\n}\nsidenav-ul-item::part(sidenav-ul-item-a-text-hidden) {\n  margin-left: 0px;\n  display: none;\n}\nsidenav-util-component::part(sidenav-util-component) {\n  width: 300px;\n  flex-direction: column;\n  padding-bottom: 1.25rem;\n}\nsidenav-util-component::part(sidenav-util-component-visible) {\n  display: flex;\n}\nsidenav-util-component::part(sidenav-util-component-hidden) {\n  display: none;\n}\nsidenav-util-component::part(sidenav-util-component-title) {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n}\nsidenav-util-component::part(sidenav-util-component-ul), submenu-ul-component::part(submenu-ul-component-ul) {\n  margin: 0px;\n  margin-bottom: 0.75rem;\n  margin-top: 0.625rem;\n  display: flex;\n  list-style-type: none;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0px;\n}\nsidenav-util-component::part(sidenav-util-component-button) {\n  width: 100%;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  border-width: 0px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(125 192 255 / var(--tw-bg-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(19 33 47 / var(--tw-text-opacity));\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n@media (min-width: 640px) {\n\n  sidenav-util-component::part(sidenav-util-component-button) {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\nsidenav-util-item::part(sidenav-util-item) {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  padding: 0.375rem;\n  --tw-text-opacity: 1;\n  color: rgb(29 43 57 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\nsidenav-util-item::part(sidenav-util-item):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n.dark sidenav-util-item::part(sidenav-util-item):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\nsidenav-util-item::part(sidenav-util-item-info) {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  overflow: hidden;\n}\nsidenav-util-item::part(sidenav-util-item-text) {\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.dark sidenav-util-item::part(sidenav-util-item-text) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\nsidenav-util-item::part(sidenav-util-item-title) {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\nsidenav-util-item::part(sidenav-util-item-title-name) {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\nsidenav-util-item::part(sidenav-util-item-svg-path) {\n  fill: #475569;\n}\n.dark sidenav-util-item::part(sidenav-util-item-svg-path) {\n  fill: #fff;\n}\nsidenav-util-item::part(sidenav-util-item-deployment) {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\nsidenav-util-item::part(sidenav-util-item-last-active) {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\nsidenav-util-item::part(sidenav-util-item-img), submenu-component::part(submenu-component-img) {\n  max-height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\nsubmenu-component::part(submenu-component-img-title-wrapper) {\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n  padding-bottom: 1.25rem;\n}\n.dark submenu-component::part(submenu-component-img-title-wrapper) {\n  border-color: rgb(209 213 219 / .20);\n}\nsubmenu-ul-component::part(submenu-ul-component) {\n  margin-bottom: 1.25rem;\n  min-width: 200px;\n}\nsubmenu-ul-component::part(submenu-ul-component-title) {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\nsubmenu-item::part(submenu-item) {\n  display: flex;\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\nsubmenu-item::part(submenu-item-a) {\n  width: 100%;\n  flex: 1 1 0%;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.dark submenu-item::part(submenu-item-a) {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\ngrid-item::part(grid-item-text) {\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.dark grid-item::part(grid-item-text) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\ngrid-item::part(grid-item-deployments) {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  opacity: 0.8;\n}\n.dark grid-item::part(grid-item-deployments) {\n  opacity: 0.6;\n}\ngrid-item::part(grid-item-img) {\n  max-height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\ngrid-item::part(grid-item) {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  padding: 0.375rem;\n  --tw-text-opacity: 1;\n  color: rgb(39 53 67 / var(--tw-text-opacity));\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\ngrid-item::part(grid-item):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n.dark grid-item::part(grid-item):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\ngrid-container::part(grid-container) {\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 0.5rem;\n}\n@media (min-width: 768px) {\n\n  grid-container::part(grid-container) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1024px) {\n\n  grid-container::part(grid-container) {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1280px) {\n\n  grid-container::part(grid-container) {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\ncard-container::part(card-container) {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\nstat-card::part(stat-card) {\n  min-width: 130px;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n  padding: 0.75rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.dark stat-card::part(stat-card) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\nstat-card::part(stat-card-label) {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\nstat-card::part(stat-card-count) {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 500;\n}\nproduct-card::part(card-container) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n  padding: 0.75rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.dark product-card::part(card-container) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\nproduct-card::part(card-holder) {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 0.75rem;\n}\nproduct-card::part(card-holder-header) {\n  display: flex;\n  gap: 0.5rem;\n}\nproduct-card::part(card-holder-name) {\n  font-weight: 500;\n}\nproduct-card::part(card-holder-info) {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\nproduct-card::part(card-holder-info-muted) {\n  opacity: 0.7;\n}\nproduct-card::part(card-holder-info-medium) {\n  font-weight: 500;\n}\nproduct-card::part(deployment-time) {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\ncta-card::part(cta-card) {\n  display: flex;\n  min-width: 130px;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n  padding: 0.75rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.dark cta-card::part(cta-card) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\ncta-card::part(title) {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  line-height: 1;\n  opacity: 0.7;\n}\ncta-card::part(subtitle) {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 600;\n}\ntitle-cta::part(title-cta-container) {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding-bottom: 1rem;\n}\ntitle-cta::part(title-cta-text) {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 500;\n}\ntitle-cta::part(title-cta-container-border) {\n  border-width: 1px;\n  border-top-width: 0px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.dark title-cta::part(title-cta-container-border) {\n  border-color: rgb(209 213 219 / .20);\n}\ncustom-filter {\n  display: flex;\n  flex: 1 1 0%;\n}\ncustom-filter::part(custom-filter-container) {\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n@media (min-width: 640px) {\n\n  custom-filter::part(custom-filter-container) {\n    justify-content: flex-end;\n  }\n}\ncustom-filter::part(custom-filter-input-container) {\n  position: relative;\n  width: 100%;\n  min-width: 150px;\n  max-width: 300px;\n}\ncustom-filter::part(custom-filter-input) {\n  position: relative;\n  display: block;\n  width: calc(100% - 50px);\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 2.25rem;\n  padding-right: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\ncustom-filter::part(custom-filter-input):focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.dark custom-filter::part(custom-filter-input) {\n  border-color: rgb(209 213 219 / .20);\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.dark custom-filter::part(custom-filter-input)::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.dark custom-filter::part(custom-filter-input):-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.dark custom-filter::part(custom-filter-input)::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\ncustom-filter::part(custom-filter-input-icon-container) {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  padding: 0.5rem;\n}\ncustom-filter::part(custom-filter-input-icon) {\n  fill: #9ca3af;\n}\ncustom-filter::part(custom-filter-button-container) {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\ncustom-filter::part(custom-filter-button-container):active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.dark custom-filter::part(custom-filter-button-container) {\n  border-color: rgb(209 213 219 / .20);\n}\n.dark custom-filter::part(custom-filter-button-container):active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\ncustom-filter::part(custom-filter-button-icon-svg-path) {\n  fill: #90C058;\n}\nalert-component::part(alert-component) {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n@media (min-width: 768px) {\n\n  alert-component::part(alert-component) {\n    gap: 1.25rem;\n  }\n}\ncustom-alert::part(alert-wrapper) {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\ncustom-alert::part(alert-text) {\n  margin: 0px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n}\ntable {\n  width: 100%;\n  white-space: nowrap;\n  text-align: left;\n}\nth, td {\n  padding: 0.625rem;\n}\nth:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\nth:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\ntd:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\ntd:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\nthead tr {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n.dark thead tr {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\ntbody tr {\n  border-radius: 0.5rem;\n}\ntbody tr:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n}\n.dark tbody tr:nth-child(even) {\n  background-color: rgb(17 24 39 / 0.4);\n}\ntbody .clickable-row {\n  cursor: pointer;\n}\ntbody .clickable-row:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n.dark tbody .clickable-row:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\n.cell-w-btn {\n  padding: 0px;\n}\n.table-action-btn {\n  display: inline-flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  padding: 0.375rem;\n  font-weight: 500;\n}\n.table-action-btn:hover {\n  background-color: #90C05826;\n}\n.dark .table-action-btn:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 83 123 / var(--tw-bg-opacity));\n}\n.pagination-wrapper {\n  margin-top: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.pagination {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-item {\n  border-radius: 9999px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-weight: 400;\n  line-height: 1;\n}\n.pagination-item:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n.dark .pagination-item:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\n.pagination-item-active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 192 88 / var(--tw-bg-opacity));\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.pagination-item-active:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 192 88 / var(--tw-bg-opacity));\n}\n.button {\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(31 73 113 / var(--tw-border-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(29 43 57 / var(--tw-text-opacity));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.button:hover {\n  background-color: rgb(31 73 113 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.1;\n}\n.dark .button {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n@media (min-width: 640px) {\n\n  .button {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n.input {\n  display: block;\n  width: 100%;\n  border-radius: 0.25rem;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.input:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.dark .input {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\n.icon-fill {\n  fill: #1F4971;\n}\n.dark .icon-fill {\n  fill: #e5e7eb;\n}\n.fill-button-icon {\n  fill: #13212F;\n}\n.outline-button-icon {\n  fill: #13212F;\n}\n.dark .outline-button-icon {\n  fill: #e5e7eb;\n}\n.breadcrumb-icon-fill {\n  fill: #1D2B39;\n}\n.dark .breadcrumb-icon-fill {\n  fill: #e5e7eb;\n}\n.fixed {\n  position: fixed;\n}\n.bottom-1 {\n  bottom: 0.25rem;\n}\n.right-1 {\n  right: 0.25rem;\n}\n.z-50 {\n  z-index: 50;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-7 {\n  gap: 1.75rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-primary {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 73 113 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n.bg-accent {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 192 88 / var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.fill-primary {\n  fill: #1F4971;\n}\n.fill-dark-3 {\n  fill: #13212F;\n}\n.fill-dark-2 {\n  fill: #1D2B39;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-dark-2 {\n  --tw-text-opacity: 1;\n  color: rgb(29 43 57 / var(--tw-text-opacity));\n}\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.backdrop-blur-xl {\n  --tw-backdrop-blur: blur(24px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\nhtml {\n  image-rendering: -webkit-optimize-contrast;\n}\nimg {\n  height: 100%;\n}\nsvg {\n  margin: 0 auto;\n}\n.even\\:bg-slate-50:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n}\n.hover\\:bg-slate-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n.hover\\:bg-accent-15:hover {\n  background-color: #90C05826;\n}\n.hover\\:bg-accent:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 192 88 / var(--tw-bg-opacity));\n}\n.hover\\:bg-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 73 113 / var(--tw-bg-opacity));\n}\n.hover\\:bg-opacity-10:hover {\n  --tw-bg-opacity: 0.1;\n}\n.focus\\:border-blue-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.dark .dark\\:block {\n  display: block;\n}\n.dark .dark\\:hidden {\n  display: none;\n}\n.dark .dark\\:border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.dark .dark\\:bg-dark-3 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 33 47 / var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-dark-1 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\n.dark .dark\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.dark .dark\\:even\\:bg-gray-900\\/\\[0\\.4\\]:nth-child(even) {\n  background-color: rgb(17 24 39 / 0.4);\n}\n.dark .dark\\:hover\\:bg-dark-1:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 53 67 / var(--tw-bg-opacity));\n}\n.dark .hover\\:dark\\:bg-primary-light:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 83 123 / var(--tw-bg-opacity));\n}\n@media (min-width: 640px) {\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}";
  styleInject(css_248z);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var breadCrumbContainerTemplate = document.createElement('template');
  breadCrumbContainerTemplate.innerHTML = "\n<div part=\"breadcrumb-container\">\n  <div part=\"breadcrumb-nav-wrapper\" class=\"breadcrumb-nav-wrapper\">\n    <div part=\"breadcrumb-nav-inline-items-wrapper\">\n      <div part=\"breadcrumb-icon-wrapper\" class=\"breadcrumb-icon-wrapper\">\n        <slot name=\"breadcrumb-icon\"/>\n      </div>\n      <ul part=\"breadcrumb-ul\">\n        <slot name=\"breadcrumb-item\"/>\n      </ul>\n    </div>\n  </div>\n  <div part=\"breadcrumb-button-wrapper\">\n    <slot name=\"button-slot\"/>\n  </div>\n</div>\n";
  var breadCrumbItemTemplate = document.createElement('template');
  breadCrumbItemTemplate.innerHTML = "\n<style>\n  p {margin:0}\n</style>\n<li>\n  <a part=\"breadcrumb-li-a\" href=\"\">\n    <p part=\"breadcrumb-a-text\"></p>\n  </a>\n</li>\n";

  customElements.define('breadcrumb-component', /*#__PURE__*/function (_HTMLElement) {
    _inherits(BreadCrumbContainer, _HTMLElement);

    var _super = _createSuper(BreadCrumbContainer);

    function BreadCrumbContainer() {
      var _this;

      _classCallCheck(this, BreadCrumbContainer);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(breadCrumbContainerTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(BreadCrumbContainer, [{
      key: "toggleActiveItem",
      value: function toggleActiveItem() {
        var items = document.querySelectorAll('breadcrumb-item');
        var itemsList = [];

        var _iterator = _createForOfIteratorHelper(items),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            itemsList.push(item.shadowRoot.querySelector('a'));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var lastItem = itemsList[itemsList.length - 1];
        lastItem.removeChild(lastItem.lastChild);
        lastItem.part.add('breadcrumb-li-a-active');

        if (itemsList.length > 1) {
          var navWrapper = this.shadowRoot.querySelector('.breadcrumb-nav-wrapper');
          navWrapper.appendChild(lastItem);
          this.shadowRoot.querySelector('.breadcrumb-icon-wrapper').part.add('breadcrumb-icon-wrapper-start');
        } else {
          this.shadowRoot.querySelector('.breadcrumb-icon-wrapper').part.add('breadcrumb-icon-wrapper-center');
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        window.addEventListener(window.loadEventListener, function () {
          return _this2.toggleActiveItem();
        });
      }
    }]);

    return BreadCrumbContainer;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('breadcrumb-item', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(BreadCrumbItem, _HTMLElement2);

    var _super2 = _createSuper(BreadCrumbItem);

    function BreadCrumbItem() {
      var _this3;

      _classCallCheck(this, BreadCrumbItem);

      _this3 = _super2.call(this);
      _this3.showInfo = true;

      _this3.attachShadow({
        mode: 'open'
      });

      _this3.shadowRoot.appendChild(breadCrumbItemTemplate.content.cloneNode(true));

      return _this3;
    }

    _createClass(BreadCrumbItem, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        var link = this.shadowRoot.querySelector('a');
        link.href = this.getAttribute('href');
        link.innerHTML = this.getAttribute('title') + "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\"><path part=\"arrow-next\" d=\"M7.833 15 6.583 13.75 10.333 10 6.583 6.25 7.833 5 12.833 10Z\"/></svg>";
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var attrNames = this.getAttributeNames();

        var _iterator2 = _createForOfIteratorHelper(attrNames),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var attr = _step2.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['href', 'title'];
      }
    }]);

    return BreadCrumbItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var headerComponentTemplate = document.createElement('template');
  headerComponentTemplate.innerHTML = "\n<header part=\"header-component\">\n  <slot name=\"header-slot\"/>\n</header>\n";

  customElements.define('header-component', /*#__PURE__*/function (_HTMLElement) {
    _inherits(HeaderComponent, _HTMLElement);

    var _super = _createSuper(HeaderComponent);

    function HeaderComponent() {
      var _this;

      _classCallCheck(this, HeaderComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(headerComponentTemplate.content.cloneNode(true));

      return _this;
    }

    return _createClass(HeaderComponent);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var profileIconTemplate = document.createElement('template');
  profileIconTemplate.innerHTML = "\n  <div part=\"profile-icon\" class=\"profile-icon\">\n    <p part=\"profile-icon-initials\"></p>\n    <div>\n      <slot name=\"dropdown-container\"/>\n    </div>\n  </div>\n";

  customElements.define('profile-icon', /*#__PURE__*/function (_HTMLElement) {
    _inherits(ProfileIcon, _HTMLElement);

    var _super = _createSuper(ProfileIcon);

    function ProfileIcon() {
      var _this;

      _classCallCheck(this, ProfileIcon);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(profileIconTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(ProfileIcon, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('.profile-icon').style.backgroundColor = this.getAttribute('color');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('initials');
      }
    }]);

    return ProfileIcon;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var customDropdownComponentTemplate = document.createElement('template');
  customDropdownComponentTemplate.innerHTML = "\n<div class=\"dropdown-modal\" part=\"dropdown-modal dropdown-modal-hidden\">\n  <ul part=\"dropdown-component\" class=\"dropdown-component\" >\n    <slot name=\"dropdown-item\"/>\n  </ul>\n</div>\n";
  var customDropdownItemTemplate = document.createElement('template');
  customDropdownItemTemplate.innerHTML = "\n  <li part=\"profile-dropdown-item\">\n    <a part=\"profile-dropdown-item-a\" href=\"\"></a>\n  </li>\n";

  customElements.define('dropdown-component', /*#__PURE__*/function (_HTMLElement) {
    _inherits(CustomDropdownComponent, _HTMLElement);

    var _super = _createSuper(CustomDropdownComponent);

    function CustomDropdownComponent() {
      var _this;

      _classCallCheck(this, CustomDropdownComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(customDropdownComponentTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(CustomDropdownComponent, [{
      key: "toggleDropdown",
      value: function toggleDropdown(profileDropdown) {
        profileDropdown.part.toggle('dropdown-modal-hidden');
        profileDropdown.part.toggle('dropdown-modal-visible');
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        var profileDropdown = this.shadowRoot.querySelector('.dropdown-modal');
        document.querySelector('profile-icon').addEventListener('click', function () {
          return _this2.toggleDropdown(profileDropdown);
        });
      }
    }]);

    return CustomDropdownComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('dropdown-item', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(CustomDropdownItem, _HTMLElement2);

    var _super2 = _createSuper(CustomDropdownItem);

    function CustomDropdownItem() {
      var _this3;

      _classCallCheck(this, CustomDropdownItem);

      _this3 = _super2.call(this);
      _this3.showInfo = true;

      _this3.attachShadow({
        mode: 'open'
      });

      _this3.shadowRoot.appendChild(customDropdownItemTemplate.content.cloneNode(true));

      return _this3;
    }

    _createClass(CustomDropdownItem, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        var link = this.shadowRoot.querySelector('a');
        link.href = this.getAttribute('href');
        link.innerText = this.getAttribute('title');
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var attrNames = this.getAttributeNames();

        var _iterator = _createForOfIteratorHelper(attrNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['title', 'href'];
      }
    }]);

    return CustomDropdownItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var mainSearch = document.createElement('template');
  mainSearch.innerHTML = "\n  <form part=\"main-search-form\">\n    <input part=\"main-search-input\" type=\"text\">\n    <div part=\"main-search-input-icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" part=\"main-search-input-icon\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>\n    </div>\n  </form>\n";

  customElements.define('main-search', /*#__PURE__*/function (_HTMLElement) {
    _inherits(MainSearch, _HTMLElement);

    var _super = _createSuper(MainSearch);

    function MainSearch() {
      var _this;

      _classCallCheck(this, MainSearch);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(mainSearch.content.cloneNode(true));

      return _this;
    }

    _createClass(MainSearch, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var form = this.shadowRoot.querySelector('form');

        if (this.getAttribute('action') != null) {
          form.action = this.getAttribute('action');
        }

        if (this.getAttribute('method') != null) {
          form.method = this.getAttribute('method');
        } else {
          form.method = 'POST';
        }

        var input = this.shadowRoot.querySelector('input');

        if (this.getAttribute('placeholder')) {
          input.placeholder = this.getAttribute('placeholder');
        }

        if (this.getAttribute('name') != null) {
          input.name = this.getAttribute('name');
        } else {
          input.name = 'query';
        }
      }
    }]);

    return MainSearch;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var logoComponentTemplate = document.createElement('template');
  logoComponentTemplate.innerHTML = "\n<style>\n  p {margin:0}\n</style>\n  <a part=\"logo\" href=\"\">\n    <img src=\"\" width=\"60px\" alt=\"\">\n    <p part=\"logo-title\"></p>\n  </a>\n";

  customElements.define('logo-component', /*#__PURE__*/function (_HTMLElement) {
    _inherits(LogoComponent, _HTMLElement);

    var _super = _createSuper(LogoComponent);

    function LogoComponent() {
      var _this;

      _classCallCheck(this, LogoComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(logoComponentTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(LogoComponent, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        this.shadowRoot.querySelector('a').href = this.getAttribute('link');
        this.shadowRoot.querySelector('img').src = this.getAttribute('imageSrc');
        this.shadowRoot.querySelector('img').alt = this.getAttribute('imageAlt');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('organization');
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var attrNames = this.getAttributeNames();

        var _iterator = _createForOfIteratorHelper(attrNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['imageSrc', 'link', 'organization'];
      }
    }]);

    return LogoComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var buttonTemplate = document.createElement('template');
  buttonTemplate.innerHTML = "\n  <a href=\"\" part=\"custom-button\">\n    <slot name=\"icon-slot\"/>\n  </a>\n";
  var utilButtonTemplate = document.createElement('template');
  utilButtonTemplate.innerHTML = "\n<a part=\"util-button\" href=\"\"></a>\n";

  customElements.define('custom-button', /*#__PURE__*/function (_HTMLElement) {
    _inherits(CustomButton, _HTMLElement);

    var _super = _createSuper(CustomButton);

    function CustomButton() {
      var _this;

      _classCallCheck(this, CustomButton);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(CustomButton, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var attrNames = this.getAttributeNames();

        var _iterator = _createForOfIteratorHelper(attrNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var customBtn = this.shadowRoot.querySelector('a');
        customBtn.href = this.getAttribute('href');
        customBtn.innerHTML += this.getAttribute('title');
        var variant = this.getAttribute('variant');
        var color = this.getAttribute('color');

        if (variant == 'fill') {
          if (color == 'success') {
            customBtn.part.add('custom-button-success-fill');
          } else if (color == 'neutral') {
            customBtn.part.add('custom-button-neutral-fill');
          } else if (color == 'danger') {
            customBtn.part.add('custom-button-danger-fill');
          }
        } else if (variant == 'outline') {
          if (color == 'success') {
            customBtn.part.add('custom-button-success-outline');
          } else if (color == 'neutral') {
            customBtn.part.add('custom-button-neutral-outline');
          } else if (color == 'danger') {
            customBtn.part.add('custom-button-danger-outline');
          }
        } else {
          customBtn.part.add('custom-button-success-fill');

          if (color == 'success') {
            customBtn.part.add('custom-button-success-outline');
          } else if (color == 'neutral') {
            customBtn.part.add('custom-button-neutral-outline');
          } else if (color == 'danger') {
            customBtn.part.add('custom-button-danger-outline');
          } else {
            customBtn.part.add('custom-button-neutral-outline');
          }
        }
      }
    }]);

    return CustomButton;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('util-button', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(UtilButton, _HTMLElement2);

    var _super2 = _createSuper(UtilButton);

    function UtilButton() {
      var _this2;

      _classCallCheck(this, UtilButton);

      _this2 = _super2.call(this);
      _this2.showInfo = true;

      _this2.attachShadow({
        mode: 'open'
      });

      _this2.shadowRoot.appendChild(utilButtonTemplate.content.cloneNode(true));

      return _this2;
    }

    _createClass(UtilButton, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var button = this.shadowRoot.querySelector('a');
        button.href = this.getAttribute('href');

        switch (this.getAttribute('variant')) {
          case 'share':
            button.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z\" fill=\"#90C058\"/>\n            </svg>\n          " + this.getAttribute('title');
            break;

          case 'settings':
            button.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5398 5.05 19.2698 4.97 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.71984 4.96 4.45984 5.05 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.45984 18.95 4.72984 19.03 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.2798 19.04 19.5398 18.95 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM11.9998 15.5C10.0698 15.5 8.49984 13.93 8.49984 12C8.49984 10.07 10.0698 8.5 11.9998 8.5C13.9298 8.5 15.4998 10.07 15.4998 12C15.4998 13.93 13.9298 15.5 11.9998 15.5Z\" fill=\"#90C058\"/>\n            </svg>\n          " + this.getAttribute('title');
            break;
        }

        var attrNames = this.getAttributeNames();

        var _iterator2 = _createForOfIteratorHelper(attrNames),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var attr = _step2.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }]);

    return UtilButton;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var sideNavComponentTemplate = document.createElement('template');
  sideNavComponentTemplate.innerHTML = "\n  <div part=\"sidenav-container\" class=\"sidenav-container\">\n    <div part=\"sidenav-arrow sidenav-arrow-hidden\" class=\"sidenav-arrow\">\n      <span part=\"sidenav-arrow-span-1\"></span>\n      <span part=\"sidenav-arrow-span-2\"></span>\n    </div>\n    <div>\n      <slot name=\"sidenav-component\"/>\n    </div>\n  </div> \n";
  var sideNavUlComponentTemplate = document.createElement('template');
  sideNavUlComponentTemplate.innerHTML = "\n  <div part=\"sidenav-ul-component-wrapper\">\n    <ul part=\"sidenav-ul-component\">\n      <slot name=\"sidenav-ul-item\"/>\n    </ul> \n  </div>\n";
  var sideNavUlItemTemplate = document.createElement('template');
  sideNavUlItemTemplate.innerHTML = "\n  <style>\n    p {margin: 0}\n  </style>\n  <li part=\"sidenav-ul-item sidenav-ul-item-hover\" class=\"sidenav-ul-item\">\n    <a part=\"sidenav-ul-item-a\" href=\"\">\n      <div class=\"sidenav-ul-item-icon\">\n        <slot name=\"icon-slot\"/>\n      </div>\n      <p class=\"sidenav-item-text\"></p>\n    </a>\n  </li>\n";
  var sideNavUtilComponentTemplate = document.createElement('template');
  sideNavUtilComponentTemplate.innerHTML = "\n  <style>\n    p {margin: 0}\n  </style>\n  <div class=\"sidenav-util-component\" part=\"sidenav-util-component\">\n    <p part=\"sidenav-util-component-title\"></p>\n    <ul part=\"sidenav-util-component-ul\">\n      <slot name=\"sidenav-util-item\"/>\n    </ul>\n    <button part=\"sidenav-util-component-button\"></button>\n  </div>\n";
  var sideNavUtilItem = document.createElement('template');
  sideNavUtilItem.innerHTML = "\n  <style>\n  p {margin: 0}\n  </style>\n  <li class=sidenav-util-li\">\n    <a part=\"sidenav-util-item\" href=\"\">\n      <div part=\"sidenav-util-item-info\">\n        <img part=\"sidenav-util-item-img\" src=\"\" alt=\"\" width=\"45px\" height=\"45px\">\n        <div part=\"sidenav-util-item-text\">\n          <div part=\"sidenav-util-item-title\" class=\"sidenav-util-item-title\">\n            <p part=\"sidenav-util-item-title-name\"></p>\n            <p part=\"sidenav-util-item-last-active\"></p>\n          </div>\n          <p part=\"sidenav-util-item-deployment\" class=\"sidenav-util-item-deployment\"></p>\n        </div>\n      </div>\n      <svg style=\"min-width: 24px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g opacity=\"0.7\">\n          <path part=\"sidenav-util-item-svg-path\" d=\"M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z\" fill=\"#323232\"/>\n        </g>\n      </svg>\n    </a>\n  </li>\n";
  var sideNavSubmenuComponentTemplate = document.createElement('template');
  sideNavSubmenuComponentTemplate.innerHTML = "\n<style>\n  p {margin: 0}\n</style>\n<div>\n  <div part=\"submenu-component-img-title-wrapper\">\n    <img src=\"\" width=\"45px\" height=\"45px\" part=\"submenu-component-img\"/>\n    <p></p>\n  </div>\n  <slot name=\"submenu-container\"/>\n</div>\n";
  var sideNavSubmenuUlComponentTemplate = document.createElement('template');
  sideNavSubmenuUlComponentTemplate.innerHTML = "\n<style>\n  p {margin: 0}\n</style>\n<div class=\"submenu-ul-component\" part=\"submenu-ul-component\">\n  <p part=\"submenu-ul-component-title\"></p>\n  <ul part=\"submenu-ul-component-ul\">\n    <slot name=\"submenu-item\"/>\n  </ul>\n</div>\n";
  var sideNavSubmenuItemTemplate = document.createElement('template');
  sideNavSubmenuItemTemplate.innerHTML = "\n<li part=\"submenu-item submenu-item-hover\" class=\"submenu-item\">\n  <a href=\"\" part=\"submenu-item-a\"></a>\n</li>\n";

  customElements.define('sidenav-component', /*#__PURE__*/function (_HTMLElement) {
    _inherits(SideNavComponent, _HTMLElement);

    var _super = _createSuper(SideNavComponent);

    function SideNavComponent() {
      var _this;

      _classCallCheck(this, SideNavComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(sideNavComponentTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(SideNavComponent, [{
      key: "expandSideNav",
      value: function expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable) {
        if (isExpandable != 'false') {
          if (isUtil == 'true' && localStorage.getItem('sidenav-util-expanded') != 'false') {
            sideNavContainer.part.remove('sidenav-container-collapsed');
            sideNavContainer.part.add('sidenav-container-expanded');
            var utilComponent = document.querySelectorAll('sidenav-util-component');

            var _iterator = _createForOfIteratorHelper(utilComponent),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.shadowRoot.querySelector('.sidenav-util-component').part.remove('sidenav-util-component-hidden');
                item.shadowRoot.querySelector('.sidenav-util-component').part.add('sidenav-util-component-visible');
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            sideNavArrow.part.add('sidenav-arrow-start');
            sideNavArrow.part.remove('sidenav-arrow-center');
            sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-left');
            sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-left');
            sideNavArrow.children[0].part.add('sidenav-arrow-span-1-right');
            sideNavArrow.children[1].part.add('sidenav-arrow-span-2-right');
          }

          if (isUtil != 'true' && localStorage.getItem('sidenav-expanded') != 'false') {
            sideNavContainer.part.remove('sidenav-container-collapsed');
            sideNavContainer.part.add('sidenav-container-expanded');
            var ulComponentItems = document.querySelectorAll('sidenav-ul-item');

            var _iterator2 = _createForOfIteratorHelper(ulComponentItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _item = _step2.value;

                var sideNavItemText = _item.shadowRoot.querySelector('.sidenav-ul-item-a-text');

                sideNavItemText.part.add('sidenav-ul-item-a-text-visible');
                sideNavItemText.part.remove('sidenav-ul-item-a-text-hidden');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            sideNavArrow.part.add('sidenav-arrow-end');
            sideNavArrow.part.remove('sidenav-arrow-center');
            sideNavArrow.children[0].part.add('sidenav-arrow-span-1-left');
            sideNavArrow.children[1].part.add('sidenav-arrow-span-2-left');
            sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-right');
            sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-right');
          }
        }
      }
    }, {
      key: "collapseSideNav",
      value: function collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable) {
        if (isExpandable != 'false') {
          if (isUtil == 'true' && localStorage.getItem('sidenav-util-expanded') == 'false') {
            sideNavContainer.part.remove('sidenav-container-expanded');
            sideNavContainer.part.add('sidenav-container-collapsed');
            var utilComponent = document.querySelectorAll('sidenav-util-component');

            var _iterator3 = _createForOfIteratorHelper(utilComponent),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                item.shadowRoot.querySelector('.sidenav-util-component').part.add('sidenav-util-component-hidden');
                item.shadowRoot.querySelector('.sidenav-util-component').part.remove('sidenav-util-component-visible');
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            sideNavArrow.part.remove('sidenav-arrow-start');
            sideNavArrow.part.add('sidenav-arrow-center');
            sideNavArrow.children[0].part.add('sidenav-arrow-span-1-left');
            sideNavArrow.children[1].part.add('sidenav-arrow-span-2-left');
            sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-right');
            sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-right');
          }

          if (isUtil != 'true' && localStorage.getItem('sidenav-expanded') == 'false') {
            sideNavContainer.part.remove('sidenav-container-expanded');
            sideNavContainer.part.add('sidenav-container-collapsed');
            var ulComponentItems = document.querySelectorAll('sidenav-ul-item');

            var _iterator4 = _createForOfIteratorHelper(ulComponentItems),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _item2 = _step4.value;

                var sideNavItemText = _item2.shadowRoot.querySelector('.sidenav-ul-item-a-text');

                sideNavItemText.part.add('sidenav-ul-item-a-text-hidden');
                sideNavItemText.part.remove('sidenav-ul-item-a-text-visible');
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            sideNavArrow.part.remove('sidenav-arrow-end');
            sideNavArrow.part.add('sidenav-arrow-center');
            sideNavArrow.children[0].part.remove('sidenav-arrow-span-1-left');
            sideNavArrow.children[1].part.remove('sidenav-arrow-span-2-left');
            sideNavArrow.children[0].part.add('sidenav-arrow-span-1-right');
            sideNavArrow.children[1].part.add('sidenav-arrow-span-2-right');
          }
        }
      }
    }, {
      key: "toggleSideNav",
      value: function toggleSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable) {
        if (isUtil != 'true') {
          if (localStorage.getItem('sidenav-expanded') != 'false') {
            localStorage.setItem('sidenav-expanded', false);
            this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
          } else {
            localStorage.setItem('sidenav-expanded', true);
            this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
          }
        } else {
          if (localStorage.getItem('sidenav-util-expanded') != 'false') {
            localStorage.setItem('sidenav-util-expanded', false);
            this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
          } else {
            localStorage.setItem('sidenav-util-expanded', true);
            this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
          }
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        var isUtil = this.getAttribute('util'); // const isExpandable = this.getAttribute('expandable');

        var sideNavArrow = this.shadowRoot.querySelector('.sidenav-arrow');
        var sideNavContainer = this.shadowRoot.querySelector('.sidenav-container');

        if (isUtil == 'true') {
          sideNavArrow.part.add('sidenav-arrow-start');
          sideNavArrow.children[0].part.add('sidenav-arrow-span-1-right');
          sideNavArrow.children[1].part.add('sidenav-arrow-span-2-right');
          sideNavContainer.part.add('sidenav-container-border-l');
        } else {
          sideNavArrow.part.add('sidenav-arrow-end');
          sideNavArrow.children[0].part.add('sidenav-arrow-span-1-left');
          sideNavArrow.children[1].part.add('sidenav-arrow-span-2-left');
          sideNavContainer.part.add('sidenav-container-border-r');
        } // if (isExpandable == "false") {
        //   sideNavArrow.part.replace('sidenav-arrow-visible', 'sidenav-arrow-hidden')
        //   sideNavContainer.part.toggle('sidenav-container-gap');
        // }
        // window.addEventListener(config.config.loadListener, () => {
        //   if (window.innerWidth <= 1024) {
        //     if (isExpandable != 'false') {
        //       localStorage.setItem('sidenav-expanded', false)
        //       localStorage.setItem('sidenav-util-expanded', false)
        //     }
        //     this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
        //   }
        //   if (localStorage.getItem('sidenav-expanded') != 'false') {
        //     this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
        //   } else {
        //     this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
        //     console.log('asd')
        //   }
        //   if (localStorage.getItem('sidenav-util-expanded') != 'false') {
        //     this.expandSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
        //   } else {
        //     this.collapseSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable)
        //   }
        // });


        sideNavArrow.addEventListener('click', function () {
          return _this2.toggleSideNav(sideNavArrow, sideNavContainer, isUtil, isExpandable);
        });
      }
    }]);

    return SideNavComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('sidenav-ul-component', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(SideNavUlComponent, _HTMLElement2);

    var _super2 = _createSuper(SideNavUlComponent);

    function SideNavUlComponent() {
      var _this3;

      _classCallCheck(this, SideNavUlComponent);

      _this3 = _super2.call(this);
      _this3.showInfo = true;

      _this3.attachShadow({
        mode: 'open'
      });

      _this3.shadowRoot.appendChild(sideNavUlComponentTemplate.content.cloneNode(true));

      return _this3;
    }

    _createClass(SideNavUlComponent, [{
      key: "toggleActiveSideNavItem",
      value: function toggleActiveSideNavItem() {
        var sideNavUlItems = document.querySelectorAll('sidenav-ul-item');

        var _iterator5 = _createForOfIteratorHelper(sideNavUlItems),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var item = _step5.value;
            var sideNavLiItem = item.shadowRoot.querySelector('.sidenav-ul-item');

            if (window.location.pathname.includes(sideNavLiItem.children[0].pathname)) {
              sideNavLiItem.part.add('sidenav-ul-item-active');
              sideNavLiItem.part.remove('sidenav-ul-item-hover');
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;

        window.addEventListener(window.loadEventListener, function () {
          return _this4.toggleActiveSideNavItem();
        });
      }
    }]);

    return SideNavUlComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('sidenav-ul-item', /*#__PURE__*/function (_HTMLElement3) {
    _inherits(SideNavUlItem, _HTMLElement3);

    var _super3 = _createSuper(SideNavUlItem);

    function SideNavUlItem() {
      var _this5;

      _classCallCheck(this, SideNavUlItem);

      _this5 = _super3.call(this);
      _this5.showInfo = true;

      _this5.attachShadow({
        mode: 'open'
      });

      _this5.shadowRoot.appendChild(sideNavUlItemTemplate.content.cloneNode(true));

      return _this5;
    }

    _createClass(SideNavUlItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('a').href = this.getAttribute('href');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
        var attrNames = this.getAttributeNames();

        var _iterator6 = _createForOfIteratorHelper(attrNames),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var attr = _step6.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }]);

    return SideNavUlItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('sidenav-util-component', /*#__PURE__*/function (_HTMLElement4) {
    _inherits(SideNavUtilComponent, _HTMLElement4);

    var _super4 = _createSuper(SideNavUtilComponent);

    function SideNavUtilComponent() {
      var _this6;

      _classCallCheck(this, SideNavUtilComponent);

      _this6 = _super4.call(this);
      _this6.showInfo = true;

      _this6.attachShadow({
        mode: 'open'
      });

      _this6.shadowRoot.appendChild(sideNavUtilComponentTemplate.content.cloneNode(true));

      _this6.toggleList = true;
      return _this6;
    }

    _createClass(SideNavUtilComponent, [{
      key: "viewMore",
      value: function viewMore(sideNavUtilItems, viewMoreButton) {
        if (this.toggleList) {
          for (var i = 4; i < sideNavUtilItems.length; i++) {
            sideNavUtilItems[i].style.display = 'block';
          }

          viewMoreButton.innerText = 'View Less';
          this.toggleList = !this.toggleList;
        } else {
          for (var _i = 4; _i < sideNavUtilItems.length; _i++) {
            sideNavUtilItems[_i].style.display = 'none';
          }

          viewMoreButton.innerText = 'View More';
          this.toggleList = !this.toggleList;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this7 = this;

        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
        var viewMoreButton = this.shadowRoot.querySelector('button');
        window.addEventListener(window.loadEventListener, function () {
          var sideNavUtilItems = _this7.querySelectorAll('sidenav-util-item');

          for (var i = 4; i < sideNavUtilItems.length; i++) {
            sideNavUtilItems[i].style.display = 'none';
          }

          viewMoreButton.innerText = _this7.getAttribute('buttonText');
          viewMoreButton.addEventListener('click', function () {
            return _this7.viewMore(sideNavUtilItems, viewMoreButton);
          });
        });
      }
    }]);

    return SideNavUtilComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('sidenav-util-item', /*#__PURE__*/function (_HTMLElement5) {
    _inherits(SideNavUtilItem, _HTMLElement5);

    var _super5 = _createSuper(SideNavUtilItem);

    function SideNavUtilItem() {
      var _this8;

      _classCallCheck(this, SideNavUtilItem);

      _this8 = _super5.call(this);
      _this8.showInfo = true;

      _this8.attachShadow({
        mode: 'open'
      });

      _this8.shadowRoot.appendChild(sideNavUtilItem.content.cloneNode(true));

      return _this8;
    }

    _createClass(SideNavUtilItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('a').href = this.getAttribute('href');

        if (this.getAttribute('imgSrc') == null) {
          this.shadowRoot.querySelector('img').style.display = 'none';
        } else {
          this.shadowRoot.querySelector('img').src = this.getAttribute('imgSrc');
          this.shadowRoot.querySelector('img').alt = this.getAttribute('imgAlt');
        }

        this.shadowRoot.querySelector('.sidenav-util-item-title').children[0].innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('.sidenav-util-item-title').children[1].innerText = this.getAttribute('last-active');
        this.shadowRoot.querySelector('.sidenav-util-item-deployment').innerText = this.getAttribute('deployment');
        var attrNames = this.getAttributeNames();

        var _iterator7 = _createForOfIteratorHelper(attrNames),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var attr = _step7.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }]);

    return SideNavUtilItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('submenu-component', /*#__PURE__*/function (_HTMLElement6) {
    _inherits(SideNavSubmenuComponent, _HTMLElement6);

    var _super6 = _createSuper(SideNavSubmenuComponent);

    function SideNavSubmenuComponent() {
      var _this9;

      _classCallCheck(this, SideNavSubmenuComponent);

      _this9 = _super6.call(this);
      _this9.showInfo = true;

      _this9.attachShadow({
        mode: 'open'
      });

      _this9.shadowRoot.appendChild(sideNavSubmenuComponentTemplate.content.cloneNode(true));

      return _this9;
    }

    _createClass(SideNavSubmenuComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('img').src = this.getAttribute('imgSrc');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
      }
    }]);

    return SideNavSubmenuComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('submenu-ul-component', /*#__PURE__*/function (_HTMLElement7) {
    _inherits(SideNavSubmenuUlComponent, _HTMLElement7);

    var _super7 = _createSuper(SideNavSubmenuUlComponent);

    function SideNavSubmenuUlComponent() {
      var _this10;

      _classCallCheck(this, SideNavSubmenuUlComponent);

      _this10 = _super7.call(this);
      _this10.showInfo = true;

      _this10.attachShadow({
        mode: 'open'
      });

      _this10.shadowRoot.appendChild(sideNavSubmenuUlComponentTemplate.content.cloneNode(true));

      return _this10;
    }

    _createClass(SideNavSubmenuUlComponent, [{
      key: "toggleActiveItem",
      value: function toggleActiveItem() {
        var submenuItems = document.querySelectorAll('submenu-item');

        var _iterator8 = _createForOfIteratorHelper(submenuItems),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var item = _step8.value;
            var submenuItem = item.shadowRoot.querySelector('.submenu-item');

            if (window.location.pathname.includes(submenuItem.children[0].pathname)) {
              submenuItem.part.add('submenu-item-active');
              submenuItem.part.remove('submenu-item-hover');
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this11 = this;

        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
        window.addEventListener(window.loadEventListener, function () {
          return _this11.toggleActiveItem();
        });
      }
    }]);

    return SideNavSubmenuUlComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('submenu-item', /*#__PURE__*/function (_HTMLElement8) {
    _inherits(SideNavSubmenuItem, _HTMLElement8);

    var _super8 = _createSuper(SideNavSubmenuItem);

    function SideNavSubmenuItem() {
      var _this12;

      _classCallCheck(this, SideNavSubmenuItem);

      _this12 = _super8.call(this);
      _this12.showInfo = true;

      _this12.attachShadow({
        mode: 'open'
      });

      _this12.shadowRoot.appendChild(sideNavSubmenuItemTemplate.content.cloneNode(true));

      return _this12;
    }

    _createClass(SideNavSubmenuItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var link = this.shadowRoot.querySelector('a');
        link.href = this.getAttribute('href');
        link.innerText = this.getAttribute('title');
        var attrNames = this.getAttributeNames();

        var _iterator9 = _createForOfIteratorHelper(attrNames),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var attr = _step9.value;

            if (attr.includes('data')) {
              link.setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }]);

    return SideNavSubmenuItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var gridContainerTemplate = document.createElement('template');
  gridContainerTemplate.innerHTML = "\n  <div part=\"grid-container\">\n    <slot name=\"grid-item\"/>\n  </div>\n";
  var gridItemTemplate = document.createElement('template');
  gridItemTemplate.innerHTML = "\n  <style>\n    p {margin:0}\n  </style>\n  <a part=\"grid-item\" href=\"\">\n    <img part=\"\"grid-item-img\" src=\"\" alt=\"\" width=\"50px\" height=\"50px\">\n    <div class=\"grid-item-text\" part=\"grid-item-text\">\n      <p></p>\n      <p part=\"grid-item-deployments\"></p>\n    </div>\n  </a>\n";

  customElements.define('grid-container', /*#__PURE__*/function (_HTMLElement) {
    _inherits(GridContainer, _HTMLElement);

    var _super = _createSuper(GridContainer);

    function GridContainer() {
      var _this;

      _classCallCheck(this, GridContainer);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(gridContainerTemplate.content.cloneNode(true));

      return _this;
    }

    return _createClass(GridContainer);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('grid-item', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(StatGridItem, _HTMLElement2);

    var _super2 = _createSuper(StatGridItem);

    function StatGridItem() {
      var _this2;

      _classCallCheck(this, StatGridItem);

      _this2 = _super2.call(this);
      _this2.showInfo = true;

      _this2.attachShadow({
        mode: 'open'
      });

      _this2.shadowRoot.appendChild(gridItemTemplate.content.cloneNode(true));

      return _this2;
    }

    _createClass(StatGridItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('a').href = this.getAttribute('href');
        var img = this.shadowRoot.querySelector('img');
        img.src = this.getAttribute('imgSrc');
        img.alt = this.getAttribute('imgAlt');
        var text = this.shadowRoot.querySelector('.grid-item-text');
        text.children[0].innerText = this.getAttribute('name');
        text.children[1].innerText = this.getAttribute('deployments') + ' Deployments';
        var attrNames = this.getAttributeNames();

        var _iterator = _createForOfIteratorHelper(attrNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;

            if (attr.includes('data')) {
              this.shadowRoot.querySelector('a').setAttribute(attr, this.getAttribute(attr));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);

    return StatGridItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var cardContainerTemplate = document.createElement('template');
  cardContainerTemplate.innerHTML = "\n  <div part=\"card-container\">\n    <slot name=\"card-item\"/>\n  </div>\n";
  var statCardTemplate = document.createElement('template');
  statCardTemplate.innerHTML = "\n  <style>\n    p {margin:0}\n  </style>\n  <div part=\"stat-card\">\n    <p part=\"stat-card-label\"></p>\n    <p part=\"stat-card-count\"></p>\n  </div>\n";
  var productCardTemplate = document.createElement('template');
  productCardTemplate.innerHTML = "\n  <style>\n    p {margin:0}\n  </style>\n  <div part=\"card-container\">\n    <div part=\"card-holder\">\n      <div part=\"card-holder-header\">\n        <img part=\"card-profile-icon\" class=\"profile-icon\" src=\"\" alt=\"\" width=\"50px\" height=\"50px\">\n        <div part=\"card-holder-header-text\">\n          <p part=\"card-holder-name\" class=\"card-holder-name\"></p>\n          <p part=\"deployment-time\" class=\"deployment-time\"></p>\n        </div>\n      </div>\n      <img class=\"status-icon\" src=\"\"/>\n    </div>\n    <div part=\"card-holder-info\">\n      <p part=\"card-holder-info-muted\" class=\"issues\">Active, no issues</p>\n      <p part=\"card-holder-info-muted\" class=\"terms-conditions\">T&C accepted</p>\n      <p part=\"card-holder-info-muted\" class=\"licence\">License valid</p>\n    </div>\n  </div>\n";
  var ctaCardtemplate = document.createElement('template');
  ctaCardtemplate.innerHTML = "\n<style>\n  p {margin:0}\n</style>\n<div part=\"cta-card\">\n  <p class=\"title\" part=\"title\"></p>\n  <p class=\"subtitle\" part=\"subtitle\"></p>\n  <slot name=\"cta-slot\"/>\n</div>\n";

  customElements.define('card-container', /*#__PURE__*/function (_HTMLElement) {
    _inherits(CardContainer, _HTMLElement);

    var _super = _createSuper(CardContainer);

    function CardContainer() {
      var _this;

      _classCallCheck(this, CardContainer);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(cardContainerTemplate.content.cloneNode(true));

      return _this;
    }

    return _createClass(CardContainer);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('stat-card', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(StatCard, _HTMLElement2);

    var _super2 = _createSuper(StatCard);

    function StatCard() {
      var _this2;

      _classCallCheck(this, StatCard);

      _this2 = _super2.call(this);
      _this2.showInfo = true;

      _this2.attachShadow({
        mode: 'open'
      });

      _this2.shadowRoot.appendChild(statCardTemplate.content.cloneNode(true));

      return _this2;
    }

    _createClass(StatCard, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var text = this.shadowRoot.querySelectorAll('p');
        text[0].innerText = this.getAttribute('label');
        text[1].innerText = this.getAttribute('count');
      }
    }]);

    return StatCard;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('product-card', /*#__PURE__*/function (_HTMLElement3) {
    _inherits(ProductCard, _HTMLElement3);

    var _super3 = _createSuper(ProductCard);

    function ProductCard() {
      var _this3;

      _classCallCheck(this, ProductCard);

      _this3 = _super3.call(this);
      _this3.showInfo = true;

      _this3.attachShadow({
        mode: 'open'
      });

      _this3.shadowRoot.appendChild(productCardTemplate.content.cloneNode(true));

      return _this3;
    }

    _createClass(ProductCard, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        this.shadowRoot.querySelector('.profile-icon').src = this.getAttribute('profile-icon-src');
        this.shadowRoot.querySelector('.card-holder-name').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('.deployment-time').innerText = this.getAttribute('deployment-time');
        this.shadowRoot.querySelector('.status-icon').src = this.getAttribute('status-icon-src');

        if (this.getAttribute('issues')) {
          var issues = this.shadowRoot.querySelector('.issues');
          issues.innerText = this.getAttribute('issues') + ' issues';
          issues.part.remove('card-holder-info-muted');
          issues.part.add('card-holder-info-medium');
        }

        if (this.getAttribute('terms-conditions')) {
          var termsConditions = this.shadowRoot.querySelector('.terms-conditions');
          termsConditions.innerText = this.getAttribute('terms-conditions');
          termsConditions.part.remove('card-holder-info-muted');
          termsConditions.part.add('card-holder-info-medium');
        }

        if (this.getAttribute('licence')) {
          var licence = this.shadowRoot.querySelector('.licence');
          licence.innerText = this.getAttribute('licence');
          licence.part.remove('card-holder-info-muted');
          licence.part.add('card-holder-info-medium');
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['name', 'deployment-time', 'profile-icon-src', 'status-icon-src', 'issues', 'terms-conditions', 'licence'];
      }
    }]);

    return ProductCard;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('cta-card', /*#__PURE__*/function (_HTMLElement4) {
    _inherits(CtaCard, _HTMLElement4);

    var _super4 = _createSuper(CtaCard);

    function CtaCard() {
      var _this4;

      _classCallCheck(this, CtaCard);

      _this4 = _super4.call(this);
      _this4.showInfo = true;

      _this4.attachShadow({
        mode: 'open'
      });

      _this4.shadowRoot.appendChild(ctaCardtemplate.content.cloneNode(true));

      return _this4;
    }

    _createClass(CtaCard, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('.subtitle').innerText = this.getAttribute('subtitle');
      }
    }]);

    return CtaCard;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var titleCTAComponentTemplate = document.createElement('template');
  titleCTAComponentTemplate.innerHTML = "\n<style>\n  p {margin:0}\n</style>\n<div class=\"title-cta-container\" part=\"title-cta-container\">\n  <p part=\"title-cta-text\"></p>\n  <slot name=\"cta-slot\"/>\n</div>\n";

  customElements.define('title-cta', /*#__PURE__*/function (_HTMLElement) {
    _inherits(TitleCTAComponent, _HTMLElement);

    var _super = _createSuper(TitleCTAComponent);

    function TitleCTAComponent() {
      var _this;

      _classCallCheck(this, TitleCTAComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(titleCTAComponentTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(TitleCTAComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');

        if (this.getAttribute('border') == 'true') {
          this.shadowRoot.querySelector('.title-cta-container').part.add('title-cta-container-border');
        }
      }
    }]);

    return TitleCTAComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var filterComponentTemplate = document.createElement('template');
  filterComponentTemplate.innerHTML = "\n<div part=\"custom-filter-container\">\n  <div part=\"custom-filter-input-container\">\n    <input part=\"custom-filter-input\" type=\"text\" placeholder=\"Search...\">\n    <div part=\"custom-filter-input-icon-container\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" part=\"custom-filter-input-icon\" fill=\"#000000\">\n        <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n        <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n      </svg>\n    </div>\n  </div>\n  <button part=\"custom-filter-button-container\">\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path part=\"custom-filter-button-icon-svg-path\" d=\"M4.25018 5.61C6.57018 8.59 10.0002 13 10.0002 13V18C10.0002 19.1 10.9002 20 12.0002 20C13.1002 20 14.0002 19.1 14.0002 18V13C14.0002 13 17.4302 8.59 19.7502 5.61C20.2602 4.95 19.7902 4 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z\"/>\n    </svg>\n  </button>\n</div>\n";

  customElements.define('custom-filter', /*#__PURE__*/function (_HTMLElement) {
    _inherits(FilterComponent, _HTMLElement);

    var _super = _createSuper(FilterComponent);

    function FilterComponent() {
      var _this;

      _classCallCheck(this, FilterComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(filterComponentTemplate.content.cloneNode(true));

      return _this;
    }

    _createClass(FilterComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('input').placeholder = this.getAttribute('placeholder');
      }
    }]);

    return FilterComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var alertComponentTemplate = document.createElement('template');
  alertComponentTemplate.innerHTML = "\n  <div part=\"alert-component\">\n    <slot name=\"alert\"/>\n  </div>\n";
  var alertTemplate = document.createElement('template');
  alertTemplate.innerHTML = "\n<div part=\"alert-wrapper\" class=\"alert-wrapper\"></div>\n";

  customElements.define('alert-component', /*#__PURE__*/function (_HTMLElement) {
    _inherits(AlertComponent, _HTMLElement);

    var _super = _createSuper(AlertComponent);

    function AlertComponent() {
      var _this;

      _classCallCheck(this, AlertComponent);

      _this = _super.call(this);
      _this.showInfo = true;

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(alertComponentTemplate.content.cloneNode(true));

      return _this;
    }

    return _createClass(AlertComponent);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  customElements.define('custom-alert', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(CustomAlert, _HTMLElement2);

    var _super2 = _createSuper(CustomAlert);

    function CustomAlert() {
      var _this2;

      _classCallCheck(this, CustomAlert);

      _this2 = _super2.call(this);
      _this2.showInfo = true;

      _this2.attachShadow({
        mode: 'open'
      });

      _this2.shadowRoot.appendChild(alertTemplate.content.cloneNode(true));

      return _this2;
    }

    _createClass(CustomAlert, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var alertIcon = this.shadowRoot.querySelector('.alert-wrapper');

        switch (this.getAttribute('variant')) {
          case 'danger':
            alertIcon.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20ZM18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9Z\" fill=\"rgb(220 38 38)\"/>\n            </svg>\n            ".concat(this.getAttribute('count') != null ? '<p part="alert-text">' + this.getAttribute('count') + ' severe issues</p>' : '<p part="alert-text">No issues</p>', "\n          ");
            break;

          case 'warning':
            alertIcon.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M12.0001 5.99005L19.5301 19.0001H4.47012L12.0001 5.99005ZM2.74012 18.0001C1.97012 19.3301 2.93012 21.0001 4.47012 21.0001H19.5301C21.0701 21.0001 22.0301 19.3301 21.2601 18.0001L13.7301 4.99005C12.9601 3.66005 11.0401 3.66005 10.2701 4.99005L2.74012 18.0001ZM11.0001 11.0001V13.0001C11.0001 13.5501 11.4501 14.0001 12.0001 14.0001C12.5501 14.0001 13.0001 13.5501 13.0001 13.0001V11.0001C13.0001 10.4501 12.5501 10.0001 12.0001 10.0001C11.4501 10.0001 11.0001 10.4501 11.0001 11.0001ZM11.0001 16.0001H13.0001V18.0001H11.0001V16.0001Z\" fill=\"rgb(245 158 11)\"/>\n            </svg>\n            ".concat(this.getAttribute('count') != null ? '<p part="alert-text">' + this.getAttribute('count') + ' moderate issues</p>' : '<p part="alert-text">No issues</p>', "\n          ");
            break;

          case 'success':
            alertIcon.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z\" fill=\"rgb(22 163 74)\"/>\n            </svg>\n            ".concat(this.getAttribute('count') != null ? '<p part="alert-text">' + this.getAttribute('count') + ' working properly</p>' : '<p part="alert-text">No issues</p>', "\n            ");
            break;
        }
      }
    }]);

    return CustomAlert;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  window.loadEventListener = "DOMContentLoaded";

  function libConfig(options) {
    if (options.loadEventListener) {
      window.loadEventListener = options.loadEventListener;
    }

    window.addEventListener(window.loadEventListener, function () {
      var content = document.querySelector('html');
      var myStorage = window.localStorage;
      var mode = myStorage.getItem('mode');
      mode ? content.classList.add(mode) : myStorage.setItem('mode', 'light');

      function setMode(mode) {
        content.classList.remove('dark', 'light');
        content.classList.add(mode);
        myStorage.setItem('mode', mode);
      }

      document.querySelector('#toggleMode').onclick = function () {
        content.classList.contains('dark') ? setMode('light') : setMode('dark');
      };
    });
  }
  window.libConfig = libConfig;

}));
