<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 left-panel">
        <FileSearch title="我的云文档" @search="handleSearch" />
        <FileList :files="defaultFiles || []"/>
        <div class="row d-flex justify-content-between align-items-center">
          <BottomButton icon="icon-add" :color="['white', 'green']" class="col-6">新建</BottomButton>
          <BottomButton icon="icon-import" :color="['white', 'blue']" class="col-6">导入</BottomButton>
        </div>
      </div>
      <div class="col-9 right-panel">
        <TabList
          :files="defaultFiles || []"
          :activeId="'2'"
          :unsavedIds="['3','4']"
          @tab-close="handleTabClose($event)"
          @tab-click="handleTabClick($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FileSearch from '../components/FileSearch.vue'
import FileList from '../components/FileList.vue'
import BottomButton from '../components/BottomButton.vue'
import TabList from '../components/TabList.vue'
import { defaultFiles } from '../components/filesData.js'
export default {
  components: { FileSearch, FileList, BottomButton, TabList },
  setup () {
    function handleSearch (payload) {
      // todo: search handle
      console.log(payload)
      console.log(defaultFiles)
    }

    function handleTabClose (payload) {
      console.log('handle-tab-close, payload: ', payload)
    }
    function handleTabClick (payload) {
      console.log('handle-tab-clike, payload: ', payload)
    }
    return {
      handleSearch,
      handleTabClose,
      handleTabClick,
      defaultFiles
    }
  }
}
</script>

<style lang="scss">
</style>
