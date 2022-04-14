<template>
  <li
    class="
      file-list-item
      list-group-item
      row
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <i v-show="!isEdit" class="iconfont icon-markdown col-1"></i>
    <span v-show="!isEdit" class="col-9 text-truncate">{{ file.title }}</span>
    <input
      ref="inputRef"
      v-if="isEdit"
      v-model="inputValue"
      @keyup.enter="$emit('edit', inputValue)"
      @blur="cancelInput"
      type="text"
      class="col-10"
    />
    <div class="operate-button col-2">
      <i
        :class="['iconfont', isEdit ? 'icon-close' : 'icon-edit']"
        @click="handleEditClick"
      ></i>
      <i
        v-show="!isEdit"
        class="iconfont icon-delete"
        @click="$emit('delete')"
      ></i>
    </div>
  </li>
</template>

<script>
// dsc: click 'edit button' & enter => emit('edit', inputValue)
// dsc: click 'delete button' => emit('delete)
import { nextTick, ref } from 'vue'
export default {
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  emits: ['edit', 'delete'],
  setup (props) {
    const isEdit = ref(false)
    const inputValue = ref('')
    const inputRef = ref(null)

    function cancelInput () {
      inputValue.value = ''
      isEdit.value = false
    }

    function handleEditClick () {
      isEdit.value = !isEdit.value
      if (isEdit.value) {
        inputValue.value = props.file.title
        nextTick(() => {
          inputRef.value.focus()
        })
      }
    }
    return {
      isEdit,
      inputValue,
      inputRef,
      cancelInput,
      handleEditClick
    }
  }
}
</script>

<style lang="scss" scoped>
.file-list-item {
  min-height: 50px;

  .operate-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    font-weight: bold;

    i {
      cursor: pointer;
    }
  }

  .edit-input {
    outline: none;
    box-sizing: border-box;
  }
}
</style>
