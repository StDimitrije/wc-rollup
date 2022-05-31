(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

  // src/main.js
  window.onload = function () {
    var content = document.querySelector('html');
    var myStorage = window.localStorage;
    var mode = myStorage.getItem('mode');
    mode ? content.classList.add(mode) : myStorage.setItem('mode', 'light');

    function setMode(mode) {
      console.log("set mode");
      content.classList.remove('dark', 'light');
      content.classList.add(mode);
      myStorage.setItem('mode', mode);
    } // Toggle between dark and light modes


    document.querySelector('#toggleMode').onclick = function () {
      content.classList.contains('dark') ? setMode('light') : setMode('dark');
    };
  };

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
  customElements.define('profile-icon', /*#__PURE__*/function (_HTMLElement2) {
    _inherits(ProfileIcon, _HTMLElement2);

    var _super2 = _createSuper(ProfileIcon);

    function ProfileIcon() {
      var _this2;

      _classCallCheck(this, ProfileIcon);

      _this2 = _super2.call(this);
      _this2.showInfo = true;

      _this2.attachShadow({
        mode: 'open'
      });

      _this2.shadowRoot.appendChild(profileIconTemplate.content.cloneNode(true));

      return _this2;
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
  customElements.define('dropdown-component', /*#__PURE__*/function (_HTMLElement3) {
    _inherits(CustomDropdownComponent, _HTMLElement3);

    var _super3 = _createSuper(CustomDropdownComponent);

    function CustomDropdownComponent() {
      var _this3;

      _classCallCheck(this, CustomDropdownComponent);

      _this3 = _super3.call(this);
      _this3.showInfo = true;

      _this3.attachShadow({
        mode: 'open'
      });

      _this3.shadowRoot.appendChild(customDropdownComponentTemplate.content.cloneNode(true));

      return _this3;
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
        var _this4 = this;

        var profileDropdown = this.shadowRoot.querySelector('.dropdown-modal');
        document.querySelector('profile-icon').addEventListener('click', function () {
          return _this4.toggleDropdown(profileDropdown);
        });
      }
    }]);

    return CustomDropdownComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var customDropdownItemTemplate = document.createElement('template');
  customDropdownItemTemplate.innerHTML = "\n  <li part=\"profile-dropdown-item\">\n    <a part=\"profile-dropdown-item-a\" href=\"\"></a>\n  </li>\n";
  customElements.define('dropdown-item', /*#__PURE__*/function (_HTMLElement4) {
    _inherits(CustomDropdownItem, _HTMLElement4);

    var _super4 = _createSuper(CustomDropdownItem);

    function CustomDropdownItem() {
      var _this5;

      _classCallCheck(this, CustomDropdownItem);

      _this5 = _super4.call(this);
      _this5.showInfo = true;

      _this5.attachShadow({
        mode: 'open'
      });

      _this5.shadowRoot.appendChild(customDropdownItemTemplate.content.cloneNode(true));

      return _this5;
    }

    _createClass(CustomDropdownItem, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        var link = this.shadowRoot.querySelector('a');
        link.href = this.getAttribute('href');
        link.innerText = this.getAttribute('title');
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
  mainSearch.innerHTML = "\n  <form part=\"main-search-form\" action=\"\">\n    <input part=\"main-search-input\" type=\"text\">\n    <div part=\"main-search-input-icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" part=\"main-search-input-icon\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>\n    </div>\n  </form>\n";
  customElements.define('main-search', /*#__PURE__*/function (_HTMLElement5) {
    _inherits(MainSearch, _HTMLElement5);

    var _super5 = _createSuper(MainSearch);

    function MainSearch() {
      var _this6;

      _classCallCheck(this, MainSearch);

      _this6 = _super5.call(this);
      _this6.showInfo = true;

      _this6.attachShadow({
        mode: 'open'
      });

      _this6.shadowRoot.appendChild(mainSearch.content.cloneNode(true));

      return _this6;
    }

    _createClass(MainSearch, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('form').action = this.getAttribute('action');
        this.shadowRoot.querySelector('input').placeholder = this.getAttribute('placeholder');
      }
    }]);

    return MainSearch;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var logoComponentTemplate = document.createElement('template');
  logoComponentTemplate.innerHTML = "\n<style>\n  p {margin:0}\n</style>\n  <a part=\"logo\" href=\"\">\n    <img src=\"\" width=\"60px\" alt=\"\">\n    <p></p>\n  </a>\n";
  customElements.define('logo-component', /*#__PURE__*/function (_HTMLElement6) {
    _inherits(LogoComponent, _HTMLElement6);

    var _super6 = _createSuper(LogoComponent);

    function LogoComponent() {
      var _this7;

      _classCallCheck(this, LogoComponent);

      _this7 = _super6.call(this);
      _this7.showInfo = true;

      _this7.attachShadow({
        mode: 'open'
      });

      _this7.shadowRoot.appendChild(logoComponentTemplate.content.cloneNode(true));

      return _this7;
    }

    _createClass(LogoComponent, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        this.shadowRoot.querySelector('a').href = this.getAttribute('link');
        this.shadowRoot.querySelector('img').src = this.getAttribute('imageSrc');
        this.shadowRoot.querySelector('img').alt = this.getAttribute('imageAlt');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('organization');
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
  buttonTemplate.innerHTML = "\n  <a href=\"\" part=\"custom-button\"></a>\n";
  customElements.define('custom-button', /*#__PURE__*/function (_HTMLElement7) {
    _inherits(CustomButton, _HTMLElement7);

    var _super7 = _createSuper(CustomButton);

    function CustomButton() {
      var _this8;

      _classCallCheck(this, CustomButton);

      _this8 = _super7.call(this);
      _this8.showInfo = true;

      _this8.attachShadow({
        mode: 'open'
      });

      _this8.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));

      return _this8;
    }

    _createClass(CustomButton, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        var customBtn = this.shadowRoot.querySelector('a');
        customBtn.href = this.getAttribute('href');
        customBtn.innerHTML = this.getAttribute('title');

        switch (this.getAttribute('variant')) {
          case 'fill':
            customBtn.part.add('custom-button-fill');

            if (this.getAttribute('show-icon') == "true") {
              customBtn.innerHTML = "\n            <svg class=\"button-icon\" width=\"11\" height=\"11\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path part=\"custom-button-svg-path-dark\" d=\"M13 8.5H8V13.5C8 14.05 7.55 14.5 7 14.5C6.45 14.5 6 14.05 6 13.5V8.5H1C0.45 8.5 0 8.05 0 7.5C0 6.95 0.45 6.5 1 6.5H6V1.5C6 0.95 6.45 0.5 7 0.5C7.55 0.5 8 0.95 8 1.5V6.5H13C13.55 6.5 14 6.95 14 7.5C14 8.05 13.55 8.5 13 8.5Z\" fill=\"white\"/>\n            </svg>" + this.getAttribute('title');
            }

            break;

          case 'outline':
            customBtn.part.add('custom-button-outline');

            if (this.getAttribute('show-icon') == "true") {
              customBtn.innerHTML = "\n            <svg class=\"button-icon\" width=\"11\" height=\"11\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path part=\"custom-button-svg-path-outline\" d=\"M13 8.5H8V13.5C8 14.05 7.55 14.5 7 14.5C6.45 14.5 6 14.05 6 13.5V8.5H1C0.45 8.5 0 8.05 0 7.5C0 6.95 0.45 6.5 1 6.5H6V1.5C6 0.95 6.45 0.5 7 0.5C7.55 0.5 8 0.95 8 1.5V6.5H13C13.55 6.5 14 6.95 14 7.5C14 8.05 13.55 8.5 13 8.5Z\" fill=\"white\"/>\n            </svg>" + this.getAttribute('title');
            }

            break;

          default:
            customBtn.part.add('custom-button-fill');

            if (this.getAttribute('show-icon') == "true") {
              customBtn.innerHTML = "\n            <svg class=\"button-icon\" width=\"11\" height=\"11\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path part=\"custom-button-svg-path-dark\" d=\"M13 8.5H8V13.5C8 14.05 7.55 14.5 7 14.5C6.45 14.5 6 14.05 6 13.5V8.5H1C0.45 8.5 0 8.05 0 7.5C0 6.95 0.45 6.5 1 6.5H6V1.5C6 0.95 6.45 0.5 7 0.5C7.55 0.5 8 0.95 8 1.5V6.5H13C13.55 6.5 14 6.95 14 7.5C14 8.05 13.55 8.5 13 8.5Z\" fill=\"white\"/>\n            </svg>" + this.getAttribute('title');
            }

        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['title', 'show-icon', 'href'];
      }
    }]);

    return CustomButton;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var utilButtonTemplate = document.createElement('template');
  utilButtonTemplate.innerHTML = "\n<a part=\"util-button\" href=\"\"></a>\n";
  customElements.define('util-button', /*#__PURE__*/function (_HTMLElement8) {
    _inherits(UtilButton, _HTMLElement8);

    var _super8 = _createSuper(UtilButton);

    function UtilButton() {
      var _this9;

      _classCallCheck(this, UtilButton);

      _this9 = _super8.call(this);
      _this9.showInfo = true;

      _this9.attachShadow({
        mode: 'open'
      });

      _this9.shadowRoot.appendChild(utilButtonTemplate.content.cloneNode(true));

      return _this9;
    }

    _createClass(UtilButton, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var button = this.shadowRoot.querySelector('a');
        button.href = this.getAttribute('href');

        switch (this.getAttribute('variant')) {
          case 'share':
            button.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z\" fill=\"#90C058\"/>\n            </svg>\n          " + 'Share';
            break;

          case 'manage':
            button.innerHTML = "\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5398 5.05 19.2698 4.97 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.71984 4.96 4.45984 5.05 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.45984 18.95 4.72984 19.03 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.2798 19.04 19.5398 18.95 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM11.9998 15.5C10.0698 15.5 8.49984 13.93 8.49984 12C8.49984 10.07 10.0698 8.5 11.9998 8.5C13.9298 8.5 15.4998 10.07 15.4998 12C15.4998 13.93 13.9298 15.5 11.9998 15.5Z\" fill=\"#90C058\"/>\n            </svg>\n          " + 'Manage';
            break;
        }
      }
    }]);

    return UtilButton;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var sideNavComponentTemplate = document.createElement('template');
  sideNavComponentTemplate.innerHTML = "\n  <div part=\"sidenav-container sidenav-container-expanded sidenav-container-gap\" class=\"sidenav-container\">\n    <div part=\"sidenav-arrow sidenav-arrow-visible\" class=\"sidenav-arrow\">\n      <span part=\"sidenav-arrow-span-1\"></span>\n      <span part=\"sidenav-arrow-span-2\"></span>\n    </div>\n    <div>\n      <slot name=\"sidenav-ul-component\"/>\n    </div>\n    <div>\n      <slot name=\"sidenav-util-component\"/>\n    </div>\n  </div> \n";
  customElements.define('sidenav-component', /*#__PURE__*/function (_HTMLElement9) {
    _inherits(SideNavComponent, _HTMLElement9);

    var _super9 = _createSuper(SideNavComponent);

    function SideNavComponent() {
      var _this10;

      _classCallCheck(this, SideNavComponent);

      _this10 = _super9.call(this);
      _this10.showInfo = true;

      _this10.attachShadow({
        mode: 'open'
      });

      _this10.shadowRoot.appendChild(sideNavComponentTemplate.content.cloneNode(true));

      return _this10;
    }

    _createClass(SideNavComponent, [{
      key: "toggleSideNav",
      value: function toggleSideNav(sideNavArrow, sideNavContainer) {
        sideNavContainer.part.toggle('sidenav-container-expanded');
        sideNavContainer.part.toggle('sidenav-container-collapsed');

        if (this.getAttribute('util') == "true") {
          var utilComponent = document.querySelectorAll('sidenav-util-component');

          for (var i = 0; i < utilComponent.length; i++) {
            utilComponent[i].shadowRoot.querySelector('.sidenav-util-component').part.toggle('sidenav-util-component-visible');
            utilComponent[i].shadowRoot.querySelector('.sidenav-util-component').part.toggle('sidenav-util-component-hidden');
          }

          sideNavArrow.part.toggle('sidenav-arrow-start');
          sideNavArrow.part.toggle('sidenav-arrow-center');
          sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-left');
          sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-left');
          sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-right');
          sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-right');
        } else {
          var ulComponentItems = document.querySelectorAll('sidenav-ul-item');

          for (var _i = 0; _i < ulComponentItems.length; _i++) {
            var sideNavItemText = ulComponentItems[_i].shadowRoot.querySelector('.sidenav-ul-item-a-text');

            sideNavItemText.part.toggle('sidenav-ul-item-a-text-visible');
            sideNavItemText.part.toggle('sidenav-ul-item-a-text-hidden');
          }

          sideNavArrow.part.toggle('sidenav-arrow-end');
          sideNavArrow.part.toggle('sidenav-arrow-center');
          sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-left');
          sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-left');
          sideNavArrow.children[0].part.toggle('sidenav-arrow-span-1-right');
          sideNavArrow.children[1].part.toggle('sidenav-arrow-span-2-right');
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this11 = this;

        var isUtil = this.getAttribute('util');
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
        }

        if (this.getAttribute('expandable') != "true") {
          sideNavArrow.part.toggle('sidenav-arrow-visible');
          sideNavArrow.part.toggle('sidenav-arrow-hidden');
          sideNavContainer.part.toggle('sidenav-container-gap');
        }

        sideNavArrow.addEventListener('click', function () {
          return _this11.toggleSideNav(sideNavArrow, sideNavContainer);
        });
      }
    }]);

    return SideNavComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var sideNavUlComponentTemplate = document.createElement('template');
  sideNavUlComponentTemplate.innerHTML = "\n  <div part=\"sidenav-ul-component-wrapper\">\n    <ul part=\"sidenav-ul-component\">\n      <slot name=\"sidenav-ul-item\"/>\n    </ul> \n  </div>\n";
  customElements.define('sidenav-ul-component', /*#__PURE__*/function (_HTMLElement10) {
    _inherits(SideNavUlComponent, _HTMLElement10);

    var _super10 = _createSuper(SideNavUlComponent);

    function SideNavUlComponent() {
      var _this12;

      _classCallCheck(this, SideNavUlComponent);

      _this12 = _super10.call(this);
      _this12.showInfo = true;

      _this12.attachShadow({
        mode: 'open'
      });

      _this12.shadowRoot.appendChild(sideNavUlComponentTemplate.content.cloneNode(true));

      return _this12;
    }

    _createClass(SideNavUlComponent, [{
      key: "toggleActiveSideNavItem",
      value: function toggleActiveSideNavItem() {
        var sideNavUlItems = document.querySelectorAll('sidenav-ul-item');

        for (var i = 0; i < sideNavUlItems.length; i++) {
          var sideNavLiItem = sideNavUlItems[i].shadowRoot.querySelector('.sidenav-ul-item');

          if (window.location.pathname.includes(sideNavLiItem.children[0].pathname)) {
            sideNavLiItem.part.add('sidenav-ul-item-active');
            sideNavLiItem.part.remove('sidenav-ul-item-hover');
          }
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this13 = this;

        window.addEventListener('load', function () {
          return _this13.toggleActiveSideNavItem();
        });
      }
    }]);

    return SideNavUlComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var sideNavUlItemTemplate = document.createElement('template');
  sideNavUlItemTemplate.innerHTML = "\n  <style>\n    p {margin: 0}\n  </style>\n  <li part=\"sidenav-ul-item sidenav-ul-item-hover\" class=\"sidenav-ul-item\">\n    <a part=\"sidenav-ul-item-a\" href=\"\">\n      <div class=\"sidenav-ul-item-icon\" style=\"display:flex\">\n        <slot name=\"icon-slot\"/>\n      </div>\n      <div part=\"sidenav-ul-item-a-text sidenav-ul-item-a-text-visible\" class=\"sidenav-ul-item-a-text\">\n        <p class=\"sidenav-item-text\"></p>\n        <p class=\"sidenav-item-text\"></p>\n      </div>\n    </a>\n  </li>\n";
  customElements.define('sidenav-ul-item', /*#__PURE__*/function (_HTMLElement11) {
    _inherits(SideNavUlItem, _HTMLElement11);

    var _super11 = _createSuper(SideNavUlItem);

    function SideNavUlItem() {
      var _this14;

      _classCallCheck(this, SideNavUlItem);

      _this14 = _super11.call(this);
      _this14.showInfo = true;

      _this14.attachShadow({
        mode: 'open'
      });

      _this14.shadowRoot.appendChild(sideNavUlItemTemplate.content.cloneNode(true));

      return _this14;
    }

    _createClass(SideNavUlItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('a').href = this.getAttribute('href');
        var sidenavLinkText = this.shadowRoot.querySelector('.sidenav-ul-item-a-text');
        sidenavLinkText.children[0].innerText = this.getAttribute('name');
        sidenavLinkText.children[1].innerText = this.getAttribute('count');
      }
    }]);

    return SideNavUlItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var sideNavUtilComponentTemplate = document.createElement('template');
  sideNavUtilComponentTemplate.innerHTML = "\n  <style>\n    p {margin: 0}\n  </style>\n  <div class=\"sidenav-util-component\" part=\"sidenav-util-component\">\n    <p></p>\n    <ul part=\"sidenav-util-component-ul\">\n      <slot name=\"sidenav-util-item\"/>\n    </ul>\n    <button part=\"sidenav-util-component-button\"></button>\n  </div>\n";
  customElements.define('sidenav-util-component', /*#__PURE__*/function (_HTMLElement12) {
    _inherits(SideNavUtilComponent, _HTMLElement12);

    var _super12 = _createSuper(SideNavUtilComponent);

    function SideNavUtilComponent() {
      var _this15;

      _classCallCheck(this, SideNavUtilComponent);

      _this15 = _super12.call(this);
      _this15.showInfo = true;

      _this15.attachShadow({
        mode: 'open'
      });

      _this15.shadowRoot.appendChild(sideNavUtilComponentTemplate.content.cloneNode(true));

      _this15.toggleList = true;
      return _this15;
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
          for (var _i2 = 4; _i2 < sideNavUtilItems.length; _i2++) {
            sideNavUtilItems[_i2].style.display = 'none';
          }

          viewMoreButton.innerText = 'View More';
          this.toggleList = !this.toggleList;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this16 = this;

        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
        var viewMoreButton = this.shadowRoot.querySelector('button');
        setTimeout(function () {
          var sideNavUtilItems = _this16.querySelectorAll('sidenav-util-item');

          for (var i = 4; i < sideNavUtilItems.length; i++) {
            sideNavUtilItems[i].style.display = 'none';
          }

          viewMoreButton.innerText = _this16.getAttribute('buttonText');
          viewMoreButton.addEventListener('click', function () {
            return _this16.viewMore(sideNavUtilItems, viewMoreButton);
          });
        }, 10);
      }
    }]);

    return SideNavUtilComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var sideNavUtilItem = document.createElement('template');
  sideNavUtilItem.innerHTML = "\n  <style>\n  p {margin: 0}\n  </style>\n  <li class=sidenav-util-li\">\n    <a part=\"sidenav-util-item\" href=\"\">\n      <div part=\"sidenav-util-item-info\">\n        <img part=\"sidenav-util-item-img\" src=\"\" alt=\"\" width=\"50px\" height=\"50px\">\n        <div part=\"sidenav-util-item-text\">\n          <div part=\"sidenav-util-item-title\" class=\"sidenav-util-item-title\">\n            <p part=\"sidenav-util-item-title-name\"></p>\n            <p part=\"sidenav-util-item-last-active\"></p>\n          </div>\n          <p part=\"sidenav-util-item-deployment\" class=\"sidenav-util-item-deployment\"></p>\n        </div>\n      </div>\n      <svg style=\"min-width: 24px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g opacity=\"0.7\">\n          <path part=\"sidenav-util-item-svg-path\" d=\"M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z\" fill=\"#323232\"/>\n        </g>\n      </svg>\n    </a>\n  </li>\n";
  customElements.define('sidenav-util-item', /*#__PURE__*/function (_HTMLElement13) {
    _inherits(SideNavUtilItem, _HTMLElement13);

    var _super13 = _createSuper(SideNavUtilItem);

    function SideNavUtilItem() {
      var _this17;

      _classCallCheck(this, SideNavUtilItem);

      _this17 = _super13.call(this);
      _this17.showInfo = true;

      _this17.attachShadow({
        mode: 'open'
      });

      _this17.shadowRoot.appendChild(sideNavUtilItem.content.cloneNode(true));

      return _this17;
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
      }
    }]);

    return SideNavUtilItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var gridContainerTemplate = document.createElement('template');
  gridContainerTemplate.innerHTML = "\n  <div part=\"grid-container\">\n    <slot name=\"grid-item\"/>\n  </div>\n";
  customElements.define('grid-container', /*#__PURE__*/function (_HTMLElement14) {
    _inherits(GridContainer, _HTMLElement14);

    var _super14 = _createSuper(GridContainer);

    function GridContainer() {
      var _this18;

      _classCallCheck(this, GridContainer);

      _this18 = _super14.call(this);
      _this18.showInfo = true;

      _this18.attachShadow({
        mode: 'open'
      });

      _this18.shadowRoot.appendChild(gridContainerTemplate.content.cloneNode(true));

      return _this18;
    }

    return _createClass(GridContainer);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var gridItemTemplate = document.createElement('template');
  gridItemTemplate.innerHTML = "\n  <style>\n    p {margin:0}\n  </style>\n  <a part=\"grid-item\" href=\"\">\n    <img part=\"\"grid-item-img\" src=\"\" alt=\"\" width=\"50px\" height=\"50px\">\n    <div class=\"grid-item-text\" part=\"grid-item-text\">\n      <p></p>\n      <p part=\"grid-item-deployments\"></p>\n    </div>\n  </a>\n";
  customElements.define('grid-item', /*#__PURE__*/function (_HTMLElement15) {
    _inherits(StatGridItem, _HTMLElement15);

    var _super15 = _createSuper(StatGridItem);

    function StatGridItem() {
      var _this19;

      _classCallCheck(this, StatGridItem);

      _this19 = _super15.call(this);
      _this19.showInfo = true;

      _this19.attachShadow({
        mode: 'open'
      });

      _this19.shadowRoot.appendChild(gridItemTemplate.content.cloneNode(true));

      return _this19;
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
      }
    }]);

    return StatGridItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var StatGridContainerTemplate = document.createElement('template');
  StatGridContainerTemplate.innerHTML = "\n  <div part=\"stat-grid\">\n    <slot name=\"grid-item\"/>\n  </div>\n";
  customElements.define('stat-grid', /*#__PURE__*/function (_HTMLElement16) {
    _inherits(GridContainer, _HTMLElement16);

    var _super16 = _createSuper(GridContainer);

    function GridContainer() {
      var _this20;

      _classCallCheck(this, GridContainer);

      _this20 = _super16.call(this);
      _this20.showInfo = true;

      _this20.attachShadow({
        mode: 'open'
      });

      _this20.shadowRoot.appendChild(StatGridContainerTemplate.content.cloneNode(true));

      return _this20;
    }

    return _createClass(GridContainer);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var statGridItemTemplate = document.createElement('template');
  statGridItemTemplate.innerHTML = "\n  <style>\n    p {margin:0}\n  </style>\n  <div part=\"stat-grid-item\">\n    <p part=\"stat-grid-item-label\"></p>\n    <p part=\"stat-grid-item-count\"></p>\n  </div>\n";
  customElements.define('stat-grid-item', /*#__PURE__*/function (_HTMLElement17) {
    _inherits(StatGridItem, _HTMLElement17);

    var _super17 = _createSuper(StatGridItem);

    function StatGridItem() {
      var _this21;

      _classCallCheck(this, StatGridItem);

      _this21 = _super17.call(this);
      _this21.showInfo = true;

      _this21.attachShadow({
        mode: 'open'
      });

      _this21.shadowRoot.appendChild(statGridItemTemplate.content.cloneNode(true));

      return _this21;
    }

    _createClass(StatGridItem, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var text = this.shadowRoot.querySelectorAll('p');
        text[0].innerText = this.getAttribute('label');
        text[1].innerText = this.getAttribute('count');
      }
    }]);

    return StatGridItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var cardGridTemplate = document.createElement('template');
  cardGridTemplate.innerHTML = "\n  <div part=\"card-grid-container\">\n    <slot name=\"card-item\"/>\n  </div>\n";
  customElements.define('card-grid', /*#__PURE__*/function (_HTMLElement18) {
    _inherits(CardGrid, _HTMLElement18);

    var _super18 = _createSuper(CardGrid);

    function CardGrid() {
      var _this22;

      _classCallCheck(this, CardGrid);

      _this22 = _super18.call(this);
      _this22.showInfo = true;

      _this22.attachShadow({
        mode: 'open'
      });

      _this22.shadowRoot.appendChild(cardGridTemplate.content.cloneNode(true));

      return _this22;
    }

    _createClass(CardGrid, [{
      key: "connectedCallback",
      value: function connectedCallback() {}
    }]);

    return CardGrid;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var cardTemplate = document.createElement('template');
  cardTemplate.innerHTML = "\n  <style>\n    p {margin:0}\n  </style>\n  <div part=\"card-container\">\n    <div part=\"card-holder\">\n      <div part=\"card-holder-header\">\n        <img part=\"card-profile-icon\" class=\"profile-icon\" src=\"\" alt=\"\" width=\"50px\" height=\"50px\">\n        <div part=\"card-holder-header-text\">\n          <p part=\"card-holder-name\" class=\"card-holder-name\"></p>\n          <p part=\"deployment-time\" class=\"deployment-time\"></p>\n        </div>\n      </div>\n      <img class=\"status-icon\" src=\"\"/>\n    </div>\n    <div part=\"card-holder-info\">\n      <p class=\"activity\">Active, no issues</p>\n      <p class=\"terms-conditions\">T&C accepted</p>\n      <p class=\"licence\">License expired</p>\n    </div>\n  </div>\n";
  customElements.define('card-item', /*#__PURE__*/function (_HTMLElement19) {
    _inherits(CardItem, _HTMLElement19);

    var _super19 = _createSuper(CardItem);

    function CardItem() {
      var _this23;

      _classCallCheck(this, CardItem);

      _this23 = _super19.call(this);
      _this23.showInfo = true;

      _this23.attachShadow({
        mode: 'open'
      });

      _this23.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));

      return _this23;
    }

    _createClass(CardItem, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        this.shadowRoot.querySelector('.profile-icon').src = this.getAttribute('profile-icon-src');
        this.shadowRoot.querySelector('.card-holder-name').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('.deployment-time').innerText = this.getAttribute('deployment-time');
        this.shadowRoot.querySelector('.status-icon').src = this.getAttribute('status-icon-src');

        if (this.getAttribute('activity')) {
          this.shadowRoot.querySelector('.activity').innerText = this.getAttribute('activity');
        }

        if (this.getAttribute('terms-conditions')) {
          this.shadowRoot.querySelector('.terms-conditions').innerText = this.getAttribute('terms-conditions');
        }

        if (this.getAttribute('licence')) {
          this.shadowRoot.querySelector('.licence').innerText = this.getAttribute('licence');
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['name', 'deployment-time', 'profile-icon-src', 'status-icon-src', 'activity', 'terms-conditions', 'licence'];
      }
    }]);

    return CardItem;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var titleCTAComponentTemplate = document.createElement('template');
  titleCTAComponentTemplate.innerHTML = "\n<style>\n  p {margin:0}\n</style>\n<div class=\"title-cta-container\" part=\"title-cta-container\">\n  <p part=\"title-cta-text\"></p>\n  <slot name=\"button-slot\"/>\n</div>\n";
  customElements.define('title-cta', /*#__PURE__*/function (_HTMLElement20) {
    _inherits(TitleCTAComponent, _HTMLElement20);

    var _super20 = _createSuper(TitleCTAComponent);

    function TitleCTAComponent() {
      var _this24;

      _classCallCheck(this, TitleCTAComponent);

      _this24 = _super20.call(this);
      _this24.showInfo = true;

      _this24.attachShadow({
        mode: 'open'
      });

      _this24.shadowRoot.appendChild(titleCTAComponentTemplate.content.cloneNode(true));

      return _this24;
    }

    _createClass(TitleCTAComponent, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {}
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');

        if (this.getAttribute('border-bottom') == 'true') {
          this.shadowRoot.querySelector('.title-cta-container').part.add('title-cta-container-border');
        }
      }
    }]);

    return TitleCTAComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var alertComponentTemplate = document.createElement('template');
  alertComponentTemplate.innerHTML = "\n  <div part=\"alert-component\">\n    <slot name=\"alert\"/>\n  </div>\n";
  customElements.define('alert-component', /*#__PURE__*/function (_HTMLElement21) {
    _inherits(AlertComponent, _HTMLElement21);

    var _super21 = _createSuper(AlertComponent);

    function AlertComponent() {
      var _this25;

      _classCallCheck(this, AlertComponent);

      _this25 = _super21.call(this);
      _this25.showInfo = true;

      _this25.attachShadow({
        mode: 'open'
      });

      _this25.shadowRoot.appendChild(alertComponentTemplate.content.cloneNode(true));

      return _this25;
    }

    return _createClass(AlertComponent);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  var alertTemplate = document.createElement('template');
  alertTemplate.innerHTML = "\n<div part=\"alert-wrapper\" class=\"alert-wrapper\"></div>\n";
  customElements.define('custom-alert', /*#__PURE__*/function (_HTMLElement22) {
    _inherits(CustomAlert, _HTMLElement22);

    var _super22 = _createSuper(CustomAlert);

    function CustomAlert() {
      var _this26;

      _classCallCheck(this, CustomAlert);

      _this26 = _super22.call(this);
      _this26.showInfo = true;

      _this26.attachShadow({
        mode: 'open'
      });

      _this26.shadowRoot.appendChild(alertTemplate.content.cloneNode(true));

      return _this26;
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

}));
