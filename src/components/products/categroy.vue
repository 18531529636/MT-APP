<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="menu in menuList" :key="menu.type">
        <m-select :list="menu.subList" :name="menu.title" />
      </dd>
    </dl>

    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(address, index) in addressList" :key="index">
        <m-select :list="address.subList" :name="address.title" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from '@/components/products/select.vue'

export default {
  components: {
    MSelect
  },
  data() {
    return {
      menuList: [
        {
          "title": "美食",
          "type": "food",
          "subList": [{
            "name": "日本菜",
            "id": "Japan"
          }]
        }, {
          "title": "酒店住宿",
          "type": "hotal",
          "subList": [{
            "name": "温泉酒店",
            "id": "hot_spring"
          }]
        }
      ],
      addressList: [{
        "title": "推荐商圈",
        "subList": [{
          "name": "望京",
          "id": 120000
        }, {
          "name": "昌平",
          "id": 12222
        }]
      }]
    }
  }
}
</script>
