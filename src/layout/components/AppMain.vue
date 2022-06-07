<template>
  <div class="app-main"><el-button type="primary" @click="getButton">获取用户信息</el-button></div>
</template>

<script lang="ts" setup>
import {defineComponent} from "vue";
import store from "@/store";
const getButton = ()=>{
  store.dispatch('userStore/getUserInfo')
}

</script>

<style scoped lang="scss">
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}

</style>