import type { App } from "vue";

import VNum from "./VNum.vue";

VNum.install = (Vue: App) => {
  Vue.component(VNum.name, VNum);
};

export default VNum;
