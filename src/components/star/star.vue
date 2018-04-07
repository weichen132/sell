<template>
  <div class="star" :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item">

      </span>
  </div>
</template>

<script type="type/ecmascript-6">
export default {
  props:{
      size:{
          type:Number
      },
      score:{
          type:Number
      }
  },
  computed:{
     starType(){
         return 'star-'+this.size
     }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .star
        .star-item
            display inline-block
        &.star-48
        &.star-36
        &.star-24
</style>
