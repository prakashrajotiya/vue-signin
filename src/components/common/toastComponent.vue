<template>
  <div class="toast" v-if="showToast">{{ showToast }}Toast Component</div>
</template>

<script>
import { ref } from "vue";
// import useEmitter from "@/utils/eventBus";
export default {
  props: {
    showToast: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      hello: ref(true),
    };
  },
};
</script>

<style lang="scss" scoped>
.toast {
  width: 300px;
  padding: 15px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px grey;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
