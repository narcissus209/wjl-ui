<template>
  <ElButton class="ant-button">{{ msg }}</ElButton>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'
withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    size?: 'large' | 'normal' | 'small' | 'mini'
    msg?: string
  }>(),
  {
    msg: '按钮',
    size: 'normal',
    type: 'primary',
  },
)
</script>
<style scoped>
.ant-button {
  font-size: 18px;
  color: red;
}
</style>
