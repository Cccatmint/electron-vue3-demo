<template>
  <ul class="file-list-container list-group list-group-flush">
    <template v-for="file in files" :key="file.id">
      <FileListItem
        :file="file"
        @edit="handleEdit($event, file)"
        @delete="handleDelete(file.id)"
      />
    </template>
  </ul>
</template>

<script>
import FileListItem from '../components/FileListItem.vue'
export default {
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  components: { FileListItem },
  setup () {
    function handleEdit (payload, file) {
      console.log('edit - payload & file: ', payload, file)
    }

    function handleDelete (id) {
      console.log('delete file by id: ', id)
    }

    return {
      handleEdit,
      handleDelete
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
