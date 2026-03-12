# arc-alert



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                         | Type                                          | Default     |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `alertTitle`  | `alert-title` |                                                                                                     | `string \| undefined`                         | `undefined` |
| `dismissible` | `dismissible` |                                                                                                     | `boolean`                                     | `false`     |
| `icon`        | `icon`        |                                                                                                     | `boolean`                                     | `true`      |
| `variant`     | `variant`     |                                                                                                     | `"error" \| "info" \| "success" \| "warning"` | `'info'`    |
| `visible`     | `visible`     | Whether the alert is visible. Set to false to programmatically dismiss, or back to true to restore. | `boolean`                                     | `true`      |


## Events

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `arcDismiss` |             | `CustomEvent<void>` |


## Shadow Parts

| Part               | Description |
| ------------------ | ----------- |
| `"action"`         |             |
| `"alert"`          |             |
| `"content"`        |             |
| `"dismiss-button"` |             |
| `"icon"`           |             |
| `"message"`        |             |
| `"title"`          |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
