# Vue Tailwind Modal Lightbox

A Vue component that creates a Modal\Lightbox using [Tailwind CSS](https://tailwindcss.com).

## Project setup

```
npm install --save vue-tailwind-modal
```

or

```
yarn add vue-tailwind-modal
```

## Using the modal

### Installing globally

In your main js file:

```js
import VueTailwindModal from "vue-tailwind-modal"
Vue.component("VueTailwindModal", VueTailwindModal)
```

### Using within a component

In your component .vue file

```js
import VueTailwindModal from 'vue-tailwind-modal'

export default {
  components: {
	VueTailwindModal,
	...
  },
  ...
```

Once installed simply use as any other component:

```html
<vue-tailwind-modal
	:showing="true"
	@close="showModal = false"
	:showClose="true"
	:backgroundClose="true"
>
	<!-- Put your modal content here -->
</vue-tailwind-modal>
```

To hide and show the modal simply pass a boolean to the :showing attribute (true to show, false to hide).
You can capture the close event using @close to hide the modal (as in the example above) and do further processing.
If you do not wish to show the close button (top right) change :showClose to false.

By default clicking on the background will close the modal. To prevent this change backgroundClose parameter to `false`.

### Background colour

If you would like to grey out the background you will need to add the "smoke" background colour to your tailwind.config.js file, an example below:

```js
module.exports = {
	theme: {
		extend: {
			colors: {
				"smoke-900": "rgba(0, 0, 0, 0.9)",
				"smoke-800": "rgba(0, 0, 0, 0.75)",
				"smoke-600": "rgba(0, 0, 0, 0.6)",
				smoke: "rgba(0, 0, 0, 0.5)",
				"smoke-400": "rgba(0, 0, 0, 0.4)",
				"smoke-200": "rgba(0, 0, 0, 0.25)",
				"smoke-100": "rgba(0, 0, 0, 0.1)",
			},
		},
	},
	variants: {},
	plugins: [],
}
```

### Animate in/out

An optional CSS file can be included (using your CSS management technique of choice) css/modal.css that will add a fade in and out animation to the modal.

```js
@import "modal"; // postCSS
```

### Purge CSS in production

When using purge CSS in production you will need to add the smoke background colour you use to the Purge CSS whitelist and inlcude the modules classes for purging. Below is an example tailwind.config.js extract:

```js
module.exports = {
   purge: {
	content: [
		'./apps-ui/portal/layouts/**/*.vue',
		'./apps-ui/portal/pages/**/*.vue',
		'./apps-ui/portal/components/**/*.vue',
		'./apps-ui/portal/plugins/**/*.vue',
		'./apps-ui/portal/static/**/*.vue',
		'./apps-ui/portal/store/**/*.vue',
		'./node_modules/vue-tailwind-modal/src/VueTailwindModal.vue',
	],
	options: {
		// Include the bg-smoke for use when css is compressed
		// see: https://tailwindcss.com/docs/controlling-file-size
		whitelist: ['bg-smoke-800'],
	},
   },
}
```
