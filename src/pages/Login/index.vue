<template>
    <div class="login-container">
      <div class="login-wrap">
        <div class="login">
          <div class="loginform">
            <ul class="tab">
              <li>
                <a href="#">掃描登入</a>
              </li>
              <li>
                <a href="#" class="current">帳戶登入</a>
              </li>
            </ul>

            <div class="content">
              <form >
                <div class="input-text">
                  <span></span>
                  <input type="text" placeholder="手機號" v-model="phone">
                </div>
                <div class="input-text">
                  <span class="pwd"></span>
                  <input type="text" placeholder="請輸入密碼" v-model="password">
                </div>
                <div class="seeting">
                  <label class="ckeckbox">
                    <input type="checkbox" value="2" checked="">
                    自動登入
                  </label>
                  <span class="forget">忘記密碼</span>
                </div>
                <button class="btn" @click="userLogin">登&nbsp;&nbsp;入</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'MyLogin',
  data() {
    return {
      phone:'',
      password:''
    }
  },
  methods:{
    async userLogin(){
      try {
        const{phone,password} = this
        if(phone && password && await this.$store.dispatch('userLogin',{phone,password})){
      this.$router.push('/home')
        }else{
          alert('請輸入帳號或密碼')
        }
      } catch (error) {
        alert(error.message)
      }

    }
  }
  }
  </script>
  
  <style lang="scss" scoped>
.login{
  height: 500px;
  margin: 0 auto;
  position: relative;
  background-image: url(./img/pexels-photo-235985.jpeg);
  margin-bottom: 20px;
}
  .loginform{
    width: 400px;
    height: 300px;
    position: absolute;
    right: 100px;
    background-color: #fff;
    top: 100px;

  }
  .tab{
    display: flex;
    justify-content: center;
    border: 1px solid hsl(0, 0%, 0%,.2);
    margin-bottom: -1px;
    height: 40px;

    li{
      text-align: center;
      flex-grow: 1;
      line-height: 40px;
    }
  }
  .input-text input{
    width: 300px;
    height: 30px;
    border: 1px solid hsl(0, 0%, 0%,.2);
    margin:5px 10px;
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid hsl(0, 0%, 0%,.2);
    padding-top: 20px;
  }

 .seeting{
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  width: 300px;
  align-items: center;
  font-size: 14px;
 }

 .btn{
  width: 300px;
  height: 30px;
  background-color: red;
  color: white;
  margin-bottom: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: 900;
 }

 form{
  display: flex;
  flex-direction: column;
  align-items: center;
 }
  </style>