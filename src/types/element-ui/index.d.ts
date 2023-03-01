// 挂载到vue实例上
import { ElMessageBox, ElMessage, ElNotification } from 'element-plus'
import { Size } from '../plugins/element'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $confirm: typeof ElMessageBox.confirm;
    $alert: typeof ElMessageBox.alert;
    $prompt: typeof ElMessageBox.prompt;
    $ELEMENT: {
      size:Size
    }
  }
}