<template>
  <div class="m-crumbs">
    <el-breadcrumb  separator-class="el-icon-arrow-right">
      <el-breadcrumb-item  :to="{ path: '/' }">{{ $store.state.position }}美团</el-breadcrumb-item>
      <el-breadcrumb-item>
        <p>{{ $store.state.position }}{{ $route.params.name }}</p>
        <!--  -->
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      searchWord: ''
    }
  },
  computed: {
    store_searchWord() {
      this.$store.state.searchWord
    }
  },
  watch: {
    store_searchWord(val){
      this.searchWord = val
    }
  }
}
</script>

<style lang="scss">
</style>
