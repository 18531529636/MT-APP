<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a href="'#city'+item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item, index) in list" :key="index">
      <dt>{{ item }}</dt>
      <dd>
        <!-- <span
          v-for="(item_city, index_city) in cityList"
          :key="index_city"
        ></span> -->
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>
