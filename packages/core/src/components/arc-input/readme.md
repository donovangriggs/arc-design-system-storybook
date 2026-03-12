# arc-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                        | Default     |
| -------------- | --------------- | ----------- | --------------------------------------------------------------------------- | ----------- |
| `disabled`     | `disabled`      |             | `boolean`                                                                   | `false`     |
| `errorMessage` | `error-message` |             | `string \| undefined`                                                       | `undefined` |
| `helperText`   | `helper-text`   |             | `string \| undefined`                                                       | `undefined` |
| `label`        | `label`         |             | `string \| undefined`                                                       | `undefined` |
| `name`         | `name`          |             | `string \| undefined`                                                       | `undefined` |
| `placeholder`  | `placeholder`   |             | `string`                                                                    | `''`        |
| `required`     | `required`      |             | `boolean`                                                                   | `false`     |
| `size`         | `size`          |             | `"lg" \| "md" \| "sm"`                                                      | `'md'`      |
| `type`         | `type`          |             | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`        | `value`         |             | `string`                                                                    | `''`        |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `arcBlur`   |             | `CustomEvent<void>`   |
| `arcChange` |             | `CustomEvent<string>` |
| `arcFocus`  |             | `CustomEvent<void>`   |
| `arcInput`  |             | `CustomEvent<string>` |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"error"`   |             |
| `"helper"`  |             |
| `"input"`   |             |
| `"label"`   |             |
| `"wrapper"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
