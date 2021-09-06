<template>
  <div id="app">
<!--    <component :is="layout">-->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
<!--    </component>-->
  </div>
</template>

<script>
// const default_layout = "default";
export default {
  name: 'App',
  computed: {
    // layout() {
    //   return (this.$route.meta.layout || default_layout) + '-layout';
    // }
  },
  methods:{

  }
}
</script>

<style lang="scss">
  @import "assets/base.scss";
</style>