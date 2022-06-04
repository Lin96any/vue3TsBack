<template>
  <!--账户登陆-->
  <div class="account_login">
    <el-form :model="accountInfo" :rules="ValidateAccount" ref="accountForm">
      <el-form-item label="用户帐号：" prop="account">
        <el-input v-model="accountInfo.account" placeholder="请输入登陆账户">
          <template #prefix>
            <svg-icon iconName="user" :width="24" :height="24" ></svg-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="用户密码："  prop="password">
        <el-input type="password" placeholder="请输入用户密码" show-password v-model="accountInfo.password">
          <template #prefix>
            <svg-icon iconName="password" :width="24" :height="24" ></svg-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {ref, defineExpose, reactive} from "vue";
import {ValidateAccount} from "../validate";
import type {FormInstance} from "element-plus";
const accountInfo = reactive({
  account: "",
  password: ""
})

const accountForm = ref<FormInstance>();

const SubmitValidate = () => {
  accountForm.value?.validate((vali)=>{
      if(vali){
        console.log(accountInfo.password)
      }
  })
}

//重置表单
const resetFrom = () => {
  accountForm.value?.resetFields();
}

defineExpose({
  SubmitValidate,
  resetFrom
})

</script>

<style scoped lang="scss">
.account_login {
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .el-input {
    height: .5rem;
  }
}
</style>