<template>
  <div class="wrap">
    <ul class="tablist-container">
      <template v-for="file in files" :key="file.id">
        <li
          :class="[
            'tab-item-container',
            activeId === file.id ? 'tab-item-container-active' : '',
          ]"
          @click="handleTabClick(file.id)"
        >
          <span class="tab-title">{{ file.title || "" }}</span>
          <i
            class="iconfont icon-close tab-item-container-close-button"
            @click.stop="handleCloseClick(file.id)"
          ></i>
          <i
            v-show="unsavedIds.includes(file.id)"
            class="iconfont icon-dot tab-item-container-dot"
          ></i>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    files: Array,
    activeId: String,
    unsavedIds: Array
  },
  emits: ['tab-click', 'tab-close'],
  setup (props, { emit }) {
    function handleCloseClick (payload) {
      emit('tab-close', payload)
    }
    function handleTabClick (payload) {
      emit('tab-click', payload)
    }

    return {
      handleCloseClick,
      handleTabClick
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
    // .wrap 为了美化scrollbar
  height: 34px;
  overflow-y: hidden;
  .tablist-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 0;
    padding: 0 12px 2px 12px;
    height: 45px;

    .tab-item-container {
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin-right: 6px;
      border: 2px solid #8db4e1;
      background-color: #fefffe;
      color: #8db4e1;
      border-radius: 4px;
      cursor: pointer;

      .tab-title {
        flex-grow: 0;
        flex-shrink: 0;
        max-width: 120px;
        padding-right: 24px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .tab-item-container-close-button {
        display: none;
      }
      .tab-item-container-dot,
      .tab-item-container-close-button {
        font-size: 16px;
        position: absolute;
        right: 2px;
      }

      &:hover {
        .tab-item-container-close-button {
          display: inline-block;
        }
        .tab-item-container-dot {
          display: none;
        }
      }
    }
    .tab-item-container-active {
      color: #fefffe !important;
      background-color: #5f4df4 !important;
    }
  }
}
</style>
