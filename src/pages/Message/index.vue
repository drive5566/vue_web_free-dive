<template>
<div class="w">
    <h2>留言板</h2>



    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <p class="username">{{ message.username }}</p>
        <p>{{ message.content }}</p><br>
        <p>{{ message.timestamp }}</p>
      </li>
    </ul>

    <input v-model="newMessage.content" placeholder="新增留言" class="content"/>
    <input v-model="newMessage.username" placeholder="用戶名"  class="iptname"/>
    <button @click="addMessage">發佈</button>
  </div>


</template>

<script>
export default {
name:'MyMessage',
data() {
    return {
      messages: [],
      newMessage: {
        content: "",
        username: ""
      }
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage.content.trim() !== ""&& this.newMessage.username.trim() !== "") {
        this.newMessage.timestamp = new Date().toLocaleString();
        this.messages.unshift({...this.newMessage});
        this.newMessage.content = "";
        this.newMessage.username = "";
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.w{
    width: 600px;
    margin: 0 auto ;
    text-align: center;
    h2{
        font-size: 30px;
        margin: 30px 0;
    }
    input{
        border: 1px solid;
        width: 150px;
        height: 30px;
        margin-right: 10px;
        margin-bottom: 50px;
    }
    li{
        border-bottom: 1px solid hsl(0, 0%, 0%,.2);
        margin: 5px;
        padding-bottom: 50px;
        text-align-last: left;
    }
    p{
        margin: 5px;
    }
    .username{
        font-weight: 900;
        margin-bottom: 5px;
    }

}


</style>