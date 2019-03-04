<template>
  <div class="wapper">
    <swiper :options="swiperOption"
            ref="mySwiper"
            v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(item) in list"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
      <!-- <div class="swiper-button-prev"
         slot="button-prev"></div>
    <div class="swiper-button-next"
         slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"
         slot="scrollbar"></div> -->
    </swiper>
  </div>

</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    showSwiper () {
      return this.list.length
    }
  },
  mounted () {
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 100, false)
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee
.swiper-img
  width 100%
</style>
