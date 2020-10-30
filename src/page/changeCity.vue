<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <h-city title='热门城市：' :list='hList' />
    </el-row>
    <el-row>
      <r-city title='最近访问：' :list='rList' />
    </el-row>
    <el-row>
      <c-groy />
    </el-row>
  </div>
</template>


<script>
import Province from '@/components/changeCity/province.vue'
import HCity from '@/components/changeCity/hot.vue'
import RCity from '@/components/changeCity/recent-city.vue'
import CGroy from '@/components/changeCity/categroy.vue'

export default {
  components: {
    Province,
    HCity,
    RCity,
    CGroy
  },
  data () {
    return {
      hList:['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都'],
      rList: ['大厂回族自治县']
    }
  }
}
</script>


