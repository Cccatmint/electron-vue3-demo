<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 bg-danger left-panel">
        <FileSearch
          title="我的云文档"
          @search="handleSearch"
        />
      </div>
      <div class="col-9 bg-primary right-panel">right</div>
    </div>
  </div>
</template>

<script>
import FileSearch from '../components/FileSearch.vue'
export default {
  components: { FileSearch },
  setup () {
    function handleSearch (payload) {
      // todo: search handle
      console.log(payload)
    }
    return {
      handleSearch
    }
  }
}
</script>

<style lang="scss">
</style>
