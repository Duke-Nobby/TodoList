<template>
    <div>
      <input v-model="label" v-on:keyup.enter="addCheckBox()"/>
      <div>
        <span v-for="checkBox in checkBoxes">
          <span> {{checkBox.label}}</span>
          <input type="checkbox" v-model="checkBox.isChecked" />
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name:'multi-check-box',
        data(){
            return {
                label:'',
                checkBoxes:[],
            }
        },
      methods:{
        addCheckBox:function () {
            if (this.label != null){
            this.checkBoxes.push({
                label:this.label,
                isChecked:false,
          });
            this.label = '';
          }}
      },
    }
</script>

<style>
  span{
    text-decoration: line-through;
  }
</style>
