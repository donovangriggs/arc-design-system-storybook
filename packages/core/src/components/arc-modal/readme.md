# arc-modal



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                   | Type                             | Default |
| ---------------- | ------------------ | --------------------------------------------- | -------------------------------- | ------- |
| `closeOnEscape`  | `close-on-escape`  | Whether pressing Escape closes the modal      | `boolean`                        | `true`  |
| `closeOnOverlay` | `close-on-overlay` | Whether clicking the overlay closes the modal | `boolean`                        | `true`  |
| `open`           | `open`             | Whether the modal is open                     | `boolean`                        | `false` |
| `size`           | `size`             | Modal size variant                            | `"full" \| "lg" \| "md" \| "sm"` | `'md'`  |


## Events

| Event      | Description                                  | Type                |
| ---------- | -------------------------------------------- | ------------------- |
| `arcClose` | Emitted when the modal requests to be closed | `CustomEvent<void>` |


## Methods

### `hide() => Promise<void>`

Programmatically hide the modal

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Programmatically show the modal

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part             | Description |
| ---------------- | ----------- |
| `"body"`         |             |
| `"close-button"` |             |
| `"footer"`       |             |
| `"header"`       |             |
| `"modal"`        |             |
| `"overlay"`      |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
