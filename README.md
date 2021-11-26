A Vue 3 headless component to formatting numbers using Intl.numberFormat.

> Warning: the `v3-num` tend to use Intl.numberFormat API internally. It is made for modern browsers, but if you want to keep things also working for older ones, make sure to polyfill the Intl API

## Installation

```bash
yarn add v3-num
```

## Usage

### Globally

```js
import { createApp } from "vue";
import VNum from "v3-num";

createApp.use(VNum);
```

### Individually

```vue
<template>
  <v-num #="{ number }" :value="1000">
    {{ number }}
  </v-num>
</template>

<script setup>
import VNum from "v3-num";
</script>
```

## Examples

Basic decimal formatter.

```vue
<template>
  <v-num #="{ number }" :value="1000" round>
    {{ number }}
  </v-num>
</template>

<script setup>
import VNum from "v3-num";
</script>
```

Output:

```
1,000
```

---

Make the value rounded to the nearest integer.

```vue
<template>
  <v-num #="{ number }" :value="1000.555" round>
    {{ number }}
  </v-num>
</template>

<script setup>
import VNum from "v3-num";
</script>
```

Output:

```
1,001
```

---

Percentage formatting

```vue
<template>
  <num
    #="{ number }"
    :value="17.5678 / 100"
    number-style="percent"
    maximum-fraction-digits="2"
    sign-display="always"
  >
    {{ number }}
  </num>
</template>

<script setup>
import VNum from "v3-num";
</script>
```

Output:

```
+17.57%
```

For more example checkout the [Intel.numberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) documentations.
