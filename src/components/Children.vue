<template>
  <div class="children">
    <div>{{$store.state.index}}</div>
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
  },

  created() {
    console.log(this)
  }
};
</script>

<style scoped>
</style>