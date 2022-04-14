<template>
    <div class="bottom-button-container" :style="`color:${color[0]};background-Color:${color[1]};`" @click="handleClick">
        <i :class="['iconfont', icon ]"></i>
        <slot>按钮</slot>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    color: {
      type: Array
    }
  },
  setup () {
    function handleClick () {
      console.log('click')
    }
    return {
      handleClick
    }
  }

}
</script>

<style lang="scss" scoped>
.bottom-button-container {
    cursor: pointer;
}
</style>
