<template>
  <button class="ant-button">{{ msg }}</button>
</template>
<script lang="ts" setup>
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
<style lang="less" scoped>
.ant-button {
  font-size: 18px;
  color: red;
}
</style>
