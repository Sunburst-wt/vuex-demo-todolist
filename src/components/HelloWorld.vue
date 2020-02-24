<template>
  <div class="hello">
    <input type="text" v-model="massage">
    <button>添加</button>
    <button>修改</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      massage:'wangtao'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
