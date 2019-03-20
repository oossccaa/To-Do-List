var app = new Vue({
  el: '#app',
  data: {
    taskList: [
      {
        text:"08:30開會",
        completed:false,
        editing:false
      }
    ],
    insertText:"",
    editText:""
  },
  
  methods:{
    removeElement:function(index){
      this.taskList.splice(index, 1)
    },
    addElement:function(value){
      if(!value) return;
      this.taskList.push({
        text:value,
        completed:false,
        editing:false
      });
     this.insertText = "";
    },
    editElement:function(index){
      this.taskList.forEach((item)=>{item.editing = false});
      this.taskList[index].editing = !this.taskList[index].editing;
      this.editText = this.taskList[index].text;
    },
    updateElement:function(text,index){
      this.taskList[index].text = text;
      this.taskList[index].editing = false;
    }
}
})