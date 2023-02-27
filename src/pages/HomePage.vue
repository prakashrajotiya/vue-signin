<template>
  <div class="container">
    <div class="grid grid-cols-4">
      <div class="" v-for="item in lists" :key="item.id">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomePage",
  setup() {
    const lists = ref([]);
    const fetchdatalist = async function fetchList() {
      const json = await fetch("https://reqres.in/api/unknown");
      const data = await json.json();
      lists.value = data.data;
    };
    fetchdatalist();
    return {
      lists,
    };
  },
};
</script>

<style lang="scss" scoped></style>
