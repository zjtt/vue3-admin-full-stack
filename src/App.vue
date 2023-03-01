<template>
  <div id="app">
    <el-config-provider :locale="locale">
     <router-view />
    </el-config-provider>
  </div>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
export default {
  name: 'App',
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  }
}
</script>