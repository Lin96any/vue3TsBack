<template>
  <div class="select_content">
    <el-tabs stretch v-model="TabsType">
      <el-tab-pane label="普通登陆" name="account">
        <account ref="accountLogin"></account>
      </el-tab-pane>
      <el-tab-pane label="手机登陆" name="phone"></el-tab-pane>
    </el-tabs>

    <!--   底部按钮-->
    <el-button type="primary" size="large" @click="login">{{LoginTypeTitle}}</el-button>
  </div>
</template>

<script setup lang="ts">
import account from "./AccountLogin.vue";
import {ref, watch} from "vue";

const accountLogin = ref<InstanceType<typeof account>>();
const TabsType = ref("account");
const LoginTypeTitle = ref("账户登陆")


watch(TabsType,(newValue)=>{
  switch (newValue) {
    case "account":
      LoginTypeTitle.value = "账户登陆";
      break;
    default:
      LoginTypeTitle.value= "手机登陆";
      accountLogin.value.resetFrom();
  }
})

//登陆按钮点击事件
const login = async ()=> {
  const SelectType = TabsType.value;
  switch (SelectType){
    case "account":
      accountLogin.value.SubmitValidate();
      break;
    default:
     console.log(1);
  }
}
</script>

<style scoped lang="scss">
.select_content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-tabs{
    width: 100%;
    height: 80%;
  }
  .el-button{
    width: 50%;
    margin-bottom: 10px;
  }
}
</style>