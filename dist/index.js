/*!
 * vue-tailwind-modal v0.0.4
 * (c) Craig Harman
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    showing: function showing(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }

      document.querySelector('body').classList.remove('overflow-hidden');
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('Transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.showing ? _c('div', {
    staticClass: "fixed inset-0 w-full h-screen flex items-center justify-center bg-smoke-dark",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) {
          return null;
        }

        return _vm.close($event);
      }
    }
  }, [_c('div', {
    staticClass: "relative max-h-screen w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 flex"
  }, [_c('button', {
    staticClass: "absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4",
    attrs: {
      "aria-label": "close"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.close($event);
      }
    }
  }, [_vm._v("\n        ×\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "overflow-auto max-h-screen w-full"
  }, [_vm._t("default")], 2)])]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var VueTailwindModal = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("vue-tailwind-modal", VueTailwindModal);
  }
};

module.exports = index;
