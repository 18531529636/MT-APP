<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
          />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord_bar"
            @input="input"
            @blur="blur"
            @focus="focus"
            placeholder="搜索商家或地点"
          ></el-input>
          <router-link
            :to="{ name: 'goods', params: { name: searchWord_bar } }"
          >
            <el-button  type="primary" icon="el-icon-search" />
          </router-link>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(hot, index) in hotPlaceList" :key="index">
              <router-link to="/">{{ hot }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(search, index) in searchList" :key="index">
              <router-link to="/1">{{ search }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item, index) in suggestList" :key="index">{{
            item
          }}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {

  data() {
    return {
      searchWord_bar: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created() {
    api.searchHotWord().then(res => {
      this.hotPlaceList = res.data.data
      this.suggestList = res.data.data
    })
  },
  computed: {
    isSearchList() {
      return this.isFocus && this.searchWord_bar
    },
    isHotPlace() {
      return this.isFocus && !this.searchWord_bar
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input(){
      let val = this.searchWord_bar
      api.searchList().then(res=>{
        this.searchList = res.data.data.list.filter((item,index)=>{
          return item.indexOf(val) > -1
        })
      })
    }
  },
}
</script>
<style lang='scss'>
@import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/index.scss";
</style>
