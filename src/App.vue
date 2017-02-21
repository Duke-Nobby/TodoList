<template>
  <div id="app">
  <input v-model="newTodo" v-on:keyup.enter="addTodo()"/>
  <ul>
    <li v-for="todo in todos" v-bind:class="{finish:todo.isFinished}"
    v-on:click="toggoleFinish(todo)" >
      {{todo.label}}
    </li>
  </ul>
    <multi-check-box></multi-check-box>
  </div>
</template>

<script>
import Store from "./store.js"
import MultiCheckBox from './components/MultiCheckBox.vue'
//在项目中会走动生成一个new Vue()
export default {
  data:function() {
    return {
      title:"this is a vue js",
      newTodo:'',
      todos:Store.fetch(),
    }
  },
  watch:{
    todos:{
      handler:function(todos){
          Store.store(todos);
      },
        deep:true
        }

  },
  methods:{
    toggoleFinish:function(todo){
      todo.isFinished = !todo.isFinished;
      console.log(todo);
      },
    addTodo:function(){
      this.todos.push({
        label:this.newTodo,
        isFinished:false
      });
      this.newTodo='';
    }
  },
  components:{
    MultiCheckBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finish {
  color:#ff00ff;
}
</style>
