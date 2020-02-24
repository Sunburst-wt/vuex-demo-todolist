<template>
  <div class="children">
    <ul>
      <li v-for="(item, index) in val1" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Children",
  props: {
      
  },
  data() {
    return {
      val1: [1, 2, 3, 4, 5, 6],
      val2: ""
    };
  }
};
</script>

<style scoped>
</style>