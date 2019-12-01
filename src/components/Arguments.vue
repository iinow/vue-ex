<template>
  <div>
    <button @click="call('helll', 'wtf')">ㄱ</button>
  </div>
</template>

<script>
function test (d) {
  console.log('test 실행')
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(d)
}

export default {
  name: 'argu',
  methods: {
    call: function () {
      test('tttt')
      console.log(arguments)
      console.log(arguments[0])
    }
  }
}
</script>
