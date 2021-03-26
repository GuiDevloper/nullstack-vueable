# Nullstack Vueable

Making Nullstack framework able to read Vue basic template syntax

## Installation

Run this command on your Nullstack project:

```sh
npm install nullstack-vueable -D
```

or, using Yarn:

```sh
yarn add nullstack-vueable -D
```

Then import it in your **index.js** file (as shown here in **tests/index.js**):

```js
import vueable from 'nullstack-vueable';

Nullstack.use(vueable);
```

## Examples

> All of this can be seen being used on tests folder

### `v-for`

```jsx
array = [25, 1, {data: {data2: 10}}, {data: {data2: 20}}];
renderVFor() {
  return (
    <>
      <span v-for={'item in ' + JSON.stringify(this.array)}>
        item.data.data2
      </span>
      <button onclick={{array: [...this.array, ...this.array]}}>
        Double array
      </button>
    </>
  )
}
```

### `v-if`

```jsx
showTitle = true;
renderVif() {
  return (
    <>
      <h1
        v-if="showTitle"
        source={this}
      >
        Element to be hidden
      </h1>
      <button
        onclick={{showTitle: !this.showTitle}}
      >
        Toggle title
      </button>
    </>
  )
}
```

### `v-html`

```jsx
boldTitle() {
  return `<b>${this.title}</b>`;
}
renderVhtml() {
  return (
    <h1
      v-html="boldTitle"
      source={this}
    ></h1>
  )
}
```

### `v-model`

```jsx
title = 'Nullstack';
renderVModel() {
  return (
    <input
      type="text"
      v-model="title"
      source={this}
    />
  )
}
```

### Use of it all in the [`render`](https://nullstack.app/renderable-components) function

```jsx
render() {
  return (
    <>
      <Vif/>
      <Vhtml/>
      <VFor/>
      <VModel/>
    </>
  )
}
```