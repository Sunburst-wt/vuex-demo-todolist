<template>
  <div class="hello">
    <input type="text" v-model="massage">
    <button>添加</button>
    <button>修改</button>
    <Children></Children>

  </div>
</template>

<script>
import Children from './Children';

export default {
  name: 'Father',
  components:{
    Children  
  },
  props: {
    msg: String
  },

  data(){
    return{
      massage:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
