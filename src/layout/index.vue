<template>
  <div class="layout_wrapper">
    <!--    左侧menu-->
    <slide-bar class="sidebar-container" :style="{backgroundColor:Variables.menuBg}"></slide-bar>
    <!--    内容区-->
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/AppMain.vue";
import SlideBar from "./components/Slidebar/index.vue";
import Variables from  "@/assets/style/variables.module.scss"
import {defineComponent} from "vue";

</script>

<style scoped lang="scss">

@import '~@/assets/style/mixin.scss';
@import '~@/assets/style/variables.module.scss';
.layout_wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>