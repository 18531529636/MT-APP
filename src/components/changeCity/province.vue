<template>
  <div class="">
    <span class="name">按省份选择：</span>
    <m-select
      @change-value="changeProvince"
      @change-active="changeActiveProvince"
      :value="province"
      title="省份"
      :list="provinceList"
      :showWrapperActive="provinceActive"
    />
    <m-select
      @change-value="changeCity"
      @change-active="changeActiveCity"
      :value="city"
      title="城市"
      :list="cityList"
      :showWrapperActive="cityActive"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from '@/components/changeCity/select.vue'
export default {
  data() {
    return {
      province: "省份",
      city: "城市",
      provinceList: ['山东', '甘肃', '黑龙江', '新疆', '海南', '浙江', '四川'],
      cityList: ['淄博', '临沂', '哈尔滨', '南充'],
      provinceActive: false,
      cityActive: false,
      searchList: ['淄博', '临沂', '哈尔滨', '南充'],
      searchWord: '',
      loading: false
    }
  },
  components: {
    MSelect
  },
  methods: {
    changeProvince(item) {
      this.province = item
    },
    changeCity(item) {
      this.city = item
    },
    changeActiveProvince() {
      if (this.cityActive) {
        this.cityActive = false
      }
      if (!this.provinceActive) {
        this.provinceActive = true
      } else {
        this.provinceActive = false
      }
    },
    changeActiveCity() {
      if (this.provinceActive) {
        this.provinceActive = false
      }
      if (!this.cityActive) {
        this.cityActive = true
      } else {
        this.cityActive = false
      }
    },
    remoteMethod(val){
      console.log(val)
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>
