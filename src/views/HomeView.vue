<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 bg-danger left-panel">
        <FileSearch title="我的云文档" @search="handleSearch" />
        <FileList :files="defaultFiles || []"/>
      </div>
      <div class="col-9 bg-primary right-panel">right</div>
    </div>
  </div>
</template>

<script>
import FileSearch from '../components/FileSearch.vue'
import FileList from '../components/FileList.vue'
import { defaultFiles } from '../components/filesData.js'
export default {
  components: { FileSearch, FileList },
  setup () {
    function handleSearch (payload) {
      // todo: search handle
      console.log(payload)
      console.log(defaultFiles)
    }
    return {
      handleSearch,
      defaultFiles
    }
  }
}
</script>

<style lang="scss">
</style>
