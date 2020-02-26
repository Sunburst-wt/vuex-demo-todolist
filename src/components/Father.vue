<template>
  <div class="hello">
    <input type="text" v-model="massage">
    <button @click="handleAdd">添加</button>
    {{v}}
    <button @click="handleModify">修改</button>
    <Children></Children>

  </div>
</template>

<script>
import Children from './Children';
import Vuex from 'vuex'

export default {
  name: 'Father',
  components:{
    Children  
  },
  props: {
    msg: String
  },

  data() {
    return{
      massage:''
    }
  },

  computed : {
      ...Vuex.mapState({
      i : state => state.index,
      v : state => state.val
    }),
  },

  methods:{
    handleAdd() {
      // this.$store.commit('handleAdd')
      console.log(111,this.$store)
      // this.$store.commit('handleMassage','val1',"val2")
      this.$store.dispatch('handleActions','fuzujianactions')
    },

    handleModify() {
      console.log(222)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
