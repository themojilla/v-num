<template>
  <v-num
    #="{ number }"
    :value="17.5678 / 100"
    number-style="percent"
    maximum-fraction-digits="2"
    sign-display="always"
  >
    <span>{{ number }} </span>
  </v-num>
</template>

<script setup>
import VNum from "../src";
</script>
