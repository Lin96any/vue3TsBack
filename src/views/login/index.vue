<template>
  <el-container>
    <el-main class='login_wrapper'>
      <!--顶部title-->
      <h1>思博瑞商品管理后台</h1>

      <!-- 登陆与注册-->
      <div class="loginOr_Register_wrapper">
        <!-- 登陆与注册选择-->
        <select_content></select_content>
      </div>

    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import select_content from "./children/SelectComps.vue";
</script>
<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  background-color: #29394b;

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-top: 2rem;
  }

  .loginOr_Register_wrapper {
    width: 5rem;
    height: 4rem;
    background-color: white;
    margin: auto;
    border-radius: 10px;
    padding: 0 .2rem;
  }
}
</style>
