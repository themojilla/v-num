<template>
  <slot :number="number" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "VNum" });
</script>

<script setup lang="ts">
import { withDefaults, ref, defineProps, watch } from "vue";

import { omit, omitBy } from "./utils";

type Props = {
  value: number;
  locale: string;
  localeMatcher: "lookup" | "best fit";
  currency: string;
  currencyDisplay: "symbol" | "code" | "name";
  numberStyle: "decimal" | "currency" | "percent" | "unit";
  useGrouping: boolean;
  minimumIntegerDigits?: number | string;
  minimumFractionDigits?: number | string;
  maximumFractionDigits?: number | string;
  minimumSignificantDigits?: number | string;
  maximumSignificantDigits?: number | string;
  notation: "standard" | "scientific" | "engineering" | "compact";
  compactDisplay: "short" | "long";
  signDisplay: "auto" | "never" | "always" | "exceptZero";
  round: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  locale: "en-US",
  localeMatcher: "best fit",
  currency: "USD",
  currencyDisplay: "symbol",
  numberStyle: "decimal",
  useGrouping: true,
  notation: "standard",
  compactDisplay: "short",
  signDisplay: "auto",
  round: false,
});

const number = ref();

watch(
  () => props,
  () => {
    const configs = omitBy(
      omit<typeof props>(props, ["value", "locale", "numberStyle"]),
      (v: any) => v === null || v === undefined
    );

    // To prevent compiler error we need to change style prop name
    (configs as any).style = props.numberStyle;

    number.value = new Intl.NumberFormat(props.locale, configs as any).format(
      props.round ? Math.round(props.value) : props.value
    );
  },
  { deep: true, immediate: true }
);
</script>
