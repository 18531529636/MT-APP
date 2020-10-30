<template>
  <div class="choose-wrap" @click="$emit('change-active')">
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showWrapperActive}">
        <p>{{ title }}</p>
        <div class="wrapper">
          <div class="col">
            <span class="mt-item" @click="$emit('change-value',item)" v-for="(item, index) in list" :key="index">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: [
    "list",
    "value",
    "title",
    "changeValue",
    "showWrapperActive"
  ],
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/select.scss'
</style>
