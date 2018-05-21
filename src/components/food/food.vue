<template>
    <div v-show="showFlag" class="food" transition="move" v-el:food>
        <div class="food-content">
            <div class="image-header">
                <img :src="food.image">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript6">
export default {
    props: {
        food: {
            type: Object
        }
    },
    data() {
        return {
            showFlag: false
        }
    },
    methods: {
        show() {
            this.showFlag = true;
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .food
        position fixed
        left 0
        top 0
        bottom 48px
        width 100%
        z-index 30
        background #fff
        &.move-transition
            transition all 0.4s linear 
            transform translate3d(0, 0, 0)
        &.move-enter, &move-leave
            transform translate3d(100%, 0, 0)
</style>


