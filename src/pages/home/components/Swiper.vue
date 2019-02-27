<template>
  <div class="wapper">
    <swiper :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item) in swiperList"
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/vc/ad/7b/69/c28e29fe012cc64e4ec015b82d.jpg_92.jpg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/vc/47/23/20/cb678ea58b7b9e86be4f863e55.jpg_92.jpg'
      }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 100, false)
  }
}
</script>

<style lang="stylus" scoped>
.wapper >>> .swiper-pagination-bullet-active
  background #fff
.wapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 57%
  .swiper-img
    width 100%
</style>
