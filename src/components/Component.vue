<template>
  <my-component></my-component>
</template>

<script>
import Vue from 'vue'
Vue.component('my-component', {
  template: '<div>사용자 정의 컴포넌트입니다.</div>'
})
export default {
  name: 'Component'
}
</script>
