<template>
  <div class="list"
       ref="wapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="(item) in hot"
               :key="item.id"
               @click="handleClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="'letter-'+key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item"
               v-for="(it) in item"
               :key="it.id"
               @click="handleClick(it.name)">{{it.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    ...mapActions(['changeCity']),
    handleClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      // console.log(city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const letterRef = 'letter-' + this.letter
        const element = this.$refs[letterRef][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
        // console.log('letterchange', this.letter)
        // console.log(this.$refs)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height 0.54rem
    background #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 0.02rem solid #ccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
