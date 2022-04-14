<template>
    <div class="row d-flex justify-content-between align-items-center file-search-container">
      <div class="col-10 search-title">
        <span v-show="!isActive">{{title}}</span>
        <input
          ref="inputRef"
          v-model="inputValue"
          v-show="isActive"
          @keyup.enter="handleSearch"
          @keyup.esc="cancelSearch"
          @blur="cancelSearch"
          type="text"
          placeholder="placeholder string"
          class="form-control"
        />
      </div>
      <div class="col-2">
        <i
          :class="['iconfont', 'search-buuton', isActive ? 'icon-close' : 'icon-search']"
          @click="handleClick"
        ></i>
      </div>
    </div>
</template>

<script>
import { nextTick, ref } from 'vue'
export default {
  name: 'FileSearch',
  emits: ['search'],
  props: {
    title: {
      default: 'title'
    }
  },
  setup (props, ctx) {
    const isActive = ref(false) // 默认未激活
    const inputRef = ref(null)
    const inputValue = ref('')
    const handleClick = () => {
      // 未激活时 显示的是搜索时
      if (!isActive.value) {
        isActive.value = true
        nextTick(() => inputRef.value.focus())
      } else {
        cancelSearch()
      }
    }

    function cancelSearch () {
      isActive.value = false // 隐藏
      inputValue.value = '' // 清空搜索框
    }

    function handleSearch () {
      ctx.emit('search', inputValue.value)
    }
    return {
      isActive,
      inputValue,
      inputRef,
      handleClick,
      cancelSearch,
      handleSearch
    }
  }
}
</script>

<style lang="scss" scoped>
.file-search-container {
  min-height: 42px;
  background-color: #98DBD2;
}

.search-input {
  outline: none;
  border: none;
  display: inline-block;
}

.search-title {
  font-weight: bold;
  user-select:none;
}

.search-buuton {
  display: inline-block;
  text-align: center;
  font-size: 22px;
  cursor: pointer;
}
</style>
