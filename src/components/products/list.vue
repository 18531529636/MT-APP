<template>
  <div class="m-products-list">
    <dl>
      <dd
        :class="{ 's-nav-active': item.active }"
        v-for="item in nav"
        :key="item.key"
      >
        {{ item.name }}
      </dd>
    </dl>
    <el-row>
      <m-item
        v-for="(item, index) in productList"
        :key="index"
        :meta="item"
      ></m-item>
    </el-row>
  </div>
</template>

<script>
import MItem from '@/components/products/list-item.vue'
import api from "@/api/index.js";

export default {
  components: {
    MItem
  },
  data() {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格第一',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      productList: []
    }
  },
  created () {
    api.listitem().then(res=>{
      console.log(res)
      this.productList = res.data.data
    })
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/products/list.scss";
</style>
